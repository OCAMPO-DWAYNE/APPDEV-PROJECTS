import { useLocation } from "react-router-dom";

export default function Game() {
    const location = useLocation();
    const game = location.state?.game || {};

    return (
        <div className="game-details">
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} style={{ maxWidth: "100%", marginBottom: "20px" }} />
            <p>{game.description}</p>
            <h2>Game Reviews</h2>
            <ul>
                {game.reviews?.map((review) => (
                    <li key={review.id} style={{ marginBottom: "10px" }}>
                        {review.review}
                    </li>
                ))}
            </ul>
        </div>
    );
}
