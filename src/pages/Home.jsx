import BestSellers from '../components/BestSellers';
import Carousel from '../components/Carousel';
import GameFilter from '../components/GameFilter';
import SpecialOffer from '../components/SpecialOffer';

const Home = () => {
	return (
		<>
			<Carousel />
			<SpecialOffer />
			<BestSellers />
			<GameFilter />
		</>
	);
};

export default Home;
