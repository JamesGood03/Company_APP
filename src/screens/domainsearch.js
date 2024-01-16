import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Linking } from 'react-native';
import { Searchbar, ActivityIndicator as RNActivityIndicator } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Domain = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    setLoading(true);

    // Simulating a search API call
    fetch(`https://netcetera.mobi/json/domainsearchai.php?query=${searchText}&ip=1234`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .finally(() => setLoading(false));
  };

  const handlePress = (item) => {
    if (item.availability === 'available') {
      const domainName = encodeURIComponent(item.name);
      const url = `https://netcetera.uk/domains/search/?q=SocialTennisAcademy.com`;
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Domain</Text>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Enter a domain"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
          iconColor="#000"
          style={styles.input}
        />
      </View>
      <RNActivityIndicator animating={loading} size="large" color="#0000ff" />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={[styles.searchResultItem, { borderColor: item.availability === 'available' ? 'green' : 'red' }]}>
            <Text style={{ color: item.availability === 'available' ? 'green' : 'red', textAlign: 'center' }} onPress={() => handlePress(item)}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    textAlign: 'center',
    padding: 20,
  },
  searchResultItem: {
    width: '100%', // Ensure full width
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});

export default Domain;







