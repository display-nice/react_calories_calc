import React, { useState, useEffect } from "react";

import Form from "@components/form/Form";
import Result from "@components/result/Result";
import countCalories from "@utils/countCalories.js";
// import Hint from "@components/hint/Hint";

const App = () => {
	const initialState = {
		form: {
			gender: "male",
			age: "",
			height: "",
			weight: "",
			activity: "minimal",
		},
		result: {
			showResult: false,
			calories: "",
		},
		calcBtnActive: false,
		clearBtnActive: false,
	};
	const [form_state, setFormState] = useState(initialState.form);
	const [result_state, setResultState] = useState(initialState.result);
	const [calcBtnActive, setCalcBtnActive] = useState(initialState.calcBtnActive);
	const [clearBtnActive, setClearBtnActive] = useState(initialState.clearBtnActive);

	useEffect(() => {
		const calcBtnCheckCond = () => {
			return form_state.age !== "" && form_state.height !== "" && form_state.weight !== "";
		};
		const clearBtnCheckCond = () => {
			return JSON.stringify(form_state) === JSON.stringify(initialState.form);
		};
		// Проверка, нужно ли разблокировать кнопку "Рассчитать"
		// Для этого достаточно знать, что возраст, рост и вес заполнены
		if (calcBtnCheckCond()) {
			setCalcBtnActive(true);
		} else {
			setCalcBtnActive(false);
		}

		// Проверка, нужно ли разблокировать кнопку "Очистить"
		if (clearBtnCheckCond()) {
			// если true, значит все значения формы = по умолчанию, кнопка "Очистить" блокируется
			setClearBtnActive(false);
		} else {
			// если что-то в форме заполнялось (отлично от начальных настроек), то кнопка "Очистить" активируется
			setClearBtnActive(true);
		}
	}, [form_state]);

	const changeFormState = (e) => {
		let { name, value } = e.target;
		if (name === "age" || name === "weight" || name === "height") {
			value = Number(value);
		}
		setFormState((form_state) => {
			const newState = {
				...form_state,
				[name]: value,
			};
			return newState;
		});
	};

	// Функция, выполняющая расчёт калорий по нажатию на кнопку "рассчитать"
	// Использует утилиту countCalories с внутренними коэффициентами
	// Базовая формула для мужчин: N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5
	// Базовая формула для женщин: N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161
	// Полученное значение (N) умножаем на коэффициент активности и округляем до целого.
	// Результат и будет нормой калорий для поддержания веса.
	// Коэффициенты активности. Минимальная: 1.2. Низкая: 1.375. Средняя: 1.55. Высокая: 1.725. Очень высокая: 1.9.
	// Для набора веса: прибавляем 15% от нормы к рассчитанной норме.
	// Сброс веса: вычитаем 15% от нормы из рассчитанной нормы.
	const calcAndShowResult = (e) => {
		e.preventDefault();
		const newCalories = countCalories(form_state);
		setResultState({ showResult: true, calories: newCalories });
	};

	const clearForm = (e) => {
		e.preventDefault();
		setFormState(initialState.form);
		setCalcBtnActive(initialState.calcBtnActive);
		setClearBtnActive(initialState.clearBtnActive);
		setResultState((result_state) => {
			return {
				...result_state,
				showResult: false,
			};
		});
	};

	return (
		<main className="main">
			{/* <Hint /> */}
			<div className="container">
				<article className="counter">
					<h1 className="counter__heading heading-main">Калькулятор калорий</h1>
					<Form
						form_state={form_state}
						changeFormState={changeFormState}
						calcBtnActive={calcBtnActive}
						clearBtnActive={clearBtnActive}
						calcAndShowResult={calcAndShowResult}
						clearForm={clearForm}
					/>
					<Result result_state={result_state} />
				</article>
			</div>
		</main>
	);
};
export { App };
