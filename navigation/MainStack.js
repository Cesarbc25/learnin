import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import App from '../App'
import Word from './src/components/Word';

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="App">
                {/* <Stack.Screen
                    name="App"
                    component={ App }
                /> */}
                <Stack.Screen
                    name="Word"
                    component={ Word }
                    options={{
                        title: "Words"
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>

//         {/* <NavigationContainer>
//     <Stack.Navigator initialRouteName="Word">
//         <Stack.Screen
//             name="Verbs"
//             component={ Verbs }
//             options={{
//               title: "Verbs",
//               headerShown: false
//             }}
//         />
//         <Stack.Screen
//             name="Word"
//             component={ Word }
//             options={{
//                 title: "Words"
//             }}
//         />
//     </Stack.Navigator>
// </NavigationContainer> */}
    )
}

export default MainStack