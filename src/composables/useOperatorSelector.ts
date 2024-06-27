import { getOperators } from '@/api/modules/operator'

import { useRemoteSelector } from './useRemoteSelector'

type OperatorOptionItemType = {
  id: number
  label: string
  name: string
}

type UseOperatorSelectorProps = {
  fetchRequest?: Function
}

export const useOperatorSelector = ({ fetchRequest }: UseOperatorSelectorProps = {}) => {
  return useRemoteSelector<OperatorOptionItemType>({
    fetchApi: async () => {
      const request = fetchRequest ? fetchRequest() : undefined
      const response = await getOperators(request)
      return response.data.map((item: any) => ({
        id: item.sqNn,
        label: item.name,
        name: item.name
      }))
    },
    optionUniqueKeyName: 'id'
  })
}
