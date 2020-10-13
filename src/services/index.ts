import {request} from '../graphql'
// import { getLocalStorage, getSvelteStore, StoreName } from '../stores'
// import { encryptnSave } from '../stores'
// import { updateSvelteStore } from '../stores/data_store';
// import type { INotify, Notify } from '../classes'
// import { decrypt, encrypt } from '../stores/cipher.js';


export async function networkFetch(query: string): Promise<any[]> {
  let response = await request({ query })
  if (response.error) throw new Error(response.error)
  return Object.values(response.data)[0]
}

export function startNetworkFetchWorker(query: string, storeName?:string) {
  let worker = new Worker('./services/network_fetch.js', { type: 'module' })
  worker.postMessage({ query, storeName })
  worker.onmessage = (event) => {
    let { data, error } = event.data
    console.log('Network Fetch is done: ', { data, error })
    //  startLocalPushWorker(storeName, data)
  }
}

function timeDiffs(newDate: string | number, oldDate: string | number) {
  try {
    let diffs = new Date(newDate).valueOf() - new Date(oldDate).valueOf()
    console.log("Diffs", diffs)
    return diffs
  } catch (error) {
    console.error(error)
    return 0
  }
}
 
/**Returns the number of docs that were updated successfully 
export async function localPush(storeName: StoreName, data: any[]): Promise<number> {
  let successCount = 0
  for await (let d of data) {
    let encID = await encrypt(d["_id"])
    console.log("encID", encID)
    let encData: string | null = await getLocalStorage(storeName).getItem(encID)
    console.log("encData", typeof encData, encData)

    let oldItem: Record<string, any> = encData ? JSON.parse(await decrypt(encData)) : undefined
    console.log("old data", typeof oldItem, oldItem)
    if (!encData || (oldItem && timeDiffs(d['updatedAt'], oldItem['updatedAt']) > 0)) {
      let encryptedData = await encryptnSave(storeName, d)
      if (encryptedData) {
        console.log("Encryption was successful", encryptedData)
        ++successCount
        updateSvelteStore(getSvelteStore(storeName), d, "CREATE")
      }
    }

  }
  console.log('Complete: ', successCount)
  return successCount
}


 export function startLocalPushWorker(storeName: StoreName, data: any[]) {
  let worker = new Worker('./local_push.js', { type: 'module' })
  worker.postMessage({ storeName, data })
  worker.onmessage = (event) => {
    let { data, error } = event.data
    console.log('Local Push is done: ', { data, error })
  }
} 

 */