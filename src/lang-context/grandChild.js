import React from 'react';
import GreatGrandChild from './greatGrandChild';

export default function GrandChild() {
    return(
        <div className='GrandChild'>
            <GreatGrandChild />
        </div>
    )
}