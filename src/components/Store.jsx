import React from 'react';
import '../assets/styles/components/Store.scss';

export default ({category, children}) => {
    return(
        <div className='store'>
            <h1>{category}</h1>
            <div className="store__container">
                {children}
            </div>
        </div>
    );
}
