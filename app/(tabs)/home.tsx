import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { SupportChat } from '@/components/support-chat';

export default function HomeScreen() {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [hideBalance, setHideBalance] = React.useState(true);
  
  const portfolioBalance = "$1,240,000.00";
  const totalSavings = "$840,000.00";

  const prefix = email ? email.split('@')[0] : 'michael_chuks';
  const name = prefix
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('_');

  const quickActions = [
    { title: 'To Bank', icon: 'university', type: 'font-awesome', badge: 'NEW' },
    { title: 'Withdraw', icon: 'arrow-down-circle-outline', type: 'ionicons' },
    { title: 'Save', icon: 'piggy-bank-outline', type: 'material' },
    { title: 'Invest', icon: 'hand-holding-usd', type: 'font-awesome' },
    { title: 'High Yield', icon: 'chart-line', type: 'font-awesome', badge: '🔥' },
    { title: 'Swap', icon: 'swap-vertical', type: 'ionicons' },
  ];

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          
          {/* Header section */}
          <View className="flex-row justify-between items-center py-4 mb-2">
            <View className="flex-row items-center">
              <View className="h-12 w-12 rounded-full border border-blue-600 items-center justify-center bg-gray-900">
                <MaterialCommunityIcons name="person" size={28} color="#9CA3AF" />
              </View>
              <View className="ml-3">
                <Text className="text-white text-lg font-bold font-roboto">Hi, @{name}</Text>
                <Text className="text-gray-500 text-xs font-lato">Start saving now</Text>
              </View>
            </View>
            <SupportChat />
          </View>

          {/* Portfolio Card */}
          <View className="mb-6 rounded-xl overflow-hidden shadow-sm">
            {/* Top Blue section */}
            <View className="bg-[#2D4DD3] px-4 py-6">
              <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                  <Text className="text-white/80 text-[10px] font-bold uppercase tracking-wider mr-2 font-roboto">Portfolio Balance</Text>
                  <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
                    <Ionicons name={hideBalance ? "eye-off-outline" : "eye-outline"} size={14} color="white" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity className="flex-row items-center">
                  <Text className="text-white/90 text-[10px] font-bold mr-1 font-lato">Transaction History</Text>
                  <Ionicons name="chevron-forward" size={10} color="white" />
                </TouchableOpacity>
              </View>
              
              <View className="flex-row justify-between items-end">
                <Text className="text-white text-2xl font-bold tracking-widest font-roboto">
                  {hideBalance ? "**********" : portfolioBalance}
                </Text>
                <TouchableOpacity className="bg-white px-4 py-1.5 rounded-xl shadow-sm mb-1">
                  <Text className="text-[#2D4DD3] font-bold text-[10px] font-roboto">Add Fund</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Bottom White section */}
            <View className="bg-[#F0F4FF] p-4">
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                   <View className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm mr-3">
                      <MaterialCommunityIcons name="seedling-outline" size={20} color="#2D4DD3" />
                   </View>
                   <View>
                      <Text className="text-[#2D4DD3] text-[10px] font-bold font-roboto">Total Savings</Text>
                      <Text className="text-[#2D4DD3] text-base font-bold tracking-widest font-lato">
                        {hideBalance ? "*********" : totalSavings}
                      </Text>
                   </View>
                </View>
                <TouchableOpacity className="flex-row items-center border border-[#2D4DD3] px-3 py-1 rounded-xl">
                  <Text className="text-[#2D4DD3] font-bold text-[10px] mr-1 font-roboto">Plans</Text>
                  <Ionicons name="chevron-forward" size={10} color="#2D4DD3" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Quick Actions Title */}
          <Text className="text-white text-[9px] font-bold uppercase tracking-widest mb-4 font-roboto">Quick Actions</Text>

          {/* Quick Actions Grid */}
          <View className="flex-row flex-wrap justify-between mb-6 px-1">
            {quickActions.map((action, index) => (
              <View key={index} className="w-[30%] items-center mb-5">
                <View className="relative">
                  <View className="bg-white h-14 w-14 rounded-xl items-center justify-center shadow-sm">
                    {action.type === 'font-awesome' && <FontAwesome5 name={action.icon as any} size={18} color="#2D4DD3" />}
                    {action.type === 'ionicons' && <Ionicons name={action.icon as any} size={20} color="#2D4DD3" />}
                    {action.type === 'material' && <MaterialCommunityIcons name={action.icon as any} size={20} color="#2D4DD3" />}
                  </View>
                  {action.badge && (
                    <View className="absolute -top-1 -right-1 bg-[#FF3B30] px-1 py-0.5 rounded-md min-w-[18px] items-center">
                      <Text className="text-white text-[7px] font-bold uppercase font-roboto">{action.badge}</Text>
                    </View>
                  )}
                </View>
                <Text className="text-gray-400 text-[10px] font-medium mt-2 font-lato">{action.title}</Text>
              </View>
            ))}
          </View>

          {/* To Do Title */}
          <Text className="text-white text-[9px] font-bold uppercase tracking-widest mb-3 font-roboto">To Do</Text>

          {/* To Do List */}
          <View className="mb-6">
            {[
              "Update your profile.",
              "Verify your Phone Number",
              "Complete KYC Address Check"
            ].map((task, index) => (
              <TouchableOpacity key={index} className="bg-[#1A1A1A] rounded-xl p-3.5 flex-row items-center mb-3">
                <View className="h-5 w-5 border-2 border-[#2D4DD3] rounded-md mr-3 items-center justify-center" />
                <Text className="text-white text-xs font-medium font-lato">{task}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}