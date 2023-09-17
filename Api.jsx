import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function fetch() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        fetch();

    })
    return (
        <>
            <div className="container">
                <div className="cont">
                    <h1 className="heading">Pokemon!!!!</h1>
                    <p>You selected:{num}</p>
                    <p>Name:{name} </p>
                    <p>Number of moves:{moves} </p>
                    <div className="select">
                        <select value={num} onChange={(e) => setNum(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
        </>

    )
}



export default Api;