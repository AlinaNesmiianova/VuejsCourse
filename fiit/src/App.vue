<!-- Это компонент, последовательность такая: -->
<template> <!-- Сначала структура -->
  <RouterView />
</template>

<!-- Затем логика -->
<script setup lang="ts"> 
import { ref, onBeforeMount, onMounted } from 'vue'
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

onBeforeMount(()=> { // выполняется хук, монтируется в страницу: монтируется в глубину дочерние элементы
  console.log('onBeforeMount')
  var t = 1 
})

onMounted(()=> { //выполняется после
  console.log('Checkbox', props.way)
})
</script> 

<style scoped></style> <!-- И в конце стили -->

<!-- Структуру соблюдаем такую! Договорились так, классическая последовательность -->