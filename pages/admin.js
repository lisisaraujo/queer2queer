import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import styled from "styled-components";
import Header from "../components/Header";

export default function Account() {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "authenticated") {
    return (
      <>
        <Header>Admin</Header>
        <StyledAdminPage>
          <div className="home">
            <p>Welcome {session.user.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        </StyledAdminPage>
      </>
    );
  } else {
    return (
      <>
        <Header>Admin</Header>
        <StyledAdminPage>
          <div className="sign-in">
            <p>You are not signed in</p>
          </div>
        </StyledAdminPage>
      </>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};

const StyledAdminPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border-style: solid;
  border-color: blue; */
  color: whitesmoke;
  margin: 10% 40%;
  /* padding: 100px; */
  font-size: 2em;
  button {
    width: 80px;
    height: 40px;
    align-self: center;
    background-color: rgba(1, 72, 224, 0.7);
    box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75);

    color: whitesmoke;
    border-radius: 10px;
    margin-bottom: 10%;
    border-style: none;
    margin-top: 30px;
    &:hover {
      box-shadow: 0px 0px 18px 2px rgba(125, 125, 125, 0.75);
    }
  }
`;
