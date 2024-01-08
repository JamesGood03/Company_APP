import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import { Button } from 'react-native-paper';

const StoreScreen = () => {
  const openWebPage = (url) => {
    Linking.openURL(url);
  };

  const sections = [
    {
      title: 'Domain Names',
      description: 'We pride ourselves on a fast, secure domain name registration service with no compromise on features.',
      price: 'from £4.68/yr',
      imageSource: require('../../assets/Domainnames.png'),
      url: 'https://my.netcetera.co.uk/cart.php?a=add&domain=register',
    },
    {
      title: 'Cloud',
      description: 'The perfect solution for those who require a scalable solution, which is also faster and more reliable than shared hosting.',
      price: 'from £4.50/mo',
      imageSource: require('../../assets/cloud.png'),
      url: 'https://my.netcetera.co.uk/store/cloud-linux-ssd-vps-1',
    },
    {
      title: 'Website Design',
      description: 'Stunning and personalized websites to attract & engage customers wherever they are. We offer fully responsive websites that will rescale across all devices.',
      price: 'from £99.00',
      imageSource: require('../../assets/website.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	    {
      title: 'Email',
      description: 'Ideal for people who want a reliable, easy-to-use and simple to set up email solution for sending and receiving emails from your company or personal domain name.',
      price: 'from £1.99/mo',
      imageSource: require('../../assets/Email.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	
	    {
      title: 'Servers',
      description: 'On-demand Bare Metal servers featuring local SSDs, powerful Intel Xeon processors, and superfast network.',
      price: 'from £55.00/mo',
      imageSource: require('../../assets/Servers.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	{
      title: 'Digital Marketing',
      description: 'With our expertise in SEO, PPC, Social, Content Marketing, Web Design & Development, we will help you develop, succeed and grow!',
      price: 'from £75.00/mo',
      imageSource: require('../../assets/DigitalM.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	{
      title: 'Web Sites',
      description: 'Our UK based web hosting packages can help create a professional backbone for your online business.',
      price: 'from £99',
      imageSource: require('../../assets/Websites.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	{
      title: 'Data Centre',
      description: 'Netcetera owns and operates The Dataport - a state-of-the-art Datacenter for the housing of all your IT infrastructure.',
      price: 'from £35.00/mo',
      imageSource: require('../../assets/Datacentre.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	{
      title: 'ECommerce Website',
      description: 'Creating an online store takes just a few simple clicks. Add products and start selling! These easy-to-design, no code websites give your clients the freedom to create, design, and manage their online business by taking secure payments.',
      price: 'from £6.99/mo',
      imageSource: require('../../assets/ecommerce.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	{
      title: 'Web Hosting',
      description: 'Our UK based web hosting packages can help create a professional backbone for your online business.',
      price: 'from £1.99/mo',
      imageSource: require('../../assets/WebHosting.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
	{
      title: 'Backups and DR',
      description: 'Regardless of the size of your business our IT Backup and Disaster Recovery solutions are cost effective and just as crucially built around your own requirements.',
      price: 'from £7.00/mo',
      imageSource: require('../../assets/Backups.png'),
      url: 'https://my.netcetera.co.uk/design',
    },
    // Add more sections for Email, Servers, Digital Marketing, Websites, Datacentre, E-commerce Website, Web Hosting, Backups & DR, Something Else
  ];

  return (
    <ScrollView style={styles.container}>
      <Layout>
        {sections.map((section, index) => (
          <TouchableOpacity key={index} onPress={() => openWebPage(section.url)}>
            <Image style={styles.sectionImage} source={section.imageSource} />
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionDescription}>{section.description}</Text>
            <Text style={styles.sectionPrice}>{section.price}</Text>
            <Button
              mode="contained"
              color="#fff"
              onPress={() => openWebPage(section.url)}
              style={styles.learnMoreButton}
            >
              Learn More
            </Button>
          </TouchableOpacity>
        ))}
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  sectionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  sectionPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  learnMoreButton: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginBottom: 20,
	    marginTop: 10, // Adjust as needed
  },
});

export default StoreScreen;








