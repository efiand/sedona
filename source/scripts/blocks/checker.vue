<template>
	<label class="checker">
		<input
			class="checker__input"
			:class="`checker__input--${type}`"
			:type="type"
			:name="name"
			:value="value"
			:checked="checked"
			:disabled="disabled"
		/>

		{{ label }}
	</label>
</template>

<script>
	export default {
		name: 'CheckerBlock',

		props: {
			label: {
				type: String,
				required: true
			},
			value: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			single: {
				type: Boolean,
				default: false
			},
			checked: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},

		computed: {
			type() {
				return this.single ? 'radio' : 'checkbox';
			}
		}
	};
</script>
