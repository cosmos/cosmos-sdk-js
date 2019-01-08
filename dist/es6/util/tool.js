import { encodeBase64, decodeBase64 } from 'tweetnacl-util';
export default {
    getHash256: function (input) {
        var sha256 = require('js-sha256');
        var hash2 = sha256.update(input);
        return hash2.array();
    },
    base64ToByteArray: function (base64String) {
        try {
            var sliceSize = 1024;
            var byteCharacters = atob(base64String);
            var bytesLength = byteCharacters.length;
            var slicesCount = Math.ceil(bytesLength / sliceSize);
            var byteArrays = new Array(slicesCount);
            for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
                var begin = sliceIndex * sliceSize;
                var end = Math.min(begin + sliceSize, bytesLength);
                var bytes = new Array(end - begin);
                for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                    bytes[i] = byteCharacters[offset].charCodeAt(0);
                }
                byteArrays[sliceIndex] = new Uint8Array(bytes);
            }
            return byteArrays;
        }
        catch (e) {
            console.log("Couldn't convert to byte array: " + e);
            return undefined;
        }
    },
    /**
     * buffer to hex
     * @param {*} buffer buffer 数组
     */
    buf2hex: function (buffer) {
        return Array.prototype.map.call(new Uint8Array(buffer), function (x) { return ('00' + x.toString(16)).slice(-2); }).join('');
    },
    stringToHex: function (str) {
        var val = '';
        for (var i = 0; i < str.length; i++) {
            val += str.charCodeAt(i).toString(16);
        }
        return val;
    },
    encodeBase64: function (value) {
        return encodeBase64(value);
    },
    decodeBase64: function (value) {
        return decodeBase64(value);
    }
};
//# sourceMappingURL=tool.js.map