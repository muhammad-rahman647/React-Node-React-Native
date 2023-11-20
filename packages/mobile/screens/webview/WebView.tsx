import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreens } from '../../App';
import { WebView as NativeWebView } from 'react-native-webview';
import { useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WebView({}: NativeStackScreenProps<
  StackScreens,
  'App'
>) {
  const webViewRef = useRef<NativeWebView | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (webViewRef.current && token) {
          const script = `document.cookie = "SESSION_TOKEN=${encodeURIComponent(
            token
          )}; path=/;";`;
          webViewRef.current.injectJavaScript(script);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // console.log('EXPO_PUBLIC_WEBAPP_ROOT=%s', process.env.EXPO_PUBLIC_WEBAPP_ROOT)
  return (
    <View style={styles.container}>
      <NativeWebView
        ref={webViewRef}
        source={{ uri: process.env.EXPO_PUBLIC_WEBAPP_ROOT as string }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
