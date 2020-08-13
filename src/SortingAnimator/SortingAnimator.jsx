import React from 'react';
import './SortingAnimator.css'
import {resetArray} from '../helperFile.jsx';
import {mergeSort} from '../SortingAlgorithms/SortingAlgorithms'

export default class SortingAnimator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: [],
    }
  }

  componentDidMount(){
    const array = resetArray();

    this.setState({array})
  }

  render(){
    const {array} = this.state;
    return (
      <div>
        <nav className="nav">
          <button className="nav-item" onClick={() => this.componentDidMount()}>NEW ARRAY</button>
          <div className="vertical-rule nav-item"></div>
          <button className="nav-item" onClick={() => mergeSort(this.state.array)}>MERGE SORT</button>
          <button className="nav-item">QUICK SORT</button>
          <button className="nav-item">HEAP SORT</button>
          <button className="nav-item">BUBBLE SORT</button>
        </nav>
        <div className="array-container">
          {array.map((value, indx) => (
              <div className="array-bar" key={indx} style={{width:`${value}px`}}>
              </div>
          ))}
        </div>
      </div>
    );
  }
}
