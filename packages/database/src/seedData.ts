import {
  County,
  Constituency,
  Ward,
  PoliticalParty,
  Politician,
  PoliticianScorecard,
  BureaucracyNode,
  BudgetAllocation,
  PowerBroker,
  CrowdIntelligenceLog
} from '@kenya-elections/shared-types';

export const ALL_47_COUNTIES: County[] = [
  { id: '001', code: 1, name: 'Mombasa', formerProvince: 'Coast', capital: 'Mombasa City', population: 1208333, registeredVoters: 580282, annualEquitableShareKes: 8900000000, overviewSummary: 'Coastal economic and maritime hub; home to the Port of Mombasa.' },
  { id: '002', code: 2, name: 'Kwale', formerProvince: 'Coast', capital: 'Kwale', population: 866820, registeredVoters: 328253, annualEquitableShareKes: 8200000000, overviewSummary: 'Rich in titanium mining and beach tourism.' },
  { id: '003', code: 3, name: 'Kilifi', formerProvince: 'Coast', capital: 'Kilifi', population: 1453787, registeredVoters: 588602, annualEquitableShareKes: 11600000000, overviewSummary: 'Major agricultural, fishing, and hospitality coastline county.' },
  { id: '004', code: 4, name: 'Tana River', formerProvince: 'Coast', capital: 'Hola', population: 315943, registeredVoters: 141096, annualEquitableShareKes: 6500000000, overviewSummary: 'Pastoralist and riverine agriculture along the Tana River basin.' },
  { id: '005', code: 5, name: 'Lamu', formerProvince: 'Coast', capital: 'Lamu', population: 143920, registeredVoters: 79157, annualEquitableShareKes: 3100000000, overviewSummary: 'UNESCO World Heritage island and LAPSSET corridor gateway.' },
  { id: '006', code: 6, name: 'Taita-Taveta', formerProvince: 'Coast', capital: 'Mwatate', population: 340671, registeredVoters: 181827, annualEquitableShareKes: 4800000000, overviewSummary: 'Mineral gem belt and Tsavo National Parks ecosystem.' },
  { id: '007', code: 7, name: 'Garissa', formerProvince: 'North Eastern', capital: 'Garissa', population: 841353, registeredVoters: 201473, annualEquitableShareKes: 7900000000, overviewSummary: 'Commercial hub of north-eastern Kenya with livestock economy.' },
  { id: '008', code: 8, name: 'Wajir', formerProvince: 'North Eastern', capital: 'Wajir', population: 781263, registeredVoters: 207758, annualEquitableShareKes: 9400000000, overviewSummary: 'Pastoralist county with vast solar energy and livestock potential.' },
  { id: '009', code: 9, name: 'Mandera', formerProvince: 'North Eastern', capital: 'Mandera', population: 867457, registeredVoters: 217030, annualEquitableShareKes: 11100000000, overviewSummary: 'Tri-border trade frontier with Ethiopia and Somalia.' },
  { id: '010', code: 10, name: 'Marsabit', formerProvince: 'Eastern', capital: 'Marsabit', population: 459785, registeredVoters: 166912, annualEquitableShareKes: 7200000000, overviewSummary: 'Largest county by land area; home to Lake Turkana Wind Power.' },
  { id: '011', code: 11, name: 'Isiolo', formerProvince: 'Eastern', capital: 'Isiolo', population: 268002, registeredVoters: 89504, annualEquitableShareKes: 4700000000, overviewSummary: 'Designated resort city hub in Kenya Vision 2030.' },
  { id: '012', code: 12, name: 'Meru', formerProvince: 'Eastern', capital: 'Meru', population: 1545714, registeredVoters: 772139, annualEquitableShareKes: 9500000000, overviewSummary: 'Agricultural powerhouse on slopes of Mt. Kenya (Miraa, tea, coffee).' },
  { id: '013', code: 13, name: 'Tharaka-Nithi', formerProvince: 'Eastern', capital: 'Kathwana', population: 393177, registeredVoters: 231491, annualEquitableShareKes: 4200000000, overviewSummary: 'Horticulture, grains, and emerging mining sectors.' },
  { id: '014', code: 14, name: 'Embu', formerProvince: 'Eastern', capital: 'Embu', population: 608599, registeredVoters: 334302, annualEquitableShareKes: 5100000000, overviewSummary: 'Former Eastern province capital; macadamia and tea exporter.' },
  { id: '015', code: 15, name: 'Kitui', formerProvince: 'Eastern', capital: 'Kitui', population: 1136187, registeredVoters: 532758, annualEquitableShareKes: 10400000000, overviewSummary: 'Vast coal deposits in Mui Basin and thriving textile garment center (KICOTEC).' },
  { id: '016', code: 16, name: 'Machakos', formerProvince: 'Eastern', capital: 'Machakos', population: 1421932, registeredVoters: 687565, annualEquitableShareKes: 9100000000, overviewSummary: 'Industrial satellite county, Konza Technopolis, cement factories.' },
  { id: '017', code: 17, name: 'Makueni', formerProvince: 'Eastern', capital: 'Wote', population: 987653, registeredVoters: 479401, annualEquitableShareKes: 7400000000, overviewSummary: 'Benchmark model for public participation and fruit agro-processing.' },
  { id: '018', code: 18, name: 'Nyandarua', formerProvince: 'Central', capital: 'Ol Kalou', population: 638289, registeredVoters: 361165, annualEquitableShareKes: 5600000000, overviewSummary: 'Kenya\'s potato and dairy breadbasket in the Aberdare ranges.' },
  { id: '019', code: 19, name: 'Nyeri', formerProvince: 'Central', capital: 'Nyeri', population: 759164, registeredVoters: 481632, annualEquitableShareKes: 6200000000, overviewSummary: 'Historic political cradle; rich highland coffee and tea belts.' },
  { id: '020', code: 20, name: 'Kirinyaga', formerProvince: 'Central', capital: 'Kerugoya', population: 610411, registeredVoters: 376057, annualEquitableShareKes: 5300000000, overviewSummary: 'Mwea irrigation scheme (Kenya\'s primary rice supply).' },
  { id: '021', code: 21, name: 'Murang\'a', formerProvince: 'Central', capital: 'Murang\'a', population: 1056640, registeredVoters: 620929, annualEquitableShareKes: 7100000000, overviewSummary: 'Financial mogul cradle; supply base for Nairobi\'s water (Ndakaini).' },
  { id: '022', code: 22, name: 'Kiambu', formerProvince: 'Central', capital: 'Kiambu', population: 2417735, registeredVoters: 1275008, annualEquitableShareKes: 11700000000, overviewSummary: 'Second most populous county; industrial, real estate, and dairy leader.' },
  { id: '023', code: 23, name: 'Turkana', formerProvince: 'Rift Valley', capital: 'Lodwar', population: 926976, registeredVoters: 238528, annualEquitableShareKes: 12600000000, overviewSummary: 'Oil deposits in South Lokichar Basin and cradle of mankind.' },
  { id: '024', code: 24, name: 'West Pokot', formerProvince: 'Rift Valley', capital: 'Kapenguria', population: 621241, registeredVoters: 220026, annualEquitableShareKes: 6200000000, overviewSummary: 'Pastoralist and mining corridor (cement limestone and gold panning).' },
  { id: '025', code: 25, name: 'Samburu', formerProvince: 'Rift Valley', capital: 'Maralal', population: 310327, registeredVoters: 100014, annualEquitableShareKes: 5300000000, overviewSummary: 'Cultural tourism, conservancies, and pastoral livestock.' },
  { id: '026', code: 26, name: 'Trans Nzoia', formerProvince: 'Rift Valley', capital: 'Kitale', population: 990341, registeredVoters: 398917, annualEquitableShareKes: 7100000000, overviewSummary: 'National grain silo and maize production capital.' },
  { id: '027', code: 27, name: 'Uasin Gishu', formerProvince: 'Rift Valley', capital: 'Eldoret City', population: 1163186, registeredVoters: 506138, annualEquitableShareKes: 8000000000, overviewSummary: 'Home of Champions; newly elevated Eldoret City and medical hub.' },
  { id: '028', code: 28, name: 'Elgeyo-Marakwet', formerProvince: 'Rift Valley', capital: 'Iten', population: 454480, registeredVoters: 211113, annualEquitableShareKes: 4600000000, overviewSummary: 'High-altitude global athletics training sanctuary and fluorspar basin.' },
  { id: '029', code: 29, name: 'Nandi', formerProvince: 'Rift Valley', capital: 'Kapsabet', population: 885711, registeredVoters: 406288, annualEquitableShareKes: 6900000000, overviewSummary: 'Tea estates, dairy processing, and elite marathon legacy.' },
  { id: '030', code: 30, name: 'Baringo', formerProvince: 'Rift Valley', capital: 'Kabarnet', population: 666763, registeredVoters: 281089, annualEquitableShareKes: 6300000000, overviewSummary: 'Lake Baringo, geothermal potential, and political dynasty cradle.' },
  { id: '031', code: 31, name: 'Laikipia', formerProvince: 'Rift Valley', capital: 'Rumuruti', population: 518560, registeredVoters: 263012, annualEquitableShareKes: 5100000000, overviewSummary: 'Private wildlife conservancies, livestock ranching, high tourism density.' },
  { id: '032', code: 32, name: 'Nakuru', formerProvince: 'Rift Valley', capital: 'Nakuru City', population: 2162202, registeredVoters: 1054856, annualEquitableShareKes: 13000000000, overviewSummary: 'Cosmopolitan commercial center, geothermal power (Olkaria), agriculture.' },
  { id: '033', code: 33, name: 'Narok', formerProvince: 'Rift Valley', capital: 'Narok', population: 1157873, registeredVoters: 397619, annualEquitableShareKes: 8800000000, overviewSummary: 'Home of Maasai Mara National Reserve; wheat and barley heartland.' },
  { id: '034', code: 34, name: 'Kajiado', formerProvince: 'Rift Valley', capital: 'Kajiado', population: 1117840, registeredVoters: 463546, annualEquitableShareKes: 7900000000, overviewSummary: 'Nairobi metropolitan fringe, soda ash mining at Lake Magadi.' },
  { id: '035', code: 35, name: 'Kericho', formerProvince: 'Rift Valley', capital: 'Kericho', population: 901777, registeredVoters: 428067, annualEquitableShareKes: 6400000000, overviewSummary: 'Green carpet of multinational tea plantations.' },
  { id: '036', code: 36, name: 'Bomet', formerProvince: 'Rift Valley', capital: 'Bomet', population: 875689, registeredVoters: 376985, annualEquitableShareKes: 6600000000, overviewSummary: 'Dairy and tea producers with vibrant grassroots politics.' },
  { id: '037', code: 37, name: 'Kakamega', formerProvince: 'Western', capital: 'Kakamega', population: 1867579, registeredVoters: 844551, annualEquitableShareKes: 12300000000, overviewSummary: 'Western economic engine; Kakamega Tropical Rainforest; sugarcane farming.' },
  { id: '038', code: 38, name: 'Vihiga', formerProvince: 'Western', capital: 'Mbale', population: 590013, registeredVoters: 310043, annualEquitableShareKes: 5000000000, overviewSummary: 'High population density, horticulture, and stone quarrying.' },
  { id: '039', code: 39, name: 'Bungoma', formerProvince: 'Western', capital: 'Bungoma', population: 1670570, registeredVoters: 646598, annualEquitableShareKes: 10600000000, overviewSummary: 'Sugar manufacturing, Panpaper mills, Mount Elgon ecosystem.' },
  { id: '040', code: 40, name: 'Busia', formerProvince: 'Western', capital: 'Busia', population: 893681, registeredVoters: 416758, annualEquitableShareKes: 7100000000, overviewSummary: 'Primary East African Community cross-border trade gateway into Uganda.' },
  { id: '041', code: 41, name: 'Siaya', formerProvince: 'Nyanza', capital: 'Siaya', population: 993183, registeredVoters: 533595, annualEquitableShareKes: 6900000000, overviewSummary: 'Intellectual capital; Lake Victoria fisheries and Yala swamp agro-potential.' },
  { id: '042', code: 42, name: 'Kisumu', formerProvince: 'Nyanza', capital: 'Kisumu City', population: 1155574, registeredVoters: 606754, annualEquitableShareKes: 8000000000, overviewSummary: 'Lakeside port city, commercial center of western Kenya, maritime trade.' },
  { id: '043', code: 43, name: 'Homa Bay', formerProvince: 'Nyanza', capital: 'Homa Bay', population: 1131950, registeredVoters: 551071, annualEquitableShareKes: 7800000000, overviewSummary: 'Extensive Lake Victoria coastline; island tourism (Rusinga/Mfangano).' },
  { id: '044', code: 44, name: 'Migori', formerProvince: 'Nyanza', capital: 'Migori', population: 1116436, registeredVoters: 469019, annualEquitableShareKes: 8000000000, overviewSummary: 'Gold mining belt, sugarcane, and Isebania border trade to Tanzania.' },
  { id: '045', code: 45, name: 'Kisii', formerProvince: 'Nyanza', capital: 'Kisii', population: 1266860, registeredVoters: 637010, annualEquitableShareKes: 8800000000, overviewSummary: 'Soapstone carving capital, high banana/tea trade, intense enterprise.' },
  { id: '046', code: 46, name: 'Nyamira', formerProvince: 'Nyanza', capital: 'Nyamira', population: 605576, registeredVoters: 323283, annualEquitableShareKes: 5100000000, overviewSummary: 'Highland tea, pyrethrum, and dairy farming.' },
  { id: '047', code: 47, name: 'Nairobi', formerProvince: 'Nairobi', capital: 'Nairobi City', population: 4397073, registeredVoters: 2415310, annualEquitableShareKes: 20000000000, overviewSummary: 'National capital, diplomatic powerhouse, and East Africa\'s financial epicenter.' },
];

