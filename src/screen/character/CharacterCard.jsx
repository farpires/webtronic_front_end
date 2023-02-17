import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCharacter } from '../../store/feactures/character';

function CharacterCard({ id, image, name, status, species, origin, type, gender, location }) {

  const navigation = useNavigation();
  const dispach = useDispatch();
  function goToDetails() {
    const selectedCharacter = {
      id,
      image,
      name,
      status,
      species,
      type,
      gender,
      origin: origin.name,
      location: location.name
    }
    dispach(addCharacter(selectedCharacter))
    navigation.navigate('Character', {
      id,
      name
    })
  }
  return (
    <View
      className="w-full  bg-white dark:bg-gray-50/10 rounded-3xl p-3 my-2"
    >
      <View
        className={`w-full h-70 rounded-xl bg-white dark:bg-gray-800 shadow-xl p-3`}
      >
        <View className={`flex flex-row items-center`}>
          <Image
            source={{ uri: image }}
            className={`w-20 h-20 rounded-full`}
          />
          <View className={`pl-5`}>
            <Text className={`w-60 text-xl text-black/80  dark:text-white font-bold`}>
              Name: {name}
            </Text>
            <Text className={`text-lg text-gray-500 font-bold`}>status: {status}</Text>
            <TouchableOpacity
              className="flex-row justify-center w-full self-center  bg-black dark:bg-white p-1 rounded-full "
              onPress={() => { goToDetails() }}

            >
              <Text className="text-white dark:text-black font-bold">Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CharacterCard;
