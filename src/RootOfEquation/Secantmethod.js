import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";

var Equation='equation';

class Secantmethod extends Component {
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

        var x0 = document.getElementById("inputX0").value;
        var x1 = document.getElementById("inputX1").value;
        var equation = document.getElementById("inputEquation").value;
        var error = document.getElementById("inputError").value;
        x0 = Number(x0);
        x1 = Number(x1);
        var x2=99;
        Equation=equation;
           
        while(Math.abs((x2-x1)/x2)*100>error){
            var x2 = x1-(func(x1)*(x1-x0))/(func(x1)-func(x0));
            x0=x1;
            x1=x2;
        }

        document.getElementById("showans").innerHTML=x2;
        document.getElementById("showequation").innerHTML=Equation;

    }

    render() {
        return (
            <div>
                <h1 class="header"><p/>Secant method</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                        <h4>Enter Number</h4><p/>
                            <input id="inputEquation" type="text" step="1" placeholder="Equation" class="input-equation"/>
                            <p/>
                            <input id="inputX0" type="number" step="1" placeholder="x0" class="input-number"/>
                            <br/>
                            <input id="inputX1" type="number" step="1" placeholder="x1" class="input-number"/>
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
export default Secantmethod;