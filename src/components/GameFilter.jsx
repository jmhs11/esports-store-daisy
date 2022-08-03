import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import gameListData from '../data/gameList.json';
import LinuxIcon from './LinuxIcon';
import MacOSIcon from './MacOSIcon';
import WindowsIcon from './WindowsIcon';

const filterDefaultValue = 'popular';

const GameFilter = () => {
	const [gameList, setGameList] = useState([]);
	const [filter, setFilter] = useState(filterDefaultValue);

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
				defaultValue={filterDefaultValue}
				className='select select-bordered max-w-xs'
			>
				<option value={'popular'}>Popular</option>
				<option value={'bestsellers'}>BestSellers</option>
				<option value={'specialoffers'}>SpecialOffers</option>
			</select>

			<div className='flex flex-col gap-2'>
				{gameList.map(game => (
					<div
						key={game.id}
						className='grid grid-cols-4 rounded first-of-type:mt-4'
					>
						<img
							src={game.image}
							alt={game.title}
							className='overflow-hidden rounded-l'
						/>
						<div className='grid grid-cols-3 px-4 md:px-6 md:grid-cols-4 gap-2 items-center border-2 border-l-0 col-start-2 col-end-5 rounded rounded-l-none'>
							<h3 className='text-sm md:text-xl font-bold'>
								{game.title}
								{game.hasTrademark && <sup className='text-xs'> TM</sup>}
							</h3>
							<div className='gap-2 hidden md:flex'>
								{game.platforms.map(platform => {
									switch (platform) {
										case 'windows':
											return (
												<WindowsIcon
													key={platform}
													className='h-6 w-6 text-white'
												/>
											);
										case 'macos':
											return (
												<MacOSIcon
													key={platform}
													className='h-6 w-6 text-white'
												/>
											);
										case 'linux':
											return (
												<LinuxIcon
													key={platform}
													className='h-6 w-6 text-white'
												/>
											);
										default:
											return null;
									}
								})}
							</div>
							<p className='text-center'>{game.price}</p>
							<div className='dropdown dropdown-top dropdown-end md:mx-auto'>
								<label
									tabIndex='0'
									className='btn btn-ghost btn-circle justify-end'
								>
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
