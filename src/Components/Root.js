import React from 'react';

import HeaderSection from './Header';
import HomeSection from './HomeSection';
import FooterSection from './Footer';

export class Root extends React.Component {
	render() {
		return (
			<>
				<div id="nt_wrapper" className="App">
					<HeaderSection />
					<HomeSection />
					<FooterSection />
				</div>
			</>
			)
		
	};
};

export default Root;