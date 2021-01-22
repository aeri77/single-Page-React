import React,{ Component } from 'react'
import classes from './Item.css'
import image from '../MoreItem/sample-product.png'
import image1 from '../MoreItem/sample-product1.png'
import image2 from '../MoreItem/sample-product2.png'

class Item extends Component {




    render(){
        return (
        <div className={classes.Item}>
            <div className={classes.Wrapper}>
                <div className={classes.Card}>
                    <img src={image} alt='itemImage' />
                    <h2>hello text</h2>
                    <p>Rp.10.000</p>
                </div>
                <div className={classes.Hover2}>
                    <h2>this different</h2>
                    <p>with naother text</p>
                    <p>really different</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Card}>
                    <img src={image1} alt='itemImage' />
                    <h2>hello text</h2>
                    <p>Rp.10.000</p>
                </div>
                <div className={classes.Hover2}>
                    <h2>this different</h2>
                    <p>with naother text</p>
                    <p>really different</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Card}>
                    <img src={image2} alt='itemImage' />
                    <h2>hello text</h2>
                    <p>Rp.10.000</p>
                </div>
                <div className={classes.Hover2}>
                    <h2>this different</h2>
                    <p>with naother text</p>
                    <p>really different</p>
                </div>
            </div>

            
        </div>
        )
    }
}

export default Item