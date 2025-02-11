import { useState, useEffect } from "react";

export function Container () {
    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(0);
    const [user, setUser] = useState(1);

    function getUserData () {

        fetch('https://api.github.com/users/edusantosfr')
        .then((res) => res.json())
        .then((json) => setUser(json))
    }

    useEffect(()=> {
        console.log("Executa quando renderiza")
    })

    useEffect(()=> {
        console.log("Executa quando count altera")
    },[count])

    useEffect(()=> {
        console.log(user)
    },[user])

    useEffect(() => {
        getUserData()
    },[])

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Adicona +</button>
            <p>Contador: {count}</p>

            <button onClick={() => setCountB((prevCount) => prevCount + 1)}>Adicona +</button>
            <p>Contador B: {countB}</p>
        </div>
    )
}