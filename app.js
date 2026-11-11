const months = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

const soilNames = {
  loamy: "طميية أو مزيجية",
  sandy: "رملية جيدة الصرف",
  clay: "طينية",
  silt: "غرينية",
};

const crops = [
  { name: "خس", en: "Lettuce", icon: "🥬", months: [1, 2, 3, 9, 10, 11, 12], soils: ["loamy", "sandy", "silt"], season: "45–70 يومًا", method: "بذور أو شتلات", soil: "تربة خصبة رطبة وجيدة الصرف" },
  { name: "سبانخ", en: "Spinach", icon: "🌿", months: [1, 2, 3, 9, 10, 11, 12], soils: ["loamy", "sandy", "silt"], season: "35–50 يومًا", method: "بذور مباشرة", soil: "تربة غنية ورطبة باعتدال" },
  { name: "جزر", en: "Carrot", icon: "🥕", months: [1, 2, 3, 8, 9, 10, 11, 12], soils: ["sandy", "loamy", "silt"], season: "70–100 يوم", method: "بذور مباشرة", soil: "تربة عميقة مفككة وخالية من الحجارة" },
  { name: "فجل", en: "Radish", icon: "🔴", months: [1, 2, 3, 9, 10, 11, 12], soils: ["loamy", "sandy", "silt"], season: "25–40 يومًا", method: "بذور مباشرة", soil: "تربة خفيفة جيدة الصرف" },
  { name: "بازلاء", en: "Peas", icon: "🫛", months: [1, 2, 3, 9, 10, 11, 12], soils: ["loamy", "sandy", "silt"], season: "60–80 يومًا", method: "بذور مباشرة", soil: "تربة جيدة الصرف وغنية بالمادة العضوية" },
  { name: "طماطم", en: "Tomato", icon: "🍅", months: [2, 3, 4, 5, 6, 7, 8], soils: ["loamy", "sandy"], season: "70–100 يوم", method: "شتلات", soil: "تربة خصبة جيدة الصرف" },
  { name: "خيار", en: "Cucumber", icon: "🥒", months: [3, 4, 5, 6, 7, 8], soils: ["loamy", "sandy"], season: "50–70 يومًا", method: "بذور أو شتلات", soil: "تربة دافئة غنية وجيدة الصرف" },
  { name: "كوسة", en: "Zucchini", icon: "🌱", months: [3, 4, 5, 6, 7, 8], soils: ["loamy", "sandy"], season: "45–60 يومًا", method: "بذور مباشرة", soil: "تربة خصبة ودافئة" },
  { name: "فاصوليا", en: "Beans", icon: "🫘", months: [3, 4, 5, 6, 7, 8], soils: ["loamy", "sandy", "silt"], season: "50–70 يومًا", method: "بذور مباشرة", soil: "تربة دافئة جيدة الصرف" },
  { name: "فلفل", en: "Pepper", icon: "🫑", months: [2, 3, 4, 5, 6], soils: ["loamy", "sandy"], season: "70–100 يوم", method: "شتلات", soil: "تربة دافئة خصبة وجيدة الصرف" },
  { name: "ريحان", en: "Basil", icon: "🌿", months: [3, 4, 5, 6, 7], soils: ["loamy", "sandy"], season: "60–90 يومًا", method: "بذور أو شتلات", soil: "تربة خفيفة جيدة الصرف" },
  { name: "بامية", en: "Okra", icon: "🌱", months: [4, 5, 6, 7], soils: ["loamy", "sandy"], season: "55–70 يومًا", method: "بذور مباشرة", soil: "تربة دافئة جيدة الصرف" },
  { name: "بصل", en: "Onion", icon: "🧅", months: [1, 2, 3, 9, 10, 11, 12], soils: ["loamy", "sandy", "silt"], season: "90–120 يومًا", method: "بذور أو شتلات", soil: "تربة مفككة جيدة الصرف" },
  { name: "ثوم", en: "Garlic", icon: "🧄", months: [9, 10, 11], soils: ["loamy", "sandy", "silt"], season: "150–210 أيام", method: "فصوص", soil: "تربة خصبة جيدة الصرف" },
  { name: "بطاطس", en: "Potato", icon: "🥔", months: [1, 2, 3, 8, 9, 10, 11], soils: ["loamy", "sandy"], season: "75–120 يومًا", method: "درنات التقاوي", soil: "تربة مفككة جيدة الصرف" },
  { name: "شمندر", en: "Beetroot", icon: "🟣", months: [1, 2, 3, 8, 9, 10, 11, 12], soils: ["loamy", "sandy", "silt"], season: "55–75 يومًا", method: "بذور مباشرة", soil: "تربة عميقة مفككة" },
];

