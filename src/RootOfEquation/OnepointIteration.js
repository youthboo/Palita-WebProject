import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";

var Equation='equation';
class OnepointIteration extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    getValue() {
        const func = (x) =>{
            var tmp;
            tmp = eval(equation);
            return tmp;
        }

        var x = document.getElementById("inputX").value;
        var equation = document.getElementById("inputEquation").value;
        var error = document.getElementById("inputError").value;
        x = Number(x);
        var check=x+1;
        Equation=equation;
        
        while(Math.abs((x-check)/x)*100>error && (x-check)/x<0){
            check = x;
            x = (func(x));
        }
        x = Math.abs(x);

        document.getElementById("showans").innerHTML=x;
        document.getElementById("showequation").innerHTML=Equation;

    }

    render() {
        return (
            <div>
                <h1 class="header"><p/>One point iteration method</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <h4>Enter Number</h4><p/>
                            <input id="inputEquation" type="text" step="1" placeholder="Equation" class="input-equation"/>
                            <p/>
                            <input id="inputX" type="number" step="1" placeholder="x" class="input-number"/>
                            <p/>
                            <input id="inputError" type="number" step="1" placeholder="Error" class="input-error"/>
                            <p/>
                        </div>
                        <Button onClick={this.getValue}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>

                    <h4>Equation</h4><div id="showequation"/>
                    <p/>
                    <h4>Root of equation</h4><div id="showans"/>
            </div>
        );
    }
}
export default OnepointIteration;