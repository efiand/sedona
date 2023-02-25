<template>
	<header class="main-header" :class="{ 'main-header--accent': accent }">
		<h1 class="main-header__title">{{ title }}</h1>

		<BreadcrumbsBlock
			class="main-header__breadcrumbs"
			:pageName="pageName"
			:pageTitle="pageTitle"
		/>

		<slot />
	</header>
</template>

<script>
	import BreadcrumbsBlock from '../blocks/breadcrumbs.vue';

	export default {
		name: 'MainHeaderBlock',

		components: { BreadcrumbsBlock },

		props: {
			accent: {
				type: Boolean,
				default: false
			},
			title: {
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
		}
	};
</script>
