/**
 * Kanaf Orphans Platform Utils
 * Shared Javascript Helpers and Mock Data State
 */

// Initialize LocalStorage with Palestinian Demo Data from Gaza (Currency changed to USD $)
const DEFAULT_ORPHANS = [
  { id: 1, name: "يوسف سليمان الكفارنة", alias: "يوسف ك.", age: 7, gender: "ذكر", country: "فلسطين", city: "شمال غزة", health: "سليم", education: "المرحلة الابتدائية - الصف الأول", amount: 80, status: "نشط", image: "assets/images/gaza_child_portrait_1.png", story: "ناجي وحيد من عائلته التي استشهدت في شمال غزة. يعيش الآن مع جده في مركز إيواء بدير البلح برعاية جيدة ولكنه يحتاج مستلزمات أساسية وطبابة مستمرة.", familyId: 101, rating: 5, tags: ["ناجي وحيد", "يتيم الأبوين", "أشد حاجة"] },
  { id: 2, name: "شهد محمد الدلو", alias: "شهد د.", age: 9, gender: "أنثى", country: "فلسطين", city: "خانيونس", health: "مريضة ربو مزمن", education: "المرحلة الابتدائية - الصف الثالث", amount: 90, status: "نشط", image: "assets/images/gaza_child_portrait_2.png", story: "استشهد والد شهد في أحداث غزة الأخيرة. تعيش الآن مع والدتها المغلوبة على أمرها في مخيم للنازحين بخان يونس. تحب تلاوة القرآن وتفوق دراسياً.", familyId: 101, rating: 5, tags: ["أشد حاجة", "مرض مزمن"] },
  { id: 3, name: "أنس أحمد اليازجي", alias: "أنس ي.", age: 11, gender: "ذكر", country: "فلسطين", city: "غزة", health: "مصاب حرب - بتر في الساق اليسرى", education: "المرحلة الابتدائية - الصف الخامس", amount: 120, status: "غير مكفول", image: "assets/images/gaza_child_portrait_3.png", story: "فقد أنس والديه وأصيب بقصف مباشر أدى لبتر ساقه، يسكن رفح حالياً مع عمه. يعشق الرياضيات ويأمل بالحصول على طرف اصطناعي لممارسة حياته.", fillStatus: "غير مكفول", familyId: 102, rating: 5, tags: ["مصاب حرب", "يتيم الأبوين", "أشد حاجة"] },
  { id: 4, name: "جنى رائد فياض", alias: "جنى ف.", age: 5, gender: "أنثى", country: "فلسطين", city: "دير البلح", health: "سليم", education: "الروضة", amount: 80, status: "غير مكفول", image: "assets/images/gaza_child_portrait_2.png", story: "فقدت جنى والدها وتعيش حالياً مع والدتها في خيمة نزوح متطرفة بدير البلح. طفلة ذكية تفيض تفاعلاً ومحبة.", familyId: 101, rating: 4, tags: ["أشد حاجة"] },
  { id: 5, name: "محمود خالد أبو العوف", alias: "محمود ع.", age: 13, gender: "ذكر", country: "فلسطين", city: "رفح", health: "سليم", education: "المرحلة الإعدادية - الصف الأول", amount: 100, status: "نشط", image: "assets/images/gaza_child_portrait_1.png", story: "محمود فقد والده ويعيش في خيمة إيواء بمدينة رفح مع والدته وأخوته الأربعة. يتفوق دراسياً ويطمح ليكون طبيباً يضمد جراح أهله.", familyId: 103, rating: 5, tags: ["أشد حاجة"] },
  { id: 6, name: "ليان بسام رضوان", alias: "ليان ر.", age: 12, gender: "أنثى", country: "فلسطين", city: "شمال غزة", health: "مرض مزمن - سكري", education: "المرحلة الابتدائية - الصف السادس", amount: 110, status: "غير مكفول", image: "assets/images/gaza_child_portrait_2.png", story: "ليان يتيمة الأب ومصابة بالسكري، تسكن حالياً في مخيم بدير البلح مع والدتها. تملك مهارة رسم ممتازة وتعلم الأطفال الصغار الحروف الهجائية.", familyId: 104, rating: 5, tags: ["مرض مزمن", "أشد حاجة"] }
];

