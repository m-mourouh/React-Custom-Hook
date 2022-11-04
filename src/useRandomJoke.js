
import { useState, useEffect} from "react"

const useRandomJoke = (firstName,lastName) => {   
    const [joke,setJoke] = useState('')
    useEffect(() => {
        fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
        .then(res => res.json())
        .then(data => setJoke(data.value.joke))
    },[firstName,lastName])

    return joke;
}

export default useRandomJoke;
