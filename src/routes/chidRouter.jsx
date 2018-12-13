import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
// import { TabBar } from "antd-mobile";

import Home from "../page/home";
import About from "../page/about";
import AccountCenter from "../page/accountCenter";

class Index extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/accountCenter" component={AccountCenter} />
            </div>
        );
    }
}
export default withRouter(Index);

// class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedTab: "home"
//         };
//     }
//     render() {
//         const dataNavList = [
//             { title:'购彩大厅', unSelected:require('../img/unsetzhuye.svg') ,selected:require('../img/setzhuye.svg') ,key:'home'},
//             { title:'游戏记录', unSelected:require('../img/unsetjilu.svg') ,selected:require('../img/setjilu.svg') ,key:'about'},
//             { title:'账号中心', unSelected:require('../img/unseticonzh.svg') ,selected:require('../img/seticonzh.svg') ,key:'accountCenter'},
//         ]
//         return (
//                 <TabBar
//                     unselectedTintColor="#949494"
//                     tintColor="#33A3F4"
//                     barTintColor="white"
//                 >
//                     {
//                         dataNavList.map((item)=>{
//                             return(
//                                 <TabBar.Item
//                                 title={ item.title }
//                                 key={ item.key }
//                                 icon={
//                                     <img style={{ width: "22px",height: "22px", }} src={item.unSelected } alt=""/>
//                                 }
//                                 selectedIcon={
//                                     <img style={{ width: "22px",height: "22px", }} src={ item.selected } alt=""/>
//                                 }
//                                 selected={this.state.selectedTab === item.key}
//                                 onPress={() => {
//                                     this.setState({
//                                         selectedTab: item.key
//                                     });
//                                     this.props.history.push(`/${item.key}`);
//                                 }}
//                             >
//                             <Route exact path={`/${item.key}`}component={item.key} />
//                             </TabBar.Item>
//                             )
  
//                         })
//                     }
//                 </TabBar>
           
//         );
//     }
// }