const DEFAULT_FAMILIES = [
  { id: 101, guardianName: "سلوى محمود الكفارنة", relation: "الجدة", city: "دير البلح (نازحة من شمال غزة)", phone: "0599123456", childrenCount: 3, status: "معتمد", address: "مخيم دير البلح، بلوك ج، قرب المستشفى الميداني" },
  { id: 102, guardianName: "أحمد صبري اليازجي", relation: "العم", city: "رفح (نازح من غزة)", phone: "0599234567", childrenCount: 1, status: "معتمد", address: "مخيم تل السلطان، رفح" },
  { id: 103, guardianName: "أميمة خالد أبو العوف", relation: "الأم", city: "رفح", phone: "0599345678", childrenCount: 4, status: "قيد المراجعة", address: "منطقة حي الجنينة، رفح" },
  { id: 104, guardianName: "شريفة بسام رضوان", relation: "الأم", city: "دير البلح", phone: "0599456789", childrenCount: 1, status: "مرفوض", address: "شارع النخيل، دير البلح" }
];

const DEFAULT_SPONSORS = [
  { id: 201, name: "عبد الرحمن بن سليمان البكري", email: "abdulrahman@example.com", phone: "0551234567", country: "السعودية", city: "الرياض", sponsorshipsCount: 3, totalPaid: 3200, status: "نشط", dateJoined: "2024-01-10" },
  { id: 202, name: "خالد بن محمد العمري", email: "khaled@example.com", phone: "0569876543", country: "السعودية", city: "جدة", sponsorshipsCount: 1, totalPaid: 1000, status: "نشط", dateJoined: "2024-03-15" },
  { id: 203, name: "نورة بنت عبد العزيز الفيصل", email: "noura@example.com", phone: "0543210987", country: "السعودية", city: "الدمام", sponsorshipsCount: 2, totalPaid: 1800, status: "موقوف مؤقتاً", dateJoined: "2024-02-22" }
];

const DEFAULT_SPONSORSHIPS = [
  { id: 301, sponsorId: 201, orphanId: 1, amount: 80, startDate: "2024-01-12", status: "نشط", lastPaymentDate: "2026-06-01" },
  { id: 302, sponsorId: 201, orphanId: 2, amount: 90, startDate: "2024-02-01", status: "نشط", lastPaymentDate: "2026-06-01" },
  { id: 303, sponsorId: 202, orphanId: 5, amount: 100, startDate: "2024-04-01", status: "نشط", lastPaymentDate: "2026-05-28" }
];

const DEFAULT_PAYMENTS = [
  { id: 401, sponsorshipId: 301, orphanId: 1, orphanName: "يوسف سليمان الكفارنة", sponsorName: "عبد الرحمن بن سليمان البكري", date: "2026-06-01", amount: 80, currency: "$", method: "Jawwal Pay", reference: "PAL9817265", status: "مؤكدة", docStatus: "معتمد" },
  { id: 402, sponsorshipId: 302, orphanId: 2, orphanName: "شهد محمد الدلو", sponsorName: "عبد الرحمن بن سليمان البكري", date: "2026-06-01", amount: 90, currency: "$", method: "بنك فلسطين", reference: "BOP5562144", status: "مؤكدة", docStatus: "معتمد" },
  { id: 403, sponsorshipId: 303, orphanId: 5, orphanName: "محمود خالد أبو العوف", sponsorName: "خالد بن محمد العمري", date: "2026-05-28", amount: 100, currency: "$", method: "PalPay", reference: "PAL1029384", status: "مؤكدة", docStatus: "قيد المراجعة" },
  { id: 404, sponsorshipId: 301, orphanId: 1, orphanName: "يوسف سليمان الكفارنة", sponsorName: "عبد الرحمن بن سليمان البكري", date: "2026-05-01", amount: 80, currency: "$", method: "Jawwal Pay", reference: "PAL9028374", status: "مؤكدة", docStatus: "معتمد" }
];

