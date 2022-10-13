# E-Commerce with Crypto - Apato :moneybag:

- YouTube video that explaining the application: :point_right: https://www.youtube.com/watch?v=41yJwrfiR50

- E-Commerce with crypto payment (MetaMask, ETH)

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

### Setup frontend .env
- 3 variables in .env
`REACT_APP_BACKEND = http://localhost:8000` 
`REACT_APP_FACEBOOK_ID = (YOUR FACEBOOK ID)`
`REACT_APP_GOOGLE_ID=(YOUR GOOGLE ID)`
`HTTPS = true`

### Setup for backend .env
- 4 variables in .env
  `DB_NAME, DB_USERNAME, DB_PASSWORD, JWT_SECRET`

- set up dummy data, run:
  `knex migrate:latest`
  `knex seed:run`

### Setup for smart contract connect
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

- Root Page

<img width="780" alt="root" src="https://user-images.githubusercontent.com/106992258/195071469-0111c98d-1e49-4ada-8c4a-a4a2e977a58b.png">

- Signup

<img width="461" alt="apato_signup" src="https://user-images.githubusercontent.com/106992258/195073121-328e9947-8a92-49e2-b015-9c0e9dc93e67.png">

- Login (basic, FB, GOOGLE)

<img width="776" alt="apato_login" src="https://user-images.githubusercontent.com/106992258/195073141-f99485dd-1af8-4468-8140-e33890df80f4.png">

-Error Page

<img width="655" alt="error" src="https://user-images.githubusercontent.com/106992258/195089062-b80f4c1e-5da2-4038-8666-5d0cabaede64.png">


### Examples Customer side

- Show Service Page

<img width="1083" alt="service" src="https://user-images.githubusercontent.com/106992258/195074269-585ee06a-3cac-445f-bc14-044804c4acf0.png">

- Show Product Page

<img width="1089" alt="Product" src="https://user-images.githubusercontent.com/106992258/195074319-5311f015-b978-47bc-8747-505705cb0c99.png">

- Show Company Page

<img width="1087" alt="company" src="https://user-images.githubusercontent.com/106992258/195074360-07e41ec8-9e08-4f21-bd6f-fa0edd3004ab.png">

- Show Company Details

<img width="934" alt="show_detail_company" src="https://user-images.githubusercontent.com/106992258/195073803-dbdd5a60-3bb6-4a4f-ad00-61aaf73553a2.png">


- Show Product/Service Details

<img width="682" alt="product detail" src="https://user-images.githubusercontent.com/106992258/195073818-3bfd67da-7c86-470e-ac92-6182ca06b1c1.png">

- Cart Page

<img width="1434" alt="cart" src="https://user-images.githubusercontent.com/106992258/195073827-82f8df93-3551-45c1-97db-28b5926f2f46.png">

- Purchase Page

<img width="1113" alt="purchase" src="https://user-images.githubusercontent.com/106992258/195073837-72810e03-ab63-463c-a598-816eaac8aec1.png">

- Successful Payment Page

<img width="890" alt="success_payment" src="https://user-images.githubusercontent.com/106992258/195089140-ef471f72-4443-434c-8c58-39350eae4f32.png">

- Failure Payment Page

<img width="947" alt="fail_payment" src="https://user-images.githubusercontent.com/106992258/195089230-e95d37d9-2361-4531-a0b7-aea2e5844512.png">

- Order Hisory Page

<img width="1092" alt="order_history" src="https://user-images.githubusercontent.com/106992258/195073848-bc05d6cf-86a9-4dbc-87be-9848e6181726.png">



## Examples Company side

- Sales History Page

<img width="1111" alt="saleshostory" src="https://user-images.githubusercontent.com/106992258/195073896-cd91b7d1-5151-4ab2-b7ca-806eacf8507c.png">

- Sales Summary Page

<img width="1096" alt="salessummary" src="https://user-images.githubusercontent.com/106992258/195073909-1855dfcb-908c-44ac-9fbf-731fead5b6c3.png">

- Production Management Page

<img width="1102" alt="pm" src="https://user-images.githubusercontent.com/106992258/195073927-055a88f8-e81a-4675-af93-9f2a08da25af.png">


