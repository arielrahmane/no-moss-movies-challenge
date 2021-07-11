<template class="movie-item-component">
    <ion-item class="movie-item" :button="isButton">
        <ion-img :src="movie.LargePosterUrl" class="item-avatar" ></ion-img>
        <ion-label class="movie-info">
            <h2>{{movie.Name}}</h2>
            <p class="movie-genre">{{movie.Genres.toUpperCase()}}</p>
        </ion-label>
    </ion-item>
</template>

<script lang="ts">
import { IonItem, IonImg, IonLabel} from '@ionic/vue';
import { defineComponent  } from 'vue';

export default defineComponent({
  name: 'MovieItem',
  props: {
    movie: Object,
    isButton: Boolean
  },
  components: { 
      IonItem, 
      IonImg, 
      IonLabel
    }
});

</script>

<style scoped>

ion-item.movie-item {
  position: relative;
  content: "";
  clear: both;
  display: block;
  --background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  margin-bottom: 5%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  --border-style: solid;
  --border-width: 0px;
  --border-color: rgba(9,9,121,1);
  --border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(38, 0, 255, 0.19);
}

button.item-native {
  border-style: solid;
  border-radius: 20px;
}


ion-label.movie-info {
  white-space: normal;
  font-weight: 800;
}

ion-label p {
  white-space: normal;
}

.item-avatar {
  position: relative;
  float: left;
  width: 40%;
  margin-top:5%; 
  margin-bottom:5%;
}


.item-avatar + .movie-info {
  position: absolute;
  top: 0px;
  left: 40%;
  margin-top:5%; 
  padding-right: 10px;
}

</style>