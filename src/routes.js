import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './screen/home';
import CreateUser from './screen/createuser';
import CreateCompany from './screen/createcompany';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="CreateUser" component={CreateUser} />
                <AppStack.Screen name="CreateCompany" component={CreateCompany} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}