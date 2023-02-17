import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SimpleButton({title,navigate}) {
        
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      accessibilityRole="button"
      className="flex-row justify-center w-11/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full "
      onPress={() => {
        navigation.navigate(navigate);
      }}>
      <Text className="text-white dark:text-black font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
