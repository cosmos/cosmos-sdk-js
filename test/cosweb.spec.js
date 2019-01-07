import COSWeb from '../src'
import defaultConfig from '../src/config'

const expect = chai.expect

describe('[create the cosweb]',  ()=>{
	it('create with default config', ()=>{
		const cosweb = new COSWeb()
		expect(cosweb).not.null
		expect(cosweb.config.chainId).to.equal(defaultConfig.chainId)
		expect(cosweb.config.HTTPAPINode).to.equal(defaultConfig.HTTPAPINode)
	})
})

describe('[validation for account]',  ()=>{
	it('is valid account?', ()=>{
		const cosweb = new COSWeb()
		expect(cosweb.isValidAccount('adress0000')).to.equal(true)
	})
})