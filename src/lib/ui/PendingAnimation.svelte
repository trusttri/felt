<script lang="ts">
	import {bulletPoint} from '$lib/ui/icons';

	export let paused: boolean = false;
</script>

<span class:paused style="animation-delay: 0s"><slot>{bulletPoint}</slot></span>
<span class:paused style="animation-delay: 0.09s"><slot>{bulletPoint}</slot></span>
<span class:paused style="animation-delay: 0.3s"><slot>{bulletPoint}</slot></span>

<style>
	span {
		opacity: 0;
		animation: dot 1.5s infinite;
		/* TODO ? */
		/* --scale_x: 1.1;
		--scale_y: 1.1;
		--scale_z: 1.1;
		transform: scale3d(3.1, 3.1, 3.1); */
	}
	.paused {
		/* show the default full-opacity state instead of pausing mid-animation */
		animation: none;
		opacity: 1;
		/* transform: scale3d(1, 1, 1); */
	}
	@keyframes dot {
		0% {
			opacity: 0;
			/* transform: scale3d(1, 1, 1); */
		}
		38% {
			opacity: 1;
			/* transform: scale3d(1.1, 1.1, 1.1); */
		}
		62% {
			opacity: 1;
			/* transform: scale3d(1.1, 1.1, 1.1); */
		}
		100% {
			opacity: 0;
			/* transform: scale3d(1, 1, 1); */
		}
	}
</style>
