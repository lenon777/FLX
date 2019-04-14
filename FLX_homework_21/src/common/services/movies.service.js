export class MoviesService {
  constructor($http) {
    this.$http = $http;
  }

  findMovieById(id) {
    return this.$http.get(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
  }

  getAllMovies() {
    return this.$http.get(`https://reactjs-cdp.herokuapp.com/movies?limit=50`);
  }
}
MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];
