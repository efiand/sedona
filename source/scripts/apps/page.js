import PageApp from '../blocks/page.vue';
import Vue from 'vue';

export default (data) =>
	new Vue({
		data,
		render: (cb) => cb(PageApp)
	});
