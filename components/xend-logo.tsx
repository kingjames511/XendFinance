import React from 'react';
import { View } from 'react-native';
import { ThreeBarLogo } from './three-bar-logo';

export const XendLogo = () => {
  return (
    <View className="items-center justify-center">
      <View className="h-32 w-32 items-center justify-center rounded-full bg-white/10">
        <View className="h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-black/50 overflow-hidden relative">
          <View className="z-10">
            <ThreeBarLogo />
          </View>
          <View className="absolute bottom-[-30%] w-20 h-20 rounded-full bg-black/10" />
        </View>
      </View>
    </View>
  );
};
