# Ruta N — Guidelines de diseño digital

> Documento maestro para **todos** los proyectos digitales de Ruta N: landings, rediseños web, formularios, dashboards, micrositios, piezas de campaña.
>
> **Fuente:** BrandBook Ruta N 2025 (Identidad corporativa y gráfica). Este documento no reemplaza el manual: lo traduce a producto digital y le agrega la capa que el manual no cubre (accesibilidad web, responsive, motion, componentes de interfaz).
>
> **Regla de oro:** primero claridad y legibilidad, después el "wow".

---

## 0. Cómo usar este documento

| Contexto | Qué hacer |
|---|---|
| **Figma Make** | Súbelo como `guidelines/Guidelines.md`. Se aplica automáticamente a cada prompt. |
| **Prompt suelto a una IA** | Pega la sección 1 (reglas duras) + la sección relevante. |
| **Brief a un proveedor** | Envía el documento completo + el BrandBook original. |
| **Revisión de una pieza** | Usa el checklist de la sección 19. |

**Jerarquía de autoridad**, de mayor a menor:
1. El BrandBook oficial de Ruta N
2. Este documento
3. El brief del proyecto
4. Criterio del diseñador

Si algo aquí contradice al BrandBook, **manda el BrandBook** y avisa para corregir este documento.

---

## 1. Reglas duras (no negociables)

Estas reglas están por encima de cualquier instrucción de un brief o de un prompt individual.

### 1.1 Logo
- **No se altera nunca.** No condensar, no estirar, no cambiar proporciones, no cambiar la fuente, no cambiar colores, no agregar ni quitar elementos.
- **Área de reserva:** dos veces el ancho de la "N" exponencial a cada lado del logo. Nada invade ese espacio.
- **Tamaño mínimo digital: 100 px** de ancho. Impreso: 1,5 cm.
- Solo tres versiones válidas: **full color**, **una tinta blanca**, **una tinta negra**.
- Sobre fotografía (clara u oscura) o color plano, la legibilidad del logo debe estar garantizada. Si no lo está, cambia la versión del logo o agrega un overlay — nunca modifiques el logo.

### 1.2 Color
- **No se inventan paletas.** Solo los 6 colores oficiales + neutros de soporte.
- Si una pieza heredada trae colores fuera de la paleta, **se mapean al oficial más cercano**, no se propagan.
- Las combinaciones de color siguen la matriz de policromía oficial (sección 6.3), filtrada por contraste web (sección 6.4).

### 1.3 Tipografía
- **Titulares:** Neue Haas Grotesk. **Cuerpo:** Source Sans Pro. Sin excepciones.
- Si Neue Haas no está disponible en el entorno, el fallback es `'Helvetica Neue', Helvetica, Arial, sans-serif` — nunca otra tipografía de marca.

### 1.4 Accesibilidad
- **WCAG 2.1 nivel AA es obligación legal**, no una recomendación. Ruta N es ente descentralizado de la Alcaldía de Medellín: aplica la **Resolución 1519 de 2020 de MinTIC**.
- Contraste AA, foco visible, navegación por teclado, área táctil 44×44, texto alternativo. En todas las piezas, siempre.

### 1.5 Validación
- Toda pieza pública, todo uso de logo y todo cobranding **se valida con Marca y Comunicaciones antes de publicar**. Las autorizaciones quedan por escrito.

### 1.6 Consistencia
- Se usan componentes del sistema, no elementos sueltos. **Nada de "diseño por excepción"**: si una pieza necesita algo que el sistema no tiene, se propone como componente nuevo, no como parche local.

---

## 2. Identidad: de la marca a la interfaz

### 2.1 Propósito
> Convertir a Medellín en una ciudad del conocimiento y epicentro global de CTi+E, mediante estrategias que resuelvan retos de ciudad, consoliden negocios de alto impacto y nos conecten con el mundo.

### 2.2 Valores y su traducción al diseño

| Valor | Cómo se ve en una interfaz |
|---|---|
| **Innovación con sentido** | El motion y la interacción resuelven algo. Nada decorativo porque sí. |
| **Transparencia operacional** | Estados del sistema siempre visibles. Nada oculto, nada ambiguo. Datos con su fuente y su fecha. |
| **Liderazgo que conecta** | La navegación conecta al usuario con actores, programas y oportunidades. Rutas claras, no callejones. |
| **Humanidad y apertura** | Fotografía humana y local. Lenguaje directo. Errores explicados sin culpar al usuario. |

