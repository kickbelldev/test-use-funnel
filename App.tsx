import { NavigationContainer } from "@react-navigation/native";
import Funnel from "./Funnel";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Funnel" component={Funnel} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
