# NFT Metadata Backend

## Requirement

- Node 18 or higher
- Prepare a VM to deploy the server.
- Prepare the frontend ip address.

## Start the server

1. Setup the cors strategy.
   Change or add the url in the following section in [`index.js`](./index.js)
   ```js
   app.use(
     cors({
       origin: ["http://localhost:3001"],
       methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
       allowedHeaders: ["Content-Type", "Authorization"],
     })
   );
   ```
   Only the frontend deployed on the specified IP address would be allowed to use the backend api.
2. Run `npm install` in the terminal.
3. Run `node index.js` in the terminal.

## Method Explanation

1. Save NFT Metadata

   - Method: `POST`
   - Path: `/token/:id`
   - This method will save all the content in the request body. Please put the NFT metadata in the request body.

   ### Metadata format

   See metadata standards on [OpenSea](https://docs.opensea.io/docs/metadata-standards).

   ```json
   {
   "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
   "external_url": "https://openseacreatures.io/3",
   "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
   "name": "Dave Starbelly",
   "attributes": [ ... ] // Other attributes please refer to the documents on OpenSea.
   }
   ```

2. Get NFT Metadata
   - Method: `GET`
   - Path: `/token/:id`
   - This method will automatically be called by OpenSea. It will return the full content from the previous save method.

※This path should be use on the ERC1155 contract. `setURI` on the contract and specify it to be `{ServerBaseUrl}/token/{id}`. Please follow the format carefully or the metadata won't be shown on any NFT marketplace.
