import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
  // Если не используем тайпскрипт - нужен babel-loader(берет новый стандарт js и перегоняет его в старый, чтобы все браузеры поддерживались)
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [typescriptLoader, cssLoader];
}
