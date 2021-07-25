<script lang="ts">
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import Markup from '$lib/ui/Markup.svelte';
	import Message from '$lib/ui/Message.svelte';
	import Felt_Heart from '$lib/ui/Felt_Heart.svelte';
	import Pending_Animation from '$lib/ui/Pending_Animation.svelte';
	import Icons from '$lib/ui/Icons.svelte';

	import * as icons_by_name from '$lib/ui/icons';

	$: icons = Object.entries(icons_by_name)
		.map(([name, icon]) => ({name, icon}))
		.sort((a, b) => a.name.localeCompare(b.name));

	interface Space {
		name: string;
		selected: boolean;
	}

	const spaces: Space[] = [
		{name: 'a', selected: false},
		{name: 'b', selected: true},
		{name: 'c', selected: true},
		{name: 'd', selected: false},
	];
	const toggle_space_selected = (space: Space, selected: boolean): void => {
		// const index = spaces.findIndex((s) => s === space);
		// spaces[index].selected = selected;
		console.log('TODO toggle', space, selected);
	};

	let username: string = '';
	let password: string = '';
	let lifestory: string = '';
	const create_account = () => alert('sir or madam this is a library');
</script>

<!-- TODO don't lay out in a single column, use css grid probably -->
<div class="library column">
	<Markup>
		<h2><code>Felt_Heart</code></h2>
	</Markup>
	<Felt_Heart />

	<Markup>
		<h2><code>Pending_Animation</code></h2>
	</Markup>
	<Pending_Animation />
	<h3><code>Pending_Animation</code> with <code>paused={'{'}true{'}'}</code></h3>
	<Pending_Animation paused={true} />
	<h3><code>Pending_Animation</code> with <code>icon="🐢"</code></h3>
	<Pending_Animation icon="🐢" />
	<h3>
		<code>Pending_Animation</code> with <code>paused={'{'}true{'}'}</code> and
		<code>icon="⏳"</code>
	</h3>
	<Pending_Animation paused={true} icon="⏳" />

	<Markup>
		<h2><code>Checkbox</code></h2>
	</Markup>
	<div>
		{#each spaces as space (space.name)}
			<Checkbox
				checked={space.selected}
				on_change={(checked) => toggle_space_selected(space, checked)}
			>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<Markup>
		<h2><code>Checkbox</code> with <code>content="'✗'"</code></h2>
	</Markup>
	<div>
		{#each spaces as space (space.name)}
			<Checkbox
				checked={space.selected}
				on_change={(checked) => toggle_space_selected(space, checked)}
				content="'✗'"
			>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<Markup>
		<h2><code>form</code> <code>input</code> <code>textarea</code> <code>button</code></h2>
	</Markup>
	<Markup>
		<form>
			<input bind:value={username} placeholder="username" />
			<input type="password" bind:value={password} placeholder="password" />
			<textarea bind:value={lifestory} placeholder="life story" />
			<button type="button" on:click={() => create_account()}> create account </button>
		</form>
	</Markup>

	<Markup>
		<h2><code>Message</code></h2>
	</Markup>
	<Markup>
		<Message text=":-)" />
		<Message text="cool and relevant info" icon="ⓘ" />
		<h3><code>Message</code> with <code>status="error"</code></h3>
		<Message status="error" text="bad things went wrong" />
		<h3><code>Message</code> with <code>status="error"</code>and <code>icon="😊"</code></h3>
		<Message status="error" text="stay calm nothing is on fire" icon="😊" />
		<h3><code>Message</code> with <code>status="help"</code></h3>
		<Message status="help" text="here's how to fix it" />
		<h3><code>Message</code> with <code>status="help"</code>and <code>icon="🔑"</code></h3>
		<Message status="help" text="here take this" icon="🔑" />
	</Markup>

	<Markup>
		<h2><code>Icons</code></h2>
	</Markup>
	<Icons {icons} />
</div>
