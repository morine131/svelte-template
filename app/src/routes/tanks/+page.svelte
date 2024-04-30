<script>
	export let data;
</script>

<ul>
	{#each data.tanks as tank}
		<li>{tank.name}</li>
	{/each}
</ul>

<form method="POST">
	<label>
		add a tank:
		<input name="name" autocomplete="off" />
	</label>
</form>
