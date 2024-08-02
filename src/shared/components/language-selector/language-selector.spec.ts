import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'

import { i18n } from '@/app/providers/i18n'

import LanguageSelector from './LanguageSelector.vue'

describe('LanguageSelector', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(LanguageSelector, {
      global: {
        plugins: [i18n]
      }
    })
  })

  it('컴포넌트를 렌더링합니다', () => {
    const wrapper = mount(LanguageSelector, {
      global: {
        plugins: [i18n]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('옵션을 렌더링합니다', () => {
    console.log('wrapper.html()', wrapper.html())
    expect(wrapper.findAll('.el-dropdown-item').length).toBe(2)
  })

  it('커맨드를 실행합니다', async () => {
    await wrapper.find('.el-dropdown-link').trigger('click')
    await wrapper.findAll('.el-dropdown-item')[1].trigger('click')
    expect(wrapper.emitted().command).toBeTruthy()
  })

  it('비활성화된 옵션을 클릭합니다', async () => {
    await wrapper.find('.el-dropdown-link').trigger('click')
    await wrapper.findAll('.el-dropdown-item')[0].trigger('click')
    expect(wrapper.emitted().command).toBeFalsy()
  })
})
