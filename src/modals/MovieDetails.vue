<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button @click="closeModal">
          Close
        </ion-button>
      </ion-buttons>
      <ion-title>Movie Details</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-card>
        <ion-img :src="movie.SkinMobileUrl" alt="No Available Image" />
        <ion-card-header>
            <ion-card-subtitle>{{movie.Genres}}</ion-card-subtitle>
            <ion-card-title>{{ movie.Name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            {{movie.Synopsis}}
        </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonCardHeader,
   IonCardSubtitle, IonCardTitle, IonCardContent, modalController } from '@ionic/vue';
import { defineComponent  } from 'vue';

export default defineComponent ({
  name: 'MovieDetailsModal',
  props: {
    movie: {}
  },
  components: { 
      IonContent, 
      IonHeader, 
      IonTitle, 
      IonToolbar,
      IonImg, 
      IonCardHeader, 
      IonCardSubtitle, 
      IonCardTitle, 
      IonCardContent
    },
    methods: {
      closeModal: function () {
        console.log("close modal");
        modalController.dismiss();
      }
    }
});

</script>