export const SAMPLE_CONSTITUENCIES: Constituency[] = [
  // Nairobi (047)
  { id: 'c-langata', countyId: '047', code: '277', name: 'Lang\'ata', registeredVoters: 145000, ngCdfAllocationKes: 165000000, overviewSummary: 'Diverse urban constituency hosting Wilson Airport and affluent suburbs.' },
  { id: 'c-kibra', countyId: '047', code: '278', name: 'Kibra', registeredVoters: 128000, ngCdfAllocationKes: 155000000, overviewSummary: 'Historic political cradle known for intense grassroots mobilization.' },
  { id: 'c-embakasi-east', countyId: '047', code: '283', name: 'Embakasi East', registeredVoters: 154000, ngCdfAllocationKes: 172000000, overviewSummary: 'Rapidly expanding youth-dominated residential constituency.' },
  { id: 'c-starehe', countyId: '047', code: '286', name: 'Starehe', registeredVoters: 166000, ngCdfAllocationKes: 168000000, overviewSummary: 'Encompasses Nairobi CBD, Kariokor, and key business arteries.' },
  { id: 'c-westlands', countyId: '047', code: '275', name: 'Westlands', registeredVoters: 160000, ngCdfAllocationKes: 165000000, overviewSummary: 'Commercial hub hosting diplomatic missions and financial headquarters.' },
  
  // Kiambu (022)
  { id: 'c-kikuyu', countyId: '022', code: '115', name: 'Kikuyu', registeredVoters: 108000, ngCdfAllocationKes: 150000000, overviewSummary: 'Metropolitan constituency along Southern Bypass; seat of NA Majority Leader.' },
  { id: 'c-thika-town', countyId: '022', code: '121', name: 'Thika Town', registeredVoters: 151000, ngCdfAllocationKes: 160000000, overviewSummary: 'Industrial city of pineapple processing and manufacturing plants.' },

  // Uasin Gishu (027)
  { id: 'c-kapseret', countyId: '027', code: '143', name: 'Kapseret', registeredVoters: 75000, ngCdfAllocationKes: 145000000, overviewSummary: 'Home to Eldoret International Airport; focal point of Rift Valley politics.' },
  { id: 'c-ainabkoi', countyId: '027', code: '144', name: 'Ainabkoi', registeredVoters: 63000, ngCdfAllocationKes: 138000000, overviewSummary: 'Agricultural and commercial suburban outskirts of Eldoret.' },

  // Murang'a (021)
  { id: 'c-kiharu', countyId: '021', code: '109', name: 'Kiharu', registeredVoters: 120000, ngCdfAllocationKes: 155000000, overviewSummary: 'High-visibility constituency known for model school renovation programs.' },

  // Kisumu (042)
  { id: 'c-kisumu-central', countyId: '042', code: '241', name: 'Kisumu Central', registeredVoters: 130000, ngCdfAllocationKes: 158000000, overviewSummary: 'Lakeside CBD constituency with active youth and mercantile voter base.' },

  // Migori (044)
  { id: 'c-suna-east', countyId: '044', code: '254', name: 'Suna East', registeredVoters: 55000, ngCdfAllocationKes: 140000000, overviewSummary: 'Cosmopolitan trading constituency along the Migori transit corridor.' },

  // Siaya (041)
  { id: 'c-rarieda', countyId: '041', code: '235', name: 'Rarieda', registeredVoters: 89000, ngCdfAllocationKes: 148000000, overviewSummary: 'Known for solar lighting and comprehensive rural school infrastructure drives.' },

  // Kakamega (037)
  { id: 'c-lurambi', countyId: '037', code: '202', name: 'Lurambi', registeredVoters: 160000, ngCdfAllocationKes: 165000000, overviewSummary: 'Hosts Kakamega town, Masinde Muliro University, and provincial offices.' },

  // Nakuru (032)
  { id: 'c-nakuru-town-east', countyId: '032', code: '172', name: 'Nakuru Town East', registeredVoters: 110000, ngCdfAllocationKes: 152000000, overviewSummary: 'Urban heart of Nakuru City with manufacturing and trade enterprises.' },

  // Kilifi (003)
  { id: 'c-malindi', countyId: '003', code: '015', name: 'Malindi', registeredVoters: 95000, ngCdfAllocationKes: 149000000, overviewSummary: 'Major coastal tourism, marine trade, and historic settlement.' },
];

