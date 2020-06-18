import React, { Component } from "react";
import "./Login-Register.css";
import $ from "jquery";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      usernameEntered: false,
      nextClicked: false,
    };
    this.passwordInput = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.state.usernameEntered === false && this.state.email !== "")
      this.setState({ usernameEntered: true });
  }

  handleEmailInput(e) {
    var entered = e.target.value === "";

    this.setState({
      email: e.target.value,
      usernameEntered: !entered,
    });
  }

  handleEmailEnter(e) {
    if (this.state.usernameEntered && (e.keyCode === 13 || e.keyCode === 9)) {
      e.preventDefault();
      this.setState({ nextClicked: true });
      this.passwordInput.current.focus();
    }
  }

  handlePasswordEnter(e) {
    if (this.state.nextClicked && e.keyCode === 13 && e.target.value !== "") {
      e.preventDefault();
      this.props.verifyLogin(this.state.email, this.state.password);
      // this.setState({ usernameEntered: false, nextClicked: false });
    }
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLoginBtnClick(e) {
    e.preventDefault();
    if (!this.state.nextClicked) this.setState({ nextClicked: true });
    else {
      this.props.verifyLogin(this.state.email, this.state.password);
      // this.setState({ usernameEntered: false, nextClicked: false });
    }
  }

  render() {
    const sentBack = this.props.loginInfo !== "not yet";

    if (this.state.nextClicked && !sentBack) {
      this.passwordInput.current.focus();
    }

    return (
      <div className="Login py-5 px-4">
        <h1>LOGO</h1>
        <br />
        <br />
        <h5 style={{ fontWeight: "600" }}>Log in to your account</h5>
        <br />
        <br />
        <div className="w-100 text-center">Login with Google</div>
        <br />
        <div className="or-separator my-2 w-100 text-center font-grey">
          <span className="px-1">or</span>
        </div>

        <div
          className={
            "font-small-login-reg text-danger" +
            (this.props.loginInfo === "not yet" ? " d-none" : "")
          }
        >
          Please provide a valid username and password.
        </div>
        <br />
        <form className="font-grey font-small-login-reg">
          <label htmlFor="login-email-input" style={{ fontWeight: "500" }}>
            Email Address{" "}
          </label>
          <div className="input-group input-group-sm">
            <input
              type="email"
              className={
                "form-control form-control-sm" +
                (this.state.usernameEntered ? " input-validated" : "") +
                (sentBack && this.props.loginInfo === "username does not exist"
                  ? " border-danger"
                  : "")
              }
              id="login-email-input"
              aria-describedby="emailHelp"
              onChange={(e) => this.handleEmailInput(e)}
              onKeyDown={(e) => this.handleEmailEnter(e)}
              disabled={
                this.state.nextClicked &&
                this.props.loginInfo !== "username does not exist"
              }
              ref={this.inputRef}
            />
            <div
              className={
                "input-group-append" +
                (this.state.nextClicked &&
                this.props.loginInfo !== "username does not exist"
                  ? ""
                  : " d-none")
              }
            >
              <span className="input-group-text email-check">
                <i className="fas fa-check"></i>
              </span>
            </div>

            {/* <small id="emailHelp" className="form-text text-muted">
              This is your email address you used when you registered.
            </small> */}
          </div>

          <div
            className={"form-group" + (this.state.nextClicked ? "" : " d-none")}
          >
            <br></br>
            <label htmlFor="login-password-input" style={{ fontWeight: "500" }}>
              Password
            </label>
            <input
              type="password"
              className={
                "form-control form-control-sm" +
                (sentBack ? " border-danger" : "")
              }
              id="login-password-input"
              onChange={(e) => this.handlePasswordInput(e)}
              ref={this.passwordInput}
            />
          </div>
          <br />
          <br />

          <button
            className="btn btn-primary px-4 font-small-login-reg"
            type={this.state.nextClicked ? "submit" : "button"}
            disabled={
              !this.state.usernameEntered || this.inputRef.current.value === ""
            }
            onClick={(e) => this.handleLoginBtnClick(e)}
          >
            {this.state.nextClicked ? "Log In" : "Next"}
          </button>

          <span className="ml-3 font-small-login-reg">
            Don't have an account?{" "}
            <span
              onClick={() => {
                this.props.switchToRegister();
              }}
              className="text-primary toggle-prompt-text"
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </span>
          </span>
        </form>
      </div>
    );
  }
}
