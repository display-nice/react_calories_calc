import React from "react";

const FormGender = ({ gender, getGender }) => {
	return (
		<div className="form__item">
			<h2 className="heading">Пол</h2>
			<ul className="switcher">
				<li className="switcher__item">
					<input
						onChange={getGender}
						checked={gender === "male" ? true : false}
						id="gender-male"
						name="gender"
						value="male"
						type="radio"
						required
					/>
					<label htmlFor="gender-male">Мужчина</label>
				</li>
				<li className="switcher__item">
					<input
						onChange={getGender}
						checked={gender === "female" ? true : false}
						id="gender-female"
						name="gender"
						value="female"
						type="radio"
						required
					/>
					<label htmlFor="gender-female">Женщина</label>
				</li>
			</ul>
		</div>
	);
};

export default FormGender;
