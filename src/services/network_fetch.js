import { networkFetch } from './'
self.onmessage = event => {
  let { query } = event.data
  console.log(query)
   networkFetch(query).then(data => {
    console.log('Fetch was successfull', data.length, 'was fetched')
    self.postMessage({ data })
    self.close()
  }).catch((error) => {
    console.error(error.message)
    self.postMessage({error: error.message})
    self.close()
  }) 
};