export const SAMPLE_WARDS: Ward[] = [
  { id: 'w-karen', constituencyId: 'c-langata', countyId: '047', name: 'Karen', registeredVoters: 22000, wardFundAllocationKes: 25000000 },
  { id: 'w-nairobi-west', constituencyId: 'c-langata', countyId: '047', name: 'Nairobi West', registeredVoters: 34000, wardFundAllocationKes: 25000000 },
  { id: 'w-makina', constituencyId: 'c-kibra', countyId: '047', name: 'Makina', registeredVoters: 29000, wardFundAllocationKes: 25000000 },
  { id: 'w-sarangombe', constituencyId: 'c-kibra', countyId: '047', name: 'Sarang\'ombe', registeredVoters: 32000, wardFundAllocationKes: 25000000 },
  { id: 'w-simba-lake', constituencyId: 'c-kapseret', countyId: '027', name: 'Simat/Kapseret', registeredVoters: 21000, wardFundAllocationKes: 22000000 },
  { id: 'w-kikuyu-town', constituencyId: 'c-kikuyu', countyId: '022', name: 'Kikuyu Ward', registeredVoters: 27000, wardFundAllocationKes: 24000000 },
  { id: 'w-market-milimani', constituencyId: 'c-kisumu-central', countyId: '042', name: 'Market Milimani', registeredVoters: 28000, wardFundAllocationKes: 23000000 },
  { id: 'w-mugumoini', constituencyId: 'c-kiharu', countyId: '021', name: 'Mugumo-ini', registeredVoters: 26000, wardFundAllocationKes: 22000000 },
];

export const POLITICAL_PARTIES: PoliticalParty[] = [
  { id: 'uda', code: 'UDA', name: 'United Democratic Alliance', symbol: 'Wheelbarrow', colorHex: '#FBBF24', partyLeader: 'William Samoei Ruto', coalition: 'Kenya Kwanza', foundedYear: 2020, headquarters: 'Hustler Centre, Makindi Rd, Nairobi' },
  { id: 'odm', code: 'ODM', name: 'Orange Democratic Movement', symbol: 'Orange', colorHex: '#F97316', partyLeader: 'Raila Amolo Odinga', coalition: 'Azimio la Umoja', foundedYear: 2005, headquarters: 'Chungwa House, Lavington, Nairobi' },
  { id: 'jubilee', code: 'JP', name: 'Jubilee Party', symbol: 'Clasped Hands', colorHex: '#EF4444', partyLeader: 'Uhuru Muigai Kenyatta', coalition: 'Azimio la Umoja', foundedYear: 2016, headquarters: 'Pangani / Kileleshwa, Nairobi' },
  { id: 'wiper', code: 'WDM', name: 'Wiper Democratic Movement', symbol: 'Umbrella', colorHex: '#3B82F6', partyLeader: 'Kalonzo Musyoka', coalition: 'Azimio la Umoja', foundedYear: 2006, headquarters: 'Wiper House, Athi River' },
  { id: 'anc', code: 'ANC', name: 'Amani National Congress', symbol: 'Crown Bird', colorHex: '#10B981', partyLeader: 'Musalia Mudavadi', coalition: 'Kenya Kwanza', foundedYear: 2015, headquarters: 'Amani House, Lavington, Nairobi' },
  { id: 'ford-kenya', code: 'FORD-K', name: 'Forum for the Restoration of Democracy-Kenya', symbol: 'Lion', colorHex: '#059669', partyLeader: 'Moses Wetang\'ula', coalition: 'Kenya Kwanza', foundedYear: 1992, headquarters: 'Simba House, Nairobi' },
  { id: 'dap-k', code: 'DAP-K', name: 'Democratic Action Party of Kenya', symbol: 'Bull', colorHex: '#6366F1', partyLeader: 'Eugene Wamalwa', coalition: 'Azimio la Umoja', foundedYear: 2021, headquarters: 'Chaka Place, Hurlingham, Nairobi' },
  { id: 'independent', code: 'IND', name: 'Independent Candidate Association', symbol: 'Scales / Independent', colorHex: '#6B7280', partyLeader: 'Non-Partisan', coalition: 'Independent', foundedYear: 2010, headquarters: 'N/A' },
];