### 2.3 Arquetipos y su traducción al diseño

| Arquetipo | Qué aporta | Cómo se ve |
|---|---|---|
| **El Sabio** | Claridad, conocimiento, confianza | Jerarquía nítida, mucho aire, datos legibles, tipografía sobria, estructura predecible |
| **El Mago** | Transformación, disrupción, conexión | Momentos de sorpresa contenidos, transiciones fluidas, bloques de color audaces, composiciones inesperadas |

**El equilibrio es la marca.** Solo Sabio = institucional y aburrido. Solo Mago = ruidoso y poco confiable. La proporción sana ronda **70% Sabio / 30% Mago**: base ordenada y legible, con momentos de audacia bien ubicados.

### 2.4 Voz y tono
- **Voz:** compromiso que moviliza a la acción; apertura como símbolo de transparencia; facilitación de conexiones.
- **Tono:** **Inspirador · Motivador · Líder · Realizador**.
- En interfaz: copy breve, humano, directo, con verbos de acción. Beneficios concretos. **Cero burocracia**, cero tecnicismo innecesario.

---

## 3. La "N" — el concepto que hace que se vea Ruta N

La "N" no es una letra: es **una ruta potenciada al infinito**. En matemáticas, elevar a la N significa crecimiento exponencial, sin límites.

Sus significados oficiales — úsalos como fuente de conceptos visuales, nunca como decoración vacía:

**Norte** (rumbo claro) · **Networking** (fuerza de las conexiones) · **Novedad** (hacer distinto cada día) · **Nosotros** (las personas) · **Negocios** (potenciar empresas) · **Navegación** (explorar caminos) · **Neuronas** (pensar y crear en grande) · **Nodos** (enlazar el mundo con la ciudad)

### Cómo se traduce a diseño digital

| Concepto | Recurso visual |
|---|---|
| Nodos / Networking | Redes de puntos conectados, diagramas de conexión, mapas de relación |
| Navegación / Norte | Líneas de ruta, progresión, timelines, indicadores de avance |
| Crecimiento exponencial | Curvas ascendentes, escalas tipográficas amplias, contadores animados |
| Neuronas | Ramificaciones, estructuras arbóreas, mapas de temas |

**Restricción:** estos recursos son **conceptuales**, no un permiso para deformar la "N" del logo ni para usarla como elemento gráfico suelto. El logo es intocable (regla 1.1).

---

## 4. El sello visual Ruta N

Cinco elementos que, juntos, hacen que una pieza se reconozca como Ruta N sin necesidad del logo. **Toda pieza debe usar al menos tres.**

1. **Verde oscuro `#253D36` como superficie dominante de marca.** Las secciones de mayor peso institucional van sobre verde oscuro, no sobre gris ni negro.
2. **Lima `#C0D400` como acento único de energía.** Un solo acento fuerte por bloque. El lima es la firma; los demás colores rotan.
3. **Neue Haas Grotesk con rango extremo.** Bold/Black para titulares, **Ultra Thin para cifras grandes**. Ese contraste de pesos dentro de una misma familia es muy característico.
4. **Bloques de color plano con tipografía apilada multicolor** (la policromía del manual, sección 6.3). Es el recurso gráfico más distintivo de la marca.
5. **Iconografía lineal multicolor** sobre fondo limpio, acompañando cifras y títulos.

**Antipatrones — si aparecen, no parece Ruta N:**
- Degradados de moda (violeta→rosa, azul→cian) ajenos a la paleta
- Glassmorphism, neumorfismo, sombras difusas de colores
- Modo oscuro genérico con acentos neón
- Stock corporativo frío: gente anónima dándose la mano en oficinas blancas
- Bordes redondeados extremos tipo "pill" en todo
- Más de dos acentos de color compitiendo en un mismo bloque

---

## 5. Tipografía

### 5.1 Familias

| Uso | Familia | Pesos disponibles |
|---|---|---|
| Titulares, cifras, display | **Neue Haas Grotesk** | Ultra Thin · Thin · Roman · Italic · Bold · Black |
| Cuerpo, UI, lectura larga | **Source Sans Pro** (gratuita) | Light · Light Italic · Regular · Italic · Bold · Bold Italic |

### 5.2 Escala fluida

