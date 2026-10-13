
import { useEffect, useRef } from 'react';
import './DynamicBackground.css';

function DynamicBackground() {
  const canvasRef = useRef(null);

  const mouseRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const smoothMouseRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrame;
    let particles = [];

    // Disable pointer interaction on touch-first mobile devices.
    const isTouchDevice = window.matchMedia(
      '(hover: none) and (pointer: coarse)'
    ).matches;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const createParticles = () => {
      const area = window.innerWidth * window.innerHeight;

      const count = Math.min(
        Math.max(Math.floor(area / 9000), 100),
        180
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.8 + 0.5,
        speed: Math.random() * 0.55 + 0.15,
        drift: Math.random() * 0.5 - 0.25,
        phase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.55 + 0.25,
      }));
    };

    const handleMouseMove = (event) => {
      // Preserve the existing desktop mouse interaction.
      if (isTouchDevice || event.pointerType === 'touch') return;

      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const drawOrb = (x, y, radius, color, alpha) => {
      const gradient = ctx.createRadialGradient(
        x, y, 0,
        x, y, radius
      );

      gradient.addColorStop(
        0,
        `rgba(${color}, ${alpha})`
      );

      gradient.addColorStop(
        0.35,
        `rgba(${color}, ${alpha * 0.35})`
      );

      gradient.addColorStop(
        1,
        `rgba(${color}, 0)`
      );

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Smooth cursor movement on desktop only.
      if (!isTouchDevice) {
        smoothMouseRef.current.x +=
          (mouseRef.current.x - smoothMouseRef.current.x) * 0.08;

        smoothMouseRef.current.y +=
          (mouseRef.current.y - smoothMouseRef.current.y) * 0.08;
      }

      const mouseX = isTouchDevice
        ? -10000
        : smoothMouseRef.current.x;

      const mouseY = isTouchDevice
        ? -10000
        : smoothMouseRef.current.y;

      // Large ambient moving orbs.
      const orb1X =
        width * 0.25 +
        Math.sin(time * 0.00035) * width * 0.12;

      const orb1Y =
        height * 0.30 +
        Math.cos(time * 0.0004) * height * 0.10;

      const orb2X =
        width * 0.75 +
        Math.cos(time * 0.0003) * width * 0.14;

      const orb2Y =
        height * 0.65 +
        Math.sin(time * 0.00035) * height * 0.12;

      drawOrb(
        orb1X,
        orb1Y,
        Math.min(width, height) * 0.32,
        '120, 80, 255',
        0.16
      );

      drawOrb(
        orb2X,
        orb2Y,
        Math.min(width, height) * 0.28,
        '0, 190, 255',
        0.12
      );

      // Cursor glows remain unchanged on desktop.
      if (!isTouchDevice) {
        drawOrb(
          mouseX,
          mouseY,
          320,
          '150, 100, 255',
          0.20
        );

        drawOrb(
          mouseX,
          mouseY,
          130,
          '100, 200, 255',
          0.16
        );
      }

      // Floating particles.
      particles.forEach((particle) => {
        particle.y -= particle.speed;

        particle.x +=
          particle.drift +
          Math.sin(time * 0.0007 + particle.phase) * 0.15;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }

        if (particle.x < -10) {
          particle.x = width + 10;
        }

        if (particle.x > width + 10) {
          particle.x = -10;
        }

        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const influenceRadius = 300;

        const influence = isTouchDevice
          ? 0
          : Math.max(0, 1 - distance / influenceRadius);

        // Particles move toward the cursor on desktop only.
        if (influence > 0) {
          particle.x +=
            (mouseX - particle.x) * influence * 0.006;

          particle.y +=
            (mouseY - particle.y) * influence * 0.006;
        }

        const size = particle.radius + influence * 2.2;
        const opacity = particle.opacity + influence * 0.35;

        ctx.shadowBlur = 10 + influence * 15;
        ctx.shadowColor = 'rgba(160, 130, 255, 0.8)';

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(210, 205, 255, ${opacity})`;
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // Connect nearby particles.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.10;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle =
              `rgba(160, 140, 255, ${opacity})`;

            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="dynamic-background" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="background-grid" />
      <div className="background-noise" />
      <div className="background-vignette" />
    </div>
  );
}

export default DynamicBackground;
