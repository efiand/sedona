const pageTitle = 'Error';

export default ({ appData, isDev }) => ({
	appData: {
		page: {
			...appData.page,
			pageTitle,
			test: isDev
		}
	},
	description: 'Страница ошибок',
	pageTitle
});