const DEFAULT_DOCS = [
  { id: 501, orphanId: 1, orphanName: "يوسف سليمان الكفارنة", type: "تعليمي", name: "شهادة تفوق وتقرير دراسي - ممتاز", date: "2025-06-15", url: "#", status: "معتمد", guardianName: "سلوى محمود الكفارنة" },
  { id: 502, orphanId: 1, orphanName: "يوسف سليمان الكفارنة", type: "تقرير صحي", name: "كشف طبي واحتياجات طبية عامة", date: "2025-11-20", url: "#", status: "معتمد", guardianName: "سلوى محمود الكفارنة" },
  { id: 503, orphanId: 2, orphanName: "شهد محمد الدلو", type: "تقرير صحي", name: "تقرير الفحص السنوي لوضع الجهاز التنفسي والربو", date: "2026-05-10", url: "#", status: "قيد المراجعة", guardianName: "سلوى محمود الكفارنة" },
  { id: 504, orphanId: 5, orphanName: "محمود خالد أبو العوف", type: "تعليمي", name: "شهادة إتمام المرحلة الابتدائية والتحول للإعدادي", date: "2025-05-30", url: "#", status: "معتمد", guardianName: "أميمة خالد أبو العوف" }
];

const DEFAULT_NOTIFICATIONS = [
  { id: 601, userType: "sponsor", title: "تم تأكيد عملية الدفع بنجاح", body: "تم استلام كفالتك الشهرية لليتيم يوسف سليمان الكفارنة بنجاح لشهر يونيو 2026.", type: "دفع", date: "منذ ساعتين", read: false },
  { id: 602, userType: "sponsor", title: "تقرير تعليمي جديد متاح", body: "قامت جدة اليتيم يوسف ك. برفع التقرير الدراسي لمنتصف العام.", type: "توثيق", date: "منذ يومين", read: true },
  { id: 603, userType: "guardian", title: "تم تأكيد كفالة جديدة", body: "تم ربط كفالة اليتيم محمود خالد أبو العوف بكافله الجديد خالد العمري.", type: "كفالة", date: "منذ 3 أيام", read: false },
  { id: 604, userType: "admin", title: "عائلة جديدة بانتظار الاعتماد", body: "قامت عائلة أميمة خالد أبو العوف بالتسجيل ورفع الوثائق الرسمية للاعتماد.", type: "تسجيل", date: "منذ 10 دقائق", read: false }
];

const DEFAULT_AUDIT_LOG = [
  { id: 801, user: "أدمن النظام", action: "اعتماد كفالة", details: "اعتماد كفالة #303 لليتيم محمود أبو العوف", date: "2026-06-07 08:30" },
  { id: 802, user: "عبد الرحمن البكري (كافل)", action: "تسجيل دفعة", details: "تسجيل دفعة كفالة لليتيم يوسف الكفارنة بقيمة 80 دولار", date: "2026-06-06 20:15" },
  { id: 803, user: "سلوى الكفارنة (وصي)", action: "تحديث ملف طفل", details: "تحديث تقرير المدرسة لليتيم يوسف الكفارنة", date: "2026-06-05 14:22" }
];

// Helper to check and initialize Storage
function getStoreData(key, defaultValue) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }
  let parsed = JSON.parse(localStorage.getItem(key));
  // Backport tags or other properties if missing in existing local storage
  if (key === "k_orphans" && Array.isArray(parsed) && Array.isArray(defaultValue)) {
    let updated = false;
    parsed = parsed.map(item => {
      const defItem = defaultValue.find(d => d.id === item.id);
      if (defItem) {
        if (!item.tags && defItem.tags) {
          item.tags = defItem.tags;
          updated = true;
        }
      }
      return item;
    });
    if (updated) {
      localStorage.setItem(key, JSON.stringify(parsed));
    }
  }
  return parsed;
}

