const STORAGE_KEY = "quimica_progreso_v1";

const state = {
  data: null,
  tablaElementos: [],
  progreso: {
    intentos: {},
    correctas: {},
    selecciones: {},
    pasos: {},
    revisados: {}
  }
};

const PERIODIC_110 = [
  { z: 1, simbolo: "H", nombre: "Hidrogeno" },
  { z: 2, simbolo: "He", nombre: "Helio" },
  { z: 3, simbolo: "Li", nombre: "Litio" },
  { z: 4, simbolo: "Be", nombre: "Berilio" },
  { z: 5, simbolo: "B", nombre: "Boro" },
  { z: 6, simbolo: "C", nombre: "Carbono" },
  { z: 7, simbolo: "N", nombre: "Nitrogeno" },
  { z: 8, simbolo: "O", nombre: "Oxigeno" },
  { z: 9, simbolo: "F", nombre: "Fluor" },
  { z: 10, simbolo: "Ne", nombre: "Neon" },
  { z: 11, simbolo: "Na", nombre: "Sodio" },
  { z: 12, simbolo: "Mg", nombre: "Magnesio" },
  { z: 13, simbolo: "Al", nombre: "Aluminio" },
  { z: 14, simbolo: "Si", nombre: "Silicio" },
  { z: 15, simbolo: "P", nombre: "Fosforo" },
  { z: 16, simbolo: "S", nombre: "Azufre" },
  { z: 17, simbolo: "Cl", nombre: "Cloro" },
  { z: 18, simbolo: "Ar", nombre: "Argon" },
  { z: 19, simbolo: "K", nombre: "Potasio" },
  { z: 20, simbolo: "Ca", nombre: "Calcio" },
  { z: 21, simbolo: "Sc", nombre: "Escandio" },
  { z: 22, simbolo: "Ti", nombre: "Titanio" },
  { z: 23, simbolo: "V", nombre: "Vanadio" },
  { z: 24, simbolo: "Cr", nombre: "Cromo" },
  { z: 25, simbolo: "Mn", nombre: "Manganeso" },
  { z: 26, simbolo: "Fe", nombre: "Hierro" },
  { z: 27, simbolo: "Co", nombre: "Cobalto" },
  { z: 28, simbolo: "Ni", nombre: "Niquel" },
  { z: 29, simbolo: "Cu", nombre: "Cobre" },
  { z: 30, simbolo: "Zn", nombre: "Zinc" },
  { z: 31, simbolo: "Ga", nombre: "Galio" },
  { z: 32, simbolo: "Ge", nombre: "Germanio" },
  { z: 33, simbolo: "As", nombre: "Arsenico" },
  { z: 34, simbolo: "Se", nombre: "Selenio" },
  { z: 35, simbolo: "Br", nombre: "Bromo" },
  { z: 36, simbolo: "Kr", nombre: "Kripton" },
  { z: 37, simbolo: "Rb", nombre: "Rubidio" },
  { z: 38, simbolo: "Sr", nombre: "Estroncio" },
  { z: 39, simbolo: "Y", nombre: "Itrio" },
  { z: 40, simbolo: "Zr", nombre: "Circonio" },
  { z: 41, simbolo: "Nb", nombre: "Niobio" },
  { z: 42, simbolo: "Mo", nombre: "Molibdeno" },
  { z: 43, simbolo: "Tc", nombre: "Tecnecio" },
  { z: 44, simbolo: "Ru", nombre: "Rutenio" },
  { z: 45, simbolo: "Rh", nombre: "Rodio" },
  { z: 46, simbolo: "Pd", nombre: "Paladio" },
  { z: 47, simbolo: "Ag", nombre: "Plata" },
  { z: 48, simbolo: "Cd", nombre: "Cadmio" },
  { z: 49, simbolo: "In", nombre: "Indio" },
  { z: 50, simbolo: "Sn", nombre: "Estano" },
  { z: 51, simbolo: "Sb", nombre: "Antimonio" },
  { z: 52, simbolo: "Te", nombre: "Telurio" },
  { z: 53, simbolo: "I", nombre: "Yodo" },
  { z: 54, simbolo: "Xe", nombre: "Xenon" },
  { z: 55, simbolo: "Cs", nombre: "Cesio" },
  { z: 56, simbolo: "Ba", nombre: "Bario" },
  { z: 57, simbolo: "La", nombre: "Lantano" },
  { z: 58, simbolo: "Ce", nombre: "Cerio" },
  { z: 59, simbolo: "Pr", nombre: "Praseodimio" },
  { z: 60, simbolo: "Nd", nombre: "Neodimio" },
  { z: 61, simbolo: "Pm", nombre: "Prometio" },
  { z: 62, simbolo: "Sm", nombre: "Samario" },
  { z: 63, simbolo: "Eu", nombre: "Europio" },
  { z: 64, simbolo: "Gd", nombre: "Gadolinio" },
  { z: 65, simbolo: "Tb", nombre: "Terbio" },
  { z: 66, simbolo: "Dy", nombre: "Disprosio" },
  { z: 67, simbolo: "Ho", nombre: "Holmio" },
  { z: 68, simbolo: "Er", nombre: "Erbio" },
  { z: 69, simbolo: "Tm", nombre: "Tulio" },
  { z: 70, simbolo: "Yb", nombre: "Iterbio" },
  { z: 71, simbolo: "Lu", nombre: "Lutecio" },
  { z: 72, simbolo: "Hf", nombre: "Hafnio" },
  { z: 73, simbolo: "Ta", nombre: "Tantalio" },
  { z: 74, simbolo: "W", nombre: "Wolframio" },
  { z: 75, simbolo: "Re", nombre: "Renio" },
  { z: 76, simbolo: "Os", nombre: "Osmio" },
  { z: 77, simbolo: "Ir", nombre: "Iridio" },
  { z: 78, simbolo: "Pt", nombre: "Platino" },
  { z: 79, simbolo: "Au", nombre: "Oro" },
  { z: 80, simbolo: "Hg", nombre: "Mercurio" },
  { z: 81, simbolo: "Tl", nombre: "Talio" },
  { z: 82, simbolo: "Pb", nombre: "Plomo" },
  { z: 83, simbolo: "Bi", nombre: "Bismuto" },
  { z: 84, simbolo: "Po", nombre: "Polonio" },
  { z: 85, simbolo: "At", nombre: "Astato" },
  { z: 86, simbolo: "Rn", nombre: "Radon" },
  { z: 87, simbolo: "Fr", nombre: "Francio" },
  { z: 88, simbolo: "Ra", nombre: "Radio" },
  { z: 89, simbolo: "Ac", nombre: "Actinio" },
  { z: 90, simbolo: "Th", nombre: "Torio" },
  { z: 91, simbolo: "Pa", nombre: "Protactinio" },
  { z: 92, simbolo: "U", nombre: "Uranio" },
  { z: 93, simbolo: "Np", nombre: "Neptunio" },
  { z: 94, simbolo: "Pu", nombre: "Plutonio" },
  { z: 95, simbolo: "Am", nombre: "Americio" },
  { z: 96, simbolo: "Cm", nombre: "Curio" },
  { z: 97, simbolo: "Bk", nombre: "Berkelio" },
  { z: 98, simbolo: "Cf", nombre: "Californio" },
  { z: 99, simbolo: "Es", nombre: "Einstenio" },
  { z: 100, simbolo: "Fm", nombre: "Fermio" },
  { z: 101, simbolo: "Md", nombre: "Mendelevio" },
  { z: 102, simbolo: "No", nombre: "Nobelio" },
  { z: 103, simbolo: "Lr", nombre: "Lawrencio" },
  { z: 104, simbolo: "Rf", nombre: "Rutherfordio" },
  { z: 105, simbolo: "Db", nombre: "Dubnio" },
  { z: 106, simbolo: "Sg", nombre: "Seaborgio" },
  { z: 107, simbolo: "Bh", nombre: "Bohrio" },
  { z: 108, simbolo: "Hs", nombre: "Hassio" },
  { z: 109, simbolo: "Mt", nombre: "Meitnerio" },
  { z: 110, simbolo: "Ds", nombre: "Darmstadtio" }
];

