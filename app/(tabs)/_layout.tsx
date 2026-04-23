import { Tabs } from 'expo-router';
import { CustomTabBar } from '@/components/ui/custom-tab-bar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{ title: 'Home', tabBarShowLabel: false }}
      />
      <Tabs.Screen
        name="budget"
        options={{ title: 'Budget', tabBarShowLabel: false }}
      />
      <Tabs.Screen
        name="save"
        options={{ title: 'Save', tabBarShowLabel: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile', tabBarShowLabel: false }}
      />
    </Tabs>
  );
}