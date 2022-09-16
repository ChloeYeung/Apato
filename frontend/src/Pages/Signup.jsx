// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signupComThunk } from "../redux/company_authSlice";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [credential, setCredential] = useState({
//     username: "",
//     password: "",
//   });

//   const isAuthenticated = useSelector((state) => state.authCom.isAuthenticated);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     isAuthenticated && navigate("/");
//   }, [isAuthenticated, navigate]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCredential((prevValue) => ({
//       ...prevValue,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       <input
//         type="text"
//         placeholder="username"
//         name="username"
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         name="password"
//         onChange={handleChange}
//       />
//       <button
//         onClick={() =>
//           dispatch(signupComThunk(credential)).then(() => navigate("/company/login"))
//         }
//       >
//         Signup
//       </button>
//     </div>
//   );
// }
