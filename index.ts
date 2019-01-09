import CosWeb from './src/index'

const cosweb = new CosWeb({ baseUrl: '' })

console.log(cosweb.config)
// cosweb.http
cosweb.Keys.getAll().then(res => {
    console.log('------------------')
    console.log(res.data)
})


export default CosWeb

