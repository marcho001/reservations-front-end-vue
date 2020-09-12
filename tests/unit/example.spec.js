// 引入jest 方法
import { shallowMount } from '@vue/test-utils'

//引入要測試的檔案

// import HelloWorld from '@/components/HelloWorld.vue'

//開始寫測試的內容
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    // 用 shallowMount(HelloWorld) 
    // 現在 vm === wrapper.vm
    
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // })
    expect(wrapper.text()).toMatch(msg)
  })
})
