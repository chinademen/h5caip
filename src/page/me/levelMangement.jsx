import React, { Component } from "react";
import { SearchBar } from 'antd-mobile';
import AppNav from "../../template/appNav"
class AppTabBle extends Component {
    render() {
        return (
            <div className="appTabBle">
                <table>
                    <thead>
                        <tr>
                            {
                                this.props.data.tHead.map((item, i) => {
                                    return (
                                        <th key={i}>
                                            {item}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.tBody.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {item.userName} </td>
                                        <td> {item.time} </td>
                                        <td> {item.status} </td>
                                        <td> {item.money} </td>
                                        <td> {item.set} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        );
    }
}

class LevelMangement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableList: {
                tHead: ["用户名", "注册时间", "状态", "余额(元)", "操作"],
                tBody:[
                    { userName:"okra",time:"2018-12-12 15:35:36",status:"正常",money:"88.88",set:"设置" },
                    { userName:"okra",time:"2018-12-12 15:35:36",status:"正常",money:"88.88",set:"设置" },
                    { userName:"okra",time:"2018-12-12 15:35:36",status:"正常",money:"88.88",set:"设置" },
                    { userName:"okra",time:"2018-12-12 15:35:36",status:"正常",money:"88.88",set:"设置" },
                ]
            }
        }
    }
    render() {
        const parm = {
            title: "下级管理",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="levelMangement">
             <AppNav data={parm} />
                <SearchBar placeholder="搜索" maxLength={8} />
                <AppTabBle data={this.state.tableList} />
            </div>
        )
    }
}

export default LevelMangement;