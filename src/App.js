import { useEffect, useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";
import './App.css'

const App = () => {
    const [firstName,setFirstName] = useState('John')
    const [lastName,setLastName] = useState('Doe')
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const joke = useRandomJoke(firstName,lastName)
    
    const generateJoke = (e) => {
      e.preventDefault() 
      setFirstName(firstNameRef.current.value)
      setLastName(lastNameRef.current.value)
    }
  return (
    <div>
      <h1>Random Jokes Generator</h1>
      <h3>{joke}</h3>
      <form>
        <input type="text" placeholder="firstname" ref={firstNameRef} />
        <input type="text" placeholder="lastname" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
