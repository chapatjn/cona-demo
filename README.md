# Cona Futbol — Repositorio de Código

Plataforma para organizar mejengas (partidos pickup de fútbol) en Costa Rica.

> **"Porque no todos los cracks juegan en primera... pero todos merecen cancha."**

---

## ¿Qué hay en este repo?

| Carpeta | Qué es |
|---------|--------|
| `registro-mejenga-N/` | Página web de registro para cada mejenga (Vercel + Firebase) |
| `cona-app-demo/` | Prototipo estático de la app móvil (solo UI, sin backend) |
| `mejengas/` | Script Node.js para generar reportes PDF post-mejenga |
| `context.md` | Contexto del proyecto, preguntas abiertas de arquitectura |

---

## Estado actual del MVP (Feb 2026)

El MVP **corre por WhatsApp + SINPE**. No hay app móvil todavía.
El flujo actual:
1. Se anuncia la mejenga en WhatsApp
2. La gente se registra en la página web de la mejenga
3. Pagan por SINPE (transferencia móvil CR)
4. Esteban confirma el pago manualmente en Firebase Console (`paid: true`)

La app móvil está en desarrollo por Chapatin.

---

## Páginas de Registro

Cada mejenga tiene su propia página, deployada en Vercel.

**URLs actuales:**
- Mejenga 3: https://registro-mejenga-3.vercel.app
- Mejenga 4: https://registro-mejenga-4.vercel.app *(o URL asignada por Vercel)*

**Stack:**
- Frontend: HTML/CSS/JS puro (sin frameworks)
- Base de datos: Firebase Firestore (actualizaciones en tiempo real)
- Hosting: Vercel (deploy gratuito)
- Analytics: Google Analytics (GA4)

**Firebase — Proyecto:** `cona-futbol`

**Colecciones en Firestore:**
| Colección | Mejenga |
|-----------|---------|
| `mejenga3_registros` | Mejenga 3 — 17 Feb 2026 |
| `mejenga4_registros` | Mejenga 4 — 24 Feb 2026 |

**Modelo de datos (cada documento = un jugador registrado):**
```json
{
  "name":      "Esteban Pérez",
  "position":  "jugador",       // "jugador" | "portero"
  "whatsapp":  "88881234",
  "paid":      false,           // se cambia a true cuando confirma el pago por SINPE
  "banca":     true,            // presente solo si está en lista de espera
  "timestamp": "serverTimestamp"
}
```

**¿Cómo crear la página para la próxima mejenga?**
```bash
# 1. Copiar la carpeta más reciente
cp -r registro-mejenga-4 registro-mejenga-5

# 2. Editar registro-mejenga-5/index.html — cambiar SOLO estas líneas:
#    - <title>: nombre de la mejenga
#    - COLLECTION = 'mejenga5_registros'   ← nombre único en Firestore
#    - MAX_JUGADORES y MAX_PORTEROS        ← según formato del partido
#    - Datos del evento en el HTML         ← fecha, hora, lugar, precio

# 3. Deploy
vercel registro-mejenga-5 --prod
```

---

## Demo App Móvil

`cona-app-demo/index.html` — Prototipo estático de la app. **No tiene backend.**

Pantallas incluidas: Home (mejengas disponibles), Detalle de juego, Goleadores de temporada, Perfil de usuario.

Útil para que Chapatin entienda los flujos de UI y diseñe la API en consecuencia.

---

## Generador de Reportes PDF

Script de Node.js que toma el HTML de un reporte y genera el PDF final.

```bash
cd mejengas
npm install                         # solo la primera vez

node generar-pdf.js 2026-02-24      # leer mejengas/2026-02-24/mejenga.html
                                    # → genera mejengas/2026-02-24/mejenga.pdf
```

**Template:** `mejengas/template.html` — base reutilizable para cada reporte.

---

## Equipo

| Miembro | Rol |
|---------|-----|
| Esteban | Co-fundador, estrategia, contenido |
| Sebas   | UI/UX, Figma, redes sociales |
| Chapa   | Backend developer (app móvil) |
| Iki     | Biz dev, alianzas, partnerships |
| Swayam  | Contributor (desde Feb 2026) |

Correo: info@cona.futbol
Web: www.cona.futbol

---

## Para Chapatin — Próximos Pasos Técnicos

El frontend actual escribe y lee **directamente a Firebase Firestore** desde el browser.
Para la app móvil, el backend debería exponer endpoints que reemplacen eso:

| # | Funcionalidad | Endpoint sugerido |
|---|--------------|-------------------|
| 1 | Registrar jugador | `POST /mejengas/:id/registros` |
| 2 | Lista en tiempo real | WebSocket o SSE (hoy lo hace Firebase `onSnapshot`) |
| 3 | Confirmar pago | `PATCH /registros/:id` `{ paid: true }` |
| 4 | **Stripe (futuro)** | `POST /checkout` — cobro online en vez de SINPE manual |

Ver `context.md` para preguntas abiertas de arquitectura y stack.
