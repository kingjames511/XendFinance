import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, Ionicons, Octicons } from '@expo/vector-icons';

export default function WalletScreen() {
  const [hideBalance, setHideBalance] = useState(false);
  const [activeTab, setActiveTab] = useState('Stablecoins');

  const balance = "$ 12,480.22";

  const allAssets = {
    'Stablecoins': [
      { name: 'CNGN', subTitle: 'Compliant Naira', icon: 'N', color: '#8B5CF6', balance: '1,200.00', value: '1,200' },
      { name: 'USDT', subTitle: 'Tether USD', icon: 'T', color: '#10B981', balance: '1,200.00', value: '1,200' },
      { name: 'USDC', subTitle: 'USD Coin', icon: '$', color: '#2D4DD3', balance: '1,200.00', value: '1,200' },
    ],
    'Utility': [
      { name: 'ETH', subTitle: 'Ethereum', icon: 'E', color: '#627EEA', balance: '2.45', value: '8,420' },
      { name: 'BNB', subTitle: 'Binance Coin', icon: 'B', color: '#F3BA2F', balance: '15.2', value: '4,560' },
    ],
    'Memes 🔥': [
      { name: 'DOGE', subTitle: 'Dogecoin', icon: 'D', color: '#C2A633', balance: '45,000', value: '3,200' },
      { name: 'SHIB', subTitle: 'Shiba Inu', icon: 'S', color: '#FFA000', balance: '120,000,000', value: '1,250' },
    ]
  };

  const assets = allAssets[activeTab as keyof typeof allAssets] || [];

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          
          <Text className="text-white text-3xl font-bold mb-6 font-roboto mt-4">Wallets</Text>

          {/* Asset Portfolio Card */}
          <View className="bg-[#2D4DD3] p-6 rounded-xl mb-8">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-white/90 text-sm font-medium font-roboto">My Asset Portfolio</Text>
              <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
                <Ionicons 
                  name={hideBalance ? "eye-off-outline" : "eye-outline"} 
                  size={22} 
                  color="white" 
                />
              </TouchableOpacity>
            </View>
            <Text className="text-white text-3xl font-bold font-roboto">
              {hideBalance ? "********" : balance}
            </Text>
          </View>

          {/* Quick Actions Bar */}
          <View className="flex-row justify-between mb-8 px-1">
            {[
              { label: 'Add Fund', icon: 'plus' },
              { label: 'Withdraw', icon: 'arrow-down' },
              { label: 'Swap', icon: 'swap-vertical' },
              { label: 'Statement', icon: 'file-document-outline' }
            ].map((action, index) => (
              <View key={index} className="items-center">
                <TouchableOpacity className="bg-white h-14 w-14 rounded-lg items-center justify-center mb-2">
                  {index === 2 ? (
                    <Ionicons name="swap-vertical" size={24} color="#2D4DD3" />
                  ) : index === 3 ? (
                    <MaterialCommunityIcons name="file-document-outline" size={24} color="#2D4DD3" />
                  ) : (
                    <Octicons name={action.icon as any} size={24} color="#2D4DD3" />
                  )}
                </TouchableOpacity>
                <Text className="text-white text-[10px] font-medium font-lato">{action.label}</Text>
              </View>
            ))}
          </View>

          {/* Segmented Control / Tabs */}
          <View className="bg-[#1A1A1A] rounded-xl p-1.5 flex-row mb-8">
            {['Stablecoins', 'Utility', 'Memes 🔥'].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 rounded-lg items-center justify-center ${activeTab === tab ? 'bg-[#2D4DD3]' : 'bg-transparent'}`}
              >
                <Text className={`text-[11px] font-bold font-roboto ${activeTab === tab ? 'text-white' : 'text-gray-400'}`}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Assets List */}
          <View className="mb-10">
            {assets.map((asset, index) => (
              <TouchableOpacity key={index} className="flex-row items-center justify-between mb-6">
                <View className="flex-row items-center">
                  <View 
                    style={{ backgroundColor: asset.color }}
                    className="h-11 w-11 rounded-full items-center justify-center"
                  >
                    <Text className="text-white font-bold text-lg">{asset.icon}</Text>
                  </View>
                  <View className="ml-4">
                    <Text className="text-white text-base font-bold font-roboto">{asset.name}</Text>
                    <Text className="text-gray-500 text-xs font-lato">{asset.subTitle}</Text>
                  </View>
                </View>
                
                <View className="flex-row items-center">
                   <View className="items-end mr-4">
                      <Text className="text-white text-base font-bold font-roboto">
                        {hideBalance ? "****" : asset.balance}
                      </Text>
                      <Text className="text-gray-500 text-xs font-lato">
                        {hideBalance ? "****" : `≈ $${asset.value}`}
                      </Text>
                   </View>
                   <Ionicons name="chevron-forward" size={20} color="#6B7280" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
