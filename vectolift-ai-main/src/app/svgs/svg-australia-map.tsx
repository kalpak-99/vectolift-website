export default function AustraliaMapIllustration() {
  const cities = [
    { name: "Darwin",    x: 320, y: 82,  line: true },
    { name: "Brisbane",  x: 548, y: 255, line: true },
    { name: "Sydney",    x: 548, y: 315, line: true },
    { name: "Canberra",  x: 502, y: 340, line: true },
    { name: "Melbourne", x: 440, y: 388, line: true },
    { name: "Hobart",    x: 460, y: 450, line: true },
    { name: "Adelaide",  x: 370, y: 340, line: true },
    { name: "Perth",     x: 130, y: 310, line: true },
  ];

  // Central AI figure position
  const cx = 390;
  const cy = 300;

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <svg
        viewBox="0 0 680 520"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glowing teal radial for AI figure */}
          <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#00e5a0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00e5a0" stopOpacity="0" />
          </radialGradient>

          {/* Soft white fill for map */}
          <radialGradient id="mapFill" cx="50%" cy="40%" r="60%">
            <stop offset="0%"  stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </radialGradient>

          {/* Animated dashed line gradient */}
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stopColor="#00e5a0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00e5a0" stopOpacity="0.1" />
          </linearGradient>

          {/* Clip path for map */}
          <clipPath id="mapClip">
            <path d="M195,30 L390,20 L490,60 L570,100 L600,160 L590,220 L570,260 L580,300 L560,360 L540,400 L500,420 L480,460 L460,470 L440,460 L430,430 L400,420 L380,440 L350,460 L330,450 L310,420 L280,400 L240,380 L200,360 L170,320 L140,280 L110,260 L100,230 L110,190 L130,160 L140,120 L170,80 Z" />
          </clipPath>

          <filter id="blurFx">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* ── AUSTRALIA MAP SHAPE ── */}
        {/* Main continent */}
        <path
          d="M195,30 L240,22 L310,18 L390,20 L450,30 L490,60 L540,80 L570,100 L595,140 L600,160 L590,200 L590,220 L575,250 L570,260 L578,290 L580,300 L565,340 L560,360 L545,385 L540,400 L515,415 L500,420 L488,445 L480,460 L463,472 L448,475 L435,466 L428,445 L428,430 L408,420 L388,435 L370,452 L352,462 L334,455 L318,432 L300,412 L272,395 L248,378 L220,358 L195,332 L175,308 L152,278 L128,258 L108,238 L98,218 L102,195 L114,172 L126,148 L138,124 L148,100 L168,76 Z"
          fill="url(#mapFill)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
        />
        {/* Tasmania */}
        <ellipse cx="478" cy="492" rx="22" ry="14"
          fill="rgba(255,255,255,0.10)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* ── CONNECTING LINES FROM CITIES TO AI CENTER ── */}
        {cities.map((city, i) => (
          <line
            key={`line-${i}`}
            x1={city.x}
            y1={city.y}
            x2={cx}
            y2={cy}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-28"
              dur={`${1.8 + i * 0.22}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* ── CITY DOTS & LABELS ── */}
        {cities.map((city, i) => (
          <g key={`city-${i}`}>
            {/* Outer pulse ring */}
            <circle cx={city.x} cy={city.y} r="5" fill="none"
              stroke="#00e5a0" strokeWidth="1" opacity="0.35">
              <animate attributeName="r" values="4;8;4" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0;0.35" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            {/* Dot */}
            <circle cx={city.x} cy={city.y} r="3.5"
              fill="#00e5a0" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            {/* Label */}
            <text
              x={city.x + (city.x > cx ? 8 : -8)}
              y={city.y + 4}
              textAnchor={city.x > cx ? "start" : "end"}
              fill="rgba(255,255,255,0.85)"
              fontSize="11"
              fontFamily="avantt, sans-serif"
              fontWeight="500"
            >
              {city.name}
            </text>
          </g>
        ))}

        {/* ── AI FIGURE ── */}
        {/* Outer glow halo */}
        <circle cx={cx} cy={cy} r="64" fill="url(#aiGlow)" />
        <circle cx={cx} cy={cy} r="50" fill="none"
          stroke="#00e5a0" strokeWidth="0.8" opacity="0.3">
          <animate attributeName="r" values="48;54;48" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Circle background for figure */}
        <circle cx={cx} cy={cy} r="44"
          fill="rgba(0,229,160,0.12)"
          stroke="#00e5a0"
          strokeWidth="1.2"
        />

        {/* Human silhouette (head + torso) */}
        {/* Head */}
        <circle cx={cx} cy={cy - 18} r="11"
          fill="none"
          stroke="#00e5a0"
          strokeWidth="1.5"
        />
        {/* Body */}
        <path
          d={`M${cx - 14},${cy + 12} Q${cx - 14},${cy + 2} ${cx},${cy + 2} Q${cx + 14},${cy + 2} ${cx + 14},${cy + 12}`}
          fill="none"
          stroke="#00e5a0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Shoulders line */}
        <line x1={cx - 14} y1={cy + 14} x2={cx + 14} y2={cy + 14}
          stroke="#00e5a0" strokeWidth="1.5" strokeLinecap="round" />

        {/* "AI" label inside circle */}
        <text x={cx} y={cy + 38}
          textAnchor="middle"
          fill="#00e5a0"
          fontSize="10"
          fontWeight="700"
          fontFamily="avantt, sans-serif"
          letterSpacing="2"
        >
          AI
        </text>

        {/* ── BOTTOM LABEL ── */}
        <text x={cx} y={490}
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize="9"
          fontFamily="avantt, sans-serif"
          fontWeight="500"
          letterSpacing="2"
        >
          AUS-NATIVE CUSTOM AGENT PERFORMANCE
        </text>
      </svg>
    </div>
  );
}
