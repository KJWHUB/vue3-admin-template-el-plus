<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { availableLocales, messages, locale } = useI18n()

const options = availableLocales.map((locale) => ({
  value: locale,
  label: messages.value[locale].locale
}))

const command = (val: string) => {
  locale.value = val
}
</script>

<template>
  <el-dropdown @command="command">
    <span class="el-dropdown-link">
      <MdiTranslate width="24" height="24" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="option in options"
          :key="option.value"
          :command="option.value"
          :disabled="locale === option.value"
        >
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
