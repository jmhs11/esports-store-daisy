import { HeartIcon } from '@heroicons/react/outline';
import data from '../data/specialOffer.json';

const first3Games = data.slice(0, 3);

const SpecialOffer = () => {
	return (
		<div className='mx-4 mb-4'>
			<div className='flex justify-between items-center mb-2'>
				<h2>SPECIAL OFFERS</h2>
				<button className='btn btn-secondary'>VIEW MORE</button>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
				{first3Games.map(item => (
					<div key={item.id} className='card bg-base-100 shadow-xl image-full'>
						<figure>
							<img src={item.image} alt={item.title} />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{item.title}</h2>
							<p>{item.shortDescription}</p>
							<div className='card-actions justify-start'>
								<button className='btn btn-primary'>PLAY</button>
								<button className='btn btn-secondary'>
									<HeartIcon className='h-6 w-6' />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SpecialOffer;
