import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../../query-client-provider";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

// axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      return axios.post(
        `http://127.0.0.1:4000/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
    },
    onSuccess: (successData) => {
      console.log("successData", successData);
      queryClient.invalidateQueries("formDataDetail", {
        refetchActive: true,
      });
    },
  });

  function handleLogin(e) {
    e.preventDefault();
    mutation.mutate({ email, password });
    navigate("/home");
  }

  return (
    <div className="container mt-5">
      <h3>Login Form</h3>
      <div className="row d-flex justify-content-center mt-2">
        <div className="col-md-4">
          <form id="loginform">
            <div className="form-group mt-2">
              <label>
                <strong>Email address</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {/* {emailError} */}
              </small>
            </div>
            <div className="form-group mt-2">
              <label>
                <strong>Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {/* {passwordError} */}
              </small>
            </div>
            <div className="form-group form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Check me out</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={(e) => handleLogin(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
