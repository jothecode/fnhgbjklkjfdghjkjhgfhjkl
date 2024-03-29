console.log("Welcome to Linix Versoin Jonah");
const str = '\u00bd + \u00bc = \u00be';
const byteLength = Buffer.byteLength(str, 'utf8');
console.log(`${str}: ${str.length} characters, ${byteLength} bytes`);
const crypto = require('crypto');
const alice = crypto.getDiffieHellman('modp5');
const bob = crypto.getDiffieHellman('modp5');

alice.generateKeys();
bob.generateKeys();

const alice_secret = alice.computeSecret(
    bob.getPublicKey(), null, 'hex'
);
const bob_secret = bob.computeSecret(
    alice.getPublicKey(), null, 'hex'
);

// alice_secret and bob_secret should be the same
console.log(alice_secret == bob_secret);

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Linix booted sucsessfully')
});

app.listen(3000, () => {
  console.log('server started');
});