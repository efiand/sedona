<template>
	<form class="form" action="https://echo.htmlacademy.ru">
		<p
			class="form__group"
			:class="{
				'form__group--full': !count
			}"
			v-for="(
				{
					count = false,
					error = '',
					label,
					max = null,
					min = null,
					name,
					pickDate = false,
					required = false,
					status = '',
					tip = '',
					value = null
				},
				i
			) in fields"
			:key="i"
		>
			<span class="form__label-group">
				<label class="form__label" :for="`field-${alias}-${i}`">{{ label }}</label>

				<span class="form__tooltip" v-if="tip" aria-hidden="true">
					<span class="form__tooltip-content" role="tooltip" :id="`tooltip-${alias}-${i}`">
						{{ tip }}
					</span>
				</span>
			</span>

			<span class="form__input-group" :class="{ 'form__input-group--date': pickDate }">
				<button
					class="form__counter form__counter--minus"
					v-if="count && ready"
					type="button"
					@click="$refs[name][0].stepDown()"
				>
					<span class="visually-hidden">Меньше.</span>
				</button>

				<input
					class="form__field"
					:class="{
						'form__field--count': count,
						'form__field--date': pickDate
					}"
					:id="`field-${alias}-${i}`"
					:ref="name"
					:type="count ? 'number' : 'text'"
					:name="name"
					:value="value"
					:min="min"
					:max="max"
					:pattern="pickDate ? datePattern : null"
					:placeholder="pickDate ? 'Укажите дату' : null"
					:aria-describedby="tip ? `tooltip-${alias}-${i}` : null"
					:required="required"
				/>

				<button
					class="form__counter form__counter--plus"
					v-if="count && ready"
					type="button"
					@click="$refs[name][0].stepUp()"
				>
					<span class="visually-hidden">Больше.</span>
				</button>
			</span>

			<span class="form__status" v-if="status">{{ status }}</span>
			<span class="form__status form__status--error" v-else-if="error">{{ error }}</span>
		</p>

		<button class="form__button button button--big" type="submit">Найти</button>
	</form>
</template>

<script>
	import flatpickr from 'flatpickr';

	const MONTHS = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	];

	export default {
		name: 'FormBlock',

		props: {
			alias: {
				type: String,
				required: true
			},

			fields: {
				type: Array,
				required: true
			}
		},

		data() {
			return {
				datePattern: `^\\d{1,2} ((${MONTHS.join(')|(')})) \\d{4}$`,
				ready: false
			};
		},

		mounted() {
			this.fields.forEach(({ name, pickDate = false, value = '' }) => {
				if (!pickDate) {
					return;
				}

				if (!this.dateIsValid(value)) {
					// Кривая дата вызывавет сбой инициализации
					this.$refs[name][0].value = '';
				}

				flatpickr(this.$refs[name][0], {
					minDate: 'today',
					formatDate(date) {
						const day = date.getDate();
						const month = MONTHS[date.getMonth()];
						const year = date.getFullYear();

						return `${day} ${month} ${year}`;
					}
				});
			});

			// Логика js инициализирована
			this.ready = true;
		},

		methods: {
			dateIsValid(date) {
				const [day, month, year] = date.split(' ');

				return !isNaN(
					Date.parse(
						[year, this.formatNumber(MONTHS.indexOf(month) + 1), this.formatNumber(day)].join('-')
					)
				);
			},

			formatNumber(number) {
				return number < 10 ? `0${number}` : number;
			}
		}
	};
</script>
