module.exports = {
	globDirectory: '/',
	globPatterns: [
		'**/*.{ico,png,jpg,svg,webp,js}'
	],
	swDest: '/sw.js',
	runtimeCaching: [{
		urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
		handler: 'CacheFirst',
		options: {
			cacheName: 'images',
				expiration: {
				maxEntries: 22,
			},
		},
	}],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
