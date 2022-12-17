import React from "react";

import Header from '../header/Header';
import Form from '../form/Form';
import Result from '../result/Result';

// const Context = React.createContext({
// 	test: 123,
// });

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<main className="main">
				<div className="container">
					<article className="counter">
						{/* <Context.Provider value={test}> */}
							<Header />
							<Form />
							<Result />
						{/* </Context.Provider> */}
					</article>
				</div>
  			</main>
		);
	}
};