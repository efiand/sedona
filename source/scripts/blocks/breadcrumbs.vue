<template>
	<ol class="breadcrumbs">
		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link breadcrumbs__link--home" href="index.html">
				<span class="visually-hidden">Главная</span>
			</a>
		</li>
		<li class="breadcrumbs__item">
			<a class="breadcrumbs__link breadcrumbs__link--current" :href="pageName" aria-current="page">
				{{ pageTitle }}
			</a>
		</li>
	</ol>
</template>

<script>
	export default {
		name: 'MainHeaderBlock',

		props: {
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
