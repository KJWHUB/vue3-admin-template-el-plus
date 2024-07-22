import { http, HttpResponse } from 'msw'

const allProducts = new Map([
  [
    '1',
    {
      id: '1',
      name: 'iPad 4 Mini',
      price: 500.01,
      description: 'Description for product 1',
      image: 'https://picsum.photos/300/300'
    }
  ],
  ['2', { id: '2', name: 'H&M T-Shirt White', price: 10.99 }],
  [
    '3',
    {
      id: '3',
      name: 'Charli XCX - Sucker CD',
      price: 19.99,
      description: 'Description for product 3',
      image: 'https://picsum.photos/300/300'
    }
  ]
])

const baseUrl = '/api/products'

export const handlers = [
  // 상품 목록 조회
  http.get(baseUrl, async ({ request }) => {
    const searchParams = new URL(request.url).searchParams
    const name_like = searchParams.get('name_like')
    const price_lte = searchParams.get('price_lte')

    return HttpResponse.json(
      Array.from(allProducts.values())
        .filter((product) => {
          if (name_like && !product.name.includes(name_like as string)) {
            return false
          }
          if (price_lte && product.price > Number(price_lte)) {
            return false
          }
          return true
        })
        .sort((a, b) => {
          return Number(b.id) - Number(a.id)
        })
    )
  }),
  // 상품 조회
  http.get(`${baseUrl}/:productId`, ({ params }) => {
    console.log('params', params)
    const { productId } = params
    const product = allProducts.get(productId.toString())
    if (product) {
      return HttpResponse.json(product)
    }
    return new HttpResponse('not found', { status: 404 })
  })
]
