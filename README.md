## Setting up the development environment

1. Run npm install in home directory
2. Run npm install inside `/client` directory

## Running the project

1. First start the server by the command `npm start` in home directory
2. Then start the client side server by moving to `/client` and by the command `npm start`
3. Execute the above two steps in the specified order or you will get `proxy error`

#### Testing Proxy:

1. After the react server starts(step 2) open browser devtools and move to networks and check the response for `/proxytesting`
the response should be `Proxy Success!`