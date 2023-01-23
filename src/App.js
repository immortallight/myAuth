import './App.css';
import React from "react"
import { AuthContextProvider } from './AuthContext';
import Account from "./pages/Account"
import Home from "./pages/Home"
import Signin from "./pages/Singin"
import Navbar from './components/Navbar';
import Protected from "./components/Protected"
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <AuthContextProvider>
          <Navbar />


          <Routes>

            <Route exact path="/" element= {<Home />} />
            <Route exact path="/account" element={<Protected><Account /></Protected>} />
            <Route exact path="/signin" element={<Signin />} />

          </Routes>
          </AuthContextProvider>
      </div>
  );
}


export default App;
