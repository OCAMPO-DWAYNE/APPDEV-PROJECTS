import React, {useState} from 'react';
export default function FavoriteGames() {
    //array or stateful array
    const [games, setGames] = useState(["Doomsday Hunsters", "Hades", "ScourgeBringer"])
    function handleAddGame(){
        //referencing the text box
        const newGame = document.getElementById ("gameInput").value;
        setGames(g => [...g, newGame]) // adding newGame(new object to be inserted) into our list g(previous list)
        document.getElementById("gameInput").value = "";
    }
    function handleRemoveGames(index){
        const newGame = games.filter((game,i) => i !== index);
        setGames(newGame)
    }
    return(
        <>
        <div>
            <ul>
            {games.map((game, index) => (<li key = {index} onClick = {() =>handleRemoveGames(index)}>{game}</li>))}
            </ul>
            <input type='text' name='gameInput' id='gameInput' />
            <button type='button' onClick={handleAddGame} > Add Game</button>
        </div>
        </>
    )
}