import CryptoJS from 'crypto-js'

const HashKey = 'DEOViIHoxZRzElSe9p14KFa8k4vx7Tfv'
const HashIV = 'nIxiaIldrOFR4JPe'
// key iv 轉成 128 bit CryptoJs.enc.Utf8.parse(key)

const key = CryptoJS.enc.Utf8.parse(HashKey)
const iv = CryptoJS.enc.Utf8.parse(HashIV)

function getChain (data) {
  const results = []
  for (let KeyAndValue of Object.entries(data)) {
    results.push(`${KeyAndValue[0]}=${KeyAndValue[1]}`)
  }
  return results.join('&')
}

function Encrypt (data) {
  const srcs = CryptoJS.enc.Utf8.parse(data)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv })
  return encrypted.ciphertext.toString()
}

function Decrypt (data) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv : iv })
  return decrypt.toString(CryptoJS.enc.Utf8)
}

function ShaEncrypt (data) {
  const plainText = `HashKey=${HashKey}&${data}&HashIV=${HashIV}`
  console.log(plainText)
  const sha256 = CryptoJS.SHA256(plainText)
  return sha256.toString(CryptoJS.enc.Hex).toUpperCase()
}
