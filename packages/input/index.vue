<template>
  <div :class="inputClass">
    <input type="text" :value="modelValue" @input="input" />
  </div>
</template>

<script>
export default {
  name:'tInput'
}
</script>


<script setup>
import {computed} from 'vue'
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: String | Number,
  type:{
    default:'default'
  },
})
console.log(props);

const input = e => {
  emit('update:modelValue',e.target.value)
  console.log(e.target.value);
  // props.modelValue = e.target.value;
}


const inputClass = computed(() => {
  return[
    't-input',
    props.type == "" ? '' : `t-input-${props.type}`,
  ]
})
</script>

<style lang="scss" scoped>
.t-input{
  display:inline-block;
  input{
    border: 1px solid blue;
    padding: 0;
    outline: none;
  }
}

.t-input-default{
  input{
    border: 2px solid black;
    border-radius: 20px;
    height: 20px;
    padding: 0 10px;
    &:focus{
      border: 2px solid rgb(4, 255, 0);
    }
  }
}

.t-input-warning{
  input{
    border: 1px solid yellow;
  }
}
</style>