import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '../Subtitle.vue'

describe('Subtitle', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, {
      slots: {
        default: 'Subtitle Component'
      }
    })
    expect(wrapper.text()).toContain('Subtitle Component')
  })
})
