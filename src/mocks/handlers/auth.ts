import { http, HttpResponse } from 'msw'

const auth = new Map([
  [
    'admin',
    {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      expiresIn: 3600
    }
  ]
])

const baseUrl = '/api/auth'

export const handlers = [
  // 유저 로그인
  http.get(baseUrl, async ({ request }) => {
    const searchParams = new URL(request.url).searchParams
    const username = searchParams.get('username')

    if (!username) {
      return new HttpResponse('username is required', { status: 400 })
    }
    const user = auth.get(username)

    if (user) {
      return HttpResponse.json(user)
    }

    return new HttpResponse('not found', { status: 404 })
  })
]
