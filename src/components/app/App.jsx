import React from "react";

import Header from "../header/Header";
import Form from "../form/Form";
import Result from "../result/Result";

const Context = React.createContext({});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: "male",
			stats: {
				age: "",
				height: "",
				weight: "",
			},
			activity: "minimal",
			btnsOff: true
		};
	}
	getGender = (e) => {
		if (e.target.value === "male") {
			console.log(`произошёл клик на кнопке ${e.target.value}`);
			this.setState(
				{
					gender: "male",
				},
				() => console.log(`установлено значение ${this.state.gender}`)
			);
		}
		if (e.target.value === "female") {
			console.log(`произошёл клик на кнопке ${e.target.value}`);
			this.setState(
				{
					gender: "female",
				},
				() => console.log(`установлено значение ${this.state.gender}`)
			);
		}
	};

	getStats = (e) => {
		let newStats = this.state.stats;
		newStats[e.target.name] = e.target.value;
		this.setState({
			stats: newStats
		}, () => {
				console.log(`в стейте: age = ${this.state.stats.age}, height = ${this.state.stats.height}, weight = ${this.state.stats.weight}`);
				console.log("работаем с кнопками...");
				this.toggleBtns();
			})
	};

	getActivity = (e) => {
		this.setState({
			activity: e.target.value
		}, () => console.log(`this.state.activity after change = ${this.state.activity}`))
	}

	toggleBtns = () => {
		const stats = Object.values(this.state.stats);
		let summ = 0;
		for (let i = 0; i <= stats.length; ++i) {
			summ += Boolean(stats[i]);
		}
		if (summ === 3) {
			console.log(`Кнопки активированы`);
			this.setState({
				btnsOff: false
			})
		} else {
			console.log(`Кнопки деактивированы`);
			this.setState({
				btnsOff: true
			})
		}
	}

	render() {
		return (
			<main className="main">
				<div className="container">
					<article className="counter">
						<Header />
						<button onClick={this.toggleBtns}>Test</button>
						<Form getGender={this.getGender} getStats={this.getStats} getActivity={this.getActivity} btnsOff={this.state.btnsOff}/>
						<Result />
					</article>
				</div>
			</main>
		);
	}
}

export { App, Context };
