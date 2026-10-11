import { PowerBroker } from '@kenya-elections/shared-types';

export const ALL_POWER_BROKERS: PowerBroker[] = [
  {
    id: 'pb-kenyatta-family',
    name: 'The Kenyatta Family & Associates',
    aliasOrTitle: 'The First Family Dynasty',
    originRegion: 'Central Kenya (Kiambu) & Rift Valley',
    estimatedNetWorthKes: 250000000000,
    primarySectors: ['Banking & Fintech', 'Dairy Processing', 'Real Estate & Urban Land', 'Media', 'Hospitality'],
    flagshipCompanies: [
      'NCBA Group (Dominant retail & digital mobile lender via M-Shwari and Fuliza)',
      'Brookside Dairy (Controls over 45% of formal Kenyan processed milk distribution)',
      'Northlands City Development (11,000-acre master-planned metropolis in Ruiru)',
      'Heritage Hotels & Great Rift Valley Lodge & Golf Resort',
      'Mediamax Network (K24 TV, Kameme FM, People Daily)'
    ],
    associatedPoliticalFactions: ['Jubilee Party', 'Azimio la Umoja', 'Mount Kenya Foundation'],
    familyDynasty: 'Kenyatta Family Dynasty',
    notableStateTenders: [
      'Strategic bank syndication for National Treasury infrastructure bonds',
      'Historical military rations supply frameworks',
      'Standard Gauge Railway (SGR) land compensation acquisitions'
    ],
    influenceSummary: 'The most formidable economic dynasty in post-independence Kenya, possessing vast multi-generational land reserves across Rift Valley, Central, and Coast regions with deep banking equity.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    id: 'pb-wanjigi',
    name: 'Jimi Richard Wanjigi',
    aliasOrTitle: 'The Procurement Strategist & Kingmaker',
    originRegion: 'Central Kenya (Murang\'a) / Nairobi',
    estimatedNetWorthKes: 55000000000,
    primarySectors: ['Mega-Infrastructure Structuring', 'Security Intelligence Contracts', 'Real Estate', 'Agribusiness'],
    flagshipCompanies: [
      'Kwacha Group of Companies (Family holding flagship)',
      'Tyl Ltd (Security systems and government defense supplies)',
      'Carbacid Investments equity interests',
      'Prime Westlands and Muthaiga commercial real estate developments'
    ],
    associatedPoliticalFactions: ['Safina Party Leader', 'Former financier of Jubilee (2013) & NASA (2017)'],
    familyDynasty: 'Maina Wanjigi Dynasty (Son of long-serving KANU Cabinet Minister)',
    notableStateTenders: [
      'Original Standard Gauge Railway (SGR) procurement structuring with Chinese EPCs',
      'National Integrated Security Surveillance system frameworks',
      'JKIA Terminal Expansion consortia'
    ],
    influenceSummary: 'Behind-the-scenes financial architect of past presidential winning coalitions; transitioned into vocal civic opposition critic and declared 2027 presidential contender.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  },
  {
    id: 'pb-jaswant-rai',
    name: 'Jaswant Singh Rai & The Rai Family',
    aliasOrTitle: 'The Sugar Baron & Timber Titan',
    originRegion: 'Western Kenya (Kakamega) / Rift Valley',
    estimatedNetWorthKes: 110000000000,
    primarySectors: ['Agro-Processing & Sugar', 'Wood & Timber Products', 'Cement Manufacturing', 'Edible Oils'],
    flagshipCompanies: [
      'West Kenya Sugar Company (Kabras Sugar - dominant producer supplying >40% of national market)',
      'Sukari Industries & Olepito Sugar',
      'Timsales (Kenya\'s largest timber processing and plywood entity)',
      'Rai Cement Company (Chilakol, Kisumu)',
      'Menengai Oil Refineries (Top Fry edible oil, Menengai bar soaps)'
    ],
    associatedPoliticalFactions: ['Western Kenya Political Kingmakers', 'Cross-Regime Lobbying'],
    familyDynasty: 'Tarlochan Singh Rai Dynasty',
    notableStateTenders: [
      'Strategic national duty-free sugar import quotas',
      'Kenya Forest Service commercial timber felling concessions'
    ],
    influenceSummary: 'Dominates Western Kenya agro-industrial economy. His dramatic 2023 Kilimani abduction and subsequent "mambo ni matatu" presidential declaration demonstrated how private industrial battles intersect with state power.',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
  },
  {
    id: 'pb-narendra-raval',
    name: 'Dr. Narendra Raval (Guru)',
    aliasOrTitle: 'The Steel & Cement King of East Africa',
    originRegion: 'Rift Valley / Machakos / Coast',
    estimatedNetWorthKes: 95000000000,
    primarySectors: ['Steel Manufacturing', 'Cement Production', 'Aviation', 'Roofing Solutions'],
    flagshipCompanies: [
      'Devki Steel Mills (Dominant rebar and structural steel producer in East Africa)',
      'National Cement Company (Simba Cement - largest market share by volume)',
      'Maisha Mabati Mills',
      'Northwood Aviation (Helicopter charter fleet used heavily in political campaigns)'
    ],
    associatedPoliticalFactions: ['Close patronage ties with successive presidential administrations (Uhuru & Ruto)'],
    notableStateTenders: [
      'Primary steel and cement supplier for Expressway, SGR, Affordable Housing Projects, and bypasses',
      'Clinker import tax tariff policy structuring'
    ],
    influenceSummary: 'Industrialist billionaire providing building materials across all major government public works; widely consulted by the Executive on industrial and tax policy.',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
  },
  {
    id: 'pb-humphrey-kariuki',
    name: 'Humphrey Kariuki Ndegwa',
    aliasOrTitle: 'The Energy & Spirits Tycoon',
    originRegion: 'Mount Kenya (Nyeri) / Nairobi',
    estimatedNetWorthKes: 65000000000,
    primarySectors: ['Fuel & Petroleum Distribution', 'Alcoholic Beverage Distillation', 'Power Generation', 'Luxury Hospitality'],
    flagshipCompanies: [
      'Dalbit Petroleum (Supplies jet fuel and bulk diesel across East & Central Africa)',
      'Janus Continental Group (Holding conglomerate)',
      'Africa Spirits Limited (Producer of Legend Brandy, Blue Ice)',
      'Great Lakes Africa Energy (GLAE - 250MW gas & solar concessions in Mozambique/Zambia)',
      'The Hub Karen (Flagship prime retail shopping mall)'
    ],
    associatedPoliticalFactions: ['National Investment Council Member', 'Cross-party diplomatic facilitator'],
    familyDynasty: 'Self-Made Industrialist',
    notableStateTenders: [
      'United Nations and WFP regional aviation fuel supply contracts',
      'State power purchase agreements (PPAs)'
    ],
    influenceSummary: 'Survived KRA multi-billion tax prosecutions under the Uhuru administration to emerge as a key presidential advisor on foreign direct investment under Ruto.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    id: 'pb-david-langat',
    name: 'David Langat (DL)',
    aliasOrTitle: 'The Rift Valley Merchant & SEZ Pioneer',
    originRegion: 'Rift Valley (Kericho / Bomet) & Coast (Mombasa)',
    estimatedNetWorthKes: 48000000000,
    primarySectors: ['Commercial Tea Farming & Export', 'Special Economic Zones (SEZs)', 'Mombasa Real Estate', 'Logistics'],
    flagshipCompanies: [
      'DL Group of Companies',
      'Africa Economic Zones (AEZ - 700-acre private industrial park in Eldoret)',
      'Koisagat Tea Estate & Chebango Tea Factory',
      'Nyali Centre (Premier shopping and commercial hub in Mombasa)',
      'Selengkei Solar Farm (Kajiado)'
    ],
    associatedPoliticalFactions: ['Founding financial pillar of UDA / Rift Valley campaign logistics'],
    familyDynasty: 'DL Dynasty',
    notableStateTenders: [
      'Special Economic Zone gazettement tax incentives',
      'Bulk tea export allocations to Egypt and Pakistan'
    ],
    influenceSummary: 'Key Rift Valley billionaire who bankrolled early political vehicles; pioneered private industrial park development in Eldoret.',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    id: 'pb-mohammed-jaffer',
    name: 'Mohammed Jaffer',
    aliasOrTitle: 'The Mombasa Port Concessionaire',
    originRegion: 'Coast (Mombasa)',
    estimatedNetWorthKes: 52000000000,
    primarySectors: ['Bulk Grain Handling', 'LPG Gas Terminals & Energy', 'Port Logistics', 'Real Estate'],
    flagshipCompanies: [
      'Grain Bulk Handlers Limited (GBHL - Exclusive mechanized grain offloader at Mombasa Port)',
      'Africa Gas and Oil Limited (AGOL - Largest bulk LPG storage terminal in East Africa)',
      'MJ Group Port Terminals',
      'One Petroleum Limited'
    ],
    associatedPoliticalFactions: ['Coast Regional Powerbroker', 'Bipartisan Port Patronage'],
    familyDynasty: 'Jaffer Dynasty',
    notableStateTenders: [
      'Long-term exclusive grain handling concession agreements with Kenya Ports Authority (KPA)',
      'National LPG gas import pipeline offloading rights'
    ],
    influenceSummary: 'Controls the logistical choke point of all grain and cooking gas entering Kenya and the Great Lakes region through the Port of Mombasa.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  },
  {
    id: 'pb-munga-mwangi',
    name: 'Peter Munga & Dr. James Mwangi',
    aliasOrTitle: 'The Equity & Mount Kenya Foundation Pillars',
    originRegion: 'Central Kenya (Murang\'a)',
    estimatedNetWorthKes: 75000000000,
    primarySectors: ['Commercial Banking & Microfinance', 'Insurance & Health Tech', 'Agriculture Processing', 'Telecom (Equitel)'],
    flagshipCompanies: [
      'Equity Group Holdings (Largest financial institution in East & Central Africa)',
      'Britam Holdings equity interests',
      'Pioneer Group of Schools & Educational Foundations',
      'Freshco Seeds and Agro-dealers network'
    ],
    associatedPoliticalFactions: ['Mount Kenya Foundation (MKF)', 'Architects of 2002 NARC and 2013/2017 presidential endorsements'],
    familyDynasty: 'Murang\'a Capitalist Network',
    notableStateTenders: [
      'National cash transfer programs (Inua Jamii social safety net disbursement)',
      'Government agricultural subsidy e-voucher schemes'
    ],
    influenceSummary: 'Spearheaded the democratization of banking in Kenya while operating the boardroom core of the Mount Kenya Foundation, the political-business caucus that vetoes regional candidacies.',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
  },
  {
    id: 'pb-moi-family',
    name: 'The Moi Family & Conglomerates',
    aliasOrTitle: 'The Kabarnet Dynasty',
    originRegion: 'Rift Valley (Baringo, Nakuru, Uasin Gishu)',
    estimatedNetWorthKes: 180000000000,
    primarySectors: ['Media & Broadcasting', 'Education & Healthcare', 'Logistics & Aviation', 'Agribusiness'],
    flagshipCompanies: [
      'The Standard Group PLC (Standard Newspaper, KTN Home, KTN News, Radio Maisha)',
      'Kabarak University & Kabarak High School educational empires',
      'Siginon Global Logistics (Air cargo handling at JKIA and Mombasa Port transport)',
      'Sasine Tea & Coffee Estates',
      'Transnational Bank (Historical holding, merged into Access Bank)'
    ],
    associatedPoliticalFactions: ['KANU Party', 'Azimio la Umoja'],
    familyDynasty: 'Moi Family Dynasty (Heirs of 2nd President Daniel Arap Moi)',
    notableStateTenders: [
      'Government educational curriculum publication & media placement tenders',
      'Inland Container Depot (ICD) freight logistics and container handling contracts'
    ],
    influenceSummary: 'Retains strategic media control, hundreds of thousands of agricultural acres in Nakuru and Baringo, and regional aviation logistics networks.',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    id: 'pb-vimal-shah',
    name: 'Vimal Shah & Family',
    aliasOrTitle: 'The FMCG Mogul',
    originRegion: 'Central Kenya (Thika) / Nairobi',
    estimatedNetWorthKes: 80000000000,
    primarySectors: ['Fast-Moving Consumer Goods (FMCG)', 'Edible Oils & Fats', 'Agribusiness', 'Renewable Energy'],
    flagshipCompanies: [
      'Bidco Africa (Elianto, Kimbo, Golden Fry, Gental detergent brands)',
      'Bidco Industrial Park in Ruiru',
      'Commercial palm oil and sunflower farmer contract schemes'
    ],
    associatedPoliticalFactions: ['Kenya Private Sector Alliance (KEPSA) Leadership', 'Non-Partisan Economic Advisory'],
    notableStateTenders: [
      'National edible oil import supply stabilization programs',
      'Industrial value addition taskforce frameworks'
    ],
    influenceSummary: 'Key industrial manufacturing titan controlling daily household consumer items across Kenya and East Africa; influential in trade and tax lobby policy.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    id: 'pb-adil-khawaja',
    name: 'Adil Khawaja, CBS',
    aliasOrTitle: 'The Sovereign Boardroom Architect',
    originRegion: 'Nairobi',
    estimatedNetWorthKes: 30000000000,
    primarySectors: ['Corporate Law & Mergers', 'Banking Leadership', 'Wildlife Conservation', 'Real Estate'],
    flagshipCompanies: [
      'KCB Group (Chairman of the Board of Kenya\'s largest commercial bank by asset size)',
      'Dentons Hamilton Harrison & Mathews (Senior Managing Partner)',
      'Kenya Wildlife Service (Former Chairman of Board of Trustees)',
      'Ranalo / Prime Nairobi commercial property equity'
    ],
    associatedPoliticalFactions: ['Close confidant and legal strategist to President William Ruto'],
    notableStateTenders: [
      'Lead advisor on high-value public-private partnership (PPP) concession negotiations',
      'Structuring sovereign debt conversions and bank bailouts'
    ],
    influenceSummary: 'One of the most connected legal and corporate power brokers in Nairobi; commands board authority over KCB Group and key state parastatals.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  }
];
