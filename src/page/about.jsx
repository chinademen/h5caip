import React,{ Component } from "react";
import { Link } from "react-router-dom";
import { inject,observer } from "mobx-react";


@inject("aboutStore")
@observer
class About extends Component {
    constructor(props){
        super(props);
        this.state = { value:'' }
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(e){
        this.setState ({ value:e.target.value }) 
    }
    render() {
        const { title } = this.props.aboutStore 
        return (
            <div>
                <p> { title } </p>
                <p> { this.state.value } </p>
                <Link to="/">go to Home</Link>
            </div>
        );
    }
}

export default About;
