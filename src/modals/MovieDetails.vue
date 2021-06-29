<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ movie.Name }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    
    <ion-img :src="movie.SkinMobileUrl" alt="No Available Image"></ion-img>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg,  } from '@ionic/vue';
import { defineComponent  } from 'vue';

export default defineComponent ({
  name: 'MovieDetailsModal',
  props: {
    movie: {},
  },
  components: { 
      IonContent, 
      IonHeader, 
      IonTitle, 
      IonToolbar,
      IonImg,
    }
});

</script>