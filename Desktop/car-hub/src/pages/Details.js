import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarDetails } from '../services/api';

const Details = () => {
  const { make, model } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCarDetails(make, model).then(setCar);
  }, [make, model]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="details-page" style={{ backgroundColor: '#f0f2f5' }}>
      <img src={`https://unsplash.com{car.model}`} alt={car.model} />
      <h1>{car.make} {car.model}</h1>
      <div className="specs">
        <p>Class: {car.class}</p>
        <p>Transmission: {car.transmission === 'a' ? 'Automatic' : 'Manual'}</p>
        <p>Fuel Type: {car.fuel_type}</p>
        <p>Rating: ⭐⭐⭐⭐⭐</p>
        <p className="cost">Estimated: $45,000</p>
      </div>
    </div>
  );
};

export default Details;