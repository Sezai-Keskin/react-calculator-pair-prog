import React from 'react';

const CalcKey = (props) => {
    return(
        
		<button
			className={props.className}
			onClick={() => props.handleInput()}>
				{props.value}
		</button>

    )
}

export default CalcKey;