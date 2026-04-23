import React from 'react';
import { View } from 'react-native';

export const ThreeBarLogo = () => {
  return (
    <View className="flex-row items-end space-x-1">
      <View className="h-4 w-2 rounded-full bg-[#FF8A00]" />
      <View className="h-7 w-2 rounded-full bg-[#6C5CE7]" />
      <View className="h-5 w-2 rounded-full bg-[#4834D4]" />
    </View>
  );
};
