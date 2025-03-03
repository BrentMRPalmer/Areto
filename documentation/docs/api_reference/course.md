# Course

Describes the endpoints available for the `Course` model.

## Create a Course

Creates a new course in the database.

- **Method**: <code>POST</code>
- **Endpoint**: <code>/api/courses</code>
- **Content-Type**: <code>application/json</code>
- **Request Body**: <pre> <code> {
    "code": "CSI2132",
    "institution": "uOttawa",
    "name": "Databases"
} </code> </pre>