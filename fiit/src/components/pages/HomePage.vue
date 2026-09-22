<template> 
    Главная //
    <!-- Редко используем ссылки следующего вида: -->
    <RouterLink :to="{ name: ROUTE_NAME.SECOND }">На вторую</RouterLink>
    <Button @click="() => toSecond()">Переход</Button>
</template>

<script setup lang="ts">
import { ROUTE_NAME } from '@/router'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex' 

const router = useRouter()
const store = useStore()

const ourCount = computed( () => store.getters[])

const toSecond = () => {
    const value = confirm('Вы уверены, что хотите перейти?')
    if (value) {
        router.push({ name: ROUTE_NAME.SECOND})
    }
}
</script>

<style>
</style>