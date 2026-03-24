const ctx = new (window.AudioContext || window.webkitAudioContext)();

/**
 * Short percussive "pop": quick attack, fast pitch drop, fast decay.
 */
export function play(freq = 440, duration = 0.08, type = 'sine') {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // @ts-ignore
  osc.type = type;

  const t0 = ctx.currentTime;
  const sweep = Math.min(duration * 0.9, 0.06);
  const high = Math.max(120, freq * 1.8);
  const low = Math.max(60, freq * 0.35);

  osc.frequency.setValueAtTime(high, t0);
  osc.frequency.exponentialRampToValueAtTime(low, t0 + sweep);

  osc.connect(gain);
  gain.connect(ctx.destination);

  const peak = 0.18;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(peak, t0 + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration);

  osc.start(t0);
  osc.stop(t0 + duration + 0.015);
}
