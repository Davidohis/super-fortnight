import React from 'react'
import Card from './card';

function CardList (props) {
    return (
        <>
                {
                 props.Monster.map(({ id, name, email}) => {
                   return <Card key={id} name={name} email={email} />
                 })
                }  
        </>
    )
}

export default CardList;