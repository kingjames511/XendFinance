import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SupportChat } from '@/components/support-chat';
import { FooterLogos } from '@/components/footer-logos';
import { ThreeBarLogo } from '@/components/three-bar-logo';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function LoginScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const prefix = email ? email.split('@')[0] : 'unknown user';
  const name = prefix
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('_');

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace({ pathname: '/(tabs)/home', params: { email } });
    }, 2000);
  };

  const handleOpenCamera = async () => {
    if (!permission?.granted) {
      const { granted } = await requestPermission();
      if (!granted) return;
    }
    setShowCamera(true);
  };

  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-4">
          
          {/* Header Section */}
          <View className="flex-row justify-between items-center pt-4 mb-8">
            <View className="flex-row items-center">
              <ThreeBarLogo />
              <Text className="text-white font-bold text-lg ml-2 uppercase tracking-tight font-roboto">XEND Finance</Text>
            </View>
            <SupportChat />
          </View>

          <View className="flex-1">
            {/* User Profile Section */}
            <View className="flex-row items-center mb-10">
               <View className="h-16 w-16 rounded-full border border-blue-600/50 items-center justify-center bg-gray-900/50">
                  <MaterialCommunityIcons name="account" size={40} color="#9CA3AF" />
               </View>
               <Text className="text-white text-xl font-bold ml-4 font-roboto">Welcome, {name}</Text>
            </View>

            <Text className="text-2xl font-bold text-white mb-6 font-roboto">
              Enter your password
            </Text>

            {/* Password Input Field */}
            <View className="mb-4">
              <Text className="text-gray-500 mb-2 text-xs font-medium font-lato">Your Password</Text>
              <View className="flex-row items-center bg-[#1A1A1A] rounded-xl px-4 py-3">
                <MaterialCommunityIcons name="lock-outline" size={18} color="#6B7280" />
                <TextInput
                  placeholder="........"
                  placeholderTextColor="#6B7280"
                  className="flex-1 ml-3 text-white text-sm outline-none"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <MaterialCommunityIcons 
                    name={showPassword ? "eye" : "eye-outline"} 
                    size={20} 
                    color="#6B7280" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="items-end mb-8">
              <Text className="text-white text-sm font-medium">Forgot Password?</Text>
            </TouchableOpacity>

            {/* Camera / Scan Icon */}
            <View className="items-center mb-10">
               <TouchableOpacity 
                 onPress={handleOpenCamera}
                 activeOpacity={0.8}
                 className="h-16 w-16 rounded-full bg-white/90 items-center justify-center shadow-lg"
               >
                  <MaterialCommunityIcons name="scan-helper" size={32} color="#F97316" />
               </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleLogin}
              disabled={isLoading}
              className="bg-[#1B254B] py-3.5 rounded-3xl items-center justify-center mb-6"
            >
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="text-white font-bold text-base">Login</Text>
              )}
            </TouchableOpacity>

            {/* Switch Account */}
            <View className="flex-row justify-center items-center mb-6">
               <Text className="text-white text-sm">Not you? </Text>
               <TouchableOpacity onPress={() => router.back()}>
                  <Text className="text-orange-500 font-bold text-sm">Switch account</Text>
               </TouchableOpacity>
            </View>

            {/* Footer */}
            <View className="mt-auto">
              <FooterLogos />
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* Camera Modal Overlay */}
      <Modal visible={showCamera} animationType="slide">
        <View className="flex-1 bg-black">
          <CameraView className="flex-1" facing="back">
            <SafeAreaView className="flex-1">
              <View className="flex-row justify-end p-6">
                <TouchableOpacity 
                  onPress={() => setShowCamera(false)}
                  className="bg-black/50 p-2 rounded-full"
                >
                  <MaterialCommunityIcons name="close" size={30} color="white" />
                </TouchableOpacity>
              </View>
              {/* Scan Overlay UI */}
              <View className="flex-1 items-center justify-center">
                <View className="w-64 h-64 border-2 border-white/50 rounded-3xl" />
                <Text className="text-white font-bold mt-8 text-center text-lg px-10">
                  Align the QR code or your ID within the frame
                </Text>
              </View>
            </SafeAreaView>
          </CameraView>
        </View>
      </Modal>
    </View>
  );
}