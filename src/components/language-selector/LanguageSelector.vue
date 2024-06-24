<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, availableLocales, messages } = useI18n()

const options = availableLocales.map((locale) => ({
  value: locale,
  label: messages.value[locale].locale
}))

console.log('options', options)
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <IconMdiTranslate width="24" height="24" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="option in options" :key="option.value" :command="option.value">
          {{ option.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
}
</style>
