const Peer = require('simple-peer')

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

// navigator.mediaDevices
//   .getUserMedia({
//     video: true,
//     audio: true
//   })
//   .then()
//   .catch(() => {});

// function gotMedia(stream) {
//   const initiator = new SimplePeer({
//     initiator: true,
//     stream
//   });
//
//   const guest = new SimplePeer();
//
//   initiator.on("signal", (data) => {
//     console.log("initiator signal data", data);
//     guest.signal(data);
//   });
//
//   guest.on("signal", (data) => {
//     initiator.signal(data);
//   });
//
//   guest.on("stream", (stream) => {
//     console.log("guest stream", stream);
//
//     // got remote video stream, now let's show it in a video tag
//     const video = document.querySelector("video");
//
//     if ("srcObject" in video) {
//       video.srcObject = stream;
//     } else {
//       // for older browsers
//       video.src = window.URL.createObjectURL(stream);
//     }
//
//     video.play();
//   });
// }
