import React from 'react'
import './menu.style.css'

const MenuItem=({title,imageUrl,size})=> (
    
        <div className={`${size} menu-item`}>
            <div
            className='background-image'
            style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitile'>Show Now</span>
            </div>
        </div>
    
)
export default MenuItem