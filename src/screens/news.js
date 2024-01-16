import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const News = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://blog.netcetera.uk/' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default News;






