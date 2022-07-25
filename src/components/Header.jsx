import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';

const Header = ({ children }) => {
	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>{children}</div>
			<div className='navbar-center'>
				<Link to={'/'}>
					<LogoIcon className='h-8 text-primary' />
				</Link>
			</div>
			<div className='navbar-end'>
				<div className='dropdown dropdown-end'>
					<label tabIndex='0' className='btn btn-ghost btn-circle'>
						<div className='avatar placeholder'>
							<div className='bg-neutral-focus ring ring-primary text-neutral-content rounded-full w-8'>
								<span className='text-xs'>AA</span>
							</div>
						</div>
					</label>
					<ul
						tabIndex='0'
						className='menu dropdown-content mt-3 p-2 shadow bg-base-100 border rounded-box w-52'
					>
						<li>
							<Link to={'/profile'}>Profile</Link>
						</li>
						<div className='divider m-0'></div>
						<li>
							<a>Settings</a>
						</li>
						<div className='divider m-0'></div>
						<li>
							<a>Log Out</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