const monthSelect = document.querySelector("#month-select");
const soilSelect = document.querySelector("#soil-select");
const results = document.querySelector("#results");
const resultCount = document.querySelector("#result-count");
const locationInput = document.querySelector("#location-input");
const locationStatus = document.querySelector("#location-status");
const searchButton = document.querySelector("#search-location");
const useLocationButton = document.querySelector("#use-location");
const weatherPanel = document.querySelector("#weather-panel");
const weatherTitle = document.querySelector("#weather-title");
const weatherDetails = document.querySelector("#weather-details");
const plannerForm = document.querySelector("#planner-form");
const cropForm = document.querySelector("#crop-form");
const cropFormStatus = document.querySelector("#crop-form-status");
const savedCropCount = document.querySelector("#saved-crop-count");
const plantingMonths = document.querySelector("#planting-months");
const cancelEditButton = document.querySelector("#cancel-edit");
const saveCropButton = document.querySelector("#save-crop");

let currentLocation = null;
let weatherRequestId = 0;
let editingCropId = "";
let customCrops = [];

const storageKey = "zrae-now-custom-crops";

months.forEach((month, index) => {
  const option = document.createElement("option");
  option.value = String(index + 1);
  option.textContent = month;
  monthSelect.append(option);
});
monthSelect.value = String(new Date().getMonth() + 1);

months.forEach((month, index) => {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "plantingMonths";
  checkbox.value = String(index + 1);
  label.append(checkbox, document.createTextNode(month));
  plantingMonths.append(label);
});

function isValidSavedCrop(crop) {
  return crop
    && typeof crop.id === "string"
    && typeof crop.name === "string"
    && typeof crop.en === "string"
    && typeof crop.method === "string"
    && typeof crop.season === "string"
    && typeof crop.soil === "string"
    && Array.isArray(crop.months)
    && crop.months.length > 0
    && crop.months.every((month) => Number.isInteger(month) && month >= 1 && month <= 12)
    && Array.isArray(crop.soils)
    && crop.soils.length > 0
    && crop.soils.every((soil) => Object.hasOwn(soilNames, soil));
}

function loadCustomCrops() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new Error("صيغة البيانات المحفوظة غير صحيحة.");
    const validCrops = parsed.filter(isValidSavedCrop);
    if (validCrops.length !== parsed.length) {
      cropFormStatus.textContent = "تعذرت قراءة بعض السجلات المحفوظة بصيغتها الحالية.";
      cropFormStatus.classList.add("status-error");
    }
    return validCrops;
  } catch (error) {
    cropFormStatus.textContent = error instanceof Error
      ? `تعذر تحميل بياناتك المحفوظة: ${error.message}`
      : "تعذر تحميل بياناتك المحفوظة من المتصفح.";
    cropFormStatus.classList.add("status-error");
    return [];
  }
}

