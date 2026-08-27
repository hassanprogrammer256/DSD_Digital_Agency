import type { ReactNode } from "react";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

// REAL legal content, transcribed verbatim from "DSD_Website_dsd cop.docx" (titled "Website
// Disclaimer", supplied 2026-08-27) — not placeholder boilerplate. See progress-tracker.md for
// the identity discrepancy this content surfaced. Do not paraphrase or alter this page's
// wording without updating the source document first.

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

export function WebsiteDisclaimerPage() {
  useDocumentTitle("Website Disclaimer");

  return (
    <div className="bg-surface px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Legal</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">Website Disclaimer</h1>
        <p className="mt-2 text-sm text-text-muted">
          DSD Corporate Services — www.dsdcop.com
          <br />
          Last updated: 26 August 2026
        </p>

        <div className="mt-8 flex flex-col gap-3 leading-relaxed text-text-secondary">
          <p>
            This website, www.dsdcop.com (the "Website"), is owned and operated by DSD
            Corporate Services, a corporate services provider registered and licensed under the
            Ajman NuVentures Centre Free Zone ("ANCFZ"), Emirate of Ajman, United Arab Emirates
            ("DSD", "we", "us" or "our").
          </p>
          <p>
            By accessing or using this Website, you acknowledge that you have read, understood
            and agree to be bound by this Disclaimer. If you do not agree with any part of this
            Disclaimer, please discontinue your use of the Website.
          </p>
        </div>

        <Section number={1} title="General information">
          <p>
            The information provided on this Website is for general informational and
            promotional purposes only. It is intended to give an overview of DSD Corporate
            Services, our services, and general business-related matters in the United Arab
            Emirates ("UAE").
          </p>
          <p>
            While we take reasonable steps to keep the information on this Website accurate and
            up to date, we do not represent or warrant that all information is complete,
            accurate, error-free, or suitable for any particular person's circumstances.
          </p>
          <p>
            Business-licensing requirements, immigration procedures, government fees, free-zone
            regulations, tax rules, document requirements and processing times are set by
            third-party authorities and may change without prior notice to DSD or to users of
            this Website.
          </p>
        </Section>

        <Section number={2} title="No legal, tax, financial or investment advice">
          <p>
            Nothing on this Website constitutes legal, tax, accounting, financial, banking,
            immigration or investment advice, and nothing on this Website should be relied upon
            as such.
          </p>
          <p>
            Information published on this Website is not a substitute for advice from a
            qualified and appropriately licensed lawyer, tax adviser, accountant, financial
            adviser, or other regulated professional. Where specialised professional advice is
            required, clients and prospective clients should obtain independent advice
            appropriate to their own circumstances before making any decision or entering into
            any transaction.
          </p>
          <p>
            DSD Corporate Services is not a law firm, accounting firm, bank, investment
            adviser, or government authority, unless a specific regulated activity is expressly
            stated on our trade licence and confirmed to the client in writing.
          </p>
        </Section>

        <Section number={3} title="No professional relationship created">
          <p>
            Accessing this Website, submitting an enquiry, downloading materials, or otherwise
            communicating with DSD through this Website does not, by itself, create a client,
            agency, fiduciary, partnership, employment or professional-adviser relationship
            between the user and DSD.
          </p>
          <p>A formal service relationship with DSD begins only once:</p>
          <List
            items={[
              "DSD has accepted the engagement;",
              "the required due-diligence and compliance checks have been completed to DSD's satisfaction;",
              "the parties have agreed on the scope of services, fees and conditions; and",
              "a service agreement, quotation, engagement letter or other written confirmation has been issued by DSD and accepted by the client.",
            ]}
          />
        </Section>

        <Section number={4} title="Government and regulatory independence">
          <p>
            DSD Corporate Services is an independent, privately owned corporate-services
            provider, registered and licensed under the Ajman NuVentures Centre Free Zone
            (ANCFZ), Emirate of Ajman. Beyond that licensing relationship, DSD is not part of,
            affiliated with, sponsored by, or endorsed by the UAE Federal Government, the
            Government of Dubai or Ajman, any other free-zone authority, immigration or
            naturalisation authority, municipality, licensing authority, embassy, consulate,
            bank, or any other public or private institution, unless expressly stated in writing
            by DSD.
          </p>
          <p>
            References on this Website to government authorities, free zones, banks,
            third-party websites, trademarks, or services are provided for identification and
            informational purposes only and do not imply any official partnership, endorsement,
            sponsorship or guarantee.
          </p>
        </Section>

        <Section number={5} title="No guarantee of applications or approvals">
          <p>
            DSD may assist clients with company formation, licence applications, visa or
            immigration-related documentation, corporate administration and other
            business-support services, subject to the activities permitted under its trade
            licence.
          </p>
          <p>However, DSD does not control and cannot guarantee:</p>
          <List
            items={[
              "Trade-name reservations;",
              "Initial or final business approvals;",
              "Licence issuance, renewal or amendment;",
              "Visa, work permit or immigration approval;",
              "Security or background clearance;",
              "Bank-account opening or banking approval;",
              "Tax registration or tax-authority decisions;",
              "Free-zone or mainland authority decisions;",
              "Government processing times;",
              "Availability of particular business activities;",
              "Approval of premises, quotas or employee allocations; or",
              "The outcome of any application submitted to a third party.",
            ]}
          />
          <p>
            All applications remain subject to the discretion, policies, eligibility
            requirements and decisions of the relevant authority, bank, free zone, service
            provider or regulator.
          </p>
          <p>
            An initial approval, application receipt, or payment of fees does not necessarily
            constitute final permission to operate a business or undertake a regulated
            activity.
          </p>
        </Section>

        <Section number={6} title="Client responsibilities">
          <p>
            Clients are responsible for providing complete, accurate, authentic and current
            information and documentation. The client must disclose all relevant facts,
            including information concerning:
          </p>
          <List
            items={[
              "Shareholders, directors, managers and beneficial owners;",
              "Nationality and residency status;",
              "Proposed business activities;",
              "Source of funds and source of wealth;",
              "Criminal, regulatory or sanctions matters;",
              "Existing companies and commercial interests; and",
              "Any other information requested for compliance or regulatory purposes.",
            ]}
          />
          <p>
            DSD is not responsible for delays, rejection, penalties, losses, or other
            consequences resulting from inaccurate, incomplete, misleading, fraudulent, or late
            information supplied by a client or another person acting on the client's behalf.
          </p>
          <p>
            Clients remain responsible for ensuring that their proposed and ongoing activities
            comply with applicable laws, licence conditions, tax obligations, employment
            requirements and regulatory approvals.
          </p>
        </Section>

        <Section number={7} title="Compliance, due diligence and sanctions">
          <p>
            As a free zone-licensed provider of corporate, company-formation and related
            business services, DSD carries out activities that fall within the scope of
            Designated Non-Financial Businesses and Professions ("DNFBPs") under Federal
            Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of
            Terrorism and Illegal Organisations, as amended, and its implementing Cabinet and
            Ministerial Decisions, which apply across the UAE, including within free zones such
            as ANCFZ.
          </p>
          <p>
            Where applicable, DSD is required to carry out customer due diligence, verify the
            identity of clients, shareholders, directors and beneficial owners, screen clients
            against applicable UAE and international sanctions lists, and report suspicious
            activity to the competent authorities.
          </p>
          <p>
            DSD reserves the right, at its sole discretion, to decline, delay, suspend or
            terminate an engagement, application or transaction where a client's information or
            documentation cannot be verified, where a compliance, sanctions,
            politically-exposed-person or source-of-funds concern arises, or where continuing
            the engagement could expose DSD to legal or regulatory risk. DSD shall not be
            liable for any loss arising from such a decision.
          </p>
        </Section>

        <Section number={8} title="Fees and quotations">
          <p>
            Any price, package, cost estimate or timeline displayed on this Website is
            indicative only, unless expressly confirmed in a written quotation or service
            agreement.
          </p>
          <p>
            Government fees, immigration charges, licence fees, establishment-card charges,
            medical examinations, Emirates ID fees, insurance, office rent, Ejari, deposits,
            translations, attestations, courier charges, banking charges, taxes and third-party
            professional fees may be charged separately.
          </p>
          <p>
            Government and third-party fees may change without prior notice. DSD reserves the
            right to revise a quotation where an authority changes its requirements or fees, or
            where the client changes the requested service.
          </p>
          <p>
            Unless expressly stated otherwise, payments made to government authorities and
            third parties are subject to their own cancellation and refund policies. DSD cannot
            guarantee the refund of amounts paid to another organisation.
          </p>
        </Section>

        <Section number={9} title="Processing times">
          <p>
            Any processing time communicated through this Website or by a DSD representative is
            an estimate based on the information available at that time.
          </p>
          <p>
            Processing may be affected by government working hours, public holidays, security
            checks, additional-document requests, system outages, regulatory changes, banking
            procedures, incomplete information, or other circumstances outside DSD's reasonable
            control.
          </p>
          <p>
            DSD is not responsible for delays caused by government authorities, banks, free
            zones, embassies, consulates, landlords, telecommunications providers, or other
            third parties.
          </p>
        </Section>

        <Section number={10} title="Third-party services and referrals">
          <p>
            DSD may introduce or refer clients to third-party providers, including banks,
            insurers, auditors, accountants, lawyers, tax advisers, translators, landlords,
            real-estate agents, free zones, government service centres, and technology
            providers.
          </p>
          <p>
            Unless expressly agreed otherwise in writing, these third parties operate
            independently and are responsible for their own services, advice, pricing, conduct
            and contractual obligations.
          </p>
          <p>
            A referral does not constitute a guarantee or endorsement of a third party. Clients
            should conduct their own due diligence before appointing or paying any third-party
            provider.
          </p>
          <p>
            DSD is not responsible for the acts, omissions, advice, systems, delays or failures
            of an independent third party, except to the extent that liability cannot lawfully
            be excluded.
          </p>
        </Section>

        <Section number={11} title="External links">
          <p>
            This Website may contain links to government portals and third-party websites.
            These links are provided for convenience and general information only.
          </p>
          <p>
            DSD does not control third-party websites and does not guarantee their
            availability, security, accuracy, content, or privacy practices. Access to an
            external website is at the user's own discretion and is subject to that website's
            own terms and policies.
          </p>
        </Section>

        <Section number={12} title="Website availability and security">
          <p>
            We aim to keep this Website available and secure but do not guarantee continuous or
            uninterrupted access. The Website may be suspended, modified, or made unavailable
            because of maintenance, technical faults, cybersecurity incidents, hosting
            failures, or other circumstances beyond our control.
          </p>
          <p>
            Users are responsible for protecting their own devices, accounts, and information
            against malware, phishing, unauthorised access, and other online threats.
            Unauthorised access to, or interference with, this Website or its underlying
            systems may constitute an offence under Federal Decree-Law No. 34 of 2021 on
            Combating Rumours and Cybercrimes, as amended.
          </p>
          <p>
            DSD will never ask clients to transfer funds to a changed bank account solely on
            the basis of an unverified email or message. Clients should independently confirm
            payment instructions through an official DSD contact before transferring any funds.
          </p>
        </Section>

        <Section number={13} title="Intellectual property">
          <p>
            Unless otherwise stated, this Website and its contents — including the DSD name,
            branding, graphics, text, designs, photographs, videos, documents and other
            materials — are owned by or licensed to DSD Corporate Services and are protected
            under applicable UAE intellectual-property legislation, including Federal
            Decree-Law No. 38 of 2021 on Copyright and Related Rights and Federal Law No. 36 of
            2021 on Trademarks, as amended.
          </p>
          <p>
            Content on this Website may not be copied, reproduced, republished, distributed,
            modified, sold, or commercially exploited without DSD's prior written permission,
            except where permitted by law.
          </p>
        </Section>

        <Section number={14} title="Testimonials and results">
          <p>
            Testimonials, reviews, case studies, and examples on this Website describe
            individual experiences and do not guarantee that another client will obtain the
            same result.
          </p>
          <p>
            The outcome of a corporate-service engagement depends on the client's eligibility,
            documentation, selected activity, jurisdiction, regulatory requirements, and
            decisions made by the relevant authorities or third parties.
          </p>
        </Section>

        <Section number={15} title="Limitation of liability">
          <p>
            To the fullest extent permitted by applicable law, DSD Corporate Services and its
            directors, officers, employees, representatives, agents and contractors shall not
            be liable for any indirect, incidental, special, punitive or consequential loss
            (including loss of profit, business, reputation, data, or anticipated savings)
            arising from reliance on general information published on this Website, inability
            to access or use the Website, or the acts or omissions of an independent third
            party.
          </p>
          <p>
            Nothing in this Disclaimer excludes or limits any liability that cannot lawfully be
            excluded or limited under UAE law, including liability arising from fraud, wilful
            misconduct, or gross negligence, or any mandatory right available to a consumer
            under Federal Law No. 15 of 2020 on Consumer Protection and its Executive
            Regulations.
          </p>
          <p>
            Any liability arising from a formally accepted service engagement is governed
            exclusively by the applicable quotation, engagement letter, or service agreement
            entered into between DSD and the client, and not by this Disclaimer.
          </p>
        </Section>

        <Section number={16} title="Privacy and personal information">
          <p>
            Personal information submitted through this Website is processed in accordance
            with our Privacy Policy and applicable UAE data-protection legislation, including
            Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data, as amended,
            and, where relevant to a client's chosen jurisdiction, the data protection
            regulations of the DIFC or ADGM.
          </p>
          <p>
            Users should not submit confidential, sensitive, or original identity or financial
            documents through an unsecured or unauthorised communication channel, including
            personal email or messaging applications. Submission of information through this
            Website does not guarantee acceptance of an engagement or the security of the
            channel used to send it.
          </p>
          <p>This Disclaimer should be read together with our Privacy Policy and Cookie Policy.</p>
        </Section>

        <Section number={17} title="Force majeure">
          <p>
            DSD shall not be liable for any failure or delay in providing information through
            this Website, or in performing any service, to the extent that the failure or
            delay results from circumstances beyond DSD's reasonable control, including acts of
            God, war or civil unrest, government action or directive, public health
            emergencies, strikes or labour disputes, telecommunications or internet failures,
            cyberattacks, power outages, or the acts or omissions of a government authority,
            bank, free zone, or other third party.
          </p>
        </Section>

        <Section number={18} title="General provisions">
          <p>
            <span className="font-semibold text-text-primary">Severability:</span> If any
            provision of this Disclaimer is held invalid or unenforceable under applicable law,
            that provision shall be severed, and the remaining provisions shall continue in
            full force and effect.
          </p>
          <p>
            <span className="font-semibold text-text-primary">No waiver:</span> DSD's failure to
            enforce any provision of this Disclaimer at any time does not waive DSD's right to
            enforce that or any other provision at a later time.
          </p>
          <p>
            <span className="font-semibold text-text-primary">Language:</span> This Disclaimer
            is issued in English. Where an Arabic translation is made available, it is provided
            for convenience only; in the event of any inconsistency, the English version shall
            prevail to the extent permitted by applicable law.
          </p>
          <p>
            <span className="font-semibold text-text-primary">Electronic form:</span> This
            Disclaimer is issued, and may be updated, in electronic form and constitutes a
            valid and binding notice under Federal Decree-Law No. 46 of 2021 on Electronic
            Transactions and Trust Services, as amended.
          </p>
        </Section>

        <Section number={19} title="Changes to this Disclaimer">
          <p>
            DSD may update this Disclaimer to reflect changes in its services, business
            practices, Website functions, or applicable legal requirements.
          </p>
          <p>
            The revised version becomes effective immediately upon publication on this Website,
            and continued use of the Website following publication constitutes acceptance of
            the revised Disclaimer. Users should review this page periodically for updates.
          </p>
        </Section>

        <Section number={20} title="Governing law and jurisdiction">
          <p>
            This Disclaimer, and any dispute or claim arising out of or in connection with the
            use of this Website (including any non-contractual dispute or claim), is governed
            by the federal laws of the United Arab Emirates and the laws applicable in the
            Emirate of Ajman, being the emirate in which DSD's free zone trade licence (ANCFZ)
            is issued, together with the rules and regulations of ANCFZ where applicable.
          </p>
          <p>
            Subject to any mandatory law, or any alternative dispute-resolution or
            exclusive-jurisdiction clause contained in a separately executed service agreement,
            the competent courts of Ajman, United Arab Emirates shall have jurisdiction over any
            dispute relating to this Website or this Disclaimer.
          </p>
        </Section>

        <Section number={21} title="Contact information">
          <p>Questions concerning this Disclaimer may be directed to:</p>
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
