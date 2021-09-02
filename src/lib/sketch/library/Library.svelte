<script lang="ts">
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import Markup from '$lib/ui/Markup.svelte';
	import Message from '$lib/ui/Message.svelte';
	import FeltHeart from '$lib/ui/FeltHeart.svelte';
	import PendingAnimation from '$lib/ui/PendingAnimation.svelte';
	import Modal from '$lib/ui/Modal.svelte';
	import Portal from '$lib/ui/Portal.svelte';
	import PendingButton from '$lib/ui/PendingButton.svelte';
	import Icons from '$lib/ui/Icons.svelte';
	import * as iconsByName from '$lib/ui/icons';
	import {
		faceBlush,
		faceExpressionless,
		faceThink,
		faceWink,
		itemKey,
		ballotMark,
	} from '$lib/ui/icons';

	$: icons = Object.entries(iconsByName)
		.map(([name, icon]) => ({name, icon}))
		.sort((a, b) => a.name.localeCompare(b.name));

	interface Space {
		name: string;
		selected: boolean;
		disabled: boolean;
	}

	const faces = [faceBlush, faceExpressionless, faceThink, faceWink];

	const spaces: Space[] = [
		{name: 'a', selected: false, disabled: false},
		{name: 'b', selected: true, disabled: false},
		{name: 'c', selected: true, disabled: true},
		{name: 'd', selected: false, disabled: true},
	];
	const toggleSpaceSelected = (_space: Space, _selected: boolean): void => {
		// TODO ?
		// const index = spaces.findIndex((s) => s === space);
		// spaces[index].selected = selected;
	};

	let username: string = '';
	let password: string = '';
	let lifestory: string = '';
	let createdAccount = false;
	const createAccount = () => (createdAccount = true);
	const uncreateAccount = () => (createdAccount = false);
	let selectedButton = 1;
	let modalOpen = false;

	let portal1: HTMLElement;
	let portal2: HTMLElement;
	let swapPortal = true;

	type Color = 'pink' | 'orange' | 'red' | 'violet' | 'blue' | 'green' | 'brown';
	let colors: Color[] = ['pink', 'orange', 'red', 'violet', 'blue', 'green', 'brown'];
	const originalColors = colors.slice();
	$: mainColor = colors[0];
	const shiftColor = (color: Color): void => {
		const colorIndex = colors.indexOf(color);
		colors = colors.slice(colorIndex).concat(colors.slice(0, colorIndex));
	};
	$: cssColors = colors.map((color) => `var(--${color})`);
</script>

