import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Linking, View, Text, Image } from 'react-native';
import { Layout } from 'react-native-rapi-ui';
import { Section, SectionContent } from 'react-native-rapi-ui';

const Home = ({ navigation }) => {
  const openWebPage = (url) => {
    // Placeholder navigation logic
    if (url === 'https://my.netcetera.co.uk/cart.php?a=add&domain=register') {
      navigation.navigate('store');
    } else if (url === './news?clean=true') {
      navigation.navigate('news');
    } else if (url === './store?clean=true') {
      navigation.navigate('store');
  } else if(url === './Support?clean=true') {
    navigation.navigate('MainTabs', { screen: 'Support' });
  } else if (url === './domainsearch?clean=true') {
    navigation.navigate('MainTabs', { screen: 'domainsearch' });
  } else {
    Linking.openURL(url);
  }
  };

  const renderButton = (text, onPress) => (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.customButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Layout>
        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('./domainsearch?clean=true')}>
            <Image source={require('../../assets/domains.png')} style={styles.sectionImage} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>Domain Names</Text>
            <Text style={styles.subtitle}>
              We pride ourselves on a fast, secure domain name registration service with no compromise on features.
            </Text>
            {renderButton('Search Now', () => openWebPage('./domainsearch?clean=true'))}
          </SectionContent>
        </Section>

        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('./news?clean=true')}>
            <Image source={require('../../assets/news.png')} style={styles.sectionImage} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>News</Text>
            <Text style={styles.subtitle}>All the latest news from Netcetera.</Text>
            {renderButton('Read More', () => navigation.navigate('news'))}
          </SectionContent>
        </Section>

        <Section style={styles.section}>
          <TouchableOpacity onPress={() => openWebPage('./store?clean=true')}>
            <Image source={require('../../assets/store.png')} style={styles.sectionImage} />
          </TouchableOpacity>
          <SectionContent>
            <Text style={styles.title}>Store</Text>
            <Text style={styles.subtitle}>Browse all Netcetera Products and Services.</Text>
            {renderButton('View Store', () => openWebPage('./store?clean=true'))}
          </SectionContent>
        </Section>
        
		<Section style={styles.section}>
			<TouchableOpacity onPress={() => openWebPage('./Support?clean=true')}>
			<Image source={require('../../assets/support.png')} style={styles.sectionImage} />
			</TouchableOpacity>
			<SectionContent>
			<Text style={styles.title}>Support</Text>
			<Text style={styles.subtitle}>Get the help you need through our support.</Text>
			{renderButton('Get Support', () => openWebPage('./Support?clean=true'))}
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
  sectionImage: {
    width: 200, // Set the width as per your design
    height: 200, // Set the height as per your design
    marginRight: 16, // Adjust as needed
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
  customButton: {
    marginTop: 8,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtonText: {
    color: '#fff',
  },
    sectionContainer: {
    marginBottom: 20,
     marginLeft: 20,
      marginRight: 20,
  },
});

export default Home;





