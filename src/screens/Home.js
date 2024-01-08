import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import { Section, SectionContent, SectionImage } from 'react-native-rapi-ui';

const Home = () => {
  const openWebPage = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Layout>
        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}>
             <SectionImage source={require('../../assets/domains.png')} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>Domain Names</Text>
            <Text style={styles.subtitle}>
              We pride ourselves on a fast, secure domain name registration service with no compromise on features.
            </Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}
            >
              <Text style={styles.learnMoreButtonText}>Search Now</Text>
            </TouchableOpacity>
          </SectionContent>
        </Section>

        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}>
            <SectionImage source={require('../../assets/news.png')} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>News</Text>
            <Text style={styles.subtitle}>All the latest news from Netcetera.</Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}
            >
              <Text style={styles.learnMoreButtonText}>Read More</Text>
            </TouchableOpacity>
          </SectionContent>
        </Section>

        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://my.netcetera.co.uk/help/en/tickets/create/step1')}>
            <SectionImage source={require('../../assets/store.png')} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>Store</Text>
            <Text style={styles.subtitle}>Browse all Netcetera Products and Services.</Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => openWebPage('./store?clean=true')}
            >
              <Text style={styles.learnMoreButtonText}>View Store</Text>
            </TouchableOpacity>
          </SectionContent>
        </Section>

        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('https://a.netceterastatus.com/')}>
            <SectionImage source={require('../../assets/support.png')} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>Support</Text>
            <Text style={styles.subtitle}>Get help from our 24/7 Tech Team.</Text>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => openWebPage('./support')}
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
  learnMoreButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 8,
  },
  learnMoreButtonText: {
    color: '#fff',
  },
});

export default Home;
