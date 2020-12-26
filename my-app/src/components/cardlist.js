import React from 'react'
import Card from './card';

function CardList (props) {
    return (
        <>
                {
                 props.monster.map(({ id, name, email}) => {
                   return <Card key={id} id={id} name={name} email={email} />
                 })
                }  
        </>
    )
}

export default CardList;