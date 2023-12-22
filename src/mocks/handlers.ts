import { http, HttpResponse, HttpHandler } from 'msw'

const getSudokuBoardHandler: HttpHandler = http.get('https://sugoku.onrender.com/board', () => {
  const board = [
    [7, 0, 0, 0, 0, 3, 9, 0, 2],
    [2, 0, 0, 0, 0, 0, 6, 0, 0],
    [6, 0, 9, 0, 0, 8, 1, 0, 4],
    [0, 0, 0, 4, 7, 0, 8, 0, 0],
    [4, 0, 6, 8, 0, 1, 0, 2, 7],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 5, 0, 2, 0, 9, 6],
    [0, 6, 7, 9, 1, 0, 2, 0, 0],
    [9, 0, 0, 6, 0, 7, 0, 0, 1],
  ]
  return HttpResponse.json({ board })
})

export const handlers = [getSudokuBoardHandler]
