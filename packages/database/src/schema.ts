import { pgTable, text, integer, boolean, timestamp, jsonb, numeric } from 'drizzle-orm/pg-core';

export const counties = pgTable('counties', {
  id: text('id').primaryKey(), // '001', '047'
  code: integer('code').notNull().unique(),
  name: text('name').notNull(),
  formerProvince: text('former_province').notNull(),
  capital: text('capital').notNull(),
  governorId: text('governor_id'),
  senatorId: text('senator_id'),
  womenRepId: text('women_rep_id'),
  population: integer('population').notNull().default(0),
  registeredVoters: integer('registered_voters').notNull().default(0),
  annualEquitableShareKes: numeric('annual_equitable_share_kes').notNull().default('0'),
  flagUrl: text('flag_url'),
  overviewSummary: text('overview_summary').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const constituencies = pgTable('constituencies', {
  id: text('id').primaryKey(),
  countyId: text('county_id').notNull().references(() => counties.id),
  code: text('code').notNull(),
  name: text('name').notNull(),
  currentMpId: text('current_mp_id'),
  registeredVoters: integer('registered_voters').notNull().default(0),
  ngCdfAllocationKes: numeric('ng_cdf_allocation_kes').notNull().default('0'),
  overviewSummary: text('overview_summary').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const wards = pgTable('wards', {
  id: text('id').primaryKey(),
  constituencyId: text('constituency_id').notNull().references(() => constituencies.id),
  countyId: text('county_id').notNull().references(() => counties.id),
  name: text('name').notNull(),
  currentMcaId: text('current_mca_id'),
  registeredVoters: integer('registered_voters').notNull().default(0),
  wardFundAllocationKes: numeric('ward_fund_allocation_kes').notNull().default('0'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const politicalParties = pgTable('political_parties', {
  id: text('id').primaryKey(),
  code: text('code').notNull().unique(),
  name: text('name').notNull(),
  symbol: text('symbol').notNull(),
  colorHex: text('color_hex').notNull(),
  partyLeader: text('party_leader').notNull(),
  coalition: text('coalition').notNull(),
  foundedYear: integer('founded_year').notNull(),
  headquarters: text('headquarters').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const politicians = pgTable('politicians', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  aliases: jsonb('aliases').$type<string[]>().notNull().default([]),
  photoUrl: text('photo_url').notNull(),
  gender: text('gender').notNull(),
  birthDate: text('birth_date'),
  originCountyId: text('origin_county_id').notNull(),
  originConstituencyId: text('origin_constituency_id'),
  
  isIncumbent: boolean('is_incumbent').notNull().default(false),
  currentPosition: text('current_position').notNull(),
  positionCategory: text('position_category').notNull(),
  officeHeldSince: text('office_held_since'),
  representedCountyId: text('represented_county_id'),
  representedConstituencyId: text('represented_constituency_id'),
  representedWardId: text('represented_ward_id'),

  partyId: text('party_id').notNull(),
  coalition: text('coalition').notNull(),
  nominationType: text('nomination_type').notNull(),
  nominatedBy: text('nominated_by'),
  partyHoppingHistory: jsonb('party_hopping_history').$type<Array<{
    party: string;
    fromYear: number;
    toYear: number;
    notes?: string;
  }>>().notNull().default([]),

  vyingForPosition: text('vying_for_position'),
  vyingCountyId: text('vying_county_id'),
  vyingConstituencyId: text('vying_constituency_id'),
  vyingWardId: text('vying_ward_id'),
  vyingPartyId: text('vying_party_id'),
  campaignSlogan: text('campaign_slogan'),
  estimatedSupportersCount: integer('estimated_supporters_count').notNull().default(0),
  latestPollScorePercentage: numeric('latest_poll_score_percentage').notNull().default('0'),
  publicSentimentRating: integer('public_sentiment_rating').notNull().default(50),

  originStory: text('origin_story').notNull(),
  educationSummary: jsonb('education_summary').$type<string[]>().notNull().default([]),
  careerHistory: jsonb('career_history').$type<string[]>().notNull().default([]),
  declaredAssetsSummary: text('declared_assets_summary'),
  keyAllies: jsonb('key_allies').$type<string[]>().notNull().default([]),
  knownRivals: jsonb('known_rivals').$type<string[]>().notNull().default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const scorecards = pgTable('politician_scorecards', {
  id: text('id').primaryKey(),
  politicianId: text('politician_id').notNull().references(() => politicians.id),
  evaluationPeriod: text('evaluation_period').notNull(),
  hansardSpeechCount: integer('hansard_speech_count').notNull().default(0),
  billsSponsoredCount: integer('bills_sponsored_count').notNull().default(0),
  billsPassedCount: integer('bills_passed_count').notNull().default(0),
  motionsTabledCount: integer('motions_tabled_count').notNull().default(0),
  committeeAttendancePercentage: integer('committee_attendance_percentage').notNull().default(0),
  floorAttendancePercentage: integer('floor_attendance_percentage').notNull().default(0),
  activityTier: text('activity_tier').notNull(),
  overallDeliveryScore: integer('overall_delivery_score').notNull().default(0),
  notableContributions: jsonb('notable_contributions').$type<string[]>().notNull().default([]),
  zeroActivityFlag: boolean('zero_activity_flag').notNull().default(false),
  flagExplanation: text('flag_explanation'),
  auditorGeneralFlagsCount: integer('auditor_general_flags_count').notNull().default(0),
  reportedScandals: jsonb('reported_scandals').$type<Array<{
    title: string;
    year: number;
    agency: string;
    amountKes?: number;
    description: string;
    status: string;
  }>>().notNull().default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const bureaucracyNodes = pgTable('bureaucracy_nodes', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  branch: text('branch').notNull(),
  departmentMinistry: text('department_ministry').notNull(),
  holderName: text('holder_name').notNull(),
  holderPhotoUrl: text('holder_photo_url').notNull(),
  holderPoliticianId: text('holder_politician_id'),
  appointmentType: text('appointment_type').notNull(),
  appointingAuthority: text('appointing_authority').notNull(),
  appointingLawArticle: text('appointing_law_article').notNull(),
  dateAssumedOffice: text('date_assumed_office').notNull(),
  annualBudgetOversightKes: numeric('annual_budget_oversight_kes').notNull().default('0'),
  mandateOverview: text('mandate_overview').notNull(),
  accountabilityHotlineOrEmail: text('accountability_hotline_or_email'),
  isPoliticalAspirant: boolean('is_political_aspirant').notNull().default(false),
  futureVyingTarget: text('future_vying_target'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const budgetAllocations = pgTable('budget_allocations', {
  id: text('id').primaryKey(),
  entityType: text('entity_type').notNull(), // County, Constituency, Ward
  entityId: text('entity_id').notNull(),
  fiscalYear: text('fiscal_year').notNull(),
  fundName: text('fund_name').notNull(),
  allocatedAmountKes: numeric('allocated_amount_kes').notNull().default('0'),
  disbursedAmountKes: numeric('disbursed_amount_kes').notNull().default('0'),
  absorptionRatePercentage: integer('absorption_rate_percentage').notNull().default(0),
  auditRating: text('audit_rating').notNull(),
  flaggedExpendituresKes: numeric('flagged_expenditures_kes').notNull().default('0'),
  topFundedProjects: jsonb('top_funded_projects').$type<Array<{
    projectName: string;
    sector: string;
    allocatedKes: number;
    status: string;
  }>>().notNull().default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const powerBrokers = pgTable('power_brokers', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  aliasOrTitle: text('alias_or_title').notNull(),
  originRegion: text('origin_region').notNull(),
  estimatedNetWorthKes: numeric('estimated_net_worth_kes').notNull().default('0'),
  primarySectors: jsonb('primary_sectors').$type<string[]>().notNull().default([]),
  flagshipCompanies: jsonb('flagship_companies').$type<string[]>().notNull().default([]),
  associatedPoliticalFactions: jsonb('associated_political_factions').$type<string[]>().notNull().default([]),
  familyDynasty: text('family_dynasty'),
  notableStateTenders: jsonb('notable_state_tenders').$type<string[]>().notNull().default([]),
  influenceSummary: text('influence_summary').notNull(),
  photoUrl: text('photo_url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const crowdIntelligenceLogs = pgTable('crowd_intelligence_logs', {
  id: text('id').primaryKey(),
  politicianId: text('politician_id'),
  constituencyId: text('constituency_id'),
  countyId: text('county_id'),
  category: text('category').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  authorAlias: text('author_alias').notNull(),
  location: text('location').notNull(),
  evidenceLinks: jsonb('evidence_links').$type<string[]>().notNull().default([]),
  verifiedStatus: text('verified_status').notNull().default('Pending Verification'),
  upvotes: integer('upvotes').notNull().default(0),
  downvotes: integer('downvotes').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
