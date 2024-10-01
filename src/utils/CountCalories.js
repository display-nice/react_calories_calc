// Утилита, выполняющая расчёт калорий.
// Используется в App.jsx
// Базовая формула для мужчин: N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5
// Базовая формула для женщин: N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161
// Полученное значение (N) умножаем на коэффициент активности и округляем до целого.
// Результат и будет нормой калорий для поддержания веса.
// Коэффициенты активности. Минимальная: 1.2. Низкая: 1.375. Средняя: 1.55. Высокая: 1.725. Очень высокая: 1.9.
// Для набора веса: прибавляем 15% от нормы к рассчитанной норме.
// Сброс веса: вычитаем 15% от нормы из рассчитанной нормы.

const countCalories = (stats) => {
	const { gender, activity, age, height, weight } = stats;
	let genderCoeff;
	if (gender === "male") {
		genderCoeff = 5;
	} else if (gender === "female") {
		genderCoeff = -161;
	}

	let activityCoeff;
	switch (activity) {
		case "minimal":
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
		case "very_high":
			activityCoeff = 1.9;
			break;
		default:
			activityCoeff = 1.2;
			break;
	}

	let N = Math.round((10 * weight + 6.25 * height - 5 * age + genderCoeff) * activityCoeff);

	let newCalories = {};
	newCalories.norm = N; // ккал для поддержания веса
	newCalories.min = Math.round(N - 0.15 * N); // ккал для снижения веса
	newCalories.max = Math.round(N + 0.15 * N); // ккал для набора веса
	return newCalories;
};
export default countCalories;