<!-- TODO don't lay out in a single column, use css grid probably -->
<div class="library column">
	<Markup>
		<h2><code>hr</code></h2>
	</Markup>

	<hr />

	<Markup>
		<h2><code>PendingAnimation</code></h2>
	</Markup>
	<PendingAnimation />
	<Markup>
		<h3><code>PendingAnimation</code> with <code>paused={'{'}true{'}'}</code></h3>
	</Markup>
	<PendingAnimation paused={true} />
	<Markup>
		<h3><code>PendingAnimation</code> with slot <code>🐢</code></h3>
	</Markup>
	<PendingAnimation>🐢</PendingAnimation>
	<Markup>
		<h3>
			<code>PendingAnimation</code> with <code>paused={'{'}true{'}'}</code> and slot
			<code>{'<span style="font-size: var(--font_size_xl5)">🐸</span>⏳'}</code>
		</h3>
	</Markup>
	<PendingAnimation paused={true}>
		<span style="font-size: var(--font_size_xl5)">🐸</span>⏳
	</PendingAnimation>
	<Markup>
		<h3>
			<code>PendingButton</code> with <code>pending={'{'}false{'}'}</code>
			and <code>pending={'{'}true{'}'}</code>
		</h3>
	</Markup>
	<PendingButton pending={false}>pending button</PendingButton>
	<PendingButton pending={true}>pending button</PendingButton>

	<hr />

	<Markup>
		<h2>
			<code>form</code> <code>input</code> <code>textarea</code> <code>select</code>
			<code>button</code>
		</h2>
		<form>
			<input bind:value={username} disabled={createdAccount} placeholder="username" />
			<input
				type="password"
				bind:value={password}
				disabled={createdAccount}
				placeholder="password"
			/>
			<textarea bind:value={lifestory} disabled={createdAccount} placeholder="life story" />
			<select style="font-size: var(--font_size_xl5)" disabled={createdAccount}>
				{#each faces as face (face)}
					<option value={face}>{face}</option>
				{/each}
			</select>
			<button type="button" disabled={createdAccount} on:click={() => createAccount()}>
				create account
			</button>
		</form>
		{#if createdAccount}
			<Message status="error">cannot create account because this library is fake</Message>
			<button type="button" on:click={() => uncreateAccount()}> undo </button>
		{/if}
	</Markup>

	<hr />

	<Markup>
		<h2>
			<code>button</code> with css class <code>.selected</code>
		</h2>
		<nav>
			<button class:selected={selectedButton === 0} on:click={() => (selectedButton = 0)}>
				button 0
			</button>
			<button class:selected={selectedButton === 1} on:click={() => (selectedButton = 1)}>
				button 1
			</button>
			<button class:selected={selectedButton === 2} on:click={() => (selectedButton = 2)}>
				button 2
			</button>
		</nav>
	</Markup>

	<hr />

	<Markup>
		<h2>
			<code>Modal</code>
		</h2>
	</Markup>
	<button on:click={() => (modalOpen = true)}>open modal</button>
	{#if modalOpen}
		<Modal on:close={() => (modalOpen = false)}>
			<Markup>
				<h1>attention</h1>
				<p>this is a modal</p>
				<button on:click={() => (modalOpen = false)}>k</button>
			</Markup>
		</Modal>
	{/if}

	<hr />

	<Markup>
		<h2>
			<code>Portal</code>
		</h2>
		<p>
			The<code>Modal</code> uses the <code>Portal</code> to mount itself to a top-level DOM element,
			instead of the location that the <code>Modal</code> component appears in code, solving various
			issues. The <code>Portal</code> can be used to relocate other elements too, in the rare cases that's
			useful.
		</p>
	</Markup>
	<Portal to={swapPortal ? portal1 : portal2}>🐰</Portal>
	<div class="portals">
		<div bind:this={portal1} />
		<div bind:this={portal2} />
	</div>
	<button on:click={() => (swapPortal = !swapPortal)}>teleport the rabbit</button>

	<hr />

	<Markup>
		<h2><code>Checkbox</code></h2>
	</Markup>
	<div>
		{#each spaces as space (space.name)}
			<Checkbox
				checked={space.selected}
				onChange={(checked) => toggleSpaceSelected(space, checked)}
				disabled={space.disabled}
			>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<Markup>
		<h2><code>Checkbox</code> with <code>content={'{'}ballotMark{'}'}</code></h2>
	</Markup>
	<div>
		{#each spaces as space (space.name)}
			<Checkbox
				checked={space.selected}
				onChange={(checked) => toggleSpaceSelected(space, checked)}
				content={ballotMark}
				disabled={space.disabled}
			>
				{space.name}
			</Checkbox>
		{/each}
	</div>

	<hr />

	<Markup>
		<h2><code>Message</code></h2>
		<Message>:-)</Message>
		<h3><code>Message</code> with <code>icon={'{'}faceExpressionless{'}'}</code></h3>
		<Message icon={faceExpressionless}>cool and relevant info</Message>
		<h3><code>Message</code> with <code>status="error"</code></h3>
		<Message status="error">bad things went wrong</Message>
		<h3>
			<code>Message</code> with <code>status="error"</code>and
			<code>icon={'{'}faceBlush{'}'}</code>
		</h3>
		<Message status="error" icon={faceBlush}>remain calm it's only on fire</Message>
		<h3><code>Message</code> with <code>status="help"</code></h3>
		<Message status="help">here's how to fix it</Message>
		<h3>
			<code>Message</code> with <code>status="help"</code>and <code>icon={'{'}itemKey{'}'}</code>
		</h3>
		<Message status="help" icon={itemKey}>here take this</Message>
	</Markup>

	<hr />

	<Markup>
		<h2>typography</h2>
	</Markup>
	<div class="typography" style="--color: var(--{mainColor});">
		<div class="palette">
			{#each originalColors as color (color)}
				<button
					class:selected={mainColor === color}
					on:click={() => shiftColor(color)}
					on:mouseenter={() => shiftColor(color)}
					style="color: var(--{color});">█</button
				>
			{/each}
		</div>
		<Markup>
			<h1 style="color: {cssColors[1]}">h1</h1>
			<h2 style="color: {cssColors[2]}">h2</h2>
			<h3 style="color: {cssColors[3]}">h3</h3>
			<h4 style="color: {cssColors[4]}">h4</h4>
			<h5 style="color: {cssColors[5]}">h5</h5>
			<h6 style="color: {cssColors[6]}">h6</h6>
			<p style="font-size: var(--font_size_xs); color: {cssColors[0]}">--font_size_xs: 0.989rem;</p>
			<p style="font-size: var(--font_size_sm); color: {cssColors[0]}">--font_size_sm: 1.258rem;</p>
			<p style="font-size: var(--font_size_md); color: {cssColors[0]}">--font_size_md: 1.6rem;</p>
			<p style="font-size: var(--font_size_lg); color: {cssColors[0]}">--font_size_lg: 2.035rem;</p>
			<p style="font-size: var(--font_size_xl); color: {cssColors[0]}">--font_size_xl: 2.589rem;</p>
			<p style="font-size: var(--font_size_xl2); color: {cssColors[0]}">
				--font_size_xl2: 3.293rem;
			</p>
			<p style="font-size: var(--font_size_xl3); color: {cssColors[0]}">
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
				{#each originalColors.slice().reverse() as color (color)}
					<div
						class:selected={mainColor === color}
						on:click={() => shiftColor(color)}
						on:mouseenter={() => shiftColor(color)}
						style="background-color: var(--{color});"
					/>
				{/each}
			</div>
			<div class="main-color">{mainColor}</div>
			<p class="xl-font-sizes">
				<span style="font-size: var(--font_size_xl4); color: {cssColors[0]}"> xl4 </span>
				<span style="font-size: var(--font_size_xl5); color: {cssColors[0]}"> xl5 </span>
				<span style="font-size: var(--font_size_xl6); color: {cssColors[0]}"> xl6 </span>
				<span style="font-size: var(--font_size_xl7); color: {cssColors[0]}"> xl7 </span>
				<span style="font-size: var(--font_size_xl8); color: {cssColors[0]}"> xl8 </span>
				<span style="font-size: var(--font_size_xl9); color: {cssColors[0]}"> xl9 </span>
			</p>
		</Markup>
	</div>

	<hr />

	<Markup>
		<h2><code>Icons</code></h2>
		<h3>
			<code>{'<'}div{'>'}</code>s with width and height set to
			<code>icon_size_xs</code>, <code>icon_size_sm</code>,
			<code>icon_size_md</code>, <code>icon_size_lg</code>, <code>icon_size_xl</code>,
			<code>icon_size_xl2</code>, <code>icon_size_xl3</code>, & the max <code>icon_size_xl4</code>
			aka <code>icon_size_max</code> -- these are insensitive to browser font size, using
			<code>px</code> not <code>rem</code>
		</h3>
		<blockquote>
			these docs are currently lacking, so we suggest browser dev tools to improve the experience
		</blockquote>
		<div class="icon-sizes">
			<div style="--size: var(--icon_size_xs);">🐢</div>
			<div style="--size: var(--icon_size_sm);">🐢</div>
			<div style="--size: var(--icon_size_md);">🐢</div>
			<div style="--size: var(--icon_size_lg);">🐢</div>
			<div style="--size: var(--icon_size_xl);">🐢</div>
			<div style="--size: var(--icon_size_xl2);">🐢</div>
			<div style="--size: var(--icon_size_xl3);">🐢</div>
			<div style="--size: var(--icon_size_xl4);">🐢</div>
		</div>
	</Markup>

	<hr />

	<Icons {icons} />

	<hr />

	<Markup>
		<h2><code>FeltHeart</code></h2>
	</Markup>
	<FeltHeart />
</div>

<style>
	.typography {
		display: flex;
	}
	hr {
		margin: var(--spacing_xl5) 0;
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
	.icon-sizes {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.icon-sizes > div {
		width: var(--size);
		height: var(--size);
		border: var(--border);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.xl-font-sizes {
		text-align: center;
	}
	.portals {
		display: flex;
	}
	.portals > div {
		width: var(--spacing_xl8);
		height: var(--spacing_xl8);
		border: var(--border);
		font-size: var(--font_size_xl3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
