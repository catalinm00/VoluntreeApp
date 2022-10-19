import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen';

const HomeTabScreenStack = () => {
    const HomeTabStack = createNativeStackNavigator();
  return (
    <HomeTabStack.Navigator>
        <HomeTabStack.Screen name="Home" component={HomeScreen}/>
        <HomeTabStack.Screen name="Actividad" component={ActivityScreen}/>
    </HomeTabStack.Navigator>
  )
}

export default HomeTabScreenStack