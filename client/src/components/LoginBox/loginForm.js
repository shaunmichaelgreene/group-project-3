import React from "react";
import { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
  BoldLink,
} from "./common";
import { AccountContext } from "./context";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export function LoginForm(props) {
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

  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <Input
          className="form-input"
          placeholder="Your email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <Input
          className="form-input"
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <br></br>
        <MutedLink href="#">Forgot Your Password</MutedLink>
        <br></br>

        <SubmitButton type="submit">SignIn</SubmitButton>
        <br></br>
      </FormContainer>
      {error && <div>Login failed!</div>}
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
