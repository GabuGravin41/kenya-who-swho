import { DivisionBill, PoliticianRollCallRecord } from '@kenya-elections/shared-types';

export const ALL_DIVISION_BILLS: DivisionBill[] = [
  {
    id: 'bill-fb-2024',
    shortCode: 'FINANCE_BILL_2024',
    title: 'The Finance Bill 2024 (Second Reading Division)',
    officialActReference: 'National Assembly Bill No. 30 of 2024',
    dateVoted: '2024-06-20',
    chamber: 'National Assembly',
    outcome: 'Withdrawn / Conceded by Executive',
    summary: 'Controversial tax omnibus bill introducing 16% VAT on bread, motor vehicle circulation tax (2.5%), eco-levy on sanitary pads and electronics, and increased excise duties.',
    publicImpactNote: 'Triggered country-wide youth-led protests culminating in the breach of Parliament on 25 June 2024. President William Ruto ultimately declined to assent to the Bill and sent a memorandum rejecting it entirely.',
    totalYes: 204,
    totalNo: 115,
    totalAbstain: 0,
    totalAbsent: 30
  },
  {
    id: 'bill-fb-2023',
    shortCode: 'FINANCE_BILL_2023',
    title: 'The Finance Bill 2023 (Third Reading Division)',
    officialActReference: 'Finance Act No. 4 of 2023',
    dateVoted: '2023-06-21',
    chamber: 'National Assembly',
    outcome: 'Passed',
    summary: 'Enacted the mandatory 1.5% Affordable Housing Levy deduction, doubled VAT on petroleum products from 8% to 16%, and created 35% PAYE income tax band.',
    publicImpactNote: 'Catalyzed initial street protests by Azimio and legal challenges that declared the initial housing levy unconstitutional before revised enactment.',
    totalYes: 184,
    totalNo: 72,
    totalAbstain: 0,
    totalAbsent: 93
  },
  {
    id: 'bill-gachagua-impeachment',
    shortCode: 'GACHAGUA_IMPEACHMENT',
    title: 'Special Motion on Proposed Removal from Office of Deputy President Rigathi Gachagua',
    officialActReference: 'National Assembly Special Motion pursuant to Art. 145(1)',
    dateVoted: '2024-10-08',
    chamber: 'National Assembly',
    outcome: 'Passed',
    summary: 'Historic impeachment motion citing 11 grounds including gross violation of the Constitution, undermining national unity (shareholding government remarks), insubordination, and corrupt wealth acquisition.',
    publicImpactNote: 'Historic constitutional event: First time a sitting Deputy President was impeached by Parliament under the 2010 Constitution. 281 MPs voted to impeach, surpassing the required 233 two-thirds threshold.',
    totalYes: 281,
    totalNo: 44,
    totalAbstain: 1,
    totalAbsent: 23
  },
  {
    id: 'bill-housing-2024',
    shortCode: 'HOUSING_LEVY_2024',
    title: 'Affordable Housing Act 2024',
    officialActReference: 'Act No. 2 of 2024',
    dateVoted: '2024-03-12',
    chamber: 'National Assembly',
    outcome: 'Passed',
    summary: 'Re-introduced and codified the 1.5% gross salary deduction for formal employees and matching employer contribution, extended to non-salaried informal earners to cure High Court defect.',
    publicImpactNote: 'Strong public pushback on deductions amidst high cost of living; backed unanimously by government coalition whips.',
    totalYes: 141,
    totalNo: 54,
    totalAbstain: 0,
    totalAbsent: 154
  },
  {
    id: 'bill-shif-2023',
    shortCode: 'SHIF_HEALTH_2023',
    title: 'Social Health Insurance Act 2023 (Transition from NHIF to SHA)',
    officialActReference: 'Act No. 16 of 2023',
    dateVoted: '2023-10-17',
    chamber: 'National Assembly',
    outcome: 'Passed',
    summary: 'Dissolved the National Hospital Insurance Fund (NHIF) and established the Social Health Authority (SHA) with a mandatory 2.75% household gross income deduction.',
    publicImpactNote: 'Severe teething problems during hospital roll-out with cancer patients, dialysis patients, and private hospitals turning away patients due to unpaid claims.',
    totalYes: 168,
    totalNo: 62,
    totalAbstain: 0,
    totalAbsent: 119
  }
];

