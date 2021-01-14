import React from 'react';

const OperatorKey = (props) => {
    return(
        
		<button
			className={props.className}
			onClick={() => props.handleInput(props.value)}>
				{props.value}
		</button>

    )
}

export default OperatorKey;