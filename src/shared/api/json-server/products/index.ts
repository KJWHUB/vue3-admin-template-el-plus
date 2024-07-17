import { apiInstance } from '../base'

import type { Server_Product } from './models'
import type { AxiosPromise } from 'axios'

const BASE_URL = '/products'

// 상품 목록 조회
export type GetProductListParams = {
  name_like?: string
  price_lte?: number
}

export const getProductList = (
  searchParams?: GetProductListParams
): AxiosPromise<Server_Product[]> => {
  return apiInstance.get(BASE_URL, {
    params: searchParams
  })
}

// 상품 정보 조회
export type GetProductIdByIdParams = {
  productId: string
}

export const getProductById = ({
  productId,
  ...params
}: GetProductIdByIdParams): AxiosPromise<Server_Product> => {
  return apiInstance.get(`${BASE_URL}/${productId}`, { params })
}
