import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '../Title.vue'

describe('Title', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, {
      slots: {
        default: 'Title Component'
      }
    })
    expect(wrapper.text()).toContain('Title Component')
  })
})