export const POLITICIANS: Politician[] = [
  // 1. Executive
  {
    id: 'p-ruto',
    name: 'William Samoei Ruto',
    aliases: ['Husler-in-Chief', 'Bill', 'WSR'],
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1966-12-21',
    originCountyId: '027', // Uasin Gishu
    originConstituencyId: 'c-kapseret',
    isIncumbent: true,
    currentPosition: 'president',
    positionCategory: 'executive',
    officeHeldSince: '2022-09-13',
    partyId: 'uda',
    coalition: 'Kenya Kwanza',
    nominationType: 'Direct Ticket',
    nominatedBy: 'Kenya Kwanza Alliance Delegates Convention',
    partyHoppingHistory: [
      { party: 'KANU', fromYear: 1992, toYear: 2007, notes: 'Youth for KANU 92 (YK92) operative and Eldoret North MP' },
      { party: 'ODM', fromYear: 2007, toYear: 2011, notes: 'Pentagon member; Minister for Agriculture and Higher Education' },
      { party: 'URP', fromYear: 2012, toYear: 2016, notes: 'Formed United Republican Party, merged into Jubilee' },
      { party: 'Jubilee', fromYear: 2016, toYear: 2021, notes: 'Deputy President under Uhuru Kenyatta' },
      { party: 'UDA', fromYear: 2021, toYear: 2027, notes: 'Founded UDA vehicle that won the 2022 presidency' },
    ],
    vyingForPosition: 'president',
    vyingPartyId: 'uda',
    campaignSlogan: 'Bottom-Up Economic Transformation Agenda (BETA)',
    estimatedSupportersCount: 7200000,
    latestPollScorePercentage: 46.5,
    publicSentimentRating: 44,
    originStory: 'Hails from Sambut village, Kamagut in Uasin Gishu. Sold groundnuts and poultry along Eldoret-Malaba highway before joining political mentorship circles.',
    educationSummary: [
      'PhD in Plant Ecology - University of Nairobi (2018)',
      'MSc in Plant Ecology - University of Nairobi (2011)',
      'BSc in Botany & Zoology - University of Nairobi (1990)',
    ],
    careerHistory: [
      '5th President of Kenya (2022-Present)',
      '1st Deputy President of Kenya (2013-2022)',
      'Minister for Higher Education (2010)',
      'Minister for Agriculture (2008-2010)',
      'MP for Eldoret North (1997-2013)',
    ],
    declaredAssetsSummary: 'Extensive agricultural holdings (Sugoi farms), hospitality (Weston Hotel), poultry processing, and real estate.',
    keyAllies: ['Musalia Mudavadi', 'Kimani Ichung\'wah', 'Aaron Cheruiyot', 'Aden Duale'],
    knownRivals: ['Raila Odinga', 'Kalonzo Musyoka', 'Fred Matiang\'i', 'Rigathi Gachagua'],
  },
  
  // 2. Oscar Sudi - Spotlight Politician for Floor Inaction / Zero Hansard
  {
    id: 'p-sudi',
    name: 'Oscar Kipchumba Sudi',
    aliases: ['Kapseret Overlord', 'Engineer Sudi', 'Son of Squatter'],
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1980-08-21',
    originCountyId: '027', // Uasin Gishu
    originConstituencyId: 'c-kapseret',
    isIncumbent: true,
    currentPosition: 'mp',
    positionCategory: 'legislature',
    officeHeldSince: '2013-03-27',
    representedCountyId: '027',
    representedConstituencyId: 'c-kapseret',
    partyId: 'uda',
    coalition: 'Kenya Kwanza',
    nominationType: 'Direct Ticket',
    nominatedBy: 'UDA National Elections Board',
    partyHoppingHistory: [
      { party: 'URP', fromYear: 2013, toYear: 2016, notes: 'First-time MP for newly created Kapseret constituency' },
      { party: 'Jubilee', fromYear: 2016, toYear: 2021, notes: 'Elected on Jubilee ticket' },
      { party: 'UDA', fromYear: 2021, toYear: 2027, notes: 'Staunch Ruto inner circle enforcer' },
    ],
    vyingForPosition: 'mp',
    vyingConstituencyId: 'c-kapseret',
    vyingPartyId: 'uda',
    campaignSlogan: 'Msema Kweli (Grassroots Mobilizer)',
    estimatedSupportersCount: 68000,
    latestPollScorePercentage: 54.0,
    publicSentimentRating: 38,
    originStory: 'Raised in Moi University staff quarters squatter zone. Worked as a matatu tout (conductor) along Kesses route and car broker before breaking into commercial dealmaking.',
    educationSummary: [
      'Disputed KCSE / Diploma credentials under longstanding EACC court scrutiny',
      'Tulwopng\'etuny Primary School',
    ],
    careerHistory: [
      'MP for Kapseret (2013-Present, 3 consecutive terms)',
      'Commercial entrepreneur and logistics broker',
    ],
    declaredAssetsSummary: 'Multi-million shilling mansion in Kapseret, nightclub investments (Timba XO, Eldoret), prime agricultural and urban land parcels.',
    keyAllies: ['William Ruto', 'Farouk Kibet', 'David Pkosing'],
    knownRivals: ['Stephen Kiprono (Kapseret Aspirant)', 'Gideon Moi'],
  },

  // 3. Kimani Ichung'wah - National Assembly Majority Leader
  {
    id: 'p-ichungwah',
    name: 'Anthony Kimani Ichung\'wah',
    aliases: ['Ichung\'wah', 'Leader of Majority'],
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1976-11-03',
    originCountyId: '022', // Kiambu
    originConstituencyId: 'c-kikuyu',
    isIncumbent: true,
    currentPosition: 'mp',
    positionCategory: 'legislature',
    officeHeldSince: '2013-03-27',
    representedCountyId: '022',
    representedConstituencyId: 'c-kikuyu',
    partyId: 'uda',
    coalition: 'Kenya Kwanza',
    nominationType: 'Direct Ticket',
    nominatedBy: 'UDA National Executive Committee',
    partyHoppingHistory: [
      { party: 'TNA', fromYear: 2013, toYear: 2016, notes: 'Elected Kikuyu MP' },
      { party: 'Jubilee', fromYear: 2016, toYear: 2021, notes: 'Unopposed in 2017 general election' },
      { party: 'UDA', fromYear: 2021, toYear: 2027, notes: 'Leader of Majority in the 13th Parliament' },
    ],
    vyingForPosition: 'governor',
    vyingCountyId: '022', // Kiambu Governor aspirant 2027
    vyingPartyId: 'uda',
    campaignSlogan: 'Strict Governance & Fiscal Order',
    estimatedSupportersCount: 112000,
    latestPollScorePercentage: 62.5,
    publicSentimentRating: 52,
    originStory: 'Born in Gikambura village, Kikuyu. Trained in economics and chartered accounting, previously managed corporate finance at DiverseyLever and Madison Insurance.',
    educationSummary: [
      'BA in Economics & History - University of Nairobi',
      'CPA-K - Strathmore College',
      'Alliance High School',
    ],
    careerHistory: [
      'Leader of the Majority Party, National Assembly (2022-Present)',
      'Chair of the Budget and Appropriations Committee (2017-2020)',
      'MP for Kikuyu (2013-Present)',
    ],
    declaredAssetsSummary: 'Real estate portfolios in Nairobi and Kiambu, commercial farming enterprises.',
    keyAllies: ['William Ruto', 'Ndindi Nyoro', 'Moses Wetang\'ula'],
    knownRivals: ['Rigathi Gachagua', 'Kimani Wamatangi (Current Kiambu Governor)'],
  },

  // 4. Babu Owino - Outspoken Embakasi East MP & Future Nairobi Governor Aspirant
  {
    id: 'p-babu-owino',
    name: 'Paul Ongili Owino (Babu Owino)',
    aliases: ['Babu Owino', 'Tibim', 'Tialala'],
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1989-10-10',
    originCountyId: '045', // Kisii roots / raised in Nyalenda, Kisumu
    originConstituencyId: 'c-kisumu-central',
    isIncumbent: true,
    currentPosition: 'mp',
    positionCategory: 'legislature',
    officeHeldSince: '2017-08-08',
    representedCountyId: '047', // Nairobi
    representedConstituencyId: 'c-embakasi-east',
    partyId: 'odm',
    coalition: 'Azimio la Umoja',
    nominationType: 'Universal Primaries',
    nominatedBy: 'ODM Party Primary Voters',
    partyHoppingHistory: [
      { party: 'SONU', fromYear: 2011, toYear: 2016, notes: 'Longest-serving University of Nairobi Student Union Chairman' },
      { party: 'ODM', fromYear: 2016, toYear: 2027, notes: 'Steadfast loyalist and prominent young face of ODM' },
    ],
    vyingForPosition: 'governor',
    vyingCountyId: '047', // Eyeing Nairobi Governor 2027
    vyingPartyId: 'odm',
    campaignSlogan: 'Youth Empowerment & Fearless Oversight',
    estimatedSupportersCount: 380000,
    latestPollScorePercentage: 58.2,
    publicSentimentRating: 68,
    originStory: 'Raised by a single mother selling traditional brew (chang\'aa) in Nyalenda slums, Kisumu. Excelled academically to gain admission to UoN with first-class actuarial science honors.',
    educationSummary: [
      'Bachelor of Laws (LLB) - University of Nairobi (2020)',
      'BSc in Actuarial Science (1st Class Hons) - University of Nairobi (2012)',
      'Kisumu Boys High School (A plain)',
    ],
    careerHistory: [
      'MP for Embakasi East (2017-Present, 2 terms)',
      'Chairman of Students Organisation of Nairobi University - SONU (2011-2016)',
    ],
    declaredAssetsSummary: 'Properties in Nairobi, law firm interests, digital coaching and media presence.',
    keyAllies: ['Raila Odinga', 'Edwin Sifuna', 'Ledama Olekina'],
    knownRivals: ['Johnson Sakaja', 'Francis Atwoli'],
  },

  // 5. Ndindi Nyoro - Kiharu MP & Budget Committee Chair
  {
    id: 'p-ndindi-nyoro',
    name: 'Ndindi Nyoro',
    aliases: ['Ndindi', 'Mr. CDF Benchmark'],
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1985-12-12',
    originCountyId: '021', // Murang'a
    originConstituencyId: 'c-kiharu',
    isIncumbent: true,
    currentPosition: 'mp',
    positionCategory: 'legislature',
    officeHeldSince: '2017-08-08',
    representedCountyId: '021',
    representedConstituencyId: 'c-kiharu',
    partyId: 'uda',
    coalition: 'Kenya Kwanza',
    nominationType: 'Universal Primaries',
    nominatedBy: 'UDA Kiharu Primaries',
    partyHoppingHistory: [
      { party: 'Jubilee', fromYear: 2017, toYear: 2021, notes: 'First term MP for Kiharu' },
      { party: 'UDA', fromYear: 2021, toYear: 2027, notes: 'Ruto key lieutenant and parliamentary budget chief' },
    ],
    vyingForPosition: 'governor', // Or deputy president succession
    vyingCountyId: '021',
    vyingPartyId: 'uda',
    campaignSlogan: 'Masomo Bora & Model Public Schools',
    estimatedSupportersCount: 145000,
    latestPollScorePercentage: 74.0,
    publicSentimentRating: 72,
    originStory: 'Born in Gaturi, Kiharu. Worked as a cobbler and hawker in school breaks, traded stock shares while an undergraduate at Kenyatta University before launching stockbrokerage firm Investax Capital.',
    educationSummary: [
      'Bachelor of Economics - Kenyatta University (2009)',
      'Kiambugi Secondary School',
    ],
    careerHistory: [
      'Chairman, Budget & Appropriations Committee, National Assembly (2022-Present)',
      'MP for Kiharu (2017-Present)',
      'Managing Director, Investax Capital (2010-2016)',
    ],
    declaredAssetsSummary: 'Significant shareholding in Kenya Power, KenGen, Kakuzi, and diverse NSE portfolios.',
    keyAllies: ['William Ruto', 'Kimani Ichung\'wah', 'Aaron Cheruiyot'],
    knownRivals: ['Rigathi Gachagua', 'Irungu Kang\'ata'],
  },

  // 6. Edwin Sifuna - Nairobi Senator & ODM Secretary General
  {
    id: 'p-sifuna',
    name: 'Edwin Watenya Sifuna',
    aliases: ['Sifuna', 'Nairobi\'s Watchman'],
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1982-05-22',
    originCountyId: '039', // Bungoma roots / Nairobi political base
    isIncumbent: true,
    currentPosition: 'senator',
    positionCategory: 'legislature',
    officeHeldSince: '2022-08-09',
    representedCountyId: '047', // Nairobi
    partyId: 'odm',
    coalition: 'Azimio la Umoja',
    nominationType: 'Direct Ticket',
    nominatedBy: 'Azimio Council',
    partyHoppingHistory: [
      { party: 'ODM', fromYear: 2017, toYear: 2027, notes: 'Served as ODM Secretary General since 2018' },
    ],
    vyingForPosition: 'senator',
    vyingCountyId: '047',
    vyingPartyId: 'odm',
    campaignSlogan: 'The People\'s Watchdog & Fiscal Sentinel',
    estimatedSupportersCount: 750000,
    latestPollScorePercentage: 61.0,
    publicSentimentRating: 66,
    originStory: 'Hails from Kanduyi, Bungoma. Son of former Kanduyi MP Lawrence Sifuna. Formed private legal practice specializing in commercial litigation and constitutional law.',
    educationSummary: [
      'Postgraduate Diploma in Law - Kenya School of Law (2007)',
      'Bachelor of Laws (LLB) - University of Nairobi (2006)',
      'Musingu High School',
    ],
    careerHistory: [
      'Senator for Nairobi County (2022-Present)',
      'Secretary General, Orange Democratic Movement (2018-Present)',
      'Deputy Senate Minority Whip (2023-Present)',
      'Managing Partner, Sifuna & Associates Advocates',
    ],
    declaredAssetsSummary: 'Legal consultancy equity and urban property.',
    keyAllies: ['Raila Odinga', 'Babu Owino', 'Okiya Omtatah'],
    knownRivals: ['Johnson Sakaja', 'Aaron Cheruiyot'],
  },

  // 7. Okiya Omtatah Okoiti - Busia Senator & Public Interest Litigator
  {
    id: 'p-omtatah',
    name: 'Andrew Okiya Omtatah Okoiti',
    aliases: ['Omtatah', 'Chief Public Litigator', 'Katiba Defender'],
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1964-11-30',
    originCountyId: '040', // Busia
    isIncumbent: true,
    currentPosition: 'senator',
    positionCategory: 'legislature',
    officeHeldSince: '2022-08-09',
    representedCountyId: '040',
    partyId: 'independent',
    coalition: 'Independent',
    nominationType: 'Independent',
    nominatedBy: 'Direct Grassroots Citizen Petition',
    partyHoppingHistory: [
      { party: 'Independent', fromYear: 2022, toYear: 2027, notes: 'Elected on National Reconstruction Alliance (NRA) / Independent stance' },
    ],
    vyingForPosition: 'senator',
    vyingCountyId: '040',
    vyingPartyId: 'independent',
    campaignSlogan: 'Constitutional Supremacy & Public Fund Vigilance',
    estimatedSupportersCount: 280000,
    latestPollScorePercentage: 78.5,
    publicSentimentRating: 84,
    originStory: 'Born in Kwang\'amor village, Teso South. Known nationally for over a decade as Kenya\'s foremost activist who filed hundreds of pro bono public interest constitutional lawsuits saving taxpayers billions.',
    educationSummary: [
      'St. Paul\'s Amukura High School',
      'St. Augustine\'s Major Seminary (Philosophy)',
    ],
    careerHistory: [
      'Senator for Busia County (2022-Present)',
      'Executive Director, Kenyans for Justice and Development (KEJUDE)',
      'Lead petitioner against the Finance Act 2023/2024 and unconstitutional state levies',
    ],
    declaredAssetsSummary: 'Modest rural ancestral homestead and civil rights research repository.',
    keyAllies: ['Edwin Sifuna', 'Willie Mutunga', 'Law Society of Kenya'],
    knownRivals: ['State Law Office', 'National Treasury Cabinet'],
  },

  // 8. Johnson Sakaja - Nairobi Governor
  {
    id: 'p-sakaja',
    name: 'Johnson Arthur Sakaja',
    aliases: ['Super Senator', 'Sakaja Dishi', 'Governor with the Dimples'],
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1985-02-02',
    originCountyId: '047', // Nairobi / Trans Nzoia roots
    isIncumbent: true,
    currentPosition: 'governor',
    positionCategory: 'county_executive',
    officeHeldSince: '2022-08-25',
    representedCountyId: '047',
    partyId: 'uda',
    coalition: 'Kenya Kwanza',
    nominationType: 'Direct Ticket',
    nominatedBy: 'Kenya Kwanza Principals Council',
    partyHoppingHistory: [
      { party: 'TNA', fromYear: 2012, toYear: 2016, notes: 'National Chairman of The National Alliance (TNA)' },
      { party: 'Jubilee', fromYear: 2016, toYear: 2021, notes: 'Elected Nairobi Senator in 2017' },
      { party: 'UDA', fromYear: 2021, toYear: 2027, notes: 'Elected Nairobi Governor in 2022' },
    ],
    vyingForPosition: 'governor',
    vyingCountyId: '047',
    vyingPartyId: 'uda',
    campaignSlogan: 'Lazima Iwork / Dishi na County',
    estimatedSupportersCount: 690000,
    latestPollScorePercentage: 42.0,
    publicSentimentRating: 41,
    originStory: 'Grew up in Ngara and Parklands. Rose through actuarial mathematics student leadership into national youth mobilization for Mwai Kibaki and Uhuru Kenyatta.',
    educationSummary: [
      'Actuarial Science - University of Nairobi (Coursework completed)',
      'Team University Degree (Subject of IEBC clearance litigation)',
      'Lenana School',
    ],
    careerHistory: [
      'Governor of Nairobi City County (2022-Present)',
      'Senator for Nairobi (2017-2022)',
      'Nominated Member of Parliament (2013-2017)',
      'National Chairman, TNA Party (2012-2016)',
    ],
    declaredAssetsSummary: 'Urban residential developments, hospitality shares, transport fleet.',
    keyAllies: ['William Ruto', 'Moses Kuria'],
    knownRivals: ['Edwin Sifuna', 'Babu Owino', 'Tim Wanyonyi'],
  },

  // 9. George Natembeya - Trans Nzoia Governor & 'Tawe' Movement Leader
  {
    id: 'p-natembeya',
    name: 'George Natembeya',
    aliases: ['Rift Valley Lion', 'Tawe Champion'],
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1971-07-03',
    originCountyId: '026', // Trans Nzoia
    isIncumbent: true,
    currentPosition: 'governor',
    positionCategory: 'county_executive',
    officeHeldSince: '2022-08-25',
    representedCountyId: '026',
    partyId: 'dap-k',
    coalition: 'Azimio la Umoja',
    nominationType: 'Direct Ticket',
    nominatedBy: 'DAP-K Party National Council',
    partyHoppingHistory: [
      { party: 'DAP-K', fromYear: 2022, toYear: 2027, notes: 'Transitioned directly from high-profile civil service to win governorship' },
    ],
    vyingForPosition: 'governor',
    vyingCountyId: '026',
    vyingPartyId: 'dap-k',
    campaignSlogan: 'Tawe (Say No to Poverty and Vassal Politics)',
    estimatedSupportersCount: 220000,
    latestPollScorePercentage: 71.0,
    publicSentimentRating: 77,
    originStory: 'Hails from Trans Nzoia. Spent over 25 years climbing through the administrative provincial ladder from District Officer (DO), personal assistant to John Michuki, to celebrated Rift Valley Regional Commissioner.',
    educationSummary: [
      'MA in Anthropology - University of Nairobi',
      'BA in Anthropology - University of Nairobi',
      'Chebosi Secondary School',
    ],
    careerHistory: [
      'Governor, Trans Nzoia County (2022-Present)',
      'Regional Commissioner, Rift Valley (2019-2022)',
      'County Commissioner, Narok County (Mau Forest evictions)',
      'Personal Assistant to Minister for Internal Security John Michuki',
    ],
    declaredAssetsSummary: 'Extensive agricultural holdings in Kitale and Trans Nzoia.',
    keyAllies: ['Eugene Wamalwa', 'Trans Nzoia Youth Brigade'],
    knownRivals: ['Moses Wetang\'ula', 'Musalia Mudavadi'],
  },

  // 10. Gladys Wanga - Homa Bay Governor
  {
    id: 'p-wanga',
    name: 'Gladys Atieno Nyasuna Wanga',
    aliases: ['Wanga', 'Iron Lady of South Nyanza'],
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    gender: 'Female',
    birthDate: '1981-03-07',
    originCountyId: '043', // Homa Bay
    isIncumbent: true,
    currentPosition: 'governor',
    positionCategory: 'county_executive',
    officeHeldSince: '2022-08-25',
    representedCountyId: '043',
    partyId: 'odm',
    coalition: 'Azimio la Umoja',
    nominationType: 'Direct Ticket',
    nominatedBy: 'ODM Central Management Committee',
    partyHoppingHistory: [
      { party: 'ODM', fromYear: 2013, toYear: 2027, notes: 'Served as Homa Bay Women Rep for 10 years before capturing governorship' },
    ],
    vyingForPosition: 'governor',
    vyingCountyId: '043',
    vyingPartyId: 'odm',
    campaignSlogan: 'Genowa (Our Hope): Transformative Healthcare & Revenue Digitization',
    estimatedSupportersCount: 340000,
    latestPollScorePercentage: 76.0,
    publicSentimentRating: 79,
    originStory: 'Daughter of former Kisumu County Council Chairman John Nyasuna. First woman governor in Nyanza region, noted for doubling own-source county revenue in her first fiscal year.',
    educationSummary: [
      'MSc in Health Management - Kenyatta University',
      'BSc in Health Sciences - Kenyatta University',
      'Kisumu Girls High School',
    ],
    careerHistory: [
      'Governor, Homa Bay County (2022-Present)',
      'Chairperson, National Assembly Departmental Committee on Finance & National Planning (2020-2022)',
      'Women Representative, Homa Bay County (2013-2022)',
      'Member, Parliamentary Service Commission (PSC)',
    ],
    declaredAssetsSummary: 'Commercial farming and hospitality investments in western Kenya.',
    keyAllies: ['Raila Odinga', 'James Orengo', 'Opiyo Wandayi'],
    knownRivals: ['Evans Kidero'],
  },

  // 11. Rigathi Gachagua - Former Deputy President / Mount Kenya Faction Leader
  {
    id: 'p-gachagua',
    name: 'Geoffrey Rigathi Gachagua',
    aliases: ['Riggy G', 'Truthful Man', 'Wamunyoro'],
    photoUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80',
    gender: 'Male',
    birthDate: '1965-02-28',
    originCountyId: '019', // Nyeri
    originConstituencyId: 'c-mathira',
    isIncumbent: false,
    currentPosition: 'aspirant',
    positionCategory: 'executive',
    officeHeldSince: '2022-09-13 to 2024-10-17',
    partyId: 'independent',
    coalition: 'Third Force / Mount Kenya Resistance',
    nominationType: 'Direct Ticket',
    nominatedBy: 'Joint UDA Presidential Ticket (2022)',
    partyHoppingHistory: [
      { party: 'KANU', fromYear: 1990, toYear: 2002, notes: 'District Officer and Personal Assistant to Uhuru Kenyatta' },
      { party: 'Jubilee', fromYear: 2017, toYear: 2021, notes: 'Mathira Member of Parliament' },
      { party: 'UDA', fromYear: 2021, toYear: 2024, notes: 'Deputy President until landmark parliamentary impeachment' },
    ],
    vyingForPosition: 'president',
    vyingPartyId: 'independent',
    campaignSlogan: 'One Man, One Vote, One Shilling',
    estimatedSupportersCount: 2900000,
    latestPollScorePercentage: 38.0,
    publicSentimentRating: 58,
    originStory: 'Born in Hiriga village, Mathira. Son of Mau Mau freedom fighters Nahashon Gachagua and Martha Kirigo. Veteran provincial administrator under the Moi regime.',
    educationSummary: [
      'BA in Political Science & Literature - University of Nairobi (1988)',
      'Kenya Institute of Administration (Administrative Officers Course)',
      'Alliance High School',
    ],
    careerHistory: [
      '2nd Deputy President of Kenya (2022-2024, Impeached)',
      'MP for Mathira (2017-2022)',
      'Personal Assistant to Minister for Local Government Uhuru Kenyatta (2001-2006)',
      'District Officer (DO) Kakamega, Ng\'arua, Kirinyaga (1990-1999)',
    ],
    declaredAssetsSummary: 'Wamunyoro dairy farm, real estate in Nairobi and Nyeri, hospitality properties.',
    keyAllies: ['Gathoni Wamuchomba', 'James Gakuya', 'Cleophas Malala'],
    knownRivals: ['William Ruto', 'Kithure Kindiki', 'Kimani Ichung\'wah'],
  },

  // 12. Purity Wangui Ngirici - Prominent Aspirant for Kirinyaga Governor 2027
  {
    id: 'p-ngirici',
    name: 'Purity Wangui Ngirici',
    aliases: ['Wangui wa Ngirici', 'General wa Kirinyaga'],
    photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80',
    gender: 'Female',
    birthDate: '1978-06-18',
    originCountyId: '020', // Kirinyaga
    isIncumbent: false,
    currentPosition: 'aspirant',
    positionCategory: 'county_executive',
    officeHeldSince: '2017-2022 (Ex-Women Rep)',
    partyId: 'independent',
    coalition: 'Independent',
    nominationType: 'Independent',
    nominatedBy: 'Grassroots Kirinyaga Women & Youth Groups',
    partyHoppingHistory: [
      { party: 'Jubilee', fromYear: 2017, toYear: 2021, notes: 'Kirinyaga County Women Representative' },
      { party: 'UDA', fromYear: 2021, toYear: 2022, notes: 'Early UDA financier; quit after primaries dispute' },
      { party: 'Independent', fromYear: 2022, toYear: 2027, notes: 'Mounting major 2027 gubernatorial rematch' },
    ],
    vyingForPosition: 'governor',
    vyingCountyId: '020',
    vyingPartyId: 'independent',
    campaignSlogan: 'Kirinyaga Kwanza: Utumishi Bila Vitisho',
    estimatedSupportersCount: 135000,
    latestPollScorePercentage: 48.0,
    publicSentimentRating: 65,
    originStory: 'Prominent Kirinyaga entrepreneur and mining magnate spouse. Won women rep seat by historic margins in 2017.',
    educationSummary: [
      'Bachelor of Commerce - Gretsa University',
      'Kirinyaga Girls High School',
    ],
    careerHistory: [
      'Chairperson, Kenya Pipeline Company Board (Appointed 2023)',
      'Women Representative, Kirinyaga County (2017-2022)',
      'Chairperson, Kenya Women Parliamentary Association (KEWOPA)',
    ],
    declaredAssetsSummary: 'Aviation assets, mining enterprises, transport fleet.',
    keyAllies: ['Kirinyaga Grassroots Alliance'],
    knownRivals: ['Anne Waiguru'],
  }
];

