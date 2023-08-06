import { createContext , useState } from "react";
// Create a Context
export const CounterContext = createContext(null);


// Craete Counter provider
export const CounterProvider=(props)=>{
    const [count , setCount] = useState(0);
    return(
        <CounterContext.Provider value={{count , name : "Mudassir" , setCount}}>
            {/* <h1>Okay</h1> */}
            {props.children}
        </CounterContext.Provider>
    )
}
