import questions from "../data/questions.json";

const DATA = {
	questions,
};

module.exports = () => {
	return {
		get(key) {
			try {
				// If no key is passed, log an error and return null;
				if (!key) {
					console.log(`Missing required param: key`);
					return null;
				}

				// If it's a valid key, return the data
				if (DATA.hasOwnProperty(key)) {
					return DATA[key];
				}

				// If it's an invalid key, log an error and return null;
				console.log(`No Data with the key: ${key}`);
				return null;
			} catch (e) {
				console.error(e);
				throw e;
			}
		},
	};
};
