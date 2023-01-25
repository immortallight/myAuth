import React from "react";
import { UserAuth } from "../AuthContext";
import { UserContainer } from "./styles/account.styled";

const Account = () => {
  const {
    user: { displayName },
  } = UserAuth();

  return (
    <>
      {displayName ? (
        <UserContainer>
          <div>
            <p>Hi {displayName} ✨ , </p>
            <p>Take a look at your account information</p>
          </div>
        </UserContainer>
      ) : (
        <p style={{ textAlign: "center", transform: "translate(0, 200px)" }}>
          loading...
        </p>
      )}
    </>
  );
};

export default Account;
