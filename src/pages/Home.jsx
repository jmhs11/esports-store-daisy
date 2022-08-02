import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import BestSellers from '../components/BestSellers';
import GameFilter from '../components/GameFilter';
import SpecialOffer from '../components/SpecialOffer';

const Home = () => {
	const [background, setBackground] = useState(
		'linear-gradient(rgba(3, 6, 22, 0.75) 0%, rgb(3, 6, 22) 100%), url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg")'
	);

	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay]}
				direction='vertical'
				autoplay={{
					delay: 10000,
					pauseOnMouseEnter: true,
					disableOnInteraction: false
				}}
				pagination={{ clickable: true, hideOnClick: false }}
				autoHeight={true}
				grabCursor={true}
				onSlideChange={() => {
					console.log('slide change');
					setBackground(
						`linear-gradient(rgba(3, 6, 22, 0.75) 0%, rgb(3, 6, 22) 100%), ${'url("https://placeimg.com/400/225/arch")'}`
					);
				}}
				style={{
					overflow: 'hidden',
					height: '380px',
					transition: 'background 1s',
					backgroundColor: 'rgba(3, 6, 22, 1)',
					backgroundImage: background,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			>
				<SwiperSlide>
					<div className='hero h-96'>
						<div className='hero-content text-center text-neutral-content'>
							<div className='max-w-md'>
								<h1 className='mb-5 text-4xl font-bold'>League of Legends</h1>
								<p className='mb-5'>
									League of Legends is a fast-paced, competitive online game
									that blends the speed and intensity of an RTS with RPG
									elements.
								</p>
								<div className='flex gap-2 justify-center'>
									<button className='btn btn-primary'>INSTALL GAME</button>
									<button className='btn btn-secondary'>
										ADD TO FAVORITES
									</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='hero h-96'>
						<div className='hero-content text-center text-neutral-content'>
							<div className='max-w-md'>
								<h1 className='mb-5 text-4xl font-bold'>League of Legends</h1>
								<p className='mb-5'>
									League of Legends is a fast-paced, competitive online game
									that blends the speed and intensity of an RTS with RPG
									elements.
								</p>
								<div className='flex gap-2 justify-center'>
									<button className='btn btn-primary'>INSTALL GAME</button>
									<button className='btn btn-secondary'>
										ADD TO FAVORITES
									</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='hero h-96'>
						<div className='hero-content text-center text-neutral-content'>
							<div className='max-w-md'>
								<h1 className='mb-5 text-4xl font-bold'>League of Legends</h1>
								<p className='mb-5'>
									League of Legends is a fast-paced, competitive online game
									that blends the speed and intensity of an RTS with RPG
									elements.
								</p>
								<div className='flex gap-2 justify-center'>
									<button className='btn btn-primary'>INSTALL GAME</button>
									<button className='btn btn-secondary'>
										ADD TO FAVORITES
									</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='hero h-96'>
						<div className='hero-content text-center text-neutral-content'>
							<div className='max-w-md'>
								<h1 className='mb-5 text-4xl font-bold'>League of Legends</h1>
								<p className='mb-5'>
									League of Legends is a fast-paced, competitive online game
									that blends the speed and intensity of an RTS with RPG
									elements.
								</p>
								<div className='flex gap-2 justify-center'>
									<button className='btn btn-primary'>INSTALL GAME</button>
									<button className='btn btn-secondary'>
										ADD TO FAVORITES
									</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='hero h-96'>
						<div className='hero-content text-center text-neutral-content'>
							<div className='max-w-md'>
								<h1 className='mb-5 text-4xl font-bold'>League of Legends</h1>
								<p className='mb-5'>
									League of Legends is a fast-paced, competitive online game
									that blends the speed and intensity of an RTS with RPG
									elements.
								</p>
								<div className='flex gap-2 justify-center'>
									<button className='btn btn-primary'>INSTALL GAME</button>
									<button className='btn btn-secondary'>
										ADD TO FAVORITES
									</button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			<SpecialOffer />
			<BestSellers />
			<GameFilter />
		</>
	);
};

export default Home;
