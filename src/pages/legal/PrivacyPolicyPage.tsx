import type { ReactNode } from "react";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

// REAL legal content, transcribed verbatim from "Privacy Policy for dsd cop.docx" (supplied
// 2026-08-27) — not placeholder boilerplate. See progress-tracker.md for the identity
// discrepancy this content surfaced. Do not paraphrase or alter this page's wording without
// updating the source document first.

function Section({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-text-primary">
        {number}. {title}
      </h2>
      <div className="mt-2 flex flex-col gap-3 leading-relaxed text-text-secondary">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-5 list-disc">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function PrivacyPolicyPage() {
  useDocumentTitle("Privacy Policy");

  return (
    <div className="bg-surface px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Legal</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Effective date: 26 August 2026</p>

        <Section number={1} title="Introduction">
          <p>
            DSD Corporate Services ("DSD," "we," "us" or "our") respects your privacy and is
            committed to protecting the personal information entrusted to us.
          </p>
          <p>This Privacy Policy explains how we collect, use, store, disclose and protect personal information when you:</p>
          <List
            items={[
              "Visit www.dsdcop.com",
              "Submit an enquiry or request a quotation",
              "Apply for or purchase our services",
              "Communicate with us by email, telephone, messaging applications or social media",
              "Visit our office",
              "Act as a shareholder, director, manager, employee, representative or beneficial owner of one of our clients; or",
              "Otherwise interact with DSD.",
            ]}
          />
          <p>
            For the purposes of applicable data-protection law, DSD Corporate Services will
            generally act as the controller of the personal information described in this
            Privacy Policy.
          </p>
        </Section>

        <Section number={2} title="Personal information we collect">
          <p>Depending on the nature of your enquiry or service, we may collect the following categories of personal information.</p>

          <p className="font-semibold text-text-primary">Identity information</p>
          <p>This may include:</p>
          <List
            items={[
              "Full name",
              "Date and place of birth",
              "Nationality",
              "Gender",
              "Photograph",
              "Signature",
              "Passport information",
              "Emirates ID information",
              "Visa and immigration information; and",
              "Other government-issued identification.",
            ]}
          />

          <p className="mt-4 font-semibold text-text-primary">Contact information</p>
          <p>This may include:</p>
          <List
            items={[
              "Residential or business address",
              "Email address",
              "Telephone number",
              "Emergency contact information; and",
              "Preferred communication method.",
            ]}
          />

          <p className="mt-4 font-semibold text-text-primary">Corporate and professional information</p>
          <p>This may include:</p>
          <List
            items={[
              "Company name and legal form",
              "Trade-licence information",
              "Business activities",
              "Shareholding and ownership information",
              "Director, manager and authorised-signatory information",
              "Employment and professional background",
              "Beneficial-ownership information",
              "Company constitutional documents; and",
              "Information concerning existing or proposed businesses.",
            ]}
          />

          <p className="mt-4 font-semibold text-text-primary">Financial and transactional information</p>
          <p>This may include:</p>
          <List
            items={[
              "Bank-account details",
              "Payment and invoice records",
              "Transaction references",
              "Source-of-funds or source-of-wealth information",
              "Tax-registration information; and",
              "Information required for compliance or due-diligence checks.",
            ]}
          />
          <p>
            Payment-card information may be processed directly by an authorised payment
            provider. DSD does not retain complete payment-card information unless necessary,
            lawful and appropriately secured.
          </p>

          <p className="mt-4 font-semibold text-text-primary">Service and communication information</p>
          <p>This may include:</p>
          <List
            items={[
              "Details of your enquiry",
              "Services requested or purchased",
              "Contracts, quotations and instructions",
              "Email, telephone and messaging correspondence",
              "Complaints and customer-support records",
              "Feedback, reviews and survey responses; and",
              "Records of appointments and meetings.",
            ]}
          />

          <p className="mt-4 font-semibold text-text-primary">Website and technical information</p>
          <p>When you use our website, we may collect:</p>
          <List
            items={[
              "Internet Protocol address",
              "Browser and device type",
              "Operating system",
              "Approximate location derived from your IP address",
              "Pages visited and time spent on the website",
              "Referral source",
              "Website interactions",
              "Cookie identifiers; and",
              "Security and diagnostic information.",
            ]}
          />
          <p>Further information is provided in our Cookie Policy.</p>

          <p className="mt-4 font-semibold text-text-primary">Sensitive personal information</p>
          <p>
            Where necessary for a requested service or legal obligation, we may process
            sensitive information, such as biometric, health, criminal-record, family or
            religious information.
          </p>
          <p>We will collect and process sensitive information only where reasonably necessary and permitted by applicable law.</p>
        </Section>

        <Section number={3} title="How we collect information">
          <p>We may collect personal information:</p>
          <List
            items={[
              "Directly from you",
              "From a company, employer, agent or representative acting on your behalf",
              "Through website forms, emails, telephone calls and messaging services",
              "From identification documents and application forms",
              "From government authorities, free-zone authorities and official portals",
              "From banks, professional advisers and service providers",
              "From publicly available registers, websites and professional platforms",
              "Through cookies and similar website technologies; and",
              "During compliance, identity-verification or due-diligence checks.",
            ]}
          />
          <p>
            If you provide personal information about another person, you confirm that you are
            authorised to provide it and, where required, have informed that person about this
            Privacy Policy.
          </p>
        </Section>

        <Section number={4} title="How we use personal information">
          <p>We may process personal information to:</p>
          <List
            items={[
              "Respond to enquiries and provide quotations",
              "Verify your identity and eligibility",
              "Create and manage client records",
              "Provide company-formation and corporate-support services",
              "Prepare and submit applications under your instructions",
              "Communicate with licensing, immigration, tax, free-zone and other authorities",
              "Coordinate services with banks and authorised third-party providers",
              "Prepare contracts, invoices, receipts and payment records",
              "Conduct know-your-customer, sanctions, fraud-prevention and other compliance checks",
              "Meet accounting, tax, regulatory and record-keeping obligations",
              "Manage appointments, enquiries, complaints and customer support",
              "Maintain and improve our website and services",
              "Protect our systems, personnel, clients and business against fraud or misuse",
              "Send service updates and, where permitted, marketing communications",
              "Establish, exercise or defend legal rights; and",
              "Comply with applicable laws, regulatory requests, court orders or government requirements.",
            ]}
          />
        </Section>

        <Section number={5} title="Grounds for processing">
          <p>Depending on the circumstances, we process personal information:</p>
          <List
            items={[
              "With your consent",
              "To respond to your request before entering into an agreement",
              "To perform a contract or provide a requested service",
              "To comply with a legal or regulatory obligation",
              "To protect public interests or the interests of the data subject",
              "To establish, exercise or defend legal claims",
              "For legitimate business purposes, where permitted and appropriately balanced against individual rights; or",
              "Under another lawful basis recognised by applicable law.",
            ]}
          />
          <p>
            Where processing is based on consent, you may withdraw that consent. Withdrawal
            will not affect processing lawfully completed before the consent was withdrawn.
          </p>
          <p>
            Refusing to provide required information may prevent us from accepting an
            engagement, completing compliance checks or providing the requested service.
          </p>
        </Section>

        <Section number={6} title="Identity verification and compliance">
          <p>
            Corporate-service applications may require detailed information about
            shareholders, directors, managers, employees, authorised representatives and
            beneficial owners.
          </p>
          <p>
            DSD may verify this information using official documents, public records,
            government systems and approved verification providers. We may also conduct
            sanctions, politically exposed person, fraud-prevention and other risk-based checks
            where required or appropriate.
          </p>
          <p>We may refuse, suspend or terminate a service where:</p>
          <List
            items={[
              "Required information is not provided",
              "Information appears inaccurate, misleading or fraudulent",
              "Identity or authority cannot be verified",
              "A transaction presents unacceptable legal or compliance risk; or",
              "Continuing the engagement could breach an applicable requirement.",
            ]}
          />
        </Section>

        <Section number={7} title="Disclosure of personal information">
          <p>We may disclose personal information, where necessary and lawful, to:</p>
          <List
            items={[
              "UAE federal or local government authorities",
              "Immigration, labour, licensing, tax and free-zone authorities",
              "Municipalities, embassies and consulates",
              "Banks, insurers and payment providers",
              "Lawyers, accountants, auditors, tax advisers and translators",
              "Notaries, attestation providers and document-clearing centres",
              "Technology, hosting, cybersecurity and communications providers",
              "Courier and document-delivery providers",
              "Landlords, business centres and office providers",
              "DSD affiliates supporting the requested service",
              "Courts, law-enforcement agencies and regulators; and",
              "A prospective buyer, investor or successor in connection with a lawful corporate transaction.",
            ]}
          />
          <p>
            Service providers are expected to process information only for authorised purposes
            and to apply appropriate confidentiality and security measures.
          </p>
          <p>DSD does not sell or rent personal information to third parties.</p>
        </Section>

        <Section number={8} title="International transfers">
          <p>
            Some service providers, professional advisers, technology platforms or authorities
            may process personal information outside the UAE.
          </p>
          <p>
            Where personal information is transferred internationally, we will take reasonable
            steps to ensure the transfer is permitted and protected through an approved
            jurisdiction, contractual safeguards, your consent where appropriate, or another
            legally recognised transfer mechanism.
          </p>
          <p>Different countries may provide different levels of data protection.</p>
        </Section>

        <Section number={9} title="Retention of information">
          <p>We retain personal information only for as long as reasonably necessary to:</p>
          <List
            items={[
              "Provide the requested services",
              "Maintain accurate corporate and transaction records",
              "Meet legal, accounting, tax and regulatory requirements",
              "Resolve complaints or disputes",
              "Prevent fraud and misuse; and",
              "Establish, exercise or defend legal claims.",
            ]}
          />
          <p>Retention periods may vary according to the type of record, the service provided and applicable legal requirements.</p>
          <p>
            When information is no longer required, we will take reasonable steps to securely
            delete, destroy or anonymise it, unless continued retention is required or
            permitted by law.
          </p>
        </Section>

        <Section number={10} title="Information security">
          <p>We use reasonable administrative, organisational and technical safeguards designed to protect personal information against:</p>
          <List items={["Unauthorised access", "Accidental loss", "Improper disclosure", "Unlawful alteration", "Misuse; and", "Destruction."]} />
          <p>
            These safeguards may include access controls, staff confidentiality requirements,
            secure storage, authentication controls, backups and security monitoring.
          </p>
          <p>
            No website, email service or electronic storage system is completely secure. Users
            should avoid sending passports, Emirates IDs, banking details or other sensitive
            documents through unverified communication channels.
          </p>
          <p>
            Always confirm payment instructions through an official DSD contact before
            transferring money, particularly if bank-account details appear to have changed.
          </p>
        </Section>

        <Section number={11} title="Cookies">
          <p>
            Our website may use cookies and similar technologies to operate securely, remember
            user preferences, measure website performance and, where permitted, support
            advertising or marketing.
          </p>
          <p>
            Optional analytics, preference and advertising cookies should not be activated
            until the user has made the relevant selection, where consent is required.
          </p>
          <p>Please read our Cookie Policy for further information.</p>
        </Section>

        <Section number={12} title="Marketing communications">
          <p>
            Where permitted, we may use your contact information to send information about DSD
            services, business updates or promotional offers.
          </p>
          <p>You may opt out at any time by:</p>
          <List
            items={[
              "Using the unsubscribe option in the communication",
              "Replying with an opt-out request; or",
              "Contacting info@dsdcop.com.",
            ]}
          />
          <p>Opting out of marketing will not prevent us from sending essential messages about an active enquiry, application, payment or service.</p>
        </Section>

        <Section number={13} title="Your rights">
          <p>Subject to applicable law and relevant exceptions, you may have the right to:</p>
          <List
            items={[
              "Obtain information about how your personal information is processed",
              "Request access to your personal information",
              "Receive a copy of certain information in a structured and machine-readable format",
              "Request correction of inaccurate or incomplete information",
              "Request deletion of information",
              "Request restriction or suspension of processing",
              "Object to or stop direct marketing",
              "Withdraw consent",
              "Request transfer of information where legally applicable",
              "Object to certain automated processing decisions; and",
              "Submit a complaint to the competent data-protection authority.",
            ]}
          />
          <p>
            We may request proof of identity and authority before responding. Some rights may
            be limited where processing is required for legal compliance, public interest,
            contractual obligations, third-party rights or legal claims.
          </p>
          <p>Requests may be submitted to info@dsdcop.com.</p>
        </Section>

        <Section number={14} title="Automated decision-making">
          <p>
            DSD does not intend to make decisions producing significant legal effects solely
            through automated processing unless the process is lawful, necessary and
            appropriately disclosed.
          </p>
          <p>
            Technology may be used to support identity checks, fraud detection, application
            administration or customer-service functions. Where required, meaningful human
            review will be available.
          </p>
        </Section>

        <Section number={15} title="Children's information">
          <p>Our website and general corporate services are not directed to children.</p>
          <p>
            We do not knowingly collect personal information directly from children for
            marketing purposes. Information concerning a child may be processed when an
            authorised parent, guardian, employer or client requests a legitimate immigration,
            residency or related service and the processing is legally permitted.
          </p>
        </Section>

        <Section number={16} title="External websites">
          <p>Our website may contain links to government portals and third-party websites. DSD does not control the privacy or security practices of those websites.</p>
          <p>You should review the privacy policy of each external website before providing personal information.</p>
        </Section>

        <Section number={17} title="Updates to this Privacy Policy">
          <p>We may update this Privacy Policy to reflect changes in our services, website functions or applicable requirements.</p>
          <p>
            The updated version will be published on this page with a revised effective date.
            Material changes may also be communicated through the website or another
            appropriate channel.
          </p>
        </Section>

        <Section number={18} title="Contact us">
          <p>For questions, requests or complaints concerning personal information, contact:</p>
          <p>
            DSD Corporate Services
            <br />
            1st Floor, Office 06
            <br />
            Al Habeb Building, Umm Hurair Street
            <br />
            Oud Metha, Dubai, United Arab Emirates
            <br />
            Email:{" "}
            <a href="mailto:info@dsdcop.com" className="text-primary hover:underline">
              info@dsdcop.com
            </a>
            <br />
            Website: www.dsdcop.com
            <br />
            Telephone:{" "}
            <a href="tel:+971585889033" className="font-mono text-primary hover:underline">
              +971 58 588 9033
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
