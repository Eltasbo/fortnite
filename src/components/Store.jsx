import React from 'react';
import '../assets/styles/components/Store.scss';

export default ({category, children}) => {
    return(
        <div className='store'>
            <h2 className="store__titles">{category}</h2>
            <div className="store__container">
                {children}
            </div>
        </div>
    );
}