const el = {
  tabs: Array.from(document.querySelectorAll(".tab")),
  panels: {
    resumen: document.getElementById("resumen"),
    practica: document.getElementById("practica"),
    tabla: document.getElementById("tabla"),
    quiz: document.getElementById("quiz"),
    progreso: document.getElementById("progreso")
  },
  metaLine: document.getElementById("meta-line"),
  emptyTpl: document.getElementById("empty-state")
};

init();

async function init() {
  bindTabs();
  loadProgress();

  try {
    const response = await fetch("datos_quimica.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo cargar datos_quimica.json");
    }

    state.data = await response.json();
    updateMetaLine();
    renderAll();
  } catch (error) {
    renderError(error.message || "Error desconocido");
  }
}

function bindTabs() {
  el.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      el.tabs.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const target = tab.dataset.tab;
      Object.entries(el.panels).forEach(([name, panel]) => {
        panel.classList.toggle("is-active", name === target);
      });
    });
  });
}

function updateMetaLine() {
  el.metaLine.textContent = "Undécimo año · Prueba II Semestre I";
}

function renderAll() {
  renderResumen();
  renderPractica();
  renderTabla();
  renderQuiz();
  renderProgreso();
}

function renderError(message) {
  Object.values(el.panels).forEach((panel) => {
    panel.innerHTML = `<article class="card full"><h2>Error al cargar datos</h2><p>${escapeHtml(message)}</p></article>`;
  });
}

function renderEmpty(panelKey) {
  const clone = el.emptyTpl.content.cloneNode(true);
  el.panels[panelKey].appendChild(clone);
}

function renderResumen() {
  const panel = el.panels.resumen;
  panel.innerHTML = "";

  const indice = state.data?.indice_temas || [];
  const resumen = state.data?.resumen_temas || [];
  const conexiones = state.data?.conexiones_entre_temas || [];
  const mapas = state.data?.mapas_conceptuales || [];
  const guia = state.data?.guia_rapida || [];

  if (!indice.length && !resumen.length) {
    renderEmpty("resumen");
    return;
  }

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full seccion-header-card">
      <h2>📚 Resumen de Estudio</h2>
      <div class="buscador-contenedor">
        <input id="resumen-buscador" class="buscador-input" type="text" placeholder="🔎 Buscar tema..." aria-label="Buscar tema">
      </div>
      <h3 class="indice-titulo">Índice de temas</h3>
      ${renderTemaIndex(indice)}
    </article>`
  );

  resumen.forEach((tema, idx) => {
    const searchText = [
      tema.titulo || "",
      tema.explicacion_simple || "",
      ...(tema.puntos_clave || []),
      ...(tema.errores_comunes || [])
    ].join(" ");

    panel.insertAdjacentHTML(
      "beforeend",
      `<article class="tema-card" data-busqueda="${escapeHtml(searchText)}" data-tema="${escapeHtml(tema.titulo || `Tema ${idx + 1}`)}">
        <button class="tema-header" data-resumen-toggle type="button" aria-expanded="false">
          <span class="tema-emoji">${idx === 0 ? "🧪" : idx === 1 ? "⚛️" : "🧫"}</span>
          <span class="tema-info">
            <span class="tema-titulo">${formatFormula(escapeHtml(tema.titulo || "Tema"))}</span>
            <span class="tema-badge">Tema ${idx + 1}</span>
          </span>
          <span class="tema-flecha">▼</span>
        </button>
        <div class="tema-contenido">
          <div class="tema-contenido-inner">
            <div class="subtema-seccion study-block study-resumen">
              <h4>📘 Resumen</h4>
              <p>${formatStudyText(tema.explicacion_simple || "")}</p>
            </div>
            ${renderList("📌 Puntos clave", tema.puntos_clave)}
            ${renderList("⚠️ Errores comunes", tema.errores_comunes)}
            ${renderPalabras(tema.palabras_clave)}
          </div>
        </div>
      </article>`
    );
  });

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full"><h2>Conexiones entre temas</h2>${renderConexiones(conexiones)}</article>`
  );

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full"><h2>Mapa visual breve</h2>${renderMapasBreves(mapas)}</article>`
  );

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full"><h2>Guía rápida 💡</h2>${renderGuia(guia)}</article>`
  );

  bindResumenInteractions();
}

function bindResumenInteractions() {
  const panel = el.panels.resumen;
  const toggles = panel.querySelectorAll("[data-resumen-toggle]");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".tema-card");
      const expanded = card.classList.toggle("expandido");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");

      if (expanded) {
        const tema = card.dataset.tema;
        if (tema) {
          state.progreso.revisados[tema] = true;
          saveProgress();
        }
      }
    });
  });

  const buscador = document.getElementById("resumen-buscador");
  if (buscador) {
    buscador.addEventListener("input", () => {
      const term = buscador.value.trim().toLowerCase();
      panel.querySelectorAll(".tema-card").forEach((card) => {
        const text = (card.dataset.busqueda || "").toLowerCase();
        card.style.display = text.includes(term) ? "" : "none";
      });
    });
  }
}

