<script lang="ts">
	import type {ConsentPrinciple} from '$lib/sketch/onboard/consent';

	export let principle: ConsentPrinciple;
</script>

{principle.type}: {principle.summary}
