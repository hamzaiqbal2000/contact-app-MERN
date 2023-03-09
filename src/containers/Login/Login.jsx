import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
        <h3>Login Form</h3>
        <div className="row d-flex justify-content-center mt-2">
          <div className="col-md-4">
            <form id="loginform" >
              <div className="form-group mt-2">
                <label><strong>Email address</strong></label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                //   onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {/* {emailError} */}
                </small>
              </div>
              <div className="form-group mt-2">
                <label><strong>Password</strong></label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                //   onChange={(event) => setPassword(event.target.value)}
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
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
