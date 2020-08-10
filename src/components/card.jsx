import React from 'react';

export default function Card(props) {
    const { id, name, type, sprite, base } = props.poke
    return (
        <div className="card">
            <h1>{id}</h1>
            <h4>{name.english}</h4>
            <img src={sprite} alt="" />
            <ul>
                <li>{base.HP}</li>
                <li>{base.Attack}</li>
                <li>{base.Defense}</li>
                <li>{base.Speed}</li>

                { iterar(base) }

            </ul>
            <h6>{type[0] }</h6>
            <h6>{type[1] }</h6>
        </div>
    )
}

const iterar = (base) => {
    
    

}
