import React, { useEffect, useState } from 'react';
import Store from '../components/Store';
import StoreItem from '../components/StoreItem';
import '../assets/styles/App.scss';


export default () => {
    const [ daily, setDaily ] = useState([]);
    const [ featured, setFeatured ] = useState([]);
    const [ specialDaily, setSpecialDaily ] = useState([]);
    const [ specialFeatured, setSpecialFeatured ] = useState([]);

    useEffect(()=>{
        const lang = 'en';//navigator.language.slice(0,2);
        let url = `https://fortniteapi.io/shop?lang=${lang}`;
        const config = {
            method: 'GET',
            headers: {
                Authorization: 'a79e8da4-60310edd-84b45098-cc3e1bbe',
            }
        };

        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                setDaily(data.daily);
                setFeatured(data.featured);
                setSpecialDaily(data.specialDaily);
                setSpecialFeatured(data.specialFeatured);                
            })
    }, []);

    return(
        <div className="app">
            <h1 className='store__titles'>Fortnite store today!!</h1>
            <Store category='daily'>
                {daily.map((item)=>(
                    <StoreItem name={item.name} background={item.full_background} />
                ))}
            </Store>

            <Store category='feature'>
                {featured.map((item)=>(
                    <StoreItem name={item.name} background={item.full_background} />
                ))}
            </Store>
        </div>
    );
};
