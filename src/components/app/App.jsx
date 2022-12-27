import React from "react";

import Header from "@components/header/Header";
import Form from "@components/form/Form";
import Result from "@components/result/Result";

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
				max: 4000,
			},
		};
		this.defaults = {
			resultIsVisible: false,
			gender: "male",
			stats: {
				age: "",
				height: "",
				weight: "",
			},
			activity: "min",
			clearBtnOff: true,
			calcBtnOff: true,
		};
	}

	// Функция получает значение пола и записывает его в стейт
	// затем запускается проверка нужно ли разблокировать кнопку очистки формы
	getGender = (e) => {
		this.setState(
			{
				gender: e.target.value,
			},
			() => this.clearBtnSwitcher()
		);
	};

		// Функция получает значение пола и записывает его в стейт
	// затем запускается проверка нужно ли разблокировать кнопку "очистить"
	// и кнопку "рассчитать"
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

		// Функция получает значение физ.активности и записывает его в стейт
	// затем запускается проверка нужно ли разблокировать кнопку очистки формы
	getActivity = (e) => {
		this.setState(
			{
				activity: e.target.value,
			},
			() => this.clearBtnSwitcher()
		);
	};

	// Функция проверяет, все ли три поля "вес", "рост" и "возраст" заполнены
	// Если да показывает кнопку "рассчитать", иначе - скрывает.
	calcBtnSwitcher = () => {
		const stats = Object.values(this.state.stats);
		let summ = 0;
		for (let i = 0; i <= stats.length; ++i) {
			summ += Boolean(stats[i]);
		}
		if (summ === 3) {
			this.setState({
				calcBtnOff: false,
			});
		} else {
			this.setState({
				calcBtnOff: true,
			});
		}
	};

	// Функция проверяет, нужно ли разблокировать кнопку очистки формы
	// Берутся текущие значения того, что указал пользователь (объект current)
	// и сравниваются с настройками по-умолчанию (объект this.defaults)
	// перед сравнением происходит преобразование в json
	// если текущие значения равны дефолтным, кнопку очистки разблокировать нет смысла
	// а если не равны - разблокируем, чтобы была возможность сделать сброс.
	clearBtnSwitcher = () => {
		const current = {
			gender: this.state.gender,
			stats: {
				age: this.state.stats.age,
				height: this.state.stats.height,
				weight: this.state.stats.weight,
			},
			activity: this.state.activity,
		};
		if (JSON.stringify(current) === JSON.stringify(this.defaults)) {
			this.setState({
				clearBtnOff: true,
			});
		} else {
			this.setState({
				clearBtnOff: false,
			});
		}
	};

	// Функция, выполняющая расчёт калорий по нажатию на кнопку "рассчитать"
	// Использует утилиту с внутренними коэффициентами
	// Базовая формула для мужчин: N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5
	// Базовая формула для женщин: N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161
	// Полученное значение (N) умножаем на коэффициент активности и округляем до целого. 
	// Результат и будет нормой калорий для поддержания веса.
	// Коэффициенты активности. Минимальная: 1.2. Низкая: 1.375. Средняя: 1.55. Высокая: 1.725. Очень высокая: 1.9.
	// Для набора веса: прибавляем 15% от нормы к рассчитанной норме.
	// Сброс веса: вычитаем 15% от нормы из рассчитанной нормы.
	count = (e) => {
		e.preventDefault();
		let genderCoeff;
		if (this.state.gender === "male") {
			genderCoeff = 5;
		} else if (this.state.gender === "female") {
			genderCoeff = -161;
		}

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
		this.setState({
			calories: newCalories,
			resultIsVisible: true,
		});
	};

	// Функция, включающаяся при нажатии на кнопку "Очистить"
	// Устанавливает значения по-умолчанию
	// Для объекта stats делается клонирование, чтобы не передавалась ссылка на объект
	resetForm = (e) => {
		e.preventDefault();
		let defaultsStatsClone = Object.assign({}, this.defaults.stats);
		this.setState(
			{
				resultIsVisible: this.defaults.resultIsVisible,
				gender: this.defaults.gender,
				stats: defaultsStatsClone,
				activity: this.defaults.activity,
				clearBtnOff: this.defaults.clearBtnOff,
				calcBtnOff: this.defaults.calcBtnOff,
			}
		);
	};

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
						<Result
							calories={this.state.calories}
							resultIsVisible={this.state.resultIsVisible}
						/>
					</article>
				</div>
			</main>
		);
	}
}

export { App };
