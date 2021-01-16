import React, { useState, useEffect } from 'react';

export default function Items({ match }) {
   useEffect(() => {
       fetchItem()
       console.log(match)
   },[])

   const [item, setItem ] = useState({})

    const fetchItem = async () => {
        const fetchUser = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        const data = await fetchUser.json();
        console.log(data)
        setItem(data)
    }
    
    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    )
}
