<template>
<div>
    <button v-show="loggedIn">Logout</button>
</div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
const loggedIn: Ref<boolean> = ref(false)
</script>
