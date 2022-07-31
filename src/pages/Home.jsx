import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import SpecialOffer from '../components/SpecialOffer';

const Home = () => {
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
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				style={{
					overflow: 'hidden',
					height: '380px'
				}}
			>
				<SwiperSlide>
					<div className='hero h-96 bg-[url(https://esports-store.kuuro.dev/assets/images/league-of-legends-background.png)]'>
						<div className='hero-overlay bg-opacity-0 bg-base-100'></div>
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
					<div className='hero h-96 bg-[url(https://esports-store.kuuro.dev/assets/images/league-of-legends-background.png)]'>
						<div className='hero-overlay bg-opacity-0 bg-base-100'></div>
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
					<div className='hero h-96 bg-[url(https://esports-store.kuuro.dev/assets/images/league-of-legends-background.png)]'>
						<div className='hero-overlay bg-opacity-0 bg-base-100'></div>
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
					<div className='hero h-96 bg-[url(https://esports-store.kuuro.dev/assets/images/league-of-legends-background.png)]'>
						<div className='hero-overlay bg-opacity-0 bg-base-100'></div>
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
					<div className='hero h-96 bg-[url(https://esports-store.kuuro.dev/assets/images/league-of-legends-background.png)]'>
						<div className='hero-overlay bg-opacity-0 bg-base-100'></div>
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
		</>
	);
};

export default Home;
