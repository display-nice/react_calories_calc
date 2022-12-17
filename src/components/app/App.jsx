import React from "react";

import Header from '../header/Header';
import Form from '../form/Form';
import Result from '../result/Result';

const Context = React.createContext({});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: "male",
			stats: {
				age: '',
				height: '',
				weight: ''
			},
			activity: 'minimal'
		}
	}
	getGender = (e) => {
		e.preventDefault();
		if (e.target.value === 'male') {
			console.log(`произошёл клик на кнопке ${e.target.value}`);
			this.setState({
				gender: 'male'
			}, () => console.log(`установлено значение ${this.state.gender}`))
		}
		if (e.target.value === 'female') {
				console.log(`произошёл клик на кнопке ${e.target.value}`);
			this.setState({
				gender: 'female'
			}, () => console.log(`установлено значение ${this.state.gender}`))
		}
	}
	render() {
		return (
			<main className="main">
				<div className="container">
					<article className="counter">
						<Header />
						<Form getGender={this.getGender}/>
						<Result />
					</article>
				</div>
  			</main>
		);
	}
};

export {App, Context};
