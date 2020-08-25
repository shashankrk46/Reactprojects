import React, { Component } from 'react';
import './home.style.css';
import Directory from '../../components/directory/Directory'

 class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='homepage'>
                
           <Directory/>
            
            </div>
        )
    }
}

export default Home
