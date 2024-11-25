import { Link } from "react-router-dom";

const games = [
    {
        id: 1,
        name: "Teamfight Tactics",
        description: "A competitive auto-battler game where strategy and adaptability are key to success.",
        image: "https://cdn1.epicgames.com/offer/ada73cc2d68a46a18f529ebb87328dee/EGS_TeamfightTactics_RiotGames_S1_2560x1440-553cf3289eaeea5b4103719d00ded2a5",
        reviews: [
            { id: 1, review: "An addictive strategy game with endless combinations to explore." },
            { id: 2, review: "The ranked mode provides a challenging yet rewarding experience." },
            { id: 3, review: "Each patch brings exciting changes, keeping the game fresh and dynamic." },
            { id: 4, review: "Graphics and animations are stunning, enhancing the overall experience." },
            { id: 5, review: "A must-play for fans of strategy games who enjoy deep and engaging mechanics." }
        ]
    },
    {
        id: 2,
        name: "Valorant",
        description: "A tactical first-person shooter blending precise gunplay with unique agent abilities.",
        image: "https://th.bing.com/th/id/OIP.kdyUkPFJQq1e7vJ46z70pgHaEK?w=289&h=180&c=7&r=0&o=5&pid=1.7",
        reviews: [
            { id: 1, review: "A thrilling FPS with a perfect balance of gunplay and abilities." },
            { id: 2, review: "The tactical aspect is top-notch, rewarding teamwork and communication." },
            { id: 3, review: "Maps are well-designed, providing a variety of strategic options." },
            { id: 4, review: "Agents add a unique flair to each match, making it feel personal." },
            { id: 5, review: "The competitive scene is highly engaging, even for casual players." }
        ]
    },
    {
        id: 3,
        name: "2XKO",
        description: "An exhilarating tag-team fighting game with fast-paced action and dramatic combos.",
        image: "https://i.pinimg.com/736x/c5/01/9c/c5019c277d368443acb98697c1a969ae.jpg",
        reviews: [
            { id: 1, review: "The tag-team mechanics are fun and lead to epic comebacks." },
            { id: 2, review: "Fighting animations are fluid and incredibly satisfying." },
            { id: 3, review: "The diverse character roster offers something for everyone." },
            { id: 4, review: "It's easy to pick up but takes time to master, which I love." },
            { id: 5, review: "Multiplayer battles are intense and very competitive." }
        ]
    },
    {
        id: 4,
        name: "League of Legends",
        description: "A classic multiplayer online battle arena game featuring strategic teamwork and diverse champions.",
        image: "https://th.bing.com/th/id/OIP.mHSeDXGOgtJ6CElBk5vJ0wHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7",
        reviews: [
            { id: 1, review: "A highly strategic MOBA with a vast array of champions to master." },
            { id: 2, review: "The teamwork and coordination required make victories very satisfying." },
            { id: 3, review: "Frequent updates and new champions keep the game feeling fresh." },
            { id: 4, review: "The esports scene is unmatched, with thrilling tournaments year-round." },
            { id: 5, review: "The community can be a bit tough, but the gameplay makes up for it." }
        ]
    },
    {
        id: 5,
        name: "Minecraft",
        description: "A sandbox adventure game where creativity and exploration have no bounds.",
        image: "https://th.bing.com/th/id/OIP.L2GdTjbwSNByvTqU2zaaZwHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7",
        reviews: [
            { id: 1, review: "Endless possibilities for building, exploring, and creating." },
            { id: 2, review: "The survival mode provides an excellent challenge for adventurers." },
            { id: 3, review: "The modding community makes this game endlessly customizable." },
            { id: 4, review: "Perfect for both relaxing solo play and exciting multiplayer fun." },
            { id: 5, review: "Its educational potential is incredible, making it great for all ages." }
        ]
    }
];

export default function Games() {
    return (
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id} style={{ marginBottom: "20px" }}>
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            <img src={game.image} alt={game.name} style={{ width: "150px", marginRight: "10px" }} />
                            <strong>{game.name}</strong>
                        </Link> - {game.description}
                    </li>
                ))}
            </ul>
        </>
    );
}
