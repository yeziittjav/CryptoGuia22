import { LearningConcept, QuizQuestion } from '../types';

export const ROADMAP_CONCEPTS: LearningConcept[] = [
  // NIVEL 1 - PRINCIPIANTE
  {
    id: 'c-criptomoneda',
    title: '¿Qué es una criptomoneda?',
    level: 1,
    category: 'Fundamentos',
    summary: 'Un activo digital respaldado por criptografía y una red distribuida que no depende de emisores centrales.',
    relatedSlug: 'criptomonedas-guia-principiantes',
    keyPoints: [
      'No tiene representación física; es un saldo en un libro contable distribuido.',
      'Utiliza criptografía asimétrica para proteger la propiedad.',
      'Las reglas de emisión son definidas por el protocolo informático.'
    ]
  },
  {
    id: 'c-bitcoin',
    title: 'Bitcoin (BTC)',
    level: 1,
    category: 'Fundamentos',
    summary: 'La primera red y moneda descentralizada creada en 2008 por Satoshi Nakamoto.',
    relatedSlug: 'que-es-bitcoin',
    keyPoints: [
      'Límite matemático estricto de 21 millones de unidades.',
      'Resuelve el problema del doble gasto sin intermediarios.',
      'Opera ininterrumpidamente desde enero de 2009.'
    ]
  },
  {
    id: 'c-blockchain',
    title: 'Blockchain',
    level: 1,
    category: 'Arquitectura',
    summary: 'El libro mayor inmutable donde los datos se agrupan en bloques secuenciales enlazados por hashes.',
    relatedSlug: 'blockchain-explicada-desde-cero',
    keyPoints: [
      'Cada bloque guarda el hash criptográfico del bloque anterior.',
      'Cualquier intento de alteración rompe todos los eslabones posteriores.',
      'Se replica idénticamente en miles de nodos independientes.'
    ]
  },
  {
    id: 'c-wallet',
    title: 'Wallet (Billetera)',
    level: 1,
    category: 'Seguridad',
    summary: 'La aplicación o dispositivo que gestiona tus claves criptográficas para interactuar con la blockchain.',
    relatedSlug: 'que-es-una-wallet',
    keyPoints: [
      'No almacena monedas, almacena tus claves privadas.',
      'Existen billeteras con custodia (exchanges) y no custodiales (autocustodia).',
      'Las billeteras frías de hardware ofrecen el mayor nivel de protección aislada.'
    ]
  },
  {
    id: 'c-direccion',
    title: 'Dirección (Address)',
    level: 1,
    category: 'Seguridad',
    summary: 'La cadena pública alfanumérica que compartes con otros para recibir transferencias.',
    relatedSlug: 'clave-publica-vs-clave-privada',
    keyPoints: [
      'Equivalente a tu número de cuenta bancaria o buzón postal.',
      'Es seguro compartirla públicamente.',
      'Se deriva matemáticamente de tu clave pública.'
    ]
  },
  {
    id: 'c-clave-publica',
    title: 'Clave Pública',
    level: 1,
    category: 'Criptografía',
    summary: 'El componente público del par criptográfico que permite verificar firmas matemáticas.',
    relatedSlug: 'clave-publica-vs-clave-privada',
    keyPoints: [
      'Se genera a partir de la clave privada de forma unidireccional.',
      'Permite a la red comprobar que tú eres el legítimo emisor sin revelar tu secreto.'
    ]
  },
  {
    id: 'c-clave-privada',
    title: 'Clave Privada',
    level: 1,
    category: 'Seguridad',
    summary: 'El número secreto definitivo que te otorga la potestad absoluta de firmar y transferir fondos.',
    relatedSlug: 'clave-publica-vs-clave-privada',
    keyPoints: [
      'Nunca debe compartirse con nadie bajo ninguna circunstancia.',
      'Quien tiene tu clave privada, tiene tus fondos irrevocablemente.',
      'Suele respaldarse de forma legible mediante una frase semilla de 12 o 24 palabras.'
    ]
  },

  // NIVEL 2 - INTERMEDIO
  {
    id: 'c-ethereum',
    title: 'Ethereum (ETH)',
    level: 2,
    category: 'Plataformas',
    summary: 'La computadora mundial programable que introdujo contratos inteligentes y aplicaciones descentralizadas.',
    relatedSlug: 'que-es-ethereum',
    keyPoints: [
      'Creada por Vitalik Buterin en 2013-2015.',
      'Permite ejecutar código Turing-completo en la máquina virtual EVM.',
      'Transicionó a Proof of Stake en 2022 mediante The Merge.'
    ]
  },
  {
    id: 'c-smart-contracts',
    title: 'Smart Contracts',
    level: 2,
    category: 'Tecnología',
    summary: 'Programas informáticos inmutables que se ejecutan automáticamente cuando se cumplen condiciones.',
    relatedSlug: 'que-son-los-smart-contracts',
    keyPoints: [
      'Siguen la lógica estricta "si ocurre X, entonces hacer Y".',
      'No requieren abogados ni árbitros humanos para su liquidación.',
      'Cualquier fallo de lógica en el código puede ser explotado.'
    ]
  },
  {
    id: 'c-mining',
    title: 'Minería (Mining)',
    level: 2,
    category: 'Consenso',
    summary: 'El proceso computacional de verificar transacciones y sellar bloques en redes Proof of Work.',
    relatedSlug: 'que-es-mineria',
    keyPoints: [
      'Garantiza la sincronización del tiempo y evita el doble gasto.',
      'Los mineros compiten por resolver un acertijo hash.',
      'Reciben comisiones y nuevas monedas como recompensa.'
    ]
  },
  {
    id: 'c-staking',
    title: 'Staking',
    level: 2,
    category: 'Consenso',
    summary: 'El compromiso de capital criptográfico como fianza para validar bloques en Proof of Stake.',
    relatedSlug: 'que-es-proof-of-stake',
    keyPoints: [
      'Reemplaza el gasto eléctrico de los mineros por garantía de capital.',
      'Los validadores honestos obtienen recompensas de emisión.',
      'Los validadores maliciosos pierden sus fondos mediante slashing.'
    ]
  },
  {
    id: 'c-nodes',
    title: 'Nodos (Nodes)',
    level: 2,
    category: 'Arquitectura',
    summary: 'Las computadoras conectadas que auditan y aplican las reglas del protocolo sin confiar a ciegas.',
    relatedSlug: 'que-es-un-nodo',
    keyPoints: [
      'Cualquier persona puede ejecutar un nodo completo en su propia casa.',
      'Los nodos descartan bloques inválidos sin importar el poder del minero.',
      'Son los verdaderos guardianes de la descentralización.'
    ]
  },
  {
    id: 'c-consensus',
    title: 'Consenso (Consensus)',
    level: 2,
    category: 'Consenso',
    summary: 'El método matemático que permite a miles de computadoras acordar un único historial verdadero.',
    relatedSlug: 'blockchain-explicada-desde-cero',
    keyPoints: [
      'Resuelve el problema de los generales bizantinos.',
      'Existen múltiples variantes (PoW, PoS, BFT).',
      'Garantiza la tolerancia a fallos y nodos deshonestos.'
    ]
  },
  {
    id: 'c-pow',
    title: 'Proof of Work (PoW)',
    level: 2,
    category: 'Consenso',
    summary: 'Prueba de trabajo: seguridad respaldada por la termodinámica y el poder computacional.',
    relatedSlug: 'que-es-proof-of-work',
    keyPoints: [
      'Utilizado por Bitcoin para ordenar transacciones.',
      'El ajuste dinámico de dificultad mantiene constante el tiempo entre bloques.',
      'Exige costos tangibles que imposibilitan reescribir la historia.'
    ]
  },
  {
    id: 'c-pos',
    title: 'Proof of Stake (PoS)',
    level: 2,
    category: 'Consenso',
    summary: 'Prueba de participación: validación segura con alta eficiencia energética.',
    relatedSlug: 'que-es-proof-of-stake',
    keyPoints: [
      'Reduce en más del 99.9% el consumo de electricidad comparado con PoW.',
      'La seguridad descansa sobre barreras de capital económico.',
      'Utilizado por Ethereum, Solana, Cardano y Avalanche.'
    ]
  },
  {
    id: 'c-tokens',
    title: 'Tokens',
    level: 2,
    category: 'Ecosistema',
    summary: 'Activos digitales emitidos sobre una blockchain anfitriona mediante un contrato inteligente.',
    relatedSlug: 'que-es-ethereum',
    keyPoints: [
      'Pueden ser fungibles (ERC-20) o no fungibles (ERC-721).',
      'Representan utilidades, derechos de voto o activos tokenizados.',
      'Pagan sus comisiones de transferencia con la moneda nativa de la red.'
    ]
  },

  // NIVEL 3 - AVANZADO
  {
    id: 'c-defi',
    title: 'DeFi (Finanzas Descentralizadas)',
    level: 3,
    category: 'Finanzas',
    summary: 'Servicios financieros automatizados y sin permisos construidos con smart contracts.',
    relatedSlug: 'que-es-defi',
    keyPoints: [
      'Intercambios descentralizados (DEX) basados en creadores automáticos de mercado (AMM).',
      'Préstamos sobrecolateralizados sin evaluaciones de crédito bancarias.',
      'Composabilidad tipo Lego entre diferentes protocolos.'
    ]
  },
  {
    id: 'c-nft',
    title: 'NFT (Tokens No Fungibles)',
    level: 3,
    category: 'Ecosistema',
    summary: 'Certificados digitales únicos e indivisibles de autenticidad y titularidad.',
    relatedSlug: 'que-son-los-nft',
    keyPoints: [
      'Acreditan procedencia demostrable de objetos digitales o físicos.',
      'Usos en arte digital, entradas de eventos, videojuegos y títulos de propiedad.',
      'Poseer el NFT no equivale automáticamente a derechos de autor comerciales.'
    ]
  },
  {
    id: 'c-web3',
    title: 'Web3',
    level: 3,
    category: 'Tecnología',
    summary: 'El paradigma de una web donde los usuarios son dueños de sus identidades, datos y activos.',
    relatedSlug: 'que-es-web3',
    keyPoints: [
      'Evolución frente a los monopolios centralizados de la Web 2.0.',
      'Identidades soberanas mediante firmas criptográficas.',
      'Interoperabilidad abierta entre aplicaciones sin jardines vallados.'
    ]
  },
  {
    id: 'c-layer1',
    title: 'Layer 1 (Capa 1)',
    level: 3,
    category: 'Arquitectura',
    summary: 'La blockchain base que garantiza la seguridad, consenso e inmutabilidad definitiva.',
    relatedSlug: 'blockchain-explicada-desde-cero',
    keyPoints: [
      'Ejemplos: Bitcoin, Ethereum, Monero.',
      'Suele priorizar descentralización y robustez sobre velocidad bruta.',
      'Actúa como la corte suprema de liquidación final.'
    ]
  },
  {
    id: 'c-layer2',
    title: 'Layer 2 (Capa 2)',
    level: 3,
    category: 'Arquitectura',
    summary: 'Protocolos secundarios construidos para escalar la capacidad de transacciones de la Capa 1.',
    relatedSlug: 'blockchain-explicada-desde-cero',
    keyPoints: [
      'Lightning Network (canales de estado en Bitcoin).',
      'Rollups optimistas y de conocimiento cero (ZK-Rollups) en Ethereum.',
      'Procesan miles de operaciones fuera de la cadena y publican pruebas concisas en Capa 1.'
    ]
  },
  {
    id: 'c-bridges',
    title: 'Bridges (Puentes)',
    level: 3,
    category: 'Arquitectura',
    summary: 'Sistemas de comunicación que permiten trasladar datos y tokens entre diferentes blockchains.',
    relatedSlug: 'riesgos-de-las-criptomonedas',
    keyPoints: [
      'Bloquean activos en la cadena A y acuñan representaciones en la cadena B.',
      'Sujetos a complejidades extremas de seguridad cruzada.',
      'Han sido blanco de los exploits más cuantiosos del ecosistema.'
    ]
  },
  {
    id: 'c-oracles',
    title: 'Oracles (Oráculos)',
    level: 3,
    category: 'Tecnología',
    summary: 'Entidades que suministran información del mundo exterior a los contratos inteligentes.',
    relatedSlug: 'que-es-defi',
    keyPoints: [
      'Resuelven el aislamiento intencional de la blockchain.',
      'Proveen cotizaciones de precios, clima, resultados de partidos o balizas de azar.',
      'Los oráculos descentralizados agregan múltiples fuentes para evitar manipulación.'
    ]
  },
  {
    id: 'c-dao',
    title: 'DAO (Organización Autónoma Descentralizada)',
    level: 3,
    category: 'Gobernanza',
    summary: 'Comunidades coordinadas por reglas en smart contracts y gobernadas por votos con tokens.',
    relatedSlug: 'que-es-web3',
    keyPoints: [
      'Tesorerías públicas administradas exclusivamente por veredictos de votación on-chain.',
      'Ausencia de jerarquías tradicionales de directores ejecutivos.',
      'Presenta desafíos en participación y votación de baja gobernanza.'
    ]
  },
  {
    id: 'c-liquidity',
    title: 'Liquidity (Liquidez y Pools)',
    level: 3,
    category: 'Finanzas',
    summary: 'La abundancia de activos disponibles en un mercado para permitir intercambios sin fricción.',
    relatedSlug: 'que-es-defi',
    keyPoints: [
      'Los proveedores de liquidez (LP) depositan pares de activos en contratos inteligentes.',
      'Fórmulas matemáticas (como x * y = k) determinan el precio de intercambio.',
      'Expuesto a riesgos de pérdida impermanente (impermanent loss).'
    ]
  },
  {
    id: 'c-tokenomics',
    title: 'Tokenomics',
    level: 3,
    category: 'Finanzas',
    summary: 'El diseño integral de la economía, emisión, incentivos y distribución de un criptoactivo.',
    relatedSlug: 'que-es-el-halving',
    keyPoints: [
      'Estudia la oferta máxima, inflación anual, calendarios de desbloqueo y quema de tokens.',
      'Un diseño deficiente degrada el valor a largo plazo sin importar la tecnología.',
      'Determina la alineación de incentivos entre usuarios, validadores y creadores.'
    ]
  }
];

