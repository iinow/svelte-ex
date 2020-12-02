<script lang="ts">
  import { gql } from 'apollo-boost'
  import { getClient, query } from 'svelte-apollo'

  export let datas: Response[] = []

  const DATA = gql`
  {
    messages {
      text,
      updatedAt,
      createAt
    }
  }
  `
  const client = getClient();
  client.query({ query: DATA })
  .then(dd => {
    datas = dd.data.messages as Response[]
  })

  interface Response {
    text: string
    updatedAt: Date
    createAt: Date
  }
</script>

<h1>About page...</h1>
{#each datas as message}
  <div>
    {message.text}
  </div>
{/each}
