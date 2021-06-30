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

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItemDivider, 
        IonItem, IonDatetime, IonSegment, IonIcon, IonFab, IonFabButton, IonFabList,
        popoverController   } from '@ionic/vue';
import SamplePopOver from '../popovers/samplePopOver.vue';
import { logoFacebook, logoTwitter, logoVimeo, caretBack, chevronBackCircleOutline } from 'ionicons/icons';

export default  {
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
    IonFabList
  },
  setup() {
    return {
      logoFacebook, 
      logoTwitter, 
      logoVimeo, 
      caretBack, 
      chevronBackCircleOutline
    }
  },
  methods: {
    async openPopover(ev) {
      const popover = await popoverController
        .create({
          component: SamplePopOver,
          event: ev,
          translucent: true
        })
      await popover.present();

      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    },
  }
}
</script>