import React from 'react';
import './SortingAnimator.css'
import {resetArray} from '../helperFile.jsx';
import * as sortingAlgorithms from '../SortingAlgorithms/sortingAlgorithms.js'

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
  //create new resetArray function

  //fine tune mergeSort on this end
  mergeSort(){
    console.log('unsorted',this.state.array)
    //sort array with javascript sort method
    const javascriptSortedArray = this.state.array
      .sort((a, b) => a - b);
    //sort array with my mergeSort method
    const mySortedArray = sortingAlgorithms.mergeSort(this.state.array)
    console.log('js-sorted-array', javascriptSortedArray)
    console.log('my-sorted-array', mySortedArray)
    //test if lengths are the same
    if (javascriptSortedArray.length == mySortedArray.length){
      console.log('lengths are '+ true)}
    else{
      console.log('lengths are '+ false)};
    //test if arrays are the same 17:43
    if (javascriptSortedArray == mySortedArray){
      console.log('orders are ' + true)}
    else{
      console.log('orders are ' + false)}
    //display new sorted array on DOM
    this.setState({array:mySortedArray})
  }

  render(){
    const {array} = this.state;
    return (
      <div>
        <nav className="nav">
          <button className="nav-item" onClick={() => this.componentDidMount()}>NEW ARRAY</button>
          <div className="vertical-rule nav-item"></div>
          <button className="nav-item" onClick={() => this.mergeSort()}>MERGE SORT</button>
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
