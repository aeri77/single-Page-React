import React, { Component } from 'react'
import classes from './ImageSlider.css'
import SliderButton from './RadioButton/RadioButton'
import ImageWrapper from './ImageWrapper/ImageWrapper'
import TextSlider from './TextSlider/TextSlider'
import axios from 'axios'

    class ImageSlider extends Component {
      constructor(props){
        super(props)
        this.state = {
                imageList : {},
                backgroundIndex: -1,
                isLoading: false
        }
        this.changeBackground = this.changeBackground.bind(this)
      }
    
      componentDidMount(){
        let res = []
        axios.get('https://test-b001d.firebaseio.com/demoPage.json')
          .then(resp => {
            for(let key in resp.data){
              res.push({
                ...resp.data[key],
                id: key,
                style: {
                    'display': 'none',
                },
                class: classes.img
              })
            }

            this.setState({imageList: res})
            this.changeBackground()
          })
          .catch(err => console.log(err))
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
                list.style = {'display': 'inline-block'}
                list.isActive = false
                return list
            })
            imgList[nextBackgroundIndex].class = classes.img
            imgList[nextBackgroundIndex].style = {'display': 'inline-block'}
            imgList[nextBackgroundIndex].isActive = true
            return {backgroundIndex: nextBackgroundIndex }
        }, () => { 
            this.timeout = setTimeout(
              this.changeBackground
              ,
              13000
            )
        })
    }
    
    onChangeClicked = (event) => {
      const e = event.target.value
      this.setState(({imageList, backgroundIndex}) => {
        let nextIndex = 0
        let imgList = []
        for(let key in imageList){
            imgList.push(
                imageList[key]
            )
        }
        imgList.forEach((list, index) => {
              if(list.value === e) {
                for(let key in imgList){
                  imgList[key].isActive = false
                  imgList[key].class = classes.thes
                  imgList[key].style = {'display': 'inline-block'}
                }
                imgList[index].isActive = true
                imgList[index].class = classes.img
                imgList[index].style = {'display': 'inline-block'}
                nextIndex = index
              }
             })
        return {imageList: imgList, backgroundIndex: nextIndex}
      })
    }

    render(){


        return (
            <div className={classes.Background}>
              <span className={classes.bg} />
                  <ImageWrapper imageList={this.state.imageList}/>        
                <div className={classes.Selector}>
                  <SliderButton  imageList={this.state.imageList} changed={(event) => this.onChangeClicked(event)}/>
                  <TextSlider imageList={this.state.imageList} />
                </div>
                 
                  
            </div>
      )
    }
      
}
export default ImageSlider