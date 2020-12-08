import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Button,
  NativeModules,
} from 'react-native';

const {ToastModule} = NativeModules;

const App = () => {
  const handleShowToast = () => {
    console.log('handleShowToast');
    ToastModule.showText('This is Android', ToastModule.LENGTH_SHORT);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View>
          <Button title="Click!" onPress={handleShowToast} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
