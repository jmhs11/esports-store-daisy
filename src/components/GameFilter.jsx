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
				defaultValue={'popular'}
				className='select select-bordered max-w-xs md:hidden mb-4'
			>
				<option value={'popular'}>Popular</option>
				<option value={'bestsellers'}>BestSellers</option>
				<option value={'specialoffers'}>SpecialOffers</option>
			</select>

			<div className='flex flex-col gap-2'>
				{gameList.map(game => (
					<div key={game.id} className='grid grid-cols-4 rounded'>
						<img src={game.image} alt={game.title} />
						<div className='flex gap-2 justify-around items-center border-2 border-l-0 col-start-2 col-end-5 rounded rounded-l-none'>
							<h3 className='text-xl font-bold'>
								{game.title}
								{game.hasTrademark && <sup className='text-xs'> TM</sup>}
							</h3>
							<p>{game.price}</p>
							<div className='dropdown dropdown-top dropdown-end'>
								<label tabIndex='0' className='btn btn-ghost btn-circle'>
									<DotsHorizontalIcon className='h-6 w-6' />
								</label>
								<ul
									tabIndex='0'
									className='menu dropdown-content mt-3 p-2 shadow bg-base-100 border rounded-box'
								>
									<li></li>
									<div className='divider m-0'></div>
									<li></li>
									<li></li>
									<div className='divider m-0'></div>
									<li></li>
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GameFilter;
