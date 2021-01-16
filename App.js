import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Navigator from "./src/navigations/Navigator";
import RegisterScreen from "./src/screens/RegisterScreen";
import profile from "./src/screens/profile";
// import Home from "./src/screens/Home";
import Home from "./src/screens/Home";
import myorders from "./src/screens/myorders";
import CartScreen from "./src/components/CartScreen";
import { StatusBar } from "react-native";
import Login from "./src/screens/login";

import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD9jDFOvsiq6hwUHDciP5BndID4MTBVdAE",
  authDomain: "online-kitchens.firebaseapp.com",
  projectId: "online-kitchens",
  storageBucket: "online-kitchens.appspot.com",
  messagingSenderId: "508057815902",
  appId: "1:508057815902:web:7c1f8cfc1661aa25afddcf",
  measurementId: "G-G3RL4HRLTF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function secondScreenStack(props) {
  return (
    <Stack.Navigator initialRouteName="RegisterScreen">
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ff477e" />
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen name="Navigator" component={Navigator} />
        <Drawer.Screen name="SecondPage" component={secondScreenStack} />
        <Drawer.Screen name="profile" component={profile} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="My Orders" component={myorders} />
        <Drawer.Screen name="CartScreen" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
