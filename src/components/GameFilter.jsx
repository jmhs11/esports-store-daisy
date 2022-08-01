import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import gameListData from '../data/gameList.json';

const GameFilter = () => {
	const [gameList, setGameList] = useState([]);
	const [filter, setFilter] = useState();

	const handleOnChange = e => {
		setFilter(e.target.value);
	};

	useEffect(() => {
		setGameList(gameListData.filter(game => game.category === filter));
	}, [filter]);

	return (
		<div className='m-4'>
			<select
				onChange={handleOnChange}
				className='select select-bordered max-w-xs md:hidden mb-4'
			>
				<option selected value={'popular'}>
					Popular
				</option>
				<option value={'bestsellers'}>BestSellers</option>
				<option>SpecialOffers</option>
			</select>

			<div>
				{gameList.map(game => (
					<div
						key={game.id}
						className='grid grid-cols-4 rounded overflow-hidden'
					>
						<img src={game.image} alt={game.name} />
						<div className='flex gap-2 justify-around items-center border-2 border-l-0 col-start-2 col-end-5 rounded rounded-l-none'>
							<h3 className='text-xl font-bold'>{game.title}</h3>
							<p>{game.price}</p>
							<DotsHorizontalIcon className='h-6 w-6' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GameFilter;
