import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

interface AuthButtonProps {
  title: string;
  icon?: string;
  iconType?: 'material' | 'font-awesome';
  variant?: 'primary' | 'outline';
  onPress?: () => void;
  className?: string;
}

export const AuthButton = ({ 
  title, 
  icon, 
  iconType = 'material', 
  variant = 'outline', 
  onPress,
  className = ''
}: AuthButtonProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`
        w-full flex-row items-center justify-center rounded-3xl py-3.5 px-6 mb-3
        ${isPrimary ? 'bg-[#2D4DD3]' : 'border border-gray-800 bg-transparent'}
        ${className}
      `}
    >
      <View className="absolute left-8">
        {iconType === 'material' ? (
          <MaterialCommunityIcons name={icon as any} size={18} color="white" />
        ) : (
          <FontAwesome name={icon as any} size={18} color="white" />
        )}
      </View>
      <Text className="text-sm font-semibold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
