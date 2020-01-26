<template>
  <div id="app">
    <tarif v-if="this.page == 2" :tarifId="this.tarifId" @chooseTarif="chooseTarif"/>
    <groupTarif v-if="this.page == 1" :groupId = "this.groupId" @chooseTarif="chooseTarif"/>
    <groups v-if="this.page == 0" @chooseGroup = "chooseGroup"/>
  </div>
</template>

<script>

import tarif from './components/tarif.vue'
import groupTarif from './components/groupTarif.vue'
import groups from './components/groups.vue'
export default {
  name: 'app',
  data: function(){
    return {
        page: 0,
        groupId: null,
    };
  },
  methods:{
      chooseTarif(value){
          this.page = 2;
          console.log("value.tarifId", value.tarifId)
          this.tarifId = value.tarifId;
      },
      chooseGroup(value){
          this.page = 1;
          this.groupId = value.groupId;
      }
  },
  components: {
      tarif,
      groupTarif,
      groups
  },
}
</script>

<style scoped>

</style>
