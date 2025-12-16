interface GiraffeMascotProps {
  size?: number;
  className?: string;
  /**
   * Optional accent color for eyes/spots/horn tips.
   * Defaults to a dark, warm charcoal.
   */
  accentColor?: string;
}

export default function GiraffeMascot({
  size = 120,
  className = "",
  accentColor = "#292524", // warm charcoal
}: GiraffeMascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Giraffe Icon"
    >
      <defs>
        {/* Main body gradient - rich gold to orange */}
        <linearGradient id="giraffeBodyGrad" x1="60" y1="0" x2="60" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" /> {/* Amber-400 */}
          <stop offset="1" stopColor="#D97706" /> {/* Amber-600 */}
        </linearGradient>

        {/* Lighter snout gradient for depth and contrast */}
        <linearGradient id="giraffeSnoutGrad" x1="60" y1="50" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" /> {/* Amber-200 */}
          <stop offset="1" stopColor="#F59E0B" /> {/* Amber-500 */}
        </linearGradient>
      </defs>

      {/* --- Neck & Spots --- */}
      <path d="M48 110L52 65H68L72 110H48Z" fill="url(#giraffeBodyGrad)" />
      {/* Geometric Spots (Darker Accent) */}
      <g fill={accentColor} opacity="0.2">
        <path d="M54 95L58 85L62 88L54 95Z" />
        <path d="M64 75L68 82L60 80L64 75Z" />
        <path d="M56 72L52 78L58 80L56 72Z" />
      </g>

      {/* --- Head Structure --- */}

      {/* Main Head Shield silhouette */}
      <path d="M60 15L40 30L45 65L60 75L75 65L80 30L60 15Z" fill="url(#giraffeBodyGrad)" />

      {/* DISTINCT HORNS (Ossicones) - Geometric Prisms placed behind the front face layers */}
      <g>
        {/* Left Horn Stalk */}
        <path d="M51 20 L49 4 L55 4 L57 20 Z" fill="url(#giraffeBodyGrad)" />
        {/* Left Horn Tip (Dark Cap) */}
        <path d="M49 4 L55 4 L54 1 L50 1 Z" fill={accentColor} />

        {/* Right Horn Stalk */}
        <path d="M69 20 L71 4 L65 4 L63 20 Z" fill="url(#giraffeBodyGrad)" />
        {/* Right Horn Tip (Dark Cap) */}
        <path d="M71 4 L65 4 L66 1 L70 1 Z" fill={accentColor} />
      </g>

      {/* Ear Facets (Slightly darker to recede) */}
      <path d="M48 20L35 25L40 30L48 20Z" fill="#D97706" />
      <path d="M72 20L85 25L80 30L72 20Z" fill="#D97706" />

      {/* --- Face Details --- */}

      {/* Snout Plane (Lighter front area) */}
      <path d="M45 65L50 45H70L75 65L60 75L45 65Z" fill="url(#giraffeSnoutGrad)" />

      {/* Serious Eyes (Angled Slits) */}
      <g fill={accentColor}>
        <path d="M48 52L58 55L48 58V52Z" />
        <path d="M72 52L62 55L72 58V52Z" />
      </g>

      {/* Nostril Lines */}
      <g stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.4">
        <path d="M56 68L58 70" />
        <path d="M64 68L62 70" />
      </g>
    </svg>
  );
}
