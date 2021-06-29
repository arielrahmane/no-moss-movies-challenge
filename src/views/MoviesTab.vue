<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Movies</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Movies</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item v-for="movie in movies" v-bind:key="movie.Id">
          <ion-label>{{movie.Name}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';
import {get} from '../helpers/api';

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
      movies: []
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
    }
  }
}
</script>