| Rol | Familia / peso | Tamaño | Line-height | Tracking |
|---|---|---|---|---|
| Display XL (cifras) | Neue Haas Ultra Thin | `clamp(3rem, 9vw, 7rem)` | 0.95 | -2% |
| Display / Hero H1 | Neue Haas Bold | `clamp(2rem, 5vw, 3.5rem)` | 1.05 | -1% |
| H2 | Neue Haas Bold | `clamp(1.75rem, 3.5vw, 2.5rem)` | 1.15 | -0.5% |
| H3 | Neue Haas Roman | `clamp(1.375rem, 2.5vw, 2rem)` | 1.2 | 0 |
| H4 | Neue Haas Roman | `clamp(1.125rem, 2vw, 1.5rem)` | 1.3 | 0 |
| Body L | Source Sans Regular | 18px | 1.5 | 0 |
| Body | Source Sans Regular | 16px | 1.5 | 0 |
| Small / meta | Source Sans Regular | 14px | 1.5 | 0 |
| Overline / label | Source Sans Bold | 12px | 1.4 | +2% |

### 5.3 Reglas
- Máximo **2 niveles de énfasis** por bloque (p. ej. Bold + Regular).
- Lectura larga: **siempre Source Sans Pro**.
- **Ultra Thin solo por encima de 32px.** Por debajo pierde legibilidad.
- Párrafos: **máximo 70–80 caracteres por línea** (`max-width: 68ch`).
- **Nunca texto por debajo de 14px** en ningún breakpoint.
- Mayúsculas sostenidas solo en overlines cortos. **No gritar.**

---

## 6. Color

### 6.1 Paleta oficial

| Nombre | Hex | Token | Rol |
|---|---|---|---|
| Verde oscuro | `#253D36` | `--rn-green-dark` | **Primary.** Superficies de marca, CTA primario, texto principal |
| Verde (lima) | `#C0D400` | `--rn-green` | **Acento firma.** Chips, highlights, líneas, íconos, progreso |
| Agua marina | `#00B8A3` | `--rn-aqua` | Acento secundario. Categorías, gráficos, estados activos |
| Azul | `#0068FF` | `--rn-blue` | **Acción.** Links, foco, elementos tech |
| Amarillo | `#FFCA00` | `--rn-yellow` | Atención, advertencia, destacados |
| Rojo-naranja | `#FF4C17` | `--rn-red-orange` | Énfasis, error, urgencia, energía |

### 6.2 Neutros de soporte

| Nombre | Hex | Uso |
|---|---|---|
| Ink | `#111111` | Texto principal sobre claro |
| Ink 2 | `#333333` | Texto secundario |
| Gray border | `#E6E6E6` | Bordes, divisores |
| Gray soft | `#F5F6F7` | Fondos suaves, alternancia de sección |
| White | `#FFFFFF` | Superficie base |

### 6.3 Policromía oficial (BrandBook p. 18)

Combinaciones de color sobre color aprobadas por el manual:

| Fondo | Colores de texto aprobados |
|---|---|
| **Verde oscuro** `#253D36` | Blanco · Lima · Agua marina · Azul · Amarillo · Rojo-naranja |
| **Lima** `#C0D400` | Verde oscuro · Agua marina · Azul · Rojo-naranja |
| **Agua marina** `#00B8A3` | Verde oscuro · Amarillo · Lima · Blanco |
| **Azul** `#0068FF` | Lima · Agua marina · Verde oscuro · Amarillo · Blanco |
| **Amarillo** `#FFCA00` | Verde oscuro · Agua marina · Azul · Rojo-naranja |
| **Rojo-naranja** `#FF4C17` | Verde oscuro · Amarillo · Lima · Blanco |

### 6.4 Capa web: contraste real de esas combinaciones

La policromía del manual está pensada para **piezas gráficas con tipografía grande**. En web, la mayoría de esas combinaciones **no cumple WCAG AA para texto de lectura**. Ratios calculados:

**Fondo verde oscuro `#253D36`** — el más versátil

| Texto | Ratio | Uso web |
|---|---:|---|
| Blanco | 11,7:1 | ✅ Todo, incluido cuerpo |
| Amarillo | 7,6:1 | ✅ Todo |
| Lima | 7,0:1 | ✅ Todo |
| Agua marina | 4,7:1 | ✅ Todo (justo) |
| Rojo-naranja | 3,5:1 | ⚠️ Solo ≥24px o ≥18px bold |
| Azul | 2,5:1 | ❌ Nunca para texto |

**Fondo lima `#C0D400`**

| Texto | Ratio | Uso web |
|---|---:|---|
| Verde oscuro | 7,0:1 | ✅ Todo |
| Azul | 2,9:1 | ❌ |
| Rojo-naranja | 2,0:1 | ❌ |
| Agua marina | 1,5:1 | ❌ |

