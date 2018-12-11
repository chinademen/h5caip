import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import "../../less/lottery.css"
class SSC extends Component {
    render() {
        const tabs = [
            { title: "彩种" },
            { title: "开奖" },
            { title: "玩法说明" }
        ];

        return (
            <div>
                <Tabs tabs={tabs} initialPage={0}>
                    <div className="ssc_number"> 
                        <ul>
                            <li> 
                               <p> 20181211-1115 </p>  
                               <p> 92190 </p>  
                            </li>
                            <li> 
                                <p> 20181211-1115 </p>
                                <p>  00:00:24 </p>
                            </li>
                        </ul>
                    </div>
                    <div> 2 </div>
                    <div> 3 </div>
                </Tabs>
            </div>
        );
    }
}

export default SSC;