function persistCustomCrops(nextCrops) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(nextCrops));
    customCrops = nextCrops;
    return true;
  } catch (error) {
    cropFormStatus.textContent = error instanceof DOMException && error.name === "QuotaExceededError"
      ? "امتلأت سعة التخزين في المتصفح. احذف بعض السجلات أو أفرغ مساحة ثم أعد المحاولة."
      : `تعذر حفظ البيانات في المتصفح${error instanceof Error ? `: ${error.message}` : "."}`;
    cropFormStatus.classList.add("status-error");
    return false;
  }
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createCropCard(crop, selectedSoil) {
  const card = makeElement("article", "crop-card");
  const top = makeElement("div", "crop-card-top");
  top.append(
    makeElement("span", "crop-icon", crop.icon || "🌱"),
    makeElement("span", "crop-tag", crop.method),
  );
  card.append(top, makeElement("h3", "", crop.name));

  if (crop.en) {
    const englishName = makeElement("p", "crop-en", crop.en);
    englishName.lang = "en";
    englishName.dir = "auto";
    card.append(englishName);
  }

  const meta = makeElement("div", "crop-meta");
  const season = makeElement("span");
  season.append(document.createTextNode("حتى الحصاد: "), makeElement("strong", "", crop.season));
  const soil = makeElement("span");
  soil.append(
    document.createTextNode("تربة مناسبة: "),
    makeElement("strong", "", selectedSoil === "all" ? "متعددة الأنواع" : soilNames[selectedSoil]),
  );
  meta.append(season, soil);
  card.append(meta, makeElement("p", "soil-note", crop.soil || "تربة مناسبة حسب اختيار المحصول"));

  if (crop.custom) {
    const actions = makeElement("div", "crop-actions");
    const editButton = makeElement("button", "crop-action", "تعديل");
    editButton.type = "button";
    editButton.dataset.cropAction = "edit";
    editButton.dataset.cropId = crop.id;
    const deleteButton = makeElement("button", "crop-action crop-action-delete", "حذف");
    deleteButton.type = "button";
    deleteButton.dataset.cropAction = "delete";
    deleteButton.dataset.cropId = crop.id;
    actions.append(editButton, deleteButton);
    card.append(actions);
  }
  return card;
}

function renderCrops() {
  const selectedMonth = Number(monthSelect.value);
  const selectedSoil = soilSelect.value;
  const matchingCrops = [...crops, ...customCrops.map((crop) => ({ ...crop, icon: "🌱", custom: true }))]
    .filter((crop) =>
    crop.months.includes(selectedMonth)
    && (selectedSoil === "all" || crop.soils.includes(selectedSoil)),
  );

  resultCount.textContent = `${matchingCrops.length} ${matchingCrops.length === 1 ? "اقتراح" : "اقتراحات"}`;
  results.replaceChildren();
  if (matchingCrops.length === 0) {
    const emptyState = makeElement("div", "empty-state");
    emptyState.append(
      document.createTextNode("لا توجد اقتراحات في هذا التقويم العام لهذا الشهر ونوع التربة."),
      document.createElement("br"),
      document.createTextNode("جرّب تربة أخرى أو أضف محصولًا جديدًا إلى بياناتك."),
    );
    results.append(emptyState);
  } else {
    results.append(...matchingCrops.map((crop) => createCropCard(crop, selectedSoil)));
  }
  savedCropCount.textContent = `${customCrops.length.toLocaleString("ar")} ${customCrops.length === 1 ? "محصول محفوظ" : "محاصيل محفوظة"}`;
}

function setLocationStatus(message, isError = false) {
  locationStatus.textContent = message;
  locationStatus.classList.toggle("status-error", isError);
}

