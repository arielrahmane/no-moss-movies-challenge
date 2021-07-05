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
      <ion-list>
        <movie-item 
          v-for="movie in computedFilteredMovies" 
          v-bind:key="movie.Id" 
          :movie="movie"
          :isButton="true" 
          @click="openModal(movie)"/>
      </ion-list>
      <ion-button v-if="computedFilteredMovies != movies" expand="block" @click="filterGenre=''" color="danger">Clear Filter</ion-button>
    </ion-content>
  </ion-page>
</template>



<script lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList,
   modalController, pickerController, IonButtons, 
   IonButton  } from '@ionic/vue';
import { get } from '../helpers/api';
import  MovieDetailsModal  from '../modals/MovieDetails.vue';
import { informationCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';
import MovieItem from '../components/MovieItem.vue';
import { MovieInterface } from '../store/modules/state'
import { useStore } from '../store';
import { MutationType } from '../store/modules/mutations'

/*interface movieInterface {
  Id: number;
  Name: string;
  Genres: string;
  Synopsis: string;
  LargePosterUrl: string;
  [index: string]: any;
}*/

interface pickerOption {
  text: string;
  value: string;
}

interface pickerColumn {
  name: string;
  options: pickerOption[];
}

export default defineComponent({
  name: 'MoviesTab',
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    IonList,
    IonButtons, 
    IonButton,
    MovieItem,
  },
  setup() {
    const store = useStore();
    return {
      informationCircle,
      store
    }
  },
  data() {
    return {
    movies: [] as MovieInterface[],
    filterGenre: '' as string,
    }
  },
  mounted() {
    console.log("Movies Tab mounted");
    this.getMoviesList();
  },
  computed: {
    computedFilteredMovies(): MovieInterface[] {
      const vm = this;
      if (vm.filterGenre === '') {
        return vm.movies;
      } else {
        return vm.movies.filter(function (movie: MovieInterface) {
          return movie.Genres == vm.filterGenre;
        });
      }
    },
    computedGenres(): pickerColumn[] {
      const vm = this;

      // Array with available genres
      var availableGenres: string[] = []; 

      // Options for pickerController Column structure
      var opts: pickerOption[] = []; 

      /*
      * Iteration on the list of movies to get the available genres. 
      * This allows the user to have the full list of genres for the filtering feature.
      */
      for (let movie of vm.movies) {
        if (!availableGenres.includes(movie.Genres) && movie.Genres) {
          availableGenres.push(movie.Genres);
          opts.push({text: movie.Genres.toUpperCase(), value: movie.Genres});
        }
      }
      return [{name: "genres", options: opts}];
    }
  },
  methods: {
    getMoviesList (): void {
      const vm = this;
      get(
        {
          resource: "Movies/GetNowShowing", 
          done: (response) => {
            vm.movies = [...response.data.Data.Movies];
            vm.store.commit(MutationType.SetMovies, response.data.Data.Movies);
            console.log(`movies`, vm.movies);
          },
          error: (error) => {
            console.log("HTTP GET Request Error: ", error);
          },
          config:  {}
        }
      )
    },
    async openModal (selectedMovie: MovieInterface): Promise<void> {
      const modal = await modalController
        .create({
          component: MovieDetailsModal,
          swipeToClose: true,
          showBackdrop: true,
          backdropDismiss: true,
          componentProps: {
            movie: selectedMovie
          },
        })
      return modal.present();
    },
    async openPicker (): Promise<void> {
      const vm = this;
      const picker = await pickerController.create({
        columns: vm.computedGenres,
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
              vm.filterGenre = value.genres.value;
            }
          }
        ]
      });
      await picker.present();

      /**
       * The following code solves the problem of the picker options overlapping
       */
      picker.onDidDismiss().then(async () => {
        picker.columns.forEach(col => {
          col.options.forEach(el => {
            delete el.selected;
            delete el.duration;
            delete el.transform;
          });
        });
      });

    }
  }
})
</script>

<style scoped>

ion-list {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: rgb(0, 0, 0);
}

</style>