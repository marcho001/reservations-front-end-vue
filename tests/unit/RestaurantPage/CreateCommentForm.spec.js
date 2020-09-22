import { shallowMount } from '@vue/test-utils'
import CreateCommentForm from '@/components/RestaurantPage/CreateCommentForm'

describe('CreateCommentForm test', () => {
  it('should exist', () => {
    const wrapper = shallowMount(CreateCommentForm)
    expect(wrapper.exists()).toBe(true)
  })

  describe('should has data', () => {
    it('should has restaurantId', () => {
      const wrapper = shallowMount(CreateCommentForm, {
        propsData: {
          restaurantId: 3
        }
      })
      expect(wrapper.props().restaurantId).toBe(3)
    })
  })
})
