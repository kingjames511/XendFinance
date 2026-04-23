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
        name="wallet"
        options={{ title: 'Wallet', tabBarShowLabel: false }}
      />
      <Tabs.Screen
        name="referral"
        options={{ title: 'Referral', tabBarShowLabel: false }}
      />
      <Tabs.Screen
        name="plans"
        options={{ title: 'Plans', tabBarShowLabel: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'More', tabBarShowLabel: false }}
      />
    </Tabs>
  );
}