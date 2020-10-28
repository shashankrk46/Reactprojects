import React, { Component } from 'react';
import ShopData from '../shoppage/ShopData';

import '../../components/Collections/TotalCollections';
import TotalCollections from '../../components/Collections/TotalCollections';



class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        collections:ShopData
        }
    }
    
   

    render() {
        const {collections}=this.state;
        return (
           
            <div>
              {
                 collections.map(({id,...otherCollectionProps})=>(
                     <TotalCollections key={id} {...otherCollectionProps}/>
                 ))
              }
            </div>
        )
    }
}

export default ShopPage
