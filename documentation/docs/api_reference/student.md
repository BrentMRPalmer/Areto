# Student

Describes the endpoints available for the `Student` model.

## Register Student

Registers a new student in the database.

- **Method**: <code>POST</code>
- **Endpoint**: <code>/api/students</code>
- **Content-Type**: <code>application/json</code>
- **Request Body**: <pre> <code> {
    "firstName": "John",
    "lastName": "Doe",
    "username": "johndoe123",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "institution": "University of Example"
} </code> </pre>

## Enrol in a Course

Enrols a student into an existing course.

This will need to be changed to handle course section in some way.

- **Method**: <code>POST</code>
- **Endpoint**: <code>/api/students/enroll</code>
- **Content-Type**: <code>application/json</code>
- **Request Body**: <pre> <code> {
  "studentId": "67c4e347ff68ffcf603c27b0",
  "courseId": "67c4f14d6780e735508b2a21"
} </code> </pre>
