export interface ComparisonItem {
  feature: string;
  optionA: string;
  optionB: string;
}

export interface ComparisonSection {
  id: string;
  title: string;
  subtitle: string;
  nameA: string;
  nameB: string;
  summaryA: string;
  summaryB: string;
  items: ComparisonItem[];
  educationalNote: string;
}

export const COMPARISONS_DATA: ComparisonSection[] = [
  {
    id: 'btc-vs-eth',
    title: 'Bitcoin vs Ethereum',
    subtitle: 'Comparativa conceptual entre la reserva de valor descentralizada y la plataforma computacional programable.',
    nameA: 'Bitcoin (BTC)',
    nameB: 'Ethereum (ETH)',
    summaryA: 'Diseñado como dinero digital peer-to-peer con política monetaria estricta e inmutable de 21 millones.',
    summaryB: 'Diseñado como una computadora global descentralizada para ejecutar contratos inteligentes y DApps.',
    educationalNote: 'No compiten directamente por el mismo fin: Bitcoin busca ser el estándar de oro digital y liquidación contable robusta, mientras Ethereum es la infraestructura de software para aplicaciones autónomas.',
    items: [
      {
        feature: 'Propósito principal',
        optionA: 'Registro y transferencia descentralizada de valor (dinero digital)',
        optionB: 'Plataforma programable para contratos inteligentes y DApps'
      },
      {
        feature: 'Lenguaje y programabilidad',
        optionA: 'Scripting intencionalmente limitado y no Turing-completo (para maximizar seguridad)',
        optionB: 'Turing-completo (Solidity, Vyper en la máquina virtual EVM)'
      },
      {
        feature: 'Mecanismo de consenso',
        optionA: 'Proof of Work (PoW) con minería mediante potencia de cómputo y consumo de energía',
        optionB: 'Proof of Stake (PoS) con validadores y fondos en depósito (Staking)'
      },
      {
        feature: 'Tiempo promedio de bloque',
        optionA: '~10 minutos por bloque',
        optionB: '~12 segundos por slot'
      },
      {
        feature: 'Límite de suministro',
        optionA: 'Estrictamente fijo: máximo 21,000,000 BTC',
        optionB: 'Dinámico según actividad de red (mecanismo EIP-1559 con quema de comisiones)'
      }
    ]
  },
  {
    id: 'coin-vs-token',
    title: 'Coin (Moneda) vs Token',
    subtitle: 'La distinción arquitectónica esencial entre activos nativos de una blockchain y activos secundarios.',
    nameA: 'Coin (Moneda nativa)',
    nameB: 'Token',
    summaryA: 'El activo fundamental inherente a una blockchain independiente (ej. BTC, ETH, SOL).',
    summaryB: 'Un activo programado mediante un contrato inteligente alojado en una blockchain ajena (ej. UNI, LINK, USDT).',
    educationalNote: 'Para mover un token, casi siempre necesitas poseer la moneda nativa de esa blockchain para pagar el gas de la red.',
    items: [
      {
        feature: 'Infraestructura',
        optionA: 'Posee su propia blockchain y red de nodos independientes',
        optionB: 'Vive y se ejecuta dentro de una blockchain existente mediante smart contract'
      },
      {
        feature: 'Pago de comisiones (Gas)',
        optionA: 'Se utiliza directamente para pagar los costos de cómputo de la red',
        optionB: 'Generalmente no paga el gas de red; se debe pagar con la coin nativa anfitriona'
      },
      {
        feature: 'Creación y emisión',
        optionA: 'Definida a nivel de protocolo de consenso (minería o validación)',
        optionB: 'Definida por las funciones programadas en el contrato del creador'
      },
      {
        feature: 'Estándares comunes',
        optionA: 'Protocolo nativo base (Bitcoin Core, Geth, etc.)',
        optionB: 'Estándares estandarizados: ERC-20 (fungibles), ERC-721 (NFT)'
      }
    ]
  },
  {
    id: 'pow-vs-pos',
    title: 'Proof of Work vs Proof of Stake',
    subtitle: 'Comparativa entre los dos grandes paradigmas de consenso distribuido en la historia criptográfica.',
    nameA: 'Proof of Work (PoW)',
    nameB: 'Proof of Stake (PoS)',
    summaryA: 'Seguridad física y termodinámica respaldada por gasto de electricidad y hardware especializado.',
    summaryB: 'Seguridad económica respaldada por capital bloqueado en fianza y penalizaciones severas.',
    educationalNote: 'Ambos resuelven el problema de coordinación descentralizada pero con modelos de incentivos y huellas energéticas diametralmente opuestas.',
    items: [
      {
        feature: 'Participantes clave',
        optionA: 'Mineros con hardware especializado (ASICs, GPUs)',
        optionB: 'Validadores con nodos de servidor y fianza de capital'
      },
      {
        feature: 'Consumo energético',
        optionA: 'Alto: requiere billones de cálculos continuos por segundo',
        optionB: 'Mínimo: reduce el consumo energético en más de un 99.9%'
      },
      {
        feature: 'Defensa contra ataques',
        optionA: 'Un atacante debe controlar más del 51% del poder de cómputo físico mundial',
        optionB: 'Un atacante debe adquirir más del 51% o 66% de todo el capital en stake de la red'
      },
      {
        feature: 'Castigo a conductas maliciosas',
        optionA: 'El minero pierde el costo eléctrico invertido sin recibir recompensa',
        optionB: 'El protocolo destruye irrevocablemente los fondos bloqueados (Slashing)'
      }
    ]
  },
  {
    id: 'fiat-vs-crypto',
    title: 'Dinero Digital Tradicional vs Criptomonedas',
    subtitle: '¿Por qué el dinero bancario digital no es lo mismo que una criptomoneda descentralizada?',
    nameA: 'Dinero Tradicional Digital',
    nameB: 'Criptomonedas',
    summaryA: 'Anotaciones contables privadas en bases de datos de bancos comerciales y bancos centrales.',
    summaryB: 'Registros públicos en redes descentralizadas auditables por cualquier ciudadano.',
    educationalNote: 'El dinero fiat bancario puede ser censurado o bloqueado por decisión corporativa o judicial; las criptomonedas no permisionadas operan de manera neutral e inmutable.',
    items: [
      {
        feature: 'Emisor y control',
        optionA: 'Bancos centrales e instituciones financieras privadas',
        optionB: 'Protocolo de código abierto sin autoridad central'
      },
      {
        feature: 'Permisos de acceso',
        optionA: 'Permisionado: requiere documento de identidad, residencia y aprobación de cuenta',
        optionB: 'Sin permisos (Permissionless): basta con generar un par de claves matemáticas'
      },
      {
        feature: 'Custodia y control de fondos',
        optionA: 'El banco custodia los saldos y puede congelar o limitar transferencias',
        optionB: 'El usuario con autocustodia tiene control matemático absoluto con su clave privada'
      },
      {
        feature: 'Horario y liquidación',
        optionA: 'Sujeto a días hábiles bancarios, horarios de corte y demoras internacionales',
        optionB: 'Disponible 24/7/365 con liquidación directa en minutos a nivel global'
      }
    ]
  }
];
