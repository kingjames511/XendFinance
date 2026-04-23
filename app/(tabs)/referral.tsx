import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Share, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReferralScreen() {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [hideBalance, setHideBalance] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const prefix = email ? email.split('@')[0] : 'MICHAEL';
  const handle = prefix.toUpperCase();
  const referralCode = `XEND-${handle}`;

  const handleCopy = async () => {
    await Clipboard.setStringAsync(referralCode);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join me on XEND Finance! Use my referral code: ${referralCode}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>

          <View className="flex-row justify-between items-center mt-4 mb-2">
            <Text className="text-white text-3xl font-bold font-roboto">Referral</Text>
            <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
              <Ionicons name={hideBalance ? "eye-off-outline" : "eye-outline"} size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-500 text-sm mb-8 font-lato">
            Share your code and earn rewards with every friend who joins.
          </Text>

          {/* Rewards Card */}
          <View className="bg-[#2D4DD3] flex-row items-center p-5 rounded-xl mb-8">
            <View className="bg-white h-14 w-14 rounded-xl items-center justify-center mr-4">
              <MaterialCommunityIcons name="gift-outline" size={32} color="#2D4DD3" />
            </View>
            <View className="flex-1">
              <Text className="text-white text-lg font-bold font-roboto">Rewards</Text>
              <Text className="text-white/80 text-[10px] leading-4 font-lato">
                Let's grow together — refer your friends and family with your referral code.
              </Text>
            </View>
          </View>

          {/* Referral Code Card */}
          <View className="bg-[#1A1A1A] p-6 rounded-xl mb-8">
            <Text className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 font-roboto">Your referral code</Text>
            <Text className="text-white text-2xl font-bold mb-4 tracking-wider font-roboto">
              {hideBalance ? "***********" : referralCode}
            </Text>

            <View className="relative">
              {showTooltip && (
                <View className="absolute -top-10 left-0 bg-blue-600 px-3 py-1.5 rounded-lg items-center justify-center shadow-lg z-50">
                  <Text className="text-white text-[10px] font-bold">Copied!</Text>
                  <View className="absolute -bottom-1 left-4 w-2 h-2 bg-blue-600 rotate-45" />
                </View>
              )}
              <TouchableOpacity onPress={handleCopy} className="flex-row items-center">
                <MaterialCommunityIcons name="content-copy" size={18} color="#2D4DD3" />
                <Text className="text-[#2D4DD3] font-bold text-sm ml-2 font-roboto">Copy code</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Stats Grid */}
          <View className="flex-row justify-between mb-10">
            <View className="w-[48%] bg-[#1A1A1A] p-6 rounded-xl items-center">
              <Text className="text-white text-3xl font-bold mb-2 font-roboto">
                {hideBalance ? "*" : "0"}
              </Text>
              <Text className="text-gray-500 text-[10px] font-bold uppercase tracking-widest font-roboto">Referrals</Text>
            </View>
            <View className="w-[48%] bg-[#1A1A1A] p-6 rounded-xl items-center">
              <Text className="text-white text-3xl font-bold mb-2 font-roboto">
                {hideBalance ? "*" : "0"}
              </Text>
              <Text className="text-gray-500 text-[10px] font-bold uppercase tracking-widest font-roboto">Points</Text>
            </View>
          </View>

          {/* Share Button */}
          <TouchableOpacity
            onPress={handleShare}
            className="bg-[#2D4DD3] w-full py-4 rounded-3xl items-center justify-center mb-10"
          >
            <Text className="text-white font-bold text-base font-roboto">Share invite link</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

