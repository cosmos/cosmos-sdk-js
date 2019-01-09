import { IKeys } from './keys.d'
import CosWeb from '../../cosweb'

export default class Keys implements IKeys {

	constructor(private cosweb: CosWeb) {

	}

	getAll() {
		return this.cosweb.http.request({
			url: '/keys'
		})
	}
}