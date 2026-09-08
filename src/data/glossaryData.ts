import { GlossaryTerm } from '../types';

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    id: 'bitcoin',
    term: 'Bitcoin',
    category: 'Fundamentos',
    shortDefinition: 'La primera criptomoneda descentralizada de la historia y el protocolo que la sustenta.',
    detailedExplanation: 'Creado por Satoshi Nakamoto en 2008, Bitcoin es una red peer-to-peer con un libro mayor público inviolable que permite transferir valor sin intermediarios financieros.',
    analogyExample: 'Como enviar un correo electrónico directo de una persona a otra, pero transfiriendo un activo escaso en vez de texto.',
    importantNote: 'Bitcoin con "B" mayúscula se refiere a la red y al protocolo; "bitcoin" o "BTC" con minúscula se refiere a la unidad monetaria.',
    relatedTerms: ['Satoshi Nakamoto', 'Proof of Work', 'Halving', 'Blockchain']
  },
  {
    id: 'blockchain',
    term: 'Blockchain (Cadena de bloques)',
    category: 'Arquitectura',
    shortDefinition: 'Estructura de datos distribuida en la que los registros se agrupan en bloques encadenados criptográficamente.',
    detailedExplanation: 'Es un libro contable digital inmutable donde cada bloque contiene el resumen criptográfico (hash) del anterior, garantizando que el historial no pueda ser alterado retroactivamente sin romper la cadena.',
    analogyExample: 'Un libro mayor encuadernado donde cada página sella la anterior con una huella dactilar matemática indeleble.',
    importantNote: 'No toda blockchain es descentralizada; existen blockchains privadas y permisionadas administradas por consorcios corporativos.',
    relatedTerms: ['Block', 'Hash', 'Node', 'Consensus']
  },
  {
    id: 'block',
    term: 'Bloque (Block)',
    category: 'Arquitectura',
    shortDefinition: 'Paquete de datos que contiene un conjunto de transacciones validadas y metadatos de encadenamiento.',
    detailedExplanation: 'Los bloques se generan periódicamente y contienen el hash previo, timestamp, nonce, raíz de Merkle y la lista de transacciones aprobadas.',
    analogyExample: 'Una página de un libro contable antes de ser archivada definitivamente con el sello oficial.',
    importantNote: 'Cada red define el tamaño máximo o la capacidad de cómputo máxima permitida en cada bloque.',
    relatedTerms: ['Blockchain', 'Hash', 'Nonce', 'Merkle Tree']
  },
  {
    id: 'hash',
    term: 'Hash',
    category: 'Criptografía',
    shortDefinition: 'Resultado de longitud fija generado por una función matemática a partir de cualquier dato de entrada.',
    detailedExplanation: 'Una función hash criptográfica (como SHA-256) es determinista, unidireccional y produce un cambio radical en la salida si se modifica un solo bit de la entrada (efecto avalancha).',
    analogyExample: 'Una huella digital matemática única generada a partir de un libro entero: si cambias una coma del libro, la huella cambia por completo.',
    importantNote: 'No se puede "deshashear" para recuperar el texto original mediante ingeniería inversa.',
    relatedTerms: ['Criptografía', 'Proof of Work', 'SHA-256']
  },
  {
    id: 'wallet',
    term: 'Wallet (Billetera)',
    category: 'Seguridad',
    shortDefinition: 'Software o dispositivo de hardware que administra las claves criptográficas para interactuar con la blockchain.',
    detailedExplanation: 'No almacena monedas físicas ni archivos de dinero, sino el par de claves públicas y privadas necesarias para firmar y consultar transacciones en la red.',
    analogyExample: 'Un llavero inteligente que guarda las llaves maestras que abren tus casilleros en un banco global transparente.',
    importantNote: 'Perder el acceso a las claves de tu wallet implica perder de forma definitiva la capacidad de mover tus activos.',
    relatedTerms: ['Private Key', 'Public Key', 'Seed Phrase', 'Hardware Wallet']
  },
  {
    id: 'address',
    term: 'Dirección (Address)',
    category: 'Seguridad',
    shortDefinition: 'Identificador alfanumérico público que señala un destino o cuenta en la blockchain.',
    detailedExplanation: 'Se obtiene aplicando funciones criptográficas a una clave pública. Puede compartirse libremente con terceros para recibir transacciones.',
    analogyExample: 'Tu número de cuenta bancaria internacional (IBAN) o una dirección postal pública.',
    importantNote: 'Enviar fondos a una dirección incompatible o de otra red suele provocar la pérdida irrecuperable de esos fondos.',
    relatedTerms: ['Public Key', 'Wallet', 'Transaction']
  },
  {
    id: 'private-key',
    term: 'Clave Privada (Private Key)',
    category: 'Seguridad',
    shortDefinition: 'Número secreto matemático que autoriza el gasto o transferencia de fondos asociados a una dirección.',
    detailedExplanation: 'Funciona como la firma digital definitiva. Cualquier persona o programa que conozca la clave privada tiene control total e irrevocable sobre los fondos de esa dirección.',
    analogyExample: 'La llave física secreta de tu caja fuerte o la firma autógrafa legal de cheques.',
    importantNote: 'Nunca compartas tu clave privada con nadie, ni siquiera con supuestos soportes técnicos.',
    relatedTerms: ['Public Key', 'Seed Phrase', 'Firma Digital']
  },
  {
    id: 'public-key',
    term: 'Clave Pública (Public Key)',
    category: 'Seguridad',
    shortDefinition: 'Valor criptográfico derivado de la clave privada que permite verificar firmas matemáticas.',
    detailedExplanation: 'Cualquiera puede usar la clave pública para verificar que una transacción fue efectivamente firmada por el dueño de la clave privada correspondiente, sin revelar el secreto.',
    analogyExample: 'La cerradura pública que cualquiera puede ver, cuya combinación secreta solo tú posees.',
    importantNote: 'Las direcciones públicas suelen ser un hash compacto de la clave pública para ahorrar espacio y añadir seguridad.',
    relatedTerms: ['Private Key', 'Address', 'Criptografía Asimétrica']
  },
  {
    id: 'seed-phrase',
    term: 'Frase Semilla (Seed Phrase / Recovery Phrase)',
    category: 'Seguridad',
    shortDefinition: 'Secuencia de 12 a 24 palabras legibles que codifica la semilla maestra de una wallet.',
    detailedExplanation: 'Estandarizada por el protocolo BIP-39, permite regenerar todas las claves privadas y direcciones de una wallet en caso de pérdida, rotura o robo del dispositivo.',
    analogyExample: 'El código maestro de resurrección de tu caja fuerte grabado en palabras cotidianas.',
    importantNote: 'Quien tenga tu frase semilla tiene acceso absoluto a todas tus billeteras derivadas.',
    relatedTerms: ['Wallet', 'Private Key', 'BIP-39']
  },
  {
    id: 'node',
    term: 'Nodo (Node)',
    category: 'Arquitectura',
    shortDefinition: 'Computadora conectada a una red blockchain que ejecuta el software del protocolo.',
    detailedExplanation: 'Los nodos se comunican entre sí, transmiten bloques y transacciones, y auditan independientemente que cada operación cumpla rigurosamente con las reglas del protocolo.',
    analogyExample: 'Un juez de mesa en una competencia que comprueba con el reglamento oficial en mano cada jugada.',
    importantNote: 'Correr un nodo completo no requiere minar; permite verificar transacciones sin confiar en terceros.',
    relatedTerms: ['Full Node', 'Blockchain', 'Consensus']
  },
  {
    id: 'miner',
    term: 'Minero (Miner)',
    category: 'Consenso',
    shortDefinition: 'Participante en una red Proof of Work que dedica potencia computacional para validar bloques.',
    detailedExplanation: 'Agrupa transacciones válidas en candidatos de bloque y realiza billones de operaciones por segundo para encontrar un nonce que produzca un hash válido.',
    analogyExample: 'Un auditor contable en una carrera de velocidad que además resuelve acertijos de gran complejidad para ganar el derecho a sellar la página contable.',
    importantNote: 'Los mineros reciben recompensas de emisión y comisiones voluntarias de transacción.',
    relatedTerms: ['Mining', 'Proof of Work', 'Hashrate', 'ASIC']
  },
  {
    id: 'mining',
    term: 'Minería (Mining)',
    category: 'Consenso',
    shortDefinition: 'Proceso de validar transacciones y asegurar una red Proof of Work mediante cómputo matemático.',
    detailedExplanation: 'Garantiza la sincronización temporal y el orden inmutable de las operaciones, haciendo que reescribir el pasado sea inviable por requerir un costo energético colosal.',
    analogyExample: 'Sellar un archivo con cera caliente que requiere una fragua inmensa para ser fundida y reproducida.',
    importantNote: 'No crea dinero de la nada; es un mecanismo de sincronización que emite nuevas unidades según el cronograma fijado.',
    relatedTerms: ['Miner', 'Proof of Work', 'Dificultad']
  },
  {
    id: 'staking',
    term: 'Staking (Participación)',
    category: 'Consenso',
    shortDefinition: 'Comprometer criptomonedas como garantía económica para participar en la validación en Proof of Stake.',
    detailedExplanation: 'Los fondos se bloquean en un contrato o protocolo. Si el participante valida honestamente, recibe recompensas; si actúa maliciosamente, sufre un recorte (slashing).',
    analogyExample: 'Depositar una fianza de buena conducta profesional para poder arbitrar un partido oficial.',
    importantNote: 'El staking implica riesgos de liquidez (período de bloqueo) y riesgo de penalización si el nodo validador falla.',
    relatedTerms: ['Proof of Stake', 'Validator', 'Slashing']
  },
  {
    id: 'validator',
    term: 'Validador (Validator)',
    category: 'Consenso',
    shortDefinition: 'Entidad encargada de verificar y proponer bloques en sistemas basados en Proof of Stake.',
    detailedExplanation: 'Equivalente al minero en PoW, pero en lugar de hardware de alto consumo, su derecho a participar viene determinado por la cantidad de fondos propios o delegados en stake.',
    analogyExample: 'Un jurado electoral que ha depositado una garantía económica para certificar las urnas.',
    importantNote: 'Si un validador se desconecta por mucho tiempo o firma dos bloques contradictorios, es penalizado por la red.',
    relatedTerms: ['Staking', 'Proof of Stake', 'Slashing']
  },
  {
    id: 'consensus',
    term: 'Consenso (Consensus)',
    category: 'Consenso',
    shortDefinition: 'Mecanismo mediante el cual nodos independientes y desconfiados acuerdan un único estado verdadero del libro contable.',
    detailedExplanation: 'Resuelve el problema de los generales bizantinos en sistemas distribuidos, permitiendo que miles de máquinas dispersas coincidan sin necesidad de un líder central.',
    analogyExample: 'Una asamblea ciudadana sin presidente que sigue un protocolo estricto para acordar votaciones unánimes.',
    importantNote: 'Existen múltiples familias de consenso: PoW, PoS, PBFT, Raft, entre otros.',
    relatedTerms: ['Proof of Work', 'Proof of Stake', 'BFT']
  },
  {
    id: 'proof-of-work',
    term: 'Proof of Work (PoW)',
    category: 'Consenso',
    shortDefinition: 'Mecanismo de consenso basado en el gasto cuantificable de energía y potencia computacional.',
    detailedExplanation: 'Introducido en Bitcoin, exige a los nodos resolver acertijos hash difíciles de encontrar pero instantáneos de verificar por el resto de la red.',
    analogyExample: 'Presentar un examen resuelto paso a paso que costó semanas preparar, pero que el profesor corrige en segundos con una plantilla.',
    importantNote: 'Vincula la seguridad informática con el mundo físico de la energía y el hardware.',
    relatedTerms: ['Mining', 'Hashrate', 'Ajuste de Dificultad']
  },
  {
    id: 'proof-of-stake',
    term: 'Proof of Stake (PoS)',
    category: 'Consenso',
    shortDefinition: 'Mecanismo de consenso que selecciona creadores de bloques según la cantidad de monedas bloqueadas como fianza.',
    detailedExplanation: 'Reduce el consumo energético al reemplazar la fuerza bruta de cómputo por incentivos económicos y penalizaciones financieras programadas.',
    analogyExample: 'Una asamblea de accionistas donde la probabilidad de ser elegido presidente de mesa es proporcional a tu participación depositada en garantía.',
    importantNote: 'Ethereum adoptó Proof of Stake en septiembre de 2022 mediante el evento The Merge.',
    relatedTerms: ['Staking', 'Validator', 'Slashing']
  },
  {
    id: 'coin',
    term: 'Moneda (Coin)',
    category: 'Ecosistema',
    shortDefinition: 'Activo digital nativo que opera sobre su propia blockchain independiente.',
    detailedExplanation: 'Se utiliza como incentivo primario de consenso y para abonar las comisiones de transacción de la red (ejemplos: BTC en Bitcoin, ETH en Ethereum).',
    analogyExample: 'La moneda oficial emitida por un país soberano para circular dentro de su territorio.',
    importantNote: 'Difiere del token, el cual no tiene su propia blockchain sino que reside en una ajena.',
    relatedTerms: ['Token', 'Altcoin', 'Gas']
  },
  {
    id: 'token',
    term: 'Token',
    category: 'Ecosistema',
    shortDefinition: 'Unidad de valor digital creada sobre una blockchain existente mediante un contrato inteligente.',
    detailedExplanation: 'Pueden representar activos financieros, derechos de voto, puntos de fidelidad o certificados de propiedad (estándares comunes: ERC-20, ERC-721).',
    analogyExample: 'Fichas de un parque de atracciones que solo sirven dentro de sus atracciones, pero compradas usando la moneda del país.',
    importantNote: 'Para transferir un token, usualmente debes pagar gas con la moneda nativa de la blockchain donde vive.',
    relatedTerms: ['Coin', 'Smart Contract', 'ERC-20']
  },
  {
    id: 'altcoin',
    term: 'Altcoin',
    category: 'Ecosistema',
    shortDefinition: 'Cualquier criptomoneda que no sea Bitcoin.',
    detailedExplanation: 'Término surgido en los primeros años para referirse a monedas alternativas que introducían variaciones en algoritmos, velocidad o propósito.',
    analogyExample: 'Cualquier fabricante de teléfonos inteligentes que surgió después del primer modelo de referencia.',
    importantNote: 'Existen miles de altcoins con propósitos sumamente dispares, desde experimentos académicos hasta copias directas.',
    relatedTerms: ['Bitcoin', 'Ethereum', 'Token']
  },
  {
    id: 'stablecoin',
    term: 'Stablecoin (Moneda Estable)',
    category: 'Finanzas',
    shortDefinition: 'Criptomoneda diseñada para mantener un valor constante ligado a un activo de referencia (usualmente el dólar).',
    detailedExplanation: 'Busca minimizar la volatilidad del mercado cripto. Pueden estar respaldadas por dinero fiduciario en cuentas bancarias, criptomonedas sobrecolateralizadas o algoritmos.',
    analogyExample: 'Un vale de fichas de casino canjeable en taquilla en cualquier momento por exactamente 1 dólar en efectivo.',
    importantNote: 'No están exentas de riesgo: dependen de la solvencia del custodio, auditorías o la estabilidad del código.',
    relatedTerms: ['Colateral', 'DeFi', 'Peg']
  },
  {
    id: 'smart-contract',
    term: 'Smart Contract (Contrato Inteligente)',
    category: 'Arquitectura',
    shortDefinition: 'Programa informático inmutable que se ejecuta automáticamente cuando se cumplen condiciones predefinidas.',
    detailedExplanation: 'Alojado en una blockchain, ejecuta transacciones y cambios de estado de manera autónoma, transparente y determinista sin mediación de jueces o notarios.',
    analogyExample: 'Una máquina de bebidas: insertas la moneda exacta, presionas el botón y te entrega la lata sin intervención de un vendedor.',
    importantNote: 'Cualquier error o vulnerabilidad en el código no se puede corregir fácilmente si el contrato no fue diseñado con mecanismos de actualización.',
    relatedTerms: ['Ethereum', 'Solidity', 'DApp', 'EVM']
  },
  {
    id: 'dapp',
    term: 'DApp (Aplicación Descentralizada)',
    category: 'Ecosistema',
    shortDefinition: 'Aplicación informática cuyo backend opera principalmente sobre una red blockchain y contratos inteligentes.',
    detailedExplanation: 'Combina una interfaz de usuario tradicional (frontend web o móvil) con una lógica de backend descentralizada y billeteras para la autenticación.',
    analogyExample: 'Una aplicación web habitual donde tus datos y dinero no están guardados en los servidores de una empresa, sino en protocolos abiertos.',
    importantNote: 'La experiencia de usuario suele requerir firmar con una wallet cada interacción de escritura.',
    relatedTerms: ['Smart Contract', 'Web3', 'Wallet']
  },
  {
    id: 'defi',
    term: 'DeFi (Finanzas Descentralizadas)',
    category: 'Finanzas',
    shortDefinition: 'Ecosistema de protocolos financieros automatizados sobre blockchain sin intermediarios tradicionales.',
    detailedExplanation: 'Comprende plataformas de intercambio descentralizado (DEX), mercados de dinero y préstamos con colateral gestionados exclusivamente por software de código abierto.',
    analogyExample: 'Un sistema financiero operado completamente por engranajes de relojería matemática en vez de directores y sucursales bancarias.',
    importantNote: 'Ofrece alta transparencia pero expone al usuario a riesgos de liquidación y exploits en smart contracts.',
    relatedTerms: ['DEX', 'Liquidity', 'Colateral', 'Yield']
  },
  {
    id: 'nft',
    term: 'NFT (Token No Fungible)',
    category: 'Ecosistema',
    shortDefinition: 'Activo criptográfico único e indivisible que acredita la autenticidad y propiedad de un objeto digital o físico.',
    detailedExplanation: 'A diferencia de Bitcoin o el dinero (donde cada unidad es idéntica a otra), un NFT posee un identificador irrepetible registrado en un contrato inteligente.',
    analogyExample: 'Una entrada numerada para la final de un concierto con tu asiento específico asignado o el título original de una pintura.',
    importantNote: 'Tener el NFT demuestra la posesión del token de registro, lo cual no siempre confiere derechos de propiedad intelectual comerciales.',
    relatedTerms: ['Fungibilidad', 'ERC-721', 'Metadatos']
  },
  {
    id: 'web3',
    term: 'Web3',
    category: 'Ecosistema',
    shortDefinition: 'Visión de una internet descentralizada donde los usuarios son dueños de sus identidades, datos y activos.',
    detailedExplanation: 'Evolución de la Web 1.0 (lectura estática) y la Web 2.0 (plataformas centralizadas) hacia una infraestructura basada en blockchains y protocolos abiertos.',
    analogyExample: 'Pasar de alquilar un apartamento en un edificio corporativo a ser dueño de una parcela digital en una ciudad comunitaria.',
    importantNote: 'No existe una especificación estándar única; es un paradigma que engloba múltiples tecnologías.',
    relatedTerms: ['DApp', 'Smart Contract', 'Identidad Descentralizada']
  },
  {
    id: 'gas',
    term: 'Gas (Tarifa de Gas)',
    category: 'Arquitectura',
    shortDefinition: 'Unidad que mide el esfuerzo computacional requerido para procesar una transacción en una blockchain.',
    detailedExplanation: 'Evita bucles infinitos de código y compensa a los validadores por los recursos de cómputo y almacenamiento utilizados.',
    analogyExample: 'El combustible de un automóvil: trayectos más largos o pesados consumen más litros de carburante.',
    importantNote: 'Las tarifas varían dinámicamente según la congestión del tráfico en la red en cada momento.',
    relatedTerms: ['Gwei', 'Ethereum', 'Mempool']
  },
  {
    id: 'halving',
    term: 'Halving',
    category: 'Consenso',
    shortDefinition: 'Reducción periódica al 50% de la recompensa por bloque que reciben los mineros en Bitcoin.',
    detailedExplanation: 'Ocurre cada 210,000 bloques (aprox. 4 años). Controla matemáticamente la emisión de nuevas monedas hasta alcanzar el tope estricto de 21 millones.',
    analogyExample: 'Una mina de oro que por decreto natural entrega cada cuatro años exactamente la mitad de pepitas por cada jornada de extracción.',
    importantNote: 'No implica que tus monedas se dividan ni que el precio esté garantizado a duplicarse.',
    relatedTerms: ['Bitcoin', 'Mining', 'Incentivos']
  },
  {
    id: 'exchange',
    term: 'Exchange (Plataforma de Intercambio)',
    category: 'Finanzas',
    shortDefinition: 'Plataforma donde los usuarios pueden intercambiar criptomonedas entre sí o por dinero fiduciario.',
    detailedExplanation: 'Pueden ser centralizados (CEX, como empresas que custodian los fondos) o descentralizados (DEX, basados en pools de liquidez y contratos inteligentes).',
    analogyExample: 'Una casa de cambio de divisas en un aeropuerto.',
    importantNote: 'Mantener fondos en un exchange centralizado no es autocustodia; la empresa tiene el control de las llaves.',
    relatedTerms: ['CEX', 'DEX', 'Custodia']
  },
  {
    id: 'layer-1',
    term: 'Layer 1 (Capa 1)',
    category: 'Arquitectura',
    shortDefinition: 'La blockchain base principal sobre la que se asientan las transacciones y el consenso (ej. Bitcoin, Ethereum).',
    detailedExplanation: 'Es la capa fundacional que garantiza la seguridad, inmutabilidad y finalidad de las transacciones principales.',
    analogyExample: 'La autopista interestatal primaria de transporte de mercancías pesadas.',
    importantNote: 'A menudo sufre limitaciones de escalabilidad directa para mantener una alta descentralización.',
    relatedTerms: ['Layer 2', 'Blockchain', 'Trilema']
  },
  {
    id: 'layer-2',
    term: 'Layer 2 (Capa 2)',
    category: 'Arquitectura',
    shortDefinition: 'Protocolo secundario construido sobre una Layer 1 para procesar transacciones de forma más rápida y económica.',
    detailedExplanation: 'Ejemplos notables incluyen Lightning Network en Bitcoin y Rollups (Arbitrum, Optimism) en Ethereum, que agrupan transacciones fuera de la cadena principal y liquidan el resultado final en la Capa 1.',
    analogyExample: 'Una línea de tren de alta velocidad que desahoga el tráfico de la autopista principal.',
    importantNote: 'Heredan en gran medida la seguridad de la Capa 1 mientras descongestionan su memoria.',
    relatedTerms: ['Rollup', 'Lightning Network', 'Escalabilidad']
  },
  {
    id: 'dao',
    term: 'DAO (Organización Autónoma Descentralizada)',
    category: 'Ecosistema',
    shortDefinition: 'Organización comunitaria gobernada por reglas codificadas en contratos inteligentes y votos de miembros con tokens.',
    detailedExplanation: 'No tiene una jerarquía directiva tradicional; las decisiones sobre tesorería y cambios de protocolo se someten a propuestas y votaciones de sus titulares de tokens.',
    analogyExample: 'Una cooperativa global con votación electrónica instantánea donde la caja fuerte comunitaria solo se abre por veredicto computacional del quórum.',
    importantNote: 'Presenta desafíos de coordinación, participación y riesgos de concentración de poder si pocos titulares acumulan la mayoría de votos.',
    relatedTerms: ['Smart Contract', 'Gobernanza', 'Token']
  },
  {
    id: 'oracle',
    term: 'Oráculo (Oracle)',
    category: 'Arquitectura',
    shortDefinition: 'Servicio puente que suministra datos del mundo exterior real a los contratos inteligentes de una blockchain.',
    detailedExplanation: 'Las blockchains están aisladas por diseño de internet para mantener el determinismo. Los oráculos (como Chainlink) toman precios del mercado, clima o resultados deportivos y los firman para que los smart contracts puedan utilizarlos.',
    analogyExample: 'Un notario de confianza que consulta el periódico matutino y firma un testimonio verídico para entregárselo a un juez ciego.',
    importantNote: 'El "problema del oráculo" radica en asegurar que la fuente de datos externa no sea manipulada o corrompida.',
    relatedTerms: ['Smart Contract', 'DeFi', 'Chainlink']
  },
  {
    id: 'bridge',
    term: 'Puente (Bridge)',
    category: 'Arquitectura',
    shortDefinition: 'Protocolo que permite transferir datos, tokens o mensajes entre dos blockchains independientes.',
    detailedExplanation: 'Permite bloquear activos en una cadena de origen para emitir representaciones equivalentes (wrapped tokens) en una cadena de destino.',
    analogyExample: 'Un muelle de aduanas que custodia tu vehículo en un puerto y te entrega un vehículo equivalente en el continente vecino.',
    importantNote: 'Los puentes son sistemas altamente complejos y han sido históricamente el blanco preferido de ciberataques multimillonarios.',
    relatedTerms: ['Interoperabilidad', 'Cross-chain', 'Wrapped Token']
  },
  {
    id: 'liquidity',
    term: 'Liquidez (Liquidity)',
    category: 'Finanzas',
    shortDefinition: 'Facilidad con la que un activo puede cambiarse por otro sin provocar una alteración drástica de su precio.',
    detailedExplanation: 'En DeFi, la liquidez es aportada por usuarios en "pools de liquidez" (pares de reservas de tokens) contra los cuales opera un creador de mercado automatizado (AMM).',
    analogyExample: 'El caudal de agua en una tubería: un tubo ancho permite llenar baldes sin bajar la presión; un tubo angosto se vacía al menor intento.',
    importantNote: 'Baja liquidez provoca alto "deslizamiento" (slippage), encareciendo drásticamente las operaciones.',
    relatedTerms: ['Pool de Liquidez', 'DEX', 'AMM']
  },
  {
    id: 'protocol',
    term: 'Protocolo (Protocol)',
    category: 'Fundamentos',
    shortDefinition: 'Conjunto formal de reglas lógicas y estándares que gobiernan la comunicación y funcionamiento de una red.',
    detailedExplanation: 'Define cómo se formatean los mensajes, cómo se validan los bloques y cómo se penalizan o incentivan las acciones de los participantes.',
    analogyExample: 'El reglamento del fútbol o el protocolo TCP/IP de internet: si no cumples las reglas, la red no te escucha.',
    importantNote: 'El protocolo es neutral e impersonal: no discrimina a los usuarios por raza, nacionalidad o ideología.',
    relatedTerms: ['Consensus', 'Nodo', 'Blockchain']
  },
  {
    id: 'tokenomics',
    term: 'Tokenomics (Economía del Token)',
    category: 'Finanzas',
    shortDefinition: 'El diseño económico, reglas de emisión, distribución y utilidad de un criptoactivo.',
    detailedExplanation: 'Abarca factores como el suministro total (cap), el calendario de emisión, los períodos de desbloqueo (vesting), la tasa de inflación y los mecanismos de quema o incentivos.',
    analogyExample: 'El plan económico y monetario de un país que define cuántas monedas se acuñarán, quién las recibe y cómo se pagan los servicios públicos.',
    importantNote: 'Un token con una tecnología brillante pero una economía de emisión excesiva sufrirá devaluaciones estructurales continuas.',
    relatedTerms: ['Halving', 'Token', 'Emisión']
  }
];
