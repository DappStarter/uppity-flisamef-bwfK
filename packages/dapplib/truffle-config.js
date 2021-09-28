require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rebel random common gesture hen flower gauge'; 
let testAccounts = [
"0x529c2482524d6a5324072e705639e3c91a5a2a2dbb177bae7c471b6ec8e463eb",
"0x6e79cf91e6f7372d0e48ee6efa76c0b37df1582bb698f943928b0cf957bfdbc9",
"0xb90f9a849ed01c2565337212b4ec271c37ea0c11cb92a7e3a28719c6af5d033c",
"0xcaa910c8ef7af63393e42ceb503dbea549ffcd78e9a530decde8d2cd642459cb",
"0xbeeedf43d11f426a44e53b550ff41a5dc02209d6359a3d28f2b80ef3dd7301a1",
"0x1fbd54b16cf1f44201fdbfeaf2c64139a29945bde038b2e6d7ff17ca64815422",
"0xa56ab3c7c4a11046835ea6608cfc7a24606b657106d1c779082e47da0667a4f3",
"0xddc7e08dd66e8eda873b0f8c02ec171a1b1ec9187a0a4e67cb724b7d0da3145c",
"0xa17f3b10bc5c2ef524479366211e2e660be645d5216ddd2baad0e8656de734be",
"0x85353a906a7b6c83a36194d58954c4edd0a12a5da2dbe4462fc3107eea860740"
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


