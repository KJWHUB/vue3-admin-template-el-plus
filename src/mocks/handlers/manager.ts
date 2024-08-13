import { http, HttpResponse } from 'msw'

const managers = new Map([
  [
    'admin',
    {
      id: 1,
      permission: 'MASTER',
      created_at: '2021-08-01T00:00:00.000Z'
    }
  ],
  ['admin-group1', { id: 2, permission: 'GROUP1', created_at: '2021-08-01T00:00:00.000Z' }],
  ['admin-group2', { id: 3, permission: 'GROUP2', created_at: '2021-08-01T00:00:00.000Z' }]
])

const baseUrl = '/api/managers'

export const handlers = [
  /**
   * 관리자 정보 조회.
   */
  http.get(baseUrl, async ({ request }) => {
    const searchParams = new URL(request.url).searchParams
    const username = searchParams.get('username')

    if (!username) {
      return new HttpResponse('username is required', { status: 400 })
    }
    const user = managers.get(username)

    if (user) {
      return HttpResponse.json(user)
    }

    return new HttpResponse('not found', { status: 404 })
  })
]
