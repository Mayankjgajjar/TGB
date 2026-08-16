import React from 'react';
import { Flame, Layers, Sparkles, Zap, Cpu, Hammer, ShieldCheck } from 'lucide-react';
import styles from './ProductionTicker.module.css';

const CAPABILITIES = [
  { name: 'Fiber Laser Metal Cutting', spec: '0.1mm Tolerance', icon: Flame },
  { name: 'CNC V-Grooving & Routing', spec: '4mm PVDF ACP', icon: Layers },
  { name: 'Automated 3D Letter Bending', spec: 'SS & Aluminum', icon: Hammer },
  { name: 'UV Flatbed Exterior Printing', spec: '1200 DPI Weatherproof', icon: Sparkles },
  { name: 'IP67 LED Illumination Lab', spec: '50,000h Samsung LEDs', icon: Zap },
  { name: 'Acrylic Flame Polishing', spec: 'Cast Optical Acrylic', icon: Cpu },
  { name: 'Quality Assurance & Rigging', spec: 'Zone 3/4 Certified', icon: ShieldCheck },
];

export const ProductionTicker: React.FC = () => {
  const loopItems = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className={styles.section} aria-label="In-House Factory Capabilities">
      <div className={styles.marqueeContainer}>
        <div className={styles.track}>
          {loopItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon size={16} />
                </div>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.dot}>•</span>
                <span className={styles.spec}>{item.spec}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductionTicker;