function setStoreData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Retrieve data safely
export function getOrphans() { return getStoreData("k_orphans", DEFAULT_ORPHANS); }
export function setOrphans(data) { setStoreData("k_orphans", data); }

export function getFamilies() { return getStoreData("k_families", DEFAULT_FAMILIES); }
export function setFamilies(data) { setStoreData("k_families", data); }

export function getLoggedFamily() {
  const families = getFamilies();
  const loggedId = parseInt(localStorage.getItem("k_logged_family_id") || "101", 10);
  return families.find(f => f.id === loggedId) || families[0];
}

export function getSponsors() { return getStoreData("k_sponsors", DEFAULT_SPONSORS); }
export function setSponsors(data) { setStoreData("k_sponsors", data); }

export function getSponsorships() { return getStoreData("k_sponsorships", DEFAULT_SPONSORSHIPS); }
export function setSponsorships(data) { setStoreData("k_sponsorships", data); }

export function getPayments() { return getStoreData("k_payments", DEFAULT_PAYMENTS); }
export function setPayments(data) { setStoreData("k_payments", data); }

export function getDocs() { return getStoreData("k_docs", DEFAULT_DOCS); }
export function setDocs(data) { setStoreData("k_docs", data); }

export function getNotifications() { return getStoreData("k_notifications", DEFAULT_NOTIFICATIONS); }
export function setNotifications(data) { setStoreData("k_notifications", data); }

export function getAuditLogs() { return getStoreData("k_audit", DEFAULT_AUDIT_LOG); }
export function setAuditLogs(data) { setStoreData("k_audit", data); }

// Generate simple alerts
export function showNotificationAlert(title, text, icon = 'success') {
  if (window.Swal) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'حسناً',
      customClass: {
        confirmButton: 'btn btn-primary'
      }
    });
  } else {
    alert(`${title}\n${text}`);
  }
}

// Global relative path solver
export function getRelativePathPrefix() {
  const path = window.location.pathname;
  if (path.includes('/sponsor/') || path.includes('/guardian/') || path.includes('/admin/')) {
    return '../';
  } else if (path.includes('/sponsorship/') || path.includes('/auth/')) {
    return '../';
  }
  return '';
}

