import './App.scss';

import { PageHome } from './pages/PageHome';
import { PageReports } from './pages/PageReports';
import { PageAbout } from './pages/PageAbout';

function App() {
  return (
    <div className="App">
		<p>Hello</p>
		<PageHome />
		<PageReports />
		<PageAbout />
    </div>
  );
}

export default App;