import React from "react";

const FormStats = ({ stats, getStats }) => {
	return (
		<fieldset className="form__item form__parameters" name="parameters">
			<legend className="visually-hidden">Физические параметры</legend>
			<div className="inputs-group">
				<div className="input">
					<div className="input__heading">
						<label className="heading" htmlFor="age">
							Возраст
						</label>
						<span className="input__heading-unit">лет</span>
					</div>
					<div className="input__wrapper">
						<input
							onChange={getStats}
							value={stats.age}
							type="number"
							id="age"
							name="age"
							placeholder="0"
							inputMode="decimal"
							maxLength="3"
							required
						/>
					</div>
				</div>
				<div className="input">
					<div className="input__heading">
						<label className="heading" htmlFor="height">
							Рост
						</label>
						<span className="input__heading-unit">см</span>
					</div>
					<div className="input__wrapper">
						<input
							onChange={getStats}
							value={stats.height}
							type="number"
							id="height"
							name="height"
							placeholder="0"
							inputMode="decimal"
							maxLength="3"
							required
						/>
					</div>
				</div>
				<div className="input">
					<div className="input__heading">
						<label className="heading" htmlFor="weight">
							Вес
						</label>
						<span className="input__heading-unit">кг</span>
					</div>
					<div className="input__wrapper">
						<input
							onChange={getStats}
							value={stats.weight}
							type="number"
							id="weight"
							name="weight"
							placeholder="0"
							inputMode="decimal"
							maxLength="3"
							required
						/>
					</div>
				</div>
			</div>
		</fieldset>
	);
};
export default FormStats;