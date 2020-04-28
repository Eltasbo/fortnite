import React, { useEffect, useState } from 'react';
import Store from '../components/Store';
import StoreItem from '../components/StoreItem';
import '../assets/styles/App.scss';


export default () => {
    const [ items, setItems ] = useState({
        daily: [], featured: [], specialDaily : [], specialFeatured: []
    });

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
                setItems(data);              
            })
    }, []);

    return(
        <div className="app">
            <h1 className='store__titles'>Fortnite store today!!</h1>

            {items.daily.length > 0 &&
                <Store category='daily'>
                    {items.daily.map((item)=>(
                        <StoreItem key={item.id} name={item.name} background={item.full_background} />
                    ))}
                </Store>
            }

            {items.featured.length > 0 &&
                <Store category='feature'>
                    {items.featured.map((item)=>(
                        <StoreItem key={item.id} name={item.name} background={item.full_background} />
                    ))}
                </Store>
            }

            {items.specialDaily.length > 0 &&
                <Store category='special daily'>
                    {items.specialDaily.map((item)=>(
                        <StoreItem key={item.id} name={item.name} background={item.full_background} />
                    ))}
                </Store>
            }

            {items.specialFeatured.length > 0 &&
                <Store category='special feature'>
                    {items.specialFeatured.map((item)=>(
                        <StoreItem key={item.id} name={item.name} background={item.full_background} />
                    ))}
                </Store>
            }
        </div>
    );
};
