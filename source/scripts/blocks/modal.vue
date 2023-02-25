<template>
	<div class="modal" :class="{ 'modal--test': test }" :id="id">
		<section class="modal__inner">
			<a class="modal__close" href="#page" @click="close">
				<span class="visually-hidden">Закрыть окно</span>
			</a>

			<h2 class="modal__title" v-if="title">{{ title }}</h2>

			<slot />
		</section>

		<a class="modal__overlay" href="#page" @click="close">
			<span class="visually-hidden">К основной части страницы</span>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'ModalBlock',

		props: {
			id: {
				type: String,
				required: true
			},
			test: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ''
			}
		},

		methods: {
			close() {
				window.focusLock.unlock(`#${this.id}`);
			}
		}
	};
</script>
