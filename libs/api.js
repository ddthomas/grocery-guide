import eduContent from "../data/eduContent.json";
import categories from "../data/categories.json";

const DATA = {
	eduContent: eduContent,
	categories: categories
};

module.exports = (options) => {
	return {
		get({ key }) {
			return DATA[key];
		},
		getByID({ key, id }) {
			return DATA[key].find(item => {return item._id === id})
		},
		getByCategoryID({ key, id }) {
			return DATA[key].filter(item => {return item.categoryID === id})
		}
	};
};
