import React, { Component } from 'react'
import Fruit from './Fruit';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [{ fruit: "Apple", color: "red" }, { fruit: "Mango", color: "red" }, { fruit: "Banana", color: "red" }, { fruit: "Lemon", color: "red" }]
    }
  }

  // change color of an item on button click
  changeColor = (i) => {
    // create colors
    let colors = ["green", "blue", "yellow", "orange", "pink"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    // copy the array to change it
    let newColor = [...this.state.fruits];
    newColor[i].color = randomColor;

    this.setState({
      fruits: newColor
    })
  }

  // remove an item on button click
  removeItem = (i) => {
    // console.log(i);
    let arrCopy = [...this.state.fruits];
    // console.log(arrCopy[i]);
    arrCopy.splice(i, 1);

    this.setState({
      fruits: arrCopy
    })
  }


  render() {

    let fruit = this.state.fruits.map((item, i) => {
      return (<Fruit key={item.fruit} item={item} i={i} changeColor={this.changeColor} removeItem={this.removeItem} />);
    });

    return (
      <div>
        {fruit}
      </div>
    )
  }
}

