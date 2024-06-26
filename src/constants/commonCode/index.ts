import { CLCLN_BACNT_BANK_SE } from './CLCLN_BACNT_BANK_SE'
import { SPLR_APRV_STTS } from './SPLR_APRV_STTS'
import { SPLR_SE } from './SPLR_SE'

interface RemoteCommonCode {
  [key: string]: Array<{
    cdSeId: string
    cdDtlId: string
    cdDtlNm: string
  }>
}

export type CommonCode = Map<string, Map<string, string>>

const hashMap = (data: RemoteCommonCode): CommonCode => {
  return Object.entries(data).reduce((acc: CommonCode, [key, value]) => {
    const map = new Map<string, string>(value.map((item) => [item.cdDtlId, item.cdDtlNm]))
    acc.set(key, map)
    return acc
  }, new Map<string, Map<string, string>>())
}

export const totalCode = hashMap({ CLCLN_BACNT_BANK_SE, SPLR_SE, SPLR_APRV_STTS })
