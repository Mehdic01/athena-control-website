"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"
import {
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Factory,
  MapPin,
} from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Official Turkish Distributor",
    description:
      "Athena Control holds official distribution rights for Athena Group, Motortronics, SHINKAWA Electric, and RENLE — guaranteeing authentic products, full manufacturer warranty, and direct access to factory-level technical support.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    title: "Soft Starters from 18 A to 13.8 kV",
    description:
      "The Motortronics VMX range spans general-purpose low-voltage motors to medium-voltage machines up to 13.8 kV — a complete soft-start portfolio from a single authorized Turkish source.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "Predictive Maintenance Instrumentation",
    description:
      "SHINKAWA Electric sensors measure shaft displacement, velocity, and acceleration in real time on pumps, motors, turbines, and compressors — catching failure before it becomes unplanned downtime.",
    icon: <Activity className="w-8 h-8 text-white" />,
  },
  {
    title: "Variable Frequency Drives for Every Load",
    description:
      "RENLE RNB series inverters cover general-purpose through heavy-duty loads in both low-voltage and high-voltage configurations, with built-in PLC functions and real-time bus communication.",
    icon: <Cpu className="w-8 h-8 text-white" />,
  },
  {
    title: "Manual and Control Valves",
    description:
      " Athena Group’s comprehensive valve portfolio includes manual and control valves engineered for precision flow control in demanding industrial applications — all available through Athena Control in Turkey.",
    icon: <MapPin className="w-8 h-8 text-white" />,
  },
    {
    title: "12+ Industries Across Turkey",
    description:
      "Oil, Gas and Petrochemical plants, Water treatment, mining, manufacturing and processing, HVAC, pumps & compressors — the portfolio is built around the industries where motor failure carries the highest operational cost.",
    icon: <Factory className="w-8 h-8 text-white" />,
  },
]

export default function FeatureShaderCards() {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots" as const,
        shapeScale: 0.09,
        colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "dots" as const,
        shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-background dark:to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative h-80">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/80 border border-white/20 dark:border-white/10">
                  <div className="mb-4 filter drop-shadow-lg">{feature.icon}</div>

                  <h3 className="text-base font-bold mb-2 text-white">{feature.title}</h3>

                  <p className="text-sm leading-relaxed flex-grow text-gray-100 font-medium">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