**Fondo agua marina `#00B8A3`**

| Texto | Ratio | Uso web |
|---|---:|---|
| Verde oscuro | 4,7:1 | ✅ Todo |
| Blanco | 2,5:1 | ❌ |
| Amarillo | 1,6:1 | ❌ |
| Lima | 1,5:1 | ❌ |

**Fondo azul `#0068FF`**

| Texto | Ratio | Uso web |
|---|---:|---|
| Blanco | 4,8:1 | ✅ Todo |
| Amarillo | 3,1:1 | ⚠️ Solo display ≥24px |
| Lima | 2,9:1 | ❌ |
| Verde oscuro | 2,5:1 | ❌ |
| Agua marina | 1,9:1 | ❌ |

**Fondo amarillo `#FFCA00`**

| Texto | Ratio | Uso web |
|---|---:|---|
| Verde oscuro | 7,6:1 | ✅ Todo |
| Azul | 3,1:1 | ⚠️ Solo display ≥24px |
| Rojo-naranja | 2,2:1 | ❌ |
| Agua marina | 1,6:1 | ❌ |

**Fondo rojo-naranja `#FF4C17`** — ninguna combinación pasa AA para cuerpo

| Texto | Ratio | Uso web |
|---|---:|---|
| Verde oscuro | 3,5:1 | ⚠️ Solo display ≥24px |
| Blanco | 3,3:1 | ⚠️ Solo display ≥24px |
| Amarillo | 2,2:1 | ❌ |
| Lima | 2,0:1 | ❌ |

> **Regla práctica:** `#FF4C17` **nunca** como fondo de un bloque con texto de lectura. Solo para badges cortos, barras de énfasis o superficies sin texto.

### 6.5 Texto sobre blanco

El caso más frecuente en web:

| Color | Ratio sobre blanco | Uso |
|---|---:|---|
| Verde oscuro `#253D36` | 11,7:1 | ✅ Texto principal |
| Azul `#0068FF` | 4,8:1 | ✅ Links y texto de acción |
| Rojo-naranja `#FF4C17` | 3,3:1 | ⚠️ Solo display ≥24px |
| Agua marina `#00B8A3` | 2,5:1 | ❌ Solo fondos, íconos grandes, gráficos |
| Lima `#C0D400` | 1,7:1 | ❌ Solo acento — nunca texto |
| Amarillo `#FFCA00` | 1,5:1 | ❌ Solo acento — nunca texto |

### 6.6 Variantes accesibles de texto

Cuando un color de marca **tiene que** llevar texto pequeño sobre blanco (mensajes de error, links de categoría, etiquetas), se usa una variante oscurecida.

> **Importante:** estas **no son colores de marca nuevos** y no amplían la paleta. Son derivaciones técnicas del color oficial, exigidas por la Resolución 1519 / WCAG AA, y **de uso exclusivo en texto pequeño**. Los fondos, íconos, gráficos y acentos siguen usando el color oficial. **Valídalas con Marca y Comunicaciones** antes del primer uso público.

| Origen | Variante texto | Ratio sobre blanco |
|---|---|---:|
| Rojo-naranja `#FF4C17` | `#C43C10` | 5,3:1 |
| Agua marina `#00B8A3` | `#007268` | 5,8:1 |
| Lima `#C0D400` | `#6B7500` | 5,0:1 |
| Amarillo `#FFCA00` | `#8A6D00` | 4,9:1 |

### 6.7 Reglas de uso
- **CTA primario:** fondo `#253D36`, texto blanco.
- **Links:** `#0068FF`, subrayado en hover y focus.
- **Máximo un acento fuerte por bloque.** Si una sección ya usa lima, no metas naranja al lado.
- **Nunca comunicar significado solo con color.** Siempre texto o ícono además.
- Rotación de acentos para series (líneas estratégicas, métricas, categorías): `#C0D400` → `#00B8A3` → `#0068FF` → `#FFCA00`. El rojo-naranja se reserva para urgencia y error.

---

## 7. Espaciado, grid y layout

