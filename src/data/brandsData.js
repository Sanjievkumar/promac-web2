/**
 * Centralized Brand Catalog Data
 *
 * Each brand contains:
 *  - slug, name, tagline, feature (used in directory cards)
 *  - categories (machine families)
 *  - specs (tech table rows)
 *  - products[] — image-based product objects with { image, name }
 *
 * Product names are derived from the original asset filenames
 * and cleaned up for display.
 */

/* ── Sea-Lion ── */
const seaLionProducts = [
  { image: '/src/assets/Brands/sea-lion brand/Tunnel countinuous batch washer system.png', name: 'Tunnel Continuous Batch Washer System' },
  { image: '/src/assets/Brands/sea-lion brand/OPEN POCKET WASHER EXTRACTOR.png', name: 'Open Pocket Washer Extractor' },
  { image: '/src/assets/Brands/sea-lion brand/WASHER-EXTRACTOR.png', name: 'Washer Extractor' },
  { image: '/src/assets/Brands/sea-lion brand/BARRIER WASHER.png', name: 'Barrier Washer' },
  { image: '/src/assets/Brands/sea-lion brand/Tumble Dryer.png', name: 'Tumble Dryer' },
  { image: '/src/assets/Brands/sea-lion brand/HIGH SPEED CHEST IRONER.png', name: 'High Speed Chest Ironer' },
  { image: '/src/assets/Brands/sea-lion brand/HIGH SPEED SERPENTINE FLATWORK IRONER.png', name: 'High Speed Serpentine Flatwork Ironer' },
  { image: '/src/assets/Brands/sea-lion brand/FLATWORK IRONER ROLLER.png', name: 'Flatwork Ironer Roller' },
  { image: '/src/assets/Brands/sea-lion brand/AUTOMATIC FEEDER.png', name: 'Automatic Feeder' },
  { image: '/src/assets/Brands/sea-lion brand/AUTOMATIC LINEN FOLDER WITH STACKER.png', name: 'Automatic Linen Folder With Stacker' },
];

/* ── Kannegiesser ── */
const kannegiesserProducts = [
  { image: '/src/assets/Brands/Kannegiesser brand/301868_Powertrans_SBW_11_persp04.jpg', name: 'Powertrans SBW' },
  { image: '/src/assets/Brands/Kannegiesser brand/313434_EMQ_Halle_Keyvisual.jpg', name: 'EMQ Series' },
  { image: '/src/assets/Brands/Kannegiesser brand/317640_SHM_Halle.jpg', name: 'SHM System' },
  { image: '/src/assets/Brands/Kannegiesser brand/317673_Kannegiesser_CFM_Halle.jpg', name: 'CFM Feeding Machine' },
  { image: '/src/assets/Brands/Kannegiesser brand/317673_Rangemotiv_Halle_extend_POWER-DRY.jpg', name: 'Power-Dry' },
  { image: '/src/assets/Brands/Kannegiesser brand/317673_Rangemotiv_Halle_extend_POWERPRESS.jpg', name: 'Powerpress' },
  { image: '/src/assets/Brands/Kannegiesser brand/317673_Speedline_XFM_Halle.jpg', name: 'Speedline XFM' },
  { image: '/src/assets/Brands/Kannegiesser brand/321512_EMV_Halle.jpg', name: 'EMV Extraction' },
  { image: '/src/assets/Brands/Kannegiesser brand/331605_Kannegiesser_SFM_E_2022_in Halle.png', name: 'SFM E Folding' },
];

/* ── Maestrelli ── */
const maestrelliProducts = [
  { image: '/src/assets/Brands/MAESTRELLI brand/perc dry-cleaning machines.png', name: 'PERC Dry-Cleaning Machine' },
  { image: '/src/assets/Brands/MAESTRELLI brand/DREAMCLEAN MULTISOLVENT SOFT MOUNT.png', name: 'DreamClean Multisolvent Soft Mount' },
];

