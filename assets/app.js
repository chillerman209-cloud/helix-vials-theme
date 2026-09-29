(function () {
  const BASE = (window.HELIX && window.HELIX.base) || "";
  const CONTACT = {
    email: "cpeptidessales@gmail.com",
    whatsapp: "@pepti.vault",
    whatsappUrl: "https://wa.me/pepti.vault",
    btc: "bc1qx2kppcumm9ynn7yer05etvmzh05eyxumvzgffs",
    square: "https://square.link/u/WT11e3Lk",
  };
  const RESEARCH = "Laboratory research only. Not for human use, veterinary use, diagnostic use, or clinical application.";
  const SHIPPING = [
    { id: "standard", label: "Standard", window: "3–7 days", price: 10 },
    { id: "expedited", label: "Expedited", window: "2–4 days", price: 15 },
    { id: "nextday", label: "Next day", window: "1–2 days", price: 45 },
  ];
  const FEE = 2;
  const STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
  const COUNTRIES = ["United States","Canada","United Kingdom","Australia","Germany","France","Netherlands","Sweden","Norway","Denmark","Ireland","New Zealand","Mexico","Japan","Singapore"];
  const reta = BASE + "/coa/retatrutide.pdf";
  const PRODUCTS = [
    { id: "retatrutide", name: "Retatrutide", category: "Metabolic", image: "reta-10-w.jpg", form: "Lyophilized peptide", blurb: "Retatrutide research analog. On hand in 10 mg, 12 mg, 20 mg, 30 mg, 40 mg, and 48 mg. All sizes share one lot certificate.", variants: [{ sku: "RT10", mass: "10mg", price: 60, list: 60, stock: 10, purity: "—", net: "See lot file", image: "reta-10-w.jpg", coa: BASE + "/coa/retatrutide.pdf" }, { sku: "RT12", mass: "12mg", price: 75, list: 75, stock: 10, purity: "—", net: "—", image: "reta-12-w.jpg", coa: BASE + "/coa/retatrutide.pdf" }, { sku: "RT20", mass: "20mg", price: 102, list: 102, stock: 10, purity: "99.99%", net: "23.24 mg", image: "reta-20-w.jpg", coa: BASE + "/coa/retatrutide.pdf" }, { sku: "RT30", mass: "30mg", price: 136, list: 136, stock: 10, purity: "—", net: "—", image: "reta-30-w.jpg", coa: BASE + "/coa/retatrutide.pdf" }, { sku: "RT40", mass: "40mg", price: 172, list: 172, stock: 10, purity: "99.94%", net: "42.29 mg", image: "reta-40-w.jpg", coa: BASE + "/coa/retatrutide.pdf" }, { sku: "RT48", mass: "48mg", price: 200, list: 200, stock: 10, purity: "—", net: "—", image: "reta-48-w.jpg", coa: BASE + "/coa/retatrutide.pdf" }] },
    { id: "tirzepatide", name: "Tirzepatide", category: "Metabolic", image: "gold.jpg", form: "Lyophilized peptide", blurb: "Tirzepatide research analog. Not in the current lot. Back order.", variants: [{ sku: "TR20", mass: "20mg", price: 90, list: 90, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }, { sku: "TR40", mass: "40mg", price: 180, list: 180, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }] },
    { id: "semaglutide", name: "Semaglutide", category: "Metabolic", image: "peach.jpg", form: "Lyophilized peptide", blurb: "Semaglutide research analog. Not in the current lot. Back order. Genpeptide lists 10 mg at $45, so 20 mg is $90 and 40 mg is $180.", variants: [{ sku: "SG20", mass: "20mg", price: 90, list: 90, stock: 0, purity: "—", net: "—", image: "peach.jpg", coa: null }, { sku: "SG40", mass: "40mg", price: 180, list: 180, stock: 0, purity: "—", net: "—", image: "peach.jpg", coa: null }] },
    { id: "cagrilintide", name: "Cagrilintide", category: "Metabolic", image: "cagrilintide-w.jpg", form: "Lyophilized peptide", blurb: "Cagrilintide research analog. Genpeptide lists 5 mg at $40.", variants: [{ sku: "CG5", mass: "5mg", price: 40, list: 40, stock: 0, purity: "—", net: "—", image: "cagrilintide-w.jpg", coa: null }, { sku: "CG10", mass: "10mg", price: 80, list: 80, stock: 0, purity: "—", net: "—", image: "cagrilintide-w.jpg", coa: null }] },
    { id: "reta-tirz", name: "Retatrutide + Tirzepatide", category: "Blends", image: "reta-40-w.jpg", form: "Lyophilized blend", blurb: "60 mg research blend of retatrutide and tirzepatide. Not in the current lot.", variants: [{ sku: "RET60", mass: "60mg", price: 230, list: 230, stock: 0, purity: "—", net: "—", image: "reta-40-w.jpg", coa: null }] },
    { id: "klow", name: "KLOW 80", category: "Blends", image: "klow-80-w.jpg", form: "Lyophilized blend", blurb: "KLOW 80 research blend of GHK-Cu, KPV, TB-500, and BPC-157. In stock. Genpeptide lists this blend at $88.", variants: [{ sku: "BBKG80", mass: "80mg", price: 88, list: 88, stock: 10, purity: "99.94%", net: "GHK-Cu 59.37 · KPV 12.80 · TB-500 12.63 · BPC-157 14.53 mg", image: "klow-80-w.jpg", coa: BASE + "/coa/klow-80mg.pdf" }] },
    { id: "glow", name: "GLOW 70", category: "Blends", image: "glow-70-w.jpg", form: "Lyophilized blend", blurb: "GLOW 70 research blend of GHK-Cu, BPC-157, and TB-500. In stock.", variants: [{ sku: "GLOW70", mass: "70mg", price: 73, list: 73, stock: 10, purity: ">99.50%", net: "GHK-Cu 55.71 · BPC-157 11.42 · TB-500 12.17 mg", image: "glow-70-w.jpg", coa: BASE + "/coa/glow-70-1.jpg", coa2: BASE + "/coa/glow-70-2.jpg" }] },
    { id: "bpc-tb", name: "BPC-157 + TB-500 (Wolverine)", category: "Blends", image: "bpc-tb-w.jpg", form: "Lyophilized blend", blurb: "Also called Wolverine. The 10 mg + 10 mg blend is in stock. Genpeptide lists that size at $75.", variants: [{ sku: "BT1010", mass: "10mg + 10mg", price: 75, list: 75, stock: 10, purity: ">99.80%", net: "BPC-157 10.20 / 9.83 / 10.09 mg · TB-500 10.45 / 10.32 / 10.45 mg", image: "bpc-tb-w.jpg", coa: BASE + "/coa/bpc-tb-10-1.jpg" }] },
    { id: "cjc-ipa", name: "CJC-1295 (no DAC) + Ipamorelin", category: "Blends", image: "cjc-ipa-w.jpg", form: "Lyophilized blend", blurb: "The 10 mg + 10 mg blend is in stock.", variants: [{ sku: "CP10", mass: "10mg + 10mg", price: 85, list: 85, stock: 10, purity: "99.90%", net: "Ipamorelin 11.69 mg · CJC-1295 13.26 mg", image: "cjc-ipa-w.jpg", coa: BASE + "/coa/cjc-ipamorelin.pdf" }] },
    { id: "tesa-ipa", name: "Tesamorelin + Ipamorelin", category: "Blends", image: "tesa-ipa-w.jpg", form: "Lyophilized blend", blurb: "Tesamorelin 10 mg plus Ipamorelin 5 mg is in stock.", variants: [{ sku: "TI115", mass: "10mg + 5mg", price: 85, list: 85, stock: 10, purity: "99.66%", net: "Ipamorelin 5.43 mg · Tesamorelin 11.22 mg", image: "tesa-ipa-w.jpg", coa: BASE + "/coa/tesamorelin-ipamorelin.pdf" }] },
    { id: "semax-selank", name: "Semax + Selank", category: "Blends", image: "ivory.jpg", form: "Lyophilized blend", blurb: "Semax 10 mg plus Selank 10 mg. Genpeptide lists the N-acetyl amidate blend at $90.", variants: [{ sku: "SXS10", mass: "10mg + 10mg", price: 90, list: 90, stock: 0, purity: "—", net: "—", image: "ivory.jpg", coa: null }] },
    { id: "bpc-157", name: "BPC-157", category: "Repair", image: "bpc-157-w.jpg", form: "Lyophilized peptide", blurb: "BPC-157 research peptide. Genpeptide lists 10 mg at $35. Not in the current lot.", variants: [{ sku: "BPC5", mass: "5mg", price: 18, list: 18, stock: 0, purity: "—", net: "—", image: "bpc-157-w.jpg", coa: null }, { sku: "BPC10", mass: "10mg", price: 35, list: 35, stock: 0, purity: "—", net: "—", image: "bpc-157-w.jpg", coa: null }] },
    { id: "tb500", name: "TB-500", category: "Repair", image: "tb500-w.jpg", form: "Lyophilized peptide", blurb: "TB-500 research peptide. Genpeptide lists 10 mg at $45. Not in the current lot.", variants: [{ sku: "TB5", mass: "5mg", price: 22, list: 22, stock: 0, purity: "—", net: "—", image: "tb500-w.jpg", coa: null }, { sku: "TB10", mass: "10mg", price: 45, list: 45, stock: 0, purity: "—", net: "—", image: "tb500-w.jpg", coa: null }] },
    { id: "ghk-cu", name: "GHK-Cu", category: "Copper peptides", image: "ghk-cu-w.jpg", form: "Lyophilized peptide", blurb: "GHK-Cu research peptide. Genpeptide lists 50 mg at $30.", variants: [{ sku: "CU50", mass: "50mg", price: 30, list: 30, stock: 0, purity: "—", net: "—", image: "ghk-cu-w.jpg", coa: null }, { sku: "CU100", mass: "100mg", price: 60, list: 60, stock: 0, purity: "—", net: "—", image: "ghk-cu-w.jpg", coa: null }] },
    { id: "ahk-cu", name: "AHK-Cu", category: "Copper peptides", image: "blue.jpg", form: "Lyophilized peptide", blurb: "AHK-Cu research peptide. Priced from Genpeptide's GHK-Cu 50 mg listing.", variants: [{ sku: "AU100", mass: "100mg", price: 60, list: 60, stock: 0, purity: "—", net: "—", image: "blue.jpg", coa: null }] },
    { id: "ipamorelin", name: "Ipamorelin", category: "GHRP", image: "ipamorelin-w.jpg", form: "Lyophilized peptide", blurb: "Ipamorelin research peptide. Genpeptide lists 10 mg at $40.", variants: [{ sku: "IP5", mass: "5mg", price: 20, list: 20, stock: 0, purity: "—", net: "—", image: "ipamorelin-w.jpg", coa: null }, { sku: "IP10", mass: "10mg", price: 40, list: 40, stock: 0, purity: "—", net: "—", image: "ipamorelin-w.jpg", coa: null }] },
    { id: "cjc-dac", name: "CJC-1295 (with DAC)", category: "GHRH", image: "cjc-w.jpg", form: "Lyophilized peptide", blurb: "CJC-1295 with DAC. Genpeptide lists the no-DAC 5 mg vial at $35. With-DAC sizes use that price times the sheet's with-DAC premium.", variants: [{ sku: "CD5", mass: "5mg", price: 72, list: 72, stock: 0, purity: "—", net: "—", image: "cjc-w.jpg", coa: null }, { sku: "CD10", mass: "10mg", price: 119, list: 119, stock: 0, purity: "—", net: "—", image: "cjc-w.jpg", coa: null }] },
    { id: "cjc-nodac", name: "CJC-1295 (no DAC)", category: "GHRH", image: "cjc-w.jpg", form: "Lyophilized peptide", blurb: "CJC-1295 without DAC. Genpeptide lists 5 mg at $35.", variants: [{ sku: "CND5", mass: "5mg", price: 35, list: 35, stock: 0, purity: "—", net: "—", image: "cjc-w.jpg", coa: null }, { sku: "CND10", mass: "10mg", price: 70, list: 70, stock: 0, purity: "—", net: "—", image: "cjc-w.jpg", coa: null }] },
    { id: "tesamorelin", name: "Tesamorelin", category: "GHRH", image: "tesa-10-w.jpg", form: "Lyophilized peptide", blurb: "Tesamorelin on hand is 10 mg only. Genpeptide lists 10 mg at $55.", variants: [{ sku: "TSM10", mass: "10mg", price: 55, list: 55, stock: 10, purity: "99.47%", net: "10.03 / 10.13 / 9.24 mg", image: "tesa-10-w.jpg", coa: BASE + "/coa/tesamorelin-10-1.jpg", coa2: BASE + "/coa/tesamorelin-10-2.jpg" }] },
    { id: "sermorelin", name: "Sermorelin", category: "GHRH", image: "sermorelin-w.jpg", form: "Lyophilized peptide", blurb: "Sermorelin research peptide. Genpeptide lists 5 mg at $50.", variants: [{ sku: "SM5", mass: "5mg", price: 50, list: 50, stock: 0, purity: "—", net: "—", image: "sermorelin-w.jpg", coa: null }, { sku: "SM10", mass: "10mg", price: 100, list: 100, stock: 0, purity: "—", net: "—", image: "sermorelin-w.jpg", coa: null }] },
    { id: "mots-c", name: "MOTS-c", category: "Mitochondrial", image: "mots-20-w.jpg", form: "Lyophilized peptide", blurb: "MOTS-c on hand is 20 mg. Genpeptide lists 10 mg at $45, so this vial is $90.", variants: [{ sku: "MS20", mass: "20mg", price: 90, list: 90, stock: 10, purity: "99.78%", net: "23.84 mg", image: "mots-20-w.jpg", coa: BASE + "/coa/mots-c-20mg.pdf" }] },
    { id: "ss31", name: "SS-31", category: "Mitochondrial", image: "ss31-w.jpg", form: "Lyophilized peptide", blurb: "SS-31 research peptide. Genpeptide lists 30 mg at $90.", variants: [{ sku: "SS10", mass: "10mg", price: 30, list: 30, stock: 0, purity: "—", net: "—", image: "ss31-w.jpg", coa: null }, { sku: "SS50", mass: "50mg", price: 150, list: 150, stock: 0, purity: "—", net: "—", image: "ss31-w.jpg", coa: null }] },
    { id: "nad", name: "NAD+", category: "Metabolic", image: "nad-500-w.jpg", form: "Lyophilized reagent", blurb: "NAD+ on hand is 500 mg only. Genpeptide lists buffered 500 mg at $55.", variants: [{ sku: "NJ500", mass: "500mg", price: 55, list: 55, stock: 10, purity: "99.88%", net: "524.52 mg", image: "nad-500-w.jpg", coa: BASE + "/coa/nad-500mg.pdf" }] },
    { id: "bac-water", name: "BAC Water", category: "Reagents", image: "bac-10-w.jpg", form: "Clear liquid", blurb: "Bacteriostatic water, 10 mL, in stock. Genpeptide lists this size at $15.", variants: [{ sku: "BAC10", mass: "10mL", price: 15, list: 15, stock: 30, purity: "99.88%", net: "0.87% benzyl alcohol", image: "bac-10-w.jpg", coa: BASE + "/coa/bac-water-10ml.pdf" }] },
    { id: "acetic", name: "Acetic Acid Water 0.6%", category: "Reagents", image: "clear.jpg", form: "Clear liquid", blurb: "0.6% acetic acid research water. Priced from Genpeptide bacteriostatic water.", variants: [{ sku: "AA3", mass: "3mL", price: 4, list: 4, stock: 0, purity: "—", net: "—", image: "clear.jpg", coa: null }, { sku: "AA10", mass: "10mL", price: 15, list: 15, stock: 0, purity: "—", net: "—", image: "clear.jpg", coa: null }] },
    { id: "aod9604", name: "AOD9604", category: "Metabolic", image: "white.jpg", form: "Lyophilized peptide", blurb: "AOD9604 research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "AD5", mass: "5mg", price: 39, list: 39, stock: 0, purity: "—", net: "—", image: "white.jpg", coa: null }, { sku: "AD10", mass: "10mg", price: 74, list: 74, stock: 0, purity: "—", net: "—", image: "white.jpg", coa: null }] },
    { id: "dsip", name: "DSIP", category: "Neuropeptides", image: "dsip-w.jpg", form: "Lyophilized peptide", blurb: "DSIP research peptide. Genpeptide lists 10 mg at $45.", variants: [{ sku: "DS5", mass: "5mg", price: 22, list: 22, stock: 0, purity: "—", net: "—", image: "dsip-w.jpg", coa: null }, { sku: "DS10", mass: "10mg", price: 45, list: 45, stock: 0, purity: "—", net: "—", image: "dsip-w.jpg", coa: null }] },
    { id: "epithalon", name: "Epithalon", category: "Longevity", image: "epithalon-w.jpg", form: "Lyophilized peptide", blurb: "Epithalon research peptide. Genpeptide lists 10 mg at $35.", variants: [{ sku: "ET10", mass: "10mg", price: 35, list: 35, stock: 0, purity: "—", net: "—", image: "epithalon-w.jpg", coa: null }, { sku: "ET50", mass: "50mg", price: 175, list: 175, stock: 0, purity: "—", net: "—", image: "epithalon-w.jpg", coa: null }] },
    { id: "foxo4", name: "FOXO4-DRI", category: "Longevity", image: "gray.jpg", form: "Lyophilized peptide", blurb: "FOXO4-DRI research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "F410", mass: "10mg", price: 252, list: 252, stock: 0, purity: "—", net: "—", image: "gray.jpg", coa: null }] },
    { id: "glutathione", name: "Glutathione", category: "Longevity", image: "ivory.jpg", form: "Lyophilized reagent", blurb: "Glutathione research reagent. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "GT600", mass: "600mg", price: 30, list: 30, stock: 0, purity: "—", net: "—", image: "ivory.jpg", coa: null }, { sku: "GT1500", mass: "1500mg", price: 48, list: 48, stock: 0, purity: "—", net: "—", image: "ivory.jpg", coa: null }] },
    { id: "kpv", name: "KPV", category: "Copper peptides", image: "blue.jpg", form: "Lyophilized peptide", blurb: "KPV research peptide. Genpeptide lists 10 mg at $40.", variants: [{ sku: "KP5", mass: "5mg", price: 20, list: 20, stock: 0, purity: "—", net: "—", image: "blue.jpg", coa: null }, { sku: "KP10", mass: "10mg", price: 40, list: 40, stock: 0, purity: "—", net: "—", image: "blue.jpg", coa: null }] },
    { id: "melanotan-2", name: "Melanotan II", category: "Neuropeptides", image: "peach.jpg", form: "Lyophilized peptide", blurb: "Melanotan II research peptide. Genpeptide lists 10 mg at $30.", variants: [{ sku: "MT2", mass: "10mg", price: 30, list: 30, stock: 0, purity: "—", net: "—", image: "peach.jpg", coa: null }] },
    { id: "snap-8", name: "Snap-8", category: "Copper peptides", image: "white.jpg", form: "Lyophilized peptide", blurb: "Snap-8 research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "NP810", mass: "10mg", price: 48, list: 48, stock: 0, purity: "—", net: "—", image: "white.jpg", coa: null }] },
    { id: "kisspeptin", name: "Kisspeptin", category: "GHRP", image: "gold.jpg", form: "Lyophilized peptide", blurb: "Kisspeptin research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "KS5", mass: "5mg", price: 25, list: 25, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }, { sku: "KS10", mass: "10mg", price: 78, list: 78, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }] },
    { id: "selank", name: "Selank", category: "Neuropeptides", image: "clear.jpg", form: "Lyophilized peptide", blurb: "Selank research peptide. Genpeptide lists the N-acetyl amidate 10 mg at $35.", variants: [{ sku: "SK5", mass: "5mg", price: 18, list: 18, stock: 0, purity: "—", net: "—", image: "clear.jpg", coa: null }, { sku: "SK10", mass: "10mg", price: 35, list: 35, stock: 0, purity: "—", net: "—", image: "clear.jpg", coa: null }] },
    { id: "semax", name: "Semax", category: "Neuropeptides", image: "ivory.jpg", form: "Lyophilized peptide", blurb: "Semax research peptide. Genpeptide lists the N-acetyl amidate 10 mg at $35.", variants: [{ sku: "SX5", mass: "5mg", price: 18, list: 18, stock: 0, purity: "—", net: "—", image: "ivory.jpg", coa: null }, { sku: "SX10", mass: "10mg", price: 35, list: 35, stock: 0, purity: "—", net: "—", image: "ivory.jpg", coa: null }] },
    { id: "amino-1mq", name: "5-Amino-1MQ", category: "Metabolic", image: "gold.jpg", form: "Lyophilized compound", blurb: "5-Amino-1MQ. Genpeptide lists 50 mg at $68.", variants: [{ sku: "AM5", mass: "5mg", price: 7, list: 7, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }, { sku: "AM50", mass: "50mg", price: 68, list: 68, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }] },
    { id: "thymosin-alpha", name: "Thymosin Alpha 1", category: "Immune", image: "white.jpg", form: "Lyophilized peptide", blurb: "Thymosin alpha-1. Genpeptide lists 10 mg at $50.", variants: [{ sku: "TA5", mass: "5mg", price: 25, list: 25, stock: 0, purity: "—", net: "—", image: "white.jpg", coa: null }, { sku: "TA10", mass: "10mg", price: 50, list: 50, stock: 0, purity: "—", net: "—", image: "white.jpg", coa: null }] },
    { id: "thymalin", name: "Thymalin", category: "Immune", image: "gray.jpg", form: "Lyophilized peptide", blurb: "Thymalin research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "TY10", mass: "10mg", price: 31, list: 31, stock: 0, purity: "—", net: "—", image: "gray.jpg", coa: null }] },
    { id: "pt141", name: "PT-141", category: "Neuropeptides", image: "peach.jpg", form: "Lyophilized peptide", blurb: "PT-141 research peptide. Genpeptide lists 10 mg at $33.", variants: [{ sku: "PT10", mass: "10mg", price: 33, list: 33, stock: 0, purity: "—", net: "—", image: "peach.jpg", coa: null }] },
    { id: "igf", name: "IGF-1 LR3", category: "Hormones", image: "blue.jpg", form: "Lyophilized peptide", blurb: "IGF-1 LR3. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "IG1", mass: "1mg", price: 103, list: 103, stock: 0, purity: "—", net: "—", image: "blue.jpg", coa: null }] },
    { id: "hgh", name: "HGH 191AA", category: "Hormones", image: "ivory.jpg", form: "Lyophilized peptide", blurb: "HGH 191 amino acid, 36 IU. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "HGH36", mass: "36IU", price: 81, list: 81, stock: 0, purity: "—", net: "—", image: "ivory.jpg", coa: null }] },
    { id: "hcg", name: "HCG", category: "Hormones", image: "white.jpg", form: "Lyophilized peptide", blurb: "HCG 5000 IU. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "HCG5", mass: "5000IU", price: 38, list: 38, stock: 0, purity: "—", net: "—", image: "white.jpg", coa: null }] },
    { id: "hgh-frag", name: "HGH 10000 IU", category: "Hormones", image: "gray.jpg", form: "Lyophilized peptide", blurb: "HGH 10000 IU from the sheet. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "HG10", mass: "10000IU", price: 65, list: 65, stock: 0, purity: "—", net: "—", image: "gray.jpg", coa: null }] },
    { id: "vip", name: "VIP", category: "Neuropeptides", image: "gold.jpg", form: "Lyophilized peptide", blurb: "VIP research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "VP10", mass: "10mg", price: 81, list: 81, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }] },
    { id: "adamax", name: "Adamax", category: "Neuropeptides", image: "peach.jpg", form: "Lyophilized peptide", blurb: "Adamax research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "AX5", mass: "5mg", price: 44, list: 44, stock: 0, purity: "—", net: "—", image: "peach.jpg", coa: null }, { sku: "AX10", mass: "10mg", price: 61, list: 61, stock: 0, purity: "—", net: "—", image: "peach.jpg", coa: null }] },
    { id: "lipo-c", name: "Lipo-C", category: "Metabolic", image: "clear.jpg", form: "Liquid reagent", blurb: "Lipo-C 10 mL. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "LC10", mass: "10mL", price: 59, list: 59, stock: 0, purity: "—", net: "—", image: "clear.jpg", coa: null }] },
    { id: "carnitine", name: "L-Carnitine", category: "Metabolic", image: "clear.jpg", form: "Liquid reagent", blurb: "L-carnitine 1200 mg. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "LC1200", mass: "1200mg", price: 50, list: 50, stock: 0, purity: "—", net: "—", image: "clear.jpg", coa: null }] },
    { id: "lemon", name: "Lemon Bottle", category: "Metabolic", image: "gold.jpg", form: "Liquid reagent", blurb: "Lemon Bottle 10 mL. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "LB10", mass: "10mL", price: 28, list: 28, stock: 0, purity: "—", net: "—", image: "gold.jpg", coa: null }] },
    { id: "ara290", name: "ARA-290", category: "Repair", image: "blue.jpg", form: "Lyophilized peptide", blurb: "ARA-290 research peptide. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "ARA10", mass: "10mg", price: 40, list: 40, stock: 0, purity: "—", net: "—", image: "blue.jpg", coa: null }] },
    { id: "b12", name: "B12", category: "Reagents", image: "clear.jpg", form: "Liquid reagent", blurb: "B12 10 mL. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "B12", mass: "10mL", price: 21, list: 21, stock: 0, purity: "—", net: "—", image: "clear.jpg", coa: null }] },
    { id: "mic", name: "MIC (Lipo-C with B12)", category: "Metabolic", image: "ivory.jpg", form: "Liquid reagent", blurb: "MIC with Lipo-C and B12, 10 mL. Not listed on Genpeptide. Price is 4.5 times the per-vial sheet cost.", variants: [{ sku: "MIC10", mass: "10mL", price: 54, list: 54, stock: 0, purity: "—", net: "—", image: "ivory.jpg", coa: null }] }
  ];

  const KEY = "helix-vials-cart";
  let cart = load();
  let ui = { menu: false, drawer: false, filters: false, cat: "All", stock: "in", q: "", sort: "menu_order", minPrice: "", maxPrice: "", page: 1, note: {}, sku: {}, qty: {}, code: "", pay: "btc", sending: false, order: null, form: { email: "", phone: "", first: "", last: "", street: "", apt: "", city: "", state: "", zip: "", country: "United States", notes: "" }, error: "", couponNote: "" };

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "null");
      if (raw && Array.isArray(raw.lines)) return { lines: raw.lines, ship: raw.ship || "standard" };
    } catch (e) {}
    return { lines: [], ship: "standard" };
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(cart)); }
  function money(n) { return n.toLocaleString("en-US", { style: "currency", currency: "USD" }); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      if (c === "&") return "&" + "amp;";
      if (c === "<") return "&" + "lt;";
      if (c === ">") return "&" + "gt;";
      if (c === '"') return "&" + "quot;";
      return "&" + "#39;";
    });
  }
  function img(name) { return BASE + "/products/" + name; }
  function product(id) { return PRODUCTS.find(function (p) { return p.id === id; }); }
  function live(p) { return p.variants.some(function (v) { return v.stock > 0; }); }
  function variant(p, sku) { return p.variants.find(function (v) { return v.sku === sku; }) || p.variants[0]; }
  function count() { return priced().reduce(function (n, l) { return n + l.line.qty; }, 0); }
  function priced() {
    return cart.lines.map(function (l) {
      const p = product(l.productId);
      if (!p) return null;
      const v = variant(p, l.sku);
      return { line: l, p: p, v: v, total: v.price * l.qty };
    }).filter(function (row) { return row && row.v && row.v.stock > 0; });
  }
  function bill(applyPay) {
    const lines = priced();
    const items = lines.reduce(function (n, l) { return n + l.total; }, 0);
    const bitcoinOff = applyPay && ui.pay === "btc" && lines.length ? Math.round(items * 0.2 * 100) / 100 : 0;
    const listed = lines.length ? (SHIPPING.find(function (s) { return s.id === cart.ship; }) || SHIPPING[0]).price : 0;
    const freeShip = lines.length > 0 && items > 200;
    const shipping = freeShip ? 0 : listed;
    const protection = lines.length ? FEE : 0;
    const total = Math.round((items - bitcoinOff + shipping + protection) * 100) / 100;
    return { lines: lines, items: items, bitcoinOff: bitcoinOff, shipping: shipping, freeShip: freeShip, protection: protection, total: total };
  }
  function route() {
    const h = (location.hash || "#/").replace(/^#/, "");
    const parts = h.split("/").filter(Boolean);
    return { page: parts[0] || "home", id: parts[1] || "" };
  }
  function go(hash) { location.hash = hash; }

  function add(id, sku, qty) {
    const p = product(id);
    const v = p && variant(p, sku);
    if (!v || v.stock <= 0) return "That size is on back order and cannot be purchased.";
    const i = cart.lines.findIndex(function (l) { return l.productId === id && l.sku === sku; });
    const next = (i >= 0 ? cart.lines[i].qty : 0) + qty;
    if (i >= 0) cart.lines[i].qty = next;
    else cart.lines.push({ productId: id, sku: sku, qty: qty });
    save();
    return "Added to cart";
  }
  function setQty(id, sku, qty) {
    const p = product(id);
    const v = p && variant(p, sku);
    if (qty <= 0) cart.lines = cart.lines.filter(function (l) { return !(l.productId === id && l.sku === sku); });
    else cart.lines = cart.lines.map(function (l) { return l.productId === id && l.sku === sku ? { productId: id, sku: sku, qty: Math.min(qty, 99) } : l; });
    save();
  }

  function reach() {
    return '<a class="link" href="' + CONTACT.whatsappUrl + '" target="_blank" rel="noreferrer">' + CONTACT.whatsapp + '</a> or email <a class="link" href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a>';
  }
  function mark() {
    return '<svg class="mark" viewBox="0 0 48 72" aria-hidden="true"><g fill="none" stroke="#1E5333" stroke-width="3.4" stroke-linecap="round"><path d="M15 5C8 7 8 15 16 17C21 18 18 23 16 28C15.2 33 15.2 39 16 44C18 49 21 54 16 55C8 57 8 65 15 67"/><path d="M33 5C40 7 40 15 32 17C27 18 30 23 32 28C32.8 33 32.8 39 32 44C30 49 27 54 32 55C40 57 40 65 33 67"/><path d="M18.5 33H29.5"/><path d="M18.5 39H29.5"/></g></svg>';
  }
  function shell(body) {
    const r = route();
    const links = [["home","Home"],["shop","Shop"],["coa","COA"],["shipping","Shipping"],["contact","Contact"]];
    const nav = links.map(function (l) {
      const href = l[0] === "home" ? "#/" : "#/" + l[0];
      return '<a href="' + href + '" class="' + (r.page === l[0] ? "active" : "") + '">' + l[1] + "</a>";
    }).join("") + '<a class="wa" href="' + CONTACT.whatsappUrl + '" target="_blank" rel="noreferrer">WhatsApp</a><a class="wa" href="mailto:' + CONTACT.email + '">Email</a>';
    return '<div class="topbar">All purchases are finalized on WhatsApp <a href="' + CONTACT.whatsappUrl + '" target="_blank" rel="noreferrer" style="color:inherit">@pepti.vault</a> or <a href="mailto:' + CONTACT.email + '" style="color:inherit">' + CONTACT.email + '</a> · Bitcoin 20% off · Free shipping over $200</div>' +
      '<header class="header"><div class="wrap header-row">' +
      '<button class="iconbtn hamb" type="button" data-act="menu" aria-label="Menu">☰</button>' +
      '<a class="brand" href="#/">' + mark() + "Helix Vials</a>" +
      '<nav class="nav">' + nav + "</nav>" +
      '<form class="search" data-act="search"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5d675f" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input name="q" placeholder="Search peptides" value="' + esc(ui.q) + '"></form>' +
      '<button class="iconbtn" type="button" data-act="drawer" aria-label="Cart, ' + count() + ' items" style="margin-left:auto">Bag<span class="badge">' + count() + "</span></button>" +
      "</div>" + (ui.menu ? '<div class="wrap menu open">' + nav + "</div>" : "") + "</header>" +
      "<main>" + body + "</main>" +
      '<footer class="foot"><div class="wrap foot-grid"><div>' + mark() + '<strong> Helix Vials</strong><p class="muted">Research peptides and laboratory reagents. 99%+ HPLC where a lot certificate is published.</p><p><strong>For research use only</strong></p></div>' +
      '<div><h2 style="font-size:0.9rem">Quick links</h2><p><a href="#/">Home</a><br><a href="#/shop">Shop</a><br><a href="#/coa">COA library</a><br><a href="#/shipping">Shipping</a><br><a href="#/research">Research-use notice</a></p></div>' +
      '<div><h2 style="font-size:0.9rem">Get in touch</h2><p><a class="hi" href="' + CONTACT.whatsappUrl + '" target="_blank" rel="noreferrer">WhatsApp ' + CONTACT.whatsapp + '</a><br><a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a></p></div>" +
      '<div><h2 style="font-size:0.9rem">We accept</h2><p class="muted">Bitcoin, 20% off · Card on the Square link at checkout</p></div></div>' +
      '<div class="wrap legal">Disclaimer: All products on this website are intended for laboratory research and development use only. They are not medicines or supplements and are not for human or animal consumption. Nothing here has been evaluated by the U.S. Food and Drug Administration. Products are not intended to diagnose, treat, cure, or prevent any disease.</div></footer>' +
      (ui.drawer ? drawer() : "");
  }
  function drawer() {
    const b = bill();
    const lines = b.lines.map(function (l) {
      return '<div class="line" style="margin-bottom:1rem"><img src="' + img(l.v.image || l.p.image) + '" alt=""><div style="flex:1"><strong>' + esc(l.p.name) + '</strong><div class="tiny">' + esc(l.v.mass) + '</div><div class="qty"><button type="button" data-act="dec" data-id="' + l.p.id + '" data-sku="' + l.v.sku + '">−</button><span>' + l.line.qty + '</span><button type="button" data-act="inc" data-id="' + l.p.id + '" data-sku="' + l.v.sku + '">+</button></div></div><strong>' + money(l.total) + "</strong></div>";
    }).join("") || '<p class="muted">Your cart is empty.</p>';
    return '<div class="drawer-bg" data-act="close"></div><aside class="drawer"><div class="dh"><strong>Cart</strong><button class="iconbtn" type="button" data-act="close">✕</button></div><div style="padding:1rem;overflow:auto;flex:1">' + lines + '</div><div style="padding:1rem;border-top:1px solid var(--line)"><div style="display:flex;justify-content:space-between"><span class="muted">Subtotal</span><strong>' + money(b.items) + '</strong></div><a class="btn solid" style="width:100%;margin-top:0.75rem" href="#/checkout" data-act="gocheckout">Checkout</a></div></aside>';
  }
  function card(p) {
    const on = live(p);
    const chosen = ui.sku[p.id] || (p.variants.find(function (v) { return v.stock > 0; }) || p.variants[0]).sku;
    const v = variant(p, chosen);
    const sizes = p.variants.length > 1 ? '<label class="field">Size<select data-act="sku" data-id="' + p.id + '">' + p.variants.map(function (opt) {
      return '<option value="' + opt.sku + '"' + (opt.sku === v.sku ? " selected" : "") + ">" + esc(opt.mass) + " — " + money(opt.price) + (opt.stock > 0 ? "" : " back order") + "</option>";
    }).join("") + "</select></label>" : "";
    const ready = v.stock > 0;
    const price = '<div class="price">' + money(v.price) + "</div>";
    const cta = ready
      ? '<button class="btn ink" type="button" data-act="add" data-id="' + p.id + '" data-sku="' + v.sku + '">Add to cart</button>'
      : '<button class="btn ink" type="button" disabled>Back Order</button>';
    const coa = v.coa ? '<a class="link" href="' + v.coa + '" target="_blank" rel="noreferrer">View COA</a>' + (v.coa2 ? ' <a class="link" href="' + v.coa2 + '" target="_blank" rel="noreferrer">Page 2</a>' : "") : "";
    return '<article class="card"><a href="#/product/' + p.id + '"><img class="prod" src="' + img(v.image || p.image) + '" alt="' + esc(p.name + " " + v.mass) + '"></a><div class="pad"><h3><a href="#/product/' + p.id + '">' + esc(p.name) + "</a></h3>" +
      '<p class="tiny">' + esc(v.mass) + " · 99% purity</p>" +
      (price) + sizes +
      '<p class="tiny">' + RESEARCH + '</p><div class="actions">' + cta + coa + "</div>" +
      (ui.note[p.id] ? '<p class="note">' + esc(ui.note[p.id]) + "</p>" : "") + "</div></article>";
  }

  function home() {
    return '<section class="wrap hero"><div><p class="kicker">Home</p><h1>Research peptides, lot by lot.</h1><p class="muted">Helix Vials is the front door. The catalog, sizes, and prices live on their own shop page.</p><div class="row" style="margin-top:1.25rem"><a class="btn solid" href="#/shop">Enter the shop</a><a class="btn" href="#/research">Research-use notice</a></div></div><img class="shot" src="' + BASE + '/media/hero-vials.jpg" alt="Row of labeled research vials"></section>' +
      '<section class="trust"><div class="wrap trust-grid"><div class="box"><strong>1. Choose</strong><p class="muted">Leave this page and open the shop. Search by name and pick a size.</p></div><div class="box"><strong>2. Pay</strong><p class="muted">Card on the Square link, or Bitcoin with 20% off.</p></div><div class="box"><strong>3. Send</strong><p class="muted">WhatsApp opens with the invoice, cart, and address already written.</p></div></div></section>' +
      '<section class="wrap section" style="max-width:46rem"><p class="kicker">Common queries answered</p><h2>Frequently asked questions</h2><p class="muted">Quick answers to the questions researchers ask most. Don\'t see what you\'re looking for? Message ' + reach() + '.</p>' +
      '<details class="box" style="margin-top:0.75rem"><summary>How long does it take for me to receive my order?</summary><p class="tiny">Orders ship after payment is confirmed on WhatsApp or by email. Standard is 3–7 days, expedited is 2–4 days, and next day is 1–2 days. Orders over $200 ship free.</p></details>' +
      '<details class="box" style="margin-top:0.75rem"><summary>How do I change my shipping address?</summary><p class="tiny">If the order has not shipped, message us with the request number and the new address. Once it is packed and handed to the carrier, we cannot redirect it.</p></details>' +
      '<details class="box" style="margin-top:0.75rem"><summary>How do I track the status of my order?</summary><p class="tiny">After the order ships, the tracking number is sent on WhatsApp or by email. Message us if you do not see it.</p></details>' +
      '<details class="box" style="margin-top:0.75rem"><summary>How do I receive customer support?</summary><p class="tiny">Message ' + reach() + '. We reply on business days.</p></details>' +
      '<details class="box" style="margin-top:0.75rem"><summary>Do you ship to my country?</summary><p class="tiny">We currently ship within the United States only. International shipping is not available.</p></details>' +
      '<details class="box" style="margin-top:0.75rem"><summary>Will my items come in one package?</summary><p class="tiny">In most cases, yes. The order ships in one plain package. If a lot has to be split, you get a note on WhatsApp or by email.</p></details></section>';
  }
  function shop() {
    const needle = ui.q.trim().toLowerCase();
    const min = ui.minPrice === "" ? -Infinity : Number(ui.minPrice);
    const max = ui.maxPrice === "" ? Infinity : Number(ui.maxPrice);
    function low(p) { return Math.min.apply(null, p.variants.map(function (v) { return v.price; })); }
    function matchesStock(p) {
      const on = live(p);
      if (ui.stock === "in") return on;
      if (ui.stock === "out") return !on;
      return true;
    }
    const pool = PRODUCTS.filter(matchesStock);
    const cats = pool.map(function (p) { return p.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; });
    if (ui.cat !== "All" && cats.indexOf(ui.cat) < 0) ui.cat = "All";
    let items = pool.filter(function (p) {
      if (ui.cat !== "All" && p.category !== ui.cat) return false;
      if (!p.variants.some(function (v) { return v.price >= min && v.price <= max; })) return false;
      if (!needle) return true;
      return (p.name + " " + p.category + " " + p.variants.map(function (v) { return v.mass; }).join(" ")).toLowerCase().indexOf(needle) >= 0;
    });
    if (ui.sort === "price") items = items.slice().sort(function (a, b) { return low(a) - low(b); });
    else if (ui.sort === "price-desc") items = items.slice().sort(function (a, b) { return low(b) - low(a); });
    else if (ui.sort === "popularity") items = items.slice().sort(function (a, b) { return (live(b) ? 1 : 0) - (live(a) ? 1 : 0); });
    else if (ui.sort === "date") items = items.slice().reverse();
    const per = 16;
    const pages = Math.max(1, Math.ceil(items.length / per));
    if (ui.page > pages) ui.page = pages;
    if (ui.page < 1) ui.page = 1;
    const start = (ui.page - 1) * per;
    const slice = items.slice(start, start + per);
    const from = items.length ? start + 1 : 0;
    const to = Math.min(start + per, items.length);
    const catButtons = ['<li><button type="button" data-act="catpick" data-cat="All"' + (ui.cat === "All" ? ' class="on"' : "") + ">All <span class=\"count\">(" + pool.length + ")</span></button></li>"].concat(cats.map(function (c) {
      const n = pool.filter(function (p) { return p.category === c; }).length;
      return '<li><button type="button" data-act="catpick" data-cat="' + esc(c) + '"' + (ui.cat === c ? ' class="on"' : "") + ">" + esc(c) + ' <span class="count">(' + n + ")</span></button></li>";
    })).join("");
    const stockChoices = [["in", "In stock only", PRODUCTS.filter(live).length], ["out", "Back order", PRODUCTS.filter(function (p) { return !live(p); }).length], ["all", "All products", PRODUCTS.length]];
    const stockButtons = stockChoices.map(function (s) {
      return '<li><button type="button" data-act="stock" data-stock="' + s[0] + '"' + (ui.stock === s[0] ? ' class="on"' : "") + ">" + s[1] + ' <span class="count">(' + s[2] + ")</span></button></li>";
    }).join("");
    const sorts = [["menu_order", "Default sorting"], ["popularity", "Sort by popularity"], ["date", "Sort by latest"], ["price", "Sort by price: low to high"], ["price-desc", "Sort by price: high to low"]];
    const side = '<aside class="shop-side' + (ui.filters ? " open" : "") + '"><div class="widget"><h2>Availability</h2><ul class="cat-list">' + stockButtons + '</ul></div><div class="widget"><h2>Product categories</h2><ul class="cat-list">' + catButtons + '</ul></div><div class="widget"><h2>Filter by price</h2><form data-act="price" class="price-filter"><label class="field">Min price<input data-act="minp" type="number" min="0" step="1" placeholder="Min price" value="' + esc(ui.minPrice) + '"></label><label class="field">Max price<input data-act="maxp" type="number" min="0" step="1" placeholder="Max price" value="' + esc(ui.maxPrice) + '"></label><button class="btn solid" type="submit">Filter</button></form></div></aside>';
    let pager = "";
    if (pages > 1) {
      const nums = [];
      for (let i = 1; i <= pages; i++) nums.push('<li><button type="button" data-act="page" data-page="' + i + '"' + (i === ui.page ? ' class="current"' : "") + ">" + i + "</button></li>");
      pager = '<nav class="pager" aria-label="Product Pagination"><ul class="page-numbers">' + nums.join("") + "</ul></nav>";
    }
    return '<div class="wrap section"><p class="tiny">Catalog</p><h1>Shop</h1><p class="box">Every purchase is finalized by messaging ' + reach() + '. Add to cart, see your total, and submit the request. Bitcoin: send it, then say it was sent. Card: open the Square link on the confirmation page and enter that same total, then say it was paid.</p><div class="shop-layout">' + side + '<div><div class="shop-bar"><button class="btn' + (ui.stock === "in" ? " solid" : "") + '" type="button" data-act="stockonly" aria-pressed="' + (ui.stock === "in" ? "true" : "false") + '">In stock only</button><button class="btn filters-toggle" type="button" data-act="filters">' + (ui.filters ? "Hide filters" : "Show Filters") + '</button><label class="field sort-field">Shop order<select data-act="sort">' + sorts.map(function (s) { return '<option value="' + s[0] + '"' + (ui.sort === s[0] ? " selected" : "") + ">" + s[1] + "</option>"; }).join("") + '</select></label><p class="tiny result-count">Showing ' + from + "–" + to + " of " + items.length + ' results</p></div><div class="grid cards">' + (slice.length ? slice.map(card).join("") : '<p class="muted">No peptides match those filters.</p>') + "</div>" + pager + "</div></div></div>";
  }
  function productPage(id) {
    const p = product(id);
    if (!p) return '<div class="wrap section"><h1>Not in the catalog</h1><a class="link" href="#/shop">Back to shop</a></div>';
    const chosen = ui.sku[p.id] || (p.variants.find(function (v) { return v.stock > 0; }) || p.variants[0]).sku;
    const v = variant(p, chosen);
    const ready = v.stock > 0;
    const related = PRODUCTS.filter(function (x) { return x.id !== p.id && x.category === p.category; }).slice(0, 3).map(card).join("");
    const price = '<p class="price" style="font-size:1.6rem">' + money(v.price) + "</p>";
    return '<div class="wrap section"><p class="tiny"><a href="#/shop">Shop</a> / ' + esc(p.name) + '</p><div class="split" style="margin-top:1rem"><img class="shot" src="' + img(v.image || p.image) + '" alt="' + esc(p.name) + '"><div><p class="kicker">' + esc(p.category) + "</p><h1>" + esc(p.name) + "</h1><p>" + esc(v.mass) + ' · 99% purity</p>' + price + '<p class="muted">' + esc(p.blurb) + '</p><p><strong>' + RESEARCH + '</strong></p><label class="field" style="margin-top:1rem">Mass<select data-act="sku" data-id="' + p.id + '">' + p.variants.map(function (opt) {
      return '<option value="' + opt.sku + '"' + (opt.sku === v.sku ? " selected" : "") + ">" + esc(opt.mass) + " — " + money(opt.price) + (opt.stock > 0 ? "" : " back order") + "</option>";
    }).join("") + '</select></label><label class="field">Quantity<input type="number" min="1" max="99" value="' + (ui.qty[p.id] || 1) + '" data-act="qty" data-id="' + p.id + '"></label>' +
      '<div class="row" style="margin-top:1rem">' + (ready ? '<button class="btn solid" type="button" data-act="add" data-id="' + p.id + '" data-sku="' + v.sku + '">Add to cart</button>' : '<button class="btn solid" type="button" disabled>Back Order</button>') + (v.coa ? '<a class="btn" href="' + v.coa + '" target="_blank" rel="noreferrer">View COA</a>' : "") + (v.coa2 ? '<a class="btn" href="' + v.coa2 + '" target="_blank" rel="noreferrer">COA page 2</a>' : "") + "</div>" +
      (ui.note[p.id] ? '<p class="note">' + esc(ui.note[p.id]) + "</p>" : "") +
      "<table><tr><th>Form</th><td>" + esc(p.form) + "</td></tr><tr><th>Mass</th><td>" + esc(v.mass) + "</td></tr><tr><th>Purity</th><td>" + esc(v.purity) + "</td></tr><tr><th>Net content</th><td>" + esc(v.net) + "</td></tr><tr><th>Quality</th><td>HPLC lot certificate when linked</td></tr></table></div></div>" +
      (related ? '<h2 style="margin-top:2rem">Related</h2><div class="grid cards" style="margin-top:1rem">' + related + "</div>" : "") + "</div>";
  }
  function cartPage() {
    const b = bill();
    if (!b.lines.length) return '<div class="wrap section"><h1>Cart</h1><div class="box"><p class="muted">Nothing here yet.</p><a class="btn solid" href="#/shop">Shop</a></div></div>';
    const rows = b.lines.map(function (l) {
      return '<div class="line" style="padding:1rem 0;border-top:1px solid var(--line)"><img src="' + img(l.v.image || l.p.image) + '" alt=""><div style="flex:1"><strong>' + esc(l.p.name) + '</strong><div class="tiny">' + esc(l.v.mass) + " · " + money(l.v.price) + '</div><div class="qty"><button type="button" data-act="dec" data-id="' + l.p.id + '" data-sku="' + l.v.sku + '">−</button><span>' + l.line.qty + '</span><button type="button" data-act="inc" data-id="' + l.p.id + '" data-sku="' + l.v.sku + '">+</button><button type="button" data-act="remove" data-id="' + l.p.id + '" data-sku="' + l.v.sku + '" style="border:0;background:none;text-decoration:underline;color:var(--muted)">Remove</button></div></div><strong>' + money(l.total) + "</strong></div>";
    }).join("");
    return '<div class="wrap section"><h1>Cart</h1><p class="box">This cart is a request, not a payment. Submit it at checkout and the order is emailed to Helix Vials. Every purchase is finalized by messaging ' + reach() + '.</p><div class="split"><div>' + rows + '</div><aside class="box"><div style="display:flex;justify-content:space-between"><span class="muted">Items</span><strong>' + money(b.items) + '</strong></div><p class="tiny">Free shipping on orders over $200. Bitcoin is 20% off at checkout. Card payments use the Square link and the customer enters the order total. Nothing is final until you message ' + reach() + '.</p><a class="btn solid" href="#/checkout" style="width:100%">Checkout</a></aside></div></div>';
  }
  function field(label, key, type, auto) {
    return '<label class="field">' + label + '<input ' + (key === "apt" || key === "notes" ? "" : "required") + ' type="' + (type || "text") + '"' + (auto ? ' autocomplete="' + auto + '"' : "") + ' data-form="' + key + '" value="' + esc(ui.form[key] || "") + '"></label>';
  }
  function invoiceId() {
    const d = new Date();
    const stamp = d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2);
    const n = String(Math.floor(1000 + Math.random() * 9000));
    return "INV-" + stamp + "-" + n;
  }
  function clock(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  function tidyZip(value) {
    const digits = String(value || "").replace(/\D/g, "");
    if (digits.length >= 9) return digits.slice(0, 5) + "-" + digits.slice(5, 9);
    if (digits.length >= 5) return digits.slice(0, 5);
    return String(value || "").trim();
  }
  function titleCase(value) {
    const suffix = { st: "Street", str: "Street", ave: "Avenue", av: "Avenue", blvd: "Boulevard", dr: "Drive", ln: "Lane", rd: "Road", ct: "Court", pl: "Place", cir: "Circle", hwy: "Highway", pkwy: "Parkway", ter: "Terrace", trl: "Trail" };
    return String(value || "").trim().replace(/\./g, "").replace(/\s+/g, " ").split(" ").filter(Boolean).map(function (word) {
      const key = word.toLowerCase();
      if (suffix[key]) return suffix[key];
      if (/^(nw|ne|sw|se|po|ii|iii|iv)$/.test(key)) return word.toUpperCase();
      if (/^\d/.test(word)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
  }
  function correctFormAddress() {
    let street = titleCase(ui.form.street);
    let city = titleCase(ui.form.city);
    let state = String(ui.form.state || "").trim().toUpperCase();
    let zip = tidyZip(ui.form.zip);
    const pasted = String(ui.form.street || "").match(/^(.+?),\s*([^,]+),\s*([A-Za-z]{2})\s+(\d{5}(?:-\d{4})?)\s*$/);
    if (pasted) {
      street = titleCase(pasted[1]);
      city = titleCase(pasted[2]);
      state = pasted[3].toUpperCase();
      zip = tidyZip(pasted[4]);
    }
    const query = [street, city, state, zip].filter(Boolean).join(", ");
    function apply(next) {
      ui.form.street = next.street;
      ui.form.apt = titleCase(ui.form.apt);
      ui.form.city = next.city;
      ui.form.state = STATES.indexOf(next.state) >= 0 ? next.state : ui.form.state;
      ui.form.zip = next.zip;
      ui.lastAddress = [ui.form.street, ui.form.city, ui.form.state, ui.form.zip].join("|");
      ui.keep = true;
      view();
      ui.addressLock = false;
    }
    if (query.length < 8) { apply({ street: street, city: city, state: state, zip: zip }); return; }
    fetch("https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=" + encodeURIComponent(query) + "&benchmark=4&format=json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        const parts = data && data.result && data.result.addressMatches && data.result.addressMatches[0] && data.result.addressMatches[0].addressComponents;
        if (!parts) { apply({ street: street, city: city, state: state, zip: zip }); return; }
        const line = [parts.fromAddress, parts.preDirection, parts.streetName, parts.suffixType, parts.suffixDirection].filter(Boolean).join(" ");
        apply({
          street: titleCase(line || street),
          city: titleCase(parts.city || city),
          state: String(parts.state || state).toUpperCase(),
          zip: tidyZip(parts.zip || zip),
        });
      })
      .catch(function () { apply({ street: street, city: city, state: state, zip: zip }); });
  }
  function mailBox(o) {
    if (o.emailed) return '<div class="box" style="text-align:left;margin-top:1rem"><strong>Order received</strong><p class="tiny">Your order will be sent after payment is verified. A tracking number will be included. Invoice ' + esc(o.id) + '.</p></div>';
    return '<div class="box" style="text-align:left;margin-top:1rem"><strong>Send this order on WhatsApp</strong><p class="tiny">After you pay, tap the button. WhatsApp opens with the cart, invoice, and address already written. Hit send there. Nothing is emailed.</p><button class="btn solid" type="button" data-act="sendwa" style="width:100%">Send order on WhatsApp</button></div>';
  }
  function checkout() {
    if (ui.order) {
      const o = ui.order;
      const left = ui.payUntil ? Math.max(0, Math.ceil((ui.payUntil - Date.now()) / 1000)) : 0;
      const expired = left <= 0;
      const wa = CONTACT.whatsappUrl + "?text=" + encodeURIComponent(o.text);
      const mail = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(o.id) + "&body=" + encodeURIComponent(o.text);
      if (o.pay === "btc") {
        return '<div class="wrap section" style="max-width:34rem"><div class="box" style="text-align:center;padding:2rem"><p class="kicker">Helix Vials · Bitcoin</p><h1>' + (expired ? "Payment window closed" : "Send Bitcoin") + '</h1><p class="tiny">Invoice ' + esc(o.id) + '</p><p style="font-size:2.4rem;font-weight:700;margin:1rem 0 0">' + money(o.total) + '</p><p class="tiny">20% Bitcoin discount is already included.</p>' +
          (expired
            ? '<p>This page timed out after 5 minutes. The address is no longer shown. Message ' + CONTACT.whatsapp + ' or email ' + CONTACT.email + ' with invoice ' + esc(o.id) + ' if you already sent the payment, or submit a new request.</p>'
            : '<p class="tiny">Send this exact amount to</p><p class="mono">' + CONTACT.btc + '</p><button class="btn ink" type="button" data-act="copy">Copy address</button><p style="font-weight:700;margin-top:1.25rem">Time left <span id="btc-clock">' + clock(left) + '</span></p><p class="tiny">The address expires when the timer hits 0:00.</p>') +
          '<p>After you pay, send the order on WhatsApp. The message is already written.</p>' + mailBox(o) +
          '</div></div>';
      }
      return '<div class="wrap section" style="max-width:40rem"><p class="kicker">Invoice ' + esc(o.id) + '</p><h1>Pay ' + money(o.total) + ' by card</h1><p>1. Pay ' + money(o.total) + ' with the link or QR code. 2. Send the order on WhatsApp. The cart and your details are already written in the message.</p>' +
        '<div class="box"><strong>Send ' + money(o.total) + ' by card</strong><p class="tiny">Open the link or scan the QR code. Square asks for the amount, so type ' + money(o.total) + ' exactly. Then send the order on WhatsApp.</p><a class="btn ink" href="' + CONTACT.square + '" target="_blank" rel="noreferrer">Open Square link</a><img src="' + BASE + '/media/square-qr.png" alt="Square payment QR code" style="width:176px;height:176px;background:#fff;padding:8px;margin-top:12px;display:block"></div>' +
        mailBox(o) + '</div>';
    }
    const b = bill(true);
    if (!b.lines.length) return '<div class="wrap section"><h1>Checkout</h1><p class="muted">Your cart is empty. Checkout stays closed until there is an item.</p><a class="btn solid" href="#/shop">Shop</a></div>';
    const ships = SHIPPING.map(function (s) {
      return '<label class="shipopt"><span><input type="radio" name="ship" data-act="ship" value="' + s.id + '"' + (cart.ship === s.id ? " checked" : "") + "> " + s.label + ' <span class="muted">' + s.window + "</span></span><strong>" + (b.freeShip ? "Free" : money(s.price)) + "</strong></label>";
    }).join("");
    const lines = b.lines.map(function (l) {
      return '<div class="line"><img src="' + img(l.v.image || l.p.image) + '" alt=""><div style="flex:1">' + esc(l.p.name) + '<div class="tiny">' + esc(l.v.mass) + " × " + l.line.qty + "</div></div><strong>" + money(l.total) + "</strong></div>";
    }).join("");
    return '<div class="wrap section"><h1>Checkout</h1><p class="box">Submit your details, pay, then send the order on WhatsApp. The cart, invoice, and address are already written in the message. After payment is verified, the order is sent and a tracking number is included.</p><form class="split" data-act="place"><div><h2>Billing details</h2><div class="two">' + field("Email", "email", "email", "email") + field("Phone", "phone", "tel", "tel") + field("First name", "first", "text", "given-name") + field("Last name", "last", "text", "family-name") + '</div><div class="field">Street address<input required autocomplete="shipping street-address" data-form="street" value="' + esc(ui.form.street) + '"></div><div class="field">Apartment, suite, unit (optional)<input autocomplete="shipping address-line2" data-form="apt" value="' + esc(ui.form.apt) + '"></div><div class="two">' + field("Town / City", "city", "text", "shipping address-level2") + '<label class="field">State<select required data-form="state" autocomplete="shipping address-level1"><option value="">Select</option>' + STATES.map(function (s) { return '<option' + (ui.form.state === s ? " selected" : "") + ">" + s + "</option>"; }).join("") + "</select></label>" + field("ZIP", "zip", "text", "shipping postal-code") + '<label class="field">Country / Region<select data-form="country" autocomplete="shipping country-name">' + COUNTRIES.map(function (c) { return '<option' + (ui.form.country === c ? " selected" : "") + ">" + esc(c) + "</option>"; }).join("") + "</select></label></div>" +
      '<label class="field">Order notes (optional)<textarea data-form="notes" rows="3">' + esc(ui.form.notes) + "</textarea></label><h2>Shipping</h2><p class=\"tiny\">Free shipping on orders over $200.</p>" + ships + "<h2>Payment</h2>" +
      '<label class="payopt"><span><input type="radio" name="pay" data-act="pay" value="btc"' + (ui.pay === "btc" ? " checked" : "") + "> <strong>Bitcoin — 20% off</strong><br><span class=\"tiny\">Submit, pay on the next page, then send the order on WhatsApp.</span></span></label>" +
      '<label class="payopt"><span><input type="radio" name="pay" data-act="pay" value="card"' + (ui.pay === "card" ? " checked" : "") + "> <strong>Card</strong><br><span class=\"tiny\">Submit first. The Square link and QR code open on the next page, then send the order on WhatsApp.</span></span></label>" +
      '<p>The Square link, QR code, and Bitcoin address open after you submit. Then send the order on WhatsApp.</p>' +
      (ui.error ? '<p class="note">' + esc(ui.error) + "</p>" : "") + '<button class="btn solid" type="submit"' + (ui.sending ? " disabled" : "") + ">" + (ui.sending ? "Sending request…" : "Submit request") + "</button></div>" +
      '<aside class="box"><h2>Your order</h2>' + lines + '<div class="row" style="margin-top:0.75rem"><input class="coupon" data-act="code" placeholder="Coupon code" value="' + esc(ui.code) + '"><button class="btn" type="button" data-act="coupon">Apply</button></div>' + (ui.couponNote ? '<p class="tiny">' + esc(ui.couponNote) + "</p>" : "") +
      '<p style="display:flex;justify-content:space-between"><span class="muted">Items</span>' + money(b.items) + "</p>" +
      (b.bitcoinOff ? '<p style="display:flex;justify-content:space-between"><span class="muted">Bitcoin 20% off</span>-' + money(b.bitcoinOff) + "</p>" : "") +
      '<p style="display:flex;justify-content:space-between"><span class="muted">Shipping</span>' + (b.freeShip ? "Free" : money(b.shipping)) + '</p><p style="display:flex;justify-content:space-between"><span class="muted">Protection fee</span>' + money(b.protection) + '</p><p style="display:flex;justify-content:space-between"><strong>Total</strong><strong>' + money(b.total) + "</strong></p></aside></form></div>";
  }
  function contact() {
    return '<div class="wrap section split"><div><p class="kicker">Contact</p><h1>Talk to the bench</h1><p class="muted">Every purchase is finalized in this WhatsApp chat. Submit the cart on the site first so the request is emailed in. Bitcoin: send it, then message that it was sent. Card: pay the order total on the Square link, then message that it was paid.</p><div class="box"><p class="tiny">WhatsApp</p><p style="font-size:1.6rem;font-weight:700;margin:0.25rem 0"><a class="link" href="' + CONTACT.whatsappUrl + '" target="_blank" rel="noreferrer">' + CONTACT.whatsapp + '</a></p><a class="btn solid" href="' + CONTACT.whatsappUrl + '" target="_blank" rel="noreferrer">Message on WhatsApp</a></div><p>Email <a class="link" href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a></p></div>" +
      '<form class="box" data-act="mail"><h2>Send a note</h2><input required name="name" placeholder="Name"><input required type="email" name="email" placeholder="Email" style="margin-top:0.5rem"><textarea required name="msg" rows="5" placeholder="Message" style="margin-top:0.5rem;width:100%;border-radius:10px;border:1px solid rgba(20,24,28,.15);padding:0.6rem;font:inherit"></textarea><div class="row"><button class="btn ink" type="submit">Email it</button></div></form></div>';
  }
  function coa() {
    const seen = {};
    const rows = [];
    PRODUCTS.filter(live).forEach(function (p) {
      p.variants.forEach(function (v) {
        if (v.coa && v.stock > 0 && !seen[v.coa]) { seen[v.coa] = 1; rows.push({ id: p.id, name: p.name, purity: v.purity, coa: v.coa }); }
      });
    });
    return '<div class="wrap section"><p class="kicker">Independently filed lots</p><h1>Certificate library</h1><p class="muted">Every in-stock compound links to the lot certificate we have on file. Retatrutide sizes share one report.</p>' +
      rows.map(function (r) { return '<article class="box" style="display:flex;justify-content:space-between;gap:1rem;align-items:center;margin-top:0.75rem"><div><strong>' + esc(r.name) + '</strong><div class="tiny">Purity ' + esc(r.purity) + '</div></div><div class="row"><a class="btn solid" href="' + r.coa + '" target="_blank" rel="noreferrer">View report</a><a class="link" href="#/product/' + r.id + '">Product</a></div></article>'; }).join("") + "</div>";
  }
  function shipping() {
    return '<article class="wrap section" style="max-width:46rem"><p class="kicker">Legal</p><h1>Shipping & delivery</h1><p class="muted">Helix Vials ships research materials inside the United States.</p><div class="trust-grid">' +
      '<div class="box"><strong>Standard</strong><p class="muted">$10 · 3–7 days</p></div><div class="box"><strong>Expedited</strong><p class="muted">$15 · 2–4 days</p></div><div class="box"><strong>Next day</strong><p class="muted">$45 · 1–2 days</p></div></div>' +
      "<h2>01 Processing</h2><p class=\"muted\">Orders over $200 ship free, including expedited and next day. A $2 protection fee is still added. Orders are packed on business days after payment is confirmed on WhatsApp.</p><h2>02 Packaging</h2><p class=\"muted\">Vials ship in plain packaging. The return name is the shop, not a compound name.</p><h2>03 Questions</h2><p class=\"muted\">Address changes, Bitcoin sent messages, and Square card payments go through WhatsApp " + CONTACT.whatsapp + ".</p><a class=\"btn solid\" href=\"#/shop\">Back to shop</a></article>";
  }
  function research() {
    return '<article class="wrap section" style="max-width:46rem"><p class="kicker">Notice</p><h1>Research use only</h1><p><strong>' + RESEARCH + "</strong></p><p class=\"muted\">Products are sold as laboratory reagents for in-vitro and analytical work. They are not medicines, supplements, or veterinary products, and they are not offered for diagnostic or clinical application.</p><p class=\"muted\">Statements on this site have not been evaluated by the U.S. Food and Drug Administration. Nothing here is intended to diagnose, treat, cure, or prevent any disease.</p></article>";
  }

  function view() {
    let agreed = false;
    try { agreed = localStorage.getItem("helix-agree-v2") === "yes"; } catch (e) {}
    if (!agreed) {
      document.getElementById("app").innerHTML = '<div style="min-height:100vh;display:grid;place-items:center;padding:1rem;background:#14181c"><div class="box" style="max-width:32rem"><p class="kicker">Before you continue</p><h1>Research-use agreement</h1><p>These materials are for laboratory research only. They are not for human use, veterinary use, diagnostic use, or clinical application. They are not medicines or supplements.</p><p>Purchases on this site are requests. Payment is finished only by messaging ' + reach() + '.</p><button class="btn solid" type="button" data-act="agree">I agree</button></div></div>';
      return;
    }
    const r = route();
    let body = home();
    if (r.page === "shop") body = shop();
    else if (r.page === "product") body = productPage(r.id);
    else if (r.page === "cart") body = cartPage();
    else if (r.page === "checkout") body = checkout();
    else if (r.page === "contact") body = contact();
    else if (r.page === "coa") body = coa();
    else if (r.page === "shipping") body = shipping();
    else if (r.page === "research") body = research();
    document.getElementById("app").innerHTML = shell(body);
    window.scrollTo(0, ui.keep ? window.scrollY : 0);
    ui.keep = false;
    if (ui.order && ui.order.pay === "btc" && ui.payUntil && Date.now() < ui.payUntil) {
      clearTimeout(ui.tick);
      ui.tick = setTimeout(function () {
        const left = Math.max(0, Math.ceil((ui.payUntil - Date.now()) / 1000));
        const el = document.getElementById("btc-clock");
        if (el && left > 0) el.textContent = clock(left);
        else view();
      }, 1000);
    }
  }

  function readForm(root) {
    root.querySelectorAll("[data-form]").forEach(function (el) { ui.form[el.getAttribute("data-form")] = el.value; });
  }

  function sendOrderEmail(order) {
    var reply = ((order.text || "").match(/Email: (\S+)/) || [])[1] || "";
    function viaSite() {
      if (!window.HELIX || !HELIX.ajax) return Promise.resolve(null);
      var body = new URLSearchParams();
      body.set("action", "helix_order");
      body.set("nonce", HELIX.nonce || "");
      body.set("invoice", order.id);
      body.set("order", order.text);
      body.set("reply", reply);
      return fetch(HELIX.ajax, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      }).then(function (res) {
        return res.json().catch(function () { return {}; });
      }).then(function (data) {
        if (data && data.ok) return { ok: true, message: "" };
        return { ok: false, message: (data && data.message) || "The email did not send. Tap the button again." };
      }).catch(function () {
        return { ok: false, message: "The email did not send. Tap the button again." };
      });
    }
    function viaForm() {
      var fd = new FormData();
      fd.append("name", order.id);
      fd.append("email", reply || "orders@helixvials.com");
      fd.append("_replyto", reply || "cpeptidessales@gmail.com");
      fd.append("_subject", "Helix Vials invoice " + order.id);
      fd.append("_captcha", "false");
      fd.append("_template", "box");
      fd.append("message", order.text);
      fd.append("invoice", order.id);
      return fetch("https://formsubmit.co/ajax/cpeptidessales@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      }).then(function (res) {
        return res.text().then(function (raw) {
          var data = {};
          try { data = JSON.parse(raw); } catch (err) {
            var start = raw.indexOf("{");
            var end = raw.indexOf("}");
            if (start >= 0 && end > start) {
              try { data = JSON.parse(raw.slice(start, end + 1)); } catch (e2) { data = {}; }
            }
          }
          var good = res.ok && data.success !== false && data.success !== "false";
          var message = data.message || "";
          if (/activation/i.test(message)) message = "Open cpeptidessales@gmail.com and click Activate Form, then tap the button again.";
          if (/rate limit/i.test(message)) message = "The email service is busy. Wait a minute, then tap the button again.";
          return { ok: good, message: good ? "" : (message || "The email did not send. Tap the button again.") };
        });
      }).catch(function () {
        return { ok: false, message: "The email did not send. Tap the button again." };
      });
    }
    return viaSite().then(function (result) {
      if (result) return result;
      return viaForm();
    });
  }

  document.getElementById("app").addEventListener("click", function (e) {
    const t = e.target.closest("[data-act]");
    if (!t) return;
    const act = t.getAttribute("data-act");
    if (act === "agree") {
      try { localStorage.setItem("helix-agree-v2", "yes"); } catch (err) {}
      view();
    } else if (act === "menu") { ui.menu = !ui.menu; ui.keep = true; view(); }
    else if (act === "drawer") { ui.drawer = true; ui.keep = true; view(); }
    else if (act === "close") { ui.drawer = false; ui.keep = true; view(); }
    else if (act === "gocheckout") {
      e.preventDefault();
      ui.drawer = false;
      ui.menu = false;
      if ((location.hash || "") === "#/checkout") view();
      else location.hash = "#/checkout";
    }
    else if (act === "filters") { ui.filters = !ui.filters; ui.keep = true; view(); }
    else if (act === "catpick") { ui.cat = t.getAttribute("data-cat") || "All"; ui.page = 1; ui.keep = true; view(); }
    else if (act === "stock") { ui.stock = t.getAttribute("data-stock") || "in"; ui.page = 1; ui.keep = true; view(); }
    else if (act === "stockonly") { ui.stock = ui.stock === "in" ? "all" : "in"; ui.page = 1; ui.keep = true; view(); }
    else if (act === "page") { ui.page = Number(t.getAttribute("data-page")) || 1; ui.keep = true; view(); window.scrollTo(0, 0); }
    else if (act === "add") {
      const id = t.getAttribute("data-id");
      const sku = t.getAttribute("data-sku");
      const qty = Math.max(1, Number(ui.qty[id] || 1));
      ui.note[id] = add(id, sku, qty);
      ui.drawer = ui.note[id] === "Added to cart";
      ui.keep = true;
      view();
    } else if (act === "inc" || act === "dec" || act === "remove") {
      const id = t.getAttribute("data-id");
      const sku = t.getAttribute("data-sku");
      const line = cart.lines.find(function (l) { return l.productId === id && l.sku === sku; });
      if (act === "remove") setQty(id, sku, 0);
      else if (line) setQty(id, sku, line.qty + (act === "inc" ? 1 : -1));
      ui.keep = true;
      view();
    } else if (act === "coupon") {
      ui.couponNote = ui.code.trim() ? "That code is not active." : "Enter a code to apply.";
      ui.keep = true;
      view();
    } else if (act === "copy") {
      if (navigator.clipboard) navigator.clipboard.writeText(CONTACT.btc);
    } else if (act === "sendwa") {
      if (!ui.order) return;
      var href = CONTACT.whatsappUrl + "?text=" + encodeURIComponent(ui.order.text);
      ui.order.emailed = true;
      ui.keep = true;
      window.open(href, "_blank", "noopener");
      view();
    } else if (act === "sendmail") {
      if (!ui.order || ui.mailing || ui.order.emailed) return;
      ui.mailing = true;
      ui.mailFail = false;
      ui.keep = true;
      view();
      sendOrderEmail(ui.order).then(function (result) {
        ui.mailing = false;
        ui.mailFail = result.ok ? "" : (result.message || "The email did not send. Tap the button again.");
        if (result.ok && ui.order) ui.order.emailed = true;
        ui.keep = true;
        view();
      });
    }
  });
  document.getElementById("app").addEventListener("change", function (e) {
    const t = e.target;
    const act = t.getAttribute("data-act");
    if (act === "sku") { ui.sku[t.getAttribute("data-id")] = t.value; ui.qty[t.getAttribute("data-id")] = 1; ui.keep = true; view(); }
    else if (act === "qty") { ui.qty[t.getAttribute("data-id")] = Number(t.value) || 1; }
    else if (act === "cat") { ui.cat = t.value; ui.page = 1; ui.keep = true; view(); }
    else if (act === "sort") { ui.sort = t.value; ui.page = 1; ui.keep = true; view(); }
    else if (act === "q") { ui.q = t.value; ui.page = 1; ui.keep = true; view(); }
    else if (act === "ship") { cart.ship = t.value; save(); ui.keep = true; readForm(document); view(); }
    else if (act === "pay") { readForm(document); ui.pay = t.value; ui.keep = true; view(); }
    else if (t.hasAttribute("data-form")) ui.form[t.getAttribute("data-form")] = t.value;
  });
  document.getElementById("app").addEventListener("input", function (e) {
    const t = e.target;
    if (t.getAttribute("data-act") === "code") ui.code = t.value;
    if (t.getAttribute("data-act") === "q") { ui.q = t.value; ui.page = 1; }
    if (t.getAttribute("data-act") === "minp") ui.minPrice = t.value;
    if (t.getAttribute("data-act") === "maxp") ui.maxPrice = t.value;
    if (t.hasAttribute("data-form")) ui.form[t.getAttribute("data-form")] = t.value;
  });
  document.getElementById("app").addEventListener("submit", function (e) {
    const form = e.target;
    const act = form.getAttribute("data-act");
    if (act === "search") {
      e.preventDefault();
      ui.q = new FormData(form).get("q") || "";
      ui.page = 1;
      if ((location.hash || "#/") === "#/shop") view();
      else go("/shop");
    } else if (act === "price") {
      e.preventDefault();
      ui.minPrice = form.querySelector("[data-act=minp]").value;
      ui.maxPrice = form.querySelector("[data-act=maxp]").value;
      ui.page = 1;
      ui.keep = true;
      view();
    } else if (act === "mail") {
      e.preventDefault();
      const data = new FormData(form);
      const body = "From: " + data.get("name") + "\nEmail: " + data.get("email") + "\n\n" + data.get("msg");
      location.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Helix Vials") + "&body=" + encodeURIComponent(body);
    } else if (act === "place") {
      e.preventDefault();
      if (ui.sending) return;
      readForm(form);
      const b = bill(true);
      if (!b.lines.length) { ui.error = "Add an item before checkout."; ui.keep = true; view(); return; }
      const need = ["email", "phone", "first", "last", "street", "city", "state", "zip", "country"];
      if (need.some(function (k) { return !String(ui.form[k] || "").trim(); })) { ui.error = "Fill every required field. Apartment and notes are optional."; ui.keep = true; view(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ui.form.email)) { ui.error = "Enter a real email."; ui.keep = true; view(); return; }
      const id = invoiceId();
      const ship = SHIPPING.find(function (s) { return s.id === cart.ship; });
      const payLine = ui.pay === "btc"
        ? "Pay: Bitcoin. Customer will send it, then message WhatsApp @pepti.vault that it was sent."
        : "Pay: Card. Customer pays the order total on the Square link, then messages WhatsApp @pepti.vault that it was sent.";
      const text = ["Invoice: " + id, b.lines.map(function (l) { return l.line.qty + " × " + l.p.name + " " + l.v.mass + " @ " + money(l.v.price); }).join("\n"), "Items " + money(b.items), b.bitcoinOff ? "Bitcoin discount 20% -" + money(b.bitcoinOff) : "", "Shipping " + ship.label + " " + (b.freeShip ? "Free" : money(b.shipping)), "Protection " + money(b.protection), "Total " + money(b.total), payLine, "Name: " + ui.form.first + " " + ui.form.last, "Email: " + ui.form.email, "Phone: " + ui.form.phone, "Street: " + ui.form.street, "Apartment: " + (ui.form.apt || "none"), "City: " + ui.form.city, "State: " + ui.form.state, "ZIP: " + ui.form.zip, "Country: " + ui.form.country, ui.form.notes ? "Notes: " + ui.form.notes : "Notes: none", "Customer sent the order on WhatsApp."].filter(Boolean).join("\n");
      ui.order = { id: id, pay: ui.pay, total: b.total, text: text, emailed: false };
      if (ui.pay === "btc") ui.payUntil = Date.now() + 5 * 60 * 1000;
      ui.sending = false;
      ui.error = "";
      cart.lines = [];
      save();
      ui.keep = true;
      view();
    }
  });

  document.getElementById("app").addEventListener("focusout", function (e) {
    const t = e.target;
    if (!t.getAttribute) return;
    const key = t.getAttribute("data-form");
    if (key !== "street" && key !== "city" && key !== "zip" && key !== "apt") return;
    if (ui.addressLock) return;
    ui.form[key] = t.value;
    ui.addressLock = true;
    correctFormAddress();
  });

  window.addEventListener("hashchange", function () {
    ui.drawer = false;
    ui.menu = false;
    view();
  });
  view();
})();
