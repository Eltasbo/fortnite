import React from 'react';
import '../assets/styles/components/StoreItem.scss';

export default ({name, full_background}) => (
    <div className="store__item">
        <img src={full_background} alt={name}/>
    </div>
);
