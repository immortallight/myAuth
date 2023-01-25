import styled from "styled-components";

export const UserContainer = styled.section`
  height: 70vh;
  display: flex;
  justify-content: space-around;
  margin-top: 70px;

  .user-onboarding {
    h2 {
      font-size: 40px;
    }

    span {
      color: #251351;
    }
  }

  .user-profile {
    width: 300px;
    height: 240px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);

    p {
      padding: 0 10px;
    }

    .photo-wrapper {
      background: #251351;
      height: 80px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      padding: 10px 0 6px 16px;
      margin-bottom: 80px;

      img {
        border-radius: 50%;
        margin-top: 35px;
        border: 3px solid #fff;
      }
    }
  }
`;
