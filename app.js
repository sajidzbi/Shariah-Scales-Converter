/* ===== SM SHARIAH SCALES - App Logic ===== */
'use strict';

// ===== CONSTANTS =====
const C = {
  TOLA_G: 11.664,
  SEER_G: 933.12,
  GAZ_CM: 45.72,
  YARD_CM: 91.44,
  SMILE_CM: 182880,
  DIRHAM_G: 3.0618,
  DINAR_G: 4.374,
  ISTAR_G: 19.9017,
  DANQ_G: 0.8748,
  QIRAT_G: 0.2187,
  RATL_G: 398.034,
  OQIA_G: 122.472,
  NASH_G: 3.0618 * 20,
  SAA_H_G: 3184.272,
  SAA_S_G: 2012.3,
};

// ===== TRANSLATIONS =====
const TR = {
  ur: {
    appName: "SM Shariah Scales Converter",
    nav: {
      weight: "تول / وزن",
      capacity: "ناپ / پیمانہ",
      length: "لمبائی / پیمائش",
      chart: "اوزان چارٹ",
      about: "ڈویلپر",
    },
    topbarTitles: {
      weight: "شرعی اوزان کنورٹر",
      capacity: "شرعی پیمانہ کنورٹر",
      length: "شرعی پیمائش کنورٹر",
      chart: "کثیر الاستعمال شرعی اوزان",
      about: "ڈویلپر کی معلومات",
    },
    btnDark: "🌙 ڈارک موڈ",
    btnLight: "☀️ لائٹ موڈ",
    btnLang: "English",
    btnPdf: "📄 PDF",
    modern: "جدید اوزان",
    shariah: "شرعی اوزان",
    modernCap: "جدید پیمانہ",
    shariahCap: "شرعی پیمانہ",
    modernLen: "جدید پیمائش",
    shariahLen: "شرعی پیمائش",
    chartTitle: "کثیر الاستعمال شرعی اوزان و مقادیر",
    chart2Title: "چند دیگر اوزان و مقادیر",
    thItem: "شرعی وزن / مقدار",
    thEq: "برابر ہے",
    th2Item: "وزن / مقدار",
    installBanner: "📲 اس ایپ کو انسٹال کریں — آف لائن بھی کام کرے گی!",
    installBtn: "انسٹال کریں",
    weightLabels: [
      ["w_gram", "گرام (Gram)"],
      ["w_kg", "کلو گرام (KG)"],
      ["w_tola", "تولہ (Tola)"],
      ["w_masha", "ماشہ (Masha)"],
      ["w_ratti", "رتی (Ratti)"],
      ["w_dirham", "درہم (Dirham)"],
      ["w_dinar", "دینار / مثقال (Dinar)"],
      ["w_istar", "استار (Istar)"],
      ["w_danq", "دانق (Danq)"],
      ["w_nash", "نش (Nash)"],
      ["w_oqia", "اوقیہ (Oqia)"],
      ["w_ratl", "رطلِ شرعی (Ritl)"],
      ["w_seer", "شرعی سیر (Seer)"],
      ["w_qirat", "شرعی قیراط (Qirat)"],
    ],
    capLabels: [
      ["c_gram", "گرام (Gram)"],
      ["c_kg", "کلو گرام (KG)"],
      ["c_saa_h", "صاع حنفی (Saa Hanafi)"],
      ["c_mudd_h", "مُد / مَن حنفی (Mudd/Mann Hanafi)"],
      ["c_ratl", "رطلِ شرعی (Ritl)"],
      ["c_wasq", "وسق (Wasq)"],
      ["c_qafiz", "قفیز (Qafiz)"],
      ["c_kur", "کُر (Kur)"],
      ["c_saa_s", "صاع صاحبین (Saa Sahibain)"],
      ["c_mudd_s", "مُد / مَن صاحبین (Mudd/Mann Sahibain)"],
    ],
    lenLabels: [
      ["l_cm", "سینٹی میٹر (CM)"],
      ["l_meter", "میٹر (Meter)"],
      ["l_inch", "انچ (Inch)"],
      ["l_yard", "گز انگریزی (Yard)"],
      ["l_km", "کلومیٹر (KM)"],
      ["l_mile_m", "میل انگریزی (Mile)"],
      ["l_gaz", "شرعی گز / ذراع (Gaz)"],
      ["l_arm", "ہاتھ (Arm)"],
      ["l_finger", "انگل (Finger)"],
      ["l_mile_s", "شرعی میل (Sh. Mile)"],
      ["l_farsakh", "فرسخ (Farsakh)"],
      ["l_bareed", "برید (Bareed)"],
    ],
    tableRows: [
      ["ایک شرعی درہم", "3.0618 گرام چاندی"],
      ["ایک شرعی دینار / مثقال", "4.5 ماشہ سونا = 4.374 گرام سونا"],
      ["مهر کی کم از کم مقدار", "10 درہم = 30.618 گرام چاندی = 2.625 تولہ"],
      ["مهرِ فاطمی", "500 درہم = 1.5309 کلو چاندی = 131.25 تولہ چاندی"],
      ["چاندی سے نصابِ زکوۃ", "200 درہم = 612.36 گرام = 52.5 تولہ چاندی"],
      ["سونے سے نصابِ زکوۃ", "20 مثقال = 87.48 گرام سونا = 7.5 تولہ سونا"],
      ["صدقہ فطر کا نصاب", "200 درہم = 612.36 گرام = 52.5 تولہ چاندی"],
      ["صدقہ فطر / فدیہ (نماز و روزہ)", "نصف صاع گندم: 1.592 کلو<br>ایک صاع کھجور/جو/کشمش: 3.184 کلو"],
      ["قسم کا کفارہ (دس مساکین)", "نصف صاع گندم: 15.92 کلو<br>مکمل صاع کھجور/جو/کشمش: 31.84 کلو"],
      ["سفرِ شرعی (قصر کی مسافت)", "48 انگریزی میل = 77.25 کلو میٹر"],
      ["نصابِ وجوبِ قربانی", "612.36 گرام چاندی = 52.5 تولہ چاندی"],
      ["دیتِ کاملہ", "چاندی: 10000 دراہم (30.618 کلو)<br>سونا: 1000 دینار (4.374 کلو = 375 تولہ)"],
    ],
    table2Rows: [
      ["رائی (ایک دانہ)", "½ دانہ چاول = 0.00729 گرام"],
      ["چاول (ایک دانہ)", "2 دانے رائی = 0.01458 گرام"],
      ["گندم یا جو (ایک دانہ)", "3 چاول = 0.04374 گرام"],
      ["طسموج", "2 دانے گندم/جو = 0.08748 گرام"],
      ["چھٹانک", "32.58 گرام"],
      ["شرعی سَیر", "80 تولہ = 933.12 گرام"],
      ["عُرفی علاقائی سَیر", "1225 گرام"],
      ["شرعی مَن", "2 رطل = 260 درہم = 796.068 گرام"],
      ["ہندی سرکاری مَن", "40 سرکاری سَیر = 37.3428 کلو"],
      ["عرفی علاقائی مَن", "40 علاقائی سیر = 49 کلو"],
      ["استار بحساب درہم", "19.9017 گرام"],
      ["مَکُّوک", "1.5 صاع = 12 رطل = 4.7764 کلو"],
      ["شِبر", "9 انچ"],
      ["فٹ", "12 انچ"],
      ["باع", "72 انچ"],
      ["انگریزی فرسخ", "4.828032 کلو میٹر"],
      ["فرلانگ", "201.168 میٹر"],
      ["سمندری میل", "1.852 کلو میٹر"],
      ["ذِراع (شرعی گز)", "1 ہاتھ = 18 انچ"],
      ["قُلَّۃ", "129 لیٹر"],
    ],
    devInfo: {
      name: "Dr. Sajid Mahmood",
      uni: "Hazara University, Mansehra",
      whatsapp: "03009080730",
      email: "sajidzbi@gmail.com",
    }
  },
  en: {
    appName: "SM Shariah Scales Converter",
    nav: {
      weight: "Weight",
      capacity: "Capacity",
      length: "Length",
      chart: "Data Chart",
      about: "About",
    },
    topbarTitles: {
      weight: "Shariah Weight Converter",
      capacity: "Shariah Capacity Converter",
      length: "Shariah Length Converter",
      chart: "Shariah Measurements Chart",
      about: "Developer Info",
    },
    btnDark: "🌙 Dark Mode",
    btnLight: "☀️ Light Mode",
    btnLang: "اردو",
    btnPdf: "📄 PDF",
    modern: "Modern Weights",
    shariah: "Shariah Weights",
    modernCap: "Modern Scale",
    shariahCap: "Shariah Scale",
    modernLen: "Modern Length",
    shariahLen: "Shariah Length",
    chartTitle: "Common Shariah Measurements",
    chart2Title: "Other Measurements",
    thItem: "Shariah Item",
    thEq: "Equivalence",
    th2Item: "Measurement",
    installBanner: "📲 Install this app — works offline too!",
    installBtn: "Install",
    weightLabels: [
      ["w_gram", "Gram"],
      ["w_kg", "Kilogram (KG)"],
      ["w_tola", "Tola"],
      ["w_masha", "Masha"],
      ["w_ratti", "Ratti"],
      ["w_dirham", "Dirham"],
      ["w_dinar", "Dinar / Mithqal"],
      ["w_istar", "Istar"],
      ["w_danq", "Danq"],
      ["w_nash", "Nash"],
      ["w_oqia", "Oqia"],
      ["w_ratl", "Ritl (Shariah)"],
      ["w_seer", "Seer (Shariah)"],
      ["w_qirat", "Qirat (Shariah)"],
    ],
    capLabels: [
      ["c_gram", "Gram"],
      ["c_kg", "Kilogram"],
      ["c_saa_h", "Saa [Hanafi]"],
      ["c_mudd_h", "Mudd / Mann [Hanafi]"],
      ["c_ratl", "Ritl (Shariah)"],
      ["c_wasq", "Wasq"],
      ["c_qafiz", "Qafiz"],
      ["c_kur", "Kur"],
      ["c_saa_s", "Saa [Sahibain]"],
      ["c_mudd_s", "Mudd / Mann [Sahibain]"],
    ],
    lenLabels: [
      ["l_cm", "Centimeter (CM)"],
      ["l_meter", "Meter"],
      ["l_inch", "Inch"],
      ["l_yard", "Yard"],
      ["l_km", "Kilometer (KM)"],
      ["l_mile_m", "English Mile"],
      ["l_gaz", "Shariah Gaz"],
      ["l_arm", "Arm (Cubit)"],
      ["l_finger", "Finger"],
      ["l_mile_s", "Shariah Mile"],
      ["l_farsakh", "Farsakh"],
      ["l_bareed", "Bareed"],
    ],
    tableRows: [
      ["Shariah Dirham", "3.0618g Silver"],
      ["Shariah Dinar / Mithqal", "4.374g Gold (4.5 Masha)"],
      ["Minimum Mahr", "10 Dirham = 30.618g Silver = 2.625 Tola"],
      ["Mahr-e-Fatimi", "500 Dirham = 1.5309 kg Silver"],
      ["Zakat Nisab (Silver)", "200 Dirham = 612.36g = 52.5 Tola"],
      ["Zakat Nisab (Gold)", "20 Mithqal = 87.48g = 7.5 Tola"],
      ["Fitrana Nisab", "200 Dirham = 612.36g = 52.5 Tola Silver"],
      ["Fitrana / Fidya", "Wheat ½ Saa: 1.592 kg<br>Dates/Barley/Raisins 1 Saa: 3.184 kg"],
      ["Oath Kaffarah (10 poor)", "Wheat 10×½ Saa: 15.92 kg<br>Others 10×1 Saa: 31.84 kg"],
      ["Shariah Travel (Qasr)", "48 English Miles = 77.25 KM"],
      ["Qurbani Nisab", "612.36g Silver = 52.5 Tola Silver"],
      ["Full Diyat", "Silver: 10000 Dirham (30.618 kg)<br>Gold: 1000 Dinar (4.374 kg = 375 Tola)"],
    ],
    table2Rows: [
      ["Mustard Seed (1 grain)", "0.00729 gram"],
      ["Rice (1 grain)", "0.01458 gram"],
      ["Wheat/Barley (1 grain)", "0.04374 gram"],
      ["Tasmouj", "0.08748 gram"],
      ["Chitank", "32.58 gram"],
      ["Shariah Seer", "80 Tola = 933.12 gram"],
      ["Regional Seer", "1225 gram"],
      ["Shariah Mann", "2 Ritl = 260 Dirham = 796.068 gram"],
      ["Official Indian Mann", "40 official seer = 37.3428 kg"],
      ["Regional Mann", "40 regional seer = 49 kg"],
      ["Istar (in Dirhams)", "19.9017 gram"],
      ["Makkuk", "1.5 Saa = 12 Ritl = 4.7764 kg"],
      ["Shibr (Span)", "9 Inch"],
      ["Foot", "12 Inch"],
      ["Baa (Fathom)", "72 Inch"],
      ["English Farsakh", "4.828032 KM"],
      ["Furlong", "201.168 Meter"],
      ["Nautical Mile", "1.852 KM"],
      ["Ziraa (Shariah Gaz)", "1 Arm = 18 Inch"],
      ["Qulla", "129 Liters"],
    ],
    devInfo: {
      name: "Dr. Sajid Mahmood",
      uni: "Hazara University, Mansehra",
      whatsapp: "03009080730",
      email: "sajidzbi@gmail.com",
    }
  }
};

