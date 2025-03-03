# Student Endpoints

The following are the current endpoints for the `Student` model.

## Register Student

Registers a new student in the database.

- **Method**: `POST`
- **Endpoint:** `/api/students/register`
- **Content-Type:** `application/json`
- **Request Body:** ```
  {
    "firstName": "John",
    "lastName": "Doe",
    "username": "johndoe123",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "institution": "University of Example"
  }
  ```

