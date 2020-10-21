import CryptoJS from 'crypto-js'

const HashKey = 'kFb6sccqjmALimU18pVkEslFTk3W1AEe'
const HashIV = 'Cz2NkRd0JxE7uVbP'
// key iv 轉成 128 bit CryptoJs.enc.Utf8.parse(key)

const key = CryptoJS.enc.Utf8.parse(HashKey)
const iv = CryptoJS.enc.Utf8.parse(HashIV)

export default {
  getPayData(totalPrice, email) {
    const payData = {
      MerchantID: 'MS315846711',
      Version: 1.5,
      RespondType: 'JSON',
      TimeStamp: Date.now(),
      MerchantOrderNo: Date.now(),
      Amt: '',
      ItemDesc: 'Stop waiting 餐廳訂位網',
      Email: '',
      LoginType: 0,
      NotifyURL: 'https://600e14d3ef89.ngrok.io/api/newebpay/callback?from=NotifyURL',
      ReturnURL: 'https://600e14d3ef89.ngrok.io/api/newebpay/callback?from=ReturnURL',
      ClientBackURL: 'https://marcho001.github.io/reservations-front-end-vue/#/member/orders'
    }
    payData['Amt'] = totalPrice
    payData['Email'] = email
    return payData
  },
  getChain(data) {
    const results = []
    for (let KeyAndValue of Object.entries(data)) {
      results.push(`${KeyAndValue[0]}=${KeyAndValue[1]}`)
    }
    return results.join('&')
  },
  Encrypt(data) {
    const srcs = CryptoJS.enc.Utf8.parse(data)
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv })
    return encrypted.ciphertext.toString()
  },
  Decrypt(data) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv })
    return decrypt.toString(CryptoJS.enc.Utf8)
  },
  ShaEncrypt(data) {
    const plainText = `HashKey=${HashKey}&${data}&HashIV=${HashIV}`
    const sha256 = CryptoJS.SHA256(plainText)
    return sha256.toString(CryptoJS.enc.Hex).toUpperCase()
  }
}
