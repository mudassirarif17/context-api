// This Component is called in App1.js file 
import React , { useEffect } from 'react'

function LifeCycle({number}) {

  useEffect(()=>{
    // console.log("It is also used as a componentDidMount")
    console.log("Functional Component :(It is used as a componentwillUpdate when we pass array dependency) Updating");
    return()=>{
      console.log("Functional Component : removed")
    }
  },[number])


  return (
    <div>
      <p>Count {number}</p>
    </div>
  )
}

export default LifeCycle
