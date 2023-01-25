import React from "react";
import { UserAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  height: 60px;
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 22px;
  }

  button {
    width: 100px;
    height: 40px;
    padding: 5px 9px;
    margin: auto 0;
    border: none;
    color: #fff;
    font-weight: bold;
    background: #465fec;
    border-radius: 5px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);

    :hover {
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Header>
      <h1> Firebase Google Auth.</h1>
      {user ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </Header>
  );
};

export default Navbar;
