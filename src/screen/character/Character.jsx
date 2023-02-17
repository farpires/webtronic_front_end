import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import SimpleButton from '../../components/SimpleButton';
import BackgroundTheme from '../../components/BackgroundTheme';

function Character({route}) {
  const navigation = useNavigation();
  const {image, name, status, species, type, gender, origin, location} =
    useSelector(state => state.character)[0];

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, []);
  return (
    <SafeAreaView className=" flex-1 items-center bg-gray-200 dark:bg-black ">
      <BackgroundTheme />
      <View className="w-11/12 bg-white dark:bg-gray-50/10 rounded-3xl p-8 my-5">
        <View className="rounded-xl">
          <Image
            source={{uri: image}}
            className="w-full h-72"
            style={{resizeMode: 'contain'}}
          />
        </View>
        <Text className="text-xl text-center font-semibold dark:text-white m-3">
          {name}
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-sm text-black/60 dark:text-white/70">
            Status:{' '}
          </Text>
          <Text className="text-sm font-extrabold dark:text-white">
            {status}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-sm text-black/60 dark:text-white/70">
            Species:{' '}
          </Text>
          <Text className="text-sm font-extrabold dark:text-white">
            {species}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-sm text-black/60 dark:text-white/70">
            Type:{' '}
          </Text>
          <Text className="text-sm font-extrabold dark:text-white">
            {type ? type : 'unknown'}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-sm text-black/60 dark:text-white/70">
            Gender:{' '}
          </Text>
          <Text className="text-sm font-extrabold dark:text-white">
            {gender}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-sm text-black/60 dark:text-white/70">
            Origin:{' '}
          </Text>
          <Text className="text-sm font-extrabold dark:text-white">
            {origin}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-sm text-black/60 dark:text-white/70">
            Location:{' '}
          </Text>
          <Text className="text-sm font-extrabold dark:text-white">
            {location}
          </Text>
        </View>
        <SimpleButton title={'Go to Home'} navigate={'HomeScreen'} />
      </View>
    </SafeAreaView>
  );
}

export default Character;