export const POLITICIAN_SCORECARDS: PoliticianScorecard[] = [
  {
    id: 'sc-sudi',
    politicianId: 'p-sudi',
    evaluationPeriod: '13th Parliament (2022 - Present)',
    hansardSpeechCount: 0, // ZERO speeches in the 13th Parliament!
    billsSponsoredCount: 0,
    billsPassedCount: 0,
    motionsTabledCount: 0,
    committeeAttendancePercentage: 14,
    floorAttendancePercentage: 22,
    activityTier: 'Ghost/Silent',
    overallDeliveryScore: 19,
    notableContributions: ['Active attendance at political rallies and weekend church fundraisers in Rift Valley and Western Kenya.'],
    zeroActivityFlag: true,
    flagExplanation: 'Official Parliamentary Hansard indices record zero substantive spoken contributions on the floor of the National Assembly across both the 12th and 13th Parliaments. Never sponsored a public bill.',
    auditorGeneralFlagsCount: 7,
    reportedScandals: [
      {
        title: 'Academic Credentials Forgery Case',
        year: 2016,
        agency: 'Ethics and Anti-Corruption Commission (EACC)',
        description: 'Charged with forging a diploma certificate in Business Management from the Kenya Institute of Management (KIM) and KCSE certificate from Highway Secondary School.',
        status: 'Cleared'
      },
      {
        title: 'Kapseret NG-CDF Inflated School Construction',
        year: 2023,
        agency: 'Auditor General of Kenya',
        amountKes: 42000000,
        description: 'Auditor General flagged unvouched payments and delayed works in multi-million vocational training center tenders.',
        status: 'Under Investigation'
      }
    ]
  },
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
      'Sponsored and steered the Affordable Housing Bill 2023 through passage.',
      'Piloted the Finance Bill 2023 and 2024 through parliamentary committee stages.',
      'Instrumental in National Government CDF Amendment proposals.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 2,
    reportedScandals: [
      {
        title: 'Northlands City Farm Invasion Allegations',
        year: 2023,
        agency: 'Directorate of Criminal Investigations (DCI)',
        description: 'Investigated by police over alleged incendiary public remarks preceding the synchronized breach of the Kenyatta family Northlands estate.',
        status: 'Alleged'
      }
    ]
  },
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
      'Sponsored the Higher Education Loans Board (HELB) Amendment Bill to remove penalty interest on unemployed graduates.',
      'Pioneered free high school online STEM revision masterclasses for KCSE candidates nationwide.',
      'Constructed state-of-the-art multi-storey public primary school blocks across Embakasi East.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 1,
    reportedScandals: [
      {
        title: 'B-Club Shooting Incident (DJ Evolve Case)',
        year: 2020,
        agency: 'Office of the Director of Public Prosecutions (ODPP)',
        description: 'Charged with attempted murder following a nightclub shooting incident. Reached alternative dispute resolution covering medical and ongoing rehabilitation costs.',
        status: 'Cleared'
      }
    ]
  },
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
      'Chaired Budget & Appropriations Committee managing annual KES 3.9 Trillion national budget hearings.',
      'Re-engineered Kiharu NG-CDF into national benchmark: tiled floors in all public schools, KES 1,000 day secondary school subsidized fees program.',
      'Introduced comprehensive school feeding programs in rural schools.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 0,
    reportedScandals: []
  },
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
      'Tabled groundbreaking forensic audits on national debt servicing and fictitious foreign loans.',
      'Drafted County Allocation of Revenue oversight benchmarks for Busia border revenues.'
    ],
    zeroActivityFlag: false,
    auditorGeneralFlagsCount: 0,
    reportedScandals: []
  }
];

