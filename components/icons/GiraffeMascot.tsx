interface GiraffeMascotProps {
  variant?: "happy" | "thinking" | "waving";
  size?: number;
  className?: string;
}

export default function GiraffeMascot({
  variant = "happy",
  size = 120,
  className = "",
}: GiraffeMascotProps) {
  const scale = size / 120;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spots on head */}
      <g opacity="0.6">
        <ellipse cx="45" cy="30" rx="6" ry="5" fill="#D97706" />
        <ellipse cx="70" cy="25" rx="5" ry="4" fill="#D97706" />
        <ellipse cx="60" cy="40" rx="4" ry="3" fill="#D97706" />
        <ellipse cx="50" cy="48" rx="3" ry="2.5" fill="#D97706" />
        <ellipse cx="72" cy="45" rx="4" ry="3" fill="#D97706" />
      </g>

      {/* Neck */}
      <path
        d="M50 70 L45 100 Q45 105 50 105 L70 105 Q75 105 75 100 L70 70"
        fill="url(#giraffeGradient)"
        stroke="#D97706"
        strokeWidth="2"
      />

      {/* Neck spots */}
      <g opacity="0.5">
        <ellipse cx="55" cy="80" rx="4" ry="3" fill="#D97706" />
        <ellipse cx="65" cy="88" rx="3" ry="2.5" fill="#D97706" />
        <ellipse cx="58" cy="95" rx="3" ry="2" fill="#D97706" />
      </g>

      {/* Head */}
      <ellipse cx="60" cy="42" rx="25" ry="22" fill="url(#giraffeGradient)" stroke="#D97706" strokeWidth="2" />

      {/* Ossicones (horns) */}
      <g>
        <rect x="47" y="12" width="5" height="14" rx="2.5" fill="url(#giraffeGradient)" stroke="#D97706" strokeWidth="1.5" />
        <circle cx="49.5" cy="12" r="4" fill="#F97316" stroke="#D97706" strokeWidth="1.5" />
        <rect x="67" y="12" width="5" height="14" rx="2.5" fill="url(#giraffeGradient)" stroke="#D97706" strokeWidth="1.5" />
        <circle cx="69.5" cy="12" r="4" fill="#F97316" stroke="#D97706" strokeWidth="1.5" />
      </g>

      {/* Ears */}
      <ellipse cx="38" cy="30" rx="7" ry="5" fill="url(#giraffeGradient)" stroke="#D97706" strokeWidth="1.5" transform="rotate(-20 38 30)" />
      <ellipse cx="82" cy="30" rx="7" ry="5" fill="url(#giraffeGradient)" stroke="#D97706" strokeWidth="1.5" transform="rotate(20 82 30)" />

      {/* Eyes */}
      <g>
        <ellipse cx="50" cy="38" rx="6" ry="7" fill="white" />
        <ellipse cx="70" cy="38" rx="6" ry="7" fill="white" />
        {variant === "happy" && (
          <>
            <circle cx="51" cy="39" r="3.5" fill="#1E293B" />
            <circle cx="71" cy="39" r="3.5" fill="#1E293B" />
            <circle cx="52" cy="37" r="1.5" fill="white" />
            <circle cx="72" cy="37" r="1.5" fill="white" />
          </>
        )}
        {variant === "thinking" && (
          <>
            <circle cx="52" cy="40" r="3.5" fill="#1E293B" />
            <circle cx="72" cy="36" r="3.5" fill="#1E293B" />
            <circle cx="53" cy="38" r="1.5" fill="white" />
            <circle cx="73" cy="34" r="1.5" fill="white" />
          </>
        )}
        {variant === "waving" && (
          <>
            <circle cx="51" cy="39" r="3.5" fill="#1E293B" />
            <ellipse cx="71" cy="40" rx="4" ry="2" fill="#1E293B" />
            <circle cx="52" cy="37" r="1.5" fill="white" />
          </>
        )}
      </g>

      {/* Snout */}
      <ellipse cx="60" cy="54" rx="10" ry="7" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />

      {/* Nostrils */}
      <ellipse cx="56" cy="54" rx="1.5" ry="2" fill="#D97706" />
      <ellipse cx="64" cy="54" rx="1.5" ry="2" fill="#D97706" />

      {/* Mouth */}
      {variant === "happy" && (
        <path
          d="M55 58 Q60 62 65 58"
          stroke="#D97706"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      )}
      {variant === "thinking" && (
        <ellipse cx="63" cy="58" rx="2" ry="1.5" fill="#D97706" />
      )}
      {variant === "waving" && (
        <path
          d="M54 57 Q60 63 66 57"
          stroke="#D97706"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* Blush marks */}
      <g opacity="0.4">
        <ellipse cx="42" cy="46" rx="4" ry="2" fill="#FB923C" />
        <ellipse cx="78" cy="46" rx="4" ry="2" fill="#FB923C" />
      </g>

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="giraffeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