### 7.1 Escala 8pt
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`

Submúltiplos `4, 12, 20` solo para micro-ajustes.

### 7.2 Grid y márgenes

| Breakpoint | Ancho | Columnas | Gutter | Margen lateral |
|---|---|---|---|---|
| Mobile `< 768` | fluid | 4 | 16 | **16** |
| Tablet `768–1023` | fluid | 8 | 16 | **32** |
| Desktop `1024–1279` | fluid | 12 | 24 | **64** |
| Wide `≥ 1280` | máx. 1280px | 12 | 24 | **80** |

### 7.3 Ritmo vertical de sección

| Breakpoint | Padding vertical |
|---|---|
| Mobile | 64px |
| Tablet | 80px |
| Desktop | 96–128px |

**Consistente en toda la pieza.** El padding arbitrario por sección es la causa número uno de que un sitio se sienta desarmado.

### 7.4 Principios
- **Mucho aire.** Ruta N debe sentirse premium y clara, no comprimida.
- Separación entre secciones por **espacio y color de fondo alternado** (blanco / `#F5F6F7`), no por bordes duros.
- Radios: 8px (chips, badges) · 12px (botones, inputs) · 16px (cards) · 24px (contenedores grandes). Nunca "pill" completo salvo en chips.

---

## 8. Componentes

### 8.1 Jerarquía de acción — solo estas cuatro formas

> Este es el problema más común en las piezas de Ruta N: no se distingue qué es botón, qué es link y qué es texto.

| Tipo | Aspecto | Cuándo |
|---|---|---|
| **Botón primario** | Fondo `#253D36`, texto blanco, radius 12px, padding 14×24 | La acción principal. **Máximo 1 por bloque.** |
| **Botón secundario** | Borde 1,5px `#253D36`, texto `#253D36`, fondo transparente | Acción alternativa junto a un primario |
| **Link de acción** | Texto `#0068FF` + chevron `→`, subrayado en hover, el chevron se desplaza 4px | "Ver más", "Conocer la oferta" |
| **Card clickeable** | Toda la card es el target, un solo enlace. Hover: `translateY(-4px)` + sombra | Noticias, ofertas, eventos, programas |

**Prohibido:** texto plano que parezca clickeable sin serlo; dos botones primarios compitiendo; un link anidado dentro de una card clickeable.

### 8.2 Estados obligatorios

`default` · `hover` · `active` · `focus-visible` · `disabled` · `loading` (cuando aplique)

- **Foco visible siempre:** `outline: 2px solid #0068FF; outline-offset: 2px`. **No se elimina nunca.**
- **Área táctil mínima 44×44px** en todos los breakpoints. Si el ícono mide 20px, el padding lleva el target a 44.

### 8.3 Cards
- Fondo blanco, borde `#E6E6E6` **o** sombra suave — no ambos.
- Padding interno: 16 mobile / 24 desktop.
- Estructura fija: imagen (con `aspect-ratio`) → categoría → título → descripción → metadata → CTA.
- **Máximo 1 acento de color por card.**
- Alturas iguales por fila (`line-clamp` en títulos y descripciones).

### 8.4 Inputs y formularios
- Alto mínimo 44px (48px recomendado).
- **Label arriba, siempre visible.** El placeholder no es un label.
- Helper y error debajo, 14px.
- Error: variante `#C43C10` **con texto e ícono**, nunca solo borde rojo.
- Campos obligatorios marcados con texto, no solo con asterisco.
- Agrupación lógica con `<fieldset>` y `<legend>`.

### 8.5 Badges y chips
- Chips de filtro: activo con fondo `#253D36` y texto blanco; inactivo con borde `#E6E6E6`.
- Badges de estado: **texto + ícono**, nunca solo color.
- Fondo suave (`#F5F6F7`) con texto `#333333`, o acento de marca a baja opacidad.

### 8.6 Estados de contenido
Toda vista que cargue datos define cuatro estados: **cargando** (skeleton, no spinner centrado), **con datos**, **vacío** (qué pasó + qué hacer) y **error** (qué pasó + cómo reintentar).

### 8.7 Datos y gráficos
- **Máximo 3 colores por gráfico.** Combinación recomendada: `#00B8A3` + `#0068FF` + `#FFCA00`.
- Series diferenciadas también por forma o patrón, no solo por color.
- Ejes etiquetados, unidades explícitas, fuente y fecha del dato visibles.
- Cifras grandes en Neue Haas Ultra Thin (mínimo 32px).

---

## 9. Iconografía

El manual define **cinco categorías oficiales**: Legal y finanzas · Conexiones · Tecnología · Ciencia · Comunicación.

| Atributo | Especificación |
|---|---|
| Estilo | **Lineal** (trazo), nunca relleno pesado |
| Grosor | 1,5–2px, **consistente en todo el set** |
| Formato | SVG con `viewBox="0 0 24 24"` |
| Color | Colores de marca, blanco o negro. En código, `currentColor` para que herede |
| Tamaños | 16 / 20 / 24 px |
| Terminaciones | Redondeadas (`stroke-linecap: round`) |

