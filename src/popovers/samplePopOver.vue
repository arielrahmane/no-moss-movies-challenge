<template>
  <ion-content class="ion-padding">
    <ion-list>
        <ion-item>
            <ion-label>Pokémon Yellow</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Super Mario World</ion-label>
        </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Popover',
  components: { IonContent, IonList, IonItem, IonLabel }
});
</script>