const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dontenv = require('dotenv');
const { IgnorePlugin, DefinePlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  dontenv.config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  dontenv.config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  const JSONString = new DefinePlugin({
    // <-- key to reducing React's size
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  });
  const Uglify = new UglifyJsPlugin(); // minify everything
  // const Merge = new webpack.optimize.AggressiveMergingPlugin(); // Merge chunks
  const Compress = new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10,
    minRatio: 0.8,
  });

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
          test: /\.css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    plugins: [
      JSONString,
      CSSExtract,
      new IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new BundleAnalyzerPlugin(),
      Uglify,
      Compress,
    ],
  };
};
