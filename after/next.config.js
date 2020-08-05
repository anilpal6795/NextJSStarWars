module.exports = (phase, { defaultConfig }) => {
    return {
        ...defaultConfig,

        /**
         * Build time app configuration
         */
        // env: {
        //     buildTimeEnvVar: 'accessible by process.env.buildTimeEnvVar'
        // },

        /**
         * Assets prefix for static assets to be served to the client
         */
        // assetPrefix: 'https://cdn.mydomain.com'

        /**
         * Overriding the default webpack configuration
         */
        // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        //     config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        //     return config
        // }

        /**
         * Customising the build ID of the application
         */
        // generateBuildId: async () => {
        //     return 'my-build-id'
        // }
    }
}