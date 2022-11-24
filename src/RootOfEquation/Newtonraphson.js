import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import {create, all} from 'mathjs';

var Equation='equation';

class Newtonraphson extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    getValue() {
        const math = require("mathjs"); 
        var x1 = document.getElementById("inputX").value;
        var equation = document.getElementById("inputEquation").value;
        var error = document.getElementById("inputError").value;
        x1 = Number(x1);
        var i=0;
        Equation=equation;

        do{
            var x0 = x1;
            var func1 = math.evaluate(equation,{x: x1});
            var func2 = math.derivative(equation, 'x').evaluate({x: x1});
            var tmp = -(func1/func2);
             x1 = x0 + tmp;
            var e = Math.abs(tmp/x1);
            i++
        }while(e*100>error && i< 10000);

        document.getElementById("showans").innerHTML=x1;
        document.getElementById("showequation").innerHTML=Equation;

    }

    render() {
        return (
            <div>
                <h1 class="header"><p/>Newton-raphson method</h1>
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
export default Newtonraphson;