**Uso:** acompañan cifras, títulos o viñetas para dinamizar la información. No decoran por decorar.

**Multicolor:** cuando un set de íconos va junto (como en el manual), cada ícono puede tomar un color distinto de la paleta. Es un recurso característico de la marca — úsalo en grillas de categorías o de servicios.

---

## 10. Fotografía e imagen

### 10.1 Estilo
- **Personas locales y reales**, Medellín, contexto CTi+E, hechos y eventos verdaderos.
- **Calidez y apertura.** Encuadres humanos, luz real, piel natural, contraste moderado.
- **Prohibido el stock corporativo frío.**

### 10.2 Proporciones por uso

| Uso | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero principal | `4/5` o `1/1` | `16/9` | `21/9` |
| Banner de sección | `3/2` | `16/9` | `16/9` |
| Card de noticia u oferta | `16/9` | `16/9` | `16/9` |
| Card de evento | `3/2` | `3/2` | `3/2` |
| Retrato de persona | `3/4` | `3/4` | `3/4` |
| Logo de aliado | `contain`, alto 40px | 48px | 56px |

### 10.3 Reglas técnicas
- **Toda imagen declara `aspect-ratio` y `object-fit: cover`. Nunca alto fijo en px.**
- Los banners hero necesitan **dos versiones**: horizontal para escritorio y **vertical para móvil**. Una sola imagen no funciona en ambos.
- Zona segura: el texto va sobre el tercio inferior. Ahí no van caras, logos ni información.
- **Nunca texto quemado dentro de la imagen.** El texto va en HTML: legible, traducible, accesible y sin pixelarse.
- Formatos: **WebP** (fotos), **SVG** (logos e íconos), **MP4/WebM** (animación). Nunca GIF.
- Peso máximo: 300 KB por imagen.
- `loading="lazy"` bajo el fold; `fetchpriority="high"` solo en el hero.
- Reservar el espacio antes de cargar para evitar saltos de layout (CLS).

---

## 11. Motion

