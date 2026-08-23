const VG_LANGUAGES = [
  ['de', 'DE'], ['en', 'EN'], ['nl', 'NL'], ['es', 'ES'], ['fr', 'FR'], ['ar', 'AR']
];

const VG_I18N = {
  de: {
    navFeatures: 'Funktionen', navMarkerTest: 'Marker-Test', navPrivacy: 'Datenschutzerklärung', navImprint: 'Impressum', navContact: 'Kontakt', backHome: 'Zurück zur Startseite',
    heroSubtitle: 'Eine Android-App zum Verwalten von Kleinteilen, Regalen, Fächern und Marker-Etiketten — lokal auf deinem Gerät.',
    featureShelvesTitle: 'Regale verwalten', featureShelvesBody: 'Lege Regale und Fächer an, ordne Artikel zu und behalte freie oder belegte Marker im Blick.',
    featureScanTitle: 'Live Scan', featureScanBody: 'Erkenne ArUco-Marker mit der Kamera und öffne schnell die zugehörigen Artikeldetails.',
    featureOfflineTitle: 'Offline nutzbar', featureOfflineBody: 'VisionGrid ist für die lokale Nutzung gebaut. Deine Lagerdaten bleiben auf deinem Gerät.',
    markerTitle: 'Marker 0 testen', markerBody: 'Öffne die Seite auf dem Handy, starte die Kamera und halte den Testmarker <strong>0</strong> ins Bild. Sobald der Marker erkannt wird, zeigt VisionGrid direkt das Etikett.',
    cameraStart: 'Kamera starten', demoShow: 'Demo anzeigen', reset: 'Zurücksetzen', cameraEmpty: 'Kamera starten und Marker 0 ins Bild halten.', ready: 'Bereit für Live-Test.', opencvReady: 'OpenCV bereit – Kamera starten und Marker 0 testen.', cameraActive: 'Kamera aktiv – Marker 0 ins mittlere Bild halten.', opencvLoading: 'Kamera aktiv – OpenCV lädt noch kurz ...', detected: 'Marker 0 live erkannt', demoDetected: 'Demo-Marker 0 erkannt', notVisible: 'Marker nicht sichtbar – Marker 0 ins mittlere Bild halten.', noCamera: 'Dieser Browser unterstützt keinen Kamerazugriff.', cameraError: 'Kamera konnte nicht gestartet werden. Bitte HTTPS/localhost und Kamera-Rechte prüfen.', scanError: 'OpenCV-Scanfehler – bitte Marker größer und heller ins Bild halten.', stock: 'Bestand: 1 / 1', testFound: 'Marker 0 · Test erkannt', footerHome: '© 2026 VisionGrid · Android-App für Regale, Marker und Kleinteile',
    privacyTitle: 'Datenschutzerklärung', privacyNotice: 'Stand: 23. August 2026. Diese Datenschutzerklärung beschreibt die Datenverarbeitung der Android-App VisionGrid und dieser Webseite.', responsibleTitle: '1. Verantwortlicher', responsibleBody: 'Verantwortlich für VisionGrid ist der Anbieter der App und Webseite.<br>Jamal Samuel Said<br>Kerschensteinerstraße 7<br>97422 Schweinfurt<br>Deutschland<br>Kontakt: <strong>steamdmovieyt@gmail.com</strong>', appDataTitle: '2. Welche Daten verarbeitet die App VisionGrid?', appDataBody: 'Die Android-App VisionGrid speichert vom Nutzer eingegebene Daten lokal auf dem Gerät. Dazu können gehören:', cameraTitle: '3. Kamera', cameraBody: 'Die Kamera wird in der App verwendet, um ArUco-Marker zu erkennen. Kamerabilder werden in der App lokal verarbeitet und nicht an einen Server des Anbieters übertragen. Die Kamera wird nur genutzt, wenn der Nutzer die Kamerafunktion startet und die Android-Kameraberechtigung erteilt.', micTitle: '4. Mikrofon und Sprachbefehle', micBody: 'Falls Sprachfunktionen genutzt werden, kann die App das Mikrofon verwenden, um Sprachbefehle wie Suche oder Scan-Start zu erkennen. Die Mikrofonfunktion wird nur genutzt, wenn der Nutzer sie startet und die Android-Mikrofonberechtigung erteilt. VisionGrid speichert keine Audioaufnahmen dauerhaft in der App-Datenbank.', webTitle: '5. Webseite und Marker-Test', webBody1: 'Diese Webseite enthält einen freiwilligen Marker-Test. Wenn der Nutzer die Kamera im Browser startet, verarbeitet der Browser das Kamerabild lokal auf dem Gerät, um den Testmarker zu erkennen. Die Webseite speichert diese Kamerabilder nicht und lädt sie nicht zum Anbieter hoch.', webBody2: 'Für die Marker-Erkennung auf der Webseite wird OpenCV.js von <code>docs.opencv.org</code> geladen. Beim Laden dieser Datei kann der Browser technisch notwendige Verbindungsdaten, zum Beispiel IP-Adresse, Zeitpunkt des Zugriffs und Browserinformationen, an den Betreiber dieser externen Quelle übertragen.', legalTitle: '6. Rechtsgrundlage und Zweck', legalBody: 'Die Verarbeitung lokal eingegebener App-Daten erfolgt zur Bereitstellung der App-Funktionen, insbesondere zur Verwaltung von Artikeln, Beständen, Regalen, Fächern und Markern. Soweit eine Einwilligung erforderlich ist, zum Beispiel für den Kamerazugriff, erfolgt die Verarbeitung auf Grundlage der vom Nutzer erteilten Berechtigung. Die Verarbeitung der Webseite erfolgt zur Bereitstellung der Webseite und des freiwilligen Marker-Tests.', storageTitle: '7. Speicherung und Löschung', storageBody: 'Die App speichert Daten lokal auf dem Gerät, bis der Nutzer sie innerhalb der App löscht, die App-Daten über Android löscht oder die App deinstalliert. Da VisionGrid derzeit kein Nutzerkonto bereitstellt, gibt es keine serverseitigen Kontodaten beim Anbieter.', sharingTitle: '8. Weitergabe an Dritte', sharingBody: 'VisionGrid verkauft keine personenbezogenen Daten und gibt lokal gespeicherte Lagerdaten nicht an Dritte weiter. Eine Datenübertragung kann nur stattfinden, wenn der Nutzer selbst Daten exportiert, teilt oder externe Dienste aufruft.', internetTitle: '9. Internetverbindung', internetBody: 'Die Kernfunktionen der App sind für lokale Nutzung ausgelegt. Falls zukünftig Online-Funktionen ergänzt werden, wird diese Datenschutzerklärung entsprechend aktualisiert. Die Webseite benötigt für den OpenCV-basierten Marker-Test eine Internetverbindung, solange OpenCV.js von einer externen Quelle geladen wird.', rightsTitle: '10. Rechte der Nutzer', rightsBody: 'Nutzer können ihre lokal gespeicherten Daten innerhalb der App ändern oder löschen. Zusätzlich können App-Daten über die Android-Systemeinstellungen gelöscht werden. Soweit personenbezogene Daten verarbeitet werden, können Nutzer je nach anwendbarem Recht Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch verlangen. Nutzer können sich außerdem an eine zuständige Datenschutzaufsichtsbehörde wenden.', childrenTitle: '11. Kinder', childrenBody: 'VisionGrid richtet sich nicht speziell an Kinder. Die App ist als Werkzeug zur Organisation von Regalen, Markern und Kleinteilen gedacht.', changesTitle: '12. Änderungen', changesBody: 'Diese Datenschutzerklärung kann angepasst werden, wenn sich Funktionen der App oder Webseite ändern.', privacyContactTitle: '13. Kontakt', privacyContactBody: 'Bei Fragen zum Datenschutz: <strong>steamdmovieyt@gmail.com</strong>',
    item1: 'Artikelname, Beschreibung, Notizen und Suchbegriffe', item2: 'Bestand, Zielbestand und Warnwerte', item3: 'Regalnamen, Fachpositionen und Marker-IDs', item4: 'optional ausgewählte Artikelbilder', item5: 'App-Einstellungen wie Sprache, Darstellung oder Warnwerte',
    imprintTitle: 'Impressum', imprintLegal: 'Angaben gemäß § 5 DDG', imprintContact: 'Kontakt', imprintResponsible: 'Verantwortlich für den Inhalt', phone: 'Telefon', email: 'E-Mail'
  },
  en: {
    navFeatures: 'Features', navMarkerTest: 'Marker test', navPrivacy: 'Privacy Policy', navImprint: 'Legal Notice', navContact: 'Contact', backHome: 'Back to homepage', heroSubtitle: 'An Android app for managing small parts, shelves, compartments and marker labels — locally on your device.', featureShelvesTitle: 'Manage shelves', featureShelvesBody: 'Create shelves and compartments, assign items and keep an eye on free or occupied markers.', featureScanTitle: 'Live scan', featureScanBody: 'Detect ArUco markers with the camera and quickly open the matching item details.', featureOfflineTitle: 'Works offline', featureOfflineBody: 'VisionGrid is built for local use. Your inventory data stays on your device.', markerTitle: 'Test marker 0', markerBody: 'Open this page on your phone, start the camera and hold test marker <strong>0</strong> in view. Once detected, VisionGrid shows the label directly.', cameraStart: 'Start camera', demoShow: 'Show demo', reset: 'Reset', cameraEmpty: 'Start the camera and hold marker 0 in view.', ready: 'Ready for live test.', opencvReady: 'OpenCV ready – start camera and test marker 0.', cameraActive: 'Camera active – hold marker 0 in the center.', opencvLoading: 'Camera active – OpenCV is still loading ...', detected: 'Marker 0 detected live', demoDetected: 'Demo marker 0 detected', notVisible: 'Marker not visible – hold marker 0 in the center.', noCamera: 'This browser does not support camera access.', cameraError: 'Camera could not be started. Please check HTTPS/localhost and camera permissions.', scanError: 'OpenCV scan error – hold the marker larger and brighter in view.', stock: 'Stock: 1 / 1', testFound: 'Marker 0 · Test detected', footerHome: '© 2026 VisionGrid · Android app for shelves, markers and small parts', privacyTitle: 'Privacy Policy', privacyNotice: 'Last updated: August 23, 2026. This privacy policy describes data processing for the VisionGrid Android app and this website.', responsibleTitle: '1. Controller', responsibleBody: 'The provider of the app and website is responsible for VisionGrid.<br>Jamal Samuel Said<br>Kerschensteinerstraße 7<br>97422 Schweinfurt<br>Germany<br>Contact: <strong>steamdmovieyt@gmail.com</strong>', appDataTitle: '2. What data does the VisionGrid app process?', appDataBody: 'The VisionGrid Android app stores user-entered data locally on the device. This may include:', cameraTitle: '3. Camera', cameraBody: 'The camera is used in the app to detect ArUco markers. Camera images are processed locally in the app and are not sent to a provider server. The camera is only used when the user starts a camera function and grants Android camera permission.', micTitle: '4. Microphone and voice commands', micBody: 'If voice features are used, the app may use the microphone to recognize voice commands such as search or scan start. The microphone is only used when the user starts it and grants Android microphone permission. VisionGrid does not permanently store audio recordings in the app database.', webTitle: '5. Website and marker test', webBody1: 'This website contains an optional marker test. When the user starts the browser camera, the browser processes the camera image locally on the device to detect the test marker. The website does not store these camera images or upload them to the provider.', webBody2: 'For marker detection on the website, OpenCV.js is loaded from <code>docs.opencv.org</code>. When this file is loaded, the browser may transmit technically necessary connection data, such as IP address, access time and browser information, to the operator of that external source.', legalTitle: '6. Legal basis and purpose', legalBody: 'Locally entered app data is processed to provide app functions, especially managing items, stock, shelves, compartments and markers. Where consent is required, such as camera access, processing is based on the permission granted by the user. Website processing serves to provide the website and optional marker test.', storageTitle: '7. Storage and deletion', storageBody: 'The app stores data locally on the device until the user deletes it in the app, deletes app data via Android, or uninstalls the app. Since VisionGrid currently provides no user account, the provider stores no server-side account data.', sharingTitle: '8. Disclosure to third parties', sharingBody: 'VisionGrid does not sell personal data and does not disclose locally stored inventory data to third parties. Data transfer can only occur if the user exports, shares or opens external services themselves.', internetTitle: '9. Internet connection', internetBody: 'The core app functions are designed for local use. If online features are added in the future, this privacy policy will be updated. The website requires an internet connection for the OpenCV-based marker test while OpenCV.js is loaded from an external source.', rightsTitle: '10. User rights', rightsBody: 'Users can change or delete their locally stored data inside the app. App data can also be deleted via Android system settings. Where personal data is processed, users may request access, rectification, deletion, restriction of processing, data portability and objection, depending on applicable law. Users may also contact a competent data protection authority.', childrenTitle: '11. Children', childrenBody: 'VisionGrid is not specifically directed at children. The app is intended as a tool for organizing shelves, markers and small parts.', changesTitle: '12. Changes', changesBody: 'This privacy policy may be updated if app or website features change.', privacyContactTitle: '13. Contact', privacyContactBody: 'Privacy questions: <strong>steamdmovieyt@gmail.com</strong>', item1: 'Item name, description, notes and search terms', item2: 'Stock, target stock and warning values', item3: 'Shelf names, compartment positions and marker IDs', item4: 'optionally selected item images', item5: 'App settings such as language, appearance or warning values', imprintTitle: 'Legal Notice', imprintLegal: 'Information according to § 5 DDG', imprintContact: 'Contact', imprintResponsible: 'Responsible for content', phone: 'Phone', email: 'Email'
  }
};

