<template>
	<a class="button button--primary button--big" href="#search" @click="open">
		Поиск гостиницы в Седоне
	</a>
</template>

<script>
	export default {
		name: 'SearchOpenBlock',

		methods: {
			open() {
				window.focusLock.lock('#search');
			}
		}
	};
</script>