function renderPractica() {
  const panel = el.panels.practica;
  panel.innerHTML = "";

  const practica = state.data?.practica || {};
  const polaridad = practica?.polaridad || [];
  const dipolo = practica?.flecha_dipolo || [];
  const calculos = practica?.calculos || [];
  const paresSustancias = practica?.pares_sustancias || [];
  const ejercicios = state.data?.ejercicios || [];

  if (!polaridad.length && !dipolo.length && !calculos.length && !paresSustancias.length && !ejercicios.length) {
    renderEmpty("practica");
    return;
  }

  polaridad.forEach((item) => {
    const id = `pol-${item.id}`;
    const answer = state.progreso.intentos[id];
    const isDone = typeof answer === "boolean";
    const isCorrect = isDone && answer === Boolean(item.es_polar);

    panel.insertAdjacentHTML(
      "beforeend",
      `<article class="card">
        <h3>Polaridad: ${formatFormula(escapeHtml(item.molecula || "Molécula"))}</h3>
        ${item.flecha_visible ? `<div class="flecha-visible">${formatFormula(escapeHtml(item.flecha_visible))}</div>` : ""}
        <p class="muted">${formatFormula(escapeHtml(item.pregunta || "Es polar o no polar?"))}</p>
        <div class="row">
          <button class="option" data-answer="true" data-id="${id}">✅ Polar</button>
          <button class="option" data-answer="false" data-id="${id}">❌ No polar</button>
          <button class="action" data-simple="${id}">Explícalo simple</button>
          <button class="action primary" data-next-step="${id}">Paso a paso</button>
        </div>
        ${isDone ? `<p class="badge ${isCorrect ? "good" : "bad"}">${isCorrect ? "✅ Correcto" : "❌ Revisa"}</p>` : ""}
        <div class="step-box" id="step-${id}">${renderStep(id, item.pasos)}</div>
        <div id="simple-${id}" class="simple-box" aria-live="polite"></div>
      </article>`
    );
  });

  dipolo.forEach((item) => {
    const id = `dip-${item.id}`;
    const dipole = getDipoleVisualParts(item);
    
    panel.insertAdjacentHTML(
      "beforeend",
      `<article class="card dipolo-card">
        <h3>🎯 Flecha de dipolo</h3>
        <p class="muted">${formatFormula(escapeHtml(item.pregunta || "Hacia dónde apunta la flecha?"))}</p>
        <div class="dipolo-visual">
          <div class="dipolo-molecula dipolo-lado-positivo">${formatFormula(escapeHtml(dipole.leftLabel))}</div>
          <div class="dipolo-flecha">${escapeHtml(dipole.arrow)}</div>
          <div class="dipolo-molecula electronegativos dipolo-lado-negativo">${formatFormula(escapeHtml(dipole.rightLabel))}</div>
        </div>
        <div class="dipolo-leyenda" aria-label="Leyenda visual del dipolo">
          <span class="dipolo-tag dipolo-tag-pos">δ+ (positivo) = zona pobre en electrones</span>
          <span class="dipolo-tag dipolo-tag-neg">δ− (negativo) = zona rica en electrones</span>
        </div>
        <p class="dipolo-explicacion"><strong>La flecha apunta hacia el lado que JALA MÁS ELECTRONES</strong></p>
        <p class="muted">Si no recuerdas los símbolos: piensa <strong>positivo → negativo</strong>.</p>
        <button class="action primary" data-next-step="${id}">Paso a paso</button>
        <button class="action" data-simple="${id}">Explícalo simple</button>
        <div class="step-box" id="step-${id}">${renderStep(id, item.pasos)}</div>
        <div id="simple-${id}" class="simple-box" aria-live="polite"></div>
      </article>`
    );
  });

  paresSustancias.forEach((item) => {
    const id = `pair-${item.id}`;
    panel.insertAdjacentHTML(
      "beforeend",
      `<article class="card full pair-card">
        <h3>Pares de sustancias: ${formatFormula(escapeHtml(item.pareja || ""))}</h3>
        <p class="muted">${formatFormula(escapeHtml(item.pregunta || ""))}</p>
        ${item.flecha_visible ? `<div class="flecha-visible">${formatFormula(escapeHtml(item.flecha_visible))}</div>` : ""}
        <div class="row">
          <button class="action primary" data-next-step="${id}">Paso a paso</button>
          <button class="action" data-simple="${id}">Explícalo simple</button>
        </div>
        <div class="step-box" id="step-${id}">${renderStep(id, item.pasos)}</div>
        <p><strong>Resultado:</strong> ${formatFormula(escapeHtml(item.resultado || ""))}</p>
        <div id="simple-${id}" class="simple-box" aria-live="polite"></div>
      </article>`
    );
  });

  calculos.concat(ejercicios).forEach((item, idx) => {
    const id = `calc-${item.id || idx}`;
    panel.insertAdjacentHTML(
      "beforeend",
      `<article class="card full">
        <h3>Cálculo guiado #${idx + 1}</h3>
        <p><strong>Ejercicio:</strong> ${formatFormula(escapeHtml(item.pregunta || ""))}</p>
        <div class="row">
          <button class="action primary" data-next-step="${id}">Mostrar siguiente paso</button>
          <button class="action" data-simple="${id}">Explícalo simple</button>
        </div>
        <div class="step-box" id="step-${id}">${renderStep(id, item.pasos)}</div>
        <p><strong>Resultado:</strong> ${formatFormula(escapeHtml(item.resultado || ""))}</p>
        <div id="simple-${id}" class="simple-box" aria-live="polite"></div>
      </article>`
    );
  });

  bindPracticeEvents();
}

function getDipoleVisualParts(item) {
  const raw = String(item?.representacion || item?.flecha_visible || "").trim();
  const arrow = raw.includes("↔") ? "↔" : "→";

  if (raw.includes("->") || raw.includes("→") || raw.includes("=>")) {
    const normalized = raw.replace(/=>/g, "→").replace(/->/g, "→");
    const parts = normalized.split("→");
    const leftCandidate = String(parts[0] || "").split(",")[0].trim();
    const rightCandidate = String(parts[1] || "").split(",")[0].trim();

    return {
      leftLabel: leftCandidate || "δ+",
      rightLabel: rightCandidate || "δ−",
      arrow
    };
  }

  return {
    leftLabel: "δ+",
    rightLabel: "δ−",
    arrow: "→"
  };
}

function renderTabla() {
  const panel = el.panels.tabla;
  panel.innerHTML = "";

  const data = state.data?.tabla_periodica || {};
  const elementos = data.elementos || [];
  const guia = data.guia_uso || [];
  const sugerencias = buildTablaSustanciaSugerencias();

  state.tablaElementos = buildTablaElementos(elementos);

  if (!state.tablaElementos.length) {
    renderEmpty("tabla");
    return;
  }

  const tipos = ["Todos", ...new Set(state.tablaElementos.map((e) => e.tipo).filter(Boolean))];

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full tabla-header-card">
      <h2>🧾 Tabla Útil para el Examen</h2>
      <p class="tabla-z-info"><strong>Z</strong> = número atómico (cantidad de protones del elemento).</p>
      <p class="muted">Busca por nombre o símbolo, filtra por tipo de elemento y usa la columna de ayuda para decidir polaridad.</p>
      <div class="tabla-toolbar">
        <input id="tabla-buscador" class="buscador-input" type="text" placeholder="🔎 Buscar elemento (ej: Oxígeno, O, Sodio, Na)" aria-label="Buscar elemento en tabla">
      </div>
      <div class="tabla-filtros" id="tabla-filtros">${tipos
        .map((tipo, idx) => `<button type="button" class="tabla-filtro${idx === 0 ? " is-active" : ""}" data-tabla-tipo="${escapeHtml(tipo)}">${escapeHtml(tipo)}</button>`)
        .join("")}</div>
      <p id="tabla-count" class="tabla-count"></p>
    </article>`
  );

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full tabla-evaluador-card">
      <h3>🧪 Comparador rápido de sustancias</h3>
      <p class="muted">Escribe dos fórmulas (por ejemplo: H2O, NaCl, NH3, CH4) y te da una inferencia rápida de polaridad, interacción y solubilidad.</p>
      <div class="tabla-comparador-grid">
        <label class="tabla-campo">
          <span>Sustancia A</span>
          <input id="tabla-sustancia-a" class="buscador-input" type="text" list="tabla-sugerencias" placeholder="Ej: H2O" aria-label="Sustancia A">
        </label>
        <label class="tabla-campo">
          <span>Sustancia B</span>
          <input id="tabla-sustancia-b" class="buscador-input" type="text" list="tabla-sugerencias" placeholder="Ej: KI" aria-label="Sustancia B">
        </label>
      </div>
      <datalist id="tabla-sugerencias">
        ${sugerencias.map((s) => `<option value="${escapeHtml(s)}"></option>`).join("")}
      </datalist>
      <div class="row">
        <button id="tabla-evaluar-btn" class="action primary" type="button">Evaluar interacción</button>
        <button id="tabla-limpiar-btn" class="action" type="button">Limpiar</button>
      </div>
      <div id="tabla-evaluacion-resultado" class="tabla-evaluacion-resultado muted">
        Completa ambas sustancias y pulsa "Evaluar interacción".
      </div>
    </article>`
  );

  panel.insertAdjacentHTML(
    "beforeend",
    renderTablaAccordionCard({
      cardClass: "tabla-glosario-card",
      title: "❓ Preguntas rápidas",
      body: `<div class="tabla-glosario-grid">
        <p><strong>EN</strong>: electronegatividad (qué tan fuerte jala electrones).</p>
        <p><strong>Z</strong>: número atómico (protones).</p>
        <p><strong>Grupo</strong>: columna en la tabla periódica.</p>
        <p><strong>Período</strong>: fila en la tabla periódica.</p>
        <p><strong>Valencias</strong>: cargas o estados de combinación más comunes.</p>
        <p><strong>Geometría molecular</strong>: forma 3D de la molécula (lineal, angular, tetraédrica, etc.); se usa para saber si los dipolos se cancelan o no (ej: CO<sub>2</sub> cancela, H<sub>2</sub>O no cancela).</p>
        <p><strong>Polarización/Polaridad</strong>: reparto desigual de electrones; se usa para decidir si una sustancia es polar o no polar.</p>
      </div>`,
      open: false,
      id: "tabla-glosario"
    })
  );

  const leyendaOrden = [
    "Metal alcalino",
    "Metal alcalinoterreo",
    "Metal de transicion",
    "Metal post-transicion",
    "Metaloide",
    "No metal",
    "Halogeno",
    "Gas noble",
    "Lantanido",
    "Actinido"
  ];

  const tiposDisponibles = new Set(state.tablaElementos.map((e) => e.tipo));
  const leyendaTipos = leyendaOrden.filter((t) => tiposDisponibles.has(t));

  panel.insertAdjacentHTML(
    "beforeend",
    renderTablaAccordionCard({
      cardClass: "tabla-leyenda-card",
      title: "🎨 Leyenda de colores por familia",
      body: `<div class="tabla-leyenda-grid">${leyendaTipos
        .map((tipo) => `
          <div class="tabla-leyenda-item">
            <span class="leyenda-dot ${getElementoTipoClass(tipo)}"></span>
            <span>${escapeHtml(tipo)}</span>
          </div>
        `)
        .join("")}</div>`,
      open: false,
      id: "tabla-leyenda"
    })
  );

  panel.insertAdjacentHTML(
    "beforeend",
    renderTablaAccordionCard({
      cardClass: "tabla-guia-card",
      title: "🧠 Polarización y polaridad (guía rápida)",
      body: `<ol class="list">${guia.map((paso) => `<li>${formatStudyText(paso)}</li>`).join("")}</ol>`,
      open: false,
      id: "tabla-guia"
    })
  );

  panel.insertAdjacentHTML("beforeend", `<section id="tabla-grid" class="tabla-grid"></section>`);

  renderTablaGrid(state.tablaElementos);
  bindTablaInteractions();
}