export const LEVEL_QUIZZES: Record<number, QuizQuestion[]> = {
  1: [
    {
      id: 'q1-1',
      level: 1,
      question: '¿Dónde se encuentran físicamente las criptomonedas de un usuario?',
      options: [
        'Dentro del archivo de la aplicación de la billetera en su teléfono',
        'Registradas en el libro contable de la red blockchain',
        'En los servidores privados de la empresa que fabricó su teléfono',
        'En una tarjeta SIM especial'
      ],
      correctIndex: 1,
      explanation: 'Las criptomonedas nunca salen de la blockchain. La billetera únicamente guarda las claves privadas que te otorgan derecho a autorizar movimientos en ese registro público.'
    },
    {
      id: 'q1-2',
      level: 1,
      question: '¿Qué información es completamente seguro compartir con otra persona para que te transfiera fondos?',
      options: [
        'Tu clave privada',
        'Tu frase semilla de recuperación de 12 palabras',
        'Tu dirección pública de wallet',
        'Tu contraseña de acceso al dispositivo'
      ],
      correctIndex: 2,
      explanation: 'La dirección pública funciona como tu buzón postal o número de cuenta bancaria: cualquiera puede conocerla para depositarte, pero nadie puede retirar fondos sin la clave privada.'
    },
    {
      id: 'q1-3',
      level: 1,
      question: '¿Cuál es el límite máximo de emisión programado en el protocolo de Bitcoin?',
      options: [
        'No tiene límite, se emite según la demanda de los bancos',
        '100 millones de unidades',
        '21 millones de unidades (BTC)',
        '1000 millones de unidades'
      ],
      correctIndex: 2,
      explanation: 'El protocolo de Bitcoin tiene una política monetaria estrictamente inmutable con una emisión asintótica que nunca superará los 21 millones de BTC.'
    },
    {
      id: 'q1-4',
      level: 1,
      question: '¿Qué problema fundamental resolvió Bitcoin para permitir el efectivo digital sin intermediarios?',
      options: [
        'El problema de la lentitud del Wi-Fi',
        'El problema del doble gasto',
        'El diseño de procesadores más veloces',
        'La traducción automática de divisas'
      ],
      correctIndex: 1,
      explanation: 'Al ser un archivo digital ordinario fácilmente duplicable, el efectivo electrónico requería una solución descentralizada que impidiera gastar la misma unidad dos veces. Satoshi lo resolvió con PoW y la cadena de bloques.'
    },
    {
      id: 'q1-5',
      level: 1,
      question: '¿Por qué se llama "cadena de bloques" (blockchain)?',
      options: [
        'Porque está hecha de metales pesados en factorías',
        'Porque agrupa registros en bloques y cada bloque contiene el hash del bloque anterior',
        'Porque bloquea a los usuarios que no pagan comisiones',
        'Porque solo funciona si las computadoras están encadenadas con cables'
      ],
      correctIndex: 1,
      explanation: 'Cada bloque guarda el resumen criptográfico (hash) del bloque anterior. Si alguien modifica un dato del pasado, la huella cambia y rompe la cadena secuencial completa.'
    }
  ],
  2: [
    {
      id: 'q2-1',
      level: 2,
      question: '¿Cuál fue la principal innovación que introdujo Ethereum frente a Bitcoin?',
      options: [
        'Eliminar por completo las comisiones de red',
        'Permitir contratos inteligentes y una máquina virtual programable (EVM)',
        'Hacer que el dinero fuera físico',
        'Depender de un banco central europeo'
      ],
      correctIndex: 1,
      explanation: 'Ethereum amplió la tecnología de Bitcoin incorporando un lenguaje de programación Turing-completo que permite ejecutar aplicaciones descentralizadas complejas sobre la cadena.'
    },
    {
      id: 'q2-2',
      level: 2,
      question: 'En Proof of Stake, ¿qué elemento reemplaza el consumo intensivo de electricidad de los mineros?',
      options: [
        'Baterías solares obligatorias',
        'Criptomonedas bloqueadas como garantía económica (Staking)',
        'Votos manuscritos enviados por correo',
        'Velocidad de conexión a internet únicamente'
      ],
      correctIndex: 1,
      explanation: 'En PoS, los validadores ponen fondos propios en garantía (stake). Si intentan validar bloques fraudulentos, el protocolo los penaliza destruyendo parte de su fianza (slashing).'
    },
    {
      id: 'q2-3',
      level: 2,
      question: '¿Cuál es la función principal de un nodo completo (Full Node) en una red blockchain?',
      options: [
        'Vender criptomonedas a precio de descuento',
        'Verificar de forma independiente que cada bloque y transacción cumpla las reglas del protocolo',
        'Crear monedas a voluntad del usuario',
        'Prestar dinero a los mineros'
      ],
      correctIndex: 1,
      explanation: 'Un nodo completo audita cada bloque y descarta de forma instantánea cualquier bloque inválido, sin importar cuán poderoso sea el minero que lo propuso.'
    },
    {
      id: 'q2-4',
      level: 2,
      question: '¿Cuál es la diferencia primordial entre una Coin (moneda) y un Token?',
      options: [
        'Las coins son siempre de oro y los tokens de plata',
        'Una coin opera sobre su propia blockchain nativa; un token se emite sobre una blockchain existente mediante un smart contract',
        'Los tokens no tienen valor monetario y las coins sí',
        'No existe ninguna diferencia técnica'
      ],
      correctIndex: 1,
      explanation: 'BTC y ETH son monedas nativas de sus respectivas blockchains (Bitcoin y Ethereum), mientras que tokens como los ERC-20 existen sobre la infraestructura de Ethereum.'
    },
    {
      id: 'q2-5',
      level: 2,
      question: '¿Qué es el "Halving" de Bitcoin?',
      options: [
        'Un error informático que borra la mitad de las carteras',
        'La reducción a la mitad programada de la emisión de nuevos bitcoins por bloque cada 210,000 bloques',
        'La división del precio de Bitcoin exactamente por dos',
        'El cierre temporal de la red durante el verano'
      ],
      correctIndex: 1,
      explanation: 'El halving reduce periódicamente a la mitad el subsidio de emisión que reciben los mineros, garantizando el suministro escaso y predecible de Bitcoin hasta el año 2140.'
    }
  ],
  3: [
    {
      id: 'q3-1',
      level: 3,
      question: '¿Qué es un Oráculo en el contexto de los contratos inteligentes?',
      options: [
        'Una persona que predice el precio futuro de las monedas',
        'Un servicio puente que suministra datos del mundo exterior a la blockchain de forma verificada',
        'Un procesador cuántico de última generación',
        'El creador anónimo de un protocolo'
      ],
      correctIndex: 1,
      explanation: 'Las blockchains no pueden consultar internet directamente para mantener el determinismo. Los oráculos toman datos del exterior (como cotizaciones o clima) y los firman para uso en smart contracts.'
    },
    {
      id: 'q3-2',
      level: 3,
      question: '¿Cuál es el objetivo primordial de las soluciones de Capa 2 (Layer 2)?',
      options: [
        'Sustituir por completo a Bitcoin y Ethereum eliminando la Capa 1',
        'Escalar la capacidad de transacciones procesando cómputo fuera de la cadena principal y liquidando en Capa 1',
        'Cobrar suscripciones mensuales a los usuarios',
        'Ocultar todas las transacciones de las autoridades'
      ],
      correctIndex: 1,
      explanation: 'Las Layer 2 (como Lightning Network o Rollups) procesan miles de operaciones de forma barata y rápida, heredando la seguridad de la Capa 1 donde se asienta la liquidación final.'
    },
    {
      id: 'q3-3',
      level: 3,
      question: '¿Qué significa que los protocolos DeFi posean "composabilidad"?',
      options: [
        'Que pueden componer música ambiental de fondo',
        'Que pueden conectarse e interactuar entre sí como piezas de Lego en una misma transacción',
        'Que están compuestos exclusivamente de hardware de silicio',
        'Que requieren autorización del banco emisor'
      ],
      correctIndex: 1,
      explanation: 'Al ser contratos públicos y abiertos en la misma máquina virtual, diferentes aplicaciones descentralizadas pueden encadenarse sin intermediarios para construir soluciones financieras complejas.'
    },
    {
      id: 'q3-4',
      level: 3,
      question: '¿Por qué los puentes (bridges) entre blockchains han sido un objetivo recurrente de ataques informáticos?',
      options: [
        'Porque usan contraseñas de cuatro dígitos',
        'Porque concentran enormes cantidades de fondos en custodia y presentan una altísima complejidad técnica de verificación cruzada',
        'Porque operan sin conexión a internet',
        'Porque no utilizan criptografía'
      ],
      correctIndex: 1,
      explanation: 'Los puentes bloquean cientos de millones de dólares en contratos inteligentes entre cadenas con reglas heterogéneas, convirtiéndose en blancos de gran atractivo económico para atacantes que buscan fallos de diseño.'
    },
    {
      id: 'q3-5',
      level: 3,
      question: '¿Qué representa la propiedad fundamental de un NFT (Token No Fungible)?',
      options: [
        'La posesión de todos los servidores de internet donde se guarde la imagen',
        'Un registro criptográfico único e indivisible en la blockchain que acredita la autenticidad y titularidad de un activo específico',
        'La garantía de que la imagen jamás podrá ser vista por nadie más',
        'Un archivo ZIP cifrado en tu ordenador'
      ],
      correctIndex: 1,
      explanation: 'Un NFT almacena un identificador único en un contrato inteligente que certifica de manera pública y matemática quién es el titular legítimo del registro, distinguiéndolo de copias digitales arbitrarias.'
    }
  ]
};

