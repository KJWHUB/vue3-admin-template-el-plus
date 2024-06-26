import { readonly, ref, toRaw } from 'vue'

import { defineStore } from 'pinia'

import { totalCode, type CommonCode } from '@/constants/commonCode'

export const useCommonCodeStore = defineStore('commonCode', () => {
  const code = ref<CommonCode>()

  const readCode = readonly(code)

  const findValue = (key: string) => {
    if (!readCode.value) throw 'Not Ready'
    if (!readCode.value.has(key)) throw 'Not Found'

    const find = toRaw(readCode.value.get(key))

    return {
      find,
      findKey: key,
      findItemValue(itemKey: string) {
        return this.find?.get(itemKey)
      }
    }
  }

  const setupCode = async () => {
    try {
      // const res = await getCommonCode()

      code.value = totalCode
    } catch (e) {
      console.log('error', e)
    }
  }

  return { readCode, setupCode, findValue }
})