function renderTablaGrid(elementos) {
  const grid = document.getElementById("tabla-grid");
  if (!grid) {
    return;
  }

  const buscador = document.getElementById("tabla-buscador");
  const filtroActivo = document.querySelector(".tabla-filtro.is-active")?.dataset.tablaTipo || "Todos";
  const term = (buscador?.value || "").trim().toLowerCase();

  const visibles = elementos.filter((elItem) => {
    const tipoOk = filtroActivo === "Todos" || elItem.tipo === filtroActivo;
    const searchText = `${elItem.nombre || ""} ${elItem.simbolo || ""} ${elItem.tipo || ""}`.toLowerCase();
    const termOk = !term || searchText.includes(term);
    return tipoOk && termOk;
  });

  const count = document.getElementById("tabla-count");
  if (count) {
    count.textContent = `Mostrando ${visibles.length} de ${elementos.length} elementos.`;
  }

  if (!visibles.length) {
    grid.innerHTML = "<article class='card full'><p class='muted'>No hay elementos que coincidan con ese filtro/búsqueda.</p></article>";
    return;
  }

  grid.innerHTML = visibles
    .map((elItem) => {
      const tipoClass = getElementoTipoClass(elItem.tipo);
      return `<article class="elemento-card ${tipoClass}">
        <div class="elemento-top">
          <div class="elemento-numero">Z ${escapeHtml(String(elItem.numero_atomico || ""))}</div>
          <div class="elemento-tipo">${escapeHtml(elItem.tipo || "")}</div>
        </div>
        <div class="elemento-simbolo">${formatFormula(escapeHtml(elItem.simbolo || ""))}</div>
        <h4 class="elemento-nombre">${escapeHtml(elItem.nombre || "")}</h4>
        <div class="elemento-detalles">
          <p><strong>Grupo:</strong> ${escapeHtml(String(elItem.grupo || "-"))}</p>
          <p><strong>Período:</strong> ${escapeHtml(String(elItem.periodo || "-"))}</p>
          <p><strong>EN (electronegatividad):</strong> ${escapeHtml(String(elItem.electronegatividad || "-"))}</p>
          <p><strong>Valencias:</strong> ${formatFormula(escapeHtml((elItem.valencias || []).join(", ") || "-"))}</p>
        </div>
        <p class="elemento-geo-note"><strong>Geometría:</strong> se decide con la molécula completa. La forma final define si los dipolos se cancelan (no polar) o no (polar). Ej: CO<sub>2</sub> lineal cancela; H<sub>2</sub>O angular no cancela.</p>
        <p class="elemento-tip">${formatStudyText(elItem.tip_polaridad || "")}</p>
      </article>`;
    })
    .join("");
}

function bindTablaInteractions() {
  const panel = el.panels.tabla;
  if (panel.dataset.tablaBound === "true") {
    return;
  }

  panel.addEventListener("focusout", (event) => {
    if (event.target.id !== "tabla-sustancia-a" && event.target.id !== "tabla-sustancia-b") {
      return;
    }

    const pretty = prettifyFormulaInput(event.target.value, state.tablaElementos || []);
    if (pretty) {
      event.target.value = pretty;
    }
  });

  panel.addEventListener("keydown", (event) => {
    if ((event.target.id === "tabla-sustancia-a" || event.target.id === "tabla-sustancia-b") && event.key === "Enter") {
      event.preventDefault();
      renderTablaPairEvaluation();
    }
  });

  panel.addEventListener("input", (event) => {
    if (event.target.id === "tabla-buscador") {
      renderTablaGrid(state.tablaElementos || []);
    }
  });

  panel.addEventListener("click", (event) => {
    const toggle = event.target.closest("button[data-tabla-toggle]");
    if (toggle) {
      const card = toggle.closest(".tabla-accordion");
      if (!card) {
        return;
      }

      const expanded = card.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      return;
    }

    if (event.target.id === "tabla-evaluar-btn") {
      renderTablaPairEvaluation();
      return;
    }

    if (event.target.id === "tabla-limpiar-btn") {
      const inputA = document.getElementById("tabla-sustancia-a");
      const inputB = document.getElementById("tabla-sustancia-b");
      const output = document.getElementById("tabla-evaluacion-resultado");

      if (inputA) inputA.value = "";
      if (inputB) inputB.value = "";
      if (output) {
        output.className = "tabla-evaluacion-resultado muted";
        output.textContent = "Completa ambas sustancias y pulsa \"Evaluar interacción\".";
      }
      return;
    }

    const filtro = event.target.closest("button[data-tabla-tipo]");
    if (!filtro) {
      return;
    }

    panel.querySelectorAll(".tabla-filtro").forEach((btn) => btn.classList.remove("is-active"));
    filtro.classList.add("is-active");
    renderTablaGrid(state.tablaElementos || []);
  });

  panel.dataset.tablaBound = "true";
}

