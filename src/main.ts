import Root from './Root.svelte'
import adapter from 'webrtc-adapter'

adapter.disableLog(true)

const app = new Root({
	target: document.body
});

export default app;
