<script lang="ts">
	export let icon: string = '•';
	export let paused: boolean = false;
</script>

<span class:paused class="one">{icon}</span>
<span class:paused class="two">{icon}</span>
<span class:paused class="three">{icon}</span>

<style>
	span {
		opacity: 0;
		animation: dot 1.5s infinite;
	}
	.paused {
		animation: none;
		opacity: 1;
	}

	.one {
		animation-delay: 0s;
	}
	.two {
		animation-delay: 0.2s;
	}
	.three {
		animation-delay: 0.3s;
	}

	@keyframes dot {
		0% {
			opacity: 0;
		}
		33% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