function renderTablaPairEvaluation() {
  const inputA = document.getElementById("tabla-sustancia-a");
  const inputB = document.getElementById("tabla-sustancia-b");
  const output = document.getElementById("tabla-evaluacion-resultado");
  if (!output) {
    return;
  }

  const rawA = (inputA?.value || "").trim();
  const rawB = (inputB?.value || "").trim();

  const prettyA = prettifyFormulaInput(rawA, state.tablaElementos || []) || rawA;
  const prettyB = prettifyFormulaInput(rawB, state.tablaElementos || []) || rawB;

  if (inputA && prettyA) inputA.value = prettyA;
  if (inputB && prettyB) inputB.value = prettyB;

  if (!rawA || !rawB) {
    output.className = "tabla-evaluacion-resultado tabla-result-warn";
    output.innerHTML = "⚠️ Escribe ambas sustancias para poder comparar.";
    return;
  }

  const elementIndex = buildElementSymbolIndex(state.tablaElementos || []);
  const analizaA = analyzeSubstance(rawA, elementIndex);
  const analizaB = analyzeSubstance(rawB, elementIndex);

  if (!analizaA.valid || !analizaB.valid) {
    output.className = "tabla-evaluacion-resultado tabla-result-warn";
    output.innerHTML = `⚠️ No pude reconocer completamente ${!analizaA.valid ? escapeHtml(rawA) : ""}${!analizaA.valid && !analizaB.valid ? " y " : ""}${!analizaB.valid ? escapeHtml(rawB) : ""}. Usa formulas como H2O, NaCl, NH3, CH4.`;
    return;
  }

  const interaction = inferPairInteraction(analizaA, analizaB);
  const solubility = inferPairSolubility(analizaA, analizaB);
  const unknownAll = [...new Set([...(analizaA.unknown || []), ...(analizaB.unknown || [])])];

  output.className = "tabla-evaluacion-resultado tabla-result-ok";
  output.innerHTML = `
    <p><strong>Interacción probable:</strong> ${escapeHtml(interaction)}</p>
    <p><strong>Regla de disolución:</strong> ${escapeHtml(solubility)}</p>
    <p><strong>Polaridad estimada:</strong> ${formatFormula(escapeHtml(prettyA))} → ${escapeHtml(analizaA.polarityLabel)} | ${formatFormula(escapeHtml(prettyB))} → ${escapeHtml(analizaB.polarityLabel)}</p>
    <p class="muted">Nota: estimación rápida para estudio. En moléculas covalentes, la geometría puede cambiar el resultado final.</p>
    ${unknownAll.length ? `<p class="muted">Elementos no encontrados en la tabla cargada: ${escapeHtml(unknownAll.join(", "))}</p>` : ""}
  `;
}

function buildElementSymbolIndex(elementos) {
  const index = new Map();
  (elementos || []).forEach((item) => {
    if (!item?.simbolo) {
      return;
    }

    const key = String(item.simbolo).trim();
    if (key) {
      index.set(key, item);
    }
  });
  return index;
}

function parseFormulaSymbols(formula, elementIndex) {
  const cleaned = String(formula || "")
    .trim()
    .replace(/[\s\-+=()\[\]{}·.,]/g, "")
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, "");

  if (!cleaned) {
    return [];
  }

  const lowerLookup = new Map();
  elementIndex.forEach((_, symbol) => {
    lowerLookup.set(String(symbol).toLowerCase(), String(symbol));
  });

  const symbols = [];
  let i = 0;

  while (i < cleaned.length) {
    const ch = cleaned[i];
    if (/\d/.test(ch)) {
      i += 1;
      continue;
    }

    if (!/[A-Za-z]/.test(ch)) {
      i += 1;
      continue;
    }

    const next = cleaned[i + 1] || "";
    const twoCandidate = `${ch}${next}`.toLowerCase();
    if (next && /[A-Za-z]/.test(next) && lowerLookup.has(twoCandidate)) {
      symbols.push(lowerLookup.get(twoCandidate));
      i += 2;
      continue;
    }

    const oneCandidate = ch.toLowerCase();
    if (lowerLookup.has(oneCandidate)) {
      symbols.push(lowerLookup.get(oneCandidate));
    }

    i += 1;
  }

  return symbols;
}

function analyzeSubstance(rawFormula, elementIndex) {
  const symbols = parseFormulaSymbols(rawFormula, elementIndex);
  if (!symbols.length) {
    return { valid: false, polarityLabel: "No reconocida", unknown: [] };
  }

  const uniqueSymbols = [...new Set(symbols)];
  const knownElements = uniqueSymbols
    .map((symbol) => ({ symbol, element: elementIndex.get(symbol) }))
    .filter((item) => item.element);
  const unknown = uniqueSymbols.filter((symbol) => !elementIndex.get(symbol));

  if (!knownElements.length) {
    return { valid: false, polarityLabel: "No reconocida", unknown };
  }

  const tipos = knownElements.map((item) => item.element.tipo || "");
  const hasMetal = tipos.some((tipo) => isMetalFamily(tipo));
  const hasNonMetal = tipos.some((tipo) => isNonMetalFamily(tipo));

  const isIonic = hasMetal && hasNonMetal;
  const hasH = uniqueSymbols.includes("H");
  const hasFON = uniqueSymbols.some((s) => s === "F" || s === "O" || s === "N");
  const canHydrogenBond = hasH && hasFON;

  const enValues = knownElements
    .map((item) => Number(item.element.electronegatividad))
    .filter((value) => Number.isFinite(value));

  const deltaEn = enValues.length >= 2 ? Math.max(...enValues) - Math.min(...enValues) : 0;

  let polarity = "no-polar";
  let polarityLabel = "No polar";

  if (isIonic) {
    polarity = "ionic";
    polarityLabel = "Ionica";
  } else if (uniqueSymbols.length === 1 || deltaEn < 0.5) {
    polarity = "no-polar";
    polarityLabel = "No polar";
  } else {
    polarity = "polar";
    polarityLabel = "Polar";
  }

  return {
    valid: true,
    symbols: uniqueSymbols,
    unknown,
    isIonic,
    hasFON,
    canHydrogenBond,
    polarity,
    polarityLabel
  };
}

function isMetalFamily(tipo) {
  return /^Metal /.test(tipo) || tipo === "Lantanido" || tipo === "Actinido";
}

function isNonMetalFamily(tipo) {
  return tipo === "No metal" || tipo === "Halogeno" || tipo === "Gas noble";
}

function inferPairInteraction(a, b) {
  if (a.isIonic && b.isIonic) {
    return "Interionica";
  }

  if ((a.isIonic && b.polarity === "polar") || (b.isIonic && a.polarity === "polar")) {
    return "Ion-dipolo";
  }

  if (a.isIonic || b.isIonic) {
    return "Ion-dipolo inducido (debil)";
  }

  const hasHBond = (a.canHydrogenBond && b.hasFON) || (b.canHydrogenBond && a.hasFON);
  if (hasHBond) {
    return "Puente de hidrógeno";
  }

  if (a.polarity === "polar" && b.polarity === "polar") {
    return "Dipolo-dipolo";
  }

  if (a.polarity === "no-polar" && b.polarity === "no-polar") {
    return "Dispersion (London)";
  }

  return "Dispersion / dipolo inducido";
}

function inferPairSolubility(a, b) {
  if (a.isIonic && b.isIonic) {
    return "Variable (depende del solvente).";
  }

  if ((a.isIonic && b.polarity === "polar") || (b.isIonic && a.polarity === "polar")) {
    return "Alta tendencia a disolverse (iónico con polar).";
  }

  if (a.isIonic || b.isIonic) {
    return "Baja tendencia (iónico con no polar).";
  }

  if (a.polarity === b.polarity) {
    return "Alta tendencia: semejante disuelve semejante.";
  }

  return "Baja tendencia: polar y no polar se mezclan poco.";
}

function normalizeFormulaForKey(value) {
  const subToDigit = {
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9"
  };

  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (ch) => subToDigit[ch] || ch);
}

function formatFormulaForSuggestion(value) {
  const digitToSub = {
    "0": "₀",
    "1": "₁",
    "2": "₂",
    "3": "₃",
    "4": "₄",
    "5": "₅",
    "6": "₆",
    "7": "₇",
    "8": "₈",
    "9": "₉"
  };

  return normalizeFormulaForKey(value).replace(/([A-Za-z])(\d+)/g, (_, letter, digits) => {
    const subDigits = String(digits)
      .split("")
      .map((d) => digitToSub[d] || d)
      .join("");
    return `${letter}${subDigits}`;
  });
}

