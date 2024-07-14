import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import store from "./src/core/redux/store";
import HomeScreen from "./src/static/HomeScreen";
import ChatScreen from "./src/static/ChatScreen";
import {SafeAreaView} from "react-native";


const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Home: undefined;
    Chat: { chatId: number, title: string };
};

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen}
                                      options={{title: "All chats"}}/>
                        <Stack.Screen name="Chat" component={ChatScreen}
                                      options={(route) =>
                                          ({title: route.route.params.title})}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
};

export default App;
