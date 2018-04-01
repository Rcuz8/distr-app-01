module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 33287322,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4",
      from: '0xC90743068C0382A500526C8f09AdabD8E987e2CB',
      gas: 6000000,
      gasPrice: 21000000000
    },
  }
};
