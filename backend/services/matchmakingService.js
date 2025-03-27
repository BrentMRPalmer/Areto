import { Student } from "../models/index.js";

// Retrives the data for a specific student
async function getStudent(userId) {
    try {
        const student = await Student.findById(userId);

        if (!student) {
            throw new Error('Student not found');
        }

        return student;
    } catch (error) {
        console.error("Error getting student:", error);
        throw error;
    }
}

// Computes the Euclidean distance between two students based on GPA and big five personality traits
const computeEuclideanDistance = async (userIdA, userIdB) => {
    try {
        const studentA = await getStudent(userIdA);
        const studentB = await getStudent(userIdB);

        let distance = 0;

        const dimensions = ["gpa", "extraversion", "emotionality", "conscientious", "agreeableness", "openness"];

        for (const dimension of dimensions) {
            if (studentA[dimension] == null ||
                studentB[dimension] == null || 
                typeof studentA[dimension] !== "number" ||
                typeof studentB[dimension] !== "number" 
            ) {
                throw new Error(`Missing or invalid dimension ${dimension} for at least one of the students ${studentA} ${studentB}.`)
            }

            distance += Math.pow(studentA[dimension] - studentB[dimension], 2);
        };

        return Math.sqrt(distance);
    } catch (error) {
        console.error("Error computing Euclidean distance:", error);
        throw error;
    }
};

// Computes the Euclidean distance between one student and a number of other students
const computeDistances = async (currentStudentId, otherStudentIds) => {
    try {
        const distances = {};

        for (const studentId of otherStudentIds) {
            distances[studentId] = await computeEuclideanDistance(currentStudentId, studentId)
        };

        return distances;
    } catch (error) {
        console.error("Error computing Euclidean distances:", error);
        throw error;
    }
}

// Min-Max Normalization
function minMaxNormalization(min, max, current) {
    return (current - min)/(max - min)
}

// Normalizes the distances into a similarity scale and sorts them
export const normalizeAndSort = async (currentStudentId, otherStudentIds) => {
    try {
        const distances = await computeDistances(currentStudentId, otherStudentIds);

        const values = Object.values(distances);
        const minDistance = Math.min(...values);
        const maxDistance = Math.max(...values);

        const scores = {};

        for (const studentId of otherStudentIds) {
            scores[studentId] = 10 * (1 - minMaxNormalization(minDistance, maxDistance, distances[studentId]))
        };

        const sortedScores = Object.entries(scores).sort(([, valueA], [, valueB]) => valueB - valueA);

        return sortedScores;
    } catch (error) {
        console.error("Error computing Euclidean distances:", error);
        throw error;
    }
}