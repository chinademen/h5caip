import React, { Component } from "react";
import "../less/login.scss"

class Login extends Component{
    render(){
        return(
            <div className="login"> 
                <div className="loginMain">
                    <div className="loginMainLogo"> </div>
                    <div className="loginForm">
                        <div className="loginUserName">
                            <span></span>
                            <input type="text" placeholder="账号" />
                        </div>
                        <div className="loginPassword">
                            <span></span>
                            <input type="text" placeholder="密码" />
                        </div>
                        <div className="loginBtn">
                            登  录
                        </div>
                        <div className="loginTip">
                            <span> 忘记密码? </span>
                            <span> <b></b> 联系客服 </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
