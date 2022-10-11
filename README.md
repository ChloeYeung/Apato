# E-Commerce with Crypto - Apato :moneybag:

- e-commerce with crypto payment (MetaMask, ETH)

- Functionailities

:cloud: Auth: Basic Login, Facebook Login, Google Login, Logout, Signup

:cloud: Customer Side: Show Product/Service/Company, Sort by price and latest, Search Bar, Purchase with test Ethereum, Lucky Draw, Order History

:cloud: Company Side: Product Management, Order History, Order Summary

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

### Login Account
- Company: :bust_in_silhouette: ac: com1@com1 :key: pw:com1
- Customer: :bust_in_silhouette: ac: cus1@cus1 :key: pw:cus1
- (more accounts please find on /backend/seeds)

### Examples Basic page
<img width="780" alt="root" src="https://user-images.githubusercontent.com/106992258/195071469-0111c98d-1e49-4ada-8c4a-a4a2e977a58b.png">

<img width="776" alt="Screenshot 2022-10-11 at 6 55 04 PM" src="https://user-images.githubusercontent.com/106992258/195072328-2e9b4f31-6a5a-4eb8-b93d-1d64640ea02b.png">

<img width="461" alt="Screenshot 2022-10-11 at 6 55 23 PM" src="https://user-images.githubusercontent.com/106992258/195072339-ea2e2065-0c95-4c18-a1bf-b6d8f878204c.png">

### Examples Customer side

<img width="1096" alt="product" src="https://user-images.githubusercontent.com/106992258/195071623-a9806bd1-dee9-498c-bfb6-475d7061d178.png">


<img width="1088" alt="service" src="https://user-images.githubusercontent.com/106992258/195071649-0985b18d-8d03-49eb-babe-bd2cf3b82e09.png">


<img width="1087" alt="company" src="https://user-images.githubusercontent.com/106992258/195071661-a38d5088-e0ab-43e8-9366-2c3d23d56f9f.png">




<img width="934" alt="Screenshot 2022-10-11 at 6 41 04 PM" src="https://user-images.githubusercontent.com/106992258/195071738-bb254380-5387-4d4b-9814-d2ef1059186a.png">






<img width="682" alt="product detail" src="https://user-images.githubusercontent.com/106992258/195071758-1ae484c0-a4b7-4a1e-acca-ce5ade77e45b.png">


<img width="1434" alt="Screenshot 2022-10-11 at 6 53 49 PM" src="https://user-images.githubusercontent.com/106992258/195071973-cdaf7969-b661-40a7-aa87-b9712683fa55.png">


<img width="1092" alt="Screenshot 2022-10-11 at 6 41 47 PM" src="https://user-images.githubusercontent.com/106992258/195071991-b287011a-096c-474f-98aa-b4f4254b2713.png">


## Example Company side
<img width="1111" alt="saleshostory" src="https://user-images.githubusercontent.com/106992258/195072113-9d09bde4-8397-4083-881a-8ae360886da9.png">


<img width="1096" alt="salessummary" src="https://user-images.githubusercontent.com/106992258/195072120-f439f43c-f00e-499d-8cc7-68fcbcdf246f.png">

<img width="1102" alt="pm" src="https://user-images.githubusercontent.com/106992258/195072138-b62e5464-4ffb-4f9a-836f-744a328eb800.png">







