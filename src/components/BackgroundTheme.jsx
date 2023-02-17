import React from 'react';
import {useColorScheme} from 'nativewind';
import {View, Text, Switch} from 'react-native';

export default function BackgroundTheme() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-row justify-end w-full gap-5 mt-1 mb-1">
      <Text className="text-2xl font-bold dark:text-white">
        {colorScheme == 'light' ? <>🌞</> : <>🌜</>}
      </Text>
      <Switch value={colorScheme == 'dark'} onChange={toggleColorScheme} />
    </View>
  );
}

