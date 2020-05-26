import questions from "../data/questions.json";

const DATA = {
	questions: questions,
};

module.exports = (options) => {
	return {
		get({ keyStr }) {
			return DATA[keyStr];
		},
	};
};
