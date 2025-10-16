(() => {
  const supported = ["pt-BR", "pt-PT", "en", "es", "fr", "de", "it"];
  const defaultLang = "pt-PT";

  async function loadDictionary(lang) {
    const safeLang = supported.includes(lang) ? lang : defaultLang;
    const res = await fetch(`i18n/${safeLang}.json`);
    if (!res.ok) throw new Error(`Failed to load dictionary: ${safeLang}`);
    return res.json();
  }

  async function setLanguage(lang) {
    const dictionary = await loadDictionary(lang);
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dictionary[key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.setAttribute("placeholder", dictionary[key]);
        } else {
          el.textContent = dictionary[key];
        }
      }
    });
    localStorage.setItem("lang", lang);
    populateLangOptions(dictionary, lang);
  }

  function populateLangOptions(dict, current) {
    const select = document.getElementById("langSwitcher");
    if (!select) return;
    // Build options once
    if (!select.dataset.bound) {
      select.innerHTML = "";
      const options = [
        { value: "pt-BR", label: dict["lang.pt-BR"] || "Português (BR)" },
        { value: "pt-PT", label: dict["lang.pt-PT"] || "Português (PT)" },
        { value: "en", label: dict["lang.en"] || "English" },
        { value: "es", label: dict["lang.es"] || "Español" },
        { value: "fr", label: dict["lang.fr"] || "Français" },
        { value: "de", label: dict["lang.de"] || "Deutsch" },
        { value: "it", label: dict["lang.it"] || "Italiano" }
      ];
      options.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        select.appendChild(opt);
      });
      select.dataset.bound = "true";
      select.addEventListener("change", (e) => setLanguage(e.target.value));
    }
    select.value = current;
  }

  // Initialize
  window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang");
    const browserLang = navigator.language?.substring(0, 2) === "pt" ? "pt-PT" : "en";
    setLanguage(saved || browserLang || defaultLang).catch(console.error);
  });

  // Expose for manual switching if needed
  window.setLanguage = setLanguage;
})();


