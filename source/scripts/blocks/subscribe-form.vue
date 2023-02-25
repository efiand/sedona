<template>
	<form class="subscribe-form" action="https://echo.htmlacademy.ru">
		<label>
			<span class="visually-hidden">Ваш e-mail:</span>
			<input
				class="subscribe-form__field"
				type="email"
				name="email"
				placeholder="Ваш e-mail"
				required
			/>
		</label>
		<button class="subscribe-form__button button button--big" type="submit">Подписаться</button>
	</form>
</template>

<script>
	export default {
		name: 'SubscribeFormBlock'
	};
</script>
