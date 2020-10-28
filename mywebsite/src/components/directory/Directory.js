import React, { Component } from 'react';
import MenuItem from '../menuitem/MenuItem';
import './directory.css'

export class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sections:[
                {
                    title: 'Rings',
                    imageUrl:'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    id: 1,
                    linkUrl: 'shop'
                  },
                  {
                    title: 'Earrings',
                    imageUrl: 'https://images.unsplash.com/photo-1561172478-a203d9c8290e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'Necklace',
                    imageUrl: 'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
                    id: 3,
                    linkUrl: ''
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1561060511-78b14b799fe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1575863438850-fb1c06a33c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                  }
             ]
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id,...otherSectionProps})=>(
                  <MenuItem key={id} {...otherSectionProps}/>
                ))}
                
            </div>
        )
    }
}

export default Directory
