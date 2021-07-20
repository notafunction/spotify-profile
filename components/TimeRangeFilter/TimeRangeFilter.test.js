import { mount } from '@vue/test-utils'
import TimeRangeFilter from './TimeRangeFilter'

it('Renders button for each filter passed', () => {
  const wrapper = mount(TimeRangeFilter, {
    propsData: {
      ranges: [
        {
          label: 'label',
          value: 'value-1',
        },
        {
          label: 'label',
          value: 'value-2',
        },
      ],
    },
  })

  expect(wrapper.findAll('button').length).toBe(2)
})

it('Emits value of filter when clicked', async () => {
  const wrapper = mount(TimeRangeFilter, {
    propsData: {
      ranges: [
        {
          label: 'Range Label',
          value: 'range-value',
        },
      ],
    },
  })

  await wrapper.find('button').trigger('click')

  expect(wrapper.emitted()['change-range'][0]).toStrictEqual(['range-value'])
})