// Dynamic Component Injector Helper
export async function injectComponent(containerId, componentUrl, activeId = '') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  try {
    const response = await fetch(componentUrl);
    if (!response.ok) throw new Error(`Could not load component from ${componentUrl}`);
    let html = await response.text();
    
    // Replace prefix according to nesting
    const prefix = getRelativePathPrefix();
    html = html.replace(/href="index\.html"/g, `href="${prefix}index.html"`);
    html = html.replace(/href="orphans\.html"/g, `href="${prefix}orphans.html"`);
    html = html.replace(/href="contact\.html"/g, `href="${prefix}contact.html"`);
    html = html.replace(/href="auth\/login\.html"/g, `href="${prefix}auth/login.html"`);
    html = html.replace(/href="auth\/register\.html"/g, `href="${prefix}auth/register.html"`);
    html = html.replace(/href="sponsor\/dashboard\.html"/g, `href="${prefix}sponsor/dashboard.html"`);
    html = html.replace(/href="sponsor\/sponsorships\.html"/g, `href="${prefix}sponsor/sponsorships.html"`);
    html = html.replace(/href="sponsor\/payments\.html"/g, `href="${prefix}sponsor/payments.html"`);
    html = html.replace(/href="sponsor\/documentation\.html"/g, `href="${prefix}sponsor/documentation.html"`);
    html = html.replace(/href="sponsor\/notifications\.html"/g, `href="${prefix}sponsor/notifications.html"`);
    html = html.replace(/href="sponsor\/profile\.html"/g, `href="${prefix}sponsor/profile.html"`);
    
    html = html.replace(/href="guardian\/dashboard\.html"/g, `href="${prefix}guardian/dashboard.html"`);
    html = html.replace(/href="guardian\/children\.html"/g, `href="${prefix}guardian/children.html"`);
    html = html.replace(/href="guardian\/upload-docs\.html"/g, `href="${prefix}guardian/upload-docs.html"`);
    html = html.replace(/href="guardian\/received-payments\.html"/g, `href="${prefix}guardian/received-payments.html"`);
    html = html.replace(/href="guardian\/profile\.html"/g, `href="${prefix}guardian/profile.html"`);

    html = html.replace(/href="admin\/dashboard\.html"/g, `href="${prefix}admin/dashboard.html"`);
    html = html.replace(/href="admin\/orphans\.html"/g, `href="${prefix}admin/orphans.html"`);
    html = html.replace(/href="admin\/families\.html"/g, `href="${prefix}admin/families.html"`);
    html = html.replace(/href="admin\/sponsors\.html"/g, `href="${prefix}admin/sponsors.html"`);
    html = html.replace(/href="admin\/sponsorships\.html"/g, `href="${prefix}admin/sponsorships.html"`);
    html = html.replace(/href="admin\/payments\.html"/g, `href="${prefix}admin/payments.html"`);
    html = html.replace(/href="admin\/documentation\.html"/g, `href="${prefix}admin/documentation.html"`);
    html = html.replace(/href="admin\/users\.html"/g, `href="${prefix}admin/users.html"`);
    html = html.replace(/href="admin\/permissions\.html"/g, `href="${prefix}admin/permissions.html"`);
    html = html.replace(/href="admin\/reports\.html"/g, `href="${prefix}admin/reports.html"`);
    html = html.replace(/href="admin\/notifications\.html"/g, `href="${prefix}admin/notifications.html"`);
    html = html.replace(/href="admin\/audit-log\.html"/g, `href="${prefix}admin/audit-log.html"`);
    html = html.replace(/src="assets\/images\/logo\.svg"/g, `src="${prefix}assets/images/logo.png"`);
    html = html.replace(/src="images\/logo\.svg"/g, `src="${prefix}assets/images/logo.png"`);
    html = html.replace(/src="\.\.\/assets\/images\/logo\.svg"/g, `src="${prefix}assets/images/logo.png"`);
    html = html.replace(/src="assets\/images\/logo\.png"/g, `src="${prefix}assets/images/logo.png"`);
    html = html.replace(/src="\.\.\/assets\/images\/logo\.png"/g, `src="${prefix}assets/images/logo.png"`);
    html = html.replace(/onerror="[^"]*"/g, ''); // Clear any old error fallbacks that look poor
    
    container.innerHTML = html;
    
    // Dynamically build/populate sidebar menu inside the container to avoid unexecuted script tags
    const list = container.querySelector('#dynamic-menu-list');
    if (list) {
      const path = window.location.pathname;
      let menuHtml = '';
      if (path.includes('/sponsor/')) {
        menuHtml = `
          <li class="menu-item" id="menu-dashboard">
            <a href="${prefix}sponsor/dashboard.html"><i class="bi bi-speedometer2"></i> الرئيسية</a>
          </li>
          <li class="menu-item" id="menu-sponsorships">
            <a href="${prefix}sponsor/sponsorships.html"><i class="bi bi-heart-fill"></i> كفالاتي النشطة</a>
          </li>
          <li class="menu-item" id="menu-payments">
            <a href="${prefix}sponsor/payments.html"><i class="bi bi-credit-card-fill"></i> المدفوعات والاشتراكات</a>
          </li>
          <li class="menu-item" id="menu-docs">
            <a href="${prefix}sponsor/documentation.html"><i class="bi bi-file-earmark-person-fill"></i> وثائق وتقارير الأيتام</a>
          </li>
          <li class="menu-item" id="menu-notifications">
            <a href="${prefix}sponsor/notifications.html"><i class="bi bi-bell-fill"></i> الإشعارات والرسائل</a>
          </li>
          <li class="menu-item" id="menu-profile">
            <a href="${prefix}sponsor/profile.html"><i class="bi bi-person-fill-gear"></i> الملف الشخصي</a>
          </li>
        `;
      } else if (path.includes('/guardian/')) {
        menuHtml = `
          <li class="menu-item" id="menu-dashboard">
            <a href="${prefix}guardian/dashboard.html"><i class="bi bi-house-door-fill"></i> الرئيسية</a>
          </li>
          <li class="menu-item" id="menu-children">
            <a href="${prefix}guardian/children.html"><i class="bi bi-people-fill"></i> الأطفال المسجلين</a>
          </li>
          <li class="menu-item" id="menu-docs">
            <a href="${prefix}guardian/upload-docs.html"><i class="bi bi-cloud-arrow-up-fill"></i> رفع التوثيق والتقارير</a>
          </li>
          <li class="menu-item" id="menu-payments">
            <a href="${prefix}guardian/received-payments.html"><i class="bi bi-cash-stack"></i> الدفعات الواردة</a>
          </li>
          <li class="menu-item" id="menu-profile">
            <a href="${prefix}guardian/profile.html"><i class="bi bi-person-fill-gear"></i> الملف الشخصي للوصي</a>
          </li>
        `;
      } else if (path.includes('/admin/')) {
        menuHtml = `
          <li class="menu-item" id="menu-dashboard">
            <a href="${prefix}admin/dashboard.html"><i class="bi bi-grid-1x2-fill"></i> لوحة التحكم الشاملة</a>
          </li>
          <li class="menu-item" id="menu-orphans">
            <a href="${prefix}admin/orphans.html"><i class="bi bi-people-fill"></i> إدارة الأيتام</a>
          </li>
          <li class="menu-item" id="menu-families">
            <a href="${prefix}admin/families.html"><i class="bi bi-house-fill"></i> إدارة العائلات والوصي</a>
          </li>
          <li class="menu-item" id="menu-sponsors">
            <a href="${prefix}admin/sponsors.html"><i class="bi bi-heart-fill"></i> إدارة الكافلين</a>
          </li>
          <li class="menu-item" id="menu-sponsorships">
            <a href="${prefix}admin/sponsorships.html"><i class="bi bi-arrow-repeat"></i> الكفالات النشطة</a>
          </li>
          <li class="menu-item" id="menu-payments">
            <a href="${prefix}admin/payments.html"><i class="bi bi-wallet2"></i> إدارة المدفوعات</a>
          </li>
          <li class="menu-item" id="menu-docs">
            <a href="${prefix}admin/documentation.html"><i class="bi bi-file-earmark-lock-fill"></i> مراجعة التوثيق</a>
          </li>
          <li class="menu-item" id="menu-users">
            <a href="${prefix}admin/users.html"><i class="bi bi-person-circle"></i> إدارة المستخدمين</a>
          </li>
          <li class="menu-item" id="menu-permissions">
            <a href="${prefix}admin/permissions.html"><i class="bi bi-key-fill"></i> الصلاحيات والأدوار</a>
          </li>
          <li class="menu-item" id="menu-reports">
            <a href="${prefix}admin/reports.html"><i class="bi bi-file-earmark-bar-graph-fill"></i> التقارير والتحليلات</a>
          </li>
          <li class="menu-item" id="menu-notifications">
            <a href="${prefix}admin/notifications.html"><i class="bi bi-send-fill"></i> الإرسال الجماعي والإشعار</a>
          </li>
          <li class="menu-item" id="menu-audit">
            <a href="${prefix}admin/audit-log.html"><i class="bi bi-journal-text"></i> سجل العمليات السري</a>
          </li>
        `;
      }
      list.innerHTML = menuHtml;
    }
    
    // Apply active class if navigation ID is matched
    if (activeId) {
      const activeEl = container.querySelector(`#${activeId}`);
      if (activeEl) {
        activeEl.classList.add('active');
        // If inside a li item
        if (activeEl.tagName === 'A' && activeEl.parentElement) {
          activeEl.parentElement.classList.add('active');
        }
      }
    }
    applyLanguage();
  } catch (err) {
    console.error(`Error injection components: `, err);
  }
}

