import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';
import AdminDashboard from './AdminDashboard';
import './App.css'; 

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); 
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role); 
  };

  const addGame = (game) => {
    setGames([...games, game]);
  };

  const deleteGame = (game) => {
    setGames(games.filter(g => g !== game));
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <>
      {isLoggedIn ? (
        userRole === 'admin' ? (
          <AdminDashboard 
            games={games} 
            addGame={addGame} 
            deleteGame={deleteGame} 
            reviews={reviews}
            addReview={addReview}
          />
        ) : (
          <Reviews games={games} addGame={addGame} addReview={addReview} />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
