import { PoliticianScorecard } from '@kenya-elections/shared-types';

export const ALL_POLITICIAN_SCORECARDS: PoliticianScorecard[] = [
  // 1. Oscar Sudi (Kapseret) - Zero Hansard Flagship Case
  {
    id: 'sc-sudi',
    politicianId: 'p-sudi',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 0,
    billsSponsoredCount: 0,
    billsPassedCount: 0,
    motionsTabledCount: 0,
    committeeAttendancePercentage: 14,
    floorAttendancePercentage: 22,
    activityTier: 'Ghost/Silent',
    overallDeliveryScore: 18,
    notableContributions: ['Weekend political rally speeches in Rift Valley; zero official floor speeches in plenary sessions.'],
    zeroActivityFlag: true,
    flagExplanation: 'Official National Assembly Hansard records confirm zero spoken debates, motions, or statements delivered on the floor of the House throughout the 13th Parliament. Never sponsored a public bill.',
    auditorGeneralFlagsCount: 7,
    reportedScandals: [
      {
        title: 'Academic Credentials Forgery Case',
        year: 2016,
        agency: 'Ethics and Anti-Corruption Commission (EACC)',
        description: 'Charged with forging a diploma in Business Management from KIM and KCSE certificate from Highway Secondary School.',
        status: 'Cleared'
      },
      {
        title: 'Kapseret NG-CDF Vocational Center Stalled Works',
        year: 2023,
        agency: 'Auditor General of Kenya',
        amountKes: 42000000,
        description: 'Auditor General flagged unvouched payments and delayed works in multi-million vocational training center tenders.',
        status: 'Under Investigation'
      }
    ]
  },

  // 2. George Aladwa (Makadara) - Documented Silent Plenary Record
  {
    id: 'sc-aladwa',
    politicianId: 'p-aladwa',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 2,
    billsSponsoredCount: 0,
    billsPassedCount: 0,
    motionsTabledCount: 0,
    committeeAttendancePercentage: 35,
    floorAttendancePercentage: 42,
    activityTier: 'Ghost/Silent',
    overallDeliveryScore: 28,
    notableContributions: ['Grassroots football tournaments and ODM Nairobi county branch mobilization.'],
    zeroActivityFlag: true,
    flagExplanation: 'Mzalendo Parliamentary Scorecard ranks among the quietest members of the 13th Parliament with fewer than 3 spoken plenary contributions.',
    auditorGeneralFlagsCount: 3,
    reportedScandals: []
  },

  // 3. Samuel Arama (Nakuru Town West) - Low Plenary Index
  {
    id: 'sc-arama',
    politicianId: 'p-arama',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 4,
    billsSponsoredCount: 0,
    billsPassedCount: 0,
    motionsTabledCount: 1,
    committeeAttendancePercentage: 38,
    floorAttendancePercentage: 45,
    activityTier: 'Ghost/Silent',
    overallDeliveryScore: 31,
    notableContributions: ['Local bursary allocations in Nakuru West.'],
    zeroActivityFlag: true,
    flagExplanation: 'Documented by parliamentary monitors among members with near-zero legislative floor output.',
    auditorGeneralFlagsCount: 4,
    reportedScandals: [
      {
        title: 'Nakuru Land Fraud Case',
        year: 2022,
        agency: 'Ethics and Anti-Corruption Commission (EACC)',
        amountKes: 60000000,
        description: 'Convicted of conspiracy to defraud a prime public plot in Nakuru, later sentenced to fine.',
        status: 'Court Case'
      }
    ]
  },

  // 4. Kimani Ichung'wah (Kikuyu) - Majority Leader (High Impact)
  {
    id: 'sc-ichungwah',
    politicianId: 'p-ichungwah',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 412,
    billsSponsoredCount: 18,
    billsPassedCount: 11,
    motionsTabledCount: 29,
    committeeAttendancePercentage: 88,
    floorAttendancePercentage: 92,
    activityTier: 'High Impact',
    overallDeliveryScore: 84,
    notableContributions: [
      'Piloted the Affordable Housing Act 2024 through parliamentary committee stages and third reading.',
      'Steered Government legislative business and annual Appropriations Acts.',
      'Sponsored NG-CDF Act amendments to expand bursary ceilings.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 2,
    reportedScandals: [
      {
        title: 'Northlands Estate Breach Probe',
        year: 2023,
        agency: 'Directorate of Criminal Investigations (DCI)',
        description: 'Questioned over inflammatory political speeches preceding the unauthorized invasion of the Kenyatta Northlands farm.',
        status: 'Alleged'
      }
    ]
  },

  // 5. Ndindi Nyoro (Kiharu) - Budget & Appropriations Committee Chair (High Impact)
  {
    id: 'sc-nyoro',
    politicianId: 'p-ndindi-nyoro',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 285,
    billsSponsoredCount: 6,
    billsPassedCount: 4,
    motionsTabledCount: 16,
    committeeAttendancePercentage: 94,
    floorAttendancePercentage: 90,
    activityTier: 'High Impact',
    overallDeliveryScore: 89,
    notableContributions: [
      'Chaired Budget & Appropriations Committee managing annual KES 3.9 Trillion national budget scrutiny.',
      'Re-engineered Kiharu NG-CDF into national benchmark: tiled floors in all 112 public schools, KES 1,000 day secondary school subsidized fees program.',
      'Introduced comprehensive school feeding programs in rural schools.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 0,
    reportedScandals: []
  },

  // 6. Babu Owino (Embakasi East) - Active
  {
    id: 'sc-babu',
    politicianId: 'p-babu-owino',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 168,
    billsSponsoredCount: 3,
    billsPassedCount: 1,
    motionsTabledCount: 8,
    committeeAttendancePercentage: 74,
    floorAttendancePercentage: 81,
    activityTier: 'Active',
    overallDeliveryScore: 78,
    notableContributions: [
      'Sponsored HELB Amendment Bill to waive compound interest penalties on unemployed youth.',
      'Pioneered free high school online STEM revision masterclasses for KCSE candidates nationwide.',
      'Constructed state-of-the-art multi-storey public primary school blocks in Embakasi East.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 1,
    reportedScandals: [
      {
        title: 'DJ Evolve Shooting Case',
        year: 2020,
        agency: 'Office of the Director of Public Prosecutions (ODPP)',
        description: 'Alternative dispute resolution and medical rehabilitation financing agreement.',
        status: 'Cleared'
      }
    ]
  },

  // 7. Okiya Omtatah Okoiti (Busia Senator) - Highest Legislative Delivery Rating
  {
    id: 'sc-omtatah',
    politicianId: 'p-omtatah',
    evaluationPeriod: '4th Senate (2022 - Present)',
    hansardSpeechCount: 275,
    billsSponsoredCount: 5,
    billsPassedCount: 2,
    motionsTabledCount: 19,
    committeeAttendancePercentage: 96,
    floorAttendancePercentage: 95,
    activityTier: 'High Impact',
    overallDeliveryScore: 92,
    notableContributions: [
      'Consistently ranked top-performing Senator in legislative fidelity and public resource vigilance.',
      'Tabled forensic audits exposing fictitious foreign loans and unconstitutional national debt servicing.',
      'Challenged unconstitutional state levies in the High Court and Supreme Court.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 0,
    reportedScandals: []
  },

  // 8. Edwin Sifuna (Nairobi Senator) - High Impact
  {
    id: 'sc-sifuna',
    politicianId: 'p-sifuna',
    evaluationPeriod: '4th Senate (2022 - Present)',
    hansardSpeechCount: 310,
    billsSponsoredCount: 4,
    billsPassedCount: 1,
    motionsTabledCount: 14,
    committeeAttendancePercentage: 91,
    floorAttendancePercentage: 89,
    activityTier: 'High Impact',
    overallDeliveryScore: 82,
    notableContributions: [
      'Interrogated Nairobi City County executive over KES 100M legal fee expenditures and uncollected garbage crisis.',
      'Tabled motions investigating water rationing cartels in Nairobi Eastlands.',
      'Co-chaired Bipartisan Talks Committee on electoral and cost-of-living reforms.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 0,
    reportedScandals: []
  },

  // 9. Millie Odhiambo (Suba North) - High Impact Lawmaker
  {
    id: 'sc-millie',
    politicianId: 'p-millie',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 380,
    billsSponsoredCount: 7,
    billsPassedCount: 3,
    motionsTabledCount: 21,
    committeeAttendancePercentage: 89,
    floorAttendancePercentage: 92,
    activityTier: 'High Impact',
    overallDeliveryScore: 86,
    notableContributions: [
      'Sponsored the Assisted Reproductive Technology Bill and Victim Protection Act updates.',
      'Top female contributor in National Assembly debates for consecutive terms.',
      'Island water transport safety oversight for Lake Victoria fishing communities.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 1,
    reportedScandals: []
  },

  // 10. Junet Mohamed (Suna East) - Minority Leader
  {
    id: 'sc-junet',
    politicianId: 'p-junet',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 240,
    billsSponsoredCount: 4,
    billsPassedCount: 2,
    motionsTabledCount: 18,
    committeeAttendancePercentage: 84,
    floorAttendancePercentage: 88,
    activityTier: 'High Impact',
    overallDeliveryScore: 80,
    notableContributions: [
      'Appointed Leader of the Minority Party in 2024 following the broad-based cabinet reorganization.',
      'Steered opposition oversight on tax measures and executive oversight.',
      'Key architect of bipartisan parliamentary initiatives.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 1,
    reportedScandals: []
  }
];
