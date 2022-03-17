require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain pumpkin harvest nation flush gas'; 
let testAccounts = [
"0x5c6fa4f2630bb74664cb06ea8c0c73fd74e64f250e2f1608c3cb4b545fb18677",
"0xac30c2d193113f43874c06f4bf08815d15c71bd9d9b37b7d675042fb2be369fc",
"0x9e1812688dd4c46b1313366acf3c26f234dd060b26afa8b2896a2159df188937",
"0xd3f7879141394055c40f2cba04f231e83efdf1d42f8607c73a7b7afd16a08d0e",
"0xaddb84369a8d357399019a3c95bd6f778a0993f99a254dbcac84edee628d4942",
"0x54c650cd4fa7e8041e278509c8657b6864cf668b37dcff5752d00e1da68bfee2",
"0x52bef2530113e857d928f1ca8ed4ab7c6a3b396899768a1837cc6fe5c4b07781",
"0xff567244d7430b1a3a4b8f1807dbc0792f49ae7d11e22140e17dec7bb6af3cc8",
"0x5c67a2369abd0a5f2687de784fd62a0e088878ed15e87b316488da6f9d8cd229",
"0x220a03423d2a37a72d34f4d5349c4252a374397afabe9e38aa0c18544c211117"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


