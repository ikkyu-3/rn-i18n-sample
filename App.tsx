import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View, Button} from 'react-native';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import ja from './locales/ja.json';
import en from './locales/en.json';

// 端末から使用言語を取得
console.log(getLocales());
const [locale] = getLocales();
const {languageCode} = locale;

// i18nextの初期化処理
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
  lng: languageCode,
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const {t} = useTranslation();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.hello}>{t('hello')}</Text>
        </View>
        <View>
          <Button title="日本語" onPress={() => i18n.changeLanguage('ja') /* 日本語に変更 */} />
          <Button title="English" onPress={() => i18n.changeLanguage('en') /* 英語に変更 */} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    textAlign: 'center',
    fontSize: 24,
  },
});

export default App;
