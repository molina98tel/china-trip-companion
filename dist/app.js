(function () {
  "use strict";
  const data = window.TRIP_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const storage = {
    get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
  };
  const state = {
    checks: storage.get("china2026-checks", {}),
    notes: storage.get("china2026-notes", ""),
    rate: storage.get("china2026-rate", 8)
  };

  const amapUrl = (query) => `https://uri.amap.com/search?keyword=${encodeURIComponent(query)}&callnative=1`;
  const formatDate = (value) => new Intl.DateTimeFormat("es-ES", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${value}T12:00:00`));
  const localIso = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  function getFocusDay() {
    const today = localIso();
    if (today >= data.startDate && today <= data.endDate) return data.days.find(day => day.date === today) || data.days[0];
    return today < data.startDate ? data.days[0] : data.days[data.days.length - 1];
  }
  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
  }
  async function copyText(text, confirmation = "Copiado") {
    try { await navigator.clipboard.writeText(text); showToast(confirmation); }
    catch { showToast("Mantén pulsado para copiar"); }
  }
  function renderTimeline(items, root) {
    root.innerHTML = items.map(item => `
      <article class="timeline-item">
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <span class="item-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <button class="cn-copy" data-copy="${item.cn}" title="Copiar nombre en chino">${item.cn}<small> copiar</small></button>
          <p>${item.detail}</p>
          <div class="timeline-actions">
            <a class="map-link" href="${amapUrl(item.map)}" target="_blank" rel="noreferrer">Abrir en Amap <span aria-hidden="true">↗</span></a>
            ${item.booking ? `<button class="booking-jump" data-booking="${item.booking}">Cómo reservar <span aria-hidden="true">→</span></button>` : ""}
          </div>
        </div>
      </article>`).join("");
  }
  function renderToday() {
    const day = getFocusDay();
    const today = localIso();
    const start = new Date(`${data.startDate}T12:00:00`);
    const now = new Date(`${today}T12:00:00`);
    const diff = Math.ceil((start - now) / 86400000);
    $("#heroEyebrow").textContent = today >= data.startDate && today <= data.endDate ? `${day.cityCn} · ${day.city}` : "Vuestro viaje a China";
    $("#todayTitle").textContent = today >= data.startDate && today <= data.endDate ? day.label : "Pekín · Xi'an · Shanghái";
    $("#heroSubtitle").textContent = today >= data.startDate && today <= data.endDate ? formatDate(day.date) : "30 de octubre — 8 de noviembre de 2026";
    $("#currentDayTitle").textContent = `${formatDate(day.date)} · ${day.city}`;
    if (diff > 0) $("#tripStatus").innerHTML = `<strong>Faltan ${diff} días</strong><span>Primer destino: Pekín</span>`;
    else if (today <= data.endDate) $("#tripStatus").innerHTML = `<strong>Hoy estáis en ${day.city}</strong><span>${day.label}</span>`;
    else $("#tripStatus").innerHTML = `<strong>Viaje completado</strong><span>El itinerario sigue disponible</span>`;
    renderTimeline(day.items, $("#todayTimeline"));
    $("#copyDayBtn").onclick = () => copyText(`${formatDate(day.date)} · ${day.city}\n${day.items.map(i => `${i.time} — ${i.title} (${i.cn})`).join("\n")}`, "Plan del día copiado");
  }
  function renderRoute() {
    $("#dayList").innerHTML = data.days.map((day, index) => `
      <details class="day-card" ${index === 0 ? "open" : ""}>
        <summary>
          <div class="date-tile"><span>${new Date(`${day.date}T12:00:00`).getDate()}</span><small>${new Intl.DateTimeFormat("es-ES", {month:"short"}).format(new Date(`${day.date}T12:00:00`)).replace(".", "")}</small></div>
          <div class="day-summary"><span>${day.cityCn} · ${day.city}</span><strong>${day.label}</strong></div>
          <span class="chevron" aria-hidden="true">⌄</span>
        </summary>
        <div class="day-detail timeline"></div>
      </details>`).join("");
    $$(".day-card").forEach((card, index) => renderTimeline(data.days[index].items, $(".day-detail", card)));
  }
  function renderHotels() {
    $("#hotelList").innerHTML = data.hotels.map(hotel => `
      <article><div class="hotel-city"><b>${hotel.cn}</b><span>${hotel.city}</span></div><div><strong>${hotel.name}</strong><span>${hotel.dates}</span></div><a href="${amapUrl(hotel.map)}" target="_blank" rel="noreferrer" aria-label="Abrir ${hotel.name} en Amap">↗</a></article>`).join("");
  }
  function renderBookings() {
    const cities = [...new Set(data.bookings.map(booking => booking.city))];
    $("#bookingList").innerHTML = cities.map(city => {
      const bookings = data.bookings.filter(booking => booking.city === city);
      const { cityCn } = bookings[0];
      return `
        <section class="booking-city">
          <div class="booking-city-heading"><span>${cityCn}</span><div><small>RESERVAS EN</small><h2>${city}</h2></div></div>
          <div class="booking-grid">${bookings.map(booking => `
            <article class="booking-card" id="booking-${booking.id}">
              <div class="booking-topline"><span class="booking-badge ${booking.level}">${booking.label}</span><span class="booking-date">${booking.date}</span></div>
              <h3>${booking.title}</h3>
              <button class="cn-copy" data-copy="${booking.cn}" title="Copiar nombre en chino">${booking.cn}<small> copiar</small></button>
              <div class="booking-summary"><strong>${booking.price}</strong><span>${booking.provider}</span></div>
              <p>${booking.recommendation}</p>
              <div class="booking-info">
                <div><small>CUÁNDO</small><span>${booking.timing}</span></div>
                <div><small>TRASLADO</small><span>${booking.transfer}</span></div>
              </div>
              <div class="booking-actions">
                ${booking.primary ? `<a class="primary-booking" href="${booking.primary.url}" target="_blank" rel="noreferrer">${booking.primary.label} <span aria-hidden="true">↗</span></a>` : ""}
                ${booking.alternate ? `<a class="secondary-booking" href="${booking.alternate.url}" target="_blank" rel="noreferrer">${booking.alternate.label}</a>` : ""}
                <a class="booking-map" href="${amapUrl(booking.map)}" target="_blank" rel="noreferrer">Ver punto en Amap</a>
              </div>
            </article>`).join("")}</div>
        </section>`;
    }).join("");
  }
  function renderShopping(city = "all") {
    const groups = city === "all" ? data.shopping : data.shopping.filter(group => group.city === city);
    $("#shoppingList").innerHTML = groups.map(group => `
      <section class="shopping-city">
        <div class="shopping-city-heading">
          <span class="city-hanzi">${group.cityCn}</span>
          <div><span class="kicker">${group.city}</span><h2>${group.strategy}</h2></div>
        </div>
        <div class="shop-grid">${group.places.map(place => `
          <article class="shop-card">
            <div class="shop-meta"><span>${place.type}</span><b>${place.priority}</b></div>
            <h3>${place.name}</h3>
            <button class="cn-copy" data-copy="${place.cn}" title="Copiar nombre en chino">${place.cn}<small> copiar</small></button>
            <p>${place.detail}</p>
            <div class="best-for"><small>MEJOR PARA</small><strong>${place.bestFor}</strong></div>
            <a class="map-link" href="${amapUrl(place.map)}" target="_blank" rel="noreferrer">Abrir en Amap <span aria-hidden="true">↗</span></a>
          </article>`).join("")}</div>
      </section>`).join("");
  }
  function initShoppingFilters() {
    $$("[data-shop-city]").forEach(button => button.addEventListener("click", () => {
      $$("[data-shop-city]").forEach(item => item.classList.toggle("active", item === button));
      renderShopping(button.dataset.shopCity);
    }));
  }
  function updateProgress() {
    const all = data.checklist.flatMap((group, gi) => group.items.map((_, ii) => `${gi}-${ii}`));
    const complete = all.filter(id => state.checks[id]).length;
    const pct = all.length ? Math.round(complete / all.length * 100) : 0;
    $("#progressBar").style.width = `${pct}%`;
    $("#checklistProgress").textContent = `${complete} de ${all.length} completados`;
  }
  function renderChecklist() {
    $("#checklistGroups").innerHTML = data.checklist.map((group, gi) => `
      <section class="check-group"><h2>${group.title}</h2>${group.items.map((item, ii) => {
        const id = `${gi}-${ii}`;
        return `<label><input type="checkbox" data-check="${id}" ${state.checks[id] ? "checked" : ""}><span>${item}</span></label>`;
      }).join("")}</section>`).join("");
    $$("[data-check]").forEach(input => input.addEventListener("change", () => {
      state.checks[input.dataset.check] = input.checked;
      storage.set("china2026-checks", state.checks);
      updateProgress();
    }));
    const notes = $("#tripNotes");
    notes.value = state.notes;
    notes.addEventListener("input", () => {
      $("#saveState").textContent = "Guardando…";
      clearTimeout(renderChecklist.timer);
      renderChecklist.timer = setTimeout(() => {
        state.notes = notes.value;
        storage.set("china2026-notes", state.notes);
        $("#saveState").textContent = "Guardado automáticamente";
      }, 350);
    });
    updateProgress();
  }
  function navigate(view, resetScroll = true) {
    $$(".view").forEach(section => { const active = section.id === `view-${view}`; section.hidden = !active; section.classList.toggle("active", active); });
    $$(".bottom-nav [data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === view));
    if (resetScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function initCurrency() {
    const cny = $("#cnyInput"); const rate = $("#rateInput"); const out = $("#eurOutput");
    rate.value = state.rate;
    const calculate = () => {
      const result = (Number(cny.value) || 0) / (Number(rate.value) || 1);
      out.value = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(result);
      state.rate = Number(rate.value) || 8; storage.set("china2026-rate", state.rate);
    };
    cny.addEventListener("input", calculate); rate.addEventListener("input", calculate); calculate();
  }
  function registerWebMcp() {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const today = getFocusDay();
    try {
      context.registerTool({ name: "get_today_plan", title: "Consultar plan de hoy", description: "Devuelve el plan del día del viaje que corresponde a la fecha actual.", inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: false }, execute() { return { date: today.date, city: today.city, plan: today.items.map(({time,title,cn}) => ({time,title,chineseName:cn})) }; } });
      context.registerTool({ name: "update_trip_checklist", title: "Actualizar checklist", description: "Marca o desmarca un elemento del checklist usando su texto exacto.", inputSchema: { type: "object", properties: { item: {type:"string"}, completed: {type:"boolean"} }, required: ["item", "completed"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false }, execute(input) { const found=[]; data.checklist.forEach((g,gi)=>g.items.forEach((item,ii)=>{if(item===input.item)found.push(`${gi}-${ii}`);})); if(found.length!==1) throw new Error("Elemento no encontrado o ambiguo"); state.checks[found[0]]=input.completed; storage.set("china2026-checks",state.checks); renderChecklist(); return {item:input.item,completed:input.completed}; } });
    } catch (error) { console.debug("WebMCP no disponible", error); }
  }
  function initInstall() {
    let prompt;
    window.addEventListener("beforeinstallprompt", event => { event.preventDefault(); prompt = event; $("#installBtn").hidden = false; });
    $("#installBtn").addEventListener("click", async () => { if (!prompt) return; await prompt.prompt(); prompt = null; $("#installBtn").hidden = true; });
    if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }

  renderToday(); renderRoute(); renderHotels(); renderBookings(); renderShopping(); renderChecklist(); initShoppingFilters(); initCurrency(); initInstall(); registerWebMcp();
  $$("[data-view]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
  $$("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
  document.addEventListener("click", event => {
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) copyText(copyButton.dataset.copy);
    const bookingButton = event.target.closest("[data-booking]");
    if (!bookingButton) return;
    navigate("bookings", false);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const card = document.getElementById(`booking-${bookingButton.dataset.booking}`);
      if (!card) return;
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("highlight");
      setTimeout(() => card.classList.remove("highlight"), 2200);
    }));
  });
})();
