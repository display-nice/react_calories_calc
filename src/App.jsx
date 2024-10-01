import React, { useState, useEffect } from "react";

import Form from "@components/form/_Form";
import Result from "@components/Result";
import countCalories from "@utils/countCalories.js";
import Hint from "@components/Hint";

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

	// Обработчик изменений в форме. Срабатывает на любое изменение в инпутах.
	// Содержит логику активации\деактивации кнопок "рассчитать" и "очистить"
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

	// Обработчик изменений в форме
	// Работает с полями "пол", "возраст", "рост", "вес", "активность"
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
	const calcAndShowResult = (e) => {
		e.preventDefault();
		const newCalories = countCalories(form_state);
		setResultState({ showResult: true, calories: newCalories });
	};

	// Функция очистки формы при нажатии на кнопку "очистить"
	// устанавливает параметры по-умолчанию во все поля, скрывает результат
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
			<Hint />
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
