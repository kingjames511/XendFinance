import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function PlansScreen() {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          
          <Text className="text-white text-3xl font-bold mb-6 font-roboto mt-4">Plans</Text>

          {/* Savings Plan Core Card */}
          <View className="bg-[#2D4DD3] p-6 rounded-xl mb-6">
            <View className="flex-row justify-between items-center mb-1">
               <Text className="text-white/80 text-[10px] font-bold uppercase tracking-widest font-roboto">Savings Plan</Text>
               <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
                  <Ionicons name={hideBalance ? "eye-off-outline" : "eye-outline"} size={18} color="white" />
               </TouchableOpacity>
            </View>
            <Text className="text-white text-3xl font-bold font-roboto">
              {hideBalance ? "*******" : "USD 0.00"}
            </Text>
          </View>

          {/* Action Boxes */}
          <View className="flex-row justify-between mb-8">
            {/* Create Plan */}
            <TouchableOpacity className="w-[48%] bg-[#1A1A1A] border border-[#F97316]/30 p-4 rounded-xl">
              <View className="bg-white h-10 w-10 rounded-lg items-center justify-center mb-4">
                <MaterialCommunityIcons name="piggy-bank" size={24} color="#F97316" />
              </View>
              <Text className="text-[#F97316] font-bold text-sm mb-1 font-roboto">Create Plan</Text>
              <Text className="text-gray-500 text-[10px] leading-4 font-lato">Create a new fixed savings plan</Text>
            </TouchableOpacity>

            {/* Interest Calculator */}
            <TouchableOpacity className="w-[48%] bg-[#1A1A1A] border border-[#2D4DD3]/30 p-4 rounded-xl">
              <View className="bg-[#2D4DD3]/20 h-10 w-10 rounded-lg items-center justify-center mb-4">
                <MaterialCommunityIcons name="calculator" size={24} color="#2D4DD3" />
              </View>
              <Text className="text-white font-bold text-sm mb-1 font-roboto">Interest Calculator</Text>
              <Text className="text-gray-500 text-[10px] leading-4 font-lato">Calculate the interest on your savings</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">All Savings Plans</Text>

          {/* Savings Plans Cards */}
          <View className="flex-row justify-between mb-8">
            {/* Flexible */}
            <View className="w-[48%] bg-[#1A1A1A] p-5 rounded-xl min-h-[160px] justify-between">
              <View>
                <Text className="text-gray-500 text-[9px] font-bold uppercase tracking-wider mb-4 font-roboto">Flexible Savings</Text>
                <Text className="text-white text-2xl font-bold font-roboto mb-4">
                  {hideBalance ? "****" : "$0.00"}
                </Text>
              </View>
              <TouchableOpacity className="flex-row items-center">
                <View className="bg-[#2D4DD3] h-8 w-8 rounded-full items-center justify-center mr-2">
                  <Ionicons name="add" size={20} color="white" />
                </View>
                <Text className="text-white font-bold text-[10px] items-center mt-1 font-roboto">ADD FUNDS</Text>
              </TouchableOpacity>
            </View>

            {/* Fixed */}
            <View className="w-[48%] bg-[#1A1A1A] p-5 rounded-xl min-h-[160px] justify-between">
              <View>
                <Text className="text-gray-500 text-[9px] font-bold uppercase tracking-wider mb-4 font-roboto">Fixed Savings</Text>
                <Text className="text-white text-2xl font-bold font-roboto mb-4">
                  {hideBalance ? "****" : "$0.00"}
                </Text>
              </View>
              <TouchableOpacity className="flex-row items-center">
                <View className="bg-[#2D4DD3] h-8 w-8 rounded-full items-center justify-center mr-2">
                  <Ionicons name="list" size={16} color="white" />
                </View>
                <Text className="text-white font-bold text-[10px] items-center mt-1 font-roboto">VIEW ALL PLANS</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer Today's Rate */}
          <View className="mb-10 px-1">
            <Text className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2 font-roboto">Today's Rate</Text>
            <Text className="text-gray-600 text-xs font-lato">
              This rate is updated daily (Apr 13, 2026 02:43 AM)
            </Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
