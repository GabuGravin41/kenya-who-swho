import { EliteHangoutVenue } from '@kenya-elections/shared-types';

export const ALL_ELITE_HANGOUTS: EliteHangoutVenue[] = [
  // ==========================================
  // 1. CHURCHES & PLACES OF WORSHIP
  // ==========================================
  {
    id: 'vh-fefc-karen',
    name: 'Faith Evangelical Free Church (FEFC) Karen',
    category: 'Church / Place of Worship',
    neighborhood: 'Karen',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'William Samoei Ruto', role: 'President of the Republic of Kenya', factionOrAffiliation: 'UDA / Kenya Kwanza', politicianId: 'p-ruto' },
      { name: 'First Lady Rachel Ruto', role: 'First Lady of Kenya & Patron of National Prayer Breakfast', factionOrAffiliation: 'Presidency' },
      { name: 'Oscar Kipchumba Sudi', role: 'MP Kapseret & Presidential Confidant', factionOrAffiliation: 'UDA / Kenya Kwanza', politicianId: 'p-sudi' },
      { name: 'State House Private Aides & Key Rift Valley Technocrats', role: 'Presidential Advisory Staff', factionOrAffiliation: 'Executive' }
    ],
    primeMeetingTimes: 'Sundays 09:30 AM - 12:30 PM (Main Worship & VIP Fellowship Lawn)',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Formal Church Attire (Dark suits, modest dresses, strictly no casual t-shirts or jeans)',
      protocolAndSecurityTips: [
        'Presidential Escort Unit (PEU) conducts rigorous metal detector sweeps and sniffer-dog vehicle inspections at the Dagoretti Road entrance whenever the President attends.',
        'VIP seating is cordoned off in the front pews; ordinary parishioners sit in the main auditorium or overflow tents.',
        'To establish access, arrive before 08:30 AM; political backchannel conversations happen on the manicured lawn during post-service tea and fellowship.',
        'Never bring recording devices or attempt unauthorized photos of the First Family; plainclothes security details monitor perimeter seating closely.'
      ]
    },
    politicalSignificance: 'The private spiritual sanctuary and primary weekend base of President William Ruto. Multiple key parastatal appointments, church harambee pledges, and diplomatic prayer initiatives have been informally blessed within this sanctuary fellowship.',
    coordinatesOrAddress: 'Off Dagoretti Road, near Karen Shopping Centre, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1548625361-195fe61a55c3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-all-saints-cathedral',
    name: 'All Saints Cathedral (Anglican Church of Kenya)',
    category: 'Church / Place of Worship',
    neighborhood: 'Nairobi CBD / Upper Hill Boundary',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Lady Justice Martha Koome', role: 'Chief Justice & President of the Supreme Court', factionOrAffiliation: 'Judiciary' },
      { name: 'Senior Counsel Advocates & Judicial Bench Members', role: 'Legal Titans & Appellate Judges', factionOrAffiliation: 'Judiciary / LSK' },
      { name: 'Senior Civil Servants & Former Cabinet Ministers', role: 'Old Guard Technocrats', factionOrAffiliation: 'Civil Service' },
      { name: 'Edwin Watenya Sifuna', role: 'Senator for Nairobi City County', factionOrAffiliation: 'ODM / Azimio', politicianId: 'p-sifuna' }
    ],
    primeMeetingTimes: 'Sundays 09:30 AM - 11:30 AM (Second English Service) & 11:30 AM Cathedral Steps',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Smart Formal / Sunday Best (Suits, African formal agbada/batik, modest formal dresses)',
      protocolAndSecurityTips: [
        'Open public cathedral gate directly opposite Serena Hotel along Kenyatta Avenue / Uhuru Highway roundabout.',
        'The front-left pews are historically reserved for visiting dignitaries, Supreme Court judges, and diplomatic envoys.',
        'The Cathedral Cloisters and Veranda Cafe are prime spots where senior legal counsel and civil service directors mingle after service over coffee.',
        'A formal church contribution or membership registration grants inclusion into cathedral parish committee directories.'
      ]
    },
    politicalSignificance: 'The historic intellectual and moral conscience of Nairobi. Where constitutional commissions, civil rights legal giants, and senior judges worship. Major national memorial services and constitutional reconciliation statements originate here.',
    coordinatesOrAddress: 'Kenyatta Avenue, directly adjacent to Central Park and opposite Nairobi Serena Hotel',
    photoUrl: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-citam-karen',
    name: 'Christ Is The Answer Ministries (CITAM) Karen',
    category: 'Church / Place of Worship',
    neighborhood: 'Karen',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Stephen Kalonzo Musyoka', role: 'Wiper Party Leader & Former Vice President', factionOrAffiliation: 'Wiper / Azimio', politicianId: 'p-kalonzo' },
      { name: 'Musalia Mudavadi', role: 'Prime Cabinet Secretary & CS Foreign Affairs', factionOrAffiliation: 'ANC / Kenya Kwanza' },
      { name: 'Prominent Corporate Executives & Bankers', role: 'Karen Corporate Elite', factionOrAffiliation: 'Private Sector' }
    ],
    primeMeetingTimes: 'Sundays 09:00 AM - 11:00 AM (First Service) & 11:30 AM - 01:30 PM (Second Service)',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Business Casual or Formal Sunday Best',
      protocolAndSecurityTips: [
        'Located along Karen Road near Nairobi Academy. Ample secure parking with perimeter security.',
        'Political speeches from the pulpit are strictly forbidden by CITAM pastoral governance, but VIP lounges in the pastoral wing are used for quiet high-level greetings.',
        'High-ranking politicians often slip in 15 minutes before the sermon and exit during the final benediction into private waiting convoys.'
      ]
    },
    politicalSignificance: 'A cornerstone of upper-middle-class Christian political leaders from both government and opposition. Provides neutral, non-combative spiritual ground where bitter political rivals often exchange pleasantries under the eyes of senior bishops.',
    coordinatesOrAddress: 'Karen Road, Karen, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-pcea-st-andrews',
    name: "PCEA St. Andrew's Church",
    category: 'Church / Place of Worship',
    neighborhood: 'State House Road / University Way',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Mount Kenya Foundation Elders & Business Barons', role: 'Central Kenya Commercial Dynasties', factionOrAffiliation: 'Mt. Kenya Business Elite' },
      { name: 'Uhuru Muigai Kenyatta Associates', role: 'Jubilee Party Aristocracy', factionOrAffiliation: 'Jubilee / Azimio' },
      { name: 'Rigathi Gachagua Allied Church Leaders', role: 'Former Deputy President Sympathizers', factionOrAffiliation: 'Mt. Kenya Faction', politicianId: 'p-gachagua' }
    ],
    primeMeetingTimes: 'Sundays 09:00 AM - 12:00 PM (English & Kikuyu Combined Services)',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Formal Sunday Church Wear',
      protocolAndSecurityTips: [
        'Directly borders the State House road security enclave. Heightened security presence.',
        'Post-service greetings at St. Andrew\'s Memorial Hall are renowned for discreet discussions on Mount Kenya commercial and agricultural interests (coffee, tea, banking).'
      ]
    },
    politicalSignificance: 'The Presbyterian mother-church for Central Kenya power brokers. Historically the venue where Kikuyu political transitions and wealthy merchant associations converge for solemn prayers and strategic consensus.',
    coordinatesOrAddress: 'Corner of State House Road and Nyerere Road, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-aic-milimani',
    name: 'Africa Inland Church (AIC) Milimani',
    category: 'Church / Place of Worship',
    neighborhood: 'Milimani / Upper Hill',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Gideon Moi & Moi Family Associates', role: 'KANU Chairman & Former Baringo Senator', factionOrAffiliation: 'KANU / Moi Dynasty' },
      { name: 'Kalenjin Technocrats & Retired Generals', role: 'Security & Military Old Guard', factionOrAffiliation: 'Rift Valley Conservative Base' },
      { name: 'Davis Chirchir', role: 'Cabinet Secretary for Roads and Transport', factionOrAffiliation: 'Kenya Kwanza Cabinet' }
    ],
    primeMeetingTimes: 'Sundays 10:00 AM - 12:30 PM',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Formal Traditional Church Attire',
      protocolAndSecurityTips: [
        'Located near State House Nairobi and Department of Defence (DoD) headquarters.',
        'Conservative liturgy; strict respect for church protocol and quiet reverence.'
      ]
    },
    politicalSignificance: 'The historical sanctuary of the late President Daniel Toroitich arap Moi. Continues to serve as the spiritual and networking anchor for the Rift Valley establishment, senior civil service retirees, and KANU-era business stalwarts.',
    coordinatesOrAddress: 'Milimani Road, Milimani, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1477672680933-0287a151330e?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-jesus-winner-roysambu',
    name: 'Jesus Winner Ministry (Roysambu Megachurch)',
    category: 'Church / Place of Worship',
    neighborhood: 'Roysambu / Thika Road',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Bishop Edward Mwai', role: 'Presiding Bishop & Influential Political Intermediary', factionOrAffiliation: 'Evangelical Clergy' },
      { name: 'Kimani Ichung\'wah', role: 'National Assembly Majority Leader', factionOrAffiliation: 'UDA / Kenya Kwanza', politicianId: 'p-ichungwah' },
      { name: 'Ndindi Nyoro', role: 'Kiharu MP & Budget Committee Chair', factionOrAffiliation: 'UDA / Kenya Kwanza', politicianId: 'p-nyoro' }
    ],
    primeMeetingTimes: 'Sundays 10:00 AM - 02:00 PM (High-Voltage Harambees & Thanksgiving Rallies)',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Smart Casual / Modest Church Wear',
      protocolAndSecurityTips: [
        'Massive congregation exceeding 15,000 worshippers along the Thika Superhighway.',
        'Politicians are openly invited to the pulpit by Bishop Mwai to give greetings, recite Bible verses, and announce substantial multi-million shilling donations.',
        'Arrive before 09:00 AM to get seats in the VIP dais or lower auditorium.'
      ]
    },
    politicalSignificance: 'Ground zero for political evangelical populism and mega-harambees. Politicians use this pulpit to launch aggressive political offensives against rivals and mobilize grassroots Mount Kenya evangelical backing.',
    coordinatesOrAddress: 'Off Thika Superhighway, Roysambu, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1510525009512-ad7fc0c0245a?w=600&auto=format&fit=crop&q=80'
  },

  // ==========================================
  // 2. GOLF & COUNTRY CLUBS
  // ==========================================
  {
    id: 'vh-muthaiga-golf-club',
    name: 'Muthaiga Golf Club ("The Home of Golf")',
    category: 'Golf & Country Club',
    neighborhood: 'Muthaiga',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Mwai Kibaki Dynasty Family Members', role: 'Mount Kenya Land & Banking Aristocracy', factionOrAffiliation: 'Old Money' },
      { name: 'Senior Diplomatic Envoys & European Ambassadors', role: 'Diplomatic Corps Nairobi', factionOrAffiliation: 'International' },
      { name: 'Narendra Raval (Guru Devki)', role: 'Industrialist & Steel Mogul', factionOrAffiliation: 'Devki Group / Power Broker' },
      { name: 'Adil Khawaja', role: 'Managing Partner Safir Law & KCB Group Chairman', factionOrAffiliation: 'Presidential Backchannel' }
    ],
    primeMeetingTimes: 'Saturdays 07:00 AM - 11:00 AM (Morning Tee-Off Rounds) & 06:00 PM - 10:00 PM (19th Hole Bar)',
    accessRequirements: {
      membershipFeeKes: 2500000,
      membershipVetting: 'Extremely rigorous: Requires 2 proposer members of over 5 years standing, publication on notice board for 30 days, extensive vetting by Balloting Committee, and formal interview.',
      publicAccessibility: 'Members & Accompanied Guests',
      dressCode: 'Strict Traditional Golf Attire on course (Soft spikes, tucked-in polo with collar, tailored trousers). In the Clubhouse: Jacket/Blazer in the main dining room; strictly NO jeans, collarless shirts, sandals, or cargo shorts anywhere on the property.',
      entryFeeOrMinimumSpendKes: 8000,
      protocolAndSecurityTips: [
        'MOBILE PHONE BAN: Mobile phone calls are strictly banned inside the main clubhouse, bar, and dining rooms. An audible ringtone incurs a hefty member fine or immediate reprimand.',
        'The 19th Hole Bar is where billionaire industrialists, Supreme Court legal figures, and State House confidants conduct informal business. Never eavesdrop visibly or take notes.',
        'Non-members can only enter if accompanied in person by a full card-carrying member who must sign the guest register at the gate.'
      ]
    },
    politicalSignificance: 'The ultimate sanctuary of Kenya\'s "Old Money" and Anglo-African elite. Deals made on the fairways and the 19th Hole terrace often determine billion-shilling infrastructure concessions, commercial bank board appointments, and behind-the-scenes legal armistices.',
    coordinatesOrAddress: 'Muthaiga Road, Muthaiga, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-karen-country-club',
    name: 'Karen Country Club',
    category: 'Golf & Country Club',
    neighborhood: 'Karen',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'William Samoei Ruto Associates', role: 'Karen Presidential Inner Sanctum', factionOrAffiliation: 'Kenya Kwanza' },
      { name: 'Stephen Kalonzo Musyoka', role: 'Wiper Party Leader', factionOrAffiliation: 'Azimio la Umoja', politicianId: 'p-kalonzo' },
      { name: 'Musalia Mudavadi', role: 'Prime Cabinet Secretary', factionOrAffiliation: 'Kenya Kwanza Cabinet' },
      { name: 'George Natembeya Allies', role: 'Western Kenya Political Figures', factionOrAffiliation: 'Trans Nzoia Leadership', politicianId: 'p-natembeya' }
    ],
    primeMeetingTimes: 'Saturdays & Sundays 07:30 AM - 12:30 PM (Tee-off) & Friday Evenings (Club Terrace)',
    accessRequirements: {
      membershipFeeKes: 2000000,
      membershipVetting: 'Requires 2 member sponsors, character reference checks, formal balloting board approval, and 2-year provisional review.',
      publicAccessibility: 'Members & Accompanied Guests',
      dressCode: 'Smart Casual / Golf Attire. No denim with tears, no beachwear, collar required on shirts.',
      entryFeeOrMinimumSpendKes: 6500,
      protocolAndSecurityTips: [
        'Guest green fees must be settled via cashless M-Pesa or credit card signed under an active member\'s folio.',
        'The club overlooks the Ngong Hills; the garden terrace is favored for quiet political breakfasts and private coalition negotiations away from media cameras.',
        'Security detail and armed bodyguards are strictly required to remain outside the clubhouse gates in designated parking holding areas.'
      ]
    },
    politicalSignificance: 'The preferred playground for Nairobi\'s Karen elite, cabinet secretaries, and former prime ministers. It provides an exclusive, tranquil atmosphere where cross-party leaders frequently play 18 holes together before breaking bread.',
    coordinatesOrAddress: 'Karen Road, Karen, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-windsor-golf-club',
    name: 'Windsor Golf Hotel & Country Club',
    category: 'Golf & Country Club',
    neighborhood: 'Ridgeways / Kigwa',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'John Michuki Dynasty Heirs', role: 'Founding Dynasty & Kiambu Tea Barons', factionOrAffiliation: 'Mt. Kenya Dynasties' },
      { name: 'Kipchumba Murkomen', role: 'Cabinet Secretary for Youth Affairs & Sports', factionOrAffiliation: 'Kenya Kwanza Cabinet' },
      { name: 'Visiting Regional Heads of State & Corporate Delegations', role: 'International Envoys', factionOrAffiliation: 'Diplomatic' }
    ],
    primeMeetingTimes: 'Fridays 04:00 PM - 09:00 PM & Sunday Afternoons',
    accessRequirements: {
      membershipFeeKes: 1200000,
      membershipVetting: 'Both private club membership and luxury resort day-access available via dining/green fee reservations.',
      publicAccessibility: 'Reservation / Patron Purchase',
      dressCode: 'Smart Casual (Collared shirts, tailored trousers or chinos; no sportswear in fine dining rooms)',
      entryFeeOrMinimumSpendKes: 5000,
      protocolAndSecurityTips: [
        'Because Windsor doubles as a luxury resort hotel, it is much easier for non-members to access legally by booking a luxury table at the Conservatory Restaurant or reserving an 18-hole green fee.',
        'The sprawling indigenous forest surrounding the golf course offers complete privacy for confidential political walking dialogues.'
      ]
    },
    politicalSignificance: 'Famous as the historical venue where high-stakes Mt. Kenya political pacts (such as the 2002 NARC power-sharing negotiations and 2007 PNU coalition accords) were privately drafted in secluded luxury suites.',
    coordinatesOrAddress: 'Kigwa Lane, Off Kiambu Road, Ridgeways, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-royal-nairobi-golf-club',
    name: 'Royal Nairobi Golf Club (Established 1906)',
    category: 'Golf & Country Club',
    neighborhood: 'Ngong Road / Golf Course Estate',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Senior Members of Parliament & Parliamentary Committee Chairs', role: 'Legislative Heavyweights', factionOrAffiliation: 'National Assembly' },
      { name: 'Babu Owino Associates & Young MPs', role: 'Urban Legislative Caucus', factionOrAffiliation: 'Parliamentary Elite', politicianId: 'p-babu' },
      { name: 'Senior Civil Service Directors & Parastatal CEOs', role: 'State Technocrats', factionOrAffiliation: 'Civil Service' }
    ],
    primeMeetingTimes: 'Wednesdays Club Night (06:00 PM - 11:00 PM) & Saturday Afternoons',
    accessRequirements: {
      membershipFeeKes: 1000000,
      membershipVetting: 'Requires 2 senior member proposers, screening by Balloting Board, and joining fee settlement.',
      publicAccessibility: 'Members & Accompanied Guests',
      dressCode: 'Golf attire on course; smart casual in lounge. No flip-flops or sleeveless shirts for men.',
      entryFeeOrMinimumSpendKes: 4000,
      protocolAndSecurityTips: [
        'Centrally located right along Ngong Road near Kenyatta National Hospital.',
        'The Wednesday "Club Night" attracts dozens of sitting legislators and state parastatal heads unwinding after parliamentary committee morning sittings.'
      ]
    },
    politicalSignificance: 'The oldest golf club in Kenya. Due to its close proximity to Parliament Buildings and Upper Hill government ministries, it is the most frequented golf club by active sitting Members of Parliament and tender contractors.',
    coordinatesOrAddress: 'Muchai Drive, Off Ngong Road, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=600&auto=format&fit=crop&q=80'
  },

  // ==========================================
  // 3. PRIVATE MEMBERS CLUBS
  // ==========================================
  {
    id: 'vh-nairobi-club',
    name: 'The Nairobi Club (Founded 1901)',
    category: 'Private Members Club',
    neighborhood: 'Upper Hill',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'High Court & Court of Appeal Judges', role: 'Judicial Officers & Arbitrators', factionOrAffiliation: 'Judiciary' },
      { name: 'Senior Counsel Advocates & Law Society Barons', role: 'Constitutional Lawyers', factionOrAffiliation: 'Legal Establishment' },
      { name: 'Principal Secretaries & Ministry Accounting Officers', role: 'Executive Bureaucracy', factionOrAffiliation: 'Civil Service' }
    ],
    primeMeetingTimes: 'Weekdays 12:30 PM - 02:30 PM (Power Lunches) & Thursday Evenings 06:00 PM - 09:30 PM',
    accessRequirements: {
      membershipFeeKes: 800000,
      membershipVetting: 'Strict vetting: Requires proposer and seconder with at least 3 years active membership, letter of good standing, and interview with General Committee.',
      publicAccessibility: 'Strictly Members Only',
      dressCode: 'Strict Formal / Smart Casual (Jackets preferred in main dining; absolutely no sportswear, sandals, or denim)',
      protocolAndSecurityTips: [
        'Cell phone usage is strictly forbidden in all indoor reading and dining lounges.',
        'Judges and top state lawyers hold informal discussions here; overt political shouting or heated campaign arguments are considered severe breaches of club etiquette.'
      ]
    },
    politicalSignificance: 'Located directly in the Upper Hill government ministry belt. This club is the epicenter of the Kenyan legal establishment and civil service aristocracy. Behind its quiet colonial mahogany tables, landmark constitutional legal tactics and state arbitration settlements are debated.',
    coordinatesOrAddress: 'Ngong Road / Haile Selassie Avenue Junction, Upper Hill, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80'
  },

  // ==========================================
  // 4. LUXURY HOTEL LOUNGES & BARS
  // ==========================================
  {
    id: 'vh-serena-aksum-bar',
    name: 'Nairobi Serena Hotel - The Aksum Bar & Poolside Terrace',
    category: 'Luxury Hotel Lounge & Bar',
    neighborhood: 'Central Nairobi / Kenyatta Avenue',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Raila Amolo Odinga & Azimio Summit Delegates', role: 'Opposition Kingpin & Envoys', factionOrAffiliation: 'Azimio / ODM', politicianId: 'p-raila' },
      { name: 'Diplomatic Negotiators & UN / AU Envoys', role: 'Peace & Electoral Observers', factionOrAffiliation: 'International' },
      { name: 'Senior Political Advisers & Cabinet Envoys', role: 'Government Intermediaries', factionOrAffiliation: 'Cross-Party Backchannel' }
    ],
    primeMeetingTimes: 'Daily 05:00 PM - 11:00 PM (Cocktail Hours & Late Evening Private Briefings)',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Smart Casual / Business Formal (No sleeveless shirts, beachwear, or athletic wear)',
      entryFeeOrMinimumSpendKes: 3000,
      protocolAndSecurityTips: [
        'Vehicles pass through comprehensive explosive detection and under-carriage mirror screening at the main gate.',
        'The secluded corner tables at the Aksum Bar and the outdoor cabanas beside the heated pool are the classic seats for confidential political negotiations.',
        'Plainclothes security and intelligence operatives are routinely positioned in the lobby; conversations must always be handled with discreet awareness.'
      ]
    },
    politicalSignificance: 'Ground zero for 21st-century Kenyan political history. The 2008 National Accord ending post-election violence was mediated right here by Kofi Annan. During every election dispute and bipartisan crisis, party chiefs dispatch their emissaries to Serena to strike backroom deals.',
    coordinatesOrAddress: 'Processional Way, Off Kenyatta Avenue, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-hemingways-karen',
    name: 'Hemingways Nairobi - The Lounge & Private Suite Terraces',
    category: 'Luxury Hotel Lounge & Bar',
    neighborhood: 'Karen (Mbagathi Ridge)',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Jimi Richard Wanjigi', role: 'Billionaire Power Broker & Presidential Contender', factionOrAffiliation: 'Power Broker / Safina', politicianId: 'pb-wanjigi' },
      { name: 'Top Cabinet Secretaries & Visiting Foreign Royalty', role: 'VIP Decision Makers', factionOrAffiliation: 'State House / Cabinet' },
      { name: 'Senior Intelligence & Security Sector Advisers', role: 'National Security Apparatus', factionOrAffiliation: 'State Technocrats' }
    ],
    primeMeetingTimes: 'Weekdays 06:00 PM - 10:30 PM & Saturday Evenings',
    accessRequirements: {
      publicAccessibility: 'Reservation / Patron Purchase',
      dressCode: 'High-End Elegant Smart Casual / Formal',
      entryFeeOrMinimumSpendKes: 6000,
      protocolAndSecurityTips: [
        'Located in deep, ultra-exclusive Karen along Mbagathi Ridge. Valet parking and tight gate protocol with license plate logging.',
        'Reservations are recommended for dinner or cocktail lounge booths.',
        'Politicians use the private Presidential Suites and high-walled private garden villas when conducting multi-billion tender negotiations or top-secret political realignments that must never leak to the press.'
      ]
    },
    politicalSignificance: 'The undisputed luxury hideaway for Kenya\'s ultra-wealthy political class. Unlike city-center hotels, Hemingways offers complete seclusion from paparazzi, investigative bloggers, and street protests.',
    coordinatesOrAddress: 'Mbagathi Ridge, Karen, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vh-kempinski-balcony',
    name: 'Villa Rosa Kempinski - The Balcony Bar & Tambourin',
    category: 'Luxury Hotel Lounge & Bar',
    neighborhood: 'Westlands / Chiromo Road',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Hassan Joho & Coastal Power Elite', role: 'Cabinet Secretary for Mining & Blue Economy', factionOrAffiliation: 'Executive / Coast Faction' },
      { name: 'Johnson Sakaja & Nairobi County Procurement Tycoons', role: 'Nairobi City County Leadership', factionOrAffiliation: 'UDA / Nairobi', politicianId: 'p-sakaja' },
      { name: 'Foreign Oil & Infrastructure Concessionaire Executives', role: 'Multinational Tender Consortia', factionOrAffiliation: 'Global Finance' }
    ],
    primeMeetingTimes: 'Thursday & Friday Evenings 07:00 PM - 01:00 AM',
    accessRequirements: {
      publicAccessibility: 'Reservation / Patron Purchase',
      dressCode: 'Chic Smart Casual (Tailored shirts, blazers, dress shoes; sneakers permitted only if high-end clean design)',
      entryFeeOrMinimumSpendKes: 4500,
      protocolAndSecurityTips: [
        'High-security vehicle barrier on Chiromo Road with strict underbody bomb sweeps.',
        'The Balcony Bar on the first floor features live jazz and private cigar booths where younger flamboyant politicians and business kingpins gather for high-end single malt whiskeys.'
      ]
    },
    politicalSignificance: 'The favorite gathering spot for the flamboyant, high-spending wing of Kenyan politics, mega-procurement contractors, and young millionaires aligned with the governing coalition.',
    coordinatesOrAddress: 'Chiromo Road, Westlands, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&auto=format&fit=crop&q=80'
  },

  // ==========================================
  // 5. WHISKEY & POLITICAL SALOONS
  // ==========================================
  {
    id: 'vh-boma-inn-south-c',
    name: 'Boma Inn Hotel & Lounge',
    category: 'Whiskey & Political Saloon',
    neighborhood: 'South C (Near Wilson Airport)',
    city: 'Nairobi',
    frequentPatrons: [
      { name: 'Regional MPs Traveling from Western, Nyanza & North Eastern', role: 'National Assembly MPs flying via Wilson', factionOrAffiliation: 'Cross-Party MPs' },
      { name: 'Junet Mohamed & Parliamentary Debate Whips', role: 'National Assembly Minority Leader', factionOrAffiliation: 'ODM / Azimio' },
      { name: 'Kenya Red Cross Leadership & Senior NGO Chiefs', role: 'Humanitarian & Civic Sector', factionOrAffiliation: 'Civil Society' }
    ],
    primeMeetingTimes: 'Tuesdays to Thursdays 06:00 PM - 11:00 PM (After Parliamentary Adjournment)',
    accessRequirements: {
      publicAccessibility: 'Open to Public (With Strict Dress Code & Security Screening)',
      dressCode: 'Smart Casual / Casual',
      entryFeeOrMinimumSpendKes: 2500,
      protocolAndSecurityTips: [
        'Accessible off Mombasa Road / South C Red Cross Road.',
        'The outdoor sports bar and gazebo lounge are frequented by sitting legislators who have just landed at nearby Wilson Airport or departed Parliament Buildings in the evening.',
        'Conversations here are candid, loud, and offer incredible direct ear-to-the-ground intelligence on impending parliamentary votes.'
      ]
    },
    politicalSignificance: 'A central transit hub for parliamentary whips and regional MPs from Coast, Nyanza, and North Eastern Kenya. A relaxed atmosphere where cross-party tactical alliances and parliamentary voting blocs are frequently negotiated over goat ribs (nyama choma).',
    coordinatesOrAddress: 'Red Cross Road, South C, Nairobi',
    photoUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=80'
  }
];
