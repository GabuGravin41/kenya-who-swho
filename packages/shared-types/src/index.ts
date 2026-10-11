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
  | 'County Public Service Board Appointment'
  | 'Presidential Appointment (NPSC Recommendation)'
  | 'Competitive Search Panel / NA Approval';

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
  nominationType: 'Universal Primaries' | 'Direct Ticket' | 'Special Interest List' | 'Independent' | 'Universal Suffrage General Election';
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

export type HangoutCategory = 
  | 'Church / Place of Worship' 
  | 'Golf & Country Club' 
  | 'Private Members Club' 
  | 'Luxury Hotel Lounge & Bar' 
  | 'Whiskey & Political Saloon';

export interface EliteHangoutVenue {
  id: string;
  name: string;
  category: HangoutCategory;
  neighborhood: string; // e.g. Karen, Muthaiga, Upper Hill, CBD, Westlands, Kilimani
  city: string;
  frequentPatrons: Array<{
    name: string;
    role: string;
    factionOrAffiliation: string;
    politicianId?: string;
  }>;
  primeMeetingTimes: string; // e.g., "Sundays 09:30 - 13:00 (VIP Pews & Tea Terrace)"
  accessRequirements: {
    membershipFeeKes?: number;
    membershipVetting?: string; // e.g., "Requires 2 full member proposers + 3-stage vetting committee + balloting"
    publicAccessibility: 'Strictly Members Only' | 'Members & Accompanied Guests' | 'Open to Public (With Strict Dress Code & Security Screening)' | 'Reservation / Patron Purchase';
    dressCode: string; // e.g., "Smart Casual (Colared shirts, strictly no denim/sandals/caps)"
    entryFeeOrMinimumSpendKes?: number;
    protocolAndSecurityTips: string[];
  };
  politicalSignificance: string; // Why this space matters for power brokers and political backchannels
  coordinatesOrAddress: string;
  photoUrl: string;
}

// ----------------------------------------------------
// ROLL-CALL PARLIAMENTARY DIVISION VOTES
// ----------------------------------------------------
export type DivisionVotePosition = 'YES' | 'NO' | 'ABSTAIN' | 'ABSENT';

export type DivisionBillCode = 
  | 'FINANCE_BILL_2023' 
  | 'FINANCE_BILL_2024' 
  | 'GACHAGUA_IMPEACHMENT' 
  | 'HOUSING_LEVY_2024' 
  | 'SHIF_HEALTH_2023';

export interface DivisionBill {
  id: string;
  shortCode: DivisionBillCode;
  title: string;
  officialActReference: string;
  dateVoted: string;
  chamber: 'National Assembly' | 'Senate';
  outcome: 'Passed' | 'Rejected' | 'Withdrawn / Conceded by Executive';
  summary: string;
  publicImpactNote: string;
  totalYes: number;
  totalNo: number;
  totalAbstain: number;
  totalAbsent: number;
}

export interface PoliticianRollCallRecord {
  id: string;
  politicianId: string;
  politicianName: string;
  constituencyOrCounty: string;
  party: string;
  billShortCode: DivisionBillCode;
  billTitle: string;
  vote: DivisionVotePosition;
  voterBacklashRating: 'CRITICAL_BACKLASH' | 'STRONG_DISAPPROVAL' | 'COMMENDED_BY_PUBLIC' | 'NEUTRAL_OR_ABSENT';
  groundConsequenceSummary: string;
  hansardCitation: string;
}

// ----------------------------------------------------
// 2027 ELECTION CHALLENGERS & SWING SEAT MATRIX
// ----------------------------------------------------
export type SeatVulnerabilityTier = 
  | 'HOT_BATTLEGROUND_TOSSUP' 
  | 'LEAN_INCUMBENT' 
  | 'LEAN_OPPOSITION' 
  | 'SAFE_INCUMBENT' 
  | 'HIGH_RISK_OPEN_SEAT';

export interface DeclaredChallenger {
  id: string;
  name: string;
  aliases?: string[];
  constituencyId: string;
  prospectiveParty: string;
  coalitionAlignment: string;
  backgroundProfession: string;
  campaignWarChestEstKes: number;
  estimatedGroundMomentum: 'Surging' | 'Competitive' | 'Underdog' | 'Dark Horse';
  keyPlatformPromises: string[];
  notableEndorsements: string[];
  photoUrl: string;
}

export interface ConstituencyRaceOverview {
  id: string;
  constituencyId: string;
  constituencyName: string;
  countyName: string;
  registeredVoters: number;
  marginOfVictory2022Votes: number;
  vulnerabilityTier: SeatVulnerabilityTier;
  incumbentId: string;
  incumbentName: string;
  incumbentCurrentParty: string;
  incumbent2027Status: 'Defending Seat' | 'Vying for Governor' | 'Vying for Senator' | 'Facing Heavy Ground Resistance' | 'Retiring';
  genZBulgePercentage: number;
  topChallengers: DeclaredChallenger[];
  keyVoterIssues: string[];
  battlegroundAnalysis: string;
}


