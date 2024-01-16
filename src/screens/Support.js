import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Linking, Image } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";
import { Section, SectionContent, SectionImage } from "react-native-rapi-ui";

const SupportScreen = () => {
  const openWebPage = (url) => {
    Linking.openURL(url);
    if (url === './support?clean=true') {
      navigation.navigate('support');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Layout>
        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}>
            <Image source={require('../../assets/sales.png')} style={styles.sectionImage}/>
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
            <Image source={require('../../assets/tech.png')} style={styles.sectionImage}/>
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
            <Image source={require('../../assets/status.png')} style={styles.sectionImage}/>
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
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
	marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  content: {
    // Add your content styles here
  },
  learnMoreButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 8,
	width:300,
  },
  learnMoreButtonText: {
    color: '#fff',
  },
    sectionImage: {
    width: 200, // Set the width as per your design
    height: 200, // Set the height as per your design
    marginRight: 16, // Adjust as needed
  },
      sectionContainer: {
    marginBottom: 20,
     marginLeft: 20,
      marginRight: 20,
  },
});

export default SupportScreen;







