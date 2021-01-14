import React from 'react';


const DecimalPoint = (props) => {
    return(
        
		<button
			className={props.className}
			onClick={() => props.handleInput()}>
				{props.value}
		</button>

    )
}

export default DecimalPoint;