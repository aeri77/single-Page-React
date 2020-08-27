import React, { Component } from 'react'
import * as image from '../ImageList/ImageList'
import classes from './ImageWrapper.css'
class ImageWrapper extends Component {
    

    constructor(props){
        super(props)
        this.state = {
                imageList : {
                    image0: {
                        src: image.img0,
                        style: {
                            'display': 'inline-block'
                        },
                        class: classes.img
                    },
                    image1: {
                        src: image.img1,
                        style: {
                            'display': 'inline-block'
                        },
                        class: classes.thes
                    },
                    image2: {
                        src: image.img2,
                        style: {
                            'display': 'inline-block'
                        },
                        class: classes.thes
                    }
                },
                backgroundIndex: 0
        }
        this.changeBackground = this.changeBackground.bind(this)
      }
    
      componentDidMount(){
        this.timeout = setTimeout(
            this.changeBackground,
            5000
          )
    
    }
    componentWillUnmount(){
        if (this.timeout) clearTimeout(this.timeout)
    }

    changeBackground(){
        this.setState(({imageList, backgroundIndex}) => {
            let imgList = []
            for(let key in imageList){
                imgList.push(
                    imageList[key]
                )
            }
            const nextBackgroundIndex = ++backgroundIndex % imgList.length
            imgList.forEach(list => {
                list.class = classes.thes
                return list
            })
            imgList[nextBackgroundIndex].class = classes.img
            return {backgroundIndex: nextBackgroundIndex }
        }, () => { 
            this.timeout = setTimeout(
              this.changeBackground,
              5000
            )
        })
    }

    // changeBackground () {
    //     this.setState(function ({ backgroundIndex }) {
    //         const nextBackgroundIndex = ++backgroundIndex % this.state.imageList.length
    //         console.log(this.state.imageList[this.state.backgroundIndex])
    //       return { backgroundIndex: nextBackgroundIndex }
    //     },  function () { 
    //       this.timeout = setTimeout(
    //         this.changeBackground,
    //         5000
    //       )
    //     })
    //   }
    
    //   toggleAppear = () =>{
        
    //   }
    //   nextImage = () =>{
    //       const newIndex = this.state.backgroundIndex + 1
    //         this.setState(prevState=>{
    //             return {backgroundIndex: newIndex}
    //     })
    //   }
    //   prevImage = () =>{
    //     const newIndex = this.state.backgroundIndex - 1
    //       this.setState(prevState=>{
    //         return {backgroundIndex: newIndex}
    //     })
    //   }

    render(){
        let imgList = []
        for(let key in this.state.imageList){
            imgList.push({
                id: key,
                config: this.state.imageList[key]
            })
        }
        let image = (
            <div className={classes.Image} >
                {
                    imgList.map(
                        listImage => (
                            <img key={listImage.id} className={listImage.config.class} src={listImage.config.src} style={listImage.config.style} alt="imag2"/>            
                        )
                    )
                }
            </div>
        )

        return (
            <div>  
                {image}
            </div>
        )
    }


}

export default ImageWrapper