# Apato 
- e-commerce with cypto payment (MetaMask, ETH)

### Install frontend Packages
`cd frontend`
`npm install  @reduxjs/toolkit react-redux axios bootstrap chroma-js jquery jwt-decode react-bootstrap react-dom react-facebook-login react-google-login react-icons react-reveal react-router-dom react-scripts react-select redux-logger sass web-vitals web3`

### Install backend Packages
`cd backend`
` npm install bcrypt body-parser cors dotenv express express-fileupload file-type jsonwebtoken jwt-decode knex morgan passport passport-jwt pg socket.io`

### setup frontend login & backend connect 
- 3 variables in .env
`REACT_APP_BACKEND = http://localhost:8000` 
`REACT_APP_FACEBOOK_ID = (YOUR FACEBOOK ID)`
`REACT_APP_GOOGLE_ID=(YOUR GOOGLE ID)`
`HTTPS = true`

### setup for backend DB connect
- 4 variables in .env
  `DB_NAME, DB_USERNAME, DB_PASSWORD, JWT_SECRET`

- set up dummy data, run:
  `knex migrate:latest`
  `knex seed:run`

### setup for smart contract connect
- change direction to: 
`/smart_contract/deploy.js'`

- in /smart_contract/deploy.js replace with your own Mnemonic and blockchain APIs

- deploy the contract
`node deploy.js`

- copy both the abi and the contract deployed address and paste it in: 
`/frontend/src/smart_contract/purchase.js`

- remember to connect MetaMask with localhost:3000  

### Start the App:
`npm start`
