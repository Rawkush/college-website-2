const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dontenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  dontenv.config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  dontenv.config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['./src/index.js'],
    output: {
      publicPath: '/dist/',
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          loaders: ['babel-loader'],
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
      proxy: {
        '/s/': {
          target: 'http://localhost:3000',
          secure: false,
        },
      },
    },
  };
};
