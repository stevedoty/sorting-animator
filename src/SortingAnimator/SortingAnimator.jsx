import React from 'react';
import './SortingAnimator.css'

export default class SortingAnimator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: [],
    }
  }

  componentDidMount(){
    this.resetArray();
  }

  resetArray(){
    const array = [];
    for(let i = 0; i < 200; i++ ){
      array.push( randomIntFromInterval(5, 500) );
    }
    this.setState({array});
  }

  render(){
    const {array} = this.state;
    return (
      <div className="">
        {array.map((value, indx) => (
            <div className="array-bar" key={indx} style={{width:`${value}px`}}>
            </div>
        ))}
      </div>
    );
  }
}
//found online
function randomIntFromInterval(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min )
}
