module.exports = {
  entry: './homepage.js',
  devServer:{
    inline:true,
    progress:true,
    contentBase:'public',
    historyApiFallback: true
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'homepage.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders:[{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude:/node_modules/,
      include: `${__dirname}/lib`,
      query: {

        presets: ['es2015', 'react', 'stage-3', 'stage-0']
      }
    }]
  }
};
