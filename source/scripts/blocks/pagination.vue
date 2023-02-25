<template>
	<ul class="pagination">
		<li v-for="(pagination, i) in paginations" :key="i">
			<button
				class="pagination__link"
				:class="{
					'pagination__link--current': i === 0,
					'pagination__link--divider': i === paginations.length - 2
				}"
				type="submit"
				name="page"
				:value="pagination"
				form="filter"
			>
				{{ i === paginations.length - 2 ? '...' : pagination }}
			</button>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'PaginationBlock',

		props: {
			paginations: {
				type: Array,
				required: true
			}
		}
	};
</script>
