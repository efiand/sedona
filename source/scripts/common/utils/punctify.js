export default (str, sign = '.') => {
	if (/(\.|\?|!|,|:|…)$/.test(str)) {
		return str;
	}
	return `${str}${sign}`;
};