export const BUREAUCRACY_NODES: BureaucracyNode[] = [
  {
    id: 'bn-cs-treasury',
    title: 'Cabinet Secretary for the National Treasury and Economic Planning',
    branch: 'Executive',
    departmentMinistry: 'The National Treasury',
    holderName: 'John Mbadi Ng\'ongo',
    holderPhotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    appointmentType: 'Presidential Appointment (National Assembly Approval)',
    appointingAuthority: 'President of Kenya upon recommendation of Parliamentary Approval Committee',
    appointingLawArticle: 'Article 152(2) of the Constitution of Kenya 2010',
    dateAssumedOffice: '2024-08-08',
    annualBudgetOversightKes: 3900000000000,
    mandateOverview: 'Formulating macroeconomic policy, national budget preparation, debt sustainability management, and exchequer releases.',
    accountabilityHotlineOrEmail: 'ps@treasury.go.ke',
    isPoliticalAspirant: true,
    futureVyingTarget: 'Suba South MP / Homa Bay Politics (2027)'
  },
  {
    id: 'bn-cs-interior',
    title: 'Cabinet Secretary for Interior and National Administration',
    branch: 'Executive',
    departmentMinistry: 'Ministry of Interior',
    holderName: 'Prof. Kithure Kindiki',
    holderPhotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    appointmentType: 'Presidential Appointment (National Assembly Approval)',
    appointingAuthority: 'President of Kenya',
    appointingLawArticle: 'Article 152(2) & Article 147 of the Constitution of Kenya',
    dateAssumedOffice: '2022-10-27 (Sworn in as DP 2024-11-01)',
    annualBudgetOversightKes: 240000000000,
    mandateOverview: 'Internal security coordination, National Police Service oversight, immigration and registration of persons, disaster response.',
    accountabilityHotlineOrEmail: 'interior@interior.go.ke',
    isPoliticalAspirant: true,
    futureVyingTarget: 'Presidency / Running Mate (2027)'
  },
  {
    id: 'bn-ps-internal-security',
    title: 'Principal Secretary for Internal Security & National Administration',
    branch: 'Executive',
    departmentMinistry: 'State Department for Internal Security',
    holderName: 'Dr. Raymond Omollo',
    holderPhotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    appointmentType: 'Presidential Appointment (National Assembly Approval)',
    appointingAuthority: 'President of Kenya from Public Service Commission nominees',
    appointingLawArticle: 'Article 155(2) of the Constitution of Kenya',
    dateAssumedOffice: '2022-12-02',
    annualBudgetOversightKes: 185000000000,
    mandateOverview: 'Accounting officer for internal security operations, coordination of 8 Regional Commissioners, 47 County Commissioners, and chiefs.',
    accountabilityHotlineOrEmail: 'ps.security@interior.go.ke',
    isPoliticalAspirant: false
  },
  {
    id: 'bn-chief-justice',
    title: 'Chief Justice and President of the Supreme Court of Kenya',
    branch: 'Judiciary',
    departmentMinistry: 'Judiciary of Kenya',
    holderName: 'Hon. Lady Justice Martha Karambu Koome',
    holderPhotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    appointmentType: 'Judicial Service Commission Appointment',
    appointingAuthority: 'President of Kenya upon JSC competitive recruitment and Parliamentary vetting',
    appointingLawArticle: 'Article 166(1)(a) of the Constitution of Kenya',
    dateAssumedOffice: '2021-05-21',
    annualBudgetOversightKes: 22000000000,
    mandateOverview: 'Head of the Judiciary, chair of the Judicial Service Commission, ultimate constitutional arbiter and presidential election petition judge.',
    accountabilityHotlineOrEmail: 'cj@judiciary.go.ke',
    isPoliticalAspirant: false
  },
  {
    id: 'bn-auditor-general',
    title: 'Auditor-General of the Republic of Kenya',
    branch: 'Independent Commission',
    departmentMinistry: 'Office of the Auditor-General (OAG)',
    holderName: 'FCPA Nancy Gathungu, CBS',
    holderPhotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    appointmentType: 'Presidential Appointment (National Assembly Approval)',
    appointingAuthority: 'President of Kenya following competitive selection by a special search panel',
    appointingLawArticle: 'Article 229 of the Constitution of Kenya',
    dateAssumedOffice: '2020-07-17',
    annualBudgetOversightKes: 8500000000,
    mandateOverview: 'Independent forensic audit of all public funds across the National Government, 47 Counties, Judiciary, Parliament, and all state corporations.',
    accountabilityHotlineOrEmail: 'info@oagkenya.go.ke',
    isPoliticalAspirant: false
  },
  {
    id: 'bn-cde-nairobi',
    title: 'County Director of Education - Nairobi City County',
    branch: 'County Administration',
    departmentMinistry: 'Ministry of Education & Teachers Service Commission',
    holderName: 'Margaret Lesuuda',
    holderPhotoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80',
    appointmentType: 'Public Service Commission Appointment',
    appointingAuthority: 'Cabinet Secretary for Education via Public Service Commission',
    appointingLawArticle: 'Basic Education Act Section 46',
    dateAssumedOffice: '2023-01-15',
    annualBudgetOversightKes: 14000000000,
    mandateOverview: 'Supervising national exams (KPSEA, KCSE), capitation disbursement to public schools, CBC implementation, teacher discipline in Nairobi.',
    accountabilityHotlineOrEmail: 'cde.nairobi@education.go.ke',
    isPoliticalAspirant: false
  }
];

