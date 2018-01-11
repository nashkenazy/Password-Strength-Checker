const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
    uri: 'mongodb://deadpools:<idontknow>@ds249787.mlab.com:49787/password-checker', // Databse URI and database name
    secret: crypto, // Cryto-created secret
    db: 'MEAN-project' // Database name
}
