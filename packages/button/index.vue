<template>
  <div :class="buttonClass">
    <button><slot></slot></button>
  </div>
</template>

<script>
  export default{
    name:"tButton",
  }
</script>

<script setup>
import {computed} from 'vue'
const props = defineProps({
  type:{
    default:'default'
  }
})
const buttonClass = computed(() => {
  return[
    't-button',
    props.type == "" ? '' : `t-button-${props.type}`,
  ]
})

</script>

<style lang="scss">
button{
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.t-button{
  button{
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid black;
    &:hover,&:focus{
      opacity: .8;
    }
  }
}
.t-button-default{
  button{
    background: #ccc;
    color: black;
  }
}
.t-button-success{
  button{
    background: greenyellow;
    color: white;
  }
}
.t-button-warning{
  button{
    background: orange;
    color: white;
  }
}
</style>