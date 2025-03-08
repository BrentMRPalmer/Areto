# Quick Start

Execute the following commands to get the application running.

## Set up .env files

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

## Run Frontend Server

Run the command `npm run dev` in the `frontend` folder.

## Run Backend Server

Run the command `npm start` in the `backend` folder.
