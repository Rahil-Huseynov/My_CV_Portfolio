import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getUserRepos: builder.query({
      query: (username) => `users/${username}/repos`,
    }),
  }),
});

export const { useGetUserReposQuery } = githubApi;
