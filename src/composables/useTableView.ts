import { reactive, toRaw, type Reactive, type Ref } from 'vue'

import { delay, filterNonEmptyQueryParamsDeep } from '@/utils'

import type { FormInstance } from 'element-plus'

export interface Pageable {
  page: number
  size: number
}

export type TableViewData<TListItem extends object> = {
  list: TListItem[]
  total: number
  loading: boolean
}

export type UseTableViewProps<TListQuery, TFetchFn> = {
  listQuery: TListQuery
  fetchFn: TFetchFn
  formEl: Ref<FormInstance | undefined>
}

export const useTableView = <
  TListQuery extends object,
  TFetchFn extends (props: any) => any,
  TListItem extends object
>({
  listQuery: setLQ,
  fetchFn,
  formEl
}: UseTableViewProps<TListQuery, TFetchFn>) => {
  const tableData = reactive<TableViewData<TListItem>>({
    list: [],
    total: 0,
    loading: false
  })

  const listQuery = reactive<TListQuery>(setLQ)

  const pageQuery = reactive<Pageable>({
    page: 1,
    size: 10
  })

  // 기본 request 가공 함수
  const defaultRequestHandler = (pQuery: Reactive<Pageable>, lQuery: Reactive<TListQuery>) => {
    return Object.assign({}, pQuery, filterNonEmptyQueryParamsDeep(toRaw(lQuery)))
  }

  // 기본 response 가공 함수
  const defaultResponseHandler = (
    res: any
  ): {
    list: any[]
    total: number
  } => {
    return { list: res.list, total: res.total }
  }

  const fetchData = async (
    requestHandler = defaultRequestHandler, // 기본 함수를 기본값으로 설정
    responseHandler = defaultResponseHandler // 기본 함수를 기본값으로 설정
  ) => {
    tableData.loading = true
    try {
      const request = requestHandler(pageQuery, listQuery) // 커스텀 가능한 requestHandler 사용

      const res = await fetchFn(request)

      await delay(1000 * 1)

      const { list, total } = responseHandler(res) // 커스텀 가능한 responseHandler 사용

      tableData.list = list
      tableData.total = total

      console.log('목록 조회', res)
    } catch (error) {
      console.error(error)
    } finally {
      tableData.loading = false
    }
  }

  const resetForm = () => {
    if (!formEl.value) return
    formEl.value.resetFields()
  }

  const resetFormAndFetch = () => {
    resetForm()
    fetchData()
  }

  return {
    tableData,
    pageQuery,
    listQuery,
    fetchData,
    resetFormAndFetch
  }
}