// ===== STATE =====
let lang = 'ur';
let theme = 'light';
let activeTab = 'weight';
let deferredInstallPrompt = null;

// ===== HELPERS =====
function fix(v) {
  if (!v || v === 0) return '';
  const abs = Math.abs(v);
  if (abs >= 1000) return parseFloat(v.toFixed(4));
  if (abs >= 1) return parseFloat(v.toFixed(5));
  return parseFloat(v.toFixed(7));
}

function t() { return TR[lang]; }

function el(id) { return document.getElementById(id); }

// ===== WEIGHT CONVERSION =====
const weightToGram = {
  w_gram: g => g,
  w_kg: g => g * 1000,
  w_tola: g => g * C.TOLA_G,
  w_masha: g => g * (C.TOLA_G / 12),
  w_ratti: g => g * (C.TOLA_G / 96),
  w_dirham: g => g * C.DIRHAM_G,
  w_dinar: g => g * C.DINAR_G,
  w_istar: g => g * C.ISTAR_G,
  w_danq: g => g * C.DANQ_G,
  w_nash: g => g * C.NASH_G,
  w_oqia: g => g * C.OQIA_G,
  w_ratl: g => g * C.RATL_G,
  w_seer: g => g * C.SEER_G,
  w_qirat: g => g * C.QIRAT_G,
};

