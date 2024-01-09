import {View, FlatList, StyleSheet, Pressable, Text} from 'react-native';
import RenderBookList from '../../components/UI/RenderBookList';

export default function BookExploreIndex() {

  const bookItems = [
    {id: 1, name: 'React native 101', image: 'book', url: null},
    {id: 2, name: 'Russian Food Recipes', image: 'star', url: null},
    {id: 3, name: 'Farewell My Lovely', image: 'beenhere', url: null},
    {id: 4, name: 'Dancing 101', image: 'note', url: null},
    {id: 5, name: 'How to move on', image: 'try', url: null},
    {id: 6, name: 'Film Maker', image: 'app-shortcut', url: null},
  ];

  return (
    <>
      <View style={styles.container}>
        <FlatList data={bookItems} renderItem={({item}) => <RenderBookList bookItem={item}/>} />
      </View>
    </>
  );
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
