import { motion } from 'framer-motion';

const TRANSITION_COLOR = '#DCEAF5';
const DURATION = 0.45;
const EASE = [0.76, 0, 0.24, 1];

/**
 * PageTransition — Liquid Swipe Effect
 *
 * Two fixed full-screen overlays animate in sequence to create
 * a curved "liquid wipe" between pages:
 *
 *   1. EXIT overlay  — sweeps UP from bottom covering the old page.
 *      borderTopLeftRadius / borderTopRightRadius morph from 100% → 0%
 *      giving the leading edge a fluid, curved shape that straightens out.
 *
 *   2. ENTER overlay — sweeps UP to reveal the new page beneath.
 *      borderBottomLeftRadius / borderBottomRightRadius morph from 0% → 100%
 *      giving the trailing edge a curved reveal.
 *
 * Both layers use pointer-events-none and high z-index so they
 * never block user interaction after the animation completes.
 */
export default function PageTransition({ children }) {
  return (
    <>
      {children}

      {/* ── Exit overlay: sweeps UP from bottom ── */}
      <motion.div
        className="fixed inset-0 z-[9999] pointer-events-none origin-bottom"
        style={{ backgroundColor: TRANSITION_COLOR }}
        initial={{
          y: '100%',
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
        }}
        animate={{
          y: '100%',
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
        }}
        exit={{
          y: ['100%', '0%'],
          borderTopLeftRadius: ['50%', '0%'],
          borderTopRightRadius: ['50%', '0%'],
        }}
        transition={{ duration: DURATION, ease: EASE }}
      />

      {/* ── Enter overlay: sweeps UP revealing new page ── */}
      <motion.div
        className="fixed inset-0 z-[9998] pointer-events-none origin-top"
        style={{ backgroundColor: TRANSITION_COLOR }}
        initial={{
          y: '0%',
          borderBottomLeftRadius: '0%',
          borderBottomRightRadius: '0%',
        }}
        animate={{
          y: '-100%',
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
        }}
        exit={{
          y: '0%',
          borderBottomLeftRadius: '0%',
          borderBottomRightRadius: '0%',
        }}
        transition={{ duration: DURATION, ease: EASE, delay: DURATION * 0.35 }}
      />
    </>
  );
}
