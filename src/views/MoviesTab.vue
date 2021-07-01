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
        <ion-item 
          id="movieListItem"
          v-for="movie in computedFilteredMovies" 
          v-bind:key="movie.Id" 
          button 
          @click="openModal(movie)"
        >
          <ion-img :src="movie.LargePosterUrl" class="item-avatar" ></ion-img>
          <ion-label>
            <h2>{{movie.Name}}</h2>
            <p class="movie-genre">{{movie.Genres.toUpperCase()}}</p>
            <p v-if="movie.Director"> DIRECTOR: {{movie.Director}}</p>
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-button v-if="computedFilteredMovies != movies" expand="block" @click="filterGenre=''" color="danger">Clear Filter</ion-button>
    </ion-content>
  </ion-page>
</template>



<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList,
   IonItem, IonLabel, modalController, pickerController, IonButtons, 
   IonButton } from '@ionic/vue';
import { get } from '../helpers/api';
import  MovieDetailsModal  from '../modals/MovieDetails.vue';
import { informationCircle } from 'ionicons/icons';

export default  {
  name: 'MoviesTab',
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    IonList, 
    IonItem,
    IonLabel, 
    IonButtons, 
    IonButton
  },
  setup() {
    return {
      informationCircle
    }
  },
  data () {
    return {
      movies: [],
      filterGenre: '',
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
    computedFilteredMovies() {
      if (this.filterGenre === '') {
        return this.movies;
      } else {
        return this.movies.filter(movie => {
          return movie.Genres == this.filterGenre;
        });
      }
    },
    computedGenres() {
      let availableGenres = []; // Array with available genres
      let opts = []; // Options for pickerController Column structure

      /*
      * Iteration on the list of movies to get the available genres. 
      * This allows the user to have the full list of genres to filter.
      */
      this.movies.forEach(movie => {
        if (!availableGenres.includes(movie.Genres) && movie.Genres) {
          availableGenres.push(movie.Genres);
          let obj = {
            text: movie.Genres.toUpperCase(),
            value: movie.Genres
          }
          opts.push(obj);
        }
      });
      return [{
        name: 'genres',
        options: opts
      }];
    }
  },
  methods: {
    getMoviesList: function () {
      get(
          "Movies/GetNowShowing", 
          response => {
            this.movies = [...response.data.Data.Movies];
            console.log(`movies`, this.movies);
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
          swipeToClose: true,
          showBackdrop: true,
          backdropDismiss: true,
          componentProps: {
            movie: selectedMovie
          },
        })
      return modal.present();
    },
    openPicker: async function () {
      const picker = await pickerController.create({
        columns: this.computedGenres,
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
              this.filterGenre = value.genres.value;
            }
          }
        ]
      });
      await picker.present();
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
}
</script>

<style scoped>
ion-item {
  --background:#131033;
  --border-radius: 20px;
  margin-bottom: 5%;
  margin-top: 5%;
}

p.movie-genre {
  font-weight: bold;
}

ion-label {
  padding-left:10%;
}

ion-label h2 {
  white-space: normal;
  font-weight: 800;
}

ion-label p {
  white-space: normal;
}

ion-list {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.item-avatar {
  width:40%; 
  margin-top:5%; 
  margin-bottom:5%;
}

</style>