import { delay, http, HttpResponse } from 'msw'

const allUsers = new Map([
  ['1', { id: '1', username: 'admin user', email: 'admin@example.com' }],
  ['2', { id: '2', username: 'user1', email: 'user1@example.com' }],
  ['3', { id: '3', username: 'user2', email: 'user2@example.com' }],
  ['4', { id: '4', username: 'user3', email: 'user3@example.com' }],
  ['5', { id: '5', username: 'user4', email: 'user4@example.com' }],
  ['6', { id: '6', username: 'user5', email: 'user5@example.com' }]
])

type AddUserRequestBody = {
  username: string
  email: string
}

type AddUserResponseBody = {
  id: string
}

const baseUrl = '/api/users'

export const handlers = [
  // 유저 목록 조회
  http.get(baseUrl, async () => {
    await delay(1000 * 1)
    return HttpResponse.json(
      Array.from(allUsers.values()).sort((a, b) => {
        return Number(b.id) - Number(a.id)
      })
    )
  }),
  // 유저 조회
  http.get(`${baseUrl}/:userId`, ({ params }) => {
    console.log('params', params)
    const { userId } = params
    const user = allUsers.get(userId.toString())
    if (user) {
      return HttpResponse.json(user)
    }
    return new HttpResponse('not found', { status: 404 })
  }),
  // 유저 생성
  http.post<any, AddUserRequestBody, AddUserResponseBody, '/api/users'>(
    baseUrl,
    async ({ request }) => {
      const req = await request.json()

      const id = String(allUsers.size + 1)
      allUsers.set(id, {
        id,
        username: req.username,
        email: req.email
      })
      return HttpResponse.json({ id })
    }
  ),
  // 유저 수정
  http.put<
    any,
    {
      email: string
    },
    AddUserResponseBody,
    '/api/users/:userId'
  >(`${baseUrl}/:userId`, async ({ params, request }) => {
    const { userId } = params
    const req = await request.json()

    const targetUser = allUsers.get(userId.toString())
    if (targetUser) {
      targetUser.email = req.email
      // 성공 응답
      return HttpResponse.json({ id: userId })
    }
    // 실패 응답
    return HttpResponse.json(null, { status: 404 })
  })
]