VG_I18N.nl = {
  ...VG_I18N.en,
  navFeatures: 'Functies', navMarkerTest: 'Markertest', navPrivacy: 'Privacybeleid', navImprint: 'Impressum', navContact: 'Contact', backHome: 'Terug naar startpagina',
  heroSubtitle: 'Een Android-app voor het beheren van kleine onderdelen, schappen, vakken en markerlabels — lokaal op je apparaat.',
  featureShelvesTitle: 'Schappen beheren', featureShelvesBody: 'Maak schappen en vakken aan, wijs artikelen toe en houd vrije of bezette markers in de gaten.',
  featureScanTitle: 'Live scan', featureScanBody: 'Herken ArUco-markers met de camera en open snel de bijbehorende artikeldetails.',
  featureOfflineTitle: 'Offline bruikbaar', featureOfflineBody: 'VisionGrid is gebouwd voor lokaal gebruik. Je voorraadgegevens blijven op je apparaat.',
  markerTitle: 'Marker 0 testen', markerBody: 'Open deze pagina op je telefoon, start de camera en houd testmarker <strong>0</strong> in beeld. Zodra de marker wordt herkend, toont VisionGrid direct het label.',
  cameraStart: 'Camera starten', demoShow: 'Demo tonen', reset: 'Resetten', cameraEmpty: 'Start de camera en houd marker 0 in beeld.', ready: 'Klaar voor live test.',
  opencvReady: 'OpenCV klaar – start de camera en test marker 0.', cameraActive: 'Camera actief – houd marker 0 in het midden.', opencvLoading: 'Camera actief – OpenCV laadt nog ...',
  detected: 'Marker 0 live herkend', demoDetected: 'Demo-marker 0 herkend', notVisible: 'Marker niet zichtbaar – houd marker 0 in het midden.', noCamera: 'Deze browser ondersteunt geen cameratoegang.',
  cameraError: 'Camera kon niet worden gestart. Controleer HTTPS/localhost en camerarechten.', scanError: 'OpenCV-scanfout – houd de marker groter en helderder in beeld.',
  stock: 'Voorraad: 1 / 1', testFound: 'Marker 0 · Test herkend', footerHome: '© 2026 VisionGrid · Android-app voor schappen, markers en kleine onderdelen',
  privacyTitle: 'Privacybeleid', imprintTitle: 'Impressum', imprintContact: 'Contact', imprintResponsible: 'Verantwoordelijk voor de inhoud', phone: 'Telefoon'
};
VG_I18N.es = {
  ...VG_I18N.en,
  navFeatures: 'Funciones', navMarkerTest: 'Prueba de marcador', navPrivacy: 'Política de privacidad', navImprint: 'Aviso legal', navContact: 'Contacto', backHome: 'Volver al inicio',
  heroSubtitle: 'Una app Android para gestionar piezas pequeñas, estanterías, compartimentos y etiquetas de marcador — localmente en tu dispositivo.',
  featureShelvesTitle: 'Gestionar estanterías', featureShelvesBody: 'Crea estanterías y compartimentos, asigna artículos y controla marcadores libres u ocupados.',
  featureScanTitle: 'Escaneo en vivo', featureScanBody: 'Detecta marcadores ArUco con la cámara y abre rápidamente los detalles del artículo.',
  featureOfflineTitle: 'Uso sin conexión', featureOfflineBody: 'VisionGrid está diseñado para uso local. Tus datos de inventario permanecen en tu dispositivo.',
  markerTitle: 'Probar marcador 0', markerBody: 'Abre esta página en tu móvil, inicia la cámara y muestra el marcador de prueba <strong>0</strong>. Cuando se detecte, VisionGrid mostrará la etiqueta.',
  cameraStart: 'Iniciar cámara', demoShow: 'Mostrar demo', reset: 'Restablecer', cameraEmpty: 'Inicia la cámara y muestra el marcador 0.', ready: 'Listo para la prueba en vivo.',
  opencvReady: 'OpenCV listo – inicia la cámara y prueba el marcador 0.', cameraActive: 'Cámara activa – centra el marcador 0.', opencvLoading: 'Cámara activa – OpenCV sigue cargando ...',
  detected: 'Marcador 0 detectado en vivo', demoDetected: 'Marcador demo 0 detectado', notVisible: 'Marcador no visible – centra el marcador 0.', noCamera: 'Este navegador no admite acceso a la cámara.',
  cameraError: 'No se pudo iniciar la cámara. Comprueba HTTPS/localhost y los permisos.', scanError: 'Error de escaneo OpenCV – muestra el marcador más grande y con más luz.',
  stock: 'Stock: 1 / 1', testFound: 'Marcador 0 · Prueba detectada', footerHome: '© 2026 VisionGrid · App Android para estanterías, marcadores y piezas pequeñas',
  privacyTitle: 'Política de privacidad', imprintTitle: 'Aviso legal', imprintContact: 'Contacto', imprintResponsible: 'Responsable del contenido', phone: 'Teléfono'
};
VG_I18N.fr = {
  ...VG_I18N.en,
  navFeatures: 'Fonctions', navMarkerTest: 'Test marqueur', navPrivacy: 'Confidentialité', navImprint: 'Mentions légales', navContact: 'Contact', backHome: 'Retour à l’accueil',
  heroSubtitle: 'Une application Android pour gérer petites pièces, étagères, cases et étiquettes de marqueur — localement sur votre appareil.',
  featureShelvesTitle: 'Gérer les étagères', featureShelvesBody: 'Créez des étagères et des cases, associez des articles et gardez une vue sur les marqueurs libres ou occupés.',
  featureScanTitle: 'Scan en direct', featureScanBody: 'Détectez les marqueurs ArUco avec la caméra et ouvrez rapidement les détails de l’article.',
  featureOfflineTitle: 'Utilisable hors ligne', featureOfflineBody: 'VisionGrid est conçu pour une utilisation locale. Vos données restent sur votre appareil.',
  markerTitle: 'Tester le marqueur 0', markerBody: 'Ouvrez cette page sur votre téléphone, démarrez la caméra et placez le marqueur test <strong>0</strong> dans l’image. Dès qu’il est détecté, VisionGrid affiche l’étiquette.',
  cameraStart: 'Démarrer caméra', demoShow: 'Afficher démo', reset: 'Réinitialiser', cameraEmpty: 'Démarrez la caméra et placez le marqueur 0 dans l’image.', ready: 'Prêt pour le test en direct.',
  opencvReady: 'OpenCV prêt – démarrez la caméra et testez le marqueur 0.', cameraActive: 'Caméra active – centrez le marqueur 0.', opencvLoading: 'Caméra active – OpenCV charge encore ...',
  detected: 'Marqueur 0 détecté en direct', demoDetected: 'Marqueur démo 0 détecté', notVisible: 'Marqueur non visible – centrez le marqueur 0.', noCamera: 'Ce navigateur ne prend pas en charge l’accès caméra.',
  cameraError: 'Impossible de démarrer la caméra. Vérifiez HTTPS/localhost et les autorisations.', scanError: 'Erreur de scan OpenCV – placez le marqueur plus grand et plus clair dans l’image.',
  stock: 'Stock : 1 / 1', testFound: 'Marqueur 0 · Test détecté', footerHome: '© 2026 VisionGrid · Application Android pour étagères, marqueurs et petites pièces',
  privacyTitle: 'Confidentialité', imprintTitle: 'Mentions légales', imprintContact: 'Contact', imprintResponsible: 'Responsable du contenu', phone: 'Téléphone'
};
VG_I18N.ar = {
  ...VG_I18N.en,
  navFeatures: 'الميزات', navMarkerTest: 'اختبار العلامة', navPrivacy: 'سياسة الخصوصية', navImprint: 'بيانات قانونية', navContact: 'تواصل', backHome: 'العودة للرئيسية',
  heroSubtitle: 'تطبيق أندرويد لإدارة القطع الصغيرة والرفوف والخانات وملصقات العلامات — محلياً على جهازك.',
  featureShelvesTitle: 'إدارة الرفوف', featureShelvesBody: 'أنشئ رفوفاً وخانات، واربط العناصر، وتابع العلامات الفارغة أو المستخدمة.',
  featureScanTitle: 'مسح مباشر', featureScanBody: 'اكتشف علامات ArUco بالكاميرا وافتح تفاصيل العنصر بسرعة.',
  featureOfflineTitle: 'يعمل دون اتصال', featureOfflineBody: 'VisionGrid مصمم للاستخدام المحلي. تبقى بيانات المخزون على جهازك.',
  markerTitle: 'اختبار العلامة 0', markerBody: 'افتح هذه الصفحة على الهاتف، شغّل الكاميرا، وضع علامة الاختبار <strong>0</strong> داخل الصورة. عند اكتشافها يعرض VisionGrid الملصق مباشرة.',
  cameraStart: 'تشغيل الكاميرا', demoShow: 'عرض التجربة', reset: 'إعادة ضبط', cameraEmpty: 'شغّل الكاميرا وضع العلامة 0 داخل الصورة.', ready: 'جاهز للاختبار المباشر.',
  opencvReady: 'OpenCV جاهز – شغّل الكاميرا واختبر العلامة 0.', cameraActive: 'الكاميرا تعمل – ضع العلامة 0 في الوسط.', opencvLoading: 'الكاميرا تعمل – يتم تحميل OpenCV ...',
  detected: 'تم اكتشاف العلامة 0 مباشرة', demoDetected: 'تم اكتشاف علامة التجربة 0', notVisible: 'العلامة غير ظاهرة – ضع العلامة 0 في الوسط.', noCamera: 'هذا المتصفح لا يدعم الوصول إلى الكاميرا.',
  cameraError: 'تعذر تشغيل الكاميرا. تحقق من HTTPS/localhost وأذونات الكاميرا.', scanError: 'خطأ في مسح OpenCV – اجعل العلامة أكبر وأكثر وضوحاً.',
  stock: 'المخزون: 1 / 1', testFound: 'العلامة 0 · تم اكتشاف الاختبار', footerHome: '© 2026 VisionGrid · تطبيق أندرويد للرفوف والعلامات والقطع الصغيرة',
  privacyTitle: 'سياسة الخصوصية', imprintTitle: 'بيانات قانونية', imprintContact: 'تواصل', imprintResponsible: 'المسؤول عن المحتوى', phone: 'الهاتف', email: 'البريد الإلكتروني'
};
const ALIASES = {};
function vgText(key) {
  const lang = localStorage.getItem('visiongridLanguage') || 'de';
  const dict = VG_I18N[lang] || VG_I18N[ALIASES[lang]] || VG_I18N.de;
  return dict[key] || VG_I18N.de[key] || key;
}
function setVisionGridLanguage(lang) {
  localStorage.setItem('visiongridLanguage', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = vgText(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-html]').forEach(el => el.innerHTML = vgText(el.dataset.i18nHtml));
  document.querySelectorAll('[data-i18n-prefix]').forEach(el => el.textContent = `${vgText(el.dataset.i18nPrefix)}: `);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}
function initVisionGridLanguage() {
  const target = document.querySelector('[data-language-switch]') || document.querySelector('nav') || document.querySelector('.topbar');
  if (target && !document.querySelector('.language-switch')) {
    const wrap = document.createElement('div');
    wrap.className = 'language-switch';
    wrap.setAttribute('aria-label', 'Language selection');
    VG_LANGUAGES.forEach(([code, label]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-btn';
      btn.dataset.lang = code;
      btn.textContent = label;
      btn.addEventListener('click', () => setVisionGridLanguage(code));
      wrap.appendChild(btn);
    });
    target.appendChild(wrap);
  }
  setVisionGridLanguage(localStorage.getItem('visiongridLanguage') || 'de');
}
document.addEventListener('DOMContentLoaded', initVisionGridLanguage);
