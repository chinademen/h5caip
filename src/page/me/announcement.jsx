import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import AppNav from "../../template/appNav"
@withRouter
class Announcement extends Component {
    constructor(props){
        super(props);
        this.handlePush = this.handlePush.bind(this);
    }
    handlePush(link){
        this.props.history.push(link);
    }
    render() {
        const parm = {
            title: "下级公告",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="announcement">
             <AppNav data={parm} />
                <ul>
                    <li onClick={ ()=>{ this.handlePush('/me/announcementDetail') }} >
                        <p>【平台公告】 重庆时时彩,撤单公告 </p>
                        <p> 2018/05/03 </p>
                    </li>
                    <li onClick={ ()=>{ this.handlePush('/me/announcementDetail') }}>
                        <p>【平台公告】 重庆时时彩,撤单公告 </p>
                        <p> 2018/05/03 </p>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Announcement;