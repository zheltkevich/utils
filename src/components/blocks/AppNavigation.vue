<script setup>
import BaseButton from '@base/BaseButton.vue'
</script>

<template>
    <nav class="nav">
        <nav>
            <RouterLink :to="{ name: 'home' }">Home page</RouterLink>
            <RouterLink :to="{ name: 'another' }">Another page</RouterLink>
            <BaseButton>Button</BaseButton>
        </nav>
    </nav>
</template>
