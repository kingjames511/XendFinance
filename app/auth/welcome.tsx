import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XendLogo } from '@/components/xend-logo';
import { SupportChat } from '@/components/support-chat';
import { AuthButton } from '@/components/auth-button';
import { FooterLogos } from '@/components/footer-logos';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-4">
          {/* Support Chat Button */}
          <View className="flex-row justify-end pt-4">
            <SupportChat />
          </View>

          <ScrollView 
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
            showsVerticalScrollIndicator={false}
            className="flex-1"
          >
            {/* Logo Section */}
            <View className="mb-10">
              <XendLogo />
            </View>

            {/* Headline Section */}
            <View className="items-center mb-8 px-4">
              <Text className="text-2xl font-bold text-white text-center leading-tight mb-3 font-roboto">
                Welcome to the{"\n"}Future of finance
              </Text>
              <Text className="text-gray-400 text-center text-sm leading-5 px-4 font-lato">
                To get started create an account, if you already have an account we will log you in
              </Text>
            </View>

            {/* Auth Actions */}
            <View className="w-full max-w-sm px-2">
              <AuthButton 
                title="Continue with Email" 
                icon="email-outline" 
                variant="primary"
                onPress={() => router.push('/auth/email')} 
              />
              
              <AuthButton 
                title="Continue with Google" 
                icon="google" 
                iconType="font-awesome"
                onPress={() => {}} 
              />
              
              <AuthButton 
                title="Continue with Apple" 
                icon="apple" 
                iconType="font-awesome"
                onPress={() => {}} 
              />
            </View>

            {/* Footer Logos */}
            <FooterLogos />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}