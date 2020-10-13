import { localPush } from './'
self.onmessage = event => {
  let { storeName, data } = event.data
  if (data && Array.isArray(data)) {
    localPush(storeName, data).then(count => {
      self.postMessage({ data: { fetched: data.length, cached: count, skipped: data.length - count } })
      self.close()
    }).catch((error) => {
      console.error(error.message)
      self.postMessage({ error: error.message })
      self.close()
    })
  } else {
    self.postMessage({ data: { fetched: 0, cached: 0, skipped: 0 }, error: "Data is undefined or not an array" })
    self.close()
  }
};