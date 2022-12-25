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
			activity: "min",
			calcBtnOff: true,
			clearBtnOff: true,
			resultIsVisible: false,
			calories: {
				norm: 3800,
				min: 3300,
				max: 4000
			}
		};		
	}
	
	getGender = (e) => {
		this.setState(
			{
				gender: e.target.value,
			},
			() => this.clearBtnSwitcher()
		);
	};

	getStats = (e) => {
		let newStats = this.state.stats;
		newStats[e.target.name] = e.target.value;
		this.setState(
			{
				stats: newStats,
			},
			() => {
				this.calcBtnSwitcher();
				this.clearBtnSwitcher();
			}
		);
	};

	getActivity = (e) => {
		this.setState(
			{
				activity: e.target.value,
			},
			() => this.clearBtnSwitcher()
		);
	};

	calcBtnSwitcher = () => {
		const stats = Object.values(this.state.stats);
		let summ = 0;
		for (let i = 0; i <= stats.length; ++i) {
			summ += Boolean(stats[i]);
		}
		if (summ === 3) {
			console.log(`Кнопки активированы`);
			this.setState({
				calcBtnOff: false,
			});
		} else {
			console.log(`Кнопки деактивированы`);
			this.setState({
				calcBtnOff: true,
			});
		}
	};

	clearBtnSwitcher = () => {		
		const current = {
			gender: this.state.gender,
			stats: {
				age: this.state.stats.age,
				height: this.state.stats.height,
				weight: this.state.stats.weight,
			},
			activity: this.state.activity
		}
		console.log('defaults = ', this.defaults);
		console.log('current = ', current);
		if (JSON.stringify(current) === JSON.stringify(this.defaults)) {
			console.log(`current = defaults`);
			this.setState({
				clearBtnOff: true
			})
		} else {
			console.log(`current != defaults`);
			this.setState({
				clearBtnOff: false
			})
		}
	}

	count = (e) => {
		e.preventDefault();
		let genderCoeff;
		if (this.state.gender === 'male') {genderCoeff = 5}
		else if (this.state.gender === 'female') {genderCoeff = -161}
		
		let activityCoeff;
		switch (this.state.activity) {
			case "min":
				activityCoeff = 1.2;
				break;
			case "low":
				activityCoeff = 1.375;
				break;
			case "medium":
				activityCoeff = 1.55;
				break;
			case "high":
				activityCoeff = 1.725;
				break;
			case "max":
				activityCoeff = 1.9;
				break;
			default:
				activityCoeff = 1.2;
				break;
		}

		let N = Math.round(
			(10 * this.state.stats.weight +
				6.25 * this.state.stats.height -
				5 * this.state.stats.age +
				genderCoeff) *
				activityCoeff
		);

		let newCalories = {};
		newCalories.norm = N; // ккал для поддержания веса
		newCalories.min = Math.round(N - 0.15 * N); // ккал для снижения веса
		newCalories.max = Math.round(N + 0.15 * N); // ккал для набора веса
		console.log(newCalories);
		this.setState({
			calories: newCalories,
			resultIsVisible: true
		})
	}

	resetForm = () => {
		const defaults = {
			gender: 'male',
			stats: {
				age: '',
				height: '',
				weight: '',
			},
			activity: 'min',
		}
		this.setState({
			resultIsVisible: false,
			gender: defaults.gender,
			stats: defaults.stats,
			activity: defaults.activity,
			clearBtnOff: true
		}, () => {console.log(this.state)})
	}
	
	render() {
		return (
			<main className="main">
				<div className="container">
					<article className="counter">
						<Header />
						<Form
							getGender={this.getGender}
							getStats={this.getStats}
							getActivity={this.getActivity}
							calcBtnOff={this.state.calcBtnOff}
							clearBtnOff={this.state.clearBtnOff}
							count={this.count}
							resetForm={this.resetForm}
							gender={this.state.gender}
							stats={this.state.stats}
							activity={this.state.activity}
						/>
						<Result calories={this.state.calories} resultIsVisible={this.state.resultIsVisible}/>
					</article>
				</div>
			</main>
		);
	}
}

export { App, Context };
