import React from 'react';

const AuxKey = (props) => {
    return(
        
		<button
			className={props.className}
			onClick={() => props.handleInput(props.value)}>
				{props.value}
		</button>

    )
}

export default AuxKey;