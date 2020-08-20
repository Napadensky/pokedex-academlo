import React from 'react';

export default function Card(props) {
    const { id, name, type, sprite, base } = props.poke


    return (
        <div className="courses-container"  >
            <div className={`course`}>
                <div className={`course-preview ${type[0]}`} >
                    <h6>#{id}  {name.english}</h6>
                    <img src={sprite} alt="" />
                </div>
                <div className="course-info">
                    <h2>Habilidades</h2>
                    <ul>
                        <li>Salud: {base.HP}</li>
                        <li>Atq: {base.Attack}</li>
                        <li>Def: {base.Defense}</li>
                        <li>Vel: {base.Speed}</li>
                    </ul>

                    <div className="tipos">
                        <div className="btn-container">
                            {type.map((e,index) => {
                                return <button className={`btn1 ${e}`}   key={index}> {e} </button>
                            })}
                            {/* <button className="btn1">{type[0]}</button>
                            <button className="btn2">{type[1]}</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

 
    )
}


