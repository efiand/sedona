<template>
	<ul class="cards">
		<li
			:class="{
				cards__group: image,
				cards__item: !image,
				'cards__group--reversed': image && reversed,
				[`cards__item--iconable cards__item--${alias}`]: alias
			}"
			v-for="({ alias, description, image, reversed, title }, i) in cards"
			:key="i"
		>
			<template v-if="image">
				<div class="cards__item" v-if="image">
					<h3 class="cards__title" v-html="title" />
					<p class="cards__description" v-html="description" />
				</div>

				<PictureBlock
					class="cards__picture"
					:fileName="image.fileName"
					:alt="image.alt"
					:width="image.width"
					:height="image.height"
				/>
			</template>
			<template v-else>
				<h3 class="cards__title" v-html="title" />
				<p class="cards__description" v-html="description" />
			</template>
		</li>
	</ul>
</template>

<script>
	import PictureBlock from './picture.vue';

	export default {
		name: 'CardsBlock',

		components: { PictureBlock },

		props: {
			cards: {
				type: Array,
				required: true
			}
		}
	};
</script>
