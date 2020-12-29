import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
   useEffect(() => {
       fetchItems();
   },[])

   const [items, setItems ] = useState([])

    const fetchItems = async () => {
       const user = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await user.json();
        console.log(data)
        setItems(data)
    }


    return (
        <div>
            {items.map(item => (
                <h2 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                 </h2>
            ))}
        </div>
    )
}
