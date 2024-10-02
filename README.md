To run

1. Run `npm install`
2. Run `npm run dev`

To test

1. Run in a new terminal `curl http://localhost:6000/api/posts`
2. Run in a new terminal `curl -X POST -H "Content-Type: application/json" --data '{"title": "New Post","body": "This is a new post"}' http://localhost:6000/api/posts`
