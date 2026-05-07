import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CarCard = ({ car }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="card">
    <img src={`https://unsplash.com{car.make},${car.model}`} alt="car" />
    <h3>{car.make} {car.model}</h3>
    <Link to={`/details/${car.make}/${car.model}`}>View Details</Link>
  </motion.div>
);

export default CarCard;