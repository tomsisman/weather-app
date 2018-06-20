import React from 'react';

import City from './City';

class App extends React.Component {
	render() {
		return (
			<div className='container vertical-center'>
				<div className='row justify-content-center'>
					<City city='london' country='uk' />
					<City city='paris' country='fr' />
					<City city='berlin' country='de' />
					<City city='rome' country='it' />
					<City city='brussels' country='be' />
				</div>
			</div>
		);
	}
}

export default App;