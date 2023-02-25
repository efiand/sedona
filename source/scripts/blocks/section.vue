<template>
	<section
		class="section"
		:class="{ 'section--accent': accent }"
		:style="{
			'--top-space': topSpace,
			'--title-space': titleSpace,
			'--content-space': contentSpace,
			'--bottom-space': bottomSpace
		}"
	>
		<h2 class="visually-hidden">{{ title }}</h2>
		<p class="section__title" v-html="lead" />
		<p class="section__description" v-html="description" />

		<slot class="section__body" />
	</section>
</template>

<script>
	export default {
		name: 'SectionBlock',

		props: {
			accent: {
				type: Boolean,
				default: false
			},
			description: {
				type: String,
				required: true
			},
			lead: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			topSpace: {
				type: String,
				default: '95px'
			},
			titleSpace: {
				type: String,
				default: '21px'
			},
			contentSpace: {
				type: String,
				default: '54px'
			},
			bottomSpace: {
				type: String,
				default: '96px'
			}
		}
	};
</script>
