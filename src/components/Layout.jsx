import {
	CubeTransparentIcon,
	FlagIcon,
	GiftIcon,
	GlobeAltIcon,
	HeartIcon,
	HomeIcon,
	LightningBoltIcon,
	ShoppingCartIcon,
	VideoCameraIcon
} from '@heroicons/react/outline';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className='drawer'>
			<input id='menu' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				<Header>
					<label
						tabIndex='0'
						className='btn btn-ghost btn-circle drawer-button'
						htmlFor='menu'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h7'
							/>
						</svg>
					</label>
				</Header>
				{children}
			</div>
			<div className='drawer-side'>
				<label htmlFor='menu' className='drawer-overlay'></label>
				<ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
					<h3 className='mb-3'>MENU</h3>
					<li>
						<a>
							<HomeIcon className='h-6 w-6 mr-4' />
							Dashboard
						</a>
					</li>
					<li>
						<a>
							<HeartIcon className='h-6 w-6 mr-4' />
							Favorites
						</a>
					</li>
					<li>
						<a>
							<ShoppingCartIcon className='h-6 w-6 mr-4' />
							My Basket
						</a>
					</li>
					<li>
						<a>
							<VideoCameraIcon className='h-6 w-6 mr-4' />
							Stream{' '}
							<span className='badge badge-primary ml-auto'>Premium</span>
						</a>
					</li>
					<h3 className='my-3'>CATEGORIES</h3>
					<li>
						<a>
							<FlagIcon className='h-6 w-6 mr-4' />
							BestSellers
						</a>
					</li>
					<li>
						<a>
							<LightningBoltIcon className='h-6 w-6 mr-4' />
							Recently Updated
						</a>
					</li>
					<li>
						<a>
							<GlobeAltIcon className='h-6 w-6 mr-4' />
							News
						</a>
					</li>
					<li>
						<a>
							<GiftIcon className='h-6 w-6 mr-4' />
							Special Offers
						</a>
					</li>
					<li>
						<a>
							<CubeTransparentIcon className='h-6 w-6 mr-4' />
							Virtual Reality
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Layout;
