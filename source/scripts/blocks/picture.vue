<template>
	<picture>
		<img
			:src="`images/${fileName}.${extName}`"
			:srcset="`images/${fileName}@2x.${extName} 2x`"
			:alt="punctify(alt)"
			loading="lazy"
			:width="width || null"
			:height="height || null"
		/>
	</picture>
</template>

<script>
	import punctify from '../common/utils/punctify.js';

	export default {
		name: 'PictureBlock',

		props: {
			alt: {
				type: String,
				default: ''
			},
			fileName: {
				type: String,
				required: true
			},
			extName: {
				type: String,
				default: 'webp'
			},
			width: {
				type: String,
				default: ''
			},
			height: {
				type: String,
				default: ''
			}
		},

		methods: {
			punctify
		}
	};
</script>
