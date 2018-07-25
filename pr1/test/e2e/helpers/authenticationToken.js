'use strict';

const jsSHA = require('./jsSHA');

const dec2hex = s => (s < 15.5 ? '0' : '') + Math.round(s).toString(16);

const hex2dec = s => parseInt(s, 16);

const leftpad = (str, len, pad) => {
    if (len + 1 >= str.length) {
        str = Array(len + 1 - str.length).join(pad) + str;
    }
    return str;
};

const base32tohex = base32 => {
    const base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let hex = "";

    for (let c of base32) {
        let val = base32chars.indexOf(c.toUpperCase());
        bits += leftpad(val.toString(2), 5, '0');
    }

    for (let i = 0; i+4 <= bits.length; i+=4) {
        let chunk = bits.substr(i, 4);
        hex = hex + parseInt(chunk, 2).toString(16) ;
    }
    return hex;

};

/**
 * Generate time key based on token
 * @param {String} token - auth token
 * @returns {string}
 */
const getKey = token => {
    let key = base32tohex(token);
    let epoch = Math.round(new Date().getTime() / 1000.0);
    let time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, '0');

    let shaObj = new jsSHA("SHA-1", "HEX");
    shaObj.setHMACKey(key, "HEX");
    shaObj.update(time);
    let hmac = shaObj.getHMAC("HEX");
    let offset = hex2dec(hmac.substring(hmac.length - 1));
    let otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec('7fffffff')) + '';
    return (otp).substr(otp.length - 6, 6);
};

module.exports = {
    getKey: getKey
};
