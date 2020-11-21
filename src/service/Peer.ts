import Peer from 'simple-peer'

export let peer = new Peer({
  initiator: location.hash === '#',
  trickle: false
})

export default peer;
