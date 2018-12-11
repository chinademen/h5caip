import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";




@inject("homeStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.selectdate = this.selectdate.bind(this);
    }
    componentDidMount() {
        this.props.homeStore.getList();
    }
    selectdate(date, dateString) {
        console.log(date);
        console.log(dateString);
    }
    // list() {
    //     return (
    //         this.props.homeStore.list.pc_feed_focus &&
    //         this.props.homeStore.list.pc_feed_focus.map(el => {
    //             return <div key={el.group_id}>标题：{el.title}</div>;
    //         })
    //     );
    // }
    render() {
        return (
            <div>
                <p> this is home page </p>
                <Link to="/about">go to About</Link>
                <div>
                    <p>下面是列表数据：</p>
                    {/* {this.list()} */}
                </div>
            </div>
        );
    }
}

export default Home;
