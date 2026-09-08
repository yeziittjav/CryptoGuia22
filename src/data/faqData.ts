export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Fundamentos',
    question: '¿Qué son exactamente las criptomonedas?',
    answer: 'Una criptomoneda es un activo o unidad de valor digital cuyo funcionamiento depende de técnicas criptográficas y de una red informática descentralizada regulada por un protocolo de código abierto, sin intermediarios bancarios centrales.'
  },
  {
    id: 'faq-2',
    category: 'Bitcoin',
    question: '¿Qué es Bitcoin y cuál fue su propósito original?',
    answer: 'Bitcoin es la primera red de pago descentralizada entre pares (P2P). Su creador, bajo el seudónimo Satoshi Nakamoto, lo diseñó en 2008 para permitir pagos directos por internet sin necesidad de recurrir a una institución financiera de confianza.'
  },
  {
    id: 'faq-3',
    category: 'Bitcoin',
    question: '¿Quién es Satoshi Nakamoto?',
    answer: 'Es el seudónimo de la persona o colectivo que publicó el documento técnico de Bitcoin en 2008 y lanzó la red en 2009. Su verdadera identidad nunca ha sido revelada públicamente, y dejó el proyecto en manos de la comunidad en 2011.'
  },
  {
    id: 'faq-4',
    category: 'Blockchain',
    question: '¿Qué es blockchain y cómo se relaciona con las criptomonedas?',
    answer: 'Blockchain (o cadena de bloques) es una estructura de datos distribuida en la que los registros se organizan en bloques secuenciales unidos entre sí por hashes criptográficos. Bitcoin y otras criptomonedas utilizan blockchain como su libro mayor de transacciones inmutable.'
  },
  {
    id: 'faq-5',
    category: 'Blockchain',
    question: '¿Todas las criptomonedas utilizan blockchain?',
    answer: 'La inmensa mayoría sí utiliza variantes de blockchain, aunque existen proyectos de registro distribuido (DLT) que experimentan con grafos acíclicos dirigidos (DAG) y otras estructuras de datos alternativas.'
  },
  {
    id: 'faq-6',
    category: 'Ethereum',
    question: '¿Qué es Ethereum y en qué se diferencia de Bitcoin?',
    answer: 'Mientras que Bitcoin se diseñó principalmente como un sistema descentralizado para registrar y transferir valor, Ethereum es una plataforma programable que permite a los desarrolladores crear y ejecutar contratos inteligentes y aplicaciones descentralizadas (DApps) en una máquina virtual global (EVM).'
  },
  {
    id: 'faq-7',
    category: 'Seguridad',
    question: '¿Qué es una wallet o billetera criptográfica?',
    answer: 'Una wallet es una herramienta digital o dispositivo físico que administra tus claves criptográficas (pública y privada). Las monedas nunca están dentro de la billetera: residen en la blockchain y tus claves te otorgan el derecho a firmar transacciones sobre ellas.'
  },
  {
    id: 'faq-8',
    category: 'Seguridad',
    question: '¿Qué es una clave privada y por qué es tan crítica?',
    answer: 'La clave privada es una cadena matemática secreta que actúa como tu firma digital irrevocable. Cualquier persona que conozca tu clave privada tiene control total sobre los fondos de esa dirección. Nunca debe compartirse con nadie.'
  },
  {
    id: 'faq-9',
    category: 'Consenso',
    question: '¿Qué es la minería de criptomonedas?',
    answer: 'Es el proceso mediante el cual nodos especializados (mineros) dedican capacidad de cómputo para validar transacciones, agruparlas en bloques y encontrar una solución matemática válida según las reglas de Proof of Work, asegurando la red frente a manipulaciones.'
  },
  {
    id: 'faq-10',
    category: 'Consenso',
    question: '¿Qué es el staking?',
    answer: 'En sistemas Proof of Stake (PoS), el staking consiste en comprometer o bloquear criptomonedas como garantía económica para participar como validador en la red. Si el validador actúa honestamente recibe recompensas, pero si intenta hacer trampa pierde su fianza.'
  },
  {
    id: 'faq-11',
    category: 'Ecosistema',
    question: '¿Cuál es la diferencia entre un token y una moneda (coin)?',
    answer: 'Una moneda (coin) es el activo nativo de su propia blockchain independiente (como BTC en Bitcoin o ETH en Ethereum). Un token es un activo creado sobre una blockchain anfitriona existente mediante un contrato inteligente (como los tokens ERC-20).'
  },
  {
    id: 'faq-12',
    category: 'Finanzas',
    question: '¿Qué es una stablecoin y está libre de riesgo?',
    answer: 'Una stablecoin es un criptoactivo diseñado para mantener un valor constante respecto a una moneda fiduciaria de referencia (ej. el dólar). No está libre de riesgo: depende de la solvencia del custodio de las reservas bancarias, auditorías o la estabilidad del código algorítmico.'
  },
  {
    id: 'faq-13',
    category: 'Tecnología',
    question: '¿Qué es un NFT?',
    answer: 'NFT significa Non-Fungible Token (Token No Fungible). Es un identificador digital único registrado en una blockchain que acredita la propiedad y autenticidad exclusiva de un bien digital o físico, a diferencia de los tokens fungibles que son intercambiables.'
  },
  {
    id: 'faq-14',
    category: 'Finanzas',
    question: '¿Qué significa DeFi?',
    answer: 'DeFi significa Finanzas Descentralizadas. Es un ecosistema de aplicaciones y protocolos construidos sobre contratos inteligentes que recrean servicios financieros (préstamos, intercambios, seguros) sin requerir intermediarios bancarios corporativos.'
  },
  {
    id: 'faq-15',
    category: 'Tecnología',
    question: '¿Qué es Web3?',
    answer: 'Web3 es un concepto que describe la siguiente evolución de internet, donde los usuarios no solo leen y publican contenido en servidores de gigantes tecnológicos, sino que son dueños soberanos de sus identidades digitales, datos y activos a través de protocolos abiertos.'
  },
  {
    id: 'faq-16',
    category: 'Tecnología',
    question: '¿Qué es un smart contract?',
    answer: 'Es un programa informático inmutable desplegado en una blockchain que se ejecuta automáticamente cuando se cumplen ciertas condiciones lógicas predeterminadas ("si ocurre X, entonces ejecutar Y"), sin necesidad de intervención ni arbitraje humano.'
  },
  {
    id: 'faq-17',
    category: 'Arquitectura',
    question: '¿Qué significa que un sistema sea descentralizado?',
    answer: 'Significa que el control, la información y la toma de decisiones no están concentrados en una única entidad o servidor central, sino distribuidos entre una multitud de participantes independientes regidos por un protocolo unificado.'
  },
  {
    id: 'faq-18',
    category: 'Consenso',
    question: '¿Qué diferencia hay entre Proof of Work y Proof of Stake?',
    answer: 'Proof of Work basa la seguridad de la red en el trabajo computacional y el consumo de energía física de los mineros. Proof of Stake basa la seguridad en el compromiso de capital económico (fondos en garantía) de los validadores, consumiendo más del 99% menos de energía.'
  },
  {
    id: 'faq-19',
    category: 'Economía',
    question: '¿Por qué fluctúa tanto el valor de las criptomonedas en el mercado?',
    answer: 'Porque son activos jóvenes con descubrimiento de precio en tiempo real en mercados globales abiertos las 24 horas, con ofertas fijas o inelásticas, alta especulación y ausencia de bancos centrales que intervengan para estabilizar cotizaciones.'
  },
  {
    id: 'faq-20',
    category: 'Riesgos',
    question: '¿Cuáles son los principales riesgos al utilizar criptomonedas?',
    answer: 'La irreversibilidad de las transacciones si cometes un error o caes en estafas de phishing, la pérdida permanente de fondos por olvido de contraseñas o frases semilla, posibles vulnerabilidades en contratos inteligentes, y la volatilidad económica.'
  },
  {
    id: 'faq-21',
    category: 'Arquitectura',
    question: '¿Qué es el trilema de la blockchain?',
    answer: 'Es una hipótesis planteada por Vitalik Buterin que afirma que una blockchain difícilmente puede alcanzar al máximo nivel tres propiedades a la vez: Descentralización, Seguridad y Escalabilidad. Resolver este dilema motiva la investigación de soluciones de Capa 2 (Layer 2).'
  }
];
