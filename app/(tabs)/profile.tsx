import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function ProfileScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [biometricsEnabled, setBiometricsEnabled] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const prefix = email ? email.split('@')[0] : 'UNKNOWN_USER';
  const name = prefix
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('_');

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Logout", 
          style: "destructive", 
          onPress: () => router.replace('/auth/welcome') 
        }
      ]
    );
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(`@${name}`);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const settingsItems = [
    { title: 'Account Settings', sub: 'Edit your profile and next of kin', icon: 'account-plus-outline' },
    { title: 'Verify Phone Number', sub: 'Enable OTP notifications', icon: 'shield-check-outline' },
    { title: 'KYC Verification', sub: 'Complete your KYC', icon: 'card-account-details-outline' },
    { title: 'Support', sub: 'Chat with our support agents', icon: 'message-text-outline' },
    { title: 'Biometrics', sub: 'Enable Secure Login', icon: 'fingerprint', type: 'switch' },
    { title: 'Security', sub: 'Add an extra layer of security', icon: 'shield-outline' },
  ];

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>

          <View className="flex-row justify-between items-center mt-4 mb-6">
            <Text className="text-white text-3xl font-bold font-roboto">Account</Text>
            <TouchableOpacity onPress={handleLogout}>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* User Profile Header */}
          <View className="flex-row items-center justify-between mb-8">
            <View className="flex-row items-center">
              <View className="h-20 w-20 rounded-full border-2 border-blue-600 items-center justify-center bg-gray-900">
                <MaterialCommunityIcons name="person" size={48} color="#9CA3AF" />
              </View>
              <Text className="text-white text-xl font-bold ml-4 font-roboto">@{name}</Text>
            </View>

            <View className="relative">
              {showTooltip && (
                <View className="absolute -top-10 -right-2 bg-blue-600 px-3 py-1.5 rounded-lg items-center justify-center shadow-lg z-50">
                  <Text className="text-white text-[10px] font-bold font-roboto">Copied!</Text>
                  {/* Small arrow triangle */}
                  <View className="absolute -bottom-1 right-4 w-2 h-2 bg-blue-600 rotate-45" />
                </View>
              )}
              <TouchableOpacity
                onPress={handleCopy}
                className="bg-[#1A1A1A] p-2 rounded-lg"
              >
                <MaterialCommunityIcons name="content-copy" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Referral Card */}
          <TouchableOpacity className="bg-[#2D4DD3] flex-row items-center justify-between p-4 rounded-xl mb-8">
            <View className="flex-row items-center flex-1">
              <View className="mr-3">
                <Text className="text-white text-lg font-bold font-roboto">Referral</Text>
                <Text className="text-white/70 text-xs font-lato">Refer friends and earn points</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="trophy-variant" size={24} color="#FBBF24" className="mr-3" />
              <Ionicons name="chevron-forward" size={20} color="white" />
            </View>
          </TouchableOpacity>

          {/* Settings Group */}
          <View className="bg-[#1A1A1A] rounded-xl p-2 mb-10">
            {settingsItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-row items-center justify-between p-4 ${index !== settingsItems.length - 1 ? 'border-b border-gray-800/30' : ''}`}
                activeOpacity={item.type === 'switch' ? 1 : 0.7}
              >
                <View className="flex-row items-center flex-1">
                  <View className="h-10 w-10 bg-gray-800/40 rounded-lg items-center justify-center mr-4">
                    <MaterialCommunityIcons name={item.icon as any} size={22} color="#3B82F6" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-white text-base font-bold font-roboto">{item.title}</Text>
                    <Text className="text-gray-500 text-xs font-lato">{item.sub}</Text>
                  </View>
                </View>

                {item.type === 'switch' ? (
                  <Switch
                    value={biometricsEnabled}
                    onValueChange={setBiometricsEnabled}
                    trackColor={{ false: '#374151', true: '#D1D5DB' }}
                    thumbColor={biometricsEnabled ? '#F9FAFB' : '#9CA3AF'}
                  />
                ) : (
                  <Ionicons name="chevron-forward" size={18} color="#4B5563" />
                )}
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}