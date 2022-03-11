import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { PageHome } from './pages/PageHome';
import { PageReports } from './pages/PageReports';
import { PageAbout } from './pages/PageAbout';
import { PageInfo } from './pages/PageInfo';
import { Nav } from './components/Nav';

function App() {
	return (
		<div className="App">
			<h1>Website</h1>
			<Nav/>
			<div className="page">
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/reports" element={<PageReports />} />
					<Route path="/about" element={<PageAbout />} />
					<Route path="/info" element={<PageInfo />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;