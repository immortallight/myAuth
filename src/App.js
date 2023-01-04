// import "./logo.svg"
import "./App.css";
import React from "react";
import Home from "./Home";
// import Login from "./Login";
// import SignUp from "./Signup";
import { AuthProvider } from "./AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <p>tests !!!</p>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />

            {/* <Route exact path="/login" element={<Login />} /> */}
            {/* <Route exact path="/signup" element={<SignUp />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
// It looks like you are seeing a warning related to the process.binding('http_parser') method being deprecated. This warning appears because this method has been deprecated and will be removed in a future version of Node.js. You can use the --trace-deprecation flag to see where the warning was created.

// You are also seeing warnings related to multiple modules with names that only differ in casing. This can happen when you have files or directories with the same name but different capitalization in your project. For example, if you have both a pro.js and a pro.JS file, this can cause issues when building your project. To fix this, you should ensure that all file and directory names within your project use the same capitalization.

// I hope this information is helpful! Let me know if you have any other questions.

// I am going try it out and give you feedback soon alright?
// Sure thing! I'm here to help, so please don't hesitate to ask if you have any other questions or need further assistance. I'll be here when you're ready.

export default App;
