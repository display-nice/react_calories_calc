import React from "react";

const FormActivity = ({ activity, changeFormState }) => {
	const items = [
		{
			value: "minimal",
			label: "Минимальная",
			description: "Сидячая работа и нет физических нагрузок",
		},
		{
			value: "low",
			label: "Низкая",
			description: "Редкие, нерегулярные тренировки, активность в быту",
		},
		{
			value: "medium",
			label: "Средняя",
			description: "Тренировки 3-5 раз в неделю",
		},
		{
			value: "high",
			label: "Высокая",
			description: "Тренировки 6-7 раз в неделю",
		},
		{
			value: "very_high",
			label: "Очень высокая",
			description: "Больше 6 тренировок в неделю и физическая работа",
		},
	];
	const lis = items.map((item) => {
		const {value, label, description} = item
		return (
			<li className="radio" key={"li " + value}>
				<div className="radio__wrapper">
					<input
						onChange={changeFormState}
						checked={activity === value ? true : false}
						id={"activity-" + value}
						name="activity"
						value={value}
						type="radio"
						required
					/>
					<label htmlFor={"activity-" + value}>{label}</label>
				</div>
				<p className="radio__description">{description}</p>
			</li>
		);
	});
	return (
		<fieldset className="form__item">
			<legend className="heading">Физическая активность</legend>
			<ul className="radios-group">
				{lis}
			</ul>
		</fieldset>
	);
};

export default FormActivity;
