import React from "react";

const FormStats = ({ age, height, weight, changeFormState }) => {
	const items = [
		{
			value: "age",
			label: "Возраст",
			units: "лет",
		},
		{
			value: "height",
			label: "Рост",
			units: "см",
		},
		{
			value: "weight",
			label: "Вес",
			units: "кг",
		},
	];
	const propsValues = { age, height, weight };
	const inputs = items.map((item) => {
		const {value, label, units} = item;
		return (
			<div className="input" key={"input " + value}>
				<div className="input__heading">
					<label className="heading" htmlFor={value}>
						{label}
					</label>
				</div>
				<div className="input__wrapper">
					<input
						onChange={changeFormState}
						value={propsValues[value]}
						type="number"
						id={value}
						name={value}
						placeholder="0"
						inputMode="decimal"
						maxLength="3"
						required
					/>
					<span className="input__heading-unit">{units}</span>
				</div>
			</div>
		);
	});
	return (
		<fieldset className="form__item form__parameters" name="parameters">
			<legend className="visually-hidden">Физические параметры</legend>
			<div className="inputs-group">
				{inputs}
			</div>
		</fieldset>
	);
};

export default FormStats;
