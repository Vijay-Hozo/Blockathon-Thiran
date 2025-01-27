// "use client";

// // import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";

// export const InfiniteMovingCards = ({
//     items = [],
//     direction = "left",
//     speed = "fast",
//     pauseOnHover = true,
//     className = "",
//   }) => {
//     const containerRef = React.useRef<HTMLDivElement>(null);
//     const scrollerRef = React.useRef<HTMLUListElement>(null);
//     const [start, setStart] = useState(false);
  
//     useEffect(() => {
//       initializeAnimation();
//     }, []);
  
//     const initializeAnimation = () => {
//       if (containerRef.current && scrollerRef.current) {
//         const scrollerContent = Array.from(scrollerRef.current.children);
  
//         scrollerContent.forEach((item) => {
//           const duplicatedItem = item.cloneNode(true);
//           if (scrollerRef.current) {
//             scrollerRef.current.appendChild(duplicatedItem);
//           }
//         });
  
//         setAnimationDirection();
//         setAnimationSpeed();
//         setStart(true);
//       }
//     };
  
//     const setAnimationDirection = () => {
//       if (containerRef.current) {
//         const directionValue = direction === "left" ? "forwards" : "reverse";
//         containerRef.current.style.setProperty("--animation-direction", directionValue);
//       }
//     };
  
//     const setAnimationSpeed = () => {
//       if (containerRef.current) {
//         let duration;
//         switch (speed) {
//           case "fast":
//             duration = "20s";
//             break;
//           case "normal":
//             duration = "40s";
//             break;
//           case "slow":
//           default:
//             duration = "80s";
//             break;
//         }
//         containerRef.current.style.setProperty("--animation-duration", duration);
//       }
//     };
  
//     return (
//       <div
//         ref={containerRef}
//         className={`relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
//       >
//         <ul
//           ref={scrollerRef}
//           className={`flex min-w-full gap-4 py-4 w-max flex-nowrap ${
//             start ? "animate-scroll" : ""
//           } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
//         >
//           {items.map((item, index) => (
//             <li
//               key={index}
//               className="w-[500px] h-[500px] md:w-[500px] max-w-full flex-shrink-0 rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-lg hover:scale-105 transition-transform"
//             >
//               <div>{item.icon}</div>
//               <p className="mt-4 text-lg font-semibold text-white">{item.label}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
