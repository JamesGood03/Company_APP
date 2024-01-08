import React, { useRef, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Video } from 'expo-av';
import { Layout, Text } from "react-native-rapi-ui";
import { Section, SectionContent } from "react-native-rapi-ui";
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

const StreamScreen = () => {
  const videoRef = useRef();
  const navigation = useNavigation();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const onBuffer = (buffering) => {
    // Handle buffering (if needed)
  };

  const onError = (error) => {
    // Handle error (if needed)
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      navigation.navigate('Home'); // Navigate to your home screen when leaving StreamScreen
    });

    return unsubscribe;
  }, [navigation]);

  const background = 'https://customer-tr7hjbsk0o3envc4.cloudflarestream.com/efa380de5a24cf6f65d9d5c7529d1c5b/manifest/video.m3u8';

  const onFullscreenUpdate = async ({ fullscreenUpdate }) => {
    setIsFullscreen(fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT);
  };

  useEffect(() => {
    const setOrientation = async () => {
      if (isFullscreen) {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      } else {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
    };

    setOrientation();
  }, [isFullscreen]);

  return (
    <ScrollView style={styles.container}>
      <Layout>
        <Section>
          <SectionContent>
            <Text style={styles.title}>Live Stream</Text>
            <Text style={styles.subtitle}>Watch our live stream here</Text>
          </SectionContent>
        </Section>

        <Section>
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: background }}
              ref={videoRef}
              onBuffer={onBuffer}
              onError={onError}
              style={styles.videoPlayer}
              useNativeControls
              resizeMode="cover"
              onFullscreenUpdate={onFullscreenUpdate}
            />
          </View>
        </Section>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoPlayer: {
    width: "100%",
    height: 200,
  },
});

export default StreamScreen;


