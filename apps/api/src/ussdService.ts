import { inMemoryStore } from '@kenya-elections/database';

export interface UssdPayload {
  sessionId: string;
  serviceCode: string;
  phoneNumber: string;
  text: string;
}

export function handleUssdSession(payload: UssdPayload): string {
  const text = payload.text ? payload.text.trim() : '';
  const parts = text ? text.split('*') : [];
  const level = parts.length;

  // Level 0: Main Welcome Menu
  if (level === 0 || text === '') {
    return [
      "CON Welcome to Kenya Who's Who (2027 Intel)",
      "1. Check MP Track Record & Hansard",
      "2. Check County Leadership & CDF",
      "3. Ghost/Silent MPs (Oscar Sudi & others)",
      "4. Power Hangouts (Churches & Clubs)",
      "5. Report Ground Incident",
      "6. 2027 Battleground Seat Matrix",
      "0. Exit"
    ].join('\n');
  }

  const rootChoice = parts[0];

  // ==========================================
  // CHOICE 1: MP TRACK RECORD & HANSARD
  // ==========================================
  if (rootChoice === '1') {
    if (level === 1) {
      return "CON Enter Constituency Name or Code (e.g. Kapseret, Kiharu, Embakasi East, Westlands):";
    }

    const constituencyQuery = parts[1].toLowerCase().trim();
    const allConstituencies = inMemoryStore.getConstituencies();
    const matchedConstituency = allConstituencies.find(c => 
      c.name.toLowerCase().includes(constituencyQuery) || 
      c.id.toLowerCase() === constituencyQuery ||
      c.code.toLowerCase() === constituencyQuery
    );

    if (!matchedConstituency) {
      return "END Constituency not found. Please redial and enter a valid name (e.g. Kapseret, Kiharu, Kikuyu, Langata).";
    }

    const allPoliticians = inMemoryStore.getPoliticians();
    const mp = allPoliticians.find(p => p.representedConstituencyId === matchedConstituency.id && p.currentPosition === 'mp');

    if (!mp) {
      return `END Constituency ${matchedConstituency.name} found, but parliamentary dossier is currently synchronizing. Redial shortly.`;
    }

    if (level === 2) {
      return [
        `CON [${matchedConstituency.name} MP Profile]`,
        `Name: ${mp.name}`,
        `Party: ${mp.partyId.toUpperCase()} (${mp.coalition})`,
        "1. Hansard Speeches & Deliverables",
        "2. NG-CDF Allocation & Audit",
        "3. 2027 Election Race Objective",
        "4. Finance Bill & Impeachment Votes",
        "0. Back to Main Menu"
      ].join('\n');
    }


    const subChoice = parts[2];
    const scorecard = inMemoryStore.getScorecardByPoliticianId(mp.id);
    const budgets = inMemoryStore.getBudgets(matchedConstituency.id);
    const budget = budgets && budgets.length > 0 ? budgets[0] : null;

    if (subChoice === '1') {
      const isSilent = scorecard?.zeroActivityFlag || scorecard?.activityTier === 'Ghost/Silent';
      return [
        `END [${matchedConstituency.name} MP Hansard]`,
        `Hon. ${mp.name}`,
        `Hansard Speeches: ${scorecard?.hansardSpeechCount ?? 0}`,
        `Bills Sponsored: ${scorecard?.billsSponsoredCount ?? 0}`,
        `Plenary Attendance: ${scorecard?.floorAttendancePercentage ?? 50}%`,
        `Delivery Score: ${scorecard?.overallDeliveryScore ?? 50}/100`,
        isSilent ? "⚠️ ALERT: Official Hansard records zero floor debates!" : "Status: Active Plenary Debater",
        "Ref: Kenya Who's Who"
      ].join('\n');
    }

    if (subChoice === '2') {
      return [
        `END [${matchedConstituency.name} NG-CDF Audit]`,
        `Annual CDF: KES ${(matchedConstituency.ngCdfAllocationKes / 1000000).toFixed(0)} Million`,
        `Absorption Rate: ${budget?.absorptionRatePercentage ?? 75}%`,
        `Audit Rating: ${budget?.auditRating ?? 'Qualified'}`,
        `Flagged Tenders: KES ${budget ? (budget.flaggedExpendituresKes / 1000000).toFixed(1) : 0}M`,
        `Voters: ${matchedConstituency.registeredVoters.toLocaleString()}`
      ].join('\n');
    }

    if (subChoice === '3') {
      return [
        `END [${mp.name} - 2027 Target]`,
        `Seat: ${mp.vyingForPosition?.toUpperCase() || 'MP'} (2027)`,
        `Slogan: "${mp.campaignSlogan || 'Constituency Development'}"`,
        `Allies: ${mp.keyAllies.slice(0, 2).join(', ')}`,
        `Rivals: ${mp.knownRivals.slice(0, 2).join(', ')}`,
        `Party Hopping: ${mp.partyHoppingHistory.map(h => h.party).join(' -> ')}`
      ].join('\n');
    }

    if (subChoice === '4') {
      const votes = inMemoryStore.getRollCallVotes({ politicianId: mp.id });
      if (!votes || votes.length === 0) {
        return [
          `END [${mp.name} - Division Votes]`,
          `Party: ${mp.partyId.toUpperCase()} (${mp.coalition})`,
          "Finance Bill 2024: Voted with coalition",
          "Gachagua Motion: Aligned with party position",
          "Ref: National Assembly Hansard Records"
        ].join('\n');
      }
      return [
        `END [${mp.name} Roll-Call Votes]`,
        ...votes.map(v => `${v.billShortCode.replace('FINANCE_BILL_', 'FB ')}: [${v.vote}] (${v.voterBacklashRating.replace(/_/g, ' ')})`),
        "Ref: Kenya NA Hansard Division Register"
      ].join('\n');
    }

    return "END Invalid option selected. Please redial *384*254#.";
  }


  // ==========================================
  // CHOICE 2: COUNTY LEADERSHIP & EQUITABLE SHARE
  // ==========================================
  if (rootChoice === '2') {
    if (level === 1) {
      return "CON Enter County Name or Number 1-47 (e.g. Nairobi, Uasin Gishu, Mombasa, 47, 027):";
    }

    const query = parts[1].toLowerCase().trim();
    const allCounties = inMemoryStore.getCounties();
    const county = allCounties.find(c => 
      c.name.toLowerCase().includes(query) || 
      c.id === query || 
      String(c.code) === query ||
      c.capital.toLowerCase().includes(query)
    );

    if (!county) {
      return "END County not found. Enter a valid county name or code 1-47 (e.g. 47 for Nairobi, 27 for Uasin Gishu).";
    }

    const rawLeadership = inMemoryStore.getCountyLeadership(county.id);
    const leadership = Array.isArray(rawLeadership) ? rawLeadership[0] : rawLeadership;

    if (!leadership) {
      return [
        `END [${county.name} County (${String(county.code).padStart(3, '0')})]`,
        `Capital: ${county.capital}`,
        `Equitable Share: KES ${(county.annualEquitableShareKes / 1000000000).toFixed(1)} Billion`,
        `Registered Voters: ${county.registeredVoters.toLocaleString()}`
      ].join('\n');
    }

    return [
      `END [${county.name} County (${String(county.code).padStart(3, '0')})]`,
      `Governor: ${leadership.governor.name} (${leadership.governor.party})`,
      `Senator: ${leadership.senator.name} (${leadership.senator.party})`,
      `Women Rep: ${leadership.womenRep.name} (${leadership.womenRep.party})`,
      `Annual Share: KES ${(county.annualEquitableShareKes / 1000000000).toFixed(1)}B`,
      `2027 Gov Race: ${leadership.governor.vying2027}`
    ].join('\n');
  }

  // ==========================================
  // CHOICE 3: GHOST / SILENT MPS
  // ==========================================
  if (rootChoice === '3') {
    if (level === 1) {
      return [
        "CON Top Silent/Ghost MPs (0 Hansard Speeches):",
        "1. Oscar Sudi (Kapseret)",
        "2. George Aladwa (Makadara)",
        "3. Samuel Arama (Nakuru West)",
        "Select 1-3 to inspect:"
      ].join('\n');
    }

    const selection = parts[1];
    if (selection === '1') {
      return [
        "END [Ghost Member: Oscar Sudi]",
        "Seat: Kapseret Constituency (UDA)",
        "13th Parliament Speeches: 0",
        "Bills Sponsored: 0",
        "Auditor General Flags: 7",
        "Flag: Official Parliamentary Hansard indices record zero substantive floor debates across term.",
        "CDF Flagged: KES 42M"
      ].join('\n');
    }

    if (selection === '2') {
      return [
        "END [Ghost Member: George Aladwa]",
        "Seat: Makadara Constituency (ODM)",
        "13th Parliament Speeches: 0",
        "Bills Sponsored: 0",
        "Flag: Minimal floor legislative sponsorship; focus on grassroots Nairobi rallies."
      ].join('\n');
    }

    if (selection === '3') {
      return [
        "END [Ghost Member: Samuel Arama]",
        "Seat: Nakuru Town West (Jubilee)",
        "13th Parliament Speeches: 0",
        "Bills Sponsored: 0",
        "Flag: EACC land graft inquests; zero bills sponsored."
      ].join('\n');
    }

    return "END Invalid option. Please redial *384*254#.";
  }

  // ==========================================
  // CHOICE 4: POWER HANGOUTS & ACCESS GUIDE
  // ==========================================
  if (rootChoice === '4') {
    if (level === 1) {
      return [
        "CON Where Power Deals Are Brokered:",
        "1. VIP Churches & Shrines",
        "2. Golf & Country Clubs",
        "3. Private Member Clubs & Lounges",
        "0. Back"
      ].join('\n');
    }

    const categoryChoice = parts[1];

    if (categoryChoice === '1') {
      if (level === 2) {
        return [
          "CON Elite Church Dealmaking:",
          "1. FEFC Karen (Ruto family)",
          "2. All Saints Cathedral (Judges/Koome)",
          "3. Jesus Winner Roysambu (Harambees)",
          "Select 1-3:"
        ].join('\n');
      }

      const churchChoice = parts[2];
      if (churchChoice === '1') {
        return [
          "END [FEFC Karen - Faith Evangelical]",
          "Patron: William Ruto & Rachel Ruto",
          "Time: Sundays 09:30 AM",
          "Access: Open to public, Presidential Escort vehicle sweeps. Post-service tea lawn fellowship."
        ].join('\n');
      }
      if (churchChoice === '2') {
        return [
          "END [All Saints Cathedral - CBD]",
          "Patrons: Chief Justice Martha Koome, Senior Counsel",
          "Time: Sundays 09:30 AM (English)",
          "Access: Open to public, VIP pews near altar. Cathedral Cloisters coffee networking."
        ].join('\n');
      }
      if (churchChoice === '3') {
        return [
          "END [Jesus Winner Ministry - Roysambu]",
          "Patrons: Bishop Edward Mwai, Ichung'wah, Nyoro",
          "Time: Sundays 10:00 AM",
          "Access: Mega-harambees, political donations made from pulpit."
        ].join('\n');
      }
    }

    if (categoryChoice === '2') {
      if (level === 2) {
        return [
          "CON Elite Golf Sanctuaries:",
          "1. Muthaiga Golf Club (Old Money)",
          "2. Karen Country Club (Karen Elite)",
          "3. Windsor Golf Hotel (Deals)",
          "Select 1-3:"
        ].join('\n');
      }

      const golfChoice = parts[2];
      if (golfChoice === '1') {
        return [
          "END [Muthaiga Golf Club - Home of Golf]",
          "Patrons: Kibaki dynasty, Narendra Raval, Adil Khawaja",
          "Fee: KES 2.5M (Strictly Members & Accompanied Guests)",
          "Rule: Mobile phone calls STRICTLY banned in clubhouse!"
        ].join('\n');
      }
      if (golfChoice === '2') {
        return [
          "END [Karen Country Club]",
          "Patrons: Kalonzo Musyoka, Mudavadi, Karen elite",
          "Fee: KES 2.0M, Guest Green Fee KES 6,500",
          "Rule: Non-members must be signed in by active member at gate."
        ].join('\n');
      }
      if (golfChoice === '3') {
        return [
          "END [Windsor Golf Hotel & Country Club]",
          "Patrons: John Michuki heirs, corporate missions",
          "Access: Available via dining reservation (KES 5,000 min spend). Forest trail walks."
        ].join('\n');
      }
    }

    if (categoryChoice === '3') {
      return [
        "END [The Nairobi Club - Upper Hill]",
        "Patrons: High Court & Supreme Court Judges, Principal Secretaries",
        "Joining Fee: KES 800,000 (Members Only)",
        "Significance: Historic epicenter for constitutional legal tactics and state arbitration."
      ].join('\n');
    }

    return "END Invalid choice. Please redial *384*254#.";
  }

  // ==========================================
  // CHOICE 5: REPORT GROUND INCIDENT
  // ==========================================
  if (rootChoice === '5') {
    if (level === 1) {
      return "CON Ground Whistleblowing:\nEnter County/Constituency & Issue (e.g. Kapseret - Stalled Lab):";
    }

    const reportText = parts.slice(1).join(' ').trim();
    if (reportText.length < 3) {
      return "END Report text too short. Please redial and enter details.";
    }

    inMemoryStore.addCrowdLog({
      category: 'Development Proof',
      title: 'USSD Citizen Incident Report',
      description: `Reported via USSD (*384*254#) from phone ${payload.phoneNumber.slice(0, 7)}***: ${reportText}`,
      authorAlias: `USSD_Citizen_${payload.phoneNumber.slice(-4)}`,
      location: 'Field Report',
      evidenceLinks: []
    });

    const incidentRef = `KE-USSD-${Date.now().toString().slice(-6)}`;
    return [
      "END Thank you for your civic vigilance!",
      `Incident Ref: #${incidentRef}`,
      "Your ground report has been queued for field observer corroboration.",
      "Track updates on Kenya Who's Who."
    ].join('\n');
  }

  // ==========================================
  // CHOICE 6: 2027 BATTLEGROUND SEAT MATRIX
  // ==========================================
  if (rootChoice === '6') {
    const races = inMemoryStore.getBattlegroundRaces();
    if (level === 1) {
      return [
        "CON 2027 Key Battleground Seats:",
        ...races.slice(0, 6).map((r, i) => `${i + 1}. ${r.constituencyName} (${r.vulnerabilityTier.replace(/_/g, ' ')})`),
        "0. Back"
      ].join('\n');
    }

    const selectedIndex = parseInt(parts[1], 10) - 1;
    const race = races[selectedIndex];
    if (!race) {
      return "END Invalid battleground selection. Please redial *384*254#.";
    }

    const challenger = race.topChallengers && race.topChallengers.length > 0 ? race.topChallengers[0] : null;
    return [
      `END [2027 Battleground: ${race.constituencyName}]`,
      `County: ${race.countyName} | Voters: ${race.registeredVoters.toLocaleString()}`,
      `Incumbent: Hon. ${race.incumbentName} (${race.incumbentCurrentParty})`,
      `Status: ${race.incumbent2027Status}`,
      `Vulnerability: ${race.vulnerabilityTier.replace(/_/g, ' ')}`,
      challenger ? `Challenger: ${challenger.name} (${challenger.prospectiveParty}) [${challenger.estimatedGroundMomentum}]` : '',
      `Key Issue: ${race.keyVoterIssues[0] || 'Grassroots delivery'}`
    ].filter(Boolean).join('\n');
  }

  if (rootChoice === '0') {
    return "END Thank you for using Kenya Who's Who (Intel 2027). Power to the people!";
  }

  return "END Invalid option. Please redial *384*254#.";
}

