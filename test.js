fs = require('fs');
var caesar = require('./index')
,   shift = 3
,   plaintext = "T'as une tête de filet mignon, ça me donne envie de saler ta viande"
,   ciphertext = caesar.encrypt(shift, plaintext)
,   decrypted = caesar.decrypt(shift, ciphertext)

fs.writeFileSync('output.txt', ciphertext);
