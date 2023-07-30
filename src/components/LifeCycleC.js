import React, { Component } from 'react'

export default class LifeCycleC extends Component {
    componentDidUpdate(prevProps , prevState){
        if(prevProps !== this.props.number){
          console.log("ComponentDidUpdate : when component is updated")
        }
      }

      componentWillUnmount(){
        console.log("componentWillUnmount : When component is Removed")
      }
      
    
  render() {
    return (
      <div>
        <p>Count is {this.props.number}</p>
      </div>
    )
  }
}
