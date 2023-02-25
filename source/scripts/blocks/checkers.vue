<template>
	<ul class="checkers">
		<li class="checkers__item" v-for="({ checked, label, value }, i) in checkers" :key="i">
			<CheckerBlock
				:label="label"
				:value="value"
				:name="name"
				:single="single"
				:checked="checked"
			/>
		</li>
	</ul>
</template>

<script>
	import CheckerBlock from './checker.vue';

	export default {
		name: 'CheckersBlock',

		components: { CheckerBlock },

		props: {
			checkers: {
				type: Array,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			single: {
				type: Boolean,
				default: false
			}
		}
	};
</script>
