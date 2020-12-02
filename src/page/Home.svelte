<script lang="ts">
  import { Button, Notification, Input } from 'svelma'

  function showNotification(props) {
    Notification.create({
      message: '야호...',
      ...props
    })
  }
  let obj = {
    name: 'adsf'
  }

  // navigator.clipboard.readText();
</script>
<Button class="block" on:click={() => showNotification()}>Show Notification</Button>
<Input ></Input>
<!--{@debug obj}-->
<h1>Home page...</h1>
