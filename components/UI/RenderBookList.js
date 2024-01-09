import {View, FlatList, StyleSheet, Pressable, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function RenderBookList({bookItem}) {
    const navigation = useNavigation();
    function pressNavigate() {
        console.log('PRESSED')
        navigation.navigate('PDFView', {pdfUrl: bookItem.url})
    }

    return (<>
    <View style={styles.bookItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={pressNavigate}>
        <View>
        <MaterialIcon name={bookItem.image} size={30} color="#000" />
          <Text style={styles.title}>{bookItem.name}</Text>
        </View>
        {/* <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View> */}
      </Pressable>
    </View>
    </>)
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    bookItem: {
      margin: 16,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: '#726f6f',
      elevation: 4,
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      color: 'white'
    },
    details: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
      justifyContent: "center",
    },
  });