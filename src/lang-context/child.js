import React from 'react';
import GrandChild from './grandChild';

export default function Child() {
    return(
        <main role='main' className='Child'>
            <GrandChild />
        </main>
    )
}