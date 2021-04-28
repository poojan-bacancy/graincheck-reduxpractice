module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins : [
    [
      'module-resolver',
      {
        root : ['./src'],
        alias : {
          apis : './src/apis',
          assets : './src/assets',
          globalcomponents : './src/globalcomponents',
          constants : './src/constants',
          globalStyles : './src/globalStyles',
          navigation : './src/navigation',
          screens : './src/screens',
          store : './src/store'
        }
      }
    ]
  ]
};
