<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Components</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ionic Components</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item-divider></ion-item-divider>
        <ion-item>
          <ion-label>Date</ion-label>
          <ion-datetime placeholder="Select Date"></ion-datetime>
        </ion-item>
        <ion-button @click="openPopover" color="warning" expand="block">Click me</ion-button>
        <ion-item>
          <ion-label>Toggle Button</ion-label>
          <ion-toggle name="Toggle Button" color="secondary" checked></ion-toggle>
        </ion-item>
        <ion-segment color="secondary" value="call">
          <ion-segment-button value="No">
            <ion-label>No</ion-label>
          </ion-segment-button>
          <ion-segment-button value="Moss">
            <ion-label>Moss</ion-label>
          </ion-segment-button>
          <ion-segment-button value="Co">
            <ion-label>Co</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-list>

      <ion-button @click="retrieveMovies" color="primary" expand="block">Retrieve Movies</ion-button>

      <ion-label>
        <div class="movies-count">
          <h2>Number of Movies:</h2>
          <h1>{{moviesCount}}</h1>
        </div>
      </ion-label>

      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button color="light">
          <ion-icon :md="caretBack" :ios="chevronBackCircleOutline"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button color="light">
            <ion-icon :icon="logoFacebook"></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="light">
            <ion-icon :icon="logoTwitter"></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="light">
            <ion-icon :icon="logoVimeo"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItemDivider, 
        IonItem, IonDatetime, IonSegment, IonIcon, IonFab, IonFabButton, IonFabList,
        popoverController, IonLabel, IonToggle, IonSegmentButton   } from '@ionic/vue';
import SamplePopOver from '../popovers/samplePopOver.vue';
import { logoFacebook, logoTwitter, logoVimeo, caretBack, chevronBackCircleOutline } from 'ionicons/icons';
import { defineComponent, computed } from 'vue';
import { useStore } from '../store';
import { MutationType } from '../store/modules/mutations'
import { get } from '../helpers/api'

export default defineComponent({
  name: 'IonicComp',
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    IonButton, 
    IonList, 
    IonItemDivider, 
    IonItem, 
    IonDatetime,
    IonSegment,
    IonIcon, 
    IonFab, 
    IonFabButton, 
    IonFabList,
    IonLabel, 
    IonToggle, 
    IonSegmentButton 
  },
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    const moviesCount = computed(() => store.getters.moviesCount)
    return {
      logoFacebook, 
      logoTwitter, 
      logoVimeo, 
      caretBack, 
      chevronBackCircleOutline,
      store,
      loading,
      moviesCount
    }
  },
  methods: {
    async openPopover(ev: Event): Promise<void> {
      const popover = await popoverController
        .create({
          component: SamplePopOver,
          event: ev,
          translucent: true
        })
      await popover.present();

      //const { role } = await popover.onDidDismiss();
      //console.log('onDidDismiss resolved with role', role);
    },
    retrieveMovies (): void {
      const vm = this;
      get(
        {
          resource: "Movies/GetNowShowing", 
          done: (response) => {
            vm.store.commit(MutationType.SetMovies, response.data.Data.Movies);
          },
          error: (error) => {
            alert(error);
            //console.log("HTTP GET Request Error: ", error);
          },
          config:  {}
        }
      )
    },
  }
})
</script>

<style scoped>

ion-label .movies-count {
  margin-left: 30%;
  margin-top: 30%;
  white-space: normal;
}

ion-label h1 {
  font-size: 400%;
  margin-left: 20%;
}

ion-label h2 {
  font-size: 200%;
}

</style>