// Global initializer to load elements dynamically when script is included
// Bilingual Multi-Language Support Engine
export function applyLanguage() {
  const currentLang = localStorage.getItem("k_lang") || "ar";
  
  if (currentLang === "en") {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    // Class-based styles for LTR
    document.body.classList.add("ltr-mode");
  } else {
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
    document.body.classList.remove("ltr-mode");
  }

  // Translate Navbar
  const doc_home = document.getElementById("nav-link-home");
  const doc_orphans = document.getElementById("nav-link-orphans");
  const doc_steps = document.getElementById("nav-link-steps");
  const doc_brand = document.getElementById("nav-brand-text");
  const doc_login = document.getElementById("nav-btn-login");
  const doc_register = document.getElementById("nav-btn-register");
  const doc_lang_label = document.getElementById("current-lang-label");

  const checkAr = document.getElementById("check-lang-ar");
  const checkEn = document.getElementById("check-lang-en");

  if (currentLang === "en") {
    if (doc_home) doc_home.innerText = "Home";
    if (doc_orphans) doc_orphans.innerText = "Orphans Grid";
    if (doc_steps) doc_steps.innerText = "Sponsorship Guide";
    if (doc_brand) doc_brand.innerText = "KANAF Platform";
    if (doc_login) doc_login.innerText = "Login";
    if (doc_register) doc_register.innerText = "Start Sponsorship";
    if (doc_lang_label) doc_lang_label.innerText = "English";
    if (checkAr) checkAr.classList.add("d-none");
    if (checkEn) checkEn.classList.remove("d-none");
    
    // Quick translation for major pages text if English is active
    const heroTitle = document.querySelector(".hero-container h1");
    if (heroTitle) heroTitle.innerText = "Comprehensive Electronic Sponsorship for Palestinian Orphans in Gaza";
    const heroSub = document.querySelector(".hero-container p");
    if (heroSub) heroSub.innerText = "Join Kanaf Platform to connect sponsors worldwide with Gazan children who lost their parents, ensuring educational, medical, and living support.";
  } else {
    if (doc_home) doc_home.innerText = "الرئيسية";
    if (doc_orphans) doc_orphans.innerText = "قائمة الأيتام";
    if (doc_steps) doc_steps.innerText = "خطوات الكفالة";
    if (doc_brand) doc_brand.innerText = "منصة كَنَفْ";
    if (doc_login) doc_login.innerText = "تسجيل الدخول";
    if (doc_register) doc_register.innerText = "ابدأ الكفالة الآن";
    if (doc_lang_label) doc_lang_label.innerText = "العربية";
    if (checkAr) checkAr.classList.remove("d-none");
    if (checkEn) checkEn.classList.add("d-none");
  }

  // Also adjust sidebar alignment in dashboards
  const sidebar = document.getElementById("kanaf-sidebar");
  if (sidebar && currentLang === "en") {
    sidebar.style.right = "auto";
    sidebar.style.left = "0";
  }
}

