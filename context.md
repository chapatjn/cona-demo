# Cona Futbol - Contexto del Proyecto

## Que es Cona

Cona es una plataforma para organizar y unirse a mejengas (partidos de futbol pickup/drop-in) en Costa Rica. El slogan: *"Porque no todos los cracks juegan en primera... pero todos merecen cancha."*

La propuesta de valor es eliminar el caos de organizar mejengas por chats de WhatsApp. El usuario simplemente ve una mejenga disponible cerca, se inscribe, llega y juega. Cona se encarga de la logistica (cancha confirmada, equipos armados, horarios).

Comparable: CeleBreak (app de futbol drop-in en Europa/Latam).

## Funcionalidades Principales

### 1. Mejengas Drop-in (Prioridad MVP)
- Cualquier persona ve mejengas disponibles en su zona
- Se inscribe individualmente
- Cona organiza todo: cancha, equipos, horarios
- Sistema de strikes: 2 no-shows = ban del usuario

### 2. Retos
- Un equipo ya armado busca rival
- Se registran con: nombre del equipo, datos del capitan, horarios disponibles
- Tabla de posiciones (ya existe con Pique Blinders, Hacemilan, Cona FC)

## Equipo Fundador

| Miembro  | Rol Principal                        | Horas/Semana |
|----------|--------------------------------------|--------------|
| Esteban  | Co-fundador, estrategia, contenido   | 5-10         |
| Sebas    | UI/UX (Figma), diseno, social media  | 3-10         |
| Chapa    | Backend developer                    | 15 (verano)  |
| Iki      | Biz dev, alianzas, partnerships      | 5-10         |
| Swayam   | Contributor nuevo (desde Feb 2026)   | Por definir  |

## Estado Actual (Feb 2026)

### Fase actual: MVP por WhatsApp
El MVP actual opera 100% por WhatsApp. No hay app movil todavia. El flujo es:
1. Se anuncia una mejenga en el grupo de WhatsApp
2. La gente se apunta por el chat
3. Se cobra por SINPE (transferencia movil CR)
4. Se organiza todo manualmente (equipos, cancha, confirmaciones)

La app movil se esta desarrollando en paralelo, pero la operacion real corre por WhatsApp.

### Lo que ya existe:
- **MVP WhatsApp:** grupo de comunidad funcionando, mejengas organizadas manualmente
- **Website:** cona.futbol (Framer, $10/mo hosting)
- **Disenos:** Figma con flujos de drop-in, sign-in, retos
- **Al menos 1 reto jugado:** Pique Blinders 14 - 0 Hacemilan
- **Formulario Unite Ya:** captura nombre + correo en la web
- **Social media:** contenido en preparacion (reels, memes, estaticos)
- **Backend:** Chapa trabajando en la app movil, estimado de meses para launch

### Lo que falta:
- App movil funcional (en desarrollo)
- Chalecos y bolas con marca Cona
- Alianzas con complejos deportivos
- Contenido grabado en cancha (con Santi)
- Mas mejengas organizadas (meta: 1-2 por semana)
- Automatizacion de procesos que hoy son manuales

## Ubicacion

Barrio Cristales, La Uruca, San Jose, Costa Rica
Correo: info@cona.futbol

## Modelo Actual

Organizacion manual via WhatsApp. Los pagos se manejan por SINPE (transferencia movil costarricense). La idea es migrar esta operacion a una app propia.

---

## Preguntas para Definir Proximos Proyectos

### Producto / Tech
1. **Stack tecnologico:** Que stack quieren para la app? (React Native, Flutter, web app con PWA, etc.) Chapa ya empezo algo?
2. **Backend actual:** Que tiene Chapa hecho? Hay un repo existente? Que tecnologias esta usando?
3. **Figma:** Puedo ver los disenos de Figma para entender los flujos exactos?
4. **Hosting/Infra:** Tienen preferencia de cloud? (AWS, GCP, Firebase, Supabase, etc.)
5. **Pagos:** Solo SINPE por ahora o quieren integrar pagos en la app? (Stripe, etc.)

### MVP / Scope
6. **Que es el MVP minimo?** Si tuvieran que lanzar manana, que necesita tener si o si?
7. **Drop-in primero o retos primero?** Los meetings sugieren drop-in, confirmo?
8. **Usuarios target iniciales:** Solo la comunidad de WhatsApp actual o quieren abrir a publico general?
9. **Cancha:** Como se asegura la cancha? Ustedes la reservan y el costo se divide? O el usuario paga su cupo?

### Negocio
10. **Modelo de monetizacion:** Cobran comision por mejenga? Fee fijo por cupo? Freemium?
11. **Alianzas con complejos:** Ya tienen alguna relacion formal con algun complejo?
12. **Zonas:** Empiezan solo en San Jose o desde el inicio multiples zonas?

### Prioridades Inmediatas
13. **Que proyecto queres que hagamos primero?** Ejemplos:
    - App MVP completa
    - Landing page mejorada
    - Sistema de inscripcion automatizado (sin app completa)
    - Bot de WhatsApp para organizar mejengas
    - Dashboard admin para gestionar mejengas
    - Otra cosa?
