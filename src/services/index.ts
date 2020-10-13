import {request} from '../graphql'

export async function networkFetch(query: string): Promise<any[]> {
  let response = await request({ query })
  if (response.error) throw new Error(response.error)
  return Object.values(response.data)[0]
}

export function startNetworkFetchWorker(query: string, storeName?:string) {
  let worker = new Worker('./network_fetch.js', { type: 'module' })
  worker.postMessage({ query, storeName })
  worker.onmessage = (event) => {
    let { data, error } = event.data
    console.log('Network Fetch is done: ', { data, error })
    // startLocalPushWorker(storeName, data)
    worker.terminate()
  }
}


export function sayHello(name: string) {
  let worker = new Worker('./services/hello.js', {type: 'module'})
worker.postMessage(name)
}

export function netFetch(query: string) {
  let worker = new Worker('./services/network_fetch.js', {type: 'module'})
worker.postMessage({query})
}