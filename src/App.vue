<template>
  <div id="app">
    <h1 class="flash">FRAMEWORKS COMPARISON</h1>
    <div class="menu-buttons-">
      <button class="button-fr" @click.prevent="setFramework('vuetify')">Vuetify</button>
      <button class="button-fr" @click.prevent="setFramework('element')">Element</button>
      <button class="button-fr" @click.prevent="setFramework('syncfusion')">Syncfusion</button>
      {{ currentFramework }}
    </div>

    <div class="changing-frameworks">
      <div class="vuetify" v-if="currentFramework === 'vuetify'">
        <vuetifyTemp v-bind:dataTable="tableData" v-if="tableData.length > 0"/>
      </div>

      <div v-bind:dataTable="tableData" class="element" v-if="currentFramework === 'element'">
        <elementTemp v-bind:dataTable="tableData" v-if="tableData.length > 0"/>
      </div>

      <div v-bind:dataTable="tableData" class="syncfusion" v-if="currentFramework === 'syncfusion'">
        <SyncfusionTemp v-bind:dataTable="tableData" v-if="tableData.length > 0"/>
      </div>
    </div>
  </div>
</template>

<script>
import vuetifyTemp from "./components/vuetifyTemp.vue";
import elementTemp from "./components/elementTemp.vue";
import SyncfusionTemp from "./components/syncfusionTemp.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    vuetifyTemp,
    elementTemp,
    SyncfusionTemp
  },
  data() {
    return {
      currentFramework: "vuetify",
      tableData: []
    };
  },
  computed: {
    getData: function() {
      axios
        .get('https://www.googleapis.com/books/v1/volumes?q=""')
        .then(result => (this.tableData = result.data.items))
        .catch(err => console.error(err));
    }
  },
  methods: {
    setFramework: function(framework) {
      this.currentFramework = framework;
    }
  },
  mounted() {
    this.getData;
  }
};
</script>

<style>
button.button-fr {
  border: 2px solid gray;
  margin: 5px;
  padding: 10px;
}

@-webkit-keyframes flash {
  from,
  50%,
  to {
    background-color: rgb(255, 255, 255);
  }
  25%,
  75% {
    background-color: rgb(253, 18, 18);
  }
}

@keyframes flash {
  from,
  50%,
  to {
    background-color: rgb(255, 255, 255);
  }
  25%,
  75% {
    background-color: rgb(253, 18, 18);
  }
}

.flash {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: flash;
  animation-name: flash;
}
</style>
