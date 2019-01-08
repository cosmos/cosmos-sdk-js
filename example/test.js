// const CosWeb = require('../dist').default

// console.log(CosWeb)

const cosweb = new CosWeb({ baseUrl: 'https://192.168.1.215:26657' })

console.log(cosweb.config)

cosweb.Keys.getAll().then(res => {
    console.log('------------------')
    console.log(res.data)
})