### 11.1 Tokens
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);   /* entradas, reveals */
--ease-io:  cubic-bezier(0.65, 0, 0.35, 1);  /* cambios de estado */
--dur-fast: 150ms;   /* hover, focus, micro-feedback */
--dur-med:  300ms;   /* estados, acordeones, filtros */
--dur-slow: 500ms;   /* reveals de sección, hero */
```

### 11.2 Reglas
- **Toda animación comunica algo:** jerarquía, causa-efecto, feedback o continuidad. Nada decorativo puro.
- **Scroll reveal:** `IntersectionObserver`, threshold 0.15, `opacity 0→1` + `translateY(16px→0)`, `--dur-slow`, `--ease-out`. Stagger máximo 60ms, **máximo 6 elementos en cascada**.
- **Hover de card:** `translateY(-4px)` + sombra en `--dur-fast`. La imagen interna puede hacer `scale(1.03)` con `overflow: hidden` en el contenedor.
- **Contadores:** animan una sola vez al entrar en viewport, 1,6s, easing out. Nunca en loop.
- **Solo animar `transform` y `opacity`.** Nunca `width`, `height`, `top`, `left` ni `margin`.
- **Nunca scroll-hijacking** ni bloquear el scroll del usuario.
- Nada en loop infinito fuera del viewport.

### 11.3 `prefers-reduced-motion` — obligatorio
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Los reveals aparecen en estado final. Los contadores muestran la cifra final sin animar. Las marquesinas pasan a grid estático.

---

## 12. Accesibilidad — WCAG 2.1 AA

Obligatorio por la **Resolución 1519 de 2020 de MinTIC**.

### Estructura
- Un solo `<h1>` por página. Jerarquía `h1→h2→h3` sin saltos.
- HTML semántico: `<header> <nav> <main> <section> <article> <footer>`. **Nunca `<div onClick>`.**
- Skip link "Saltar al contenido principal" como primer elemento enfocable.
- Idioma declarado en `<html lang="es">`.

### Interacción
- Navegación completa por teclado. `Esc` cierra modales y drawers.
- Foco atrapado dentro de modales abiertos y devuelto al disparador al cerrar.
- Foco visible en todo elemento interactivo.
- Área táctil ≥ 44×44px.
- Carruseles pausables y navegables por teclado. **Nunca autoplay sin control de pausa.**

### Contenido
- `alt` descriptivo en imágenes de contenido; `alt=""` en decorativas.
- ARIA: `aria-label` en botones solo-ícono · `aria-expanded` en dropdowns y acordeones · `aria-current="page"` en el nav · `aria-live="polite"` en resultados de filtros.
- Contraste AA verificado, incluido texto sobre imágenes (overlay si hace falta).
- **Nunca significado solo por color.**
- Videos con subtítulos. Audio con transcripción.

### Cómo escribir texto alternativo
Describe lo que se ve, en una frase, sin empezar con "Imagen de".

| ❌ | ✅ |
|---|---|
| `banner` | `Vista aérea del Distrito de Innovación de Medellín al atardecer` |
| `Foto de un evento` | `Panel de expertas en el Foro CTi+E 2026 en el auditorio de Ruta N` |

---

## 13. Copywriting de interfaz

- **Titulares:** claros y orientados a valor. "Impulsa…", "Conecta…", "Explora…".
- **Subtítulos:** concretos, sin relleno.
- **CTAs:** verbo + resultado. "Conocer ofertas", "Ver convocatorias", "Explorar proyectos".
- **Errores:** qué pasó + cómo resolverlo. Nunca culpar al usuario ni mostrar códigos técnicos.
- **Estados vacíos:** qué pasó + qué hacer ahora.
- **Evitar:** "Haga clic aquí" · mayúsculas sostenidas · párrafos largos sin escaneo · jerga institucional.

> En proyectos de **rediseño** sobre contenido ya aprobado, el copy **no se toca**. Esta sección aplica solo a piezas nuevas o a labels de interfaz creados desde cero.

---

## 14. Cobranding

- La marca Ruta N **no puede usarse para promover productos o servicios de empresas privadas**, salvo directriz estratégica evaluada previamente por Marca y Comunicaciones.
- **Ente descentralizado:** con el escudo de armas de la Alcaldía, el logo Ruta N **no excede el 80%** de la proporción del escudo. Área de protección del 14,5%. Parámetros del "Manual para entes descentralizados", **no modificables**.
- **Conglomerado Público de Medellín:** aplicar el Manual del Conglomerado, conservando proporción, área de protección y ubicación. Se permite una tinta para uniformidad.
- **Alianzas con gobierno:** acompañar del escudo de armas de la Alcaldía.
- **Marcador de rol** (opcional pero útil): "En alianza / Opera / Organiza / Acompaña / Apoya".
- **Todas las autorizaciones quedan por escrito** y se aprueban antes de publicar.

---

## 15. Responsive

- **Mobile first.** Se diseña primero a 375px y se escala hacia arriba.
- Breakpoints: `768` (tablet) · `1024` (desktop) · `1280` (wide).
- Probar siempre en **375 / 768 / 1024 / 1440**.
- **Cero scroll horizontal.** En ningún breakpoint.
- Navegación mobile: drawer de ancho completo, ítems de 56px de alto, submenús como acordeones.
- Tablas: scroll horizontal dentro de su contenedor, o transformadas en cards apiladas.
- Filtros en mobile: bottom sheet con botón "Aplicar" fijo, no una barra comprimida.
- Elementos sticky en mobile: máximo uno a la vez.

---

## 16. Perfiles por tipo de proyecto

### Landing de campaña o convocatoria
Hero con proporción correcta y estado visible · barra sticky de conversión (abajo en mobile) · datos clave en fila · cuerpo a 68ch · cronograma · requisitos · FAQ en acordeón · CTA final · piezas relacionadas.
**Prioridad:** conversión y claridad del plazo. **Sello:** hero sobre verde oscuro o foto con overlay, acento lima en el CTA.

### Rediseño de sitio existente
Auditoría primero (contraste, área táctil, CLS, responsive) · sistema antes que páginas · el contenido no se toca salvo indicación explícita · migración por secciones.
**Prioridad:** consistencia y accesibilidad.

### Formulario o proceso multipaso
Indicador de progreso segmentado · un grupo de preguntas por paso · validación inline · guardado de estado · resumen antes de enviar · confirmación con siguiente paso claro.
**Prioridad:** que se termine sin abandonar. **Sello:** progreso en lima, pasos numerados en Neue Haas.

### Dashboard o visualización
Panorama primero, detalle después · máximo 3 colores por gráfico · filtros persistentes y visibles · estados de carga, vacío y error · fuente y fecha del dato · exportación si aplica.
**Prioridad:** lectura ejecutiva rápida. **Sello:** cifras en Ultra Thin, íconos lineales por categoría.

### Micrositio o pieza especial
Es donde el arquetipo **Mago** puede subir a ~50%. Aquí caben la policromía en bloques, las composiciones asimétricas y el motion más expresivo — **sin romper ninguna regla dura**.

---

## 17. Naming y handoff

### Tokens y estilos
```
RN/Color/Primary-900      →  #253D36
RN/Color/Accent-Lime      →  #C0D400
RN/Color/Accent-Aqua      →  #00B8A3
RN/Color/Action-Blue      →  #0068FF
RN/Color/Warning-Yellow   →  #FFCA00
RN/Color/Emphasis-Orange  →  #FF4C17

