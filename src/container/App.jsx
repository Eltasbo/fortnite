import React from 'react';
import Store from '../components/Store';
import StoreItem from '../components/StoreItem';

import '../assets/styles/App.scss';

export default () => {
    return(
        <div>
            <h1>Fortnite store today!!</h1>
            <Store category='daily'>
                <StoreItem name='Vulture' background='https://media.fortniteapi.io/images/b50e64d52e20635594c1bc4a9360524c/background_full.en.png' />
                <StoreItem name='Vulture' background='https://media.fortniteapi.io/images/b50e64d52e20635594c1bc4a9360524c/background_full.en.png' />
                <StoreItem name='Vulture' background='https://media.fortniteapi.io/images/b50e64d52e20635594c1bc4a9360524c/background_full.en.png' />
                <StoreItem name='Vulture' background='https://media.fortniteapi.io/images/b50e64d52e20635594c1bc4a9360524c/background_full.en.png' />
                <StoreItem name='Vulture' background='https://media.fortniteapi.io/images/b50e64d52e20635594c1bc4a9360524c/background_full.en.png' />
                <StoreItem name='Vulture' background='https://media.fortniteapi.io/images/b50e64d52e20635594c1bc4a9360524c/background_full.en.png' />
                <StoreItem name='Vulture' background='https://media.fortniteapi.io/images/b50e64d52e20635594c1bc4a9360524c/background_full.en.png' />
            </Store>

            <Store category='feature'>
                <StoreItem name='Dark Bomber' background='https://media.fortniteapi.io/images/9873376-84e54dd-54c54dd-9ce5a82/background_full.en.png' />
                <StoreItem name='Dark Bomber' background='https://media.fortniteapi.io/images/9873376-84e54dd-54c54dd-9ce5a82/background_full.en.png' />
                <StoreItem name='Dark Bomber' background='https://media.fortniteapi.io/images/9873376-84e54dd-54c54dd-9ce5a82/background_full.en.png' />
                <StoreItem name='Dark Bomber' background='https://media.fortniteapi.io/images/9873376-84e54dd-54c54dd-9ce5a82/background_full.en.png' />
            </Store>
        </div>
    );
};
