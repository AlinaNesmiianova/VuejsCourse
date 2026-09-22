<template>
    <input v-model="check" type="checkbox">
    {{ check }}
    <span class="checkbox__label--red">WoW!</span> //

    <span class="checkbox__label--green">WoW!</span> //

    <span v-if="check" class="checkbox__label--green">WoW!</span>
    <span v-else class="checkbox__label--red">WoW!</span> //
    
    <span :class = "check ? 'checkbox__label--green' : 'checkbox__label--red'">Wow!</span> //
    
    <input v-model="check" type="checkbox" @change = "(e) => addV(6, e)"">{{ v }} // {{ v2 }} <!-- Рекомендуется использовать стрелочные функции, в которые добавляем функции из scripts -->
    
    <!-- () => addv()--> <!-- Нет ни внешних компонентов, которые описывают, как событие инициализировано, ни вложенных -->
</template>

<script setup lang="ts">
import {computed, ref } from 'vue'

const emits = defineEmits(['change'])

const v = ref(0)
const check = ref(true)

const v2 = computed(()=>v.value*2) //кэшированные вычисления

const addV = (p: number, e: Event | null = null) => {
    v.value += p
    emits('change', v.value)
}
</script>

<style lang="scss">
.checkbox__label {
    color:brown;

    &--red { 
        color: red;
    }

    &--green { /* Это препроцессор - некоторая дополнительная сборка для стилей, которая будет .. в понятном браузере виде */
        color:green;
    }
}
</style>
<!-- Главное логика исполнения Что, зачем и как делаем-->
<!-- Трехэлементный подход во Vue-->