module.exports = {
    devServer: {
        proxy: {
            '/books': {
                target: 'https://test.incenplus.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/books': 'books'
                }
            },
            '/users': {
                target: 'https://test.incenplus.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/users': 'users'
                }
            },
        }
    }
}