import nacl from 'tweetnacl'
import { encodeBase64, decodeBase64 } from 'tweetnacl-util'
import { default as tool } from './util/tool'
import bip39 from 'bip39'
import HTTPEndpoint from './util/HTTPEndpoint'
import Tx from './model/tx'
import Account from './model/account'

const genarateMnemonic = Symbol('genarateMnemonic')
const genarateKeyPair = Symbol('genarateKeyPair')

export default class QWeb {
	constructor(config) {
		this._chainId = config.chainId
		this._baseUrl = config.baseUrl
		this._httpEndpoint = new HTTPEndpoint({ chainId: this._chainId, baseUrl: this._baseUrl })
	}

	get chainId() {
		return this._chainId
	}

	get baseUrl() {
		return this._baseUrl
	}

	get tx() {
		return new Tx(this)
	}

	get account() {
		return new Account(this)
	}

	get http() {
		return this._httpEndpoint
	}

	get tool() {
		return tool
	}

	/**
	 * 新建账户
	 */
	newAccount() {
		const mnemonic = this[genarateMnemonic]()
		const keyPair = this[genarateKeyPair](mnemonic)
		return {
			mnemonic,
			keyPair,
			publicKey: encodeBase64(keyPair.publicKey),
			privateKey: encodeBase64(keyPair.secretKey),
			address: this.getAddress(keyPair.publicKey)
		}
	}

	/**
	 * 根据助记符恢复账户
	 * @param {string} mnemonic 助记符
	 */
	recoveryAccountByMnemonic(mnemonic) {
		const keyPair = this[genarateKeyPair](mnemonic)
		return {
			mnemonic,
			keyPair,
			publicKey: encodeBase64(keyPair.publicKey),
			privateKey: encodeBase64(keyPair.secretKey),
			address: this.getAddress(keyPair.publicKey)
		}
	}

	/**
	 * 根据私钥恢复账户
	 * @param {string} privateKey 私钥
	 */
	recoveryAccountByPrivateKey(privateKey) {
		const privateKey_buffer = decodeBase64(privateKey)
		const keyPair = nacl.sign.keyPair.fromSecretKey(privateKey_buffer)
		return {
			keyPair,
			publicKey: encodeBase64(keyPair.publicKey),
			privateKey: encodeBase64(keyPair.secretKey),
			address: this.getAddress(keyPair.publicKey)
		}
	}

	/**
     * 生成助记符
     */
	[genarateMnemonic]() {
		// 商 256，生成24个助记单词
		const mnemonic = bip39.generateMnemonic(256)
		return mnemonic
	}

	/**
	 * 生成公私钥对
	 * @param {string} mnemonic 助记符
	 * @returns {object} 公私钥对
	 */
	[genarateKeyPair](mnemonic) {
		const hexSeed = bip39.mnemonicToSeed(mnemonic, 'qstars')
		const secret = tool.getHash256(hexSeed)
		const keyPair = nacl.sign.keyPair.fromSeed(new Uint8Array(secret))
		return keyPair
	}

	/**
	 * 获取链上地址
	 * @param {Uint8Array} publicKey 公钥
	 */
	getAddress(publicKey) {
		const bech32 = require('bech32')
		const pkAarry = tool.getHash256(publicKey)
		const nw = bech32.toWords((Buffer.from(pkAarry.slice(0, 20))))
		const addr = bech32.encode('address', nw)
		return addr
	}

}
