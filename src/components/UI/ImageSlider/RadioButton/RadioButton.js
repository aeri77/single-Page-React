import React, { Component } from 'react'
import classes from './RadioButton.css'

class radioButton extends Component {
    constructor() {
        super();
        this.state = {
          name: "FirstImage"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
      }
    onChangeValue = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value);
      }

    render (){

        let imgList = []
            for(let key in this.props.imageList){
                imgList.push({
                    id: key,
                    config: this.props.imageList[key]
                })
            }
        let radioButton = (
            <div className={classes.wrapper} style={{'gridTemplateColumns': `repeat(${imgList.length}, 35px)`}}>
                {imgList.map(listImage => (
                    <label key={listImage.config.value} >&nbsp;
                        <input type="radio" value={listImage.config.value} name="image" className={classes.design} checked={listImage.config.isActive} onChange={this.props.changed}/>
                        <span className={classes.dot}/>
                    </label>
                ))}
            </div>
        )
        return (
                
                <div>
                    {/* <label>&nbsp;
                        <input type="radio" value="FirstImage" name="image" onChange={this.onChangeValue} onClick={this.props.prev}  className={classes.design} checked={this.state.name === "FirstImage"} />
                        <span className={classes.dot}/>
                    </label> */}
                    {radioButton}
                </div>
        )
    }
}

export default radioButton