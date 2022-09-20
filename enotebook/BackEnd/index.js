const connectTomongo = require('./db')
connectTomongo();
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello sai!')
// })
app.use('/api/auth',require("./Routes/auth"))
app.use('/api/notes',require("./Routes/notes"))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})