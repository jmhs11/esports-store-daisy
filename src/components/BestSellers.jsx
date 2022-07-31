import bestSellers from '../data/bestsellers.json';

const bestSellersSliced = bestSellers.slice(0, 4);

const BestSellers = () => {
	return (
		<div className='mx-4 mb-4'>
			<div className='flex justify-between items-center mb-2'>
				<h2>BESTSELLERS</h2>
				<button className='btn btn-secondary'>VIEW MORE</button>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
				{bestSellersSliced.map(item => (
					<div
						key={item.id}
						className='card card-compact bg-base-100 shadow-xl'
					>
						<figure>
							<img src={item.image} alt={item.title} />
						</figure>
						<div className='card-body'>
							<div className='card-actions flex-nowrap justify-between items-center'>
								<div>
									<h2 className='card-title'>{item.title}</h2>
									<p>{item.price}</p>
								</div>
								<button className='btn btn-primary'>Buy Now</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BestSellers;
