import { shallowMount } from '@vue/test-utils'
import CreateCommentForm from '../../src/components/RestaurantPage/CreateCommentForm'

describe('CreateCommentForm test', () => {
  it('should has data', () => {
    const wrapper = shallowMount(CreateCommentForm,{
      propsData: {
        restaurant: 3
      }
    })
    expect(wrapper.props().restaurantId).toBe(3)
  })
})
