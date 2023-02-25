<template>
	<main>
		<header class="hero">
			<h1 class="visually-hidden">Sedona</h1>

			<img
				class="hero__image"
				src="images/welcome.svg"
				alt="Welcome to the gorgeous Sedona because the Grand Canyon sucks!"
				width="458"
				height="352"
			/>
		</header>

		<SectionBlock
			title="Преимущества"
			lead="Седона — небольшой городок в Аризоне,<br>заслуживающий большего!"
			description="Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!"
			topSpace="68px"
			titleSpace="26px"
			contentSpace="90px"
			bottomSpace="0"
		>
			<CardsBlock class="section__body" :cards="advantages" />
		</SectionBlock>

		<SectionBlock
			title="Сервисы"
			lead="Приезжайте в Седону отдохнуть<br>в комфорте и уюте!"
			description="Опытный персонал и качественное обслуживание!"
			topSpace="63px"
			contentSpace="64px"
			bottomSpace="0"
		>
			<CardsBlock class="section__body" :cards="services" />
		</SectionBlock>

		<SectionBlock
			title="Поиск гостиницы"
			lead="Заинтересовались?"
			description="Укажите предполагаемые даты поездки,<br>и мы покажем вам лучшие предложения гостиниц в Седоне"
		>
			<SearchOpenBlock class="section__button" />
		</SectionBlock>
	</main>
</template>

<script>
	import CardsBlock from '../blocks/cards.vue';
	import SearchOpenBlock from '../blocks/search-open.vue';
	import SectionBlock from '../blocks/section.vue';

	export default {
		name: 'IndexPage',

		components: { CardsBlock, SearchOpenBlock, SectionBlock },

		props: {
			advantages: {
				type: Array,
				required: true
			},
			services: {
				type: Array,
				required: true
			}
		}
	};
</script>
