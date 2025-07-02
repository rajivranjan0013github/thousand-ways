import React from "react"

export const TheHospitalLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" fill="#4299E1" />
    <path d="M30 50H70" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M50 30V70" stroke="#48BB78" strokeWidth="8" strokeLinecap="round" />
    <circle cx="50" cy="50" r="15" fill="#F6E05E" />
    <path d="M50 42V58M42 50H58" stroke="#4299E1" strokeWidth="4" strokeLinecap="round" />
  </svg>
) 

export const TheBillingLogo = ({ className }: { className?: string }) => (
    <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blue circular background */}
    <circle cx="50" cy="50" r="45" fill="#4299E1" />
  
    {/* Receipt shape */}
    <rect x="35" y="30" width="30" height="40" rx="3" fill="#F6E05E" />
    <path
      d="M35 40H65M35 48H65M35 56H50"
      stroke="#4299E1"
      strokeWidth="3"
      strokeLinecap="round"
    />
  
    {/* Green currency symbol */}
    <text
      x="50"
      y="70"
      textAnchor="middle"
      fill="#48BB78"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial"
    >
      ₹
    </text>
  </svg>
) 