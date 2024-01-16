import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
//Screens
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import About from "../screens/About";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import Loading from "../screens/utils/Loading";
import Support from "../screens/Support";
import Stream from "../screens/Stream";
import Ai from "../screens/Ai";
import domainsearch from "../screens/domainsearch";
import store from "../screens/store";
import news from "../screens/news";
// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import { AuthContext } from "../provider/AuthProvider";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyBLiKhpoJnkcpGPCI2Sr51esdaRxIOb8N4",
  authDomain: "",
  databaseURL: "",
  projectId: "netcetera-mobile",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Settings" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-cog"} />
          ),
        }}
	  />
      <Tabs.Screen
		name="Support"
		component={Support}
		options={{
		  tabBarLabel: ({ focused }) => (
			<TabBarText focused={focused} title="Support" />
		  ),
			tabBarIcon: ({ focused }) => (
			<TabBarIcon focused={focused} icon={'information-circle'} />
		  ),
		}}
	   />
	  <Tabs.Screen
		name="Stream"
		component={Stream}
		options={{
		  tabBarLabel: ({ focused }) => (
			<TabBarText focused={focused} title="Stream" />
		  ),
			tabBarIcon: ({ focused }) => (
			<TabBarIcon focused={focused} icon={"videocam"} />
		  ),
		}}
	   />
	  <Tabs.Screen
		name="Ai"
		component={Ai}
		options={{
		  tabBarLabel: ({ focused }) => (
			<TabBarText focused={focused} title="Ai" />
		  ),
			tabBarIcon: ({ focused }) => (
			<TabBarIcon focused={focused} icon={iconName = 'color-wand'}/>
		  ),
		}}
	   />
	   	  <Tabs.Screen
		name="store"
		component={store}
		options={{
		  tabBarLabel: ({ focused }) => (
			<TabBarText focused={focused} title="store" />
		  ),
			tabBarIcon: ({ focused }) => (
			<TabBarIcon focused={focused} icon={"cart"}/>
		  ),
		}}
	   />
	   	  <Tabs.Screen
		name="news"
		component={news}
		options={{
		  tabBarLabel: ({ focused }) => (
			<TabBarText focused={focused} title="news" />
		  ),
			tabBarIcon: ({ focused }) => (
			<TabBarIcon focused={focused} icon={iconName = 'newspaper'}/>
		  ),
		}}
	   />
	   	  <Tabs.Screen
		name="domainsearch"
		component={domainsearch}
		options={{
		  tabBarLabel: ({ focused }) => (
			<TabBarText focused={focused} title="domainsearch" />
		  ),
			tabBarIcon: ({ focused }) => (
			<TabBarIcon focused={focused} icon={iconName = 'search'}/>
		  ),
		}}
	   />
    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
