# Kenya Who's Who (Elections & Civic Intelligence Platform)

An end-to-end, high-resolution **Elections & Governance Intelligence Platform** and **Progressive Web App (PWA)** built to monitor, audit, and analyze the entire Kenyan political structure, constitutional bureaucracy, constituency funds, and electoral contenders ahead of the 2027 general elections.

---

## 🏛️ Core Capabilities

1. **Constitutional Hierarchy (47 Counties $\to$ 290 Constituencies $\to$ 1,450 Wards)**:
   - Consolidated coverage of **all 47 Counties** (Mombasa 001 to Nairobi 047) with population, registered voters, and annual equitable share allocations in KES billions.
   - Drilldown into **290 Constituencies** and Wards, tracking current MPs and MCAs against aspiring contenders for 2027.
   - Profile cards featuring candidate origin stories, roots, education pedigree, declared assets, key allies, and known rivals.

2. **Hansard & Delivery Scorecard (Exposing Floor Inaction)**:
   - Automated performance tracking measuring spoken parliamentary floor debates, bills sponsored, motions tabled, and committee attendance.
   - **Zero Floor Speech Flag**: Dedicated audit indicators spotlighting representatives who draw public salaries and allowances while recording zero spoken contributions on the House floor (e.g. Oscar Sudi).

3. **Nomination & Party-Hopping Lineage**:
   - Track who nominated each candidate (Direct Ticket vs Universal Primaries vs Special Interest List).
   - Interactive timeline of political party shifting (e.g. KANU $\to$ ODM $\to$ URP $\to$ Jubilee $\to$ UDA).

4. **Constituency Fund Surveillance (NG-CDF & Auditor-General Ratings)**:
   - Audits of annual National Government CDF allocations (KES 145M - KES 175M+ per constituency).
   - Project delivery verification: Completed vs Ongoing vs Stalled vs Ghost Projects with Auditor-General audit opinions (Clean, Qualified, Adverse).

5. **State Bureaucracy & Executive Appointments Registry**:
   - Maps non-elected decision-makers: Cabinet Secretaries (CS), Principal Secretaries (PS), the Judiciary (Chief Justice, Supreme Court, JSC), and County Directors of Education.
   - Explains **WHO appoints each official** (e.g., Presidential appointment with National Assembly approval, JSC competitive recruitment, Public Service Commission) with constitutional article citations (e.g., Art. 152(2)).
   - Flags whether the bureaucrat is harboring future political aspirations for 2027.

6. **Financial Moguls & Power Brokers**:
   - Profiles of key economic oligarchs and dynasty conglomerates (e.g., Kenyatta Family & Associates, Jimmy Wanjigi, Treasury linkages).
   - Details on controlled entities (NCBA Group, Brookside Dairy, Northlands, Kwacha Group), estimated net worth, and high-value state infrastructure contracts.

7. **Crowd Intelligence & Field Verifications**:
   - Constituents can post real-time ground logs (Development Proof, Broken Promises, Absenteeism, Rally Attendance).
   - Upvoting and downvoting verification system with field observer validation tags.

8. **Offline-First Progressive Web App (PWA)**:
   - Service worker precaching and background sync powered by `vite-plugin-pwa` and Workbox.
   - Full functionality available offline using embedded seed caches.

---

## 🏗️ Monorepo Architecture

```text
kenyaelections/
├── apps/
│   ├── web/                     # React 19 + Vite 6 + Tailwind CSS v4 + PWA (Vite-PWA)
│   └── api/                     # Node.js Express REST API service
├── packages/
│   ├── database/                # Drizzle ORM + Neon PostgreSQL client + InMemory offline seeds
│   └── shared-types/            # Canonical TypeScript interfaces & domain models
├── pnpm-workspace.yaml
└── package.json
```

---

## 🚀 Quickstart

### Prerequisites
- Node.js `v20+` or `v22+`
- `pnpm` (`v10+`)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Build All Packages
```bash
pnpm build
```

### 3. Run in Development
To run both the React Vite frontend and the Express API in parallel:
```bash
pnpm dev
```

Or run each service individually:
```bash
# Run web client (http://localhost:5173)
pnpm dev:web

# Run backend API (http://localhost:4000)
pnpm dev:api
```

---

## 🗄️ Neon Database Integration

The system comes pre-loaded with an **embedded offline seed store** that operates immediately out of the box without requiring external database provisioning.

When you are ready to connect your **Neon Serverless PostgreSQL** database:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set your Neon database connection string in `.env`:
   ```env
   DATABASE_URL=postgresql://[user]:[password]@[endpoint].neon.tech/[dbname]?sslmode=require
   ```
3. Push the Drizzle schema and migrations:
   ```bash
   pnpm --filter @kenya-elections/database db:push
   ```

---

## 📦 Version Control
Synchronized on GitHub at:  
[https://github.com/GabuGravin41/kenya-who-swho](https://github.com/GabuGravin41/kenya-who-swho)