function prettifyFormulaInput(value, elementos) {
  const cleaned = normalizeFormulaForKey(value)
    .replace(/[\-+=()\[\]{}·.,]/g, "");

  if (!cleaned) {
    return "";
  }

  const index = buildElementSymbolIndex(elementos || []);
  const lowerLookup = new Map();
  index.forEach((_, symbol) => {
    lowerLookup.set(String(symbol).toLowerCase(), String(symbol));
  });

  let out = "";
  let i = 0;

  while (i < cleaned.length) {
    const ch = cleaned[i];

    if (/\d/.test(ch)) {
      out += ch;
      i += 1;
      continue;
    }

    if (!/[A-Za-z]/.test(ch)) {
      i += 1;
      continue;
    }

    const next = cleaned[i + 1] || "";
    const twoCandidate = `${ch}${next}`.toLowerCase();
    if (next && /[A-Za-z]/.test(next) && lowerLookup.has(twoCandidate)) {
      out += lowerLookup.get(twoCandidate);
      i += 2;
      continue;
    }

    const oneCandidate = ch.toLowerCase();
    if (lowerLookup.has(oneCandidate)) {
      out += lowerLookup.get(oneCandidate);
    } else {
      out += ch.toUpperCase();
    }

    i += 1;
  }

  return formatFormulaForSuggestion(out);
}

function buildTablaSustanciaSugerencias() {
  const byCanonical = new Map();
  const practica = state.data?.practica || {};

  const addSuggestion = (rawValue) => {
    const canonical = normalizeFormulaForKey(rawValue);
    if (!canonical || byCanonical.has(canonical)) {
      return;
    }
    byCanonical.set(canonical, formatFormulaForSuggestion(canonical));
  };

  (practica.polaridad || []).forEach((item) => {
    if (item?.molecula) {
      addSuggestion(item.molecula);
    }
  });

  (practica.pares_sustancias || []).forEach((item) => {
    const pair = String(item?.pareja || "").split("+");
    pair.forEach((part) => {
      const clean = part.trim();
      if (clean) {
        addSuggestion(clean);
      }
    });
  });

  return [...byCanonical.values()].sort((a, b) => normalizeFormulaForKey(a).localeCompare(normalizeFormulaForKey(b)));
}

function renderTablaAccordionCard({ cardClass, title, body, open = false, id }) {
  return `<article class="card full ${cardClass} tabla-accordion${open ? " is-open" : ""}">
    <button type="button" class="tabla-accordion-head" data-tabla-toggle="${escapeHtml(id)}" aria-expanded="${open ? "true" : "false"}" aria-controls="${escapeHtml(id)}-contenido">
      <span>${escapeHtml(title)}</span>
      <span class="tabla-accordion-arrow">▼</span>
    </button>
    <div id="${escapeHtml(id)}-contenido" class="tabla-accordion-content">
      ${body}
    </div>
  </article>`;
}

function buildTablaElementos(rawElementos) {
  const byZ = new Map();
  const bySymbol = new Map();

  (rawElementos || []).forEach((item) => {
    if (item?.numero_atomico) {
      byZ.set(Number(item.numero_atomico), item);
    }
    if (item?.simbolo) {
      bySymbol.set(String(item.simbolo).toLowerCase(), item);
    }
  });

  return PERIODIC_110.map((base) => {
    const fromZ = byZ.get(base.z);
    const fromSymbol = bySymbol.get(base.simbolo.toLowerCase());
    const source = fromZ || fromSymbol || {};

    const tipoAsignado = source.tipo || inferElementFamily(base.z, source.grupo);

    return {
      numero_atomico: base.z,
      simbolo: source.simbolo || base.simbolo,
      nombre: source.nombre || base.nombre,
      grupo: source.grupo ?? "-",
      periodo: source.periodo ?? "-",
      tipo: tipoAsignado,
      electronegatividad: source.electronegatividad ?? "-",
      valencias: Array.isArray(source.valencias) ? source.valencias : [],
      tip_polaridad: source.tip_polaridad || "Usa su tipo y electronegatividad para comparar polaridad."
    };
  });
}

function inferElementFamily(z, grupo) {
  const n = Number(z);
  const g = Number(grupo);

  const lantanidos = new Set([57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]);
  const actinidos = new Set([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]);
  const halogenos = new Set([9, 17, 35, 53, 85]);
  const gasesNobles = new Set([2, 10, 18, 36, 54, 86]);
  const noMetales = new Set([1, 6, 7, 8, 15, 16, 34]);
  const metaloides = new Set([5, 14, 32, 33, 51, 52, 84]);

  if (lantanidos.has(n)) return "Lantanido";
  if (actinidos.has(n)) return "Actinido";
  if (halogenos.has(n)) return "Halogeno";
  if (gasesNobles.has(n)) return "Gas noble";
  if (noMetales.has(n)) return "No metal";
  if (metaloides.has(n)) return "Metaloide";

  if (g === 1) return "Metal alcalino";
  if (g === 2) return "Metal alcalinoterreo";
  if (g >= 3 && g <= 12) return "Metal de transicion";

  if ((g >= 13 && g <= 16) || [81, 82, 83, 113, 114, 115, 116].includes(n)) {
    return "Metal post-transicion";
  }

  return "Metal de transicion";
}

function getElementoTipoClass(tipo) {
  const map = {
    "Metal alcalino": "tipo-alcalino",
    "Metal alcalinoterreo": "tipo-alcalinoterreo",
    "Metal de transicion": "tipo-transicion",
    "Metal post-transicion": "tipo-post-transicion",
    "No metal": "tipo-no-metal",
    "Halogeno": "tipo-halogeno",
    "Gas noble": "tipo-gas-noble",
    "Metaloide": "tipo-metaloide",
    "Lantanido": "tipo-lantanido",
    "Actinido": "tipo-actinido"
  };
  return map[tipo] || "tipo-general";
}

function renderQuiz() {
  const panel = el.panels.quiz;
  panel.innerHTML = "";
  const quiz = state.data?.quiz || [];

  if (!quiz.length) {
    renderEmpty("quiz");
    return;
  }

  quiz.forEach((q, idx) => {
    const id = `quiz-${q.id || idx}`;
    const answer = state.progreso.correctas[id];
    const selectedIndex = state.progreso.selecciones[id];
    const isDone = typeof answer === "boolean";
    const cardClass = isDone ? (answer ? "quiz-card is-correct" : "quiz-card is-wrong") : "quiz-card";
    panel.insertAdjacentHTML(
      "beforeend",
      `<article class="card ${cardClass}">
        <div class="quiz-head">
          <h3>Pregunta ${idx + 1}</h3>
          <span class="quiz-badge">${isDone ? (answer ? "Correcta" : "Revisar") : "En práctica"}</span>
        </div>
        <p>${formatFormula(escapeHtml(q.pregunta || ""))}</p>
        <div class="row">
          ${(q.opciones || [])
            .map((op, opIdx) => {
              const optionClasses = ["option"];
              if (isDone && opIdx === Number(q.respuesta_index)) {
                optionClasses.push("is-correct");
              }
              if (isDone && typeof selectedIndex === "number" && selectedIndex === opIdx && selectedIndex !== Number(q.respuesta_index)) {
                optionClasses.push("is-selected");
              }

              return `<button class="${optionClasses.join(" ")}" data-quiz-id="${id}" data-op-index="${opIdx}">${formatFormula(escapeHtml(op))}</button>`;
            })
            .join("")}
        </div>
        <div class="row quiz-actions">
          <button class="action primary" data-quiz-step="${id}">Paso a paso</button>
        </div>
        <p class="quiz-feedback ${isDone ? (answer ? "good" : "bad") : ""}" id="quiz-feedback-${id}">${renderQuizFeedback(id, q)}</p>
        <div class="step-box quiz-step-box" id="quiz-step-${id}">${renderQuizSteps(id, q)}</div>
      </article>`
    );
  });

  if (!panel.dataset.quizBound) {
    panel.addEventListener("click", onQuizClick);
    panel.dataset.quizBound = "true";
  }
}

