import React, { Component } from 'react'
import classes from './Demo.css'
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider'
import ItemList from '../../components/Item/Item'
import MoreItem from '../../components/MoreItem/MoreItem'
class Demo extends Component{

 
  render(){
    return(
      <div className={classes.Background}>
        
        <div className={classes.Body}>
          <ImageSlider /> 
        </div>
        <div className={classes.MainGrid}>
            <div className={classes.Content}>
              <ItemList />
            </div>
            <div className={classes.Title}>
              <h1>Our Best Deal</h1>
            </div>
        </div>
        <div className={classes.GridSecond}>
            <div className={classes.TitleArea}>
              <h1>Another Offer</h1>
            </div>
            <div className={classes.ContentArea}>
              <MoreItem /> 
            </div>
        </div>

      </div>
      )
  }
}

export default Demo