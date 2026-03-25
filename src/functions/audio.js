const ctx = new (window.AudioContext || window.webkitAudioContext)();

function ensureRunning() {
  if (ctx.state === "suspended") void ctx.resume();
}

export function playPopAudio(freq = 440, duration = 0.08, type = "sine") {
  ensureRunning();
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

  const peak = 0.26;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(peak, t0 + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration);

  osc.start(t0);
  osc.stop(t0 + duration + 0.015);
}

export function playShootAudio() {
  ensureRunning();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "square";
  const t0 = ctx.currentTime;
  const duration = 0.045;
  osc.frequency.setValueAtTime(920, t0);
  osc.frequency.exponentialRampToValueAtTime(420, t0 + duration * 0.6);
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(0.075, t0 + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration);
  osc.start(t0);
  osc.stop(t0 + duration + 0.01);
}

export function playClickAudio() {
  ensureRunning();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  const t0 = ctx.currentTime;
  const duration = 0.028;
  osc.frequency.setValueAtTime(1040, t0);
  osc.frequency.exponentialRampToValueAtTime(620, t0 + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(0.11, t0 + 0.0015);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration);
  osc.start(t0);
  osc.stop(t0 + duration + 0.008);
}

export function playGameOverAudio() {
  ensureRunning();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  const t0 = ctx.currentTime;
  const duration = 0.55;
  osc.frequency.setValueAtTime(220, t0);
  osc.frequency.exponentialRampToValueAtTime(55, t0 + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(0.22, t0 + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

export function playTeleportAudio() {
  ensureRunning();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  const t0 = ctx.currentTime;
  const duration = 0.14;
  osc.frequency.setValueAtTime(180, t0);
  osc.frequency.exponentialRampToValueAtTime(1400, t0 + duration * 0.85);
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(0.14, t0 + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration);
  osc.start(t0);
  osc.stop(t0 + duration + 0.015);
}
