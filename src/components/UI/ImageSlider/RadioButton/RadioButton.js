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
        return (
            <div className={classes.wrapper}>
                <label>&nbsp;
                    <input type="radio" value="FirstImage" name="image" onChange={this.onChangeValue} onClick={this.props.prev}  className={classes.design} checked={this.state.name === "FirstImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="SecondImage" name="image" onChange={this.onChangeValue} onClick={this.props.clicked}  className={classes.design} checked={this.state.name === "SecondImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="ThirdImage" name="image" onChange={this.onChangeValue} onClick={this.props.next}  className={classes.design} checked={this.state.name === "ThirdImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="FirstImage" name="image" onChange={this.onChangeValue} onClick={this.props.prev}  className={classes.design} checked={this.state.name === "FirstImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="SecondImage" name="image" onChange={this.onChangeValue} onClick={this.props.clicked}  className={classes.design} checked={this.state.name === "SecondImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="ThirdImage" name="image" onChange={this.onChangeValue} onClick={this.props.next}  className={classes.design} checked={this.state.name === "ThirdImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="FirstImage" name="image" onChange={this.onChangeValue} onClick={this.props.prev}  className={classes.design} checked={this.state.name === "FirstImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="SecondImage" name="image" onChange={this.onChangeValue} onClick={this.props.clicked}  className={classes.design} checked={this.state.name === "SecondImage"} />
                    <span className={classes.dot}/>
                </label>
                <label>&nbsp;
                    <input type="radio" value="ThirdImage" name="image" onChange={this.onChangeValue} onClick={this.props.next}  className={classes.design} checked={this.state.name === "ThirdImage"} />
                    <span className={classes.dot}/>
                </label>
        </div>
        )
    }
}

export default radioButton