import { Article } from '../types';
import { CryptoImages } from '../assets/images';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    slug: 'criptomonedas-guia-principiantes',
    title: 'Criptomonedas: Guía para principiantes',
    excerpt: 'Descubre qué son las criptomonedas, por qué existen, cómo difieren del dinero electrónico bancario y los fundamentos que sostienen este nuevo paradigma tecnológico.',
    category: 'Principiantes',
    readTime: '6 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.globalNetwork,
    featured: true,
    sections: [
      {
        heading: '1. ¿Qué es exactamente una criptomoneda?',
        content: [
          'Una criptomoneda es una unidad de valor digital cuyo funcionamiento e integridad descansan sobre técnicas criptográficas avanzadas y una red de computadoras interconectadas que operan bajo un protocolo común.',
          'A diferencia del dinero fiduciario convencional (como el euro, el dólar o el peso), las criptomonedas no son emitidas por bancos centrales ni dependen de administradores bancarios privados para autorizar o rechazar transacciones.'
        ],
        callout: {
          title: 'Definición esencial',
          text: 'Una criptomoneda no es una moneda física almacenada en una caja fuerte digital, sino un registro contable sincronizado y protegido mediante matemáticas criptográficas en miles de nodos.',
          type: 'info'
        }
      },
      {
        heading: '2. Dinero digital bancario vs Criptomonedas',
        content: [
          'La inmensa mayoría del dinero que usamos hoy a través de tarjetas y transferencias bancarias ya es digital. Sin embargo, existe una diferencia estructural fundamental: el dinero bancario tradicional es centralizado y permisionado.',
          'En el sistema bancario tradicional, una entidad privada mantiene el libro mayor contable y decide si una transferencia se aprueba, se congela o se revierte.',
          'En una red criptográfica abierta, el libro mayor es público, auditable y distribuido. Las reglas están grabadas en el código informático del protocolo y nadie puede modificarlas unilateralmente sin el consenso mayoritario de la red.'
        ]
      },
      {
        heading: '3. Los pilares de la tecnología cripto',
        content: [
          'Para entender cualquier criptomoneda, basta con comprender cuatro pilares elementales: Criptografía (para autenticar identidades y firmar movimientos sin exponer secretos), Redes entre pares (P2P, donde las máquinas se comunican directamente), Consenso distribuido (mecanismos para que computadoras desconocidas acuerden un único historial verdadero) e Incentivos de protocolo.'
        ]
      },
      {
        heading: '4. Conclusión y primeros pasos',
        content: [
          'Las criptomonedas representan un experimento tecnológico y económico sin precedentes en la historia de la computación. Comprenderlas requiere desaprender la idea de que todo registro requiere un intermediario custodio.'
        ]
      }
    ],
    relatedConcepts: ['Criptografía', 'Descentralización', 'Libro Mayor Distribuido', 'P2P'],
    relatedArticleIds: ['art-2', 'art-4', 'art-6']
  },
  {
    id: 'art-2',
    slug: 'que-es-bitcoin',
    title: '¿Qué es Bitcoin? El origen del dinero descentralizado',
    excerpt: 'Conoce la historia, el propósito fundamental y las características de Bitcoin: la primera red digital capaz de transferir valor sin intermediarios de confianza.',
    category: 'Bitcoin',
    readTime: '7 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.defiNodes,
    featured: true,
    sections: [
      {
        heading: '1. El nacimiento en 2008 y Satoshi Nakamoto',
        content: [
          'El 31 de octubre de 2008, en un contexto de crisis financiera global, un remitente bajo el seudónimo de Satoshi Nakamoto envió un correo electrónico a una lista de criptografía con un documento titulado: "Bitcoin: A Peer-to-Peer Electronic Cash System".',
          'El 3 de enero de 2009, Nakamoto minó el primer bloque de la red, conocido como el Bloque Génesis (Bloque 0), dando comienzo formal al funcionamiento ininterrumpido de la red Bitcoin.'
        ],
        callout: {
          title: 'Sobre la identidad de Satoshi',
          text: 'La identidad real de Satoshi Nakamoto sigue siendo desconocida. En 2011, Nakamoto se despidió de la comunidad para dedicarse a otros proyectos, dejando el código en manos de una comunidad descentralizada de desarrolladores de código abierto.',
          type: 'info'
        }
      },
      {
        heading: '2. ¿Qué problema resolvió Bitcoin?',
        content: [
          'Antes de Bitcoin, cualquier intento de crear efectivo digital tropezaba con el llamado "Problema del Doble Gasto". A diferencia de un billete físico, un archivo informático normal se puede duplicar infinitas veces con un simple comando de copiar y pegar.',
          'Para evitar que alguien gastara el mismo dinero digital dos veces, los sistemas anteriores necesitaban un servidor central que validara saldos. Satoshi Nakamoto resolvió este dilema uniendo una red de sellado de tiempo (blockchain), prueba de trabajo (Proof of Work) y criptografía de clave pública.'
        ]
      },
      {
        heading: '3. La regla de los 21 millones de unidades',
        content: [
          'Una de las características más reconocidas de Bitcoin es su política monetaria programada e inmutable: nunca existirán más de 21 millones de bitcoins (BTC).',
          'La emisión de nuevas unidades no depende de decisiones políticas o gubernamentales, sino de una fórmula matemática inscrita en el protocolo que reduce a la mitad la emisión periódicamente mediante el evento denominado "Halving".'
        ]
      }
    ],
    relatedConcepts: ['Satoshi Nakamoto', 'Proof of Work', 'Halving', 'Doble Gasto'],
    relatedArticleIds: ['art-3', 'art-8', 'art-17']
  },
  {
    id: 'art-3',
    slug: 'como-funciona-bitcoin',
    title: '¿Cómo funciona Bitcoin por dentro?',
    excerpt: 'Explora paso a paso cómo se transmite una transacción en la red Bitcoin, el papel del mempool, los bloques y la validación descentralizada de los nodos.',
    category: 'Bitcoin',
    readTime: '8 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.chainLinks,
    sections: [
      {
        heading: '1. De billetera a la red: la firma digital',
        content: [
          'Cuando Alicia desea enviar 0.05 BTC a Roberto, su billetera no "envía monedas" en un sentido físico. En su lugar, genera un mensaje digital que especifica la procedencia de los fondos y el destino.',
          'Alicia firma criptográficamente esta transacción con su clave privada. Cualquiera en el mundo puede comprobar con la clave pública de Alicia que la firma es auténtica sin necesidad de conocer su clave privada.'
        ]
      },
      {
        heading: '2. El mempool: la sala de espera de transacciones',
        content: [
          'La transacción se propaga a los nodos de la red entre pares. Cada nodo verifica independientemente que la firma sea válida y que los fondos no hayan sido gastados previamente. Si todo es correcto, la transacción ingresa al "mempool" (memoria temporal).',
          'Los mineros seleccionan transacciones del mempool, las agrupan en un candidato de bloque y compiten por encontrar una solución matemática válida bajo las reglas de Proof of Work.'
        ]
      },
      {
        heading: '3. Inclusión en la cadena y confirmaciones',
        content: [
          'Una vez que un minero resuelve el acertijo computacional, transmite el bloque a toda la red. Cada nodo lo audita en milisegundos y, si cumple todas las reglas, lo añade a su copia local del registro contable.',
          'Cada bloque posterior que se añada encima de este actúa como una confirmación adicional, haciendo computacionalmente irreversible cualquier alteración retroactiva.'
        ]
      }
    ],
    relatedConcepts: ['Mempool', 'Confirmación', 'Minero', 'Nodo Completo'],
    relatedArticleIds: ['art-2', 'art-4', 'art-9']
  },
  {
    id: 'art-4',
    slug: 'blockchain-explicada-desde-cero',
    title: 'Blockchain explicada desde cero',
    excerpt: 'Entiende con analogías claras y visuales la estructura de una cadena de bloques, cómo se enlazan criptográficamente y por qué es un registro inmutable.',
    category: 'Blockchain',
    readTime: '9 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.chainLinks,
    featured: true,
    sections: [
      {
        heading: '1. La analogía del cuaderno contable colectivo',
        content: [
          'Imagina un libro de contabilidad compartido en una sala de 100 personas. Cada persona tiene una copia idéntica del cuaderno. Cada página es un "bloque" de transacciones escritas.',
          'Cuando una página se llena, todos los participantes verifican los apuntes. Al final de la página, se calcula un resumen criptográfico único (el hash). La siguiente página debe comenzar obligatoriamente anotando el hash de la página anterior.'
        ],
        callout: {
          title: 'El secreto del encadenamiento',
          text: 'Si alguien intentara arrancar una página o cambiar un número del pasado, el hash de esa página cambiaría por completo, rompiendo el enlace con todas las páginas siguientes de inmediato.',
          type: 'tip'
        }
      },
      {
        heading: '2. Anatomía de un bloque',
        content: [
          'Un bloque típico contiene dos secciones principales: el encabezado (header) y el cuerpo (body).',
          'El encabezado contiene metadatos cruciales: la versión del protocolo, el hash del bloque anterior (prevHash), la marca de tiempo (timestamp), la raíz de Merkle (resumen de todas las transacciones del bloque) y el nonce (número arbitrario utilizado en la minería).',
          'El cuerpo contiene la lista ordenada de todas las transacciones validadas en ese periodo.'
        ]
      },
      {
        heading: '3. Inmutabilidad y resistencia a la censura',
        content: [
          'Debido a que miles de computadoras conservan una copia idéntica y actualizada de la cadena, no existe un único servidor que un atacante o gobierno pueda apagar o alterar para modificar la historia contable.'
        ]
      }
    ],
    relatedConcepts: ['Hash', 'Bloque', 'Inmutabilidad', 'Merkle Tree'],
    relatedArticleIds: ['art-1', 'art-3', 'art-16']
  },
  {
    id: 'art-5',
    slug: 'que-es-ethereum',
    title: '¿Qué es Ethereum? La computadora mundial programable',
    excerpt: 'Descubre cómo Ethereum transformó la tecnología blockchain al permitir la ejecución de contratos inteligentes y aplicaciones descentralizadas completas.',
    category: 'Ethereum',
    readTime: '8 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.defiNodes,
    featured: true,
    sections: [
      {
        heading: '1. De calculadora a computadora Turing-completa',
        content: [
          'Si Bitcoin fue diseñado fundamentalmente como un sistema descentralizado para transferir y registrar valor (similar a un libro contable o calculadora financiera robusta), Ethereum fue concebido para ser una computadora mundial programable.',
          'Propuesto a finales de 2013 por Vitalik Buterin con apenas 19 años, Ethereum introdujo una máquina virtual (la Ethereum Virtual Machine o EVM) capaz de ejecutar cualquier código informático arbitrario en miles de nodos simultáneamente.'
        ]
      },
      {
        heading: '2. Ether (ETH): el combustible de la red',
        content: [
          'Ether es la criptomoneda nativa de la blockchain de Ethereum. A menudo se le compara con el combustible (gasolina) necesario para hacer funcionar una máquina.',
          'Cada vez que un usuario interactúa con un contrato inteligente o envía una transacción en Ethereum, debe pagar una pequeña fracción de ETH denominada "gas" para compensar a los nodos que procesan el cómputo.'
        ]
      },
      {
        heading: '3. La transición a Proof of Stake: The Merge',
        content: [
          'En septiembre de 2022, Ethereum completó una de las mayores hazañas técnicas de la historia del software: "The Merge" (La Fusión).',
          'La red reemplazó por completo la minería con alto consumo de energía (Proof of Work) por un mecanismo de consenso basado en validadores y participación de capital (Proof of Stake), reduciendo su consumo energético estimado en más del 99.9%.'
        ]
      }
    ],
    relatedConcepts: ['EVM', 'Ether', 'Proof of Stake', 'Smart Contracts'],
    relatedArticleIds: ['art-10', 'art-11', 'art-19']
  },
  {
    id: 'art-6',
    slug: 'que-es-una-wallet',
    title: '¿Qué es una wallet o billetera de criptomonedas?',
    excerpt: 'Aprende qué guarda realmente una wallet, la diferencia entre custodiales y no custodiales, y por qué las monedas nunca están dentro de tu teléfono.',
    category: 'Seguridad',
    readTime: '7 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.walletVault,
    featured: true,
    sections: [
      {
        heading: '1. El mayor mito: las monedas no están dentro de la wallet',
        content: [
          'El nombre "billetera" o "wallet" suele causar confusión. En el mundo tradicional, un billetero contiene billetes físicos. Si pierdes el billetero, pierdes los billetes.',
          'En las criptomonedas, tus activos residen eternamente en la blockchain. La wallet no almacena monedas: almacena las llaves criptográficas (claves privadas) que te otorgan la potestad de autorizar movimientos en la blockchain.'
        ],
        callout: {
          title: 'Regla de oro de la autocustodia',
          text: '"Not your keys, not your coins" (Si no son tus llaves, no son tus monedas). Si un tercero custodia tus claves privadas por ti, en realidad dependes de la solvencia y honestidad de esa entidad.',
          type: 'warning'
        }
      },
      {
        heading: '2. Wallets con custodia vs Autocustodia (No custodial)',
        content: [
          'Wallets custodiales: Un intermediario (como una plataforma de intercambio comercial) guarda las claves privadas por ti. Accedes con usuario y contraseña tradicionales.',
          'Wallets no custodiales (autocustodia): Tú eres el único guardián de tus claves privadas y tu frase semilla. Nadie en el mundo, ni siquiera el creador del software de la wallet, puede congelar tus fondos ni ayudarte a recuperarlos si pierdes tus claves.'
        ]
      },
      {
        heading: '3. Wallets calientes (Hot) vs Wallets frías (Cold / Hardware)',
        content: [
          'Hot wallets: Aplicaciones instaladas en teléfonos o navegadores con conexión constante a internet. Son cómodas para interactuar a diario con DApps, pero más expuestas al malware.',
          'Cold wallets (Hardware wallets): Dispositivos físicos especializados (como pequeños pendrives con chips seguros) que firman transacciones de forma aislada sin exponer jamás las claves privadas al ordenador infectado.'
        ]
      }
    ],
    relatedConcepts: ['Clave Privada', 'Seed Phrase', 'Hardware Wallet', 'Autocustodia'],
    relatedArticleIds: ['art-7', 'art-20']
  },
  {
    id: 'art-7',
    slug: 'clave-publica-vs-clave-privada',
    title: 'Clave pública vs clave privada: el corazón de la criptografía asimétrica',
    excerpt: 'Descubre la analogía de la cerradura y el buzón postal que te permitirá entender para siempre la seguridad criptográfica de tus activos.',
    category: 'Seguridad',
    readTime: '6 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.walletVault,
    sections: [
      {
        heading: '1. La analogía del buzón de correo',
        content: [
          'La criptografía asimétrica se basa en un par de claves matemáticas vinculadas: una pública y una privada.',
          'Imagina un buzón de correos metálico en la puerta de tu casa con una ranura visible. La dirección postal y la ranura son equivalentes a tu clave pública (o dirección de billetera): cualquiera puede conocerla y depositar cartas o fondos allí.',
          'Sin embargo, solo quien posea la llave física que abre la compuerta trasera (la clave privada) puede retirar el contenido y disponer de él.'
        ]
      },
      {
        heading: '2. Matemáticas unidireccionales',
        content: [
          'Es matemáticamente sencillo derivar la clave pública a partir de la clave privada (mediante curvas elípticas y funciones hash).',
          'Sin embargo, es computacionalmente imposible deducir la clave privada a partir de la clave pública, incluso usando las supercomputadoras más potentes de la humanidad.'
        ],
        callout: {
          title: 'Aviso crítico de seguridad',
          text: 'Nunca bajo ninguna circunstancia reveles o compartas tu clave privada o frase de recuperación con ninguna página, soporte técnico, amigo o formulario.',
          type: 'warning'
        }
      }
    ],
    relatedConcepts: ['Criptografía Asimétrica', 'Curva Elíptica', 'Dirección'],
    relatedArticleIds: ['art-6', 'art-20']
  },
  {
    id: 'art-8',
    slug: 'que-es-mineria',
    title: '¿Qué es la minería de criptomonedas?',
    excerpt: 'Comprende el propósito real de la minería: no es crear monedas mágicamente, sino asegurar el orden y la autenticidad de las transacciones sin una autoridad central.',
    category: 'Bitcoin',
    readTime: '7 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.chainLinks,
    sections: [
      {
        heading: '1. El verdadero propósito de minar',
        content: [
          'A menudo se utiliza la palabra "minería" como metáfora con la extracción de oro de la tierra. Pero en una red de computadoras, la minería cumple una función mucho más importante que la mera emisión de moneda: es el mecanismo de seguridad y sincronización temporal de la red.',
          'Los mineros compiten por empaquetar transacciones válidas y encontrar una firma criptográfica que cumpla con el nivel de dificultad exigido por el protocolo.'
        ]
      },
      {
        heading: '2. Hardware especializado: de CPUs a ASICs',
        content: [
          'En los primeros meses de Bitcoin en 2009, Satoshi Nakamoto y los primeros usuarios minaban utilizando el procesador ordinario (CPU) de sus ordenadores portátiles.',
          'Conforme aumentó la competencia, los mineros migraron a tarjetas gráficas (GPUs) y finalmente a circuitos integrados de aplicación específica (ASICs), chips diseñados con el único propósito físico de calcular funciones SHA-256 a velocidades de trillones de hashes por segundo.'
        ]
      },
      {
        heading: '3. La recompensa por bloque y comisiones',
        content: [
          'El protocolo recompensa al minero que resuelve el bloque con dos incentivos: monedas de nueva emisión (el subsidio de bloque) y las comisiones voluntarias que los usuarios pagaron por incluir sus transacciones.'
        ]
      }
    ],
    relatedConcepts: ['Proof of Work', 'Hashrate', 'ASIC', 'Dificultad'],
    relatedArticleIds: ['art-2', 'art-9', 'art-17']
  },
  {
    id: 'art-9',
    slug: 'que-es-proof-of-work',
    title: '¿Qué es Proof of Work (PoW)? Prueba de trabajo explicada',
    excerpt: 'Descubre por qué la prueba de trabajo vincula la seguridad del mundo digital a las leyes inquebrantables de la física y la termodinámica.',
    category: 'Blockchain',
    readTime: '8 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.chainLinks,
    sections: [
      {
        heading: '1. El concepto fundamental',
        content: [
          'Proof of Work (Prueba de Trabajo) es un mecanismo diseñado para prevenir abusos, como el spam o ataques de denegación de servicio, obligando al emisor a demostrar que ha gastado tiempo y recursos computacionales.',
          'En Bitcoin, PoW se utiliza para alcanzar consenso distribuido: quien proponga el próximo bloque debe presentar una prueba matemática irrefutable de haber invertido trabajo computacional.'
        ]
      },
      {
        heading: '2. El ajuste de dificultad dinámico',
        content: [
          'Uno de los mecanismos más ingeniosos de Bitcoin es el ajuste de dificultad: cada 2,016 bloques (aproximadamente cada dos semanas), la red evalúa cuánto tiempo tardaron los mineros en encontrarlos.',
          'Si entraron muchos mineros y los bloques se encontraron más rápido de lo previsto (menos de 10 minutos por bloque), la dificultad aumenta automáticamente. Si los mineros se desconectan, la dificultad disminuye, manteniendo el ritmo constante de 10 minutos.'
        ]
      },
      {
        heading: '3. Debate energético y consideraciones',
        content: [
          'PoW requiere un consumo eléctrico significativo para mantener su barrera económica de defensa contra ataques del 51%. Este costo es lo que vuelve prohibitivamente costoso para cualquier actor intentar reescribir la historia de transacciones.'
        ]
      }
    ],
    relatedConcepts: ['Ajuste de Dificultad', 'Ataque del 51%', 'Termodinámica'],
    relatedArticleIds: ['art-8', 'art-10', 'art-29']
  },
  {
    id: 'art-10',
    slug: 'que-es-proof-of-stake',
    title: '¿Qué es Proof of Stake (PoS)? Prueba de participación',
    excerpt: 'Aprende cómo funciona el mecanismo alternativo de validación que sustituye el gasto intensivo de electricidad por depósitos de garantía económica.',
    category: 'Blockchain',
    readTime: '7 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.defiNodes,
    sections: [
      {
        heading: '1. Sustituyendo computadoras por validadores con capital',
        content: [
          'En Proof of Stake (Prueba de Participación), no existen mineros con supercomputadoras consumiendo electricidad compitiendo en una carrera de fuerza bruta.',
          'En su lugar, los participantes actúan como "validadores". Para tener derecho a proponer y atestiguar bloques, deben bloquear una cantidad de criptomonedas nativas en un contrato de depósito (stake).'
        ]
      },
      {
        heading: '2. El mecanismo de penalización: Slashing',
        content: [
          '¿Qué impide a un validador validar transacciones fraudulentas o crear dos versiones distintas de la historia? La respuesta es el "Slashing" (recorte).',
          'Si el protocolo detecta matemáticamente que un validador firmó dos bloques contradictorios o actuó de forma maliciosa, una parte sustancial de sus monedas bloqueadas en stake es destruida irrevocablemente por el protocolo.'
        ]
      },
      {
        heading: '3. Eficiencia energética',
        content: [
          'Al no requerir billones de cálculos redundantes por segundo, las redes PoS consumen una fracción mínima de electricidad, haciendo viable la ejecución de validadores en hardware modesto de servidor.'
        ]
      }
    ],
    relatedConcepts: ['Validador', 'Staking', 'Slashing', 'Eficiencia Energética'],
    relatedArticleIds: ['art-5', 'art-9', 'art-29']
  },
  {
    id: 'art-11',
    slug: 'que-son-los-smart-contracts',
    title: '¿Qué son los smart contracts (contratos inteligentes)?',
    excerpt: 'Descubre los programas autónomos que se ejecutan sobre la blockchain bajo la lógica implacable de "si ocurre X, entonces ejecutar Y" sin árbitros humanos.',
    category: 'Tecnología',
    readTime: '7 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.nftWeb3,
    featured: true,
    sections: [
      {
        heading: '1. Ni inteligentes, ni contratos en el sentido tradicional',
        content: [
          'El término "smart contract" fue acuñado por el informático y jurista Nick Szabo en 1994, mucho antes de que existiera la blockchain.',
          'Un smart contract no es "inteligente" en el sentido de poseer inteligencia artificial: es un programa de software determinista. Tampoco es un contrato legal con cláusulas abiertas a interpretación: es un conjunto de instrucciones lógicas estrictas grabadas en una blockchain.'
        ],
        callout: {
          title: 'La analogía de la máquina expendedora',
          text: 'Szabo describió la máquina expendedora de refrescos como el ancestro del smart contract: introduces las monedas requeridas, seleccionas el botón, la máquina verifica mecánicamente el pago y despacha el producto automáticamente sin necesidad de un dependiente humano.',
          type: 'tip'
        }
      },
      {
        heading: '2. Características clave de un contrato inteligente',
        content: [
          'Autonomía: Una vez desplegado, nadie puede interrumpir su ejecución arbitrariamente.',
          'Transparencia: Cualquiera puede inspeccionar el código fuente y las variables de estado en la cadena.',
          'Determinismo: Dada la misma entrada de datos, el resultado siempre será exactamente el mismo en cualquier computadora del mundo.'
        ]
      }
    ],
    relatedConcepts: ['EVM', 'Determinismo', 'Solidity', 'DApps'],
    relatedArticleIds: ['art-5', 'art-12', 'art-13']
  },
  {
    id: 'art-12',
    slug: 'que-es-defi',
    title: '¿Qué es DeFi? Finanzas descentralizadas explicadas',
    excerpt: 'Descubre el ecosistema financiero alternativo construido sobre contratos inteligentes: préstamos, intercambios y liquidez sin banqueros centrales.',
    category: 'DeFi',
    readTime: '9 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.defiNodes,
    featured: true,
    sections: [
      {
        heading: '1. Finanzas sin intermediarios corporativos',
        content: [
          'DeFi (Decentralized Finance) es el conjunto de servicios financieros —como préstamos, compraventa de divisas, seguros y depósitos remunerados— construidos mediante contratos inteligentes y protocolos abiertos.',
          'En las finanzas tradicionales, si solicitas un préstamo debes presentar nóminas, documentos de identidad y esperar la aprobación de un comité de riesgo bancario. En DeFi, un contrato inteligente automatiza el préstamo solicitando una garantía criptográfica suficiente (colateral).'
        ]
      },
      {
        heading: '2. Bloques de Lego financieros (Composabilidad)',
        content: [
          'Una de las propiedades más potentes de DeFi es la "composabilidad". Debido a que los protocolos son de código abierto y residen en la misma blockchain, pueden conectarse entre sí como piezas de Lego.',
          'Un usuario puede tomar un préstamo en una plataforma, cambiar una moneda en un intercambio descentralizado (DEX) y aportar liquidez en otro servicio en una única transacción atómica.'
        ]
      },
      {
        heading: '3. Riesgos inherentes de DeFi',
        content: [
          'DeFi conlleva riesgos tecnológicos y económicos significativos: fallos o vulnerabilidades en el código de los smart contracts (exploits), liquidaciones automáticas si el valor de la garantía cae bruscamente, y ataques económicos a los oráculos de precios.'
        ]
      }
    ],
    relatedConcepts: ['DEX', 'Pool de Liquidez', 'Colateral', 'Composabilidad'],
    relatedArticleIds: ['art-11', 'art-15', 'art-20']
  },
  {
    id: 'art-13',
    slug: 'que-son-los-nft',
    title: '¿Qué son los NFT? Más allá de las imágenes de perfil',
    excerpt: 'Aprende el concepto de fungibilidad, cómo un token no fungible acredita autenticidad y propiedad digital única, y sus aplicaciones reales.',
    category: 'Tecnología',
    readTime: '8 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.nftWeb3,
    featured: true,
    sections: [
      {
        heading: '1. ¿Qué significa fungibilidad?',
        content: [
          'Un activo es fungible cuando cada una de sus unidades es perfectamente intercambiable con otra del mismo valor. Un billete de 20 dólares es fungible: te da igual qué billete específico tengas mientras sea auténtico.',
          'Un activo es no fungible cuando posee características singulares e irrepetibles. Tu documento de identidad, la escritura de tu vivienda o una pintura al óleo original son no fungibles: no puedes cambiarlos por otros al azar.'
        ]
      },
      {
        heading: '2. Un NFT es un certificado criptográfico de autenticidad',
        content: [
          'Un NFT (Non-Fungible Token) es un registro criptográfico único alojado en una blockchain que contiene un identificador único (Token ID) y un puntero a metadatos (información sobre lo que representa).',
          'Aunque una imagen asociada a un NFT pueda ser copiada o guardada con clic derecho, el certificado criptográfico que acredita la procedencia y propiedad original no se puede duplicar ni falsificar.'
        ]
      },
      {
        heading: '3. Aplicaciones que van más allá del arte digital',
        content: [
          'Entradas para eventos sin falsificación, credenciales académicas verificables, activos interoperables en videojuegos, títulos de propiedad inmobiliaria y membresías digitales exclusivas.'
        ]
      }
    ],
    relatedConcepts: ['Fungibilidad', 'Token ID', 'Metadatos', 'ERC-721'],
    relatedArticleIds: ['art-5', 'art-11', 'art-14']
  },
  {
    id: 'art-14',
    slug: 'que-es-web3',
    title: '¿Qué es Web3? La evolución de la arquitectura de internet',
    excerpt: 'De solo lectura (Web 1.0) a plataformas centralizadas (Web 2.0) y redes basadas en propiedad digital descentralizada (Web3).',
    category: 'Tecnología',
    readTime: '7 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.nftWeb3,
    sections: [
      {
        heading: '1. La cronología de la web',
        content: [
          'Web 1.0 (1990 - 2004): La era de la "lectura". Sitios web estáticos donde los usuarios consumían información publicada por administradores técnicos (Yahoo, GeoCities).',
          'Web 2.0 (2004 - actualidad): La era de la "lectura y escritura". Redes sociales y plataformas donde los usuarios crean contenido, pero un puñado de corporaciones gigantes posee los servidores, los datos y monetiza la atención de las personas.',
          'Web 3.0: La propuesta de la "lectura, escritura y propiedad". Redes abiertas donde los datos de usuario residen en protocolos descentralizados e identidades soberanas no cautivas de una empresa.'
        ]
      },
      {
        heading: '2. Desafíos y madurez',
        content: [
          'Web3 aún enfrenta enormes retos de experiencia de usuario, velocidad de procesamiento, costos de red y gobernanza descentralizada antes de ser accesible para el público general sin fricción técnica.'
        ]
      }
    ],
    relatedConcepts: ['Identidad Soberana', 'Descentralización', 'Gobernanza', 'DAO'],
    relatedArticleIds: ['art-1', 'art-11', 'art-13']
  },
  {
    id: 'art-15',
    slug: 'que-son-las-stablecoins',
    title: '¿Qué son las stablecoins o monedas estables?',
    excerpt: 'Descubre cómo se diseñan las criptomonedas vinculadas al valor de divisas como el dólar y por qué "estable" no significa "carente de riesgo".',
    category: 'Principiantes',
    readTime: '8 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.globalNetwork,
    sections: [
      {
        heading: '1. La necesidad de estabilidad en una economía cripto',
        content: [
          'Criptomonedas como Bitcoin o Ether sufren oscilaciones significativas de precio debido a su descubrimiento temprano de mercado y oferta inelástica.',
          'Las stablecoins fueron diseñadas para ofrecer la rapidez y programabilidad de la blockchain pero manteniendo un valor de paridad cercano a 1:1 con respecto a una moneda fiduciaria de referencia, principalmente el dólar estadounidense.'
        ]
      },
      {
        heading: '2. Los tres modelos de respaldo',
        content: [
          '1. Respaldadas por reservas fiduciarias tradicionales: La empresa emisora mantiene depósitos bancarios y bonos del tesoro por cada token en circulación (ej. USDT, USDC).',
          '2. Respaldadas por criptoactivos (sobrecolateralizadas): Respaldadas por un exceso de criptomonedas encerradas en un smart contract como garantía (ej. DAI).',
          '3. Algorítmicas: Intentaban mantener la paridad mediante fórmulas de incentivos y oferta elástica entre dos tokens, un modelo que ha demostrado riesgos severos de desanclaje.'
        ],
        callout: {
          title: 'Advertencia regulatoria y de custodia',
          text: 'Las stablecoins centralizadas pueden ser congeladas en cualquier dirección por sus emisores si las autoridades judiciales o de cumplimiento lo ordenan.',
          type: 'warning'
        }
      }
    ],
    relatedConcepts: ['Paridad (Peg)', 'Colateral', 'Desanclaje', 'Reservas'],
    relatedArticleIds: ['art-1', 'art-12', 'art-20']
  },
  {
    id: 'art-16',
    slug: 'que-es-un-nodo',
    title: '¿Qué es un nodo en una red blockchain?',
    excerpt: 'Aprende qué hacen los nodos, por qué son los guardianes de las reglas del protocolo y la diferencia entre un nodo completo y un nodo minero.',
    category: 'Blockchain',
    readTime: '6 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.chainLinks,
    sections: [
      {
        heading: '1. El árbitro silencioso de la red',
        content: [
          'Un nodo es cualquier computadora conectada a la red blockchain que ejecuta el software del protocolo. Su tarea primordial no es minar ni apostar dinero: es verificar que nadie haga trampa.',
          'Cuando un minero produce un bloque, todos los nodos del mundo descargan el bloque y revisan regla por regla: ¿Son válidas las firmas? ¿Se respetó el límite de emisión? Si una sola transacción es falsa, el nodo descarta el bloque inmediatamente sin importar cuánto poder de cómputo haya invertido el minero.'
        ]
      },
      {
        heading: '2. Tipos de nodos',
        content: [
          'Nodos completos (Full Nodes): Descargan y validan cada bloque y transacción desde el inicio de la historia.',
          'Nodos ligeros (Light Nodes / SPV): Solo descargan encabezados de bloques para comprobar pagos sin almacenar la cadena entera.',
          'Nodos de archivo: Conservan estados intermedios históricos detallados de toda la historia.'
        ]
      }
    ],
    relatedConcepts: ['Nodo Completo', 'SPV', 'Validación', 'Consenso'],
    relatedArticleIds: ['art-3', 'art-4', 'art-18']
  },
  {
    id: 'art-17',
    slug: 'que-es-el-halving',
    title: '¿Qué es el halving de Bitcoin y por qué existe?',
    excerpt: 'Comprende la reducción a la mitad programada de la emisión de nuevos bitcoins y cómo modela la curva de oferta inmutable del protocolo.',
    category: 'Bitcoin',
    readTime: '7 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.defiNodes,
    sections: [
      {
        heading: '1. La regla grabada en código',
        content: [
          'Cada 210,000 bloques minados (lo que toma aproximadamente 4 años en promedio), el subsidio que los mineros reciben por descubrir un nuevo bloque se divide exactamente entre dos.',
          'En 2009, cada bloque otorgaba 50 BTC. En 2012 se redujo a 25 BTC; en 2016 a 12.5 BTC; en 2020 a 6.25 BTC; y en 2024 se redujo a 3.125 BTC.'
        ]
      },
      {
        heading: '2. Por qué existe: control de inflación desinflacionario',
        content: [
          'Satoshi Nakamoto diseñó este calendario para simular la extracción de un metal precioso escaso: al principio es abundante y fácil de obtener; con el tiempo se vuelve cada vez más difícil y escaso.',
          'Hacia el año 2140 se minará el último satoshi (la unidad mínima de bitcoin), y a partir de ese momento la remuneración de los mineros provendrá exclusivamente de las comisiones de transacción pagadas por los usuarios.'
        ]
      }
    ],
    relatedConcepts: ['Subsidio de Bloque', 'Oferta Inelástica', 'Emisión'],
    relatedArticleIds: ['art-2', 'art-8', 'art-9']
  },
  {
    id: 'art-18',
    slug: 'que-significa-descentralizacion',
    title: '¿Qué significa realmente descentralización?',
    excerpt: 'Analiza los matices entre arquitectura centralizada, distribuida y descentralizada, y por qué el grado de descentralización es un espectro y no un interruptor.',
    category: 'Blockchain',
    readTime: '8 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.globalNetwork,
    sections: [
      {
        heading: '1. No todo lo distribuido es descentralizado',
        content: [
          'A menudo se confunden los términos "distribuido" y "descentralizado". Una gran empresa tecnológica como Google o Amazon posee centros de datos distribuidos en todos los continentes, pero su gobernanza es 100% centralizada: una única directiva toma las decisiones.',
          'La descentralización se refiere al poder de decisión y control: no existe un único punto de fallo (SPOF) ni una entidad que pueda alterar las reglas arbitrariamente.'
        ]
      },
      {
        heading: '2. El trilema de la blockchain',
        content: [
          'Formulado por Vitalik Buterin, el trilema sostiene que es extremadamente difícil para una blockchain optimizar simultáneamente tres propiedades: Descentralización, Seguridad y Escalabilidad.',
          'Aumentar drásticamente el tamaño de los bloques para procesar millones de transacciones por segundo exige servidores tan costosos que solo grandes corporaciones podrían correr nodos, sacrificando la descentralización.'
        ]
      }
    ],
    relatedConcepts: ['Trilema Blockchain', 'Punto Único de Fallo', 'Gobernanza'],
    relatedArticleIds: ['art-4', 'art-16']
  },
  {
    id: 'art-19',
    slug: 'que-son-las-gas-fees',
    title: '¿Qué son las gas fees o tarifas de red?',
    excerpt: 'Aprende por qué pagamos comisiones al transferir valor o interactuar con smart contracts, cómo se calcula el gas y qué provoca su encarecimiento.',
    category: 'Ethereum',
    readTime: '6 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.chainLinks,
    sections: [
      {
        heading: '1. El costo de los recursos computacionales',
        content: [
          'En redes programables como Ethereum, cada operación (sumar dos números, almacenar un dato en disco, verificar una firma) consume ciclos de CPU y almacenamiento en miles de computadoras del mundo.',
          'Las "gas fees" son la compensación obligatoria que los usuarios pagan a la red para procesar y registrar esa computación.'
        ]
      },
      {
        heading: '2. Subastas de espacio en el bloque',
        content: [
          'El espacio dentro de cada bloque de una blockchain es estrictamente limitado. Cuando millones de personas intentan realizar transacciones a la vez, se produce una subasta de mercado libre.',
          'Los validadores priorizan las transacciones que ofrecen una tarifa de gas mayor. Si la red está congestionada, los costos suben; en periodos de calma, las tarifas bajan.'
        ]
      }
    ],
    relatedConcepts: ['Gwei', 'Mempool', 'Límite de Gas', 'Escalabilidad'],
    relatedArticleIds: ['art-5', 'art-11']
  },
  {
    id: 'art-20',
    slug: 'riesgos-de-las-criptomonedas',
    title: 'Riesgos de las criptomonedas: lo que nadie debe ignorar',
    excerpt: 'Una revisión exhaustiva, sobria y honesta sobre los peligros técnicos, estafas habituales, pérdida de llaves y volatilidad extrema.',
    category: 'Seguridad',
    readTime: '9 min',
    publishDate: '24 dic 2024',
    imageUrl: CryptoImages.walletVault,
    featured: true,
    sections: [
      {
        heading: '1. La irreversibilidad de las transacciones',
        content: [
          'En un banco tradicional, si te equivocas de número de cuenta o eres víctima de un fraude, existe un servicio al cliente o un proceso judicial que puede congelar o revertir fondos.',
          'En una blockchain pública, las transacciones confirmadas son definitivas e irreversibles. Si envías fondos a una dirección errónea o a un atacante, no existe ninguna autoridad a quien apelar.'
        ],
        callout: {
          title: 'Responsabilidad absoluta',
          text: 'La libertad que otorga la autocustodia viene acompañada de una responsabilidad ineludible: tú eres tu propio banco.',
          type: 'warning'
        }
      },
      {
        heading: '2. Ataques de ingeniería social y phishing',
        content: [
          'La inmensa mayoría de las pérdidas en cripto no ocurren porque la criptografía de Bitcoin o Ethereum haya sido hackeada, sino porque los usuarios son engañados mediante ingeniería social.',
          'Sitios web falsos que imitan billeteras oficiales, mensajes privados de supuestos agentes de soporte técnico en Telegram o Discord pidiendo tu frase semilla, y ofertas que prometen multiplicar dinero en pocas horas son fraudes habituales.'
        ]
      },
      {
        heading: '3. Vulnerabilidades en contratos inteligentes y puentes',
        content: [
          'Los contratos inteligentes son código informático escrito por humanos y, por tanto, pueden contener errores o exploits de lógica. Los puentes entre cadenas (bridges) han sido históricamente vectores frecuentes de ataques millonarios por su complejidad.'
        ]
      },
      {
        heading: '4. Volatilidad de mercado y riesgo regulatorio',
        content: [
          'Los criptoactivos no regulados experimentan fluctuaciones severas de valor debido a su liquidez fragmentada y su naturaleza especulativa. Además, los marcos legales y fiscales evolucionan rápidamente en todo el planeta.'
        ]
      }
    ],
    relatedConcepts: ['Phishing', 'Ingeniería Social', 'Bridges', 'Vulnerabilidades'],
    relatedArticleIds: ['art-6', 'art-7', 'art-12']
  }
];
