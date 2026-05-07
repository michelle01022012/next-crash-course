import React, { useState, useEffect } from 'react';
import { fetchCars } from '../services/api';
import CarCard from '../components/CarCard';
import { motion } from 'framer-motion';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = async (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const results = await fetchCars(search || 'fast');
      setCars(results);
    }
  };

  useEffect(() => { handleSearch({ type: 'click' }); }, []);

  return (
    <div className="home-page">
      <header className="hero">
        <h1>Find Your Dream Car</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for 'fast'..." 
            onKeyDown={handleSearch}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
      </header>
      <motion.div layout className="car-grid">
        {cars.map((car, index) => <CarCard key={index} car={car} />)}
      </motion.div>
    </div>
  );
};

export default Home;