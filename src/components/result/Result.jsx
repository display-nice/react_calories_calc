import React from "react";

const Result = ({ calories, resultIsVisible }) => {
	let sectionClasses = "counter__result";
	if (!resultIsVisible) {
		sectionClasses += " counter__result--hidden";
	}

	return (
		<section className={sectionClasses}>
			<h2 className="heading">Ваша норма калорий</h2>
			<ul className="counter__result-list">
				<li className="counter__result-item">
					<h3>
						<span id="calories-norm">{calories.norm}</span> ккал
					</h3>
					<p>поддержание веса</p>
				</li>
				<li className="counter__result-item">
					<h3>
						<span id="calories-minimal">{calories.min}</span> ккал
					</h3>
					<p>снижение веса</p>
				</li>
				<li className="counter__result-item">
					<h3>
						<span id="calories-maximal">{calories.max}</span> ккал
					</h3>
					<p>набор веса</p>
				</li>
			</ul>
		</section>
	);
};

export default Result;
