import React from "react";
import { UserAuth } from "../AuthContext";
import { UserContainer } from "./styles/account.styled";

const Account = () => {
  const {
    user: { email, displayName, photoURL },
  } = UserAuth();

  return (
    <>
      {displayName ? (
        <UserContainer>
          <div className="user-onboarding">
            <h2>
              Hi <span>{displayName} ✨,</span>{" "}
            </h2>
            <p>Take a look at your account information</p>
          </div>
          <div className="user-profile">
            <div className="photo-wrapper">
              <img src={photoURL} alt={`${displayName}'s photo`} />
            </div>
            <p className="username">{displayName}</p>
            <p className="email-address">{email}</p>
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
