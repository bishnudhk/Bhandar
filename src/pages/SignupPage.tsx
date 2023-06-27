
import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Store } from "../Store";
import { useSignupMutation } from "../hooks/userHooks";
import { getError } from "../util";
import { ApiError } from "../types/ApiError";
import { useToasts } from "react-toast-notifications";
import { Container, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

export default function SignupPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const { mutateAsync: signup, isLoading } = useSignupMutation();

  const { addToast } = useToasts();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    
    const inputValue = e.target.value;
    
    const alphabeticRegex = /^[a-zA-Z\s]*$/;

    if (alphabeticRegex.test(inputValue)) {
      setName(inputValue);
    }
    
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      addToast("password do not match", { appearance: "error" });

      return;
    }
    try {
      // console.log(name);
      const data = await signup({
        name,
        email,
        password,
      });
      // console.log(data);
      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect);
    } catch (err) {
      addToast(getError(err as ApiError));
    }
  };

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>

        <div className="mb-3">
          Already have an account?{" "}
          <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
        </div>
      </Form>
    </Container>
  );
}
