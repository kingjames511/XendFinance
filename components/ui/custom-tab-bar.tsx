import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { View, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const tabsConfig = [
  { name: 'home', icon: 'home', label: 'Home', type: 'ionicons' },
  { name: 'wallet', icon: 'card-outline', label: 'Wallet', type: 'ionicons' },
  { name: 'referral', icon: 'people', label: 'Referral', type: 'ionicons' },
  { name: 'plans', icon: 'piggy-bank-outline', label: 'Plans', type: 'material' },
  { name: 'profile', icon: 'person-outline', label: 'More', type: 'ionicons' },
];

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const config = tabsConfig.find((t) => t.name === route.name);
        const isCenter = route.name === 'referral';

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
            style={[styles.tab, isCenter && styles.centerTabWrapper]}>
            <View style={[
              isCenter ? styles.centerIconContainer : styles.iconContainer,
              isFocused && !isCenter && styles.focusedIconContainer
            ]}>
              {config?.type === 'ionicons' ? (
                <Ionicons 
                  name={config.icon as any} 
                  size={isCenter ? 32 : 24} 
                  color={isCenter ? 'white' : (isFocused ? 'white' : '#6B7280')} 
                />
              ) : (
                <MaterialCommunityIcons 
                  name={config?.icon as any} 
                  size={isCenter ? 32 : 24} 
                  color={isCenter ? 'white' : (isFocused ? 'white' : '#6B7280')} 
                />
              )}
            </View>
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {config?.label || route.name}
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
    backgroundColor: '#0F0F0F',
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
    paddingBottom: 24,
    paddingTop: 10,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  centerTabWrapper: {
    marginTop: -40, // Pull the center tab up
  },
  iconContainer: {
    padding: 2,
  },
  focusedIconContainer: {
    // Optional: add a glow or specific style for focused non-center icons
  },
  centerIconContainer: {
    backgroundColor: '#2D4DD3', // Blue color
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F97316', // Orange ring
    shadowColor: '#2D4DD3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  icon: {
    fontSize: 24,
  },
  label: {
    fontSize: 10,
    color: '#6B7280',
    fontWeight: '500',
    marginTop: 2,
  },
  labelFocused: {
    color: 'white',
  },
});