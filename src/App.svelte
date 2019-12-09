<script>
	import {getMain} from "./store"; 
	const store = getMain();
</script>

<main>

 <div id="app">
    <h1>Hello {$store.name}</h1>
    <input
      value={$store.name}
      on:input={ e => $store.commands.setName(e.target.value)}
    />
    <p>{$store.name.length}</p>
    <p>{$store.count}</p><button on:click={$store.commands.add}>My button</button>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>