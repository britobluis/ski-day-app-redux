module.exports = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclue: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['latest', 'stage-0']
                }
            },
            {
                test: /\.json$/,
                exclue: /(node_modules)/,
                loader: 'json-loader'
            }
        ]
    }
}