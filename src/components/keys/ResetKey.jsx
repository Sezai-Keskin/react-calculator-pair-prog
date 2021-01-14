import React from 'react';

const ResetKey = (props) => {
    return(
        
		<button
			className={props.className}
			onClick={() => props.handleInput()}>
				{props.value}
		</button>

    )
}

export default ResetKey;