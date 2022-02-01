module.exports = {
	globDirectory: '/',
	globPatterns: [
		'**/*.{ico,woff2,png,jpg,svg,webp,js}'
	],
	swDest: '_site/sw.js',
	runtimeCaching: [{
		urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
		handler: 'CacheFirst',
		options: {
			cacheName: 'images',
				expiration: {
				maxEntries: 19,
			},
		},
	}],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
