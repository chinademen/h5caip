import React, { Component } from "react";
import AppNav from "../../template/appNav"
class About extends Component {
    render() {
        const parm = {
            title: "客服中心",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="about">
                  <AppNav data={parm} />
            </div>
        );
    }
}
export default About;