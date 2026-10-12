
import './MusicWaveform.css';

const bars = [
  12, 20, 30, 17, 38, 25, 46, 32,
  19, 40, 27, 49, 34, 21, 42, 29,
  16, 36, 24, 44, 30, 18, 39, 26,
  13,
];

function MusicWaveform() {
  return (
    <div
      className="music-waveform"
      aria-label="Decorative animated music waveform"
      role="img"
    >
      
      <div className="waveform-bars" aria-hidden="true">
        {bars.map((height, index) => (
          <span
            key={index}
            className="waveform-bar"
            style={{
              '--bar-height': `${height}px`,
              '--bar-delay': `${index * 55}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicWaveform;
