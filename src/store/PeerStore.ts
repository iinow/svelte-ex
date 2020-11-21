import { writable } from 'svelte/store'
// import { Peer } from 'simple-peer'

// const peer = new Peer({
//   initiator: location.hash === '#',
//   trickle: false
// })

function createPeer() {
  const { subscribe, update, set } = writable({});

  return {
    subscribe,
    init: (obj: any) => set(obj),
    start
  }
}

const newPeer = createPeer();

function start() {
  // peer.on('signal', data => newPeer.init(data))
}

let peer1 = new Peer({
  initiator: true,
})

let peer2 = new Peer()

peer1.on('signal', data => {
  peer2.signal(data);
})

peer2.on('signal', data => {
  peer1.signal(data);
})

peer1.on('connect', () => {
  peer1.send('hey peer2, how is it going?')
})

peer2.on('data', data => {
  console.log('got a message from peer1: ' + data)
})

export default newPeer;
