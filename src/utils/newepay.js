import CryptoJS from 'crypto-js'
import { v4 as uuid } from 'uuid'

// const HashKey = 'kFb6sccqjmALimU18pVkEslFTk3W1AEe'
// const HashIV = 'Cz2NkRd0JxE7uVbP'
// // key iv 轉成 128 bit CryptoJs.enc.Utf8.parse(key)

// const key = CryptoJS.enc.Utf8.parse(HashKey)
// const iv = CryptoJS.enc.Utf8.parse(HashIV)

export default {
  getPayData(totalPrice, email, URL) {
    const payData = {
      MerchantID: 'MS33418458',
      Version: 1.5,
      RespondType: 'JSON',
      TimeStamp: Date.now(),
      MerchantOrderNo: uuid(),
      Amt: '',
      ItemDesc: 'Ellen',
      Email: '',
      LoginType: 0,
      NotifyURL: 'https://restaurant-reservation-10720.herokuapp.com/api/spgateway/callback',
      ReturnURL: 'https://restaurant-reservation-10720.herokuapp.com/api/spgateway/callback',
      ClientBackURL: ''
    }
    payData['Amt'] = totalPrice
    payData['Email'] = email
    payData['ClientBackURL'] = URL
    return payData
  },
  getChain(data) {
    const results = []
    for (let KeyAndValue of Object.entries(data)) {
      results.push(`${KeyAndValue[0]}=${KeyAndValue[1]}`)
    }
    return results.join('&')
  },
  Encrypt(data, HashKey, HashIV) {
    const key = CryptoJS.enc.Utf8.parse(HashKey)
    const iv = CryptoJS.enc.Utf8.parse(HashIV)
    const srcs = CryptoJS.enc.Utf8.parse(data)
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv })
    return encrypted.ciphertext.toString()
  },
  Decrypt(data, HashKey, HashIV) {
    const key = CryptoJS.enc.Utf8.parse(HashKey)
    const iv = CryptoJS.enc.Utf8.parse(HashIV)
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv })
    return decrypt.toString(CryptoJS.enc.Utf8)
  },
  ShaEncrypt(data, HashKey, HashIV) {
    const plainText = `HashKey=${HashKey}&${data}&HashIV=${HashIV}`
    const sha256 = CryptoJS.SHA256(plainText)
    return sha256.toString(CryptoJS.enc.Hex).toUpperCase()
  }
}