export const POWER_BROKERS: PowerBroker[] = [
  {
    id: 'pb-kenyatta-family',
    name: 'The Kenyatta Family & Associates',
    aliasOrTitle: 'The First Family Dynasty',
    originRegion: 'Central Kenya (Kiambu) & Rift Valley',
    estimatedNetWorthKes: 250000000000,
    primarySectors: ['Banking & Fintech', 'Dairy Processing', 'Real Estate & Urban Land', 'Media', 'Hospitality'],
    flagshipCompanies: [
      'NCBA Group (Largest retail bank lender in East Africa via M-Shwari)',
      'Brookside Dairy (Controls over 45% of formal Kenyan milk processing)',
      'Northlands City Development (11,000 acre master-planned city in Ruiru)',
      'Heritage Hotels & Great Rift Valley Lodge',
      'Mediamax Network (K24 TV, Kameme FM, People Daily)'
    ],
    associatedPoliticalFactions: ['Jubilee Party', 'Azimio la Umoja', 'Mount Kenya Foundation'],
    familyDynasty: 'Kenyatta Family',
    notableStateTenders: [
      'Historical military food rations supply',
      'Strategic bank infrastructure for Treasury bonds',
      'SGR land compensation disbursements'
    ],
    influenceSummary: 'The most formidable economic dynasty in post-colonial Kenya, with vast land reserves across Rift Valley, Central, and Coast provinces.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'pb-wanjigi',
    name: 'Jimi Richard Wanjigi',
    aliasOrTitle: 'The James Bond of Kenyan Procurement & Political Kingmaker',
    originRegion: 'Central Kenya (Murang\'a) / Nairobi',
    estimatedNetWorthKes: 55000000000,
    primarySectors: ['Mega-Infrastructure Procurement', 'Security Intelligence Contracts', 'Real Estate', 'Agribusiness'],
    flagshipCompanies: [
      'Kwacha Group of Companies',
      'Tyl Ltd (High-security government installations and weapons systems)',
      'Carbacid Investments interests',
      'Prime Westlands commercial complexes'
    ],
    associatedPoliticalFactions: ['Safina Party Leader', 'Former financier of Jubilee (2013) & NASA (2017)'],
    familyDynasty: 'Maina Wanjigi Dynasty (Son of former long-serving KANU Cabinet Minister)',
    notableStateTenders: [
      'Standard Gauge Railway (SGR) initial procurement structuring',
      'Integrated Security Surveillance Systems',
      'JKIA Terminal 1Expansion consortia'
    ],
    influenceSummary: 'Legendary behind-the-scenes political architect and tender kingpin who bankrolled past presidential alliances; now vocal opposition figure and 2027 presidential contender.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'
  }
];

