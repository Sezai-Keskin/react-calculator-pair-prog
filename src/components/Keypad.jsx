import React from 'react';
import DigitKey from './keys/DigitKey';
import OperatorKey from './keys/OperatorKey';
import ResetKey from './keys/ResetKey';
import CalcKey from './keys/CalcKey';
import AuxKey from './keys/AuxKey';
import DecimalPoint from './keys/DecimalPoint'

const Keypad = ({handleDigitInput, handleOperatorInput, handleResetInput, handleCalcKey, handleSignumAndPercent, handleDecimalPoint}) => {

    return (
        <section className='keypad'>
            <ResetKey className="key upper-key" handleInput={handleResetInput} value="ac" />
            <AuxKey className="key upper-key" handleInput={handleSignumAndPercent} value="+/-"/>
            <AuxKey className="key upper-key" handleInput={handleSignumAndPercent} value="%"/>
            <OperatorKey className="key operator-key" handleInput={handleOperatorInput} value="/"/>
            
			<DigitKey className="key digit-key" handleInput={handleDigitInput} value="7"/>
            <DigitKey className="key digit-key" handleInput={handleDigitInput} value="8"/>
            <DigitKey className="key digit-key" handleInput={handleDigitInput} value="9"/>
            
			<OperatorKey className="key operator-key" handleInput={handleOperatorInput} value="x"/>
            
			<DigitKey className="key digit-key" handleInput={handleDigitInput} value="4"/>
            <DigitKey className="key digit-key" handleInput={handleDigitInput} value="5"/>
            <DigitKey className="key digit-key" handleInput={handleDigitInput} value="6"/>
            
			<OperatorKey className="key operator-key" handleInput={handleOperatorInput} value="-"/>
            
			<DigitKey className="key digit-key" handleInput={handleDigitInput} value="1"/>
            <DigitKey className="key digit-key" handleInput={handleDigitInput} value="2"/>
            <DigitKey className="key digit-key" handleInput={handleDigitInput} value="3"/>
            
			<OperatorKey className="key operator-key" handleInput={handleOperatorInput} value="+"/>
            
			<DigitKey className="key digit-key zero" handleInput={handleDigitInput} value="0"/>
            <DecimalPoint className="key digit-key" handleInput={handleDecimalPoint} value="."/>
            <CalcKey className="key operator-key" handleInput={handleCalcKey} value="="/>
        </section>
    )
}

export default Keypad;