export const QUICK_CONCEPT_QUIZ = [
  {
    question: '¿Qué concepto describe mejor una red informática sin una única autoridad central de control?',
    options: ['Blockchain', 'Descentralización', 'Wallet', 'NFT'],
    correctIndex: 1,
    explanation: 'La descentralización es el principio arquitectónico donde las decisiones y la gobernanza están repartidas entre múltiples participantes sin un punto único de fallo.'
  },
  {
    question: '¿Qué mecanismo matemático garantiza que si cambias un solo carácter de un texto, su huella digital sea completamente irreconocible?',
    options: ['Función Hash criptográfica', 'Tasa de Gas', 'Semilla de restauración', 'Halving'],
    correctIndex: 0,
    explanation: 'Las funciones hash criptográficas (como SHA-256) presentan el "efecto avalancha": cualquier alteración mínima en la entrada genera una salida totalmente diferente.'
  },
  {
    question: '¿Qué elemento debe mantenerse en secreto estricto para no perder el control de tus fondos?',
    options: ['Dirección pública', 'Clave privada / Frase semilla', 'Hash de la transacción', 'Nombre del explorador de bloques'],
    correctIndex: 1,
    explanation: 'La clave privada o frase semilla es la llave matemática maestra. Quien la conozca puede gastar y transferir los fondos asociados.'
  }
];