const gramToWeight = {
  w_gram: g => g,
  w_kg: g => g / 1000,
  w_tola: g => g / C.TOLA_G,
  w_masha: g => g / (C.TOLA_G / 12),
  w_ratti: g => g / (C.TOLA_G / 96),
  w_dirham: g => g / C.DIRHAM_G,
  w_dinar: g => g / C.DINAR_G,
  w_istar: g => g / C.ISTAR_G,
  w_danq: g => g / C.DANQ_G,
  w_nash: g => g / C.NASH_G,
  w_oqia: g => g / C.OQIA_G,
  w_ratl: g => g / C.RATL_G,
  w_seer: g => g / C.SEER_G,
  w_qirat: g => g / C.QIRAT_G,
};

window.updateWeights = function(srcId) {
  const val = parseFloat(el(srcId).value) || 0;
  const g = weightToGram[srcId](val);
  Object.keys(gramToWeight).forEach(id => {
    if (id !== srcId) el(id).value = fix(gramToWeight[id](g));
  });
};

// ===== CAPACITY CONVERSION =====
const capToGram = {
  c_gram: g => g,
  c_kg: g => g * 1000,
  c_saa_h: g => g * C.SAA_H_G,
  c_mudd_h: g => g * (C.SAA_H_G / 4),
  c_ratl: g => g * C.RATL_G,
  c_wasq: g => g * (C.SAA_H_G * 60),
  c_qafiz: g => g * (C.SAA_H_G * 12),
  c_kur: g => g * (C.SAA_H_G * 720),
  c_saa_s: g => g * C.SAA_S_G,
  c_mudd_s: g => g * (C.SAA_S_G / 4),
};

