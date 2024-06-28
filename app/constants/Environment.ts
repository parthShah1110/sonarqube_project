export default {
  BASEURL: 'https://api.themoviedb.org/3/',
  IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
  API_KEY: '797710d1ee8d140384dc499533a3af4e',
  popularStreaming: 'movie/now_playing?language=en-US&page=1',

  popularInTheater: 'movie/now_playing?&language=en-US&page=1',
  popularForRent: 'discover/movie?with_watch_monetization_types=rent',
  popularOnTv: 'tv/popular?language=en-US&page=1',
  freeMovie:
    'discover/movie?language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=free',
  freeTv:
    'discover/tv?language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=free',
};
