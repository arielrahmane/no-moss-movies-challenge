import { mount } from '@vue/test-utils'
import IonicComp from '@/views/IonicComp.vue'

describe('IonicComp.vue', () => {
  it('renders Ionic Components view', () => {
    const wrapper = mount(IonicComp)
    expect(wrapper.text()).toMatch('Ionic Components page')
  })
})
