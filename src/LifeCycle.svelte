<script lang="typescript">
    import { onMount } from 'svelte'
    import { getPhoto } from './service/api'
    import type { Photo } from './service/api'

    let photos: Photo[] = [];

    onMount(async () => {
        setTimeout(async () => {
            photos = await getPhoto();
        }, 1000);
    })
</script>

{#each photos as photo}
    <figure>
        <img src="{photo.thumbnailUrl}" alt={photo.title}/>
        <figcaption>{photo.title}</figcaption>
    </figure>
{:else}
    <p>loading....ddd.</p>
{/each}
