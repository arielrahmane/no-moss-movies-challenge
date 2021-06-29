<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="openPicker">Filter</ion-button>
        </ion-buttons>
        <ion-title>Movies</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Movies</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list v-if="!filter">
        <ion-item v-for="movie in movies" v-bind:key="movie.Id" button @click="openModal(movie)" >
          <ion-label>{{movie.Name}}</ion-label>
        </ion-item>
      </ion-list>
      <ion-list v-else>
        <ion-item v-for="movie in filteredMovies" v-bind:key="movie.Id" button @click="openModal(movie)" >
          <ion-label>{{movie.Name}}</ion-label>
        </ion-item>
      </ion-list>
      <ion-button expand="block" @click="filter=false" color="danger">Clear Filter</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, modalController, pickerController } from '@ionic/vue';
import { get } from '../helpers/api';
import  MovieDetailsModal  from '../modals/MovieDetails.vue';

export default  {
  name: 'MoviesTab',
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    IonList, 
    IonItem
  },
  data () {
    return {
      movies: [],
      filteredMovies: [],
      filter: false,
      genres: [
        {
          name: 'genres',
          options: [
            { text: 'Action', value: 'action' },
            { text: 'Drama', value: 'drama' },
            { text: 'Animated', value: 'animated' },
            { text: 'Adventure', value: 'adventure' },
            { text: 'Family', value: 'family' },
            { text: 'Comedy', value: 'comedy' },
            { text: 'Horror', value: 'horror' },
            { text: 'Documentary', value: 'documentary' },
            { text: 'Thriller', value: 'thriller' },
            { text: 'Crime', value: 'crime' },
            { text: 'Alternate Content', value: 'alternate content' },
            { text: 'Foreign', value: 'foreign' },
            { text: 'Classic', value: 'classic' },
          ],
        },
      ]
    }
  },
  beforeMount () {

  },
  mounted () {
    console.log("Movies Tab mounted");
    this.getMoviesList();
  },
  created () {
    console.log("Movies Tab created");
  },
  breforeDestroy () {
    console.log("Movies Tab destroyed");
  },
  computed: {

  },
  methods: {
    getMoviesList: function () {
      get(
          "Movies/GetNowShowing", 
          response => {
            this.movies = [...response.data.Data.Movies];
            console.log(this.movies);

          },
          error => {
            console.log("HTTP GET Request Error: ", error);
          }
        )
    },
    openModal: async function (selectedMovie) {
      const modal = await modalController
        .create({
          component: MovieDetailsModal,
          cssClass: 'my-custom-class',
          swipeToClose: true,
          componentProps: {
            movie: selectedMovie
          },
        })
      return modal.present();
    },
    filterMovies: function (genre) {
      this.filter = true;
      let filter = this.movies.filter(function (movie) {
        return movie.Genres == genre;
      });
      this.filteredMovies = [...filter];
    },
    openPicker: async function () {
      const picker = await pickerController.create({
        columns: this.genres,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Confirm',
            handler: (value) => {
              console.log(`Got Value ${value}`);
              console.log(value.genres.value);
              this.filterMovies(value.genres.value);
            }
          }
        ]
      });
      await picker.present();
    }
  }
}
</script>