async function lookupLocation(query) {
  if (!query.trim()) {
    setLocationStatus("أدخل اسم مدينة أو منطقة أولًا.", true);
    locationInput.focus();
    return;
  }

  searchButton.disabled = true;
  setLocationStatus("جارٍ البحث عن الموقع…");
  const params = new URLSearchParams({ format: "jsonv2", limit: "1", q: query.trim() });

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`تعذر البحث عن الموقع (${response.status}).`);
    const places = await response.json();
    if (!places.length) {
      currentLocation = null;
      setLocationStatus("لم نعثر على هذا المكان. جرّب كتابة اسم المدينة والبلد.", true);
      weatherPanel.hidden = true;
      return;
    }

    const place = places[0];
    currentLocation = {
      latitude: Number(place.lat),
      longitude: Number(place.lon),
      name: place.display_name.split(",").slice(0, 2).join(","),
    };
    locationInput.value = currentLocation.name;
    setLocationStatus("تم تحديد الموقع.");
    await loadWeather(currentLocation);
  } catch (error) {
    setLocationStatus(error instanceof Error ? error.message : "تعذر البحث عن الموقع.", true);
  } finally {
    searchButton.disabled = false;
  }
}

async function loadWeather(location) {
  const requestId = ++weatherRequestId;
  weatherPanel.hidden = false;
  weatherTitle.textContent = `الطقس في ${location.name}`;
  weatherDetails.textContent = "جارٍ تحميل درجة الحرارة الحالية…";
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: "temperature_2m,apparent_temperature,precipitation",
    timezone: "auto",
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error(`تعذر تحميل الطقس (${response.status}).`);
    const data = await response.json();
    if (requestId !== weatherRequestId) return;
    const current = data.current;
    if (!current || typeof current.temperature_2m !== "number") {
      throw new Error("بيانات الطقس غير متاحة لهذا الموقع.");
    }
    weatherTitle.textContent = `${current.temperature_2m}°م في ${location.name}`;
    const feelsLike = typeof current.apparent_temperature === "number"
      ? `المحسوسة ${current.apparent_temperature}°م`
      : "";
    const precipitation = typeof current.precipitation === "number"
      ? `الهطول الحالي ${current.precipitation} مم`
      : "";
    weatherDetails.textContent = [feelsLike, precipitation].filter(Boolean).join(" · ") || "درجة الحرارة الحالية";
  } catch (error) {
    if (requestId !== weatherRequestId) return;
    weatherDetails.textContent = error instanceof Error ? error.message : "تعذر تحميل بيانات الطقس.";
  }
}

searchButton.addEventListener("click", () => lookupLocation(locationInput.value));
locationInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    lookupLocation(locationInput.value);
  }
});

useLocationButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    setLocationStatus("ميزة تحديد الموقع غير متاحة في هذا المتصفح.", true);
    return;
  }

  useLocationButton.disabled = true;
  setLocationStatus("بانتظار إذن الوصول إلى موقعك…");
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      currentLocation = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        name: "موقعك الحالي",
      };
      locationInput.value = currentLocation.name;
      setLocationStatus("تم تحديد موقعك.");
      useLocationButton.disabled = false;
      await loadWeather(currentLocation);
    },
    (error) => {
      useLocationButton.disabled = false;
      const message = error.code === error.PERMISSION_DENIED
        ? "لم يُسمح بالوصول للموقع. يمكنك البحث عن المدينة يدويًا."
        : "تعذر تحديد الموقع. تحقق من إعدادات المتصفح وحاول مجددًا.";
      setLocationStatus(message, true);
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
  );
});

function resetCropForm() {
  cropForm.reset();
  document.querySelector("#crop-id").value = "";
  editingCropId = "";
  saveCropButton.innerHTML = 'أضف إلى بياناتي <span aria-hidden="true">←</span>';
  cancelEditButton.hidden = true;
}

