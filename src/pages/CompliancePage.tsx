import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CircleAlert, TriangleAlert } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CtaButton } from "@/components/common/CtaButton";
import { ChecklistCard } from "@/components/common/ChecklistCard";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { complianceIcons } from "@/lib/icons";
import { badgeColorAt } from "@/lib/utils";
import { complianceAreas } from "@/data/compliance";
import complianceBanner from "@/assets/images/hero/home_hero_bg.png";

// REAL content, transcribed from "company_compliance.txt" and "coooperate_governance.txt"
// (both supplied 2026-08-27) — general UAE compliance guidance, not placeholder copy. See
// src/data/compliance.ts for the per-area source content and citation notes, and
// progress-tracker.md for context on why this section exists alongside the site's
// marketing-agency positioning.

const REQUIREMENT_FACTORS = [
  "The company's legal form",
  "Mainland or free-zone registration",
  "Emirate of registration",
  "Licensed activities",
  "Number and type of employees",
  "Revenue and tax position",
  "Nationality and residency of owners",
  "Whether the business operates in a regulated sector",
  "Whether it handles customer money, personal data or high-risk transactions",
];

const LIFECYCLE_STAGES = [
  {
    title: "At Incorporation",
    items: [
      "Correct legal form and licensed activities",
      "Ownership and beneficial-owner position",
      "Required premises and external approvals",
      "Corporate Tax registration deadline",
      "VAT position",
      "AML classification",
      "Immigration and employment requirements",
      "Required insurance and internal policies",
    ],
  },
  {
    title: "During Daily Operations",
    items: [
      "Accurate bookkeeping",
      "Valid employee and immigration records",
      "Customer contracts and invoices",
      "Data security",
      "AML and sanctions checks where applicable",
      "Proper approval of financial transactions",
      "Evidence supporting business expenses and payments",
    ],
  },
  {
    title: "At Periodic Deadlines",
    items: [
      "License and permit renewals",
      "Lease or occupancy renewals",
      "VAT returns",
      "Corporate Tax returns",
      "Annual accounts and audits",
      "Establishment-card renewals",
      "Insurance renewals",
      "Employee permit renewals",
      "Regulatory declarations",
    ],
  },
  {
    title: "When a Material Change Occurs",
    items: [
      "Shareholders or beneficial owners",
      "Directors or managers",
      "Registered address",
      "Trade name",
      "Business activities",
      "Share capital",
      "Bank details",
      "Accounting period",
      "Legal form",
      "Branch structure",
    ],
  },
];

const MERITS = [
  {
    title: "Avoidance of Penalties",
    description: "Proper compliance reduces the risk of fines, license suspension, business closure, immigration blocks and tax penalties.",
  },
  {
    title: "Easier License and Visa Renewal",
    description: "Accurate and current company records make renewals and amendments more efficient.",
  },
  {
    title: "Better Banking Relationships",
    description: "Banks are more comfortable dealing with companies that can provide clear ownership information, reliable accounts, tax records, contracts and properly authorised signatories.",
  },
  {
    title: "Improved Reputation",
    description: "Compliance builds confidence among customers, suppliers, employees, investors and authorities.",
  },
  {
    title: "Eligibility for Contracts and Tenders",
    description: "Government bodies and larger companies commonly request licenses, tax certificates, financial statements, insurance and AML documentation before awarding work.",
  },
  {
    title: "Protection of Owners and Management",
    description: "Proper resolutions, contracts, accounting records and authority controls reduce personal exposure and internal disputes.",
  },
  {
    title: "Better Investment and Sale Value",
    description: "A compliant company is easier to value, finance, restructure or sell because its records can pass legal, financial and regulatory due diligence.",
  },
  {
    title: "Operational Stability",
    description: "A compliance calendar helps prevent unexpected license expiry, employee blocks, tax deadlines and loss of important approvals.",
  },
];