const gramToCap = {
  c_gram: g => g,
  c_kg: g => g / 1000,
  c_saa_h: g => g / C.SAA_H_G,
  c_mudd_h: g => g / (C.SAA_H_G / 4),
  c_ratl: g => g / C.RATL_G,
  c_wasq: g => g / (C.SAA_H_G * 60),
  c_qafiz: g => g / (C.SAA_H_G * 12),
  c_kur: g => g / (C.SAA_H_G * 720),
  c_saa_s: g => g / C.SAA_S_G,
  c_mudd_s: g => g / (C.SAA_S_G / 4),
};

window.updateCap = function(srcId) {
  const val = parseFloat(el(srcId).value) || 0;
  const g = capToGram[srcId](val);
  Object.keys(gramToCap).forEach(id => {
    if (id !== srcId) el(id).value = fix(gramToCap[id](g));
  });
};

// ===== LENGTH CONVERSION =====
const lenToCm = {
  l_cm: v => v,
  l_meter: v => v * 100,
  l_inch: v => v * 2.54,
  l_yard: v => v * C.YARD_CM,
  l_km: v => v * 100000,
  l_mile_m: v => v * 160934.4,
  l_gaz: v => v * C.GAZ_CM,
  l_arm: v => v * 45.72,
  l_finger: v => v * 1.905,
  l_mile_s: v => v * C.SMILE_CM,
  l_farsakh: v => v * (C.SMILE_CM * 3),
  l_bareed: v => v * (C.SMILE_CM * 12),
};

