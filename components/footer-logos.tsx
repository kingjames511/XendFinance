import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const FooterLogos = () => {
  return (
    <View className="items-center mt-auto pb-10">
      {/* Deposits Insured */}
      <View className="flex-row items-center mb-4 space-x-2">
        <MaterialCommunityIcons name="check-decagram" size={16} color="#4ADE80" />
        <Text className="text-gray-400 text-xs text-center">Deposits insured by |</Text>
        <View className="bg-blue-900/40 px-1.5 py-0.5 rounded flex-row items-center">
            <Text className="text-blue-300 font-bold text-[10px] italic">~~~ tidal</Text>
        </View>
      </View>

      {/* Backed By */}
      <Text className="text-gray-500 text-[10px] mb-2 font-medium uppercase tracking-widest">Backed By:</Text>
      
      <View className="flex-row items-center space-x-6 opacity-60">
        <View className="flex-row items-center">
           <Text className="text-gray-400 font-bold text-xs">Google</Text>
           <Text className="text-gray-500 text-[10px] ml-1">FOR STARTUPS</Text>
        </View>

        <View className="flex-row items-center">
           <MaterialCommunityIcons name="diamond-outline" size={12} color="#9CA3AF" />
           <Text className="text-gray-400 font-bold text-xs ml-1">BINANCE</Text>
        </View>
      </View>

      <View className="absolute bottom-0 -z-10 flex-row flex-wrap justify-center opacity-10">
          {Array(20).fill(0).map((_, i) => (
             <View key={i} className="w-1 h-1 bg-blue-500 rounded-full m-1" />
          ))}
      </View>
    </View>
  );
};
