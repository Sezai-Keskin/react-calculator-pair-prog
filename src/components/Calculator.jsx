import React, {useState} from 'react';
import Keypad from './Keypad';
import Display from './Display';
import '../assets/App.css';


const Calculator = () => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');
	const [display, setDisplay] = useState('Hello calculator!');
	const [isCalculated, setIsCalculated] = useState(false);

	// input handler for the digit keys:
	const handleDigitInput = (val) => {
		// the only console.log() we needed!!!
		// console.log(val);
		if (isCalculated) {
			// reset everything!
			reset();
			setOperand1(val);
			setDisplay(val);
		} else {
			if (result !== '') {
				if (result.length <= 11) {
					setOperand1(result + val);
					setDisplay(result + val);
					setOperand2('');
					setOperator('');
					setResult('');
				}
			} else if (operator === '') {
				if (operand1.length <= 11) {
					setOperand1(operand1 + val);
					setDisplay(operand1 + val);
				}
			} else {
				if (operand2.length <= 11) {
					setOperand2(operand2 + val);
					setDisplay(operand2 + val);
				}
			}
		}
		setIsCalculated(false);
	}

	// when an operator key is pressed:
	const handleOperatorInput = (val) => {
		if (result !== '') {
			setOperand1(result);
			setOperand2('');
			setOperator(val);
			setResult('');
		} else if (operand2 !== '') {
			let res = calculate();
			setOperand1(res);
			setOperand2('');
			setOperator(val);
		} else {
			setOperator(val);
			setDisplay(val);
		}
		setIsCalculated(false);
	}

	// resets:
	// 1 — reset key pressed
	const handleResetInput = () => {
		reset();
	}

	// 2 — reset function
	const reset = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
		setDisplay('Hello calculator!');
	}

	// when the '=' key is pressed:
	const handleCalcKey = () => {
		if (operator !== '' && operand1 !== '' && operand2 !== '') {
			calculate();
		}
	}

	// THE function
	const calculate = () => {
		let res;
		if (operator === 'x') {
			res = (Number(operand1) * Number(operand2)).toString();
			setResult(res);
			setDisplay(res);
		}
		if (operator === '+') {
			res = (Number(operand1) + Number(operand2)).toString();
			setResult(res)
			setDisplay(res);
		}
		if (operator === '-') {
            res = (Number(operand1) - Number(operand2)).toString()
            setResult(res)
			setDisplay(res);
		}
		if (operator === '/') {
			res = operand2 === '0' ? '💩' : (Number(operand1) / Number(operand2)).toString();
			setResult(res)
			setDisplay(res);
		}
		setIsCalculated(true);
		return res;
	}

	// handler for auxillary keys ('+/-' and '%'):
	const handleSignumAndPercent = (val) => {
		const transform = (sym, input) => {
			if (sym === '%') {
				return (Number(input) / 100).toString();
			}
			if (sym === '+/-') {
				return (Number(input) * -1).toString();
			}
		}
		if (result !== '') {
			setResult(transform(val, result));
			setDisplay(transform(val, result));
		} else if (operand2 !== '') {
			setOperand2(transform(val, operand2));
			setDisplay(transform(val, operand2))
		} else {
			setOperand1(transform(val, operand1));
			setDisplay(transform(val, operand1))
		}
		setIsCalculated(false);
	}
	
	// when '.' key is pressed:
	const handleDecimalPoint = () => {
		if (result !== '') {
			if (result.indexOf('.') === -1) {
				setResult(result + '.');
				setDisplay(display + '.');
			}
		} else if (operand2 !== '') {
			if (operand2.indexOf('.') === -1) {
				setOperand2(operand2 + '.');
				setDisplay(operand2 + '.');
			}
		} else if (operand2 === '' && operator !== '') {
			setOperand2('0.');
			setDisplay('0.');
		} else if (operand1 !== '' && operand1.indexOf('.') === -1) {
			setOperand1(operand1 + '.');
			setDisplay(operand1 + '.');
		} else if (operand1 === '') {
			setOperand1('0.');
			setDisplay('0.');
		}
		setIsCalculated(false);
	}

    return (
		<main>
			<Display displayValue={display}/>
			<Keypad
				handleDigitInput={handleDigitInput}
				handleOperatorInput={handleOperatorInput}
				handleResetInput={handleResetInput}
				handleCalcKey={handleCalcKey}
				handleSignumAndPercent={handleSignumAndPercent}
				handleDecimalPoint={handleDecimalPoint}
			/>
		</main>
    )
}

export default Calculator;