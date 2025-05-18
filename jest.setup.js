jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.NativeModules.SettingsManager = {
    settings: {
      AppleLocale: 'en_US',
      AppleLanguages: ['en-US', 'en'],
    },
  };
  return rn;
});

jest.mock('react-native-reanimated', () => 
  require('react-native-reanimated/mock')
);