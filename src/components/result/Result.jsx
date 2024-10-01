import React from "react";

const Result = ({ result_state }) => {
	let sectionClasses = "counter__result";
	if (!result_state.showResult) {
		sectionClasses += " counter__result--hidden";
	}

	return (
		<section className={sectionClasses}>
			<h2 className="heading">Ваша норма калорий</h2>
			<ul className="counter__result-list">
				<li className="counter__result-item">
					<h3>
						<span id="calories-norm">{result_state.calories.norm}</span> ккал
					</h3>
					<p>поддержание веса</p>
				</li>
				<li className="counter__result-item">
					<h3>
						<span id="calories-minimal">{result_state.calories.min}</span> ккал
					</h3>
					<p>снижение веса</p>
				</li>
				<li className="counter__result-item">
					<h3>
						<span id="calories-maximal">{result_state.calories.max}</span> ккал
					</h3>
					<p>набор веса</p>
				</li>
			</ul>
		</section>
	);
};

export default Result;
