import React, { useEffect, useState } from 'react';
import Store from '../components/Store';
import StoreItem from '../components/StoreItem';
import useFetch from '../hooks/useFetch';
import '../assets/styles/App.scss';


const lang = navigator.language.slice(0,2);
let url = `https://fortniteapi.io/shop?lang=${lang}`;
const config = {
    method: 'GET',
    headers: {
        Authorization: 'a79e8da4-60310edd-84b45098-cc3e1bbe',
    }
};

export default () => {
    const items = useFetch(url, config);
    return(
        <div className="app">
            <h1 className='store__titles'>Fortnite store today!!</h1>

            {items.daily.length > 0 &&
                <Store category='daily'>
                    {items.daily.map((item)=>(
                        <StoreItem key={item.id} {...item} />
                    ))}
                </Store>
            }

            {items.featured.length > 0 &&
                <Store category='feature'>
                    {items.featured.map((item)=>(
                        <StoreItem key={item.id} {...item} />
                    ))}
                </Store>
            }

            {items.specialDaily.length > 0 &&
                <Store category='special daily'>
                    {items.specialDaily.map((item)=>(
                        <StoreItem key={item.id} {...item} />
                    ))}
                </Store>
            }

            {items.specialFeatured.length > 0 &&
                <Store category='special feature'>
                    {items.specialFeatured.map((item)=>(
                        <StoreItem key={item.id} {...item} />
                    ))}
                </Store>
            }
        </div>
    );
};
