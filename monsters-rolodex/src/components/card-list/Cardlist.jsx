import  React from 'react';
import {Card}  from '../card/card'
import './cardlist.style.css'

export const Cardlist = props => {
    // console.log(props)

    return (
        <div className="card-list">
            {
          
          props.monsters.map(monster=>(
            
          <Card key={monster.id} monster={monster}/>
          )
           ) }
          
        </div>
    )
}
