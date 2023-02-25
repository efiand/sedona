<template>
	<footer class="page-footer">
		<slot />

		<section class="page-footer__contacts">
			<h2 class="visually-hidden">Контакты</h2>

			<SocialBlock class="page-footer__social" :socials="socials" />

			<a class="page-footer__link" href="tel:+78128121212">+7 (812) 812-12-12</a>

			<a class="page-footer__link" href="tel:+78128121212">
				<span class="visually-hidden">Разработчик - HTML Academy</span>

				<svg class="page-footer__logo" width="115" height="34" focusable="false">
					<use xlink:href="images/htmlacademy.svg#logo" />
				</svg>
			</a>
		</section>
	</footer>
</template>

<script>
	import SocialBlock from './social.vue';

	export default {
		name: 'PageFooterBlock',

		components: { SocialBlock },

		props: {
			socials: {
				type: Array,
				required: true
			}
		}
	};
</script>
