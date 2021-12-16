import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import constColors from '../constants/constColors';
import {Linking, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import FiltersScreen from '../screens/FiltersScreen';
import {Dimensions} from 'react-native';

const stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Our Page"
        icon={() => <Icon name="logo-facebook" color="blue" size={30} />}
        onPress={() =>
          Linking.openURL('https://www.facebook.com/ebrahim.eldhtory.9')
        }
      />
      <DrawerItem
        label="Setting"
        icon={() => <Icon name="settings" color="black" size={30} />}
        onPress={() => alert('setting still unprepared')}
      />
    </DrawerContentScrollView>
  );
}

const drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'blue',
        drawerActiveBackgroundColor: 'green',
        drawerStyle: {
          backgroundColor: 'white',
          width: Dimensions.get('window').width * 0.6,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <drawer.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'OpenSans-BoldItalic',
          },
          drawerIcon: () => <Icon name="home-outline" size={30} />,
        }}
      />
      <drawer.Screen
        name="Filtered_Meals"
        component={FiltersScreen}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'OpenSans-BoldItalic',
          },
        }}
      />
    </drawer.Navigator>
  );
}

function StackNavigator() {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor:
          Platform.OS === 'android' ? constColors.myWhite : 'blue',
        headerStyle: {
          backgroundColor: constColors.myBlack,
        },
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: 'OpenSans-BoldItalic',
        },
      }}>
      <stack.Screen
        name="H1"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="CategoriesMeal"
        component={CategoryMealScreen}
        options={{
          headerTitle: 'MY Category Meal',
        }}
      />
      <stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({route}) => ({headerTitle: route.params.ttt})}
      />
    </stack.Navigator>
  );
}

const myApp = props => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        initialRouteName="First"
        screenOptions={{
          tabBarActiveTintColor: 'red',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'OpenSans-BoldItalic',
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'OpenSans-BoldItalic',
            color: 'black',
          },
        }}>
        <bottomTab.Screen
          name="First"
          component={StackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <bottomTab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: 'Favorites!',
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" size={size} color={color} />
            ),
          }}
        />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
};

export default myApp;