// Bind to window to allow HTML button calling
window.changeLanguage = function(lang) {
  localStorage.setItem("k_lang", lang);
  applyLanguage();
  if (window.Swal) {
    Swal.fire({
      title: lang === 'en' ? 'Language Switched' : 'تم تغيير اللغة',
      text: lang === 'en' ? 'The website layout has been successfully changed to English.' : 'تم تحويل واجهة المنصة إلى اللغة العربية بنجاح.',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      window.location.reload();
    });
  } else {
    window.location.reload();
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const prefix = getRelativePathPrefix();
  
  // Try to load header or footer or sidebar depending on what element containers are in the page
  if (document.getElementById("kanaf-header")) {
    await injectComponent("kanaf-header", `${prefix}components/header.html`);
  }
  if (document.getElementById("kanaf-footer")) {
    await injectComponent("kanaf-footer", `${prefix}components/footer.html`);
  }
  if (document.getElementById("kanaf-sidebar")) {
    // Determine active menu item ID based on page name
    const path = window.location.pathname;
    let activeId = '';
    if (path.includes('dashboard.html')) activeId = 'menu-dashboard';
    else if (path.includes('sponsorships.html') || path.includes('sponsorship-detail.html')) activeId = 'menu-sponsorships';
    else if (path.includes('payments.html') || path.includes('received-payments.html')) activeId = 'menu-payments';
    else if (path.includes('documentation.html') || path.includes('upload-docs.html')) activeId = 'menu-docs';
    else if (path.includes('notifications.html')) activeId = 'menu-notifications';
    else if (path.includes('profile.html')) activeId = 'menu-profile';
    else if (path.includes('children.html') || path.includes('child-form.html')) activeId = 'menu-children';
    else if (path.includes('orphans.html')) activeId = 'menu-orphans';
    else if (path.includes('families.html')) activeId = 'menu-families';
    else if (path.includes('sponsors.html')) activeId = 'menu-sponsors';
    else if (path.includes('users.html')) activeId = 'menu-users';
    else if (path.includes('permissions.html')) activeId = 'menu-permissions';
    else if (path.includes('reports.html')) activeId = 'menu-reports';
    else if (path.includes('audit-log.html')) activeId = 'menu-audit';
    
    await injectComponent("kanaf-sidebar", `${prefix}components/sidebar.html`, activeId);

    // Inject sidebar toggler button on mobile/tablet viewports dynamically
    const header = document.querySelector('.dashboard-header');
    if (header && !header.querySelector('.sidebar-toggler')) {
      const toggler = document.createElement('button');
      toggler.className = 'btn btn-outline-success sidebar-toggler me-3 d-md-none';
      toggler.type = 'button';
      toggler.innerHTML = '<i class="bi bi-list fs-4"></i>';
      toggler.style.borderRadius = '10px';
      toggler.style.padding = '4px 10px';
      toggler.style.backgroundColor = '#edf7f1';
      toggler.style.borderColor = '#19532B';
      toggler.style.color = '#19532B';
      toggler.style.display = 'flex';
      toggler.style.alignItems = 'center';
      toggler.style.justifyContent = 'center';
      
      toggler.addEventListener('click', () => {
        const sidebarWrapper = document.getElementById('kanaf-sidebar-wrapper');
        if (sidebarWrapper) {
          sidebarWrapper.classList.toggle('show');
        }
      });
      
      if (header.firstChild) {
        header.insertBefore(toggler, header.firstChild);
      } else {
        header.appendChild(toggler);
      }
    }

    // Inject sidebar close button on mobile/tablet viewports inside the sidebar
    const sidebarWrapper = document.getElementById('kanaf-sidebar-wrapper');
    if (sidebarWrapper && !sidebarWrapper.querySelector('.sidebar-close-btn')) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'btn btn-link text-white sidebar-close-btn d-md-none position-absolute';
      closeBtn.setAttribute("id", "sidebar-close-dynamic-btn");
      closeBtn.style.left = '10px';
      closeBtn.style.top = '15px';
      closeBtn.style.zIndex = '1100';
      closeBtn.style.color = '#ffffff';
      closeBtn.style.textDecoration = 'none';
      closeBtn.innerHTML = '<i class="bi bi-x-lg fs-5"></i>';
      closeBtn.addEventListener('click', () => {
        sidebarWrapper.classList.remove('show');
      });
      sidebarWrapper.appendChild(closeBtn);
    }
  }
  
  // Apply language on complete page loading
  applyLanguage();
});
