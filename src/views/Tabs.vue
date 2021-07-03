<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
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

<script lang="ts">
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

<style scoped>

ion-tab-button ion-label {
  font-size: 200%;
  white-space: normal;
}

ion-tab-button ion-icon {
  font-size: 300%;
}

ion-tab-bar {
  height: 10%;
}

</style>