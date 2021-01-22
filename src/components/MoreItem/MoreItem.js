import React,{ Component } from 'react'
import classes from './MoreItem.css'
import image from './sample-product.png'
import image1 from './sample-product1.png'

class MoreItem extends Component {




    render(){
        return (
        <div className={classes.Item}>
            <div className={classes.Card}>
                <img src={image} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image1} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image1} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image1} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image1} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image} alt='itemImage' />
                
            </div>
            <div className={classes.Card}>
                <img src={image1} alt='itemImage' />
                
            </div>
            
        </div>
        )
    }
}

export default MoreItem