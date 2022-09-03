import React from "react";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import {
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
  BoldLink,
} from "./common";
import Auth from "../../utils/auth";
import { AccountContext } from "./context";
import { ADD_USER } from "../../utils/mutations";

export function SignupForm(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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

    //use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <Input
          className="form-input"
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
        <Input
          className="form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
        />
        <Input
          className="form-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
        />
        {/* <Input className="form-input" type="password" placeholder="Confirm Password" /> */}
        <br></br>
        <SubmitButton type="submit">SignUp</SubmitButton>
        <br></br>
        <MutedLink href="#">
          Already have an account?{" "}
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}

//      <input
//             className="form-input"
// placeholder="******"
// name="password"
// type="password"
// id="password"
// value={formState.password}
// onChange={handleChange}
//           />
