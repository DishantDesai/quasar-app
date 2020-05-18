<template>
  <q-layout view="lHh Lpr lFf">
    <q-toggle
        v-model="isShow"
        :label="`${isShow ? 'Hide' : 'Show'} Content`"
    />
    <div v-if="isShow" class="d-flex flex-row" style="overflow:auto">
      <q-card style="min-width:344px;margin-left:20px;margin-top:20px;padding:15px" class="q-ml-3 q-mt-2 shadow-3" v-for="card in 20" :key="card">
        {{card}}
        <dropdown-menu/>
        <q-input label="Name" />
        <template v-for="item in 15">
          <q-card :key="item" class="task-card">
            <q-card-section
               @click="dialog = true" 
             >
              Number {{item}}
            </q-card-section>
            <div class="column">
              <dropdown-menu/>
              <q-btn class="col-6" style="margin-top:5px" label="Date Picket">
                <q-tooltip>
                  Date Picker
                </q-tooltip>
                <q-menu>
                  <q-date v-model="date" />
                </q-menu>
              </q-btn>
              <dropdown-menu/>
              <dropdown-menu/>
            </div>
            <q-separator />
          </q-card>
        </template>
        <q-input label="Add" />
      </q-card>
      <card-dialog
        v-if="dialog"
        :dialog="dialog"
        @close="closeDialog"
      />
    </div>
  </q-layout>
</template>

<script>

import DropdownMenu from './components/Menu'
import CardDialog from './components/Dialog'
export default {
  name: 'LayoutDefault',
  components:{
    DropdownMenu,
    CardDialog
  },
  beforeUpdate(){
    if(this.isShow){
      console.time('vuetify')
    }
  },
  updated(){
    if(this.isShow){
      console.timeEnd('vuetify')
    }
  },
  data(){
    return{
      date:null,
      isShow:true,
      dialog: false
    }
  },
  methods:{
    closeDialog(){
      this.dialog = false
    }
  }
}
</script>

<style>
</style>
