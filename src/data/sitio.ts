// Datos editoriales de la landing. Cada valor marcado con «Revisar» está
// explicado en CONTENT_REVIEW.md y debe validarse con la comunidad.

export const contacto = {
  // Nombre provisional del proyecto comunitario (confirmar el definitivo con la comunidad)
  nombre: 'La Cañada Reverdece',
  unidad: 'Unidad productiva asociativa de la vereda La Cañada',
  // Número usado por el botón y la tienda del sitio anterior. Revisar.
  whatsapp: '573123373394',
  whatsappVisible: '312 337 3394',
  // Número publicado como «Teléfono» en la página de contacto anterior. Revisar.
  telefono: '573138475461',
  telefonoVisible: '313 847 5461',
  correo: 'mccpgarzon@gmail.com',
  vereda: 'Vereda La Cañada',
  municipio: 'El Agrado',
  departamento: 'Huila',
};

// Entropia Popular impulsa el proyecto, pero no lo opera: se reconoce en el pie de página.
export const impulsor = {
  nombre: 'Entropia Popular',
  facebook: 'https://www.facebook.com/profile.php?id=100069171400785',
};

export const organizacion = 'Asociación de Trabajadores Campesinos del Huila — Subdirectiva El Agrado';

export const condiciones = {
  plantas: 'El pedido se paga antes del despacho o se deja un depósito para separarlo. El monto del depósito y las condiciones de entrega se acuerdan por WhatsApp.',
  recorrido: 'La fecha se separa con pago anticipado. Las cancelaciones fuera del plazo acordado tienen recargo; el plazo y el valor se acuerdan por WhatsApp antes de reservar.',
  descuento: 'Descuentos a partir de 2 docenas (24 plántulas). El valor del descuento se confirma por WhatsApp antes de pagar.',
};

export const waLink = (mensaje?: string) =>
  `https://wa.me/${contacto.whatsapp}${mensaje ? `?text=${encodeURIComponent(mensaje)}` : ''}`;

export const formatoPesos = (valor: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(valor);

// Especies con propagación confirmada en el sitio anterior (17).
export const nativasEnPropagacion = [
  'Guayacán', 'Caña fístula', 'Samán', 'Cruceto', 'Guácimo', 'Chambimbe',
  'Zarza', 'Ovo', 'Pela', 'Achiote', 'Orejero', 'Gualanday',
  'Tamarindo', 'Iguá', 'Cuají', 'Flor amarillo', 'Pitaya roja',
];

// Especies que el sitio anterior describe «en incorporación» y sujetas a consulta (8).
export const nativasEnIncorporacion = [
  'Matarratón', 'Acacia', 'Uña de gato', 'Payandé', 'Tachuelo', 'Caimito', 'Raspayuco', 'Mirto',
];

export const frutales = ['Limón', 'Naranja', 'Madroño', 'Chirimoyo', 'Caimo'];

export const precios = {
  plantula: 5000,
  pasadiaPorPersona: 200000,
};

export const pasadia = {
  duracion: '2 horas y media de recorrido',
  capacidadMaxima: 10,
  puntoEncuentro: 'Vivero comunitario, vereda La Cañada, El Agrado',
  incluye: [
    'Guianza local de personas de la vereda',
    'Observación de aves con binoculares y telescopio',
    'Alimentación',
    'Seguro',
  ],
  recomendaciones: 'Ropa cómoda que cubra del sol, calzado cerrado y agua.',
};

// Contenido de «Nosotros» tomado del sitio anterior (nosotros.html e index.html).
export const nosotros = {
  historia: [
    'Somos una unidad productiva asociativa de la vereda La Cañada, en El Agrado, Huila. Nuestro territorio hace parte del Bosque Seco Tropical del alto Magdalena, uno de los ecosistemas más amenazados del país y uno de los menos conocidos.',
    'Vivimos en la zona de influencia de la hidroeléctrica El Quimbo y hemos visto de cerca cómo cambia un territorio cuando se transforma su paisaje. De ahí salieron dos decisiones: montar un vivero de especies nativas y frutales, y abrir un sendero para conocer el bosque, sus aves y sus historias.',
    'Con trabajo comunitario sembramos 400 árboles nativos, montamos un banco de semillas propio y formamos un equipo que monitorea la biodiversidad de la zona.',
    'Trabajamos sin intermediarios: usted trata directamente con quien recolecta la semilla, cultiva la planta y guía el recorrido.',
  ],
  mision:
    'Producir y comercializar plántulas de especies nativas, frutales y ornamentales del Bosque Seco Tropical, y ofrecer recorridos guiados por nuestro sendero de interpretación. Lo hacemos como unidad productiva comunitaria: generamos ingresos para las familias campesinas de la vereda y, al mismo tiempo, material vegetal y conocimiento para restaurar el bosque de nuestra región.',
  vision:
    'Para 2030 queremos ser un proveedor reconocido de material vegetal nativo en el sur del Huila, con capacidad para atender proyectos de restauración ecológica y compensación ambiental, y tener el sendero operando de forma estable, con guías de la vereda y visitantes durante todo el año.',
  // La mención a semillas certificadas por el ICA queda fuera hasta confirmarla (CONTENT_REVIEW.md).
  valores: [
    { titulo: 'Semilla de origen conocido', texto: 'Recolectamos en nuestro propio territorio y sabemos de qué árbol viene cada plántula.' },
    { titulo: 'Cumplimiento', texto: 'Entregamos lo acordado, en la cantidad y el tiempo acordados. Si algo no se puede, lo decimos antes.' },
    { titulo: 'Trabajo colectivo', texto: 'El vivero y el sendero se sostienen con decisiones tomadas en asamblea y con el trabajo de varias familias.' },
    { titulo: 'Criterio ecológico', texto: 'Producimos y recomendamos especies según lo que el sitio necesita, no según lo que es más fácil de propagar.' },
    { titulo: 'Conocimiento del lugar', texto: 'Llevamos toda la vida aquí. Sabemos qué se da, en qué época y por qué.' },
  ],
  logros: [
    { cifra: '400', texto: 'árboles nativos sembrados con trabajo comunitario' },
    { cifra: '17', texto: 'especies nativas en propagación en el vivero' },
    { cifra: '10', texto: 'personas como máximo por salida al sendero' },
  ],
};

export const incluidoVivero = [
  'Asesoría para elegir especies según el sitio de siembra',
  'Indicaciones de siembra al momento de la entrega',
  'Entrega a domicilio: zona y condiciones se acuerdan por WhatsApp',
  'Seguimiento después de la siembra',
];

// Mensajes base de WhatsApp. Sin JavaScript, los botones abren WhatsApp con estos textos;
// con JavaScript abren el asistente «Hablemos de su plan», que arma el mensaje completo.
export const mensajesWa = {
  general: 'Hola, equipo de La Cañada Reverdece. Tengo una pregunta sobre el sendero o el vivero.',
  pasadia: 'Hola, equipo de La Cañada Reverdece. Me gustaría proponer una fecha para el pasadía de observación de aves.',
  plantas: 'Hola, equipo de La Cañada Reverdece. Me gustaría comprar plantas del vivero.',
};
