import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import PurchasesScreen from './screens/PurchasesScreen';
import OrderDetails from './screens/OrderDetails';
import ViewProduct from './screens/ViewProduct';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecentlyViewed from './screens/RecentlyViewed';
import BuyAgain from './screens/BuyAgain';
import SettingsScreen from './screens/SettingsScreen';
import ShopScreen from './screens/ShopScreen';
import ViewShop from './screens/ViewShop';
import SellerShop from './screens/SellerShop';
import SellerOrder from './screens/SellerOrder';
import AddProduct from './screens/AddProduct';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MarketplaceScreen" component={MarketplaceScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="PurchasesScreen" component={PurchasesScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="ViewProduct" component={ViewProduct} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="RecentlyViewed" component={RecentlyViewed} />
        <Stack.Screen name="BuyAgain" component={BuyAgain} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
        <Stack.Screen name="ViewShop" component={ViewShop} />
        <Stack.Screen name="SellerShop" component={SellerShop} />
        <Stack.Screen name="SellerOrder" component={SellerOrder} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
