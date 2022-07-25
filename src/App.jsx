import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
	return (
		<Layout>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</main>
		</Layout>
		// <div id='layout' className='h-screen'>
		// 	<Header />
		// 	<Aside />
		// 	<main>
		// 		<Routes>
		// 			<Route path='/' element={<Home />} />
		// 			<Route path='/profile' element={<Profile />} />
		// 			<Route path='*' element={<Error404 />} />
		// 		</Routes>
		// 	</main>
		// </div>
	);
};

export default App;
