# changelog

## 0.9.0

- **break**: rename to `camelCase` from `snake_case`
  ([#131](https://github.com/feltcoop/gro/pull/131))
- add and publish `ui/Modal.svelte` and `ui/Portal.svelte`
  ([#127](https://github.com/feltcoop/gro/pull/127))
- add and publish `ui/PendingButton.svelte`
  ([#125](https://github.com/feltcoop/felt/pull/125))
- add and publish `ui/FeltWindowHost.svelte` and `ui/FeltWindowGuest.svelte`
  ([#128](https://github.com/feltcoop/felt/pull/128))

## 0.8.0

- **break**: rename to `PascalCase` from `Proper_Snake_Case`
  ([#120](https://github.com/feltcoop/gro/pull/120))

## 0.7.0

- **break**: require Node >=16.6.0
  ([#116](https://github.com/feltcoop/gro/pull/116))
- update styles
  ([#115](https://github.com/feltcoop/felt/pull/115))

## 0.6.0

- **break**: rename and add exports in `ui/icons.ts`
  ([#108](https://github.com/feltcoop/felt/pull/108))
- **break**: add peer deps `svelte` and `@sveltejs/kit`
  ([#112](https://github.com/feltcoop/felt/pull/112))
- update `ui/PendingAnimation.svelte` with slot content and `paused` prop
  ([#108](https://github.com/feltcoop/felt/pull/108))
- replace `ui/Message.svelte` prop `text` with a slot
  ([#108](https://github.com/feltcoop/felt/pull/108))
- publish `ui/Message.svelte`
  ([#108](https://github.com/feltcoop/felt/pull/108))

## 0.5.5

- update `ui/style.css`
  ([#102](https://github.com/feltcoop/felt/pull/102))

## 0.5.4

- publish `util/randomSeeded.ts`
  ([#106](https://github.com/feltcoop/felt/pull/106))

## 0.5.3

- add `util/randomSeeded.ts` using
  [code from Johannes Baagøe'](https://github.com/nquinlan/better-random-numbers-for-javascript-mirror)
  ([#103](https://github.com/feltcoop/felt/pull/103))

## 0.5.2

- update `ui/style.css`
  ([#101](https://github.com/feltcoop/felt/pull/101))

## 0.5.1

- publish `util/dom.ts` and `util/regexp.ts`
  ([#99](https://github.com/feltcoop/felt/pull/99))
- update `ui/style.css`
  ([#100](https://github.com/feltcoop/felt/pull/100))

## 0.5.0

- **break**: merge `util/uuid.ts` into `util/id.ts`
  ([#96](https://github.com/feltcoop/felt/pull/96))
- add `util/id.ts` and `util/counter.ts`
  ([#96](https://github.com/feltcoop/felt/pull/96))
- update `ui/style.css`
  ([#95](https://github.com/feltcoop/felt/pull/95))
- publish `ui/devmode.ts` and `ui/Devmode.svelte`
  ([#98](https://github.com/feltcoop/felt/pull/98))

## 0.4.5

- update `ui/style.css`
  ([#94](https://github.com/feltcoop/felt/pull/94))

## 0.4.4

- publish `ui/style.css` and `ui/Markup.svelte`
  ([#93](https://github.com/feltcoop/felt/pull/93))

## 0.4.3

- fix published types
  ([#92](https://github.com/feltcoop/felt/pull/92))

## 0.4.2

- publish component `ui/PendingAnimation.svelte`
  ([#91](https://github.com/feltcoop/felt/pull/91))

## 0.4.1

- export `AsyncStatus` and `wait` from root
  ([#89](https://github.com/feltcoop/felt/pull/89))

## 0.4.0

- **break**: remove camelCase terminal color exports and rename `color_bg` from `bg_color`
  ([#88](https://github.com/feltcoop/felt/pull/88))
- **break**: rename `avocado` from `avacado` 🥑
  ([#88](https://github.com/feltcoop/felt/pull/88))
- add `randomBool` to `util/random.ts`
  ([#88](https://github.com/feltcoop/felt/pull/88))
- change `randomItem` return type to exclude `undefined`
  ([#88](https://github.com/feltcoop/felt/pull/88))
- upgrade Gro to 0.28.2
  ([#87](https://github.com/feltcoop/felt/pull/87))

## 0.3.0

- **break**: swap the names of `spawn` and `spawnProcess`
  ([#63](https://github.com/feltcoop/felt/pull/63))
- **break**: rename `spawnRestartableProcess` from `createRestartableProcess`
  and remove its `delay` arg
  ([#63](https://github.com/feltcoop/felt/pull/63))
- **break**: rename `util/timings.ts` from `util/time.ts`
  ([#63](https://github.com/feltcoop/felt/pull/63))
- **break**: rename `Timings.get_all` from `Timings.getAll`
  ([#63](https://github.com/feltcoop/felt/pull/63))
- upgrade Gro to 0.28.1
  ([#63](https://github.com/feltcoop/felt/pull/63))

## 0.2.2

- fix another issue with published types
  ([#86](https://github.com/feltcoop/felt/pull/86))

## 0.2.1

- fix published types
  ([#86](https://github.com/feltcoop/felt/pull/86))

## 0.2.0

- **break**: convert to `snake_case` from `camelCase`
  ([#50](https://github.com/feltcoop/felt/pull/50))
- **break**: rename `src/util` from `src/utils`
  ([#56](https://github.com/feltcoop/felt/pull/56))
- add first pass at onboarding sketch
  ([#32](https://github.com/feltcoop/felt/pull/32))

## 0.1.4

- update Gro and publish with its new strategy
  ([#31](https://github.com/feltcoop/felt/pull/31))

## 0.1.3

- move utils from `@feltcoop/gro`
  ([#30](https://github.com/feltcoop/felt/pull/30))

## 0.1.2

- remove remaining Svelte components from public API until the full process is ready
  ([#29](https://github.com/feltcoop/felt/pull/29))

## 0.1.1

- remove `Nav.svelte` from the public API
  ([#27](https://github.com/feltcoop/felt/pull/27))

## 0.1.0

- publish
  ([#19](https://github.com/feltcoop/felt/pull/19))
