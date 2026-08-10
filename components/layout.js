import React from "react"

const randomValue = (seed) => {
  const value = Math.sin(seed) * 10000
  return value - Math.floor(value)
}

const backgroundStars = Array.from({ length: 90 }, (_, index) => ({
  left: `${randomValue((index + 1) * 13.37) * 100}%`,
  top: `${randomValue((index + 1) * 29.53) * 100}%`,
  size: `${1 + randomValue((index + 1) * 47.11) * 2}px`,
  delay: `${randomValue((index + 1) * 71.19) * -6}s`,
  duration: `${3 + randomValue((index + 1) * 97.31) * 5}s`
}))

export default function Layout({ children }) {
  //TODO make fade in for things on pages
  return (
    <div className="space-page">
      <div className="night-sky" aria-hidden="true">
        {backgroundStars.map((star, index) => (
          <span
            className="night-star"
            key={index}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          />
        ))}
      </div>
      {children}
    </div>
  )
}
