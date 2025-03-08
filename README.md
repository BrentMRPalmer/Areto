# Areto

[Description]

## Dev Environment Setup Steps

1. Clone the repository
2. Navigate to the `/documentation` directory
  - Optional: create a python virtual environment using `python3 -m venv venv`, and activate it with `source venv/bin/activate`
3. Open `/documentation/README.md`, and follow the steps listed to build and serve the documentation
4. Follow the instructions within the hosted docs to set up the frontend and backend of the project

## Environment Variables

The project needs two `.env` files to be made- one under `/frontend`, and one in `/backend`:

#### Backend .env values

```
MONGO_URI=cluster_uri (retrieve URI from MongoDB)
PORT=3000 (the port that you want the server to run on)
```

#### Frontend .env values

```
VITE_SERVER_PORT=3000 (should reflect server port)
```