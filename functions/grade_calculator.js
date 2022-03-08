let gradeCalc = function (score = 5, totalPosible = 10) {
	if (score / totalPosible <= 0.59) {
		grade = "F";
	} else if (score / totalPosible <= 0.69) {
		grade = "D";
	} else if (score / totalPosible <= 0.79) {
		grade = "C";
	} else if (score / totalPosible <= 0.89) {
		grade = "B";
	} else if (score / totalPosible <= 0.95) {
		grade = "A";
	} else if (score / totalPosible == 1) {
		grade = "A++";
	} else if (score / totalPosible <= 1) {
		grade = "A+";
	}
	return `${score}/${totalPosible} -> You got a ${grade} (${Math.round(
		(score / totalPosible) * 100
	)}%)!`;
};

console.log(gradeCalc());
console.log(gradeCalc(127, 200));
console.log(gradeCalc(879, 1000));
console.log(gradeCalc(97, 100));
console.log(gradeCalc(39, 42));