function onQuizClick(event) {
  const stepButton = event.target.closest("button[data-quiz-step]");
  if (stepButton) {
    const id = stepButton.dataset.quizStep;
    state.progreso.pasos[id] = (state.progreso.pasos[id] || 0) + 1;
    saveProgress();
    renderQuiz();
    return;
  }

  const button = event.target.closest("button[data-quiz-id]");
  if (!button) {
    return;
  }

  const id = button.dataset.quizId;
  const selectedIndex = Number(button.dataset.opIndex);
  const questionIndex = (state.data?.quiz || []).findIndex((q, idx) => `quiz-${q.id || idx}` === id);
  const question = state.data?.quiz?.[questionIndex];
  if (!question) {
    return;
  }

  const correct = selectedIndex === Number(question.respuesta_index);
  state.progreso.selecciones[id] = selectedIndex;
  state.progreso.correctas[id] = correct;
  saveProgress();

  renderQuiz();
  renderProgreso();
}

function getQuizQuestionById(id) {
  return (state.data?.quiz || []).find((q, idx) => `quiz-${q.id || idx}` === id) || null;
}

function renderQuizFeedback(id, question) {
  const answer = state.progreso.correctas[id];
  if (typeof answer !== "boolean") {
    return "Toca una opción y luego abre el paso a paso para ver la lógica.";
  }

  return answer
    ? `✅ Bien. ${formatFormula(escapeHtml(question.explicacion || ""))}`
    : `❌ Revisa. ${formatFormula(escapeHtml(question.explicacion || ""))}`;
}

function renderQuizSteps(id, question) {
  const steps = Array.isArray(question.pasos) && question.pasos.length
    ? question.pasos
    : buildDefaultQuizSteps(question);
  const visible = Math.min(state.progreso.pasos[id] || 0, steps.length);

  if (visible === 0) {
    return "<p class='muted'>Pulsa Paso a paso para ver la explicación por partes.</p>";
  }

  return `<ol class="list">${steps
    .slice(0, visible)
    .map((step) => `<li>${formatFormula(escapeHtml(step))}</li>`)
    .join("")}</ol>`;
}

function buildDefaultQuizSteps(question) {
  return [
    `Lee la pregunta: ${question.pregunta || ""}`,
    `Aplica la idea clave del tema: ${question.explicacion || ""}`,
    `La respuesta correcta es la que coincide con esa regla.`,
  ];
}

function renderProgreso() {
  const panel = el.panels.progreso;
  panel.innerHTML = "";

  const totalQuiz = (state.data?.quiz || []).length;
  const totalPolar = (state.data?.practica?.polaridad || []).length;
  const totalTemas = (state.data?.resumen_temas || []).length;
  const correctQuiz = Object.values(state.progreso.correctas).filter(Boolean).length;
  const answeredQuiz = Object.keys(state.progreso.correctas).length;

  const polarCorrect = Object.entries(state.progreso.intentos).filter(([id, answer]) => {
    if (!id.startsWith("pol-")) {
      return false;
    }

    const key = id.replace("pol-", "");
    const item = (state.data?.practica?.polaridad || []).find((p) => String(p.id) === key);
    return item ? Boolean(answer) === Boolean(item.es_polar) : false;
  }).length;

  const pairItems = state.data?.practica?.pares_sustancias || [];
  const pairCorrect = pairItems.filter((item) => state.progreso.correctas[`pair-${item.id}`] === true).length;
  const pairAnswered = pairItems.filter((item) => Object.prototype.hasOwnProperty.call(state.progreso.correctas, `pair-${item.id}`)).length;

  const total = totalQuiz + totalPolar + pairItems.length;
  const done = correctQuiz + polarCorrect + pairCorrect;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  const revisados = Object.keys(state.progreso.revisados || {}).length;
  const revisadoPercent = totalTemas > 0 ? Math.round((revisados / totalTemas) * 100) : 0;
  const quizPercent = answeredQuiz > 0 ? Math.round((correctQuiz / answeredQuiz) * 100) : 0;

  const temas = state.data?.resumen_temas || [];
  const progresoTemas = temas.map((tema, idx) => {
    const titulo = tema.titulo || `Tema ${idx + 1}`;
    const rev = state.progreso.revisados?.[titulo] ? 100 : 0;
    const q = quizPercent;
    const score = Math.round((rev + q) / 2);
    return { titulo, rev, q, score, emoji: idx === 0 ? "🧪" : idx === 1 ? "⚛️" : "🧫" };
  });

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full progreso-card-main">
      <h2>📊 Mi Progreso</h2>
      <div class="progreso-resumen-grid">
        <div class="progreso-stat">
          <div class="progreso-stat-emoji">📖</div>
          <div class="progreso-stat-valor">${revisadoPercent}%</div>
          <div class="progreso-stat-label">Revisado</div>
        </div>
        <div class="progreso-stat">
          <div class="progreso-stat-emoji">📝</div>
          <div class="progreso-stat-valor">${answeredQuiz + pairAnswered}</div>
          <div class="progreso-stat-label">Quizzes</div>
        </div>
        <div class="progreso-stat">
          <div class="progreso-stat-emoji">🎯</div>
          <div class="progreso-stat-valor">${quizPercent}%</div>
          <div class="progreso-stat-label">Promedio</div>
        </div>
      </div>
      <div class="progreso-total-linea">
        <strong>Completado general:</strong> ${percent}% (${done}/${total || 0})
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
    </article>`
  );

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full">
      <h3>🗂️ Progreso por tema</h3>
      ${progresoTemas.length ? progresoTemas.map((t) => `
        <div class="tema-progress-item">
          <div class="tema-progress-head">
            <span>${t.emoji} ${escapeHtml(t.titulo)}</span>
            <span>${t.rev}% revisado · ${t.q}% quiz</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${t.score}%"></div></div>
        </div>
      `).join("") : "<p class='muted'>No hay temas para mostrar progreso.</p>"}
    </article>`
  );

  const orden = [...progresoTemas].sort((a, b) => b.score - a.score);
  const fuerte = orden[0];
  const debil = orden[orden.length - 1];

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full">
      <h3>💪 Temas más fuertes</h3>
      ${fuerte && (fuerte.score > 0 || revisadoPercent > 0 || answeredQuiz > 0)
        ? `<p>${fuerte.emoji} <strong>${escapeHtml(fuerte.titulo)}</strong> con ${fuerte.score}% de dominio actual.</p>`
        : "<p class='muted'>Completa quizzes o revisa temas para ver tus fortalezas 💪</p>"}
    </article>`
  );

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full">
      <h3>📘 Temas a mejorar</h3>
      ${debil && (debil.score < 100)
        ? `<p>${debil.emoji} <strong>${escapeHtml(debil.titulo)}</strong> aparece con ${debil.score}%. Practica este tema primero.</p>`
        : "<p class='muted'>Completa quizzes para ver áreas de mejora 📘</p>"}
    </article>`
  );

  panel.insertAdjacentHTML(
    "beforeend",
    `<article class="card full progreso-reset-wrap"><button id="btn-reset-progreso" class="btn-peligro">🗑️ Resetear progreso</button></article>`
  );

  const resetBtn = document.getElementById("btn-reset-progreso");
  if (resetBtn) {
    resetBtn.onclick = () => {
      localStorage.removeItem(STORAGE_KEY);
      state.progreso = { intentos: {}, correctas: {}, pasos: {}, revisados: {} };
      renderAll();
    };
  }

}

