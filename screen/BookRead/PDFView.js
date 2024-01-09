import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';

export default function PDFView({route, navigation}) {

  // ?? is known as the nullish coalescing operator. This operator is used to provide a default value 
  // ('http://samples.leanpub.com/thereactnativebook-sample.pdf' in this case) for cases where the bookUrl parameter 
  // is either undefined or null.

  const pdfUrl = route.params?.pdfUrl ?? 'http://samples.leanpub.com/thereactnativebook-sample.pdf';

  const source = {
    uri: pdfUrl,
    cache: true,
  };
  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});