import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import supabase from '../../../config/supabaseClient'

export const nameApi = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Name'],
  endpoints: (builder) => ({
    getNewName: builder.query({
      queryFn: async (gender) => {
        if (gender === '*') {
          const response = await supabase
            .from('random_names')
            .select('name')
            .limit(1)
            .single()

          return { data: response.data.name }
        } else {
          const response = await supabase
            .from('random_names')
            .select('name')
            .eq('sex', gender)
            .limit(1)
            .single()

          return { data: response.data.name }
        }
      },
      providesTags: ['Name'],
    }),
  }),
})

export const { useGetNewNameQuery } = nameApi
