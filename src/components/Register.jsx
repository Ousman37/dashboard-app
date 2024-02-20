import React, { useState, useEffect, useRef } from "react";

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const handleMatchPwdChange = (e) => {
    setMatchPwd(e.target.value);
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6 text-center"> Sign Up</h1>
        <form className="w-full max-w-sm space-y-4 bg-gray-800 p-8 rounded-lg">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-bold mb-2 text-white"
            >
              Username:
              <FontAwesomeIcon
                icon={validName ? faCheck : faTimes}
                className={`ml-2 ${
                  validName ? "text-green-500" : "text-red-500"
                }`}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={handleUserChange}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName
                  ? "text-sm text-red-400 mt-2"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />4 to 24 characters. Must
              begin with a letter. Letters, numbers, underscores, hyphens
              allowed.
            </p>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2 text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              onChange={handleEmailChange}
              value={email}
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              className={`mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
                emailFocus ? "focus:ring-blue-500" : ""
              }`}
            />
            {emailFocus && (
              <p className="text-sm text-gray-400 mt-1">
                Please enter a valid email address.
              </p>
            )}
            {!validEmail && !emailFocus && (
              <p className="text-sm text-red-400 mt-1">
                Please enter a valid email address.
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2 text-white"
            >
              Password:
              <FontAwesomeIcon
                icon={validPwd ? faCheck : faTimes}
                className={`ml-2 ${
                  validPwd ? "text-green-500" : "text-red-500"
                }`}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={handlePwdChange}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? "text-sm text-red-400 mt-2" : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />8 to 24 characters. Must
              include uppercase and lowercase letters, a number and a special
              character.
            </p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirm_pwd"
              className="block text-sm font-bold mb-2 text-white"
            >
              Confirm Password:
              <FontAwesomeIcon
                icon={validMatch ? faCheck : faTimes}
                className={`ml-2 ${
                  validMatch ? "text-green-500" : "text-red-500"
                }`}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={handleMatchPwdChange}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch
                  ? "text-sm text-red-400 mt-2"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
          </div>

          {/* Submit Button */}
          <button
            disabled={!validName || !validPwd || !validMatch || !validEmail}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>

          <p className="mt-2 text-center text-sm text-gray-300">
            Already registered?{" "}
            <a href="/login" className="text-blue-400 hover:text-blue-500">
              Sign In
            </a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Register;
