<script setup lang="ts">
import { reactive } from 'vue'

import { useAuth } from '@/composables/useAuth'
const logo = 'LOGO'

const { login } = useAuth()

const form = reactive({
  username: '',
  password: ''
})

const handleSubmit = () => {
  login(form)
}
</script>

<template>
  <div>1</div>
</template>

<style scoped></style>
