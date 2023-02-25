<template>
	<div class="range">
		<label class="range__group" v-for="({ label, name, value }, i) in inputs" :key="i">
			{{ label }}
			<input
				class="range__input"
				type="number"
				:name="name"
				:value="value"
				:min="min"
				:max="max"
				:step="step"
				required
				@change="updateValues($event, i)"
			/>
		</label>

		<div class="range__target" ref="rangeTarget" />
	</div>
</template>

<script>
	import noUiSlider from 'nouislider';

	export default {
		name: 'RangeBlock',

		props: {
			ranges: {
				type: Array,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: Infinity
			},
			step: {
				type: Number,
				default: 10
			}
		},

		data() {
			return {
				values: this.ranges
			};
		},

		computed: {
			inputs() {
				const [minValue, maxValue] = this.values;

				return [
					{
						label: 'от',
						name: `${this.name}_from`,
						value: minValue
					},
					{
						label: 'до',
						name: `${this.name}_to`,
						value: maxValue
					}
				];
			}
		},

		mounted() {
			noUiSlider.create(this.$refs.rangeTarget, {
				start: this.inputs.map(({ value }) => value),
				connect: true,
				range: {
					min: this.min,
					max: this.max
				},
				step: this.step,
				cssPrefix: 'range__',
				handleAttributes: this.inputs.map(({ label }) => ({
					'aria-label': label
				}))
			});

			this.$refs.rangeTarget.noUiSlider.on('update', (values) => {
				this.values = values.map((value) => parseInt(value, 10));
			});
		},

		methods: {
			updateValues({ target }, i) {
				const value = parseInt(target.value, 10);
				this.values = [i ? this.values[0] : value, i ? value : this.values[1]];
				this.$refs.rangeTarget.noUiSlider.set(this.values);
			}
		}
	};
</script>
