import React, { Component } from "react";

class AppNav extends Component{
    render(){
        const { title,classNameLeft,classNameRight,show } = this.props.data
        return(
            <div className="appNav"> 
                <span className="navBack">
                    <b onClick={()=>{window.history.go(-1)}} className={show?'show':'hide'}></b>
                </span>
                <h3 className="navTitle"> { title } </h3>
                <span className="navBtn"> 
                    <b className={ classNameRight }></b>
                    <b className={ classNameLeft }></b>
                </span>
            </div>
        )
    }
}

export default AppNav;