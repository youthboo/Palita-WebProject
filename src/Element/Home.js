import {React,Component} from "react";

class Home extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}
export default Home;