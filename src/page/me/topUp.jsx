import React, { Component } from "react";
import { List, Radio, Flex, WhiteSpace } from 'antd-mobile';
const RadioItem = Radio.RadioItem;
class About extends Component {
    state = {
        value: 0,
    };
    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };
    render() {
        const { value, value2, value3, value4 } = this.state;
        const data = [
            { value: 0, label: '亚付快捷' },
            { value: 1, label: '亚付快捷' },
        ];
        return (
            <div>
                <List renderHeader={() => '选择支付方式'}>
                    {data.map(i => (
                        <div className="list">
                            <div className="icon"><img  src={ require('../../img/zhifubao.jpg') } alt=""/></div>
                            <div className="radioItem">
                                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}
                                </RadioItem>
                            </div>
                        </div>
                    ))}
                </List>
                <div class="nextBtn">下一步</div>
            </div>
        );
    }
}
export default About;