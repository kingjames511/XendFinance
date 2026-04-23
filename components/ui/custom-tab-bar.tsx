import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { View, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

const tabs = [
  { name: 'home', icon: 'house.fill', label: 'Home' },
  { name: 'budget', icon: 'chart.pie.fill', label: 'Budget' },
  { name: 'save', icon: 'banknote.fill', label: 'Save' },
  { name: 'profile', icon: 'person.fill', label: 'Profile' },
];

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            onPressIn={(ev) => {
              if (process.env.EXPO_OS === 'ios') {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }
            }}
            style={styles.tab}>
            <Text style={[styles.icon, isFocused && styles.iconFocused]}>
              {tabs.find((t) => t.name === route.name)?.icon || 'circle'}
            </Text>
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {tabs.find((t) => t.name === route.name)?.label || route.name}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingBottom: 24,
    paddingTop: 8,
    height: 80,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  icon: {
    fontSize: 24,
  },
  iconFocused: {
    color: '#007AFF',
  },
  label: {
    fontSize: 12,
    color: '#8e8e93',
  },
  labelFocused: {
    color: '#007AFF',
  },
});