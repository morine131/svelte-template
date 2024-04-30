<script>
	export let data;
</script>

<ul>
	{#each data.tanks as tank}
		<li>
			{tank.name}
			<button
				on:click={() => {
					fetch(`/tanks/${tank.id}`, { method: 'DELETE' });
					const newTanks = data.tanks.filter((tnk) => tnk.id !== tank.id);
					data = { ...data, tanks: newTanks };
				}}>delete</button
			>
		</li>
	{/each}
</ul>

<form method="POST">
	<label>
		add a tank:
		<input name="name" autocomplete="off" />
	</label>
</form>
