import React, { Component } from "react";
import { List, Radio } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import AppNav from "../../template/appNav"
const RadioItem = Radio.RadioItem;
@withRouter
class TopUp extends Component {
    state = {
        value: 0,
    }
    constructor(props) {
        super(props);
        this.handlePush = this.handlePush.bind(this);
    }
    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };
    handlePush(link) {
        this.props.history.push(link);
    }
    render() {
        const { value } = this.state;
        const data = [
            { value: 0, label: '亚付快捷' },
            { value: 1, label: '亚付快捷' },
        ];
        const parm = {
            title: "链接开户",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div>
                <AppNav data={parm} />
                <List renderHeader={() => '选择支付方式'}>
                    {data.map((i, e) => (
                        <div className="list" key={e}>
                            <div className="icon"><img src={require('../../img/zhifubao.jpg')} alt="" /></div>
                            <div className="radioItem">
                                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}
                                </RadioItem>
                            </div>
                        </div>
                    ))}
                </List>
                <div className="nextBtn" onClick={() => { this.handlePush('/me/announcementDetail') }}>下一步</div>
            </div>
        );
    }
}
export default TopUp;