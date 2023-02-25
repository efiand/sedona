<template>
	<header class="page-header">
		<nav class="page-header__nav">
			<a
				class="page-header__nav-link"
				href="index.html"
				:aria-current="getCurrentPageValue('index.html')"
			>
				<img
					class="page-header__logo"
					src="images/logo.svg"
					alt="Логотип Седоны."
					width="140"
					height="70"
				/>
			</a>

			<ul class="page-header__nav-links">
				<li v-for="({ title, url }, i) in navLinks" :key="i">
					<a
						class="page-header__nav-link"
						:class="{
							'page-header__nav-link--current': url === pageName
						}"
						:href="url"
						:aria-current="getCurrentPageValue(url)"
					>
						{{ title }}
					</a>
				</li>
			</ul>
		</nav>

		<ul class="page-header__user-links">
			<li>
				<a class="page-header__user-link page-header__user-link--search" href="#!">
					<span class="visually-hidden">Поиск</span>
				</a>
			</li>
			<li>
				<a class="page-header__user-link page-header__user-link--fav" href="#!">
					<span class="visually-hidden">В избранном:</span>
					<span class="page-header__label">{{ favIndex }}</span>
				</a>
			</li>
			<li>
				<a class="page-header__button button button--primary" href="#!">Хочу сюда!</a>
			</li>
		</ul>
	</header>
</template>

<script>
	export default {
		name: 'PageHeaderBlock',

		props: {
			favIndex: {
				type: Number,
				required: true
			},
			navLinks: {
				type: Array,
				required: true
			},
			pageName: {
				type: String,
				required: true
			}
		},

		methods: {
			getCurrentPageValue(url) {
				return url === this.pageName ? 'page' : null;
			}
		}
	};
</script>
