import type { ReactNode } from "react";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

// Rewritten 2026-08-28 for DSD's real identity and business as a digital marketing agency.
// The previous version of this page was transcribed verbatim from "DSD_Website_dsd cop.docx"
// (supplied 2026-08-27), a source document written for an unrelated UAE company-formation/
// immigration business ("DSD Corporate Services") licensed under a specific Ajman free zone —
// AML/KYC checks, trade-licence and visa processing, and that free-zone's jurisdiction have no
// bearing on a digital marketing agency, so this is a full content rewrite, not just an
// identity swap. Governing law is stated generally (UAE federal law / Dubai courts, matching
// DSD's real Dubai address) without a specific trade-licence or free-zone reference, since no
// licence number was ever supplied — see progress-tracker.md's explicit "do not fabricate one"
// note, which still applies.

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
          DSD — www.dsdgrp.com
          <br />
          Last updated: 28 August 2026
        </p>

        <div className="mt-8 flex flex-col gap-3 leading-relaxed text-text-secondary">
          <p>
            This website, www.dsdgrp.com (the "Website"), is owned and operated by DSD, a
            digital marketing agency based in Dubai, United Arab Emirates ("DSD", "we", "us" or
            "our").
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
            promotional purposes only. It is intended to give an overview of DSD, our services,
            and our portfolio of work.
          </p>
          <p>
            While we take reasonable steps to keep the information on this Website accurate and
            up to date — including project details, live links, and pricing — we do not
            represent or warrant that all information is complete, error-free, or suitable for
            any particular person's circumstances.
          </p>
        </Section>

        <Section number={2} title="No professional advice">
          <p>
            Nothing on this Website constitutes legal, tax, accounting, financial, or investment
            advice, and nothing on this Website should be relied upon as such.
          </p>
          <p>
            Where specialised professional advice is required, clients and prospective clients
            should obtain independent advice appropriate to their own circumstances before making
            any decision or entering into any transaction.
          </p>
        </Section>

        <Section number={3} title="No professional relationship created">
          <p>
            Accessing this Website, submitting an enquiry, or otherwise communicating with DSD
            through this Website does not, by itself, create a client, agency, or contractual
            relationship between the user and DSD.
          </p>
          <p>A formal service relationship with DSD begins only once:</p>
          <List
            items={[
              "DSD has accepted the engagement;",
              "the parties have agreed on the scope of services, fees, and timeline; and",
              "a quotation, proposal, or service agreement has been issued by DSD and accepted by the client.",
            ]}
          />
        </Section>

        <Section number={4} title="No guarantee of marketing or campaign results">
          <p>
            DSD provides digital marketing, web and app development, design, ecommerce, and AI
            integration services on a best-efforts, professional basis. However, DSD does not
            guarantee:
          </p>
          <List
            items={[
              "Search engine rankings or organic traffic outcomes",
              "Advertising campaign performance, cost-per-result, or return on ad spend",
              "Social media follower growth, engagement, or reach",
              "Website conversion rates or sales generated by a website, campaign, or app; or",
              "Any specific business outcome resulting from our services.",
            ]}
          />
          <p>
            Marketing and development outcomes depend on factors outside DSD's control, including
            search-engine and advertising-platform algorithm changes, market conditions,
            competitor activity, and the client's own business execution and decisions.
          </p>
        </Section>

        <Section number={5} title="Reliance on third-party platforms">
          <p>
            Our services frequently depend on third-party platforms we do not own or control,
            including search engines, social media and advertising platforms (such as Google and
            Meta), app stores, hosting providers, and domain registrars.
          </p>
          <p>
            These platforms may change their algorithms, policies, pricing, or availability
            without notice. DSD is not responsible for the effects of such changes, including
            account suspensions, ranking changes, or increased advertising costs imposed by a
            third-party platform.
          </p>
        </Section>

        <Section number={6} title="Fees and quotations">
          <p>
            Any price, package, or estimate displayed on this Website (including the illustrative
            tiers on our Pricing page) is indicative only, unless expressly confirmed in a
            written quotation or service agreement.
          </p>
          <p>
            Third-party costs — such as advertising spend, software licences, domain and hosting
            fees, and app-store fees — are typically billed or passed through separately and are
            not included in DSD's own service fees unless stated otherwise.
          </p>
        </Section>

        <Section number={7} title="Client responsibilities">
          <p>Clients are responsible for:</p>
          <List
            items={[
              "Providing accurate, complete, and current business, brand, and account information",
              "Confirming they hold the necessary rights to any content, trademarks, or media supplied to DSD for use in a project",
              "Providing timely feedback and approvals so agreed timelines can be met; and",
              "Ensuring their own business, products, and advertising claims comply with applicable laws and platform policies.",
            ]}
          />
          <p>
            DSD is not responsible for delays or issues resulting from inaccurate, incomplete, or
            late information or materials supplied by a client.
          </p>
        </Section>

        <Section number={8} title="Third-party services and referrals">
          <p>
            DSD may recommend or work alongside third-party providers, including hosting
            companies, software vendors, photographers, and other specialists.
          </p>
          <p>
            Unless expressly agreed otherwise in writing, these third parties operate
            independently and are responsible for their own services, pricing, and conduct. A
            recommendation does not constitute a guarantee or endorsement.
          </p>
        </Section>

        <Section number={9} title="External links">
          <p>
            This Website contains links to third-party websites, including live client project
            previews, GitHub repositories, and social media platforms. These links are provided
            for convenience and portfolio purposes only.
          </p>
          <p>
            DSD does not control third-party websites and does not guarantee their availability,
            security, or content. Access to an external website is at the user's own discretion
            and subject to that website's own terms.
          </p>
        </Section>

        <Section number={10} title="Website availability and security">
          <p>
            We aim to keep this Website available and secure but do not guarantee continuous or
            uninterrupted access. The Website may be suspended or modified due to maintenance,
            technical faults, or circumstances beyond our control.
          </p>
          <p>
            DSD will never ask clients to transfer funds to a changed bank account solely on the
            basis of an unverified email or message. Clients should independently confirm payment
            instructions through an official DSD contact before transferring any funds.
          </p>
        </Section>

        <Section number={11} title="Intellectual property">
          <p>
            Unless otherwise stated, this Website and its contents — including the DSD name,
            branding, graphics, text, and design — are owned by or licensed to DSD and protected
            under applicable UAE intellectual-property legislation.
          </p>
          <p>
            Ownership and licensing of deliverables produced for a client (such as a website,
            app, or creative asset) is governed by the applicable signed service agreement, not
            by this Disclaimer. Portfolio items shown on this Website (screenshots, live links,
            and descriptions of past client work) remain the property of their respective owners
            and are shown for demonstration purposes with the relevant client's permission.
          </p>
        </Section>

        <Section number={12} title="Testimonials and case studies">
          <p>
            Testimonials, case studies, and portfolio examples on this Website describe
            individual client experiences and do not guarantee that another client will achieve
            the same results.
          </p>
        </Section>

        <Section number={13} title="Limitation of liability">
          <p>
            To the fullest extent permitted by applicable law, DSD and its directors, employees,
            representatives, and contractors shall not be liable for any indirect, incidental,
            special, punitive, or consequential loss (including loss of profit, business,
            reputation, data, or anticipated savings) arising from reliance on information
            published on this Website, inability to access or use the Website, or the acts or
            omissions of an independent third party or third-party platform.
          </p>
          <p>
            Nothing in this Disclaimer excludes or limits any liability that cannot lawfully be
            excluded or limited under UAE law, including liability arising from fraud, wilful
            misconduct, or gross negligence.
          </p>
          <p>
            Any liability arising from a formally accepted service engagement is governed
            exclusively by the applicable quotation or service agreement entered into between DSD
            and the client, and not by this Disclaimer.
          </p>
        </Section>

        <Section number={14} title="Privacy and personal information">
          <p>
            Personal information submitted through this Website is processed in accordance with
            our Privacy Policy and applicable UAE data-protection legislation.
          </p>
          <p>This Disclaimer should be read together with our Privacy Policy and Cookie Policy.</p>
        </Section>

        <Section number={15} title="Force majeure">
          <p>
            DSD shall not be liable for any failure or delay in providing information through
            this Website, or in performing any service, to the extent that the failure or delay
            results from circumstances beyond DSD's reasonable control, including acts of God,
            government action, public health emergencies, internet or hosting-provider failures,
            cyberattacks, power outages, or the acts or omissions of a third-party platform.
          </p>
        </Section>

        <Section number={16} title="General provisions">
          <p>
            <span className="font-semibold text-text-primary">Severability:</span> If any
            provision of this Disclaimer is held invalid or unenforceable, that provision shall
            be severed, and the remaining provisions shall continue in full force and effect.
          </p>
          <p>
            <span className="font-semibold text-text-primary">No waiver:</span> DSD's failure to
            enforce any provision of this Disclaimer at any time does not waive DSD's right to
            enforce that or any other provision at a later time.
          </p>
          <p>
            <span className="font-semibold text-text-primary">Language:</span> This Disclaimer is
            issued in English. Where a translation is made available, it is provided for
            convenience only; in the event of any inconsistency, the English version shall
            prevail to the extent permitted by applicable law.
          </p>
          <p>
            <span className="font-semibold text-text-primary">Electronic form:</span> This
            Disclaimer is issued, and may be updated, in electronic form.
          </p>
        </Section>

        <Section number={17} title="Changes to this Disclaimer">
          <p>DSD may update this Disclaimer to reflect changes in its services, business practices, or applicable legal requirements.</p>
          <p>
            The revised version becomes effective immediately upon publication on this Website,
            and continued use of the Website following publication constitutes acceptance of the
            revised Disclaimer.
          </p>
        </Section>

        <Section number={18} title="Governing law and jurisdiction">
          <p>
            This Disclaimer, and any dispute or claim arising out of or in connection with the
            use of this Website, is governed by the federal laws of the United Arab Emirates and
            the laws applicable in the Emirate of Dubai.
          </p>
          <p>
            Subject to any mandatory law, or any alternative dispute-resolution or
            exclusive-jurisdiction clause contained in a separately executed service agreement,
            the competent courts of Dubai, United Arab Emirates shall have jurisdiction over any
            dispute relating to this Website or this Disclaimer.
          </p>
        </Section>

        <Section number={19} title="Contact information">
          <p>Questions concerning this Disclaimer may be directed to:</p>
          <p>
            DSD
            <br />
            Office No. 1, 1st Floor, Al Hareb Building
            <br />
            Umm Hurair Road, Oud Metha, P.O. Box 181040
            <br />
            Dubai, United Arab Emirates
            <br />
            Email:{" "}
            <a href="mailto:info@dsdgrp.com" className="text-primary hover:underline">
              info@dsdgrp.com
            </a>
            <br />
            Website: www.dsdgrp.com
            <br />
            Telephone:{" "}
            <a href="tel:+917585889093" className="font-mono text-primary hover:underline">
              +91 7585889093
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
