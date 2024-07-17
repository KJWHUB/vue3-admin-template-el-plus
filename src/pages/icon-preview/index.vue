<script setup lang="ts">
import * as Icons from '@/app/providers/custom-component-usage-plugin/icons/index.ts'

const icons = Object.entries(Icons)
  .map(([key, value]) => ({
    key,
    value
  }))
  .sort((a, b) => a.key.localeCompare(b.key))

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Text copied to clipboard')
  } catch (error) {
    console.error('Failed to copy text to clipboard:', error)
  }
}
</script>

<template>
  <el-card class="icon-preview">
    <div>
      <header class="header">
        <h1>Icon Preview</h1>
        <!-- home -->
        <el-button type="primary" style="width: 200px; height: 60px" @click="$router.push('/')">
          Home
        </el-button>
      </header>

      <!-- icons -->
      <main class="main">
        <h3>클릭시 component Name 이 복사 됩니다.</h3>
        <p>커스텀 플러그인에 등록된 컴포넌트 입니다.</p>
        <ul>
          <li v-for="{ value, key } in icons" :key="key">
            <el-button class="button-wrap" @click="copyToClipboard(key)">
              <div class="button-inner">
                <component :is="value" class="icon" />

                <p class="text">{{ key }}</p>
              </div>
            </el-button>
          </li>
        </ul>
      </main>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.icon-preview {
  margin: 20px auto;
  width: 80vw;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px;
  }

  .main {
    margin-top: 20px;
    padding: 20px;

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      li {
        position: relative;
        display: flex;
        width: 15%;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.button-wrap {
  width: 100%;
  height: auto;

  aspect-ratio: 1 / 1;

  overflow: hidden;

  .button-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
      width: 100px;
      height: auto;
    }
    .text {
      font-size: 10px;
    }
  }
}
</style>