cropForm.addEventListener("submit", (event) => {
  event.preventDefault();
  cropFormStatus.textContent = "";
  cropFormStatus.classList.remove("status-error");

  const formData = new FormData(cropForm);
  const selectedMonths = [...cropForm.querySelectorAll('input[name="plantingMonths"]:checked')]
    .map((input) => Number(input.value));
  const selectedSoils = [...cropForm.querySelectorAll('input[name="soils"]:checked')]
    .map((input) => input.value);

  if (selectedMonths.length === 0) {
    cropFormStatus.textContent = "اختر شهرًا واحدًا على الأقل للزراعة.";
    plantingMonths.querySelector("input").focus();
    return;
  }
  if (selectedSoils.length === 0) {
    cropFormStatus.textContent = "اختر نوع تربة واحدًا على الأقل.";
    cropForm.querySelector('input[name="soils"]').focus();
    return;
  }

  const crop = {
    id: editingCropId || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`),
    name: String(formData.get("name")).trim(),
    en: String(formData.get("en")).trim(),
    method: String(formData.get("method")),
    season: String(formData.get("season")).trim(),
    months: selectedMonths,
    soils: selectedSoils,
    soil: String(formData.get("soil")).trim(),
  };
  const wasEditing = Boolean(editingCropId);
  const nextCrops = wasEditing
    ? customCrops.map((savedCrop) => savedCrop.id === editingCropId ? crop : savedCrop)
    : [...customCrops, crop];

  if (wasEditing && !customCrops.some((savedCrop) => savedCrop.id === editingCropId)) {
    cropFormStatus.textContent = "لم نعثر على السجل المطلوب تعديله.";
    cropFormStatus.classList.add("status-error");
    resetCropForm();
    return;
  }

  if (persistCustomCrops(nextCrops)) {
    renderCrops();
    resetCropForm();
    cropFormStatus.textContent = wasEditing ? "تم تحديث بيانات المحصول." : "تمت إضافة المحصول إلى بياناتك.";
  }
});

cancelEditButton.addEventListener("click", () => {
  resetCropForm();
  cropFormStatus.textContent = "تم إلغاء التعديل.";
  cropFormStatus.classList.remove("status-error");
});

results.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-crop-action]");
  if (!button) return;
  const crop = customCrops.find((savedCrop) => savedCrop.id === button.dataset.cropId);
  if (!crop) {
    cropFormStatus.textContent = "لم نعثر على سجل المحصول.";
    cropFormStatus.classList.add("status-error");
    return;
  }

  if (button.dataset.cropAction === "edit") {
    editingCropId = crop.id;
    document.querySelector("#crop-id").value = crop.id;
    cropForm.elements.name.value = crop.name;
    cropForm.elements.en.value = crop.en;
    cropForm.elements.method.value = crop.method;
    cropForm.elements.season.value = crop.season;
    cropForm.elements.soil.value = crop.soil;
    cropForm.querySelectorAll('input[name="plantingMonths"]').forEach((input) => {
      input.checked = crop.months.includes(Number(input.value));
    });
    cropForm.querySelectorAll('input[name="soils"]').forEach((input) => {
      input.checked = crop.soils.includes(input.value);
    });
    saveCropButton.innerHTML = 'حفظ التعديلات <span aria-hidden="true">←</span>';
    cancelEditButton.hidden = false;
    cropFormStatus.textContent = `تعديل بيانات: ${crop.name}`;
    cropFormStatus.classList.remove("status-error");
    cropForm.scrollIntoView({ behavior: "smooth", block: "center" });
    cropForm.elements.name.focus({ preventScroll: true });
    return;
  }

  if (button.dataset.cropAction === "delete" && window.confirm(`هل تريد حذف «${crop.name}» من بياناتك؟`)) {
    if (persistCustomCrops(customCrops.filter((savedCrop) => savedCrop.id !== crop.id))) {
      if (editingCropId === crop.id) resetCropForm();
      renderCrops();
      cropFormStatus.textContent = `تم حذف «${crop.name}».`;
    }
  }
});

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderCrops();
  document.querySelector("#recommendations").scrollIntoView({ behavior: "smooth", block: "start" });
});

monthSelect.addEventListener("change", renderCrops);
soilSelect.addEventListener("change", renderCrops);

customCrops = loadCustomCrops();
renderCrops();
