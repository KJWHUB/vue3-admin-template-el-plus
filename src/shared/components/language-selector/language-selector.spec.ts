import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LanguageSelector from './LanguageSelector.vue'

describe('LanguageSelector', () => {
  it('정확하게 렌더링합니다', () => {
    const wrapper = mount(LanguageSelector)
    expect(wrapper.findComponent({ name: 'ElDropdown' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'MdiTranslate' }).exists()).toBe(true)
  })

  it('올바른 언어 옵션 수를 보여줍니다', () => {
    const wrapper = mount(LanguageSelector)
    const dropdownItems = wrapper.findAllComponents({ name: 'ElDropdownItem' })
    expect(dropdownItems).toHaveLength(2) // 사용 가능한 언어 수에 따라 조정
  })

  it('현재 언어 옵션을 비활성화합니다', () => {
    const defaultLanguage = 'ko'

    const wrapper = mount(LanguageSelector)
    const dropdownItems = wrapper.findAllComponents({ name: 'ElDropdownItem' })
    const currentLanguageItem = dropdownItems.find((item) => item.props('disabled'))
    expect(currentLanguageItem?.props('command')).toBe(defaultLanguage) // 현재 언어에 따라 조정
  })

  it('새 옵션을 선택하면 언어가 변경됩니다.', async () => {
    const changeLanguage = 'en'

    const wrapper = mount(LanguageSelector)
    const dropdown = wrapper.findComponent({ name: 'ElDropdown' })
    await dropdown.vm.$emit('command', changeLanguage)

    // i18n 설정이 전역으로 주입되었으므로, locale 변경을 확인할 수 있습니다
    expect(wrapper.vm.$i18n.locale).toBe(changeLanguage)
  })
})
