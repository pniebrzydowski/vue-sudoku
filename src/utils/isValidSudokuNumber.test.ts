import { expect, test } from 'vitest'
import { isValidSudokuNumber } from './isValidSudokuNumber'

test('should evaluate true for integers between 1 and 9', () => {
  for (let i = 1; i <= 9; i++) {
    expect(isValidSudokuNumber(i)).toBe(true)
  }
})

test('should evaluate false if number is not an integer', () => {
  expect(isValidSudokuNumber(1.4)).toBe(false)
})

test('should evaluate false if number is less than 1', () => {
  expect(isValidSudokuNumber(0)).toBe(false)
})

test('should evaluate false if number is greater than 9', () => {
  expect(isValidSudokuNumber(10)).toBe(false)
})
