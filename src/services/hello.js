self.onmessage = event => {
  console.log("Hello" + event.data)
  self.close
}