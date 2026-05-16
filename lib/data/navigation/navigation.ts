export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItemGroup {
  group: string;
  href?: string;
  items: NavItem[];
}

export interface MegaMenuSection {
  subtitle?: string;
  href: string;
  external?: boolean;
  items: NavItem[];
  subGroups?: NavItemGroup[];
}

export interface MegaMenuColumn {
  brand: string;
  href: string; // brand page URL: /products/brand/[slug]
  sections: MegaMenuSection[];
}

export const navLinks: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Brands",   href: "/brands" },
  { label: "Events",   href: "/events" },
  { label: "Contact",  href: "/contact" },
];

export const productDropdown: { columns: MegaMenuColumn[] } = {
  columns: [
    {
      brand: "Motortronics",
      href: "/products/brand/motortronics",
      sections: [
        {
          subtitle: "Soft Starters",
          href: "/products/soft-starter",
          items: [],
          subGroups: [
            {
              group: "Low Voltage",
              items: [
                { label: "VMX-Synergy Plus", href: "/products/soft-starter/vmx-synergy-plus" },
                { label: "VMX-Synergy",      href: "/products/soft-starter/vmx-synergy" },
                { label: "VMX-Agility",      href: "/products/soft-starter/vmx-agility" },
                { label: "VMX-PFE",          href: "/products/soft-starter/vmx-pfe" },
              ],
            },
            {
              group: "Medium Voltage",
              items: [
                { label: "MVC 4", href: "/products/soft-starter/mvc4" },
              ],
            },
          ],
        },
      ],
    },
    {
      brand: "SHINKAWA Electric",
      href: "/products/brand/shinkawa",
      sections: [
        {
          subtitle: "Vibration Sensors",
          href: "/products/vibration-sensors",
          items: [
            { label: "CV Series",     href: "/products/vibration-sensors/cv-series" },
            { label: "CA Series",     href: "/products/vibration-sensors/ca-series" },
            { label: "MS Series",     href: "/products/vibration-sensors/ms-series" },
            { label: "ZARK Series",   href: "/products/vibration-sensors/zark-series" },
            { label: "FK Series",     href: "/products/vibration-sensors/fk-series" },
            { label: "WK/WKN Series", href: "/products/vibration-sensors/wk-wkn-series" },
          ],
        },
        {
          subtitle: "Condition Monitors",
          href: "/products/condition-monitor",
          items: [
            { label: "VM-5 Series",  href: "/products/condition-monitor/vm-5-series" },
            { label: "VM-7 Series",  href: "/products/condition-monitor/vm-7-series" },
            { label: "VM-21 Series", href: "/products/condition-monitor/vm-21-series" },
            { label: "VM-25 Series", href: "/products/condition-monitor/vm-25-series" },
          ],
        },
      ],
    },
    {
      brand: "RENLE",
      href: "/products/brand/renle",
      sections: [
        {
          subtitle: "Frequency Inverters",
          href: "/products/frequency-inverter",
          items: [],
          subGroups: [
            {
              group: "Low Voltage",
              items: [
                { label: "RNB1000", href: "/products/frequency-inverter/rnb-1000" },
                { label: "RNB2000", href: "/products/frequency-inverter/rnb-2000" },
                { label: "RNB3000", href: "/products/frequency-inverter/rnb-3000" },
                { label: "RNB5000", href: "/products/frequency-inverter/rnb-5000" },
                { label: "RNB6000", href: "/products/frequency-inverter/rnb-6000" },
              ],
            },
            {
              group: "High Voltage",
              items: [
                { label: "RNHV Series", href: "/products/frequency-inverter/rnhv-series" },
              ],
            },
          ],
        },
      ],
    },
    {
      brand: "Athena Valve",
      href: "/products/brand/athena-valve",
      sections: [
        {
          subtitle: "Industrial Valves",
          href: "/products/ball-valve",
          items: [],
          subGroups: [
            {
              group: "Ball Valves",
              href: "/products/ball-valve",
              items: [
                { label: "Forged Steel Floating Ball Valve",  href: "/products/ball-valve/forged-steel-floating-ball-valve" },
                { label: "Cast Steel Floating Ball Valve",    href: "/products/ball-valve/cast-steel-floating-ball-valve" },
                { label: "Forged Steel Trunnion Ball Valve",  href: "/products/ball-valve/forged-steel-trunnion-ball-valve" },
                { label: "Cast Steel Trunnion Ball Valve",    href: "/products/ball-valve/cast-steel-trunnion-ball-valve" },
                { label: "Top Entry Ball Valve",              href: "/products/ball-valve/top-entry-ball-valve" },
                { label: "Jacketed Floating Ball Valve",      href: "/products/ball-valve/jacketed-floating-ball-valve" },
                { label: "Cryogenic Ball Valve",              href: "/products/ball-valve/cryogenic-ball-valve" },
                { label: "Double Block and Bleed Ball Valve", href: "/products/ball-valve/dbb-ball-valve" },
              ],
            },
            {
              group: "Butterfly Valves",
              href: "/products/butterfly-valve",
              items: [
                { label: "Triple Offset Butterfly Valve",  href: "/products/butterfly-valve/triple-offset-butterfly-valve" },
                { label: "Double Offset Butterfly Valve",  href: "/products/butterfly-valve/double-offset-butterfly-valve" },
                { label: "Concentric Butterfly Valve",     href: "/products/butterfly-valve/concentric-butterfly-valve" },
                { label: "Butterfly Wafer Type Valve",     href: "/products/butterfly-valve/butterfly-wafer-type-valve" },
              ],
            },
            {
              group: "Gate Valves",
              href: "/products/gate-valve",
              items: [
                { label: "Rising Stem Gate Valve",       href: "/products/gate-valve/rising-stem-gate-valve" },
                { label: "Cast Steel Gate Valve",        href: "/products/gate-valve/cast-steel-gate-valve" },
                { label: "Forged Steel Gate Valve",      href: "/products/gate-valve/forged-steel-gate-valve" },
                { label: "Pressure Seal Gate Valve",     href: "/products/gate-valve/pressure-seal-gate-valve" },
                { label: "Slab Gate Valve",              href: "/products/gate-valve/slab-gate-valve" },
                { label: "Through Conduit Gate Valve",   href: "/products/gate-valve/through-conduit-gate-valve" },
                { label: "Cryogenic Gate Valve",         href: "/products/gate-valve/cryogenic-gate-valve" },
                { label: "Bellows Gate Valve",           href: "/products/gate-valve/bellows-gate-valve" },
              ],
            },
            {
              group: "Globe Valves",
              href: "/products/globe-valve",
              items: [
                { label: "Cast Steel Globe Valve",        href: "/products/globe-valve/cast-steel-globe-valve" },
                { label: "Forged Steel Globe Valve",      href: "/products/globe-valve/forged-steel-globe-valve" },
                { label: "Angle Globe Valve",             href: "/products/globe-valve/angle-globe-valve" },
                { label: "Pressure Seal Globe Valve",     href: "/products/globe-valve/pressure-seal-globe-valve" },
                { label: "Cryogenic Globe Valve",         href: "/products/globe-valve/cryogenic-globe-valve" },
                { label: "Bellows Sealed Globe Valve",    href: "/products/globe-valve/bellows-sealed-globe-valve" },
                { label: "Oxygen Globe Valve",            href: "/products/globe-valve/oxygen-globe-valve" },
              ],
            },
            {
              group: "Check Valves",
              href: "/products/check-valve",
              items: [
                { label: "Axial Flow Check Valve",              href: "/products/check-valve/axial-flow-check-valve" },
                { label: "Dual Plate Check Valve",              href: "/products/check-valve/dual-plate-check-valve" },
                { label: "Cast Steel Swing Check Valve",        href: "/products/check-valve/normal-swing-check-valve" },
                { label: "Pressure Seal Swing Check Valve",     href: "/products/check-valve/pressure-seal-swing-check-valve" },
                { label: "Forged Steel Lift Check Valve",       href: "/products/check-valve/lift-type-check-valve" },
                { label: "Forged Steel Y Type Check Valve",     href: "/products/check-valve/y-type-check-valve" },
              ],
            },
            {
              group: "Plug Valves",
              href: "/products/plug-valve",
              items: [
                { label: "Plug Valve",                            href: "/products/plug-valve/plug-valve" },
                { label: "Orbital Plug Valve",                    href: "/products/plug-valve/orbital-plug-valve" },
                { label: "Pressure Balance Plug Valve",           href: "/products/plug-valve/pressure-balance-plug-valve" },
              ],
            },
          ],
        },
      ],
    },
    {
      brand: "ValenTech",
      href: "/products/brand/valentech",
      sections: [
        {
          subtitle: "Pneumatic Actuators",
          href: "/products/pneumatic-actuator",
          items: [
            { label: "Spring Return Fork Type", href: "/products/pneumatic-actuator/spring-return-fork-type" },
            { label: "Double Acting Fork Type", href: "/products/pneumatic-actuator/double-acting-fork-type" },
            { label: "Linear Pneumatic Actuator", href: "/products/pneumatic-actuator/linear-pneumatic-actuator" },
            { label: "Rack and Pinion Pneumatic Actuator", href: "/products/pneumatic-actuator/rack-and-pinion-pneumatic-actuator" },
            { label: "Fast & Ultra-Fast Acting Pneumatic Actuator", href: "/products/pneumatic-actuator/fast-ultra-fast-acting-pneumatic-actuator" },
          ],
        },
        {
          subtitle: "Electric Actuators",
          href: "/products/electric-actuator",
          items: [
            { label: "Multi-Turn Electric Actuator", href: "/products/electric-actuator/multi-turn-electric-actuator" },
            { label: "Compact Module Electric Actuator", href: "/products/electric-actuator/compact-module-electric-actuator" },
            { label: "Partially Rotary Electric Actuator", href: "/products/electric-actuator/partially-rotary-electric-actuator" },
            { label: "Angular Travel Electric Actuator", href: "/products/electric-actuator/angular-travel-electric-actuator" },
          ],
        },
        {
          subtitle: "Complete Actuator Equipment",
          href: "/products/complete-actuator-equipment",
          items: [
            { label: "Ball Valve with Pneumatic Actuator", href: "/products/complete-actuator-equipment/ball-valve-with-pneumatic-actuator" },
            { label: "Butterfly Valve with Pneumatic Actuator", href: "/products/complete-actuator-equipment/butterfly-valve-with-pneumatic-actuator" },
            { label: "Gate Valve with Pneumatic Actuator", href: "/products/complete-actuator-equipment/gate-valve-with-pneumatic-actuator" },
            { label: "Ball Valve with Electric Actuator", href: "/products/complete-actuator-equipment/ball-valve-with-electric-actuator" },
            { label: "Gate Valve with Electric Actuator", href: "/products/complete-actuator-equipment/gate-valve-with-electric-actuator" },
            { label: "Butterfly Valve with Electric Actuator", href: "/products/complete-actuator-equipment/butterfly-valve-with-electric-actuator" },
          ],
        },

      ],
    },
  ],
};

