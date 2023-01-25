import React from "react";
import { UserAuth } from "../AuthContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  .welcome-text {
    font-size: 40px;
    text-align: center;
    margin-top: 200px;
  }

  span {
    color: #251351;
    font-weight: bold;
  }
`;

const Home = () => {
  const {
    user: { displayName },
  } = UserAuth();

  return (
    <React.Fragment>
      {displayName ? (
        <HomeContainer>
          <p className="welcome-text">
            Hey <span>{displayName}</span>, <br /> You are currently signed in.
          </p>
          <p style={{ textAlign: "center" }}>
            Visit your awesome <Link to="/account">profile</Link>
          </p>
        </HomeContainer>
      ) : (
        <p style={{ textAlign: "center", transform: "translate(0, 200px)" }}>
          You need to login
        </p>
      )}
    </React.Fragment>
  );
};

export default Home;
