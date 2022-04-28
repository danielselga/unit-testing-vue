import { mount } from '@vue/test-utils'
import { ref } from 'vue'

class AppHeaderStub {
  constructor () {
    return {
      template: '<div> <button v-show="loggedIn">Logout</button> </div>'
    }
  }
}

const AppHeaderStubFactory = () => {
  return new AppHeaderStub()
}

describe('AppHeder', () => {
  test('If user is not logged in, do not show logout  button', () => {
    const Component = AppHeaderStubFactory()
    console.log(Component)
    const wrapper = mount(Component, {
      data () {
        return {
          loggedIn: ref(false)
        }
      }
    })
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user is logged in, show logout  button', async () => {
    const Component = AppHeaderStubFactory()
    const wrapper = mount(Component, {
      data () {
        return {
          loggedIn: ref(true)
        }
      }
    })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