const cmToLen = {
  l_cm: v => v,
  l_meter: v => v / 100,
  l_inch: v => v / 2.54,
  l_yard: v => v / C.YARD_CM,
  l_km: v => v / 100000,
  l_mile_m: v => v / 160934.4,
  l_gaz: v => v / C.GAZ_CM,
  l_arm: v => v / 45.72,
  l_finger: v => v / 1.905,
  l_mile_s: v => v / C.SMILE_CM,
  l_farsakh: v => v / (C.SMILE_CM * 3),
  l_bareed: v => v / (C.SMILE_CM * 12),
};

window.updateLength = function(srcId) {
  const val = parseFloat(el(srcId).value) || 0;
  const cm = lenToCm[srcId](val);
  Object.keys(cmToLen).forEach(id => {
    if (id !== srcId) el(id).value = fix(cmToLen[id](cm));
  });
};

// ===== TAB NAVIGATION =====
window.openTab = function(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const panel = el('panel-' + tabId);
  if (panel) panel.classList.add('active');
  const navItem = el('nav-' + tabId);
  if (navItem) navItem.classList.add('active');
  el('topbar-title').textContent = t().topbarTitles[tabId];
  closeSidebar();
};

// ===== SIDEBAR =====
function openSidebar() {
  el('sidebar').classList.add('open');
  el('sidebar-overlay').classList.add('show');
}

function closeSidebar() {
  el('sidebar').classList.remove('open');
  el('sidebar-overlay').classList.remove('show');
}

