import { useState } from 'react';
import { Autoplay, Pagination, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import carousel from '../data/carousel.json';

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
	const [background, setBackground] = useState(
		'linear-gradient(rgba(3, 6, 22, 0.75) 0%, rgb(3, 6, 22) 100%), url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg")'
	);

	return (
		<Swiper
			modules={[Pagination, Autoplay, Virtual]}
			direction='vertical'
			autoplay={{
				delay: 10000,
				pauseOnMouseEnter: true,
				disableOnInteraction: false
			}}
			pagination={{ clickable: true, hideOnClick: false }}
			autoHeight={true}
			grabCursor={true}
			virtual
			onSlideChange={e => {
				setBackground(
					`linear-gradient(rgba(3, 6, 22, 0.5) 0%, rgb(3, 6, 22) 100%), url(${
						carousel[e.activeIndex].backgroundImage
					})`
				);
			}}
			style={{
				overflow: 'hidden',
				height: '380px',
				transition: 'background 1s',
				backgroundImage: background,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			{carousel.map(slide => (
				<SwiperSlide key={slide.id} virtualIndex={slide.id}>
					<div className='hero h-96'>
						<div className='hero-content text-center text-neutral-content'>
							<div className='max-w-md'>
								<h1 className='mb-5 text-4xl font-bold'>{slide.title}</h1>
								<p className='mb-5 max-w-prose'>{slide.description}</p>
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
			))}
		</Swiper>
	);
};

export default Carousel;
