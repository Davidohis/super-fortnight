import React from 'react'

function CardList (props) {
    return (
        <>
                {
                 props.Monster.map(({ id, name, email}) => (
                   <h2 key={id}>{name}</h2>
                 ))
                }  
        </>
    )
}

export default CardList;