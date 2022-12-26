import React from "react";

const FormActivity = ({ activity, getActivity }) => {
	return (
		<fieldset className="form__item">
			<legend className="heading">Физическая активность</legend>
			<ul className="radios-group">
				<li className="radio">
					<div className="radio__wrapper">
						<input
							onChange={getActivity}
							checked={activity === "min" ? true : false}
							id="activity-minimal"
							name="activity"
							value="min"
							type="radio"
							required
						/>
						<label htmlFor="activity-minimal">Минимальная</label>
					</div>
					<p className="radio__description">
						Сидячая работа и нет физических нагрузок
					</p>
				</li>
				<li className="radio">
					<div className="radio__wrapper">
						<input
							onChange={getActivity}
							checked={activity === "low" ? true : false}
							id="activity-low"
							name="activity"
							value="low"
							type="radio"
							required
						/>
						<label htmlFor="activity-low">Низкая</label>
					</div>
					<p className="radio__description">
						Редкие, нерегулярные тренировки, активность в быту
					</p>
				</li>
				<li className="radio">
					<div className="radio__wrapper">
						<input
							onChange={getActivity}
							checked={activity === "medium" ? true : false}
							id="activity-medium"
							name="activity"
							value="medium"
							type="radio"
							required
						/>
						<label htmlFor="activity-medium">Средняя</label>
					</div>
					<p className="radio__description">Тренировки 3-5 раз в неделю</p>
				</li>
				<li className="radio">
					<div className="radio__wrapper">
						<input
							onChange={getActivity}
							checked={activity === "high" ? true : false}
							id="activity-high"
							name="activity"
							value="high"
							type="radio"
							required
						/>
						<label htmlFor="activity-high">Высокая</label>
					</div>
					<p className="radio__description">Тренировки 6-7 раз в неделю</p>
				</li>
				<li className="radio">
					<div className="radio__wrapper">
						<input
							onChange={getActivity}
							checked={activity === "max" ? true : false}
							id="activity-maximal"
							name="activity"
							value="max"
							type="radio"
							required
						/>
						<label htmlFor="activity-maximal">Очень высокая</label>
					</div>
					<p className="radio__description">
						Больше 6 тренировок в неделю и физическая работа
					</p>
				</li>
			</ul>
		</fieldset>
	);
};

export default FormActivity;
