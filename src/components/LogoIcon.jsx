const LogoIcon = ({ className = 'w-6 h-6' }) => {
	return (
		<svg className={className} viewBox='-10 -10 620 320'>
			<path
				d='M 300 0 L 225 75 L 150 0 L 0 150 L 150 300 L 450 0 L 600 150 L 450 300 L 375 225 L 300 300'
				stroke='currentColor'
				strokeWidth='20'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
			<line
				x1='150'
				y1='110'
				x2='150'
				y2='190'
				stroke='currentColor'
				strokeWidth='20'
				strokeLinecap='round'
			></line>
			<line
				x1='110'
				y1='150'
				x2='190'
				y2='150'
				stroke='currentColor'
				strokeWidth='20'
				strokeLinecap='round'
			></line>
			<circle cx='450' cy='110' r='15' fill='currentColor'></circle>
			<circle cx='410' cy='150' r='15' fill='currentColor'></circle>
			<circle cx='450' cy='190' r='15' fill='currentColor'></circle>
			<circle cx='490' cy='150' r='15' fill='currentColor'></circle>
		</svg>
	);
};

export default LogoIcon;
