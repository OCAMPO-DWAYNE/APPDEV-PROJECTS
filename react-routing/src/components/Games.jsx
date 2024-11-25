import { Link } from "react-router-dom"

const games = [
    {id: 1, name: 'Teamfight Tactics', description: 'This is the number one auto battling game.'},
    {id: 2, name: 'Valorant', description: 'This the number one FPS game'},
    {id: 3, name: '2XKO', description: 'This is the number one tag-team fighting game'},
    {id: 4, name: 'Leage of Legends', description: 'This is the number one MOBA game'}
]


export default function Games() {
    return(
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>o
                        <Link to = {`/games/${game.id}`} state = {{game}}>  <strong>{game.name}</strong></Link> 
                         -
                        {game.description} 
                    </li>
                ))}
                
            </ul>
        </>
    )
}