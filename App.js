import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import BookExploreIndex from './screen/BookRead/BookExplore.index';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PDFView from './screen/BookRead/PDFView';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#3d52dd'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#f7f7f7'},
        drawerContentStyle: {backgroundColor: '#6374e1'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#8c97df',
      }}>
      <Drawer.Screen
        name="Featured"
        component={BookExploreIndex}
        options={{
          title: 'Spacebird Selection',
          drawerIcon: ({color, size}) => (
            <MaterialIcon name="home" size={30} color="#000" />
          ),
        }}
      />
      <Drawer.Screen
        name="Guttenberg"
        component={BookExploreIndex}
        options={{
          title: 'Browse Guttenberg',
          drawerIcon: ({color, size}) => (
            <MaterialIcon name="menu-book" size={30} color="#000" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#3d52dd'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#cccee1'},
          }}>
          <Stack.Screen
            name="SelectedBooks"
            component={DrawerNav}
            options={{
              // title: "All Categories",
              headerShown: false,
              // headerStyle: {backgroundColor: '#351401'},
              // headerTintColor: 'white',
              // contentStyle: {backgroundColor: '#3f2f25'}
            }}
          />
          <Stack.Screen
            name="PDFView"
            component={PDFView}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