export interface ProductCategoryLink {
  label: string;
  href: string;
}

export const productCategoryLinks: ProductCategoryLink[] = [
  { label: "Soft Starters",              href: "/products/soft-starter" },
  { label: "Vibration Sensors",           href: "/products/vibration-sensors" },
  { label: "Condition Monitors",          href: "/products/condition-monitor" },
  { label: "Frequency Inverters",         href: "/products/frequency-inverter" },
  { label: "Ball Valves",                 href: "/products/ball-valve" },
  { label: "Butterfly Valves",            href: "/products/butterfly-valve" },
  { label: "Gate Valves",                 href: "/products/gate-valve" },
  { label: "Globe Valves",               href: "/products/globe-valve" },
  { label: "Check Valves",               href: "/products/check-valve" },
  { label: "Plug Valves",                href: "/products/plug-valve" },
  { label: "Pneumatic Actuators",         href: "/products/pneumatic-actuator" },
  { label: "Electric Actuators",          href: "/products/electric-actuator" },
  { label: "Complete Actuator Equipment", href: "/products/complete-actuator-equipment" },
];

export const footerProductLinks: NavItem[] = [
  { label: "Soft Starters",        href: "/products/soft-starter" },
  { label: "Vibration Sensors",     href: "/products/vibration-sensors" },
  { label: "Condition Monitors",    href: "/products/condition-monitor" },
  { label: "Frequency Inverters",   href: "/products/frequency-inverter" },
  { label: "Industrial Valves",     href: "/products/brand/athena-valve" },
  { label: "Actuators",   href: "/products/brand/valentech" },
];

export const footerCompanyLinks: NavItem[] = [
  { label: "Home",     href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us",   href: "/about" },
  { label: "Our Brands", href: "/brands" },
  { label: "Events",    href: "/events" },
  { label: "Contact",    href: "/contact" },
];
