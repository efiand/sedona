<template>
	<form class="filter" id="filter" action="https://echo.htmlacademy.ru">
		<fieldset
			class="filter__group"
			:class="{ 'filter__group--ranges': ranges }"
			v-for="(
				{ checkers, name, min = 0, max, ranges, single = false, step = 10, title }, i
			) in filters"
			:key="i"
		>
			<legend class="filter__title">{{ title }}</legend>

			<CheckersBlock
				class="filter__checkers"
				v-if="checkers"
				:checkers="checkers"
				:name="name"
				:single="single"
			/>
			<RangeBlock
				class="filter__range"
				v-else-if="ranges"
				:ranges="ranges"
				:name="name"
				:max="max"
				:min="min"
				:step="step"
			/>
		</fieldset>

		<div class="filter__buttons">
			<button class="filter__button button" type="submit">Применить</button>
			<button class="filter__button button button--transparent" type="reset">Сбросить</button>
		</div>
	</form>
</template>

<script>
	import CheckersBlock from './checkers.vue';
	import RangeBlock from './range.vue';

	export default {
		name: 'FilterBlock',

		components: { CheckersBlock, RangeBlock },

		props: {
			filters: {
				type: Array,
				required: true
			}
		}
	};
</script>
