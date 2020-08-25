import React, { Component } from 'react';
import ShopData from '../shoppage/ShopData';


class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        collections:ShopData
        }
    }
    
   

    render() {
        return (
            <div>
               meow
            </div>
        )
    }
}

export default ShopPage
