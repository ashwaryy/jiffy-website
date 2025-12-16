interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "subtle";
}

export default function AnimatedBackground({ variant = "hero" }: AnimatedBackgroundProps) {
  const sizes = {
    hero: { blob1: 600, blob2: 500, blob3: 400 },
    section: { blob1: 400, blob2: 350, blob3: 300 },
    subtle: { blob1: 300, blob2: 250, blob3: 200 },
  };

  const { blob1, blob2, blob3 } = sizes[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Top Right */}
      <div
        className="blob-decoration blob-orange"
        style={{
          width: blob1,
          height: blob1,
          top: "-15%",
          right: "-10%",
        }}
      />

      {/* Blob 2 - Bottom Left */}
      <div
        className="blob-decoration blob-amber"
        style={{
          width: blob2,
          height: blob2,
          bottom: "-10%",
          left: "-8%",
        }}
      />

      {/* Blob 3 - Center accent */}
      <div
        className="blob-decoration"
        style={{
          width: blob3,
          height: blob3,
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(135deg, rgba(254, 243, 199, 0.3), rgba(251, 191, 36, 0.15))",
        }}
      />
    </div>
  );
}
