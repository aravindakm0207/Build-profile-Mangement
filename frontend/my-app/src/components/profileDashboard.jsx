import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import asset11 from "../assets/asset11.png";
import asset1 from "../assets/asset1@4.png";
import asset2 from "../assets/asset2@4.png";
import arora from "../assets/arora.png"; // fallback image

const Header = () => (
  <div className="w-full h-[68px] bg-gray-200 flex items-center justify-between px-4 md:px-8 border-b border-gray-300">
    <img src={asset11} alt="TAPMI Logo" className="h-[64px]" />
    <div className="flex space-x-4">
      <img src={asset1} alt="PRME Logo" className="h-[40px]" />
      <img src={asset2} alt="AACSB Logo" className="h-[41px]" />
    </div>
  </div>
);

const Card = ({ name, age, pronoun, photo, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-[20px] p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 relative w-[300px] h-[400px] cursor-pointer"
  >
    <div className="w-full h-[200px] bg-[#F6893C] absolute top-0 rounded-t-[20px] flex items-center justify-center">
      <img
        src={photo || arora}
        alt={name}
        className="w-[140px] h-[140px] rounded-full border-4 border-white object-cover"
      />
    </div>
    <h3 className="text-lg font-semibold mt-[180px] text-center">{name}</h3>
    <p className="text-sm text-gray-600 mt-2 text-center">
      {age} | {pronoun}
    </p>
    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="mt-4 px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 border border-gray-300">
        Download my Resume
      </button>
    </a>
  </div>
);

const ProfileDashboard = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("http://localhost:3333/profiles");
        const data = await res.json();
        setCards(data); // backend should return array of profiles
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <Header />

      {loading ? (
        <div className="text-center mt-10 text-gray-600">Loading profiles...</div>
      ) : (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mt-8 justify-items-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              age={card.age}
              pronoun={card.pronoun}
              photo={card.photo} // in case backend sends a photo URL
              onClick={() => navigate(`/studentProfile/${card._id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDashboard;
