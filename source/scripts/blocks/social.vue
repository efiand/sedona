<template>
	<ul class="social">
		<li v-for="({ alias, title, url }, i) in socials" :key="i">
			<a class="social__link" :class="`social__link--${alias}`" :href="url">
				<span class="visually-hidden">{{ title }}</span>
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'SocialBlock',

		props: {
			socials: {
				type: Array,
				required: true
			}
		}
	};
</script>
