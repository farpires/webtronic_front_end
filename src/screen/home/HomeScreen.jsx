import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {useGetCharactersByPageQuery} from '../../store/rtkQuery/api';
import SimpleButton from '../../components/SimpleButton';
import BackgroundTheme from '../../components/BackgroundTheme';

export default function HomeScreen() {
  useGetCharactersByPageQuery(1);

  return (
    <SafeAreaView className=" flex-1 bg-gray-200 dark:bg-black ">
      <BackgroundTheme />
      <View className="w-full h-1/5 items-center bg-gray-200 dark:bg-black ">
        <Image
          source={require('../../assets/image/rick-morty-title.png')}
          className="w-full h-full"
          style={{resizeMode: 'stretch'}}
        />
      </View>
      <View className="w-full flex-1 items-center bg-gray-200 dark:bg-black ">
        <Image
          source={require('../../assets/image/rick-morty.png')}
          className="w-full h-full"
          style={{resizeMode: 'stretch'}}
        />
      </View>
      <View className="w-full p-2 items-center">
        <SimpleButton
          title={'Enter the portal'}
          navigate={'CharactersScreen'}
        />
      </View>
    </SafeAreaView>
  );
}
