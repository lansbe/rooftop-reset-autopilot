# Rooftop Reset Autopilot

A browser-console autopilot for [Rooftop Reset](https://www.poteto.com/).
Nightmare completed in **13.725 seconds with zero deaths** (1,647 physics ticks), verified on November 7, 2026.

## Demo

[Watch the full 13.725s Nightmare run](demo.mp4) (14.9s, no audio).

## Usage

1. Open the game and leave the difficulty chooser visible.
2. Open your browser's developer console, paste [autopilot.js](autopilot.js), and run it.
3. Keep the tab active for about 14 seconds. The script selects Nightmare and plays to the end.

Read the result with `await rooftopAutopilot.done`; stop with `rooftopAutopilot.cancel()`.

No installation, dependencies, API calls, or telemetry. The script checks the route against the loaded engine before starting, then supplies inputs at each physics tick. Game physics and timing stay unchanged. Future game updates may break the route.

To modify it, edit `sequence` (`[input mask, tick count]`) and `route.axisWindows` (`[start tick, length, axis]`). Mask bits: right 1, left 2, jump 4, dash 8, down 16, interact 32, release jump 64. Axes range from -1 to 1; tick indices start at zero.

[MIT licensed](LICENSE). This license covers the autopilot only; the game is not included.
