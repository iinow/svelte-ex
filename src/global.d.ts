declare module 'svelma' {
  import { SvelteComponent } from 'svelte'
  import {writable} from "svelte/store";

  export const Button: SvelteComponent
  export const Notification: NotificationInterface
  export const Collapse: SvelteComponent
  export const Dialog: SvelteComponent
  export const Field: SvelteComponent
  export const Icon: SvelteComponent
  export const Input: InputInterface
  export const Message: SvelteComponent
  export const Modal: SvelteComponent
  export const Progress: SvelteComponent
  export const Select: SvelteComponent;
  export const Snackbar: SvelteComponent;
  export const Switch: SvelteComponent;
  export const Tab: SvelteComponent;
  export const Tabs: SvelteComponent;
  export const Tag: SvelteComponent;
  export const Taglist: SvelteComponent;
  export const Toast: SvelteComponent;
  export const Tooltip: SvelteComponent;

  export interface NotificationInterface {
    create(props: string | { message: string, any? }): void
  }

  interface InputInterface {
    type: 'text'
    placeholder?: string
  }
}
