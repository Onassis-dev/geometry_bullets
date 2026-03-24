/** Safari & older WebKit: prefixed AudioContext constructor. */
interface Window {
  webkitAudioContext?: typeof AudioContext;
}
