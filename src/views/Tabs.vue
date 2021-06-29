<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar color="light">
        <ion-tab-button tab="ionicComp" href="/tabs/ionicComp">
          <ion-icon :icon="logoIonic" />
          <ion-label>Ionic</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="moviesTab" href="/tabs/movies">
          <ion-icon :icon="list" />
          <ion-label>Movies</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { logoIonic, list } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      logoIonic,
      list
    }
  }
}
</script>