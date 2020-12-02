<script lang="ts">
  import {from, throwError} from 'rxjs'
  import {catchError} from "rxjs/operators";
  import { ipcRenderer } from 'electron/renderer'

  let id;
  let otherId;
  let videoStream = 99;

  function connect() {
    console.log(id, otherId)
  }

  from(navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  }))
    .pipe(
      catchError((err) => {
        return throwError(err)
      })
    )
    .subscribe(stream => {
      // videoStream = stream;
      let video = document.querySelector('video');
      video.srcObject = stream;
      video.onloadedmetadata = () => video.play()
      // let audio = document.querySelector('audio');
      // audio.srcObject = stream;
      // audio.onloadedmetadata = () => audio.play();
      // audio.muted = false;
    })
  const rtcPeerConnection = new RTCPeerConnection({

  });


</script>

<h2>
  Chat Message Room, {videoStream}
</h2>
<video></video>
<label>Your ID:</label><br/>
<textarea bind:value={id}></textarea><br/>
<label>Other ID:</label><br/>
<textarea bind:value={otherId}></textarea><br/>
<button on:click={connect}>connect</button>