export const NOTABLE_ROLL_CALL_VOTES: PoliticianRollCallRecord[] = [
  // Kimani Ichung'wah (Majority Leader - Kikuyu)
  {
    id: 'rc-ichungwah-fb24',
    politicianId: 'pol-ichungwah',
    politicianName: 'Kimani Ichung\'wah',
    constituencyOrCounty: 'Kikuyu',
    party: 'UDA',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'YES',
    voterBacklashRating: 'CRITICAL_BACKLASH',
    groundConsequenceSummary: 'Spearheaded government whip for passage; faced fierce voter outrage and properties targeted during youth uprisings.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 44'
  },
  {
    id: 'rc-ichungwah-gachagua',
    politicianId: 'pol-ichungwah',
    politicianName: 'Kimani Ichung\'wah',
    constituencyOrCounty: 'Kikuyu',
    party: 'UDA',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'YES',
    voterBacklashRating: 'STRONG_DISAPPROVAL',
    groundConsequenceSummary: 'Voted yes to remove DP Rigathi Gachagua; triggered deep polarization within Mount Kenya electorate.',
    hansardCitation: 'Hansard Special Sitting Col. 112'
  },

  // Babu Owino (Embakasi East)
  {
    id: 'rc-babu-fb24',
    politicianId: 'pol-babu-owino',
    politicianName: 'Babu Owino (Paul Ongili)',
    constituencyOrCounty: 'Embakasi East',
    party: 'ODM',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'NO',
    voterBacklashRating: 'COMMENDED_BY_PUBLIC',
    groundConsequenceSummary: 'Fiery floor opposition, voted against all punitive tax clauses; celebrated by urban youth demographic.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 78'
  },
  {
    id: 'rc-babu-gachagua',
    politicianId: 'pol-babu-owino',
    politicianName: 'Babu Owino (Paul Ongili)',
    constituencyOrCounty: 'Embakasi East',
    party: 'ODM',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'ABSENT',
    voterBacklashRating: 'STRONG_DISAPPROVAL',
    groundConsequenceSummary: 'Deliberately abstained from the vote citing refusal to participate in regime factional battles.',
    hansardCitation: 'Hansard Special Sitting Col. 140'
  },

  // Oscar Sudi (Kapseret)
  {
    id: 'rc-sudi-fb24',
    politicianId: 'pol-oscar-sudi',
    politicianName: 'Oscar Kipchumba Sudi',
    constituencyOrCounty: 'Kapseret',
    party: 'UDA',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'YES',
    voterBacklashRating: 'CRITICAL_BACKLASH',
    groundConsequenceSummary: 'Voted yes despite recording zero floor contributions in debates; Timberland club in Eldoret vandalized during anti-tax unrest.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 91'
  },
  {
    id: 'rc-sudi-gachagua',
    politicianId: 'pol-sudi-gachagua',
    politicianName: 'Oscar Kipchumba Sudi',
    constituencyOrCounty: 'Kapseret',
    party: 'UDA',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'YES',
    voterBacklashRating: 'NEUTRAL_OR_ABSENT',
    groundConsequenceSummary: 'Voted vigorously to impeach DP Gachagua following open public exchanges over regional hegemony.',
    hansardCitation: 'Hansard Special Sitting Col. 96'
  },

  // Ndindi Nyoro (Kiharu)
  {
    id: 'rc-ndindi-fb24',
    politicianId: 'pol-ndindi-nyoro',
    politicianName: 'Ndindi Nyoro',
    constituencyOrCounty: 'Kiharu',
    party: 'UDA',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'YES',
    voterBacklashRating: 'STRONG_DISAPPROVAL',
    groundConsequenceSummary: 'Defended revenue mobilization as Budget & Appropriations chair, though struck a reconciliatory tone afterward.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 52'
  },
  {
    id: 'rc-ndindi-gachagua',
    politicianId: 'pol-ndindi-nyoro',
    politicianName: 'Ndindi Nyoro',
    constituencyOrCounty: 'Kiharu',
    party: 'UDA',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'ABSENT',
    voterBacklashRating: 'COMMENDED_BY_PUBLIC',
    groundConsequenceSummary: 'Strategically skipped the impeachment vote in solidarity with Mount Kenya constituency sentiment.',
    hansardCitation: 'Hansard Special Sitting Col. 138'
  },

  // Gathoni Wamuchomba (Githunguri)
  {
    id: 'rc-wamuchomba-fb24',
    politicianId: 'pol-wamuchomba',
    politicianName: 'Gathoni Wamuchomba',
    constituencyOrCounty: 'Githunguri',
    party: 'UDA',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'NO',
    voterBacklashRating: 'COMMENDED_BY_PUBLIC',
    groundConsequenceSummary: 'Defied ruling party whip and voted No on both 2023 and 2024 bills; hailed as hero by Githunguri farmers and civic activists.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 84'
  },
  {
    id: 'rc-wamuchomba-gachagua',
    politicianId: 'pol-wamuchomba',
    politicianName: 'Gathoni Wamuchomba',
    constituencyOrCounty: 'Githunguri',
    party: 'UDA',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'NO',
    voterBacklashRating: 'COMMENDED_BY_PUBLIC',
    groundConsequenceSummary: 'Voted against Gachagua impeachment; reinforced independent standing in Central Kenya.',
    hansardCitation: 'Hansard Special Sitting Col. 102'
  },

  // Phelix Odiwuor - Jalang'o (Lang'ata)
  {
    id: 'rc-jalango-fb24',
    politicianId: 'pol-jalango',
    politicianName: 'Phelix Odiwuor (Jalang\'o)',
    constituencyOrCounty: 'Lang\'ata',
    party: 'ODM (Rebel)',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'YES',
    voterBacklashRating: 'CRITICAL_BACKLASH',
    groundConsequenceSummary: 'Voted Yes with government side; prompted fierce social media rebuke and calls for recall in Lang\'ata constituency.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 104'
  },
  {
    id: 'rc-jalango-gachagua',
    politicianId: 'pol-jalango',
    politicianName: 'Phelix Odiwuor (Jalang\'o)',
    constituencyOrCounty: 'Lang\'ata',
    party: 'ODM (Rebel)',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'YES',
    voterBacklashRating: 'STRONG_DISAPPROVAL',
    groundConsequenceSummary: 'Voted Yes with ruling coalition, furthering distance from ODM party line.',
    hansardCitation: 'Hansard Special Sitting Col. 129'
  },

  // Opiyo Wandayi (Ugunja / Former Minority Leader, now CS Energy)
  {
    id: 'rc-wandayi-fb24',
    politicianId: 'pol-wandayi',
    politicianName: 'James Opiyo Wandayi',
    constituencyOrCounty: 'Ugunja',
    party: 'ODM (Joined Cabinet)',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'NO',
    voterBacklashRating: 'COMMENDED_BY_PUBLIC',
    groundConsequenceSummary: 'Led opposition bench in voting No before subsequently being nominated into broad-based Cabinet.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 46'
  },

  // Junet Mohamed (Suna East / Minority Leader)
  {
    id: 'rc-junet-fb24',
    politicianId: 'pol-junet-mohamed',
    politicianName: 'Junet Sheikh Nuh Mohamed',
    constituencyOrCounty: 'Suna East',
    party: 'ODM',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'NO',
    voterBacklashRating: 'COMMENDED_BY_PUBLIC',
    groundConsequenceSummary: 'Voted firmly against Finance Bill 2024, emphasizing burden on low income families.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 50'
  },
  {
    id: 'rc-junet-gachagua',
    politicianId: 'pol-junet-mohamed',
    politicianName: 'Junet Sheikh Nuh Mohamed',
    constituencyOrCounty: 'Suna East',
    party: 'ODM',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'YES',
    voterBacklashRating: 'STRONG_DISAPPROVAL',
    groundConsequenceSummary: 'Voted Yes in alignment with broad-based arrangement in Parliament.',
    hansardCitation: 'Hansard Special Sitting Col. 115'
  },

  // Didmus Barasa (Kimilili)
  {
    id: 'rc-didmus-fb24',
    politicianId: 'pol-didmus-barasa',
    politicianName: 'Didmus Wekesa Barasa',
    constituencyOrCounty: 'Kimilili',
    party: 'UDA',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'YES',
    voterBacklashRating: 'CRITICAL_BACKLASH',
    groundConsequenceSummary: 'Vocal defender of government measures; faced intense grassroots opposition in Bungoma county.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 88'
  },
  {
    id: 'rc-didmus-gachagua',
    politicianId: 'pol-didmus-barasa',
    politicianName: 'Didmus Wekesa Barasa',
    constituencyOrCounty: 'Kimilili',
    party: 'UDA',
    billShortCode: 'GACHAGUA_IMPEACHMENT',
    billTitle: 'Gachagua Impeachment Special Motion',
    vote: 'YES',
    voterBacklashRating: 'STRONG_DISAPPROVAL',
    groundConsequenceSummary: 'Tabled strong arguments supporting removal of Deputy President.',
    hansardCitation: 'Hansard Special Sitting Col. 120'
  },

  // George Aladwa (Makadara)
  {
    id: 'rc-aladwa-fb24',
    politicianId: 'pol-aladwa',
    politicianName: 'George Aladwa Omwera',
    constituencyOrCounty: 'Makadara',
    party: 'ODM',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'ABSENT',
    voterBacklashRating: 'CRITICAL_BACKLASH',
    groundConsequenceSummary: 'Absent during crucial vote despite zero parliamentary debate activity; heavily criticized in Eastlands Nairobi.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 110'
  },

  // Samuel Arama (Nakuru Town West)
  {
    id: 'rc-arama-fb24',
    politicianId: 'pol-arama',
    politicianName: 'Samuel Arama',
    constituencyOrCounty: 'Nakuru Town West',
    party: 'Jubilee / Ruling Ally',
    billShortCode: 'FINANCE_BILL_2024',
    billTitle: 'Finance Bill 2024 (2nd Reading)',
    vote: 'YES',
    voterBacklashRating: 'CRITICAL_BACKLASH',
    groundConsequenceSummary: 'Voted Yes with Kenya Kwanza side; faced hostility from trade unionists and town traders.',
    hansardCitation: 'Hansard Vol. 13-06 No. 58, Col. 95'
  }
];
