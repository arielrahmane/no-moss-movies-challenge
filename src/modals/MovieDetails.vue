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
        <ion-img :src="movie.LargePosterUrl" alt="No Available Image" />
        <ion-card-header>
            <ion-card-subtitle>{{movie.Genres.toUpperCase()}}</ion-card-subtitle>
            <ion-card-title>{{ movie.Name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            {{movie.Synopsis}}
        </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonCardHeader,
   IonCardSubtitle, IonCardTitle, IonCardContent, modalController, IonButton, IonButtons, IonCard } from '@ionic/vue';
import { defineComponent  } from 'vue';

export default defineComponent({
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
      IonCardContent, 
      IonButton, 
      IonButtons, 
      IonCard
    },
    methods: {
      closeModal: async function () {
        const modal = await modalController.getTop();
        if (modal) modal.dismiss();
      }
    }
});

</script>