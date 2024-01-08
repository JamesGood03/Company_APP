import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";
import { Section, SectionContent, SectionImage } from "react-native-rapi-ui";

const SupportScreen = () => {
  const openWebPage = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Layout>
        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}>
            <SectionImage source={require('../../assets/sales.png')} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>Sales & Service</Text>
            <Text style={styles.subtitle}>
              Got a Sales or Service Issue? Get help from our Service Team.
            </Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}
            >
              <Text style={styles.learnMoreButtonText}>Learn More</Text>
            </TouchableOpacity>
          </SectionContent>
        </Section>

        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}>
            <SectionImage source={require('../../assets/tech.png')} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>Tech Support</Text>
            <Text style={styles.subtitle}>Available 24/7</Text>
            <Text style={styles.content}>
              Got a Technical Issue? Get help from our 24/7 Tech Team.
            </Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}
            >
              <Text style={styles.learnMoreButtonText}>Learn More</Text>
            </TouchableOpacity>
          </SectionContent>
        </Section>

        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://a.netceterastatus.com/')}>
            <SectionImage source={require('../../assets/status.png')} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>System Status</Text>
            <Text style={styles.contactInfo}>Check out any issues.</Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => openWebPage('https://a.netceterastatus.com/')}
            >
              <Text style={styles.learnMoreButtonText}>Learn More</Text>
            </TouchableOpacity>
          </SectionContent>
        </Section>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... your existing styles
});

export default SupportScreen;






