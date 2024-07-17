import { http, HttpResponse } from 'msw'

const allUsers = new Map([
  ['1', { id: '1', username: 'admin user', email: 'admin@example.com' }],
  ['2', { id: '2', username: 'user1', email: 'user1@example.com' }],
  ['3', { id: '3', username: 'user2', email: 'user2@example.com' }],
  ['4', { id: '4', username: 'user3', email: 'user3@example.com' }],
  ['5', { id: '5', username: 'user4', email: 'user4@example.com' }],
  ['6', { id: '6', username: 'user5', email: 'user5@example.com' }]
])

export const handlers = [
  // 유저 목록 조회
  http.get('/api/users', () => {
    return HttpResponse.json(Array.from(allUsers.values()))
  }),
  // 유저 조회
  http.get('/api/user/:userId', ({ params }) => {
    const { userId } = params
    const user = allUsers.get(userId.toString())
    if (user) {
      return HttpResponse.json(user)
    }
    return new HttpResponse('not found', { status: 404 })
  })
]
