import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SupportChat } from '@/components/support-chat';
import { FooterLogos } from '@/components/footer-logos';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function EmailScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!text) {
      setError('Email is required');
      return false;
    }
    if (!emailRegex.test(text)) {
      setError('Please enter a valid email address');
      return false;
    }
    setError('');
    return true;
  };

  const handleContinue = () => {
    if (validateEmail(email)) {
      router.push({ pathname: '/auth/login', params: { email } });
    }
  };

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-4">
          {/* Header section with Support Chat */}
          <View className="flex-row justify-between items-center pt-4 mb-6">
            <Text className="text-3xl font-bold text-white font-roboto">Welcome</Text>
            <SupportChat />
          </View>

          <View className="flex-1">
            <Text className="text-lg font-bold text-white mb-6 font-roboto">
              Enter your email address
            </Text>

            {/* Email Input Field */}
            <View className="mb-5">
              <Text className="text-gray-500 mb-2 text-xs font-medium font-lato">Email</Text>
              <View className={`flex-row items-center bg-[#1A1A1A] rounded-xl px-4 py-3`}>
                <MaterialCommunityIcons name="email-outline" size={18} color={error ? "#EF4444" : "#6B7280"} />
                <TextInput
                  placeholder="Enter your Email"
                  placeholderTextColor="#6B7280"
                  className="flex-1 ml-3 text-white text-sm outline-none"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (error) setError('');
                  }}
                />
              </View>
              {error ? (
                <Text className="text-red-500 text-[10px] mt-1 ml-1">{error}</Text>
              ) : null}
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleContinue}
              className="bg-[#1B254B] py-3.5 rounded-3xl items-center justify-center mb-10"
            >
              <Text className="text-white font-bold text-base">Continue</Text>
            </TouchableOpacity>

            {/* Footer pushed to bottom */}
            <View className="mt-auto">
              <FooterLogos />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}