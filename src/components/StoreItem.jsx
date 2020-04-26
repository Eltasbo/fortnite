import React from 'react';
import '../assets/styles/components/StoreItem.scss';

export default ({name, background}) => (
    <div className="store__item">
        <img src={background} alt={name}/>
    </div>
);
