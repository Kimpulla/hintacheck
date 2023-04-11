import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TopNavigationBar, SearchResult } from '../components/index';

export default function ResultsView ({ route }) {
  results = [{Name : "Tietoja ei ole vielä haettu", Url : ""}]

  if (route.params != undefined){
    results = route.params.results  
  }

  /*
    const buttons = [
      { label: 'Kamera', onPress: () => navigation.navigate("Camera") }
    ];
  */
  return (
    <View style={styles.container}>
      
      <ScrollView>
        {results.map((result, index) => (
          <View key={index} style={styles.resultContainer}>
            <SearchResult product={result.Name} url={result.Url} 
                //hinta={result.Hinta}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  resultContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5
  }
});