const DEMERITS = [
  {
    title: "Financial Cost",
    description: "License and permit renewals, accountants, auditors, tax advisers, compliance officers, legal advice, software, training, insurance and government filing fees.",
  },
  {
    title: "Administrative Workload",
    description: "The company must collect documents, maintain registers, monitor deadlines and respond to regulatory enquiries.",
  },
  {
    title: "Regulatory Complexity",
    description: "Requirements differ between mainland authorities, free zones, Emirates and industry regulators. Rules and procedures may also change.",
  },
  {
    title: "Increased Disclosure",
    description: "Companies may need to disclose ownership, financial, employee and transaction information to competent authorities, banks and auditors.",
  },
  {
    title: "Slower Transactions",
    description: "Due diligence, approvals and internal controls may slow onboarding, payments, ownership changes and higher-risk transactions.",
  },
  {
    title: "Dependence on Professionals",
    description: "Poor advice or missed deadlines by a provider can still affect the company, because ultimate responsibility often remains with the business and its management.",
  },
  {
    title: "Cost of Correcting Past Non-Compliance",
    description: "Late registration, inaccurate records or missing filings may require voluntary disclosures, amended returns, penalties and substantial professional work.",
  },
];

const CONSEQUENCES = [
  "Administrative fines",
  "Tax penalties and assessments",
  "License suspension or non-renewal",
  "Immigration or labour-system restrictions",
  "Suspension of new work permits",
  "Bank-account restriction or closure",
  "Loss of tax relief or free-zone benefits",
  "Regulatory inspection",
  "Director or manager liability",
  "Contract termination",
  "Reputational damage",
  "Civil claims",
  "Criminal investigation for serious fraud, money laundering, forged documents or intentional misconduct",
];

const COMPLIANCE_CALENDAR = [
  "Licence and regulatory renewals",
  "Corporate Tax and VAT deadlines",
  "Bookkeeping and financial statements",
  "Beneficial-owner updates",
  "Employment and immigration records",
  "AML obligations where applicable",
  "Data protection",
  "Contracts and corporate resolutions",
  "Event-driven changes to ownership, management or business activities",
];

// Transcribed from "coooperate_governance.txt" (supplied 2026-08-27) — "Common Mistakes Made
// by Founders in the UAE." A distinct real-world companion to the areas/merits/demerits
// content above (same general-guidance caveat applies), not merged into the "Corporate
// Governance" compliance area's own obligations list above, which is a different shape of
// content (records to keep vs. mistakes to avoid).
type FounderMistake = {
  title: string;
  description: string[];
  list?: string[];
  note?: string;
};