function bindPracticeEvents() {
  const panel = el.panels.practica;
  panel.onclick = (event) => {
    const answerButton = event.target.closest("button[data-answer]");
    if (answerButton) {
      const id = answerButton.dataset.id;
      const answer = answerButton.dataset.answer === "true";
      state.progreso.intentos[id] = answer;
      saveProgress();
      renderPractica();
      renderProgreso();
      return;
    }

    const pairButton = event.target.closest("button[data-pair-id]");
    if (pairButton) {
      const id = pairButton.dataset.pairId;
      const selectedIndex = Number(pairButton.dataset.pairOpIndex);
      const source = findPracticeSourceById(id);
      if (!source) {
        return;
      }

      const correct = selectedIndex === Number(source.respuesta_index);
      state.progreso.correctas[id] = correct;
      saveProgress();

      const feedback = document.getElementById(`pair-feedback-${id}`);
      if (feedback) {
        feedback.innerHTML = correct
          ? `✅ Correcto. ${formatFormula(escapeHtml(source.explicacion_simple || ""))}`
          : `❌ Revisa. ${formatFormula(escapeHtml(source.explicacion_simple || ""))}`;
      }
      renderProgreso();
      return;
    }

    const stepButton = event.target.closest("button[data-next-step]");
    if (stepButton) {
      const id = stepButton.dataset.nextStep;
      state.progreso.pasos[id] = (state.progreso.pasos[id] || 0) + 1;
      saveProgress();

      const source = findPracticeSourceById(id);
      const stepBox = document.getElementById(`step-${id}`);
      if (source && stepBox) {
        stepBox.innerHTML = renderStep(id, source.pasos);
      }
      return;
    }

    const simpleButton = event.target.closest("button[data-simple]");
    if (simpleButton) {
      const id = simpleButton.dataset.simple;
      const source = findPracticeSourceById(id);
      const simple = document.getElementById(`simple-${id}`);
      if (simple) {
        simple.classList.add("is-visible");
        simple.innerHTML = `<div class="simple-title">💡 Explicación simple</div><p>${formatFormula(escapeHtml(source?.explicacion_simple || "No hay explicación simple en el JSON para este ejercicio."))}</p>`;
      }
    }
  };
}

function findPracticeSourceById(id) {
  const [prefix, rawId] = id.split("-");
  const practica = state.data?.practica || {};

  if (prefix === "pol") {
    return (practica.polaridad || []).find((x) => String(x.id) === rawId);
  }

  if (prefix === "dip") {
    return (practica.flecha_dipolo || []).find((x) => String(x.id) === rawId);
  }

  if (prefix === "pair") {
    return (practica.pares_sustancias || []).find((x) => String(x.id) === rawId);
  }

  if (prefix === "calc") {
    return (practica.calculos || []).find((x) => String(x.id) === rawId)
      || (state.data?.ejercicios || []).find((x) => String(x.id) === rawId);
  }

  return null;
}

function renderTemaIndex(indice) {
  if (!indice.length) {
    return "<p class='muted'>No hay índice en el JSON.</p>";
  }

  return `<ul class="list">${indice
    .map((t) => `<li><strong>${escapeHtml(t.tema || "Tema")}</strong> ${renderInlineSubtemas(t.subtemas || [])}</li>`)
    .join("")}</ul>`;
}

function renderInlineSubtemas(subtemas) {
  if (!subtemas.length) {
    return "";
  }
  return `- ${subtemas.map((s) => formatFormula(escapeHtml(s))).join(", ")}`;
}

function renderConexiones(conexiones) {
  if (!conexiones.length) {
    return "<p class='muted'>No hay conexiones en el JSON.</p>";
  }

  return `<ul class="list">${conexiones
    .map((c) => `<li><strong>${formatFormula(escapeHtml(c.de || ""))}</strong> ↔ <strong>${formatFormula(escapeHtml(c.a || ""))}</strong>: ${formatFormula(escapeHtml(c.explicacion || ""))}</li>`)
    .join("")}</ul>`;
}

function renderMapasBreves(mapas) {
  if (!mapas.length) {
    return "<p class='muted'>No hay mapas visuales en el JSON.</p>";
  }

  return `<div class="mapas-estructura">
    <div class="mapa-paso">
      <div class="mapa-numero">1️⃣</div>
      <div class="mapa-contenido">
        <h4>¿Tiene metales?</h4>
        <p>Metal + No metal = <strong>IÓNICO</strong> 🔗</p>
      </div>
    </div>
    <div class="mapa-paso">
      <div class="mapa-numero">2️⃣</div>
      <div class="mapa-contenido">
        <h4>¿Átomos iguales?</h4>
        <p>O=O, N≡N = <strong>NO POLAR</strong> ⚖️</p>
      </div>
    </div>
    <div class="mapa-paso">
      <div class="mapa-numero">3️⃣</div>
      <div class="mapa-contenido">
        <h4>¿Se equilibran cargas?</h4>
        <p>Si → No polar ⚖️ | No → Polar 🔌</p>
      </div>
    </div>
  </div>`;
}

function renderGuia(guia) {
  if (!guia.length) {
    return "<p class='muted'>No hay guía rápida en el JSON.</p>";
  }

  const getCardColor = (titulo) => {
    if (titulo.includes("Tabla")) return "guia-card-tabla";
    if (titulo.includes("Iónico")) return "guia-card-decision";
    if (titulo.includes("Fuerzas")) return "guia-card-fuerzas";
    return "guia-card-default";
  };

  return `<div class="guia-grid">${guia
    .map((bloque) => `
      <article class="guia-card ${getCardColor(bloque.titulo)}">
        <h3>${formatFormula(escapeHtml(bloque.titulo || ""))}</h3>
        <ul class="guia-items">${(bloque.items || [])
          .map((item) => `<li>${formatFormula(escapeHtml(item))}</li>`)
          .join("")}</ul>
      </article>
    `)
    .join("")}</div>`;
}

function renderList(title, items) {
  if (!items || !items.length) {
    return "";
  }

  let blockClass = "study-default";
  if (title.includes("Puntos")) {
    blockClass = "study-puntos";
  } else if (title.includes("Errores")) {
    blockClass = "study-errores";
  }

  return `<section class="study-block ${blockClass}">
    <h4>${formatFormula(escapeHtml(title))}</h4>
    <ul class="list study-list">${items.map((item) => `<li>${formatStudyText(item)}</li>`).join("")}</ul>
  </section>`;
}

function renderPalabras(palabras) {
  if (!palabras || !palabras.length) {
    return "";
  }

  return `<section class="study-block study-palabras">
    <h4>🧠 Palabras clave</h4>
    <ul class="list study-list">${palabras
      .map((p) => `<li><strong>${formatStudyText(p.termino || "")}</strong>: ${formatStudyText(p.definicion || "")}</li>`)
      .join("")}</ul>
  </section>`;
}

function formatStudyText(value) {
  const safe = escapeHtml(value || "");
  const withFormula = formatFormula(safe);
  return withFormula.replace(
    /\b(no polar|polaridad|polar|dipolo|ion-dipolo|interiónicas?|intramoleculares?|intermoleculares?|electronegatividad|disoluciones?|soluto|solvente|puentes? de hidrógeno|dispersión)\b/gi,
    '<span class="term-chip">$1</span>'
  );
}

function renderStep(id, steps) {
  if (!steps || !steps.length) {
    return "<p class='muted'>No hay pasos en el JSON para este item.</p>";
  }

  const visible = Math.min(state.progreso.pasos[id] || 0, steps.length);
  if (visible === 0) {
    return "<p class='muted'>Toca \"Paso a paso\" para revelar la solución gradualmente.</p>";
  }

  return `<ol class="list">${steps
    .slice(0, visible)
    .map((s) => `<li>${formatFormula(escapeHtml(s))}</li>`)
    .join("")}</ol>`;
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.progreso = {
        intentos: parsed.intentos || {},
        correctas: parsed.correctas || {},
        selecciones: parsed.selecciones || {},
        pasos: parsed.pasos || {},
        revisados: parsed.revisados || {}
      };
    }
  } catch {
    state.progreso = { intentos: {}, correctas: {}, selecciones: {}, pasos: {}, revisados: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progreso));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatFormula(formula) {
  if (!formula) return formula;
  return String(formula)
    .replace(/&lt;-&gt;|<->/g, "↔")
    .replace(/-&gt;|->/g, "→")
    .replace(/([A-Za-z])(\d+)/g, "$1<sub>$2</sub>");
}
