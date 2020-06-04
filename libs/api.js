import eduContent from "../data/eduContent.json";
import Questions from "../data/questions.json";

const DATA = {
	eduContent: eduContent,
	Questions: Questions
};

module.exports = (options) => {
	return {
		get({ key }) {
			return DATA[key];
		},
		getByID({ key, id }) {
			return DATA[key].find(item => {return item._id === id})
		},
	};
};
