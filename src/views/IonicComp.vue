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

      <div class="component-options">
        <strong>Component Options</strong>

        <!-- SEGMENT -->
        <div class="option-segment">
          <ion-segment :value="selectedSegment" @ionChange.prevent="segmentChanged($event)">
            <ion-segment-button value="provider">
              <ion-label>Provider</ion-label>
            </ion-segment-button>
            <ion-segment-button value="myself">
              <ion-label>Myself</ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>

        <!-- RADIO -->
        <div class="option-radio">
          <ion-radio-group v-model="selectedRadio">
            <ion-radio name="payee" id="provider-radio" mode="md" value="provider"></ion-radio>
            <ion-label for="provider-radio">Provider</ion-label>
            <ion-radio name="payee" id="myself-radio" mode="md" value="myself"></ion-radio>
            <ion-label for="myself-radio">Myself</ion-label>
          </ion-radio-group>  
        </div>
      </div>

      <div class="display-data">
        <div class="data-box">
          <h2 class="segment-data">Selected segment: </h2>
          <p>{{selectedSegment}}</p>
        </div>
        <div class="data-box">
          <h2 class="radio-data">Selected radio: </h2>
          <p>{{selectedRadio}}</p>
        </div>
      </div>
      
      

      <!-- Retrieve movies -->
      <!--div class="movies-count">
        <ion-button @click="retrieveMovies" expand="block">Retrieve Movies</ion-button>
        <h2>Number of Movies</h2>
        <h1>{{moviesCount}}</h1>
      </!--div-->

      <!-- FAB Button -->
      <!--ion-fab horizontal="end" vertical="bottom" slot="fixed">
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
      </!--ion-fab-->

    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment,
        popoverController, IonLabel, IonSegmentButton, IonRadio, IonRadioGroup  } from '@ionic/vue';
import SamplePopOver from '../popovers/samplePopOver.vue';
import { logoFacebook, logoTwitter, logoVimeo, caretBack, chevronBackCircleOutline} from 'ionicons/icons';
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
    IonSegment,
    IonLabel, 
    IonSegmentButton,
    IonRadio,
    IonRadioGroup
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
  data() {
    return {
      selectedSegment: "",
      selectedRadio: ""
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
    segmentChanged(ev: CustomEvent) {
      console.log(ev);
      this.selectedSegment = ev.detail.value;
    },
    radioCahnged(ev: CustomEvent) {
      console.log(ev);
      this.selectedRadio = ev.detail.value;
    }
  }
})
</script>

<style lang="scss" scoped>

.component-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong {
    margin: 1rem;
    font-size: 20px;
  }
  .option-segment {
    width: 60%;
    margin: 1rem;
    ion-segment {
      ion-segment-button {
        --background-focused: #b4ec51;
      }
    }
  }
  .option-radio {
    margin: 1rem;
    ion-radio-group {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      ion-radio {
        margin: 1rem;
        --color-checked: #b4ec51;
      }
      ion-label {
        margin-right: 2rem;
      }
    }
  }
}

.display-data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .data-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    margin-bottom: 0.2rem;
    padding: 1rem;
    border: 1px solid white;
    width: 90%;
    h2 {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 1rem;
      font-size: 20px;
      font-weight: 800;
    }
    p {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 1rem
    }
  }
}

.movies-count {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 30%;
  white-space: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  border-radius: 20px;
  ion-button {
    display: block;
    width: 90%;
    margin-top: 10px;
    --background: rgba(0,212,255,1);
    --border-style: solid;
    --border-width: 2px;
    --border-color: black;
    --color: black;
    font-weight: 800;
    font-size: 20px;
  }
  h2 {
    font-size: 1.5rem;
  }
}



</style>