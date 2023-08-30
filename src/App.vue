<template>
  <div>
    <t-button >测试</t-button>
    <t-button type="success">测试</t-button>
    <t-button type="warning">测试</t-button>
    <br>
    <br>
    <br>
    <t-input v-model="val"></t-input>
    <t-input type="warning" v-model="val"></t-input>
    <t-input type="" v-model="val"></t-input>
    <p>{{ val }}</p>

    <br>
    <br>
    <br>

    <t-friend></t-friend>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const val = ref("")

</script>

<style lang="scss">

</style>