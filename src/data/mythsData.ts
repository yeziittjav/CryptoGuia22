export interface MythItem {
  id: string;
  myth: string;
  reality: string;
  category: string;
  detail: string;
}

export const MYTHS_DATA: MythItem[] = [
  {
    id: 'm-1',
    category: 'Privacidad',
    myth: 'Todas las criptomonedas son completamente anónimas y no rastreables.',
    reality: 'La mayoría de blockchains son pseudónimas y completamente transparentes.',
    detail: 'En redes como Bitcoin y Ethereum, todas las transacciones, saldos y direcciones quedan grabadas para siempre en un libro contable público. Si una dirección se vincula a una identidad real (por ejemplo, en un exchange con verificación de identidad), todo su historial financiero puede ser rastreado mediante análisis forense on-chain.'
  },
  {
    id: 'm-2',
    category: 'Conceptos',
    myth: 'Blockchain y Bitcoin son exactamente la misma cosa.',
    reality: 'Bitcoin utiliza blockchain, pero blockchain es una tecnología aplicable a muchos otros campos.',
    detail: 'Bitcoin fue la primera aplicación práctica exitosa de una cadena de bloques. Sin embargo, la tecnología blockchain se utiliza hoy en plataformas de computación distribuida, trazabilidad de suministros, certificados de autenticidad y sistemas de votación descentralizada.'
  },
  {
    id: 'm-3',
    category: 'Tecnología',
    myth: 'Todas las criptomonedas funcionan con el mismo diseño y reglas.',
    reality: 'Existen arquitecturas, algoritmos de consenso y propósitos radicalmente distintos.',
    detail: 'Mientras Bitcoin prioriza la máxima seguridad y simplicidad conservadora con Proof of Work, Ethereum ejecuta contratos inteligentes Turing-completos con Proof of Stake, y otras redes utilizan grafos dirigidos o mecanismos híbridos adaptados a casos específicos.'
  },
  {
    id: 'm-4',
    category: 'Seguridad',
    myth: 'Una wallet contiene físicamente las criptomonedas en tu teléfono u ordenador.',
    reality: 'Las billeteras únicamente administran las claves criptográficas de acceso.',
    detail: 'Las monedas nunca salen de la blockchain. Tu dispositivo móvil o hardware wallet solo almacena las llaves matemáticas privadas que te permiten firmar transacciones autorizando movimientos en el registro contable universal.'
  },
  {
    id: 'm-5',
    category: 'Economía',
    myth: 'Las criptomonedas garantizan enriquecerse rápidamente sin esfuerzo.',
    reality: 'Son activos experimentales y volátiles de alto riesgo tecnológico y financiero.',
    detail: 'Cualquier promesa de rentabilidad garantizada o riqueza instantánea en el ecosistema cripto suele ser una señal flagrante de fraude piramidal o estafa. El verdadero valor de la tecnología radica en su innovación computacional y descentralización.'
  },
  {
    id: 'm-6',
    category: 'Consumo',
    myth: 'Toda la tecnología blockchain destruye el medio ambiente con consumo excesivo.',
    reality: 'Solo los sistemas basados en Proof of Work consumen energía intensiva, y la mayoría ha evolucionado.',
    detail: 'Tras la transición de Ethereum a Proof of Stake (The Merge) y la aparición de nuevas blockchains modernas, el consumo de energía en los protocolos programables se ha reducido en más de un 99.9%, operando con requerimientos energéticos similares a los de un servidor web ordinario.'
  }
];
