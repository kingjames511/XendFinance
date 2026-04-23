import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SupportChat = () => {
  return (
    <TouchableOpacity 
      className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-black/20"
      activeOpacity={0.7}
    >
      <Ionicons name="chatbubble-outline" size={20} color="#000" />
    </TouchableOpacity>
  );
};
