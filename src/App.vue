<script setup>
import HelloWorld from './components/HelloWorld.vue'

import { AuthenticatedAlephHttpClient } from '@aleph-sdk/client';
import { importAccountFromPrivateKey } from '@aleph-sdk/ethereum';

// Importing any method from '@aleph-sdk/ethereum' throws an error
const account = importAccountFromPrivateKey("61308da48bee9ab58702d805136e7d16de3e6769b7185cfc425ef66f427598ca");

const client = new AuthenticatedAlephHttpClient(account);
const message = await client.createAggregate({
  key: "profile",
  content: {"bio": "tester", "name": "Moshe on Ethereum"},
});

console.log(message.content);

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
