import eduContent from "../data/eduContent.json";


const DATA = {
	eduContent: eduContent
};

module.exports = (options) => {
	return {
		get({ key }) {
			return DATA[key];
		},
		getByID({ key, id }) {
			return DATA[key].find(item => {return item._id === id})
		},
		getByCategory({ key }) {
			return DATA[key].find(item => {return item.category === category})
		}
	};
};
