const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js' ),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, //serve para importar arquivos CSS
                    { loader: 'css-loader' } //outros tipode de imports suportados pelo css
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            },
            

        ]
    }
};

//config padrão em todos os proj.