import { ref, type Ref } from 'vue'

type RemoteSelectorOptionsProps<TOptionItemType> = {
  fetchApi: () => Promise<TOptionItemType[]>
  optionUniqueKeyName: keyof TOptionItemType
  selectValueName?: keyof TOptionItemType
}

export const useRemoteSelector = <TOptionItemType>({
  fetchApi,
  optionUniqueKeyName,
  selectValueName
}: RemoteSelectorOptionsProps<TOptionItemType>) => {
  const options: Ref<TOptionItemType[]> = ref([])

  const fetchOptions = async () => {
    try {
      const fetchedOptions = await fetchApi()
      options.value = fetchedOptions
    } catch (error) {
      console.error('useRemoteSelector fetchOptions error:', error)
    }
  }

  return { options, selectValueName, optionUniqueKeyName, $fetch: fetchOptions }
}
