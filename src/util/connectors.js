import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

export let uport = new Connect('ReactUportTruffle', {
      clientId: '2opoF1uYva5KXXNkuKg6DpLNjQavogN2sDC',
      network: 'rinkeby',
      signer: SimpleSigner('fdcf9d5e9503a1fee2d9e8d03a257118ba69710be7933c22ff269f6269937397')
    })

export const web3 = uport.getWeb3()
