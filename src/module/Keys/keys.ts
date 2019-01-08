import { IKeys } from './keys.d'
import CosWeb from '../../cosweb'

export default class Keys implements IKeys {

	constructor(public cosweb: CosWeb) {

	}

	getAll() {
		return this.cosweb.http.request({
			url: '/keys'
		})
	}
}