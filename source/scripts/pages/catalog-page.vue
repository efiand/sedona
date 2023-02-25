<template>
	<main>
		<MainHeaderBlock
			:accent="true"
			title="Гостиницы Седоны"
			:pageName="pageName"
			:pageTitle="pageTitle"
		>
			<FilterBlock :filters="filters" />
		</MainHeaderBlock>

		<ResultsBlock :count="count" :items="goods" :paginations="paginations" />
	</main>
</template>

<script>
	import FilterBlock from '../blocks/filter.vue';
	import MainHeaderBlock from '../blocks/main-header.vue';
	import ResultsBlock from '../blocks/results.vue';

	export default {
		name: 'CatalogPage',

		components: { FilterBlock, MainHeaderBlock, ResultsBlock },

		props: {
			count: {
				type: Number,
				required: true
			},
			goods: {
				type: Array,
				required: true
			},
			filters: {
				type: Array,
				required: true
			},
			pageName: {
				type: String,
				required: true
			},
			pageTitle: {
				type: String,
				required: true
			},
			paginations: {
				type: Array,
				required: true
			}
		}
	};
</script>