export const BUDGET_ALLOCATIONS: BudgetAllocation[] = [
  {
    id: 'ba-kapseret-24',
    entityType: 'Constituency',
    entityId: 'c-kapseret',
    fiscalYear: '2023/2024',
    fundName: 'NG-CDF',
    allocatedAmountKes: 145000000,
    disbursedAmountKes: 138000000,
    absorptionRatePercentage: 62,
    auditRating: 'Qualified',
    flaggedExpendituresKes: 42000000,
    topFundedProjects: [
      { projectName: 'Simat Secondary Modern Science Lab', sector: 'Education', allocatedKes: 12000000, status: 'Stalled' },
      { projectName: 'Kapseret Police Sub-Station Security Barracks', sector: 'Security', allocatedKes: 8000000, status: 'Completed' },
      { projectName: 'Lemook ICT Hub and Skills Center', sector: 'Education', allocatedKes: 15000000, status: 'Ghost Project' },
    ]
  },
  {
    id: 'ba-kiharu-24',
    entityType: 'Constituency',
    entityId: 'c-kiharu',
    fiscalYear: '2023/2024',
    fundName: 'NG-CDF',
    allocatedAmountKes: 155000000,
    disbursedAmountKes: 155000000,
    absorptionRatePercentage: 98,
    auditRating: 'Unqualified (Clean)',
    flaggedExpendituresKes: 0,
    topFundedProjects: [
      { projectName: 'Kiharu Primary Schools Modern Tiling & Painting (All 112 Schools)', sector: 'Education', allocatedKes: 65000000, status: 'Completed' },
      { projectName: 'Masomo Bora High School Capitation Subsidies', sector: 'Education', allocatedKes: 40000000, status: 'Completed' },
      { projectName: 'Murang\'a Town Security Surveillance Network', sector: 'Security', allocatedKes: 18000000, status: 'Completed' },
    ]
  },
  {
    id: 'ba-embakasi-east-24',
    entityType: 'Constituency',
    entityId: 'c-embakasi-east',
    fiscalYear: '2023/2024',
    fundName: 'NG-CDF',
    allocatedAmountKes: 172000000,
    disbursedAmountKes: 168000000,
    absorptionRatePercentage: 91,
    auditRating: 'Unqualified (Clean)',
    flaggedExpendituresKes: 1200000,
    topFundedProjects: [
      { projectName: 'Embakasi East Aviation High School Complex', sector: 'Education', allocatedKes: 55000000, status: 'Ongoing' },
      { projectName: 'Soweto Youth Vocational Training Institute', sector: 'Education', allocatedKes: 22000000, status: 'Completed' },
      { projectName: 'Annual Tertiary Bursary Fund (5,000 students)', sector: 'Education', allocatedKes: 60000000, status: 'Completed' },
    ]
  }
];

export const CROWD_INTELLIGENCE_LOGS: CrowdIntelligenceLog[] = [
  {
    id: 'cl-001',
    politicianId: 'p-sudi',
    constituencyId: 'c-kapseret',
    countyId: '027',
    category: 'Floor Inaction',
    title: 'Hansard Index Confirms Zero Floor Debates for Kapseret in 2024',
    description: 'Scrutiny of the official National Assembly Hansard records shows Hon. Oscar Sudi has yet to introduce a question or deliver an economic/policy statement for Kapseret voters throughout the current legislative calendar.',
    authorAlias: 'EldoretCivicWatch',
    location: 'Kapseret, Uasin Gishu',
    evidenceLinks: ['http://www.parliament.go.ke/the-national-assembly/house-business/hansard'],
    verifiedStatus: 'Verified by Field Observers',
    upvotes: 342,
    downvotes: 18,
    createdAt: '2026-09-15T11:20:00Z'
  },
  {
    id: 'cl-002',
    politicianId: 'p-nyoro',
    constituencyId: 'c-kiharu',
    countyId: '021',
    category: 'Development Proof',
    title: 'All 112 Public Primary Schools in Kiharu Complete Ceramic Tiling & Renovation',
    description: 'Field inspection across Mugumo-ini, Gaturi, and Mbiri wards confirms contractor handover of all tiled, painted classrooms and modern teacher workstations funded through the Masomo Bora NG-CDF drive.',
    authorAlias: 'MurangaAuditPatrol',
    location: 'Kiharu, Murang\'a',
    evidenceLinks: ['https://cdf.go.ke/kiharu-project-registry-2024'],
    verifiedStatus: 'Verified by Field Observers',
    upvotes: 512,
    downvotes: 12,
    createdAt: '2026-09-28T14:45:00Z'
  },
  {
    id: 'cl-003',
    politicianId: 'p-sakaja',
    countyId: '047',
    category: 'Broken Promise',
    title: 'Dishi na County School Feeding Interrupted in 4 Eastlands Sub-Counties Due to Supplier Arrears',
    description: 'Community monitors in Dandora and Mathare report school headteachers had to halt midday meals for three days due to unpaid food distributors and central kitchen logistics bottlenecks.',
    authorAlias: 'NairobiParentsForum',
    location: 'Dandora, Nairobi',
    evidenceLinks: ['https://nairobi.go.ke/dishi-na-county-status'],
    verifiedStatus: 'Crowd Corroborated',
    upvotes: 289,
    downvotes: 43,
    createdAt: '2026-10-02T08:15:00Z'
  }
];