const FOUNDER_MISTAKES: FounderMistake[] = [
  {
    title: "Missing Trade-License Renewal Deadlines",
    description: [
      "Failing to renew a trade license on time can lead to fines, suspension of business activities and difficulty completing banking, immigration and government transactions.",
      "An expired license may also prevent the company from renewing employee visas, obtaining new permits or completing corporate amendments. Every business should maintain a structured compliance calendar from its first year of operation.",
    ],
  },
  {
    title: "Ignoring Corporate Tax and VAT Obligations",
    description: [
      "Some founders assume that a new or small business has no tax responsibilities. However, even companies operating below applicable thresholds must monitor their revenue, expenses and registration position.",
      "Businesses should maintain proper accounting records, preserve supporting invoices and regularly review their Corporate Tax and VAT obligations. Ignoring these responsibilities can result in late registration, inaccurate returns, penalties and unexpected financial exposure.",
    ],
  },
  {
    title: "Maintaining Poor Financial Records",
    description: [
      "Mixing personal and company funds, failing to record expenses, issuing incomplete invoices and neglecting bank reconciliation can create serious accounting and tax problems.",
      "Sound bookkeeping allows the company to demonstrate its income, expenses, assets, liabilities and source of funds. It also supports tax filings, audits, financing applications and investor due diligence.",
    ],
  },
  {
    title: "Failing to Update Beneficial-Ownership Records",
    description: [
      "Ultimate Beneficial Owner records must accurately identify the individuals who ultimately own or control the company.",
      "Changes involving shareholders, directors, managers, authorised signatories or ownership structures should be properly documented and reported where required. Inaccurate or outdated records may lead to regulatory penalties and difficulties with banks or licensing authorities.",
    ],
  },
  {
    title: "Neglecting Banking and Source-of-Funds Documentation",
    description: [
      "UAE banks conduct periodic compliance reviews. Unclear ownership arrangements, unexplained transactions or inconsistencies between the company's license, invoices and banking activity may result in requests for additional information or account restrictions.",
      "Founders should maintain:",
    ],
    list: [
      "Shareholder and board resolutions",
      "Commercial contracts and invoices",
      "Beneficial-ownership records",
      "Source-of-funds and source-of-wealth evidence",
      "Properly authorised signatory records",
      "Explanations and supporting documents for material transactions",
    ],
  },
  {
    title: "Operating Outside the Licensed Activities",
    description: [
      "A company may conduct only the activities authorised under its trade license and relevant regulatory approvals.",
      "Expanding into an unlicensed activity without first amending the license can expose the company to fines, complaints, contract disputes or regulatory action. Business expansion should always be formalised through the appropriate licensing procedure.",
    ],
  },
  {
    title: "Treating Residency and Company Compliance Separately",
    description: [
      "Company and residency compliance are often connected. If a company's license, immigration file or establishment card expires or becomes restricted, residence visas sponsored by that company may also be affected.",
      "Founders should coordinate the renewal of:",
    ],
    list: [
      "Trade licenses",
      "Establishment cards",
      "Immigration files",
      "Employment permits",
      "Residence visas",
      "Emirates IDs",
      "Health insurance",
    ],
    note: "Business and residency structures should remain aligned at all times.",
  },
  {
    title: "Relying Entirely on Third-Party Service Providers",
    description: [
      "Accountants, consultants and corporate-service providers can assist with compliance, but the company and its management remain responsible for ensuring that obligations are fulfilled.",
      "Founders should request copies of filings, receipts, approvals and official confirmations instead of assuming that every task has been completed.",
    ],
  },
  {
    title: "Failing to Plan for Ownership or Management Changes",
    description: [
      "Share transfers, the death or departure of a shareholder, changes of manager and amendments to bank-signing authority can disrupt a company when no succession or continuity plan exists.",
      "Proper constitutional documents, shareholder agreements, resolutions and powers of attorney help protect the business during major changes.",
    ],
  },
  {
    title: "Viewing Compliance as Unnecessary Overhead",
    description: [
      "Compliance should not be treated merely as an administrative expense. It is an essential risk-management function that protects the company's licence, banking relationships, residency structure, reputation and ability to operate.",
      "Businesses that maintain structured governance, accurate records and a clear compliance calendar are better positioned to achieve sustainable, long-term success in the UAE.",
    ],
  },
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-5 list-disc space-y-1.5">
      {items.map((item) => (
        <li key={item} className="text-sm leading-relaxed text-text-secondary">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Callout({ icon, tone, title, children }: { icon: ReactNode; tone: "accent" | "primary"; title: string; children: ReactNode }) {
  const toneClasses = tone === "accent" ? "border-accent/30 bg-accent/5" : "border-primary/30 bg-primary-light";
  return (
    <div className={`rounded-xl border p-6 ${toneClasses}`}>
      <div className="flex items-center gap-2.5">
        {icon}
        <p className="font-semibold text-text-primary">{title}</p>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-text-secondary">{children}</div>
    </div>
  );
}

export function CompliancePage() {
  useDocumentTitle("Company Compliance");

  return (
    <>
      <PageHeroBanner
        image={complianceBanner}
        imagePosition="10% 80%"
        eyebrow="Compliance Guidance"
        title={<>What Is Company <span className="text-accent">Compliance</span> in the UAE?</>}
        description="Company compliance means continuously operating a UAE business in accordance with all applicable laws, license conditions, regulatory approvals, tax rules and internal corporate-governance requirements. It does not end when the trade license is issued — compliance continues throughout the company's life, from incorporation and daily operations to renewal, restructuring and closure."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="It Depends" title="The Exact Requirements" highlight="Depend On" align="left" />
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {REQUIREMENT_FACTORS.map((item) => (
              <ChecklistCard key={item}>{item}</ChecklistCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Areas"
            title="Main Areas of UAE"
            highlight="Company Compliance"
            description="Eleven areas cover most of what a UAE company needs to stay on top of — select one to see the specific obligations."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceAreas.map((area, index) => {
              const Icon = complianceIcons[area.icon];
              const badge = badgeColorAt(index);
              return (
                <motion.div
                  key={area.slug}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-border bg-surface p-6 shadow-[0px_2px_8px_rgba(11,23,48,0.06),0px_1px_3px_rgba(11,23,48,0.08)]"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${badge.bg}`}>
                    {Icon && <Icon size={20} className={badge.text} />}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-text-primary">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{area.summary}</p>
                  <Link
                    to={`/compliance/${area.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Lifecycle"
            title="How Compliance Applies"
            highlight="Over Time"
            description="Compliance isn't a one-time filing — it shows up differently at each stage of a company's life."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LIFECYCLE_STAGES.map((stage) => (
              <div key={stage.title} className="rounded-xl border border-border bg-surface-secondary p-6">
                <h3 className="text-sm font-semibold text-text-primary">{stage.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {stage.items.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-navy bg-cover bg-center px-4 py-20 text-center md:px-6"
        style={{ backgroundImage: `url(${complianceBanner})`, backgroundPosition: "15% 60%" }}
      >
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Compliance is easier with a partner who tracks it for you.
          </h2>
          <p className="mt-3 text-white/75">
            DSD Corporate Services can help you build a compliance calendar for your UAE
            company — licensing, tax, immigration and beyond.
          </p>
          <div className="mt-7">
            <CtaButton component={Link} to="/contact">
              Talk to Our Team
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The Upside" title="Merits of Company" highlight="Compliance" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {MERITS.map((merit, index) => (
              <motion.div
                key={merit.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-xl border border-border bg-surface p-6 shadow-[0px_2px_8px_rgba(11,23,48,0.06),0px_1px_3px_rgba(11,23,48,0.08)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{merit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{merit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The Trade-Off"
            title="Demerits & Practical"
            highlight="Burdens"
            description="Compliance is legally necessary, but it creates real operational burdens."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DEMERITS.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-xl border border-border bg-surface p-6 shadow-[0px_2px_8px_rgba(11,23,48,0.06),0px_1px_3px_rgba(11,23,48,0.08)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-secondary text-sm font-semibold text-text-secondary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-text-secondary">
            These burdens are disadvantages of the compliance process, but they are normally much
            smaller than the financial and legal risks of non-compliance.
          </p>
        </div>
      </section>

      <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The Risk" title="Consequences of" highlight="Non-Compliance" align="left" />
          <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-6">
            <div className="flex items-center gap-2.5">
              <TriangleAlert size={20} className="text-accent" />
              <p className="font-semibold text-text-primary">Depending on the violation, consequences may include:</p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CONSEQUENCES.map((item) => (
                <ChecklistCard key={item} icon={TriangleAlert} tone="accent" surface="surface">
                  {item}
                </ChecklistCard>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Callout icon={<CircleAlert size={18} className="text-primary" />} tone="primary" title="A Note on Economic Substance Regulations">
              Businesses should be careful with outdated compliance checklists. The UAE cancelled
              Economic Substance reporting requirements for financial years ending after 31
              December 2022. Historical obligations for earlier periods may still need to be
              resolved. — UAE Ministry of Finance
            </Callout>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Learn From Others"
            title="Common Mistakes"
            highlight="Founders Make"
            description="Company formation is only the beginning of operating a business in the UAE — long-term stability depends on maintaining proper compliance, accurate records and effective corporate governance."
            align="left"
          />
          <div className="mt-10 flex flex-col gap-6">
            {FOUNDER_MISTAKES.map((mistake, index) => (
              <motion.div
                key={mistake.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-xl border border-border bg-surface p-6 shadow-[0px_2px_8px_rgba(11,23,48,0.06),0px_1px_3px_rgba(11,23,48,0.08)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{mistake.title}</h3>
                  <div className="mt-2 flex flex-col gap-2">
                    {mistake.description.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-text-secondary">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {mistake.list && (
                    <div className="mt-2">
                      <List items={mistake.list} />
                    </div>
                  )}
                  {mistake.note && (
                    <p className="mt-2 text-sm font-medium text-text-primary">{mistake.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaButton component={Link} to="/contact">
              Avoid These Mistakes — Talk to an Advisor
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Bringing It Together" title="Practical" highlight="Conclusion" align="left" />
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            Company compliance in the UAE is best managed through a formal compliance calendar
            covering:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {COMPLIANCE_CALENDAR.map((item) => (
              <ChecklistCard key={item} surface="surface">
                {item}
              </ChecklistCard>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-secondary">
            This is general guidance, not a substitute for advice based on the company's exact
            trade license, legal form, free zone or mainland registration and regulated
            activities.
          </p>
          <p className="mt-2 text-sm font-medium text-text-primary">
            A recurring compliance check can help prevent missed filings and renewals.
          </p>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
