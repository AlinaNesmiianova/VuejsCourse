<!-- Это компонент, последовательность такая: -->
<template> <!-- Сначала структура -->
  <h1>Не может быть, ({{ value }})!</h1>
  <CheckboxComp :way="1" @change="(v) => addValue(v)"
  </CheckboxComp>/>
  <CheckboxComp :way="2"/>
  <CheckboxComp :way="123"/> <!-- Это-->
  <CheckboxComp />
  <CheckboxComp />
</template>

<!-- Затем логика -->
<script setup lang="ts"> 
import { ref } from 'vue'
import CheckboxComp from '@/components/Checkbox.vue'

const value = ref(0) 

// const { way } = (? Правильно ли - вопрос)
const props = defineProps ({ // Объявление входных параметров
  way: {
    // required: true,
    default: 0,
    type: Number,
  }
})
</script> 

<style scoped></style> <!-- И в конце стили -->

<!-- Структуру соблюдаем такую! Договорились так, классическая последовательность -->