/* ── Maxipress ── */
const maxipressProducts = [
  { image: '/src/assets/Brands/maxipress brand/MP51- Laundry utility press.png', name: 'MP51 Laundry Utility Press' },
  { image: '/src/assets/Brands/maxipress brand/MP53- Laundry utility legger press.png', name: 'MP53 Laundry Utility Legger Press' },
  { image: '/src/assets/Brands/maxipress brand/MP54- Rectangular buck lauundry utility press.png', name: 'MP54 Rectangular Buck Laundry Utility Press' },
  { image: '/src/assets/Brands/maxipress brand/MP19- Mushroom topper press.png', name: 'MP19 Mushroom Topper Press' },
  { image: '/src/assets/Brands/maxipress brand/MPBBP- Bantom body press.png', name: 'MPBBP Bantam Body Press' },
  { image: '/src/assets/Brands/maxipress brand/MPBCY- Banton collar & cuff press.png', name: 'MPBCY Bantam Collar & Cuff Press' },
  { image: '/src/assets/Brands/maxipress brand/MPCCY- Triple head collar & cuff press.png', name: 'MPCCY Triple Head Collar & Cuff Press' },
  { image: '/src/assets/Brands/maxipress brand/MPCAFF-FORM FINISHER.png', name: 'MPCAFF Form Finisher' },
  { image: '/src/assets/Brands/maxipress brand/MPS42 MPS46- Drycleaning utility.png', name: 'MPS42 / MPS46 Drycleaning Utility' },
  { image: '/src/assets/Brands/maxipress brand/MP46SVB- STEAM- VACCUM BOARD.png', name: 'MP46SVB Steam Vacuum Board' },
  { image: '/src/assets/Brands/maxipress brand/MPSB- SPOTTING BOARD.png', name: 'MPSB Spotting Board' },
];

/* ── Master Catalog ── */
const brandsData = {
  'sea-lion': {
    slug: 'sea-lion',
    name: 'SEA-LION',
    tagline: 'Globally established for tunnel washers and ultra-efficient automation.',
    feature: 'Automation Systems',
    categories: ['Industrial Tunnel Washers', 'Automation Systems', 'Heavy Washer Extractors', 'Industrial Dryers'],
    specs: [
      { series: 'SDZ60-4C Conveyor', capacity: 'High-Yield Continuous', automation: 'Heavy Automation', tech: 'Water Recycling Frame' },
      { series: 'XGQ Extractor', capacity: '15kg – 130kg', automation: 'Programmable Logic', tech: 'High Extract Subsystem' },
      { series: 'HGQ Dryer', capacity: '15kg – 150kg', automation: 'Sensor Controlled', tech: 'Thermal Efficiency Path' },
    ],
    products: seaLionProducts,
  },

  'kannegiesser': {
    slug: 'kannegiesser',
    name: 'KANNEGIESSER',
    tagline: 'Global Leader in Integrated Laundry Technology.',
    feature: 'Integrated Systems',
    categories: ['Batch Washers', 'Extraction Technologies', 'Drying Systems', 'Flatwork Finishing'],
    specs: [
      { series: 'PowerTrans', capacity: 'High Volume', automation: 'Fully Integrated', tech: 'Active Drop Technology' },
      { series: 'PowerPress', capacity: 'Heavy Duty', automation: 'Pneumatic System', tech: 'Top Drainage' },
      { series: 'PowerDry', capacity: 'Industrial', automation: 'Sensor Controlled', tech: 'Infrared Tech' },
    ],
    products: kannegiesserProducts,
  },

  'maestrelli': {
    slug: 'maestrelli',
    name: 'MAESTRELLI',
    tagline: 'Italian precision in PERC dry-cleaning systems and garment care.',
    feature: 'Eco-Engineering',
    categories: ['Multi-Solvent Dry Cleaning', 'Hydrocarbon Systems', 'Italian Eco-Engineering Equipment'],
    specs: [
      { series: 'Dream Series (PERC)', capacity: '10kg – 40kg', automation: 'Fully Auto Microprocessor', tech: 'Closed Circuit Distillation' },
      { series: 'Multi-Solvent (Xelle Series)', capacity: '15kg – 25kg', automation: 'Multi-Solvent Ready', tech: 'Inverter Driven Centrifuge' },
    ],
    products: maestrelliProducts,
  },

  'maxipress': {
    slug: 'maxipress',
    name: 'MAXIPRESS',
    tagline: 'High-pressure garment finishing and commercial steam presses.',
    feature: 'Steam Ironing Tables',
    categories: ['High-Pressure Garment Finishing', 'Steam Ironing Tables', 'Utility Presses', 'Form Finishers'],
    specs: [
      { series: 'MP Utility Press', capacity: 'High Output', automation: 'Pneumatic Actuation', tech: 'Polished Head Pressure' },
      { series: 'MF Form Finisher', capacity: 'Multi-Garment', automation: 'Timer Controlled', tech: 'Updraft Steam Flow' },
    ],
    products: maxipressProducts,
  },
};

export default brandsData;
