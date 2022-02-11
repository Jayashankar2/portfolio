import React, {useState} from 'react'
import './Style/calculator.css'

export default function Calculator(){

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = [ '/', '*', '-', '+', '.'];

    const updateCalc = (value) => {

        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
            return;
        }

        setCalc( calc + value );

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }


    const createDigit = () => {
        const digit = [];

        for(let i = 1; i < 10; i++){
            digit.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
            )
        }

        return digit;
    }

    const Calculate = () => {
        setCalc(eval(calc).toString())
    }

    const backspace = () => {
        const value = calc.slice(0, -1);

        setCalc(value)
    }

    const clear = () => {
        setCalc("")
        setResult("")
    }

    return(
        <div className='calculator'>
            <div className='container'>
                <div className='display'>
                    {result ? <p>({result})</p> : ''} <p>{calc || "0"}</p>
                </div>
                <div className='operator'>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={backspace}>DEL</button>
                    <button onClick={clear}>Clear</button>
                </div>
                <div className='digits'>
                    {createDigit()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={Calculate}>=</button>
                </div>
            </div>
        </div>
    )
}