RN/Text/Display-XL   RN/Text/H1   RN/Text/H2   RN/Text/H3
RN/Text/Body-L       RN/Text/Body RN/Text/Small RN/Text/Label
```

### Componentes
```
RN/Button/Primary    RN/Button/Secondary   RN/Link/Action
RN/Card/Base         RN/Card/Clickable     RN/Input/Text
RN/Badge/Status      RN/Chip/Filter
```

### Frames
```
RN/Page/<Nombre>
RN/Section/Hero · Contenido · CTA · Footer
```

### Qué entregar a desarrollo
1. Tokens de color, tipografía, espaciado y motion
2. Todos los estados de cada componente
3. Los cuatro breakpoints
4. Especificación de animaciones: duración, easing y disparador
5. Casos borde: texto largo, sin imagen, lista vacía, error
6. Assets exportados con nomenclatura consistente
7. Notas de accesibilidad por componente

### Nombres de archivo
```
seccion-descripcion-version.webp
```
Minúsculas, guiones, **sin tildes ni ñ ni espacios**.

---

## 18. Restricciones técnicas frecuentes

Muchos proyectos de Ruta N se implementan en **HubSpot CMS** por terceros. Salvo que el brief diga lo contrario, asume:

- **Permitido:** HTML/CSS estándar, Flexbox, Grid, `aspect-ratio`, custom properties, transiciones y keyframes CSS, `IntersectionObserver`, Framer Motion o GSAP para secuencias puntuales.
- **Requiere autorización:** WebGL, `<canvas>` animado, d3-force, scrollytelling con scroll-hijacking, librerías de física.
- **Todo componente degrada dignamente sin JS:** el contenido se ve y los enlaces funcionan.
- Preferir composiciones **modulares y repetibles**, no layouts únicos irrepetibles.

---

## 19. Checklist final

**Marca**
- [ ] Logo intacto, área de reserva respetada, mínimo 100px
- [ ] Solo paleta oficial + neutros
- [ ] Neue Haas en titulares, Source Sans en cuerpo
- [ ] Al menos 3 de los 5 elementos del sello visual (sección 4)
- [ ] Ningún antipatrón de la sección 4
- [ ] Máximo 1 acento fuerte por bloque

**Interfaz**
- [ ] Botón, link y card claramente diferenciables
- [ ] Estados hover, focus-visible, active y disabled definidos
- [ ] Estados de carga, vacío y error definidos
- [ ] Espaciado en múltiplos de 8, ritmo vertical consistente
- [ ] Componentes del sistema, no elementos sueltos

**Contenido visual**
- [ ] Toda imagen con `aspect-ratio` declarado
- [ ] Banners hero con versión horizontal y vertical
- [ ] Sin texto quemado en imágenes
- [ ] Fotografía humana, local, coherente con la marca
- [ ] Ninguna imagen por encima de 300 KB

**Accesibilidad**
- [ ] Contraste AA verificado (secciones 6.4 y 6.5)
- [ ] Área táctil ≥ 44×44
- [ ] Navegación completa por teclado, foco visible
- [ ] Jerarquía de encabezados correcta, HTML semántico
- [ ] Texto alternativo escrito
- [ ] Ningún significado comunicado solo por color
- [ ] `prefers-reduced-motion` respetado

**Responsive**
- [ ] Probado en 375 / 768 / 1024 / 1440
- [ ] Sin scroll horizontal
- [ ] Ningún texto por debajo de 14px

**Entrega**
- [ ] Implementable sin dependencias raras
- [ ] Tokens, estados y breakpoints documentados
- [ ] **Validado con Marca y Comunicaciones** si es pieza pública, lleva logo o es cobranding

---

*Basado en el BrandBook Ruta N 2025. Ante cualquier duda de uso de marca, contactar a Marca y Comunicaciones de la Corporación.*