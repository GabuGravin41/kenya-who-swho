import { ConstituencyRaceOverview } from '@kenya-elections/shared-types';

export const ALL_BATTLEGROUND_RACES: ConstituencyRaceOverview[] = [
  {
    id: 'race-kapseret',
    constituencyId: 'c-143',
    constituencyName: 'Kapseret',
    countyName: 'Uasin Gishu',
    registeredVoters: 74902,
    marginOfVictory2022Votes: 14210,
    vulnerabilityTier: 'HOT_BATTLEGROUND_TOSSUP',
    incumbentId: 'pol-oscar-sudi',
    incumbentName: 'Oscar Kipchumba Sudi',
    incumbentCurrentParty: 'UDA',
    incumbent2027Status: 'Facing Heavy Ground Resistance',
    genZBulgePercentage: 36.4,
    topChallengers: [
      {
        id: 'chal-kap-1',
        name: 'Stephen Kiprotich (Eng.)',
        aliases: [' Arap Samoei Wa Ground', 'The Technocrat'],
        constituencyId: 'c-143',
        prospectiveParty: 'Independent / Gen-Z Reform Caucus',
        coalitionAlignment: 'Independent Civic Movement',
        backgroundProfession: 'Civil Engineer & Youth Community Organizer',
        campaignWarChestEstKes: 25000000,
        estimatedGroundMomentum: 'Surging',
        keyPlatformPromises: [
          'Audit and digitize 100% of NG-CDF bursary allocations',
          'Break proxy contractor monopoly on rural feeder roads',
          'Active Hansard legislative representation in Parliament'
        ],
        notableEndorsements: ['Uasin Gishu University Students Association', 'Local Matatu Saccos'],
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'
      },
      {
        id: 'chal-kap-2',
        name: 'Grace Chelagat',
        aliases: ['Mama Kapseret'],
        constituencyId: 'c-143',
        prospectiveParty: 'UDA Primaries Challenger',
        coalitionAlignment: 'Kenya Kwanza Internal Dissidents',
        backgroundProfession: 'Agricultural Cooperative Leader & Former MCA',
        campaignWarChestEstKes: 40000000,
        estimatedGroundMomentum: 'Competitive',
        keyPlatformPromises: [
          'Subsidized dairy chilling hubs in Pioneer and Megun wards',
          'Youth vocational polytechnic expansions'
        ],
        notableEndorsements: ['Kapseret Women Agribusiness Network'],
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      }
    ],
    keyVoterIssues: [
      'Incumbent zero-speech floor record in National Assembly (Hansard)',
      'Perception of ostentatious display of wealth vs poverty in informal settlements',
      'Unresolved bursary distribution transparency complaints'
    ],
    battlegroundAnalysis: 'Kapseret has become the epicenter of political debate in Rift Valley. While Sudi maintains close proximity to executive power, the 2024 youth uprising reshaped the local electorate, making him vulnerable to a credible technocratic or independent youth challenger.'
  },
  {
    id: 'race-langata',
    constituencyId: 'c-283',
    constituencyName: 'Lang\'ata',
    countyName: 'Nairobi',
    registeredVoters: 145638,
    marginOfVictory2022Votes: 3200,
    vulnerabilityTier: 'HOT_BATTLEGROUND_TOSSUP',
    incumbentId: 'pol-jalango',
    incumbentName: 'Phelix Odiwuor (Jalang\'o)',
    incumbentCurrentParty: 'ODM (Rebel)',
    incumbent2027Status: 'Facing Heavy Ground Resistance',
    genZBulgePercentage: 42.1,
    topChallengers: [
      {
        id: 'chal-lan-1',
        name: 'Nixon Korir',
        aliases: ['Generali'],
        constituencyId: 'c-283',
        prospectiveParty: 'UDA',
        coalitionAlignment: 'Kenya Kwanza',
        backgroundProfession: 'Principal Secretary for Lands & Physical Planning',
        campaignWarChestEstKes: 120000000,
        estimatedGroundMomentum: 'Competitive',
        keyPlatformPromises: [
          'Title deed regularizations for Highrise and Southlands',
          'Public land reclamation and modern sports arenas in Karen/Otiende'
        ],
        notableEndorsements: ['Nairobi Business Community', 'State House Logistics Core'],
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      {
        id: 'chal-lan-2',
        name: 'Okoth Alex',
        aliases: ['Jakanyango'],
        constituencyId: 'c-283',
        prospectiveParty: 'ODM (Official Ticket Aspirant)',
        coalitionAlignment: 'Azimio / Baba Ground Command',
        backgroundProfession: 'Human Rights Advocate & Kibera-Langata Liaison',
        campaignWarChestEstKes: 30000000,
        estimatedGroundMomentum: 'Surging',
        keyPlatformPromises: [
          'Reclaiming the seat for loyal ODM grassroots base',
          'Sewerage infrastructure and clean water piped to informal settlements'
        ],
        notableEndorsements: ['ODM Youth League', 'Bunge la Mwananchi Langata'],
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
      }
    ],
    keyVoterIssues: [
      'Incumbent voted YES on Finance Bill 2024 and supported ruling side in defiance of ODM voters',
      'Cosmopolitan voter divide between high-end Karen voters and high-density informal estates',
      'Water rationing in Nairobi West, South C, and Lang\'ata estates'
    ],
    battlegroundAnalysis: 'Jalang\'o is squeezed between two opposing forces: the official ODM party machinery that views him as a traitor, and UDA forces pushing PS Nixon Korir to recapture the seat. It is one of the highest-stakes battlegrounds in the country.'
  },
  {
    id: 'race-embakasi-east',
    constituencyId: 'c-278',
    constituencyName: 'Embakasi East',
    countyName: 'Nairobi',
    registeredVoters: 154620,
    marginOfVictory2022Votes: 12850,
    vulnerabilityTier: 'HIGH_RISK_OPEN_SEAT',
    incumbentId: 'pol-babu-owino',
    incumbentName: 'Babu Owino (Paul Ongili)',
    incumbentCurrentParty: 'ODM',
    incumbent2027Status: 'Vying for Governor',
    genZBulgePercentage: 45.8,
    topChallengers: [
      {
        id: 'chal-emb-1',
        name: 'Francis Mureithi',
        aliases: ['Mureithi wa Kazi'],
        constituencyId: 'c-278',
        prospectiveParty: 'UDA',
        coalitionAlignment: 'Kenya Kwanza',
        backgroundProfession: 'Real Estate Developer & 2017/2022 Runner-up',
        campaignWarChestEstKes: 80000000,
        estimatedGroundMomentum: 'Competitive',
        keyPlatformPromises: [
          'Infrastructure paving in Lower Savannah and Mihang\'o',
          'Business grant access for SME traders in Soweto'
        ],
        notableEndorsements: ['Embakasi Business Community'],
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      {
        id: 'chal-emb-2',
        name: 'Dr. Michael Otieno',
        aliases: ['The Don of Utawala'],
        constituencyId: 'c-278',
        prospectiveParty: 'ODM',
        coalitionAlignment: 'Azimio',
        backgroundProfession: 'Public Health Specialist & Babu Owino Protege',
        campaignWarChestEstKes: 35000000,
        estimatedGroundMomentum: 'Surging',
        keyPlatformPromises: [
          'Maintain Babu Owino\'s legacy school bus fleets and scholarship foundation',
          'Maternity wing expansion in Embakasi Health Centre'
        ],
        notableEndorsements: ['University of Nairobi Alumni Caucus'],
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
      }
    ],
    keyVoterIssues: [
      'Babu Owino\'s expected departure to run for Nairobi Governor leaves a massive vacuum',
      'Rapidly growing middle-class estates in Utawala and Mihang\'o lacking proper drainage and piped water',
      'Heavy youth unemployment in Soweto and informal wards'
    ],
    battlegroundAnalysis: 'If Babu Owino confirms his Gubernatorial run, Embakasi East becomes Nairobi\'s most hotly contested open seat, pitting deep-pocketed UDA contenders against battle-hardened ODM grassroots organizers.'
  },
  {
    id: 'race-kikuyu',
    constituencyId: 'c-112',
    constituencyName: 'Kikuyu',
    countyName: 'Kiambu',
    registeredVoters: 108420,
    marginOfVictory2022Votes: 28500,
    vulnerabilityTier: 'HOT_BATTLEGROUND_TOSSUP',
    incumbentId: 'pol-ichungwah',
    incumbentName: 'Kimani Ichung\'wah',
    incumbentCurrentParty: 'UDA',
    incumbent2027Status: 'Defending Seat',
    genZBulgePercentage: 38.2,
    topChallengers: [
      {
        id: 'chal-kik-1',
        name: 'Kamau Wambui (Advocate)',
        aliases: ['Wakili wa Wanjiku'],
        constituencyId: 'c-112',
        prospectiveParty: 'Independent / Mount Kenya Unity',
        coalitionAlignment: 'Anti-Regime Mount Kenya Bloc',
        backgroundProfession: 'Constitutional Litigator & Public Interest Lawyer',
        campaignWarChestEstKes: 45000000,
        estimatedGroundMomentum: 'Surging',
        keyPlatformPromises: [
          'Repeal punitive tax legislation affecting smallholder poultry and horticulture',
          'Restore dignity and voice of Kikuyu constituency beyond party sycophancy'
        ],
        notableEndorsements: ['Mount Kenya Church Elders Council', 'Kiambu Traders Union'],
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      }
    ],
    keyVoterIssues: [
      'Majority Leader led the passage of Finance Bills 2023 & 2024 and Gachagua impeachment',
      'Ground voter rebellion following the ouster of Rigathi Gachagua',
      'Coffee and dairy cooperative payouts in Kinoo and Muguga'
    ],
    battlegroundAnalysis: 'Despite being the National Assembly Majority Leader with immense state machinery, Ichung\'wah faces acute anti-incumbency sentiment in Mount Kenya after spearheading bills and motions deeply opposed by his grassroots constituents.'
  },
  {
    id: 'race-githunguri',
    constituencyId: 'c-113',
    constituencyName: 'Githunguri',
    countyName: 'Kiambu',
    registeredVoters: 104500,
    marginOfVictory2022Votes: 9800,
    vulnerabilityTier: 'LEAN_INCUMBENT',
    incumbentId: 'pol-wamuchomba',
    incumbentName: 'Gathoni Wamuchomba',
    incumbentCurrentParty: 'UDA (Dissident)',
    incumbent2027Status: 'Defending Seat',
    genZBulgePercentage: 33.1,
    topChallengers: [
      {
        id: 'chal-git-1',
        name: 'David Kimani',
        aliases: ['Karanja wa Maziwa'],
        constituencyId: 'c-113',
        prospectiveParty: 'UDA (Mainstream State Candidate)',
        coalitionAlignment: 'Kenya Kwanza State House Core',
        backgroundProfession: 'Corporate Dairy Executive & State Board Member',
        campaignWarChestEstKes: 75000000,
        estimatedGroundMomentum: 'Underdog',
        keyPlatformPromises: [
          'Direct national government road funding for tea-growing zones',
          'Alignment with national ruling coalition for guaranteed development'
        ],
        notableEndorsements: ['State House Liaison Team'],
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
      }
    ],
    keyVoterIssues: [
      'Incumbent voted NO on Finance Bills and defended dairy farmers fiercely',
      'State apparatus attempting to sponsor candidate to dethrone her',
      'Minimum guaranteed returns on tea and milk'
    ],
    battlegroundAnalysis: 'Wamuchomba commands legendary popularity among Githunguri dairy and tea farmers for opposing punitive taxes. However, state machinery is preparing heavy campaign war chests to install a compliant loyalist.'
  },
  {
    id: 'race-westlands',
    constituencyId: 'c-274',
    constituencyName: 'Westlands',
    countyName: 'Nairobi',
    registeredVoters: 160739,
    marginOfVictory2022Votes: 23100,
    vulnerabilityTier: 'HOT_BATTLEGROUND_TOSSUP',
    incumbentId: 'pol-tim-wanyonyi',
    incumbentName: 'Timothy Wanyonyi Wetangula',
    incumbentCurrentParty: 'ODM',
    incumbent2027Status: 'Vying for Governor',
    genZBulgePercentage: 40.2,
    topChallengers: [
      {
        id: 'chal-wes-1',
        name: 'Nelson Havi',
        aliases: ['Generali wa LSK'],
        constituencyId: 'c-274',
        prospectiveParty: 'UDA',
        coalitionAlignment: 'Kenya Kwanza',
        backgroundProfession: 'Senior Counsel & Former LSK President',
        campaignWarChestEstKes: 60000000,
        estimatedGroundMomentum: 'Competitive',
        keyPlatformPromises: [
          'Legal aid clinics and zoning defense for Kangemi & Mountain View',
          'Strict oversight of city county urban planning and garbage levies'
        ],
        notableEndorsements: ['Urban Professional Associations'],
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
      },
      {
        id: 'chal-wes-2',
        name: 'Sylvia Mulama',
        aliases: ['Mama Kangemi'],
        constituencyId: 'c-274',
        prospectiveParty: 'ODM',
        coalitionAlignment: 'Azimio',
        backgroundProfession: 'Community Health Advocate & Businesswoman',
        campaignWarChestEstKes: 30000000,
        estimatedGroundMomentum: 'Surging',
        keyPlatformPromises: [
          'Upgrading sanitation in Kangemi and Deep Sea informal settlement',
          'Expanding bursaries for single mothers'
        ],
        notableEndorsements: ['Kangemi Market Women League'],
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      }
    ],
    keyVoterIssues: [
      'Tim Wanyonyi likely to vie for Nairobi Gubernatorial ticket leaving Westlands open',
      'Sharp contrast between affluent Parklands/Kitusuru voters and informal Kangemi/Deep Sea settlement',
      'Demolition threats and urban road expansion displacement'
    ],
    battlegroundAnalysis: 'Westlands is one of the highest net-worth constituencies in East Africa. With Tim Wanyonyi aiming for City Hall, the contest between Nelson Havi and ODM grassroots stalwarts will test whether Kenya Kwanza can break the opposition stronghold.'
  }
];
