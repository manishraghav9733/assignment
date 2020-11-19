import React, { useState, useEffect } from "react";
import { message, Icon, Input, Button, Divider } from "antd";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../src/actions/authActions";
import history from "./history";
import "antd/dist/antd.css";

import "./app.css";

const Login = props => {
  const [isLoged, setIsLoged] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //console.log(props.userAuth);

  useEffect(() => {
    {
      /*LIST OF USERS */
    }
    localStorage.setItem("username1", "manish");
    localStorage.setItem("password1", "1234");
    {
      /*LIST OF USERS */
    }
  }, []);

  const handleLogin = () => {
    if (
      ((userName === localStorage.getItem("username1")) === true &&
        (password === localStorage.getItem("password1")) === true) ||
      ((userName === localStorage.getItem("username2")) === true &&
        (password === localStorage.getItem("password2")) === true)
    ) {
      props.loginUser();
      //document.location.assign("/home");
      history.push("/home");
      message.success("login sucessfully");
    } else {
      message.warning("please enter valid user");
      //props.logoutUser();
    }
    if (props.userAuth.isSignedIn) {
      history.push("/home");
    }
  };

  const onUserNameChange = e => {
    //console.log(e.target.value);
    setUserName(e.target.value);
  };

  const onPassChange = e => {
    //console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="container" style={{ margin: "15% auto" }}>
        <div
          style={{
            maxWidth: "500px",
            margin: "0px auto",
            padding: "30px",
            borderRadius: "5px",
            background: "#ffff",
            boxShadow: " 1px 0 35px 2px #777"
          }}
        >
          <div style={{ textAlign: "center" }}>
           <h1>Login</h1>
          </div>
          <div style={{ margin: "30px" }}>
            <Input
              onChange={onUserNameChange}
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              className="input1"
              style={{
                background:'#eee !important'
              }}
            />
          </div>
          <div style={{ margin: "30px" }}>
            <Input
              onChange={onPassChange}
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              className="input2"
            />
          </div>
          <div style={{ textAlign: "center",width:'50% !important' }}>
            <Button
              onClick={handleLogin}
              type="primary"
              className="login-form-button"
              style={{ width:'400px !important',
              color:'white',

            }}
            >
              <Icon type="login" />
              Log in
            </Button>
          </div>
          <Divider>OR</Divider>
                    <div style={{ textAlign: "center",width:'50% !important' }}>
            <Button
              onClick={handleLogin}
              type="success"
              className="login-form-button"
              style={{ width:'400px !important',
              background:"#00ad45",
              color:'white',

            }}
            >
              <Icon type="user" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { userAuth: state.userAuth };
};

export default connect(mapStateToProps, { loginUser, logoutUser })(Login);
