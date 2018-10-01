module.exports = {
    chainWebpack: config => {
    // Louk Loader
    config.module
        .rule('louk')
        .test(/\.louk$/)
        .use("vue-loader")
            .loader("vue-loader")
            .end()
        .use("louk-loader")
            .loader("louk-loader")
            .options({
                langs: {
                    style: "stylus"
                }
            })
    }
}
