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
    <ion-content :fullscreen="true" class="movies-tab">
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
import  MovieDetailsModal  from '../modals/MovieDetails.vue';
import { informationCircle } from 'ionicons/icons';
import { defineComponent, computed } from 'vue';
import MovieItem from '../components/MovieItem.vue';
import { MovieInterface } from '../store/modules/state'
import { useStore } from '../store';

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
    const movies = computed(() => store.getters.moviesList)
    return {
      informationCircle,
      movies
    }
  },
  data() {
    return {
    filterGenre: '' as string,
    }
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
              //console.log(`Got Value ${value}`);
              //console.log(value.genres.value);
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

</style>