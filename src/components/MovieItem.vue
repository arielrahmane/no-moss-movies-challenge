<template>
    <ion-item :button="isButton">
        <ion-img :src="movie.LargePosterUrl" class="item-avatar" ></ion-img>
        <ion-label>
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
ion-item {
  --background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  --border-radius: 20px;
  margin-bottom: 5%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
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

.item-avatar {
  width:40%; 
  margin-top:5%; 
  margin-bottom:5%;
}

</style>