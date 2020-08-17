import React from 'react';
import './SortingAnimator.css'
import {resetArray, areArraysEqual} from '../helperFile.jsx';
import {mergeSort, getMergeSortAnimations} from '../SortingAlgorithms/sortingAlgorithms.js'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


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
  resetArray(){
    const array = resetArray();
    this.setState({array});
  }
  //fine tune mergeSort on this end
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newWidth] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.width = `${newWidth}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  //
  // mergeSort(){
  //   const animations = sortingAlgorithms.getMergeSortAnimations(this.state.array);
  //   const newAnimations = [];
  //   for (const animation of animations) {
  //     newAnimations.push(animation.comparison);
  //     newAnimations.push(animation.comparison);
  //     newAnimations.push(animation.swap);
  //   }
  //   for (let i=0; i<newAnimations.length; i++) {
  //     const arrayBars = document.getElementByClassName('array-bar');
  //     const [barOneIndx, barTwoIdnx] = newAnimations[i];
  //     const barOneStyle = arrayBars[barOneIndx].style;
  //     const barTwoStyle = arrayBars[barTwoIndx].style;
  //     const isColorChange = i % 3 != 2;
  //     if (isColorChange) {
  //       const color = i % 3 === 0 ? 'red' : 'turquoise';
  //       setTimeout(() => {
  //         arrayBars[barOneIndx].style.backgroundColor = color;
  //         arrayBars[barTwoIndx].style.backgroundColor = color;
  //       }, i * 5);
  //     } else {
  //       setTimeout(() => {
  //         const tempHeight = barOne.height;
  //         barOneStyle.height = barTwoStyle.height;
  //         barOneStyle.height = tempHeight;
  //       }, i * 5);
  //     }
  //   }
  // }

  //large scale testing algorithm with DOM button
  // testSortingAlgorithms(){
  //   //generate new array]
  //   let testArray = resetArray()
  //   //run sort() * 100
  //   for (let i=0; i<100; i++){
  //     //sort the test array
  //     let sortedArray = mergeSort(testArray);
  //     //create js sorted array
  //     const javascriptSortedArray = testArray
  //       .sort((a, b) => a - b);
  //     //if sorted array == js sorted array return true; else false
  //     console.log(areArraysEqual(javascriptSortedArray, sortedArray))
  //   }
  // }

  render(){
    const {array} = this.state;
    console.log(array.length)
    return (
      <div>
        <nav className="nav">
          <button className="nav-item" onClick={() => this.resetArray()}>NEW ARRAY</button>
          <div className="vertical-rule nav-item"></div>
          <button className="nav-item" onClick={() => this.mergeSort()}>MERGE</button>
          <button className="nav-item">QUICK</button>
          <button className="nav-item">HEAP</button>
          <button className="nav-item">BUBBLE</button>
          <div className="vertical-rule nav-item"></div>
          <button className="nav-item" onClick={() => this.testSortingAlgorithms()}>Test</button>
        </nav>
        <div className="array-container">
          {array.map((value, indx) => (
            <div className ="array-bar-container">
              <div className="array-bar" key={indx} style={{width:`${value}px`}}>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
