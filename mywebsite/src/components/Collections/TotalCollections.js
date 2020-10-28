import React from 'react';

import './collections.style.css';


const TotalCollections=({title,items,id})=>(
    <div className='collections-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
          {
            items.map((item)=>(
                <div key={item.id}>{item.name}</div>
            ))
          }
        </div>

    </div>
)

export default TotalCollections;