import React, { } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Inbox from './Inbox';
import { I18nProvider } from '@lingui/react';
import catalogEs from './src/locales/es/messages.js';
import { i18n } from './configLenguges.js'

//const lenguages = { es: catalogEs, };

export default function App() {


  const alerta = () => {
    Alert.alert('', 'Do you want to set all your messages as read?');
  };

  return (
    <I18nProvider language="en" catalogs={i18n} >
      <Inbox
        username="John"
        markAsRead={alerta}
        messages={[]}
      />
    </I18nProvider>
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
