<template>
	<main>
		<MainHeaderBlock :title="`Ошибка ${statusCode}`" :pageName="pageName" :pageTitle="pageTitle">
			<p>{{ errorMessage }}</p>

			<SearchOpenBlock />
		</MainHeaderBlock>
	</main>
</template>

<script>
	import MainHeaderBlock from '../blocks/main-header.vue';
	import SearchOpenBlock from '../blocks/search-open.vue';

	export default {
		name: 'ErrorPage',

		components: { MainHeaderBlock, SearchOpenBlock },

		props: {
			error: {
				type: String,
				required: true
			},
			status: {
				type: String,
				required: true
			},
			pageName: {
				type: String,
				required: true
			},
			pageTitle: {
				type: String,
				required: true
			}
		},

		computed: {
			errorMessage() {
				return this.error || 'Страница не найдена';
			},

			statusCode() {
				return this.status || '404';
			}
		}
	};
</script>
