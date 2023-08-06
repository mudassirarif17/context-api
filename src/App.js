import React , {useContext} from 'react'
// If you want use the value of context you should import the hook which is useContext hook
import Counter from "./components/Counter"
// Here I am importing my Context
import {CounterContext} from "./context/Counter"
import "./App.css"


export default function App() {
  const counterState = useContext(CounterContext)
  console.log("Context" , counterState)
  return (
    <div className='App'>
      <h1>Count is {counterState.count}</h1>
      <p>{counterState.name}</p>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}
