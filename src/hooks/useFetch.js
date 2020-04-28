import { useState, useEffect } from 'react';

export default (url, config={}) => {
    const defaultValues = {
        daily: [], featured: [], specialDaily: [], specialFeatured: []
    };
    const [ items, setItems ] = useState(defaultValues);

    useEffect(()=>{
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                setItems(data);
            });
    }, []);

    return items;
}