// ===== THEME =====
window.toggleTheme = function() {
  theme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  const tr = t();
  el('btn-theme').innerHTML = theme === 'dark'
    ? `<span>${tr.btnLight}</span>`
    : `<span>${tr.btnDark}</span>`;
  localStorage.setItem('ss-theme', theme);
};

// ===== LANGUAGE =====
window.toggleLang = function() {
  lang = lang === 'ur' ? 'en' : 'ur';
  applyLang();
  localStorage.setItem('ss-lang', lang);
};

function applyLang() {
  const tr = t();
  const dir = lang === 'ur' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.body.classList.toggle('rtl-mode', lang === 'ur');

  // Nav labels
  Object.keys(tr.nav).forEach(key => {
    const el2 = el('nav-label-' + key);
    if (el2) el2.textContent = tr.nav[key];
  });

  // Topbar title
  el('topbar-title').textContent = tr.topbarTitles[activeTab];

  // Buttons
  el('btn-lang').innerHTML = `<span>${tr.btnLang}</span>`;
  el('btn-pdf').innerHTML = `<span>${tr.btnPdf}</span>`;
  el('btn-theme').innerHTML = theme === 'dark'
    ? `<span>${tr.btnLight}</span>`
    : `<span>${tr.btnDark}</span>`;

  // Section labels
  el('label-modern-w').textContent = tr.modern;
  el('label-shariah-w').textContent = tr.shariah;
  el('label-modern-c').textContent = tr.modernCap;
  el('label-shariah-c').textContent = tr.shariahCap;
  el('label-modern-l').textContent = tr.modernLen;
  el('label-shariah-l').textContent = tr.shariahLen;

  // Weight labels
  tr.weightLabels.forEach(([id, lbl]) => {
    const e = el('lbl-' + id);
    if (e) e.textContent = lbl;
  });

  // Cap labels
  tr.capLabels.forEach(([id, lbl]) => {
    const e = el('lbl-' + id);
    if (e) e.textContent = lbl;
  });

  // Length labels
  tr.lenLabels.forEach(([id, lbl]) => {
    const e = el('lbl-' + id);
    if (e) e.textContent = lbl;
  });

  // Tables
  el('chart-title').textContent = tr.chartTitle;
  el('chart2-title').textContent = tr.chart2Title;
  renderTables();

  // Install banner
  el('install-text').textContent = tr.installBanner;
  el('install-action-btn').textContent = tr.installBtn;
}

// ===== RENDER TABLES =====
function renderTables() {
  const tr = t();

  // Table 1
  const t1 = el('table1');
  t1.innerHTML = `
    <thead>
      <tr>
        <th>${tr.thItem}</th>
        <th>${tr.thEq}</th>
      </tr>
    </thead>
    <tbody>
      ${tr.tableRows.map(([a,b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}
    </tbody>
  `;

  // Table 2
  const t2 = el('table2');
  t2.innerHTML = `
    <thead>
      <tr>
        <th>${tr.th2Item}</th>
        <th>${tr.thEq}</th>
      </tr>
    </thead>
    <tbody>
      ${tr.table2Rows.map(([a,b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}
    </tbody>
  `;
}

// ===== PWA INSTALL =====
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  el('install-banner').classList.add('show');
});

window.installApp = function() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(() => {
    deferredInstallPrompt = null;
    el('install-banner').classList.remove('show');
  });
};

window.closeBanner = function() {
  el('install-banner').classList.remove('show');
};

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.warn('SW failed:', err));
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Load preferences
  const savedLang = localStorage.getItem('ss-lang');
  const savedTheme = localStorage.getItem('ss-theme');
  if (savedLang) lang = savedLang;
  if (savedTheme) {
    theme = savedTheme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Menu toggle
  el('menu-toggle').addEventListener('click', openSidebar);
  el('sidebar-overlay').addEventListener('click', closeSidebar);

  // Apply language
  applyLang();

  // Open default tab
  openTab('weight');
});
