import React from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import spiderMan from "../../assets/spider-man.jpg";

const MovieCard = () => {
  // Sample data (Replace with actual data)
  const movie = {
    title: "Spider-Man: No Way Home",
    category: "Action, Adventure, Sci-Fi",
    rating: 5.2, // Out of 10
    isFavorite: true, // Initial favorite state
  };

  const toggleFavorite = () => {
    // Update isFavorite state in your data
    movie.isFavorite = !movie.isFavorite;
  };

  // Calculate filled stars based on rating
  const filledStars = Math.round(movie.rating);

  return (
    <div className="bg-black w-60 rounded-lg shadow-md overflow-hidden relative">
      <img src={spiderMan} alt="Movie Poster" className="w-full" />

      <div className="absolute top-2 right-2">
        <button
          onClick={toggleFavorite}
          className="p-2 rounded-full focus:outline-none"
        >
          {movie.isFavorite ? (
            <AiFillHeart className="text-red-500" size={24} />
          ) : (
            <AiOutlineHeart className="text-gray-400" size={24} />
          )}
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p className="text-gray-600 mt-1">{movie.category}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500">
              {i < filledStars ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;