import React from 'react'
// import { tsPropertySignature } from '@babel/types';

function Split(props) {
    const combinedClassNames = `split ${props.className}`;
    const newStyles = {flex: props.flexBasis};
    return (
        <div className={combinedClassNames} style={newStyles}>
            {/* <p>This is the content of the split component. Lorem ipsum dolor sit amet, baby! Consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?</p> */}
            {props.children}
        </div>
    );
}

export default Split;