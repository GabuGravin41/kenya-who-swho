export type PositionCategory = 
  | 'executive'
  | 'legislature'
  | 'county_executive'
  | 'county_assembly'
  | 'judiciary'
  | 'bureaucracy'
  | 'independent_commission';

export type PoliticalPosition =
  | 'president'
  | 'deputy_president'
  | 'cabinet_secretary'
  | 'principal_secretary'
  | 'governor'
  | 'deputy_governor'
  | 'senator'
  | 'nominated_senator'
  | 'mp'
  | 'nominated_mp'
  | 'women_rep'
  | 'mca'
  | 'nominated_mca'
  | 'chief_justice'
  | 'deputy_chief_justice'
  | 'county_director'
  | 'parastatal_chair'
  | 'parastatal_ceo'
  | 'aspirant';

export type ActivityTier = 
  | 'High Impact'
  | 'Active'
  | 'Moderate'
  | 'Passive'
  | 'Ghost/Silent';

export type AppointmentType =
  | 'Elected via Universal Suffrage'
  | 'Party List Nomination'
  | 'Presidential Appointment (National Assembly Approval)'
  | 'Presidential Direct Appointment'
  | 'Judicial Service Commission Appointment'
  | 'Public Service Commission Appointment'
  | 'County Public Service Board Appointment';

export interface County {
  id: string; // e.g., '001', '047'
  code: number; // 1 to 47
  name: string;
  formerProvince: string;
  capital: string;
  governorId?: string;
  senatorId?: string;
  womenRepId?: string;
  population: number;
  registeredVoters: number;
  annualEquitableShareKes: number; // in KES
  flagUrl?: string;
  overviewSummary: string;
}

export interface Constituency {
  id: string;
  countyId: string;
  code: string;
  name: string;
  currentMpId?: string;
  registeredVoters: number;
  ngCdfAllocationKes: number;
  overviewSummary: string;
}

export interface Ward {
  id: string;
  constituencyId: string;
  countyId: string;
  name: string;
  currentMcaId?: string;
  registeredVoters: number;
  wardFundAllocationKes: number;
}

export interface PoliticalParty {
  id: string;
  code: string;
  name: string;
  symbol: string;
  colorHex: string;
  partyLeader: string;
  coalition: string; // e.g., 'Kenya Kwanza', 'Azimio la Umoja', 'Independent'
  foundedYear: number;
  headquarters: string;
}

export interface Politician {
  id: string;
  name: string;
  aliases: string[];
  photoUrl: string;
  gender: 'Male' | 'Female' | 'Other';
  birthDate?: string;
  originCountyId: string;
  originConstituencyId?: string;
  
  // Current Office
  isIncumbent: boolean;
  currentPosition: PoliticalPosition;
  positionCategory: PositionCategory;
  officeHeldSince?: string;
  representedCountyId?: string;
  representedConstituencyId?: string;
  representedWardId?: string;
  
  // Party & Nomination
  partyId: string;
  coalition: string;
  nominationType: 'Universal Primaries' | 'Direct Ticket' | 'Special Interest List' | 'Independent';
  nominatedBy?: string; // Who gave ticket or endorsed
  partyHoppingHistory: Array<{
    party: string;
    fromYear: number;
    toYear: number;
    notes?: string;
  }>;

  // Next Election Intentions (2027 cycle)
  vyingForPosition?: PoliticalPosition;
  vyingCountyId?: string;
  vyingConstituencyId?: string;
  vyingWardId?: string;
  vyingPartyId?: string;
  campaignSlogan?: string;
  estimatedSupportersCount: number;
  latestPollScorePercentage: number;
  publicSentimentRating: number; // 0 to 100

  // Background Dossier
  originStory: string;
  educationSummary: string[];
  careerHistory: string[];
  declaredAssetsSummary?: string;
  keyAllies: string[];
  knownRivals: string[];
}

