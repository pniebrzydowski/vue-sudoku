import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GameBoard from './GameBoard.vue'

test('should render the application title', () => {
  const wrapper = mount(GameBoard)
  expect(wrapper.get('h1').text()).toEqual('Sudoku')
})
