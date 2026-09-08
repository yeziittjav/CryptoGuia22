import { HistoryEvent } from '../types';

export const TIMELINE_DATA: HistoryEvent[] = [
  {
    year: '1982 - 2007',
    period: 'Antes de Bitcoin',
    title: 'Los pioneros del dinero digital y la criptografía',
    description: 'David Chaum publica ideas sobre efectivo digital anónimo (DigiCash). Adam Back introduce Hashcash (PoW). Nick Szabo conceptualiza "Bit Gold" y Wei Dai propone "b-money", sentando las bases teóricas de la escasez digital.',
    significance: 'Demostró que la criptografía asimétrica y la prueba de trabajo podían resolver problemas de autenticidad digital.',
    badge: 'Orígenes teóricos'
  },
  {
    year: '2008',
    period: 'El documento fundacional',
    title: 'Publicación del Whitepaper de Bitcoin',
    description: 'En plena crisis financiera mundial por el colapso de las hipotecas subprime, Satoshi Nakamoto publica "Bitcoin: A Peer-to-Peer Electronic Cash System" en la lista de correo de criptografía.',
    significance: 'Resuelve por primera vez en la computación el problema del doble gasto sin un servidor central de confianza.',
    badge: 'Hito histórico'
  },
  {
    year: '2009',
    period: 'Génesis de la red',
    title: 'Lanzamiento del Bloque 0 (Bloque Génesis)',
    description: 'El 3 de enero de 2009, Satoshi Nakamoto mina el primer bloque de la red Bitcoin, incrustando el titular del periódico The Times: "Chancellor on brink of second bailout for banks". El 12 de enero se realiza la primera transferencia a Hal Finney.',
    significance: 'Comienza formalmente el funcionamiento ininterrumpido de la red Bitcoin.',
    badge: 'Bloque Génesis'
  },
  {
    year: '2015',
    period: 'La revolución programable',
    title: 'Nacimiento de Ethereum y los Smart Contracts',
    description: 'Vitalik Buterin y un grupo de desarrolladores lanzan Ethereum, incorporando la Ethereum Virtual Machine (EVM). La blockchain deja de ser solo un libro contable para convertirse en una computadora mundial capaz de ejecutar aplicaciones.',
    significance: 'Permite la creación de tokens, finanzas programadas y organizaciones autónomas.',
    badge: 'Computación descentralizada'
  },
  {
    year: '2017 - 2020',
    period: 'Maduración del ecosistema',
    title: 'Stablecoins, DeFi Summer y estándares de Tokens',
    description: 'Adopción masiva de estándares como ERC-20 para tokens y ERC-721 para NFTs. Nacen protocolos financieros automatizados como MakerDAO, Uniswap y Aave, dando inicio a las finanzas descentralizadas.',
    significance: 'Surgimiento de un sistema financiero alternativo gobernado por código de código abierto.',
    badge: 'DeFi y Tokens'
  },
  {
    year: '2022',
    period: 'La gran transición ecológica',
    title: 'The Merge: Ethereum adopta Proof of Stake',
    description: 'Ethereum sustituye con éxito la minería de alto consumo energético por el consenso de participación (PoS), reduciendo su consumo eléctrico en más del 99.9% sin interrumpir el funcionamiento de la red en producción.',
    significance: 'La mayor actualización de infraestructura en vivo en la historia del software libre.',
    badge: 'The Merge'
  },
  {
    year: '2023 - Presente',
    period: 'Escalabilidad masiva',
    title: 'La era de las Capas 2 (Rollups) y la madurez regulatoria',
    description: 'Las soluciones de escalabilidad de Layer 2 (Optimism, Arbitrum, ZK-Rollups) procesan la mayoría de transacciones con costos insignificantes, mientras marcos regulatorios como MiCA en Europa buscan brindar claridad legal.',
    significance: 'Transición hacia la adopción cotidiana y la escalabilidad global sin perder seguridad.',
    badge: 'Escalabilidad global'
  }
];
