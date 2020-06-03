import eduContent from "../data/eduContent.json";

const DATA = {
	eduContent: eduContent
};

module.exports = (options) => {
	return {
		get({ key }) {
			return DATA[key];
		},
	};
};
