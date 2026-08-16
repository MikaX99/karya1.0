import React from "react";

export default function CheetahLogo({
  size = 40,
  color = "currentColor",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.5)}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      <g fill={color}>
        {/* Head */}
        <path d="M 68,14 C 64,12 60,13 56,15 C 54,16 52,19 51,21 C 50,22 47,21 46,21 C 45,21 44,22 43,23 C 41,25 42,28 44,29 C 47,30 50,29 53,28 C 55,30 58,32 61,31 C 64,30 67,27 69,24 C 71,21 70,16 68,14 Z M 57,19 C 58,19 59,20 59,21 C 58,22 57,22 56,21 C 56,20 57,19 57,19 Z" />
        {/* Neck & Back Curve */}
        <path d="M 66,22 C 73,19 82,16 92,15 C 103,14 114,14 124,18 C 133,22 140,29 146,37 C 153,46 160,54 171,56 C 176,57 181,55 186,51 C 189,48 190,44 187,41 C 184,38 178,41 174,44 C 168,48 163,44 158,38 C 151,29 143,21 133,16 C 122,10 109,9 96,11 C 84,13 74,16 66,22 Z" />
        {/* Torso & Flank */}
        <path d="M 61,31 C 67,36 74,42 81,46 C 90,51 100,53 110,51 C 120,49 129,43 137,36 C 132,32 125,27 117,24 C 107,21 97,20 87,22 C 78,24 69,27 61,31 Z" />
        {/* Front Legs - Extended Forward/Under */}
        <path d="M 80,47 C 76,53 71,60 67,67 C 65,71 63,75 65,79 C 67,82 72,83 75,81 C 77,80 77,77 75,76 C 73,75 71,73 72,70 C 74,66 79,59 84,52 Z" />
        <path d="M 88,50 C 85,57 82,65 82,73 C 82,77 84,81 88,82 C 92,83 96,80 96,76 C 95,72 91,69 90,65 C 89,59 90,54 93,49 Z" />
        {/* Hind Legs - Pushing Back */}
        <path d="M 136,39 C 131,48 126,58 125,69 C 124,75 127,81 132,83 C 137,85 142,81 142,76 C 141,70 137,64 137,58 C 138,51 142,44 146,38 Z" />
        <path d="M 148,42 C 145,51 143,60 145,69 C 146,73 150,77 155,76 C 159,75 161,70 159,66 C 156,60 154,53 154,47 C 154,44 152,43 148,42 Z" />
        {/* Spots (Pattern Accents) */}
        <circle cx="85" cy="27" r="1.5" />
        <circle cx="95" cy="25" r="1.8" />
        <circle cx="107" cy="26" r="1.6" />
        <circle cx="118" cy="28" r="1.7" />
        <circle cx="128" cy="33" r="1.6" />
        <circle cx="90" cy="35" r="1.5" />
        <circle cx="102" cy="34" r="1.7" />
        <circle cx="114" cy="36" r="1.6" />
        <circle cx="98" cy="42" r="1.4" />
        <circle cx="110" cy="43" r="1.5" />
      </g>
    </svg>
  );
}
