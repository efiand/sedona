<template>
	<div id="page">
		<div class="page">
			<div class="page__body">
				<PageHeaderBlock :favIndex="favIndex" :pageName="pageName" :navLinks="navLinks" />

				<IndexPage v-if="pageName === 'index.html'" :advantages="advantages" :services="services" />
				<CatalogPage
					v-else-if="pageName === 'catalog.html'"
					:count="count"
					:goods="goods"
					:filters="filters"
					:pageName="pageName"
					:pageTitle="pageTitle"
					:paginations="paginations"
				/>
				<ErrorPage
					v-else
					:error="error"
					:status="status"
					:pageName="pageName"
					:pageTitle="pageTitle"
				/>

				<PageFooterBlock :socials="socials">
					<SectionBlock
						class="page-footer__section"
						:accent="pageName === 'index.html'"
						title="Рассылка"
						lead="Подпишитесь на рассылку"
						description="Только полезная информация и никакого спама,<br>честное бойскаутское!"
						bottomSpace="105px"
					>
						<SubscribeFormBlock class="section__form" />
					</SectionBlock>
				</PageFooterBlock>
			</div>
		</div>

		<ModalBlock v-if="searchFields" id="search" :test="test" title="Поиск гостиницы в Седоне">
			<FormBlock class="modal__form" alias="search" :fields="searchFields" />
		</ModalBlock>
	</div>
</template>

<script>
	import CatalogPage from '../pages/catalog-page.vue';
	import ErrorPage from '../pages/error-page.vue';
	import FormBlock from './form.vue';
	import IndexPage from '../pages/index-page.vue';
	import ModalBlock from './modal.vue';
	import PageFooterBlock from './page-footer.vue';
	import PageHeaderBlock from './page-header.vue';
	import SectionBlock from './section.vue';
	import SubscribeFormBlock from '../blocks/subscribe-form.vue';

	export default {
		name: 'PageApp',

		components: {
			CatalogPage,
			ErrorPage,
			IndexPage,
			ModalBlock,
			PageFooterBlock,
			PageHeaderBlock,
			FormBlock,
			SectionBlock,
			SubscribeFormBlock
		},

		data() {
			return { ...this.$root.$data.appData };
		}
	};
</script>
