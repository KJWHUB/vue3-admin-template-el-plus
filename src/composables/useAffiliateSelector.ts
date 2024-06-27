import { getAffiliates } from '@/api/modules/affiliate'

import { useRemoteSelector } from './useRemoteSelector'

type AffiliateOptionItemType = {
  id: number
  label: string
  name: string
}

type UseAffiliateSelectorProps = {
  fetchRequest?: Function
}

export const useAffiliateSelector = ({ fetchRequest }: UseAffiliateSelectorProps = {}) => {
  return useRemoteSelector<AffiliateOptionItemType>({
    fetchApi: async () => {
      const request = fetchRequest ? fetchRequest() : undefined
      const response = await getAffiliates(request)
      return response.data.map((item: any) => ({
        id: item.sqNn,
        label: item.name,
        name: item.name
      }))
    },
    optionUniqueKeyName: 'id'
  })
}
