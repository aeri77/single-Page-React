import React, { Component } from 'react'
import classes from './TextSlider.css'
class TextSlider extends Component {
    
    render(){
        let imgList = []
        for(let key in this.props.imageList){
            imgList.push({
                id: key,
                config: this.props.imageList[key]
            })
        }
        let textSliding = (
            <div className={classes.text} >
                {
                    imgList.map(
                        listImage => (
                            <div key={listImage.key + listImage.config.value} style={listImage.config.style}> 
                                <h3 className={listImage.config.isActive ? classes.titleShow : classes.titleHide} key={listImage.key + listImage.config.title}> {listImage.config.title}</h3>
                                <p className={listImage.config.isActive ? classes.contentShow : classes.contentHide} key={listImage.key}> {listImage.config.text}</p>
                            </div>
                                       
                        )
                    )
                }
            </div>
        )

        return (
            <div>  
                {textSliding}
            </div>
        )
    }


}

export default TextSlider