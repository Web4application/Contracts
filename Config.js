import UniversalProvider from '@walletconnect/universal-provider'

//  Initialize the provider
const provider = await UniversalProvider.init({
  projectId: '0271de3ff9471b2d5f64c6ff72bab0e7',
  metadata: {
    name: 'web4 app',
    description: 'React App for WalletConnect',
    url: 'https://walletconnect.com/',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  client: undefined // optional instance of @walletconnect/sign-client
})

//  create sub providers for each namespace/chain
await provider.connect({
  optionalNamespaces: {
    eip155: {
      methods: [
        'eth_sendTransaction',
        'eth_signTransaction',
        'eth_sign',
        'personal_sign',
        'eth_signTypedData'
      ],
      chains: ['eip155:80001'],
      events: ['chainChanged', 'accountsChanged'],
      rpcMap: {
        80001:
          'https://rpc.walletconnect.com?chainId=eip155:80001&projectId=<0271de3ff9471b2d5f64c6ff72bab0e7>'
      }
    }
  },
  pairingTopic: '<123...topic>', // optional topic to connect to
  skipPairing: false // optional to skip pairing ( later it can be resumed by invoking .pair())
})