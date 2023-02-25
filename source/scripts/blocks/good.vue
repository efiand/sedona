<template>
	<article class="good">
		<PictureBlock
			class="good__picture"
			:fileName="image"
			:alt="`Пейзаж вокруг отеля «${title}»`"
			width="300"
			height="212"
		/>

		<h3 class="good__title" v-html="title" />

		<p class="good__text">{{ type }}</p>
		<p class="good__text">От {{ price }} ₽</p>

		<a class="button button--primary" :href="aboutLink">Подробнее</a>
		<a class="button" :class="{ 'button--secondary': added }" :href="favLink">
			{{ added ? 'В избранном' : 'В избранное' }}
		</a>

		<p :class="`good__star-rating good__star-rating--${starRating}`">
			<span class="visually-hidden">Звёздный рейтинг: {{ starRating }}</span>
		</p>
		<p class="good__rating">Рейтинг: {{ rating }}</p>
	</article>
</template>

<script>
	import PictureBlock from './picture.vue';

	export default {
		name: 'GoodBlock',

		components: { PictureBlock },

		props: {
			aboutLink: {
				type: String,
				required: true
			},
			added: {
				type: Boolean,
				default: false
			},
			favLink: {
				type: String,
				required: true
			},
			image: {
				type: String,
				required: true
			},
			price: {
				type: Number,
				required: true
			},
			rating: {
				type: String,
				required: true
			},
			starRating: {
				type: Number,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: true
			}
		}
	};
</script>
