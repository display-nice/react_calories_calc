const CountCalories = (gender, activity, age, height, weight) => {
	let genderCoeff;
	if (gender === "male") {
		genderCoeff = 5;
	} else if (gender === "female") {
		genderCoeff = -161;
	}

	let activityCoeff;
	switch (activity) {
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
		(10 * weight +
			6.25 * height -
			5 * age +
			genderCoeff) *
			activityCoeff
	);

	let newCalories = {};
	newCalories.norm = N; // ккал для поддержания веса
	newCalories.min = Math.round(N - 0.15 * N); // ккал для снижения веса
	newCalories.max = Math.round(N + 0.15 * N); // ккал для набора веса
	return newCalories;
};
export default CountCalories