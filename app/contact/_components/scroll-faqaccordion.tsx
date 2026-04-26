"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface ScrollFAQAccordionProps {
  data?: FAQItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

const defaultData: FAQItem[] = [
  {
    id: 1,
    question: "Which Motortronics soft starter model is right for my application?",
    answer:
      "Motortronics offers the VMX series for low-voltage AC motors and the MVC 4 for medium-voltage applications (3–15 kV). Within the VMX line, the Synergy Plus covers up to 520 A with advanced motor protection, the Agility targets pump and OEM applications up to 250 A, and the PFE includes built-in power factor correction. We'll help you match the correct model to your motor's full-load amperage and application requirements.",
  },
  {
    id: 2,
    question: "What is the difference between SHINKAWA vibration sensors and VM-series condition monitors?",
    answer:
      "SHINKAWA vibration sensors (CV, CA, MS, ZARK, FK, WK/WKN series) are the field-mounted transducers that convert shaft or casing vibration into electrical signals. The VM-series condition monitors (VM-5, VM-7, VM-21, VM-25) are the panel-mounted instruments that receive those signals, process them, and trigger alarms or trips. Together they form a complete machine protection system for pumps, compressors, turbines, and motors.",
  },
  {
    id: 3,
    question: "When should I choose a soft starter over a frequency inverter — or vice versa?",
    answer:
      "Soft starters are the right choice when you only need controlled ramp-up and ramp-down — they are more compact and cost-effective for fixed-speed loads. RENLE frequency inverters (RNB series) are the better fit when continuous speed variation, energy saving on variable-torque loads (pumps, fans), or regenerative braking is required. We can assess your application and recommend the most appropriate solution.",
  },
  {
    id: 4,
    question: "Do RENLE inverters support sensorless vector control and what protection ratings are available?",
    answer:
      "Yes, RENLE RNB-series inverters support sensorless vector control (SVC) and V/F control modes. Protection ratings range from IP20 to IP55 depending on the model. For dusty or humid environments, we recommend confirming the required IP class at the time of enquiry so we can specify the correct model or external enclosure.",
  },
  {
    id: 5,
    question: "What industries do the products you distribute serve?",
    answer:
      "Our portfolio addresses energy (power generation, oil & gas), petrochemicals, water and wastewater, mining, cement and aggregate, marine, HVAC, and general manufacturing. Any facility that operates large AC motors, requires rotating-equipment condition monitoring, or benefits from variable-speed drives is a natural fit for our product range.",
  },
  {
    id: 6,
    question: "Do you provide commissioning support and after-sales service across Turkey?",
    answer:
      "Yes. As the official Turkish distributor for Motortronics, SHINKAWA Electric, and RENLE, Athena Control provides pre-sales engineering guidance, on-site commissioning assistance, and post-sales technical service. Our team is based in Bayraklı, İzmir and covers all of Turkey. Contact us via the form above or by phone and we'll respond within 24 business hours.",
  },
];

export default function ScrollFAQAccordion({
  data = defaultData,
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={cn("max-w-4xl mx-auto text-center py-16 px-6", className)}>
      <h2 className="font-display text-4xl md:text-7xl text-[#1A1A1A] mb-2">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-[#6B6B6B] mb-10 text-sm md:text-base">
        Common questions from procurement engineers and plant managers about our
        products, brands, and services.
      </p>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem ?? ""}
        onValueChange={(val) => setOpenItem(val || null)}
      >
        {data.map((item) => {
          const isOpen = openItem === item.id.toString();
          return (
            <Accordion.Item
              value={item.id.toString()}
              key={item.id}
              className="mb-4"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4 cursor-pointer">
                  <div
                    className={cn(
                      "relative flex flex-1 items-center space-x-2 rounded-xl px-4 py-3 text-left transition-colors duration-200",
                      isOpen
                        ? "bg-[#1B6240]/10 text-black"
                        : "bg-[#F5F5F5] text-[#1A1A1A]",
                      questionClassName
                    )}
                  >
                    {item.icon && (
                      <span
                        className={cn(
                          "absolute bottom-6",
                          item.iconPosition === "right" ? "right-0" : "left-0"
                        )}
                        style={{
                          transform:
                            item.iconPosition === "right"
                              ? "rotate(7deg)"
                              : "rotate(-4deg)",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="font-medium text-sm md:text-base">
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "flex-none transition-colors duration-200",
                      isOpen ? "text-[#1B6240]" : "text-[#6B6B6B]"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content asChild forceMount>
                <motion.div
                  initial="collapsed"
                  animate={isOpen ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="flex justify-end ml-7 mt-4 md:ml-16">
                    <div
                      className={cn(
                        "relative max-w-md rounded-2xl px-4 py-3 text-left text-sm md:text-base bg-[#50a2ff] text-white",
                        answerClassName
                      )}
                    >
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
