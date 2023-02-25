<template>
	<section class="results">
		<h2 class="visually-hidden">Результаты поиска</h2>

		<p class="results__count">Найдено гостиниц: {{ count }}</p>

		<select
			class="results__select"
			name="sorting"
			aria-label="Сортировка:"
			form="filter"
			@change="$emit('submit')"
		>
			<option value="asc">Сначала дешевые</option>
			<option value="desc">Сначала дорогие</option>
		</select>

		<ul class="results__views">
			<li v-for="({ current, title, value }, i) in views" :key="i">
				<label>
					<button
						class="results__view"
						:class="{
							[`results__view--${value}`]: true,
							'results__view--current': current
						}"
						type="submit"
						name="view"
						:value="value"
						form="filter"
					>
						<span class="visually-hidden">{{ title }}</span>
					</button>
				</label>
			</li>
		</ul>

		<ul class="results__list">
			<li v-for="(good, i) in items" :key="i">
				<GoodBlock v-bind="good" />
			</li>
		</ul>

		<PaginationBlock class="results__pagination" :paginations="paginations" />
	</section>
</template>

<script>
	import GoodBlock from './good.vue';
	import PaginationBlock from './pagination.vue';

	export default {
		name: 'ResultsBlock',

		components: { GoodBlock, PaginationBlock },

		props: {
			count: {
				type: Number,
				required: true
			},
			items: {
				type: Array,
				required: true
			},
			paginations: {
				type: Array,
				required: true
			}
		},

		data() {
			return {
				views: [
					{
						current: true,
						title: 'Плиткой',
						value: 'tiles'
					},
					{
						title: 'Слайдшоу',
						value: 'slideshow'
					},
					{
						title: 'Списком',
						value: 'list'
					}
				]
			};
		}
	};
</script>
