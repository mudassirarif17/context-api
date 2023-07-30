// This file is created for understanding about React life cycle method
// In react class component the method which is execute is 1.constructor , then 1. componentdidmount , then 3.render and then 4.componentdidupdate and at the last 5.componentwillunmount
import React, { Component } from 'react'
import LifeCycleC from './components/LifeCycleC';
import LifeCycleF from './components/LifeCycleF';

export default class App1 extends Component {

  // constructor is used when you want to initialize some variables before the page is ready
  constructor(){
    super();
    this.state={
      count : 0.
    }
  }
  componentDidMount(){
    console.log("componentDidMount : When component render first time");
  }

  increment() {
    this.setState({
      count : this.state.count + 1
    })
  }

  render() {
    console.log("render function is executed after constructor and each time when component is rerender")
    return (
      <div>
        <h1>React Life Cycle Method</h1>
        {/* <p>Count is {this.state.count}</p> */}

        {/* <LifeCycleC number={this.state.count}/> */}
        <LifeCycleF number={this.state.count}/>

        {/* in normal function we dont have this so we use bind method to solve this problem before es6 */}
        {/* <button onClick={this.increment.bind(this)}>Click Me</button> */}

        {/* Arrow Function is the solution of bind this in ES6 */}
        <button onClick={()=>this.increment()}>Click Me</button>

      </div>
    )
  }
}
