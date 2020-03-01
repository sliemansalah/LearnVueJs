<template>
  <p>Server Status: {{status}} (<button @click="changeStatus">Change</button>)</p>
</template>

<script>
export default {
    data(){
        return {
            status:'Critical'
        }
    },
methods:{
    changeStatus(){
        this.status ='Normal'
    }
}
}
</script>

<style>

</style>