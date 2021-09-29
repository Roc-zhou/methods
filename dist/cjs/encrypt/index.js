"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._decrypt = exports._encrypt = void 0;
function _encrypt(key, iv, data) {
    var cipher = require('crypto').createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    return crypted += cipher.final('binary'), crypted = Buffer.from(crypted, 'binary').toString('base64'), crypted;
}
exports._encrypt = _encrypt;
function _decrypt(key, iv, crypted) {
    crypted = Buffer.from(crypted, 'base64').toString('binary');
    var decipher = require('crypto').createDecipheriv('aes-128-cbc', key, iv);
    var decoded = decipher.update(crypted, 'binary', 'utf8');
    return decoded += decipher.final('utf8'), decoded;
}
exports._decrypt = _decrypt;
