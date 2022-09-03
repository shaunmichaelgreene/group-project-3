import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "../components/LoginBox/loginForm";
import { SignupForm } from "../components/LoginBox/signupForm";
import { AccountContext } from "../components/LoginBox/context";

const BoxContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 028);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -300px;
  left: -100px;
  background-color: #fbab7e;
  background-image: linear-gradient(
    62deg,
    #fbab7e 0%,
    #f7ce68 50%,
    #ffffff 900%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 8px;
`;

const InnerContainer = styled.div`
  width: 95%;
  display: flex;
  flex-display: column;
  padding: 0 1.84em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setActive("signup");
    setTimeout(() => {}, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setActive("signin");
    setTimeout(() => {}, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign in to Continue</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign up to Continue</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>

    // <main className="flex-row justify-center mb-4">
    //   <div className="col-12 col-md-6">
    //     <div className="card">
    //       <h4 className="card-header">Login</h4>
    //       <div className="card-body">
    //         <form onSubmit={handleFormSubmit}>
    //           <input
    //             className="form-input"
    //             placeholder="Your email"
    //             name="email"
    //             type="email"
    //             id="email"
    //             value={formState.email}
    //             onChange={handleChange}
    //           />
    //           <input
    //             className="form-input"
    //             placeholder="******"
    //             name="password"
    //             type="password"
    //             id="password"
    //             value={formState.password}
    //             onChange={handleChange}
    //           />
    //           <button className="btn d-block w-100" type="submit">
    //             Submit
    //           </button>
    //         </form>
    //         {error && <div>Login failed!</div>}
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Login;
