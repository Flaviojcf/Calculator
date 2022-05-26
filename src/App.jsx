import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button/Button";
import { Display } from "./Components/Display/Display";

export function App() {
  const [button, setButton] = useState(0);
  const [oldNumber, setOldNumber] = useState("");
  const [operation, setOperation] = useState("");

  function clearMemory() {
    setButton(0);
  }

  function getOperation(e) {
    setOperation(e.target.value);
    setOldNumber(button);
    setButton(oldNumber)
    setButton('');
  }

  function calculate() {
    
    if (operation === "/") {
      let divided = (parseFloat(oldNumber) / parseFloat(button)).toFixed(1);
      setButton(divided);
    } else if (operation === "*") {
      setButton((oldNumber * button).toFixed(2));
    } else if (operation === "+") {
      setButton(parseFloat(oldNumber) + parseFloat(button));
    } else if (operation === "-") {
      setButton(parseFloat(oldNumber) - parseFloat(button));
    }
  }

  function getButtonValue(e) {
    if (e.target.value === "." && button.includes(".")) {
      return;
    } else if (e.target.value === "0" && button.includes("0") && button === 0) {
      return;
    } else if (button === 0) {
      setButton(e.target.value);
    } else {
      setButton(button + e.target.value);
    }
  }

  return (
    <>
      <div>
        <h1>Calculadora</h1>
      </div>
      <div className="Calculator">
        <Display value={button} />
        <Button value="AC" onClick={clearMemory} triple />
        <Button value="/" onClick={getOperation} operation />
        <Button value="7" onClick={getButtonValue} />
        <Button value="8" onClick={getButtonValue} />
        <Button value="9" onClick={getButtonValue} />
        <Button value="*" onClick={getOperation} operation />
        <Button value="4" onClick={getButtonValue} />
        <Button value="5" onClick={getButtonValue} />
        <Button value="6" onClick={getButtonValue} />
        <Button value="-" onClick={getOperation} operation />
        <Button value="1" onClick={getButtonValue} />
        <Button value="2" onClick={getButtonValue} />
        <Button value="3" onClick={getButtonValue} />
        <Button value="+" onClick={getOperation} operation />
        <Button value="0" onClick={getButtonValue} double />
        <Button value="." onClick={getButtonValue} />
        <Button value="=" onClick={calculate} operation />
      </div>
    </>
  );
}
