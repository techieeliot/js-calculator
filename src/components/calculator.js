import React, {useState} from "react"
import "./calculator.css"

const Calculator = () => {
    const initialDisplayText = "SPEAK & MATH"
    const [displayText, setDisplayText] = useState(initialDisplayText) 
    const input = e => setDisplayText(e.target.name)

    const clearInput = () => setDisplayText('0');

    return (
        <section className="calc-container">
            <div className="row">
                <section id="gray-handle" className="col-lg">
                    <div id="inner-handle" className="col-md"></div>
                </section>
            </div>
            <div className="row">
                <section id="black-stripe" className="col-lg">
                    <aside id="speaker" className="display-panel"></aside>
                    <aside id="display" className="display-panel">{displayText}</aside>
                    <aside id="ti-logo" className="display-panel"></aside>
                </section>
            </div>
            <div className="row">
                <section id="gray-surface" className="col-lg">
                    <div id="touch-pad" className="row well">
                        <table id="left-table" className="col-sm">
                            <tr>
                                <td className="left-function-sections">
                                    <button name="//" id="repeat" className="function-pads pads">//</button>
                                </td>
                            </tr>
                            <tr>   
                                <td className="left-function-sections">
                                    <button name=">" id="greater-than" className="function-pads pads">&gt;</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-function-sections">
                                    <button name="<" id="less-than" className="function-pads pads">&lt;</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-function-sections">
                                    <button name="C" onClick={clearInput} id="clear" className="function-pads pads">C</button>
                                </td>
                            </tr>
                        </table>
                        <table id="center-table" className="number-pad col-md">
                            <tr>
                                <td className="number-sections">
                                    <button name="7" onClick={input} id="seven" className="number-pads pads">7</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="8" onClick={input} id="eight" className="number-pads pads">8</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="9" onClick={input} id="nine" className="number-pads pads">9</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="/" onClick={input} id="divide" className="number-pads pads">÷</button>
                                </td> 
                            </tr>
                            <tr>
                                <td className="number-sections">
                                    <button name="6" onClick={input} id="six" className="number-pads pads">6</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="5" onClick={input} id="five" className="number-pads pads">5</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="4" onClick={input} id="four" className="number-pads pads">4</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="*" onClick={input} id="multiply" className="number-pads pads">×</button>
                                </td> 
                            </tr>
                            <tr>
                                <td className="number-sections">
                                    <button name="3" onClick={input} id="three" className="number-pads pads">3</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="2" onClick={input} id="two" className="number-pads pads">2</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="1" onClick={input} id="one" className="number-pads pads">1</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="-" onClick={input} id="subtract" className="number-pads pads">-</button>
                                </td> 
                            </tr>
                            <tr>
                                <td className="number-sections">
                                    <button name="0" onClick={input} id="zero" className="number-pads pads">0</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="." onClick={input} id="decimal" className="number-pads pads">.</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="=" onClick={input} id="equals" className="number-pads pads">=</button>
                                </td> 
                                <td className="number-sections">
                                    <button name="+" onClick={input} id="add" className="number-pads pads">+</button>
                                </td> 
                            </tr>

                        </table>
                        <table id="right-table" className="col-md">

                        </table>
                    </div>
                </section>
            </div>



        </section>
    )
}

export default Calculator
