import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const apiSlice = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: Config.API_URL}),
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    getCharacters: builder.query({
      query: () => '/character',
    }),
    getCharactersByPage: builder.query({
      query: page => `/character?page=${page}`,
    }),
    getLocations: builder.query({
      query: () => '/location',
    }),
    getepisodes: builder.query({
      query: () => '/episode',
    }),
  }),
});

export const {useGetCharactersByPageQuery, useLazyGetCharactersByPageQuery} = apiSlice;
