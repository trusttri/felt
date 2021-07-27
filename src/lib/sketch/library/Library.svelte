<script lang="ts">
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import Markup from '$lib/ui/Markup.svelte';
	import Message from '$lib/ui/Message.svelte';
	import Felt_Heart from '$lib/ui/Felt_Heart.svelte';
	import Pending_Animation from '$lib/ui/Pending_Animation.svelte';
	import Icons from '$lib/ui/Icons.svelte';
	import * as icons_by_name from '$lib/ui/icons';
	import {
		face_blush,
		face_expressionless,
		face_think,
		face_wink,
		item_key,
		ballot_mark,
	} from '$lib/ui/icons';

	$: icons = Object.entries(icons_by_name)
		.map(([name, icon]) => ({name, icon}))
		.sort((a, b) => a.name.localeCompare(b.name));

	interface Space {
		name: string;
		selected: boolean;
		disabled: boolean;
	}

	const faces = [face_blush, face_expressionless, face_think, face_wink];

	const spaces: Space[] = [
		{name: 'a', selected: false, disabled: false},
		{name: 'b', selected: true, disabled: false},
		{name: 'c', selected: true, disabled: true},
		{name: 'd', selected: false, disabled: true},
	];
	const toggle_space_selected = (_space: Space, _selected: boolean): void => {
		// TODO ?
		// const index = spaces.findIndex((s) => s === space);
		// spaces[index].selected = selected;
	};

	let username: string = '';
	let password: string = '';
	let lifestory: string = '';
	let created_account = false;
	const create_account = () => (created_account = !created_account);

	type Color = 'pink' | 'orange' | 'red' | 'violet' | 'blue' | 'green' | 'brown';
	let colors: Color[] = ['pink', 'orange', 'red', 'violet', 'blue', 'green', 'brown'];
	const original_colors = colors.slice();
	$: main_color = colors[0];
	const shift_color = (color: Color): void => {
		const color_index = colors.indexOf(color);
		colors = colors.slice(color_index).concat(colors.slice(0, color_index));
	};
	$: css_colors = colors.map((color) => `var(--${color})`);
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
	<h3><code>Pending_Animation</code> with slot <code>🐢</code></h3>
	<Pending_Animation>🐢</Pending_Animation>
	<h3>
		<code>Pending_Animation</code> with <code>paused={'{'}true{'}'}</code> and slot <code>⏳</code>
	</h3>
	<Pending_Animation paused={true}>⏳</Pending_Animation>

	<Markup>
		<h2><code>hr</code></h2>
	</Markup>
	<hr />

	<Markup>
		<h2><code>Checkbox</code></h2>
	</Markup>
	<div>
		{#each spaces as space (space.name)}
			<Checkbox
				checked={space.selected}
				on_change={(checked) => toggle_space_selected(space, checked)}
				disabled={space.disabled}
			>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<Markup>
		<h2><code>Checkbox</code> with <code>content={'{'}ballot_mark{'}'}</code></h2>
	</Markup>
	<div>
		{#each spaces as space (space.name)}
			<Checkbox
				checked={space.selected}
				on_change={(checked) => toggle_space_selected(space, checked)}
				content={ballot_mark}
				disabled={space.disabled}
			>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<Markup>
		<h2>
			<code>form</code> <code>input</code> <code>textarea</code> <code>select</code>
			<code>button</code>
		</h2>
	</Markup>
	<Markup>
		<form>
			<input bind:value={username} disabled={created_account} placeholder="username" />
			<input
				type="password"
				bind:value={password}
				disabled={created_account}
				placeholder="password"
			/>
			<textarea bind:value={lifestory} disabled={created_account} placeholder="life story" />
			<select disabled={created_account}>
				{#each faces as face (face)}
					<option value={face}>{face}</option>
				{/each}
			</select>
			<button type="button" disabled={created_account} on:click={() => create_account()}>
				create account
			</button>
		</form>
		{#if created_account}
			<Message status="error">cannot create account because the library is fake</Message>
		{/if}
	</Markup>

	<Markup>
		<h2><code>Message</code></h2>
	</Markup>
	<Markup>
		<Message>:-)</Message>
		<h3><code>Message</code> with <code>icon={'{'}face_expressionless{'}'}</code></h3>
		<Message icon={face_expressionless}>cool and relevant info</Message>
		<h3><code>Message</code> with <code>status="error"</code></h3>
		<Message status="error">bad things went wrong</Message>
		<h3>
			<code>Message</code> with <code>status="error"</code>and
			<code>icon={'{'}face_blush{'}'}</code>
		</h3>
		<Message status="error" icon={face_blush}>remain calm it's only on fire</Message>
		<h3><code>Message</code> with <code>status="help"</code></h3>
		<Message status="help">here's how to fix it</Message>
		<h3>
			<code>Message</code> with <code>status="help"</code>and <code>icon={'{'}item_key{'}'}</code>
		</h3>
		<Message status="help" icon={item_key}>here take this</Message>
	</Markup>

	<Markup>
		<h2>typography</h2>
	</Markup>
	<div class="typography" style="--color: var(--{main_color});">
		<div class="palette">
			{#each original_colors as color (color)}
				<button
					class:selected={main_color === color}
					on:click={() => shift_color(color)}
					on:mouseenter={() => shift_color(color)}
					style="color: var(--{color});">█</button
				>
			{/each}
		</div>
		<Markup>
			<h1 style="color: {css_colors[0]}">h1</h1>
			<h2 style="color: {css_colors[1]}">h2</h2>
			<h3 style="color: {css_colors[2]}">h3</h3>
			<h4 style="color: {css_colors[3]}">h4</h4>
			<h5 style="color: {css_colors[4]}">h5</h5>
			<h6 style="color: {css_colors[5]}">h6</h6>
			<p style="font-size: var(--font_size_xs); color: {css_colors[6]}">
				--font_size_xs: 0.989rem;
			</p>
			<p style="font-size: var(--font_size_sm); color: {css_colors[6]}">
				--font_size_sm: 1.258rem;
			</p>
			<p style="font-size: var(--font_size_md); color: {css_colors[6]}">--font_size_md: 1.6rem;</p>
			<p style="font-size: var(--font_size_lg); color: {css_colors[6]}">
				--font_size_lg: 2.035rem;
			</p>
			<p style="font-size: var(--font_size_xl); color: {css_colors[6]}">
				--font_size_xl: 2.589rem;
			</p>
			<p style="font-size: var(--font_size_xl2); color: {css_colors[6]}">
				--font_size_xl2: 3.293rem;
			</p>
			<p style="font-size: var(--font_size_xl3); color: {css_colors[6]}">
				--font_size_xl3: 4.189rem;
			</p>
			<!-- <p style="font-size: var(--font_size_xl4);">--font_size_xl4: 5.328rem;</p>
		<p style="font-size: var(--font_size_xl5);">--font_size_xl5: 6.778rem;</p>
		<p style="font-size: var(--font_size_xl6);">--font_size_xl6: 8.621rem;</p>
		<p style="font-size: var(--font_size_xl7);">--font_size_xl7: 10.967rem;</p>
		<p style="font-size: var(--font_size_xl8);">--font_size_xl8: 13.95rem;</p>
		<p style="font-size: var(--font_size_xl9); font-weight: var(--font_weight_1)">
			--font_size_xl9: 17.744rem; --font_weight_1: 100;
		</p> -->
			<div class="scape">
				{#each original_colors.slice().reverse() as color (color)}
					<div
						class:selected={main_color === color}
						on:click={() => shift_color(color)}
						on:mouseenter={() => shift_color(color)}
						style="background-color: var(--{color});"
					/>
				{/each}
			</div>
			<div class="main-color">{main_color}</div>
		</Markup>
	</div>

	<Markup>
		<h2><code>Icons</code></h2>
	</Markup>
	<Icons {icons} />
</div>

<style>
	.typography {
		display: flex;
	}
	.palette {
		display: flex;
		flex-direction: column;
	}
	.palette button {
		font-size: var(--font_size_xl4);
	}
	.scape {
		display: flex;
	}
	.scape > div {
		flex: 1;
		height: var(--spacing_xl4);
		border-width: 0 var(--border_width_6) var(--border_width_6) 0;
		border-style: var(--border_style_1);
		border-color: var(--text_color);
	}
	.scape > div:last-child {
		border-right-width: 0;
	}
	.scape > .selected {
		border-bottom-width: 0;
	}
	.main-color {
		padding: var(--spacing_lg);
		background-color: var(--color);
		color: var(--bg);
		font-size: var(--font_size_xl6);
		font-weight: var(--font_weight_4);
	}
</style>
