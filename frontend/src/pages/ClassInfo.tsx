import { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BE_SERVER_PORT } from "@/constants";
import { Class, Section } from "@/types/data";

import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ClassInfo = () => {
  const [course, setCourse] = useState<Class>();
  const [sections, setSections] = useState<Section[]>([]);

  const navigate = useNavigate();
  const auth = useAuth();

  const params = useParams();

  useEffect(() => {
    // Get class by code
    fetch(
      `http://localhost:${BE_SERVER_PORT}/api/courses?ids=${params.courseId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCourse(data[0]);
      });

    // Get class sections
    fetch(
      `http://localhost:${BE_SERVER_PORT}/api/sections?courseIds=${params.courseId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSections(data);
      });
  }, []);

  const enrollSection = async (section) => {
    const response = fetch(
      `http://localhost:${BE_SERVER_PORT}/api/students/enroll`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: auth.user?._id,
          sectionId: section._id,
        }),
      }
    );
    console.log(response);
  };

  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">
        {course?.code}: {course?.name}
      </h1>
      <div className="flex flex-row justify-between mb-8">
        <h3>
          <b>Term:</b> Winter 2025
        </h3>
        <h3>
          <b>Institution:</b> {course?.institution}
        </h3>
      </div>
      <Suspense fallback={<h1>Loading</h1>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
          {sections.map((section) => (
            <Card>
              <CardHeader>
                <CardTitle>
                  Section {section.code}: {section.professor}
                </CardTitle>
                <CardDescription>
                  Enrolled Students: {section.numStudents}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p></p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  className="bg-gray-900 text-white cursor-pointer hover:bg-gray-700"
                  onClick={() => enrollSection(section)}
                >
                  Enroll
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default ClassInfo;
