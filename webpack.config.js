module.exports = {
  entry: {
    'app': './app.css'
  },
  output: {
    filename: 'build/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,

        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
