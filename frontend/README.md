# NFT Minting DApps Frontend

## Requirement

- Node 18 or higher.
- You will need to start the [backend server](../server) first.

## How to run the DApp

1. Go to [.env](./.env), change the contract address and backend url first.
   - Contract address should be receiving by [deploy the contract](../contract) following [the instruction](../contract//README.md).
   - The backend server should be deployed and fill in the ip address of the endpoint.
2. Run `npm install` in the terminal.
3. Run `npm start` in the terminal.
4. The frontend website should be started in http://localhost:3001.
   - Change the port in [`vite.config.js`](./vite.config.js) if you wish to.
