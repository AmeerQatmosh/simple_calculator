import React from 'react';
import './calculator.css'

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={primary:0,secondary:0};
    }
    sum =() =>{
        var N1 = parseInt(this.state.primary);
        var N2 = parseInt(this.state.secondary);
        var Results = N1+N2;
        this.setState({myText:Results})
    }
    subtract =() =>{
        var N1 = parseInt(this.state.primary);
        var N2 = parseInt(this.state.secondary);
        var Results = N1-N2;
        this.setState({myText:Results})
    }
    multiply =() =>{
        var N1 = parseInt(this.state.primary);
        var N2 = parseInt(this.state.secondary);
        var Results = N1*N2;
        this.setState({myText:Results})
    }
    devide =() =>{
        
        var N1 = parseInt(this.state.primary);
        var N2 = parseInt(this.state.secondary);
        if (N2===0){
            const error = "Error: Can't Devide by zero!";
            this.setState({myText:error})
        }
        else {
            var Results = parseInt(N1/N2);
            this.setState({myText:Results})
        }
    }

    render(){
        return(
            <div>
                <span>
                    <form>
                        <h1>Simple Calculator App</h1>
                        <input placeholder='First Value' onChange={primary => this.setState({ primary: primary.target.value })} />
                        <input placeholder='Second Value' onChange={secondary => this.setState({ secondary: secondary.target.value })} />
                    </form>
                </span>

                <p>Just Enter The values and click on the wanted Operation button and the result will immediately be shown. </p>


                <div>
                    <label>Result: {this.state.myText}</label>
                 </div>

                <div>
                    <button onClick={this.sum}>+</button>
                    <button onClick={this.subtract}>-</button>
                    <button onClick={this.multiply}>×</button>
                    <button onClick={this.devide}>÷</button>
                </div>
    
        </div>
        );
    }
}