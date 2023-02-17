import {
  FlatList,
  Text,
  SafeAreaView,
  View,
  Switch,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CharacterCard from './CharacterCard';
import {useColorScheme} from 'nativewind';
import {useSelector} from 'react-redux';
import {
  apiSlice,
  useLazyGetCharactersByPageQuery,
} from '../../store/rtkQuery/api/apiSlice';

import {useState} from 'react';
import BackgroundTheme from '../../components/BackgroundTheme';

export default function CharactersScreen() {
  const [page, setPage] = useState(1);
  const {data} = useSelector(
    apiSlice.endpoints.getCharactersByPage.select(page),
  );
  const [trigger] = useLazyGetCharactersByPageQuery();
  const {colorScheme} = useColorScheme();

  async function goToPage(pageNumber) {
    await trigger(pageNumber);
    setPage(pageNumber);
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black ">
      <BackgroundTheme />
      <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />
      <FlatList
        data={data.results}
        keyExtractor={character => character.id}
        renderItem={({item}) => <CharacterCard {...item} />}
      />
      <View className=" flex-row w-full justify-around    p-2 ">
        <TouchableOpacity
          accessibilityRole="button"
          disabled={page <= 1}
          className="flex-row justify-center w-1/4 self-center mt-5 bg-black dark:bg-white p-3 rounded-full "
          onPress={() => goToPage(page - 1)}>
          <Text className="text-white dark:text-black font-bold">Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          disabled={page >= 42}
          className=" flex-row justify-center w-1/4 self-center mt-5 bg-black dark:bg-white p-3 rounded-full "
          onPress={() => goToPage(page + 1)}>
          <Text className="text-white dark:text-black font-bold">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