export interface PoliticianScorecard {
  id: string;
  politicianId: string;
  evaluationPeriod: string; // e.g. "2022 - Present"
  hansardSpeechCount: number;
  billsSponsoredCount: number;
  billsPassedCount: number;
  motionsTabledCount: number;
  committeeAttendancePercentage: number;
  floorAttendancePercentage: number;
  activityTier: ActivityTier;
  overallDeliveryScore: number; // 0 - 100
  notableContributions: string[];
  zeroActivityFlag: boolean; // True for members like Oscar Sudi who recorded zero floor speeches
  flagExplanation?: string;
  auditorGeneralFlagsCount: number;
  reportedScandals: Array<{
    title: string;
    year: number;
    agency: string;
    amountKes?: number;
    description: string;
    status: 'Alleged' | 'Under Investigation' | 'Court Case' | 'Cleared' | 'Convicted';
  }>;
}

export interface BureaucracyNode {
  id: string;
  title: string;
  branch: 'Executive' | 'Judiciary' | 'Independent Commission' | 'County Administration';
  departmentMinistry: string;
  holderName: string;
  holderPhotoUrl: string;
  holderPoliticianId?: string;
  appointmentType: AppointmentType;
  appointingAuthority: string; // e.g., "President of Kenya upon NA Approval"
  appointingLawArticle: string; // e.g., "Constitution Art. 152(2)"
  dateAssumedOffice: string;
  annualBudgetOversightKes: number;
  mandateOverview: string;
  accountabilityHotlineOrEmail?: string;
  isPoliticalAspirant: boolean;
  futureVyingTarget?: string;
}

export interface BudgetAllocation {
  id: string;
  entityType: 'County' | 'Constituency' | 'Ward';
  entityId: string;
  fiscalYear: string; // e.g. "2024/2025"
  fundName: 'NG-CDF' | 'Equitable Share' | 'Equalization Fund' | 'Own Source Revenue' | 'Ward Development';
  allocatedAmountKes: number;
  disbursedAmountKes: number;
  absorptionRatePercentage: number;
  auditRating: 'Unqualified (Clean)' | 'Qualified' | 'Adverse' | 'Disclaimer of Opinion';
  flaggedExpendituresKes: number;
  topFundedProjects: Array<{
    projectName: string;
    sector: 'Education' | 'Security' | 'Health' | 'Roads' | 'Water';
    allocatedKes: number;
    status: 'Completed' | 'Ongoing' | 'Stalled' | 'Ghost Project';
  }>;
}

export interface PowerBroker {
  id: string;
  name: string;
  aliasOrTitle: string;
  originRegion: string;
  estimatedNetWorthKes: number;
  primarySectors: string[]; // e.g., Banking, Agriculture, Real Estate, Media, Logistics
  flagshipCompanies: string[];
  associatedPoliticalFactions: string[];
  familyDynasty?: string; // e.g., "Kenyatta Family", "Moi Family"
  notableStateTenders: string[];
  influenceSummary: string;
  photoUrl: string;
}

export interface CrowdIntelligenceLog {
  id: string;
  politicianId?: string;
  constituencyId?: string;
  countyId?: string;
  category: 'Rally Report' | 'Development Proof' | 'Scandal Alert' | 'Broken Promise' | 'Floor Inaction' | 'Bribery Claim';
  title: string;
  description: string;
  authorAlias: string;
  location: string;
  evidenceLinks: string[];
  verifiedStatus: 'Verified by Field Observers' | 'Crowd Corroborated' | 'Pending Verification' | 'Debunked';
  upvotes: number;
  downvotes: number;
  createdAt: string;
}

export interface CivicStatsSummary {
  totalCounties: number;
  totalConstituencies: number;
  totalWards: number;
  totalMonitoredPoliticians: number;
  totalIncumbents: number;
  totalAspirants: number;
  silentPoliticiansCount: number; // e.g., zero speeches
  totalNgCdfAllocationsKes: number;
  totalCrowdReportsVerified: number;
}
