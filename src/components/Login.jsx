import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const pwdRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any custom logic here if needed
    navigate("/dashboard"); // Redirect to the dashboard page
  };

  return (
    <main>
      <div className="text-center">
        {errMsg && (
          <p
            className="mb-4 text-center font-semibold text-red-500"
            aria-live="assertive"
          >
            {errMsg}
          </p>
        )}
      </div>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6 text-center">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4 bg-gray-800 p-8 rounded-lg"
        >
          <div className="flex items-center border-b-2 border-gray-500 py-2">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-500 py-2">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={pwdRef}
              autoComplete="off"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Need an Account?{" "}
          <a href="/register" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;
// import React, { useRef, useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const LOGIN_URL = "http://localhost:3000/api/auth/login"; // Update the login endpoint URL

// const Login = () => {
//   const navigate = useNavigate();
//   const { setAuth } = useContext(AuthContext);
//   const userRef = useRef();
//   const pwdRef = useRef();
//   const [errMsg, setErrMsg] = useState("");

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const user = userRef.current.value;
//     const pwd = pwdRef.current.value;

//     try {
//       const response = await axios.post(LOGIN_URL, {
//         username: user,
//         password: pwd,
//       });
//       const accessToken = response?.data?.token;
//       const roles = response?.data?.roles;

//       setAuth({ user, roles, accessToken });

//       navigate("/"); // Redirect to home on successful login
//     } catch (err) {
//       console.error("Login error:", err);
//       if (err.response) {
//         if (err.response.status === 400) {
//           setErrMsg("Missing username or password");
//         } else if (err.response.status === 401) {
//           setErrMsg("Unauthorized");
//         } else {
//           setErrMsg("Login failed. Please try again.");
//         }
//       } else {
//         setErrMsg("No server response. Please try again later.");
//       }
//     }
//   };

//   return (
//     <main>
//       <div className="text-center">
//         {errMsg && (
//           <p
//             className="mb-4 text-center font-semibold text-red-500"
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//         )}
//       </div>
//       <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
//         <h1 className="text-xl font-bold mb-6 text-center">Sign In</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-sm space-y-4 bg-gray-800 p-8 rounded-lg"
//         >
//           <div className="flex items-center border-b-2 border-gray-500 py-2">
//             <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-2" />
//             <label htmlFor="username" className="sr-only">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               ref={userRef}
//               autoComplete="off"
//               required
//               className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               placeholder="Username"
//             />
//           </div>
//           <div className="flex items-center border-b-2 border-gray-500 py-2">
//             <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-2" />
//             <label htmlFor="password" className="sr-only">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               ref={pwdRef}
//               autoComplete="off"
//               required
//               className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               placeholder="Password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Need an Account?{" "}
//           <a href="/register" className="text-blue-500 hover:text-blue-700">
//             Sign Up
//           </a>
//         </p>
//       </section>
//     </main>
//   );
// };

// export default Login;
