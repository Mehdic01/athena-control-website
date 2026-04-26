"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionItem {
  id: string
  number: string
  title: string
  content: string
  logo: string
  color: string
}

const items: AccordionItem[] = [
  {
    id: "motortronics",
    number: "01",
    title: "Motortronics",
    content:
      "The global leader in soft starter technology for AC induction motors. Athena Control distributes the full VMX series — low and medium voltage — delivering proven motor protection and energy savings across Turkish industry.",
    logo: "/images/brands/motortronics-logo.png",
    color: "#000000",
  },
  {
    id: "athena-group",
    number: "02",
    title: "Athena Group",
    content:
      "A global fluid control leader and our sister company. Athena Group's high-performance industrial valves — gate, globe, ball, butterfly, and control — serve critical infrastructure projects worldwide.",
    logo: "/images/brands/athena-group-logo.png",
    color: "#000000",
  },
  {
    id: "shinkawa",
    number: "03",
    title: "SHINKAWA Electric",
    content:
      "Japanese pioneer in vibration monitoring for rotating machinery. SHINKAWA's precision instrumentation enables predictive maintenance before failure occurs — protecting motors, pumps, compressors, and turbines.",
    logo: "/images/brands/shinkawa-logo.png",
    color: "#000000",
  },
  {
    id: "renle",
    number: "04",
    title: "RENLE",
    content:
      "Shanghai RENLE delivers advanced power electronics — variable frequency drives, soft starters, and static var generators — now available across Turkey through Athena Control.",
    logo: "/images/brands/renle-logo.png",
    color: "#000000",
  },
]

export function UniqueAccordion() {
  const [activeId, setActiveId] = useState<string | null>("motortronics")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="w-full">
      <div className="space-y-0">
        {items.map((item) => {
          const isActive = activeId === item.id
          const isHovered = hoveredId === item.id

          return (
            <div key={item.id}>
              <motion.button
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full group relative"
                initial={false}
              >
                <div className="flex items-center gap-6 py-7 px-1">
                  {/* Number with animated circle */}
                  <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#0F1A12]"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                    <motion.span
                      className="relative z-10 font-heading text-sm font-medium tracking-wide"
                      animate={{
                        color: isActive ? "#ffffff" : "#6B7D73",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="font-heading text-2xl font-semibold tracking-tight"
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color: isActive ? item.color : isHovered ? item.color : "#6B7D73",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Logo + indicator */}
                  <div className="ml-auto flex items-center gap-5 shrink-0">
                    {/* Brand logo */}
                    <motion.div
                      animate={{ opacity: isActive ? 1 : isHovered ? 0.7 : 0.3 }}
                      transition={{ duration: 0.2 }}
                      className="h-7 w-[90px] flex items-center justify-end"
                    >
                      <Image
                        src={item.logo}
                        alt={item.title}
                        width={90}
                        height={28}
                        className="object-contain h-7 w-auto max-w-[90px]"
                        sizes="90px"
                      />
                    </motion.div>

                    {/* +/× icon */}
                    <motion.div
                      className="flex items-center justify-center w-8 h-8"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.path
                          d="M8 1V15M1 8H15"
                          stroke="#0F1A12"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          initial={false}
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

                {/* Static underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(15,26,18,0.1)] origin-left"
                  initial={false}
                />
                {/* Animated brand-colored underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px origin-left"
                  style={{ backgroundColor: item.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.button>

              {/* Content */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="pl-16 pr-12 py-6 text-[#0F1A12] leading-relaxed"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
