import type { ReactNode } from "react";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

// Rewritten 2026-08-28 for DSD's real identity and business as a digital marketing agency.
// The previous version of this page was transcribed verbatim from "Privacy Policy for dsd
// cop.docx" (supplied 2026-08-27), a source document written for an unrelated UAE
// company-formation/immigration business ("DSD Corporate Services") — see
// progress-tracker.md for the discrepancy and the explicit user decision to resolve it by
// rewriting this page for DSD's actual business, not just swapping the contact block.
// Categories of data below are grounded in what this codebase actually collects/sends (see
// src/lib/email.ts and src/data/cookieInventory.ts) rather than invented — e.g. no analytics
// or ad-pixel data is claimed because none is wired into the site today.

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
        <p className="mt-2 text-sm text-text-muted">Effective date: 28 August 2026</p>

        <Section number={1} title="Introduction">
          <p>
            DSD ("DSD," "we," "us" or "our") is a digital marketing agency, and we respect your
            privacy and are committed to protecting the personal information entrusted to us.
          </p>
          <p>This Privacy Policy explains how we collect, use, store, disclose and protect personal information when you:</p>
          <List
            items={[
              "Visit www.dsdgrp.com",
              "Submit an enquiry, request a quotation, or fill out a landing-page lead form",
              "Engage us for website development, digital marketing, design, app development, ecommerce, or AI services",
              "Communicate with us by email, telephone, WhatsApp, or social media",
              "Visit our Dubai office; or",
              "Otherwise interact with DSD as a client, prospective client, or referral partner.",
            ]}
          />
          <p>
            For the purposes of applicable data-protection law, DSD will generally act as the
            controller of the personal information described in this Privacy Policy.
          </p>
        </Section>

        <Section number={2} title="Personal information we collect">
          <p>Depending on the nature of your enquiry or the services engaged, we may collect the following categories of personal information.</p>

          <p className="font-semibold text-text-primary">Contact information</p>
          <p>This may include:</p>
          <List
            items={[
              "Full name",
              "Business or residential address",
              "Email address",
              "Telephone or WhatsApp number; and",
              "Preferred communication method.",
            ]}
          />

          <p className="mt-4 font-semibold text-text-primary">Business information</p>
          <p>Where you engage us as a client, this may include:</p>
          <List
            items={[
              "Company name, industry, and website",
              "Job title or role at the company",
              "Business goals, target audience, and brand materials you provide us; and",
              "Access credentials to advertising, analytics, hosting, or social-media accounts you authorise us to manage on your behalf.",
            ]}
          />

          <p className="mt-4 font-semibold text-text-primary">Financial and transactional information</p>
          <p>This may include:</p>
          <List
            items={[
              "Billing and invoice details",
              "Payment records and transaction references; and",
              "Bank or payment-provider details necessary to process fees.",
            ]}
          />
          <p>
            Payment processing is generally handled directly by an authorised payment provider or
            bank transfer. DSD does not retain complete payment-card information unless
            necessary, lawful and appropriately secured.
          </p>

          <p className="mt-4 font-semibold text-text-primary">Service and communication information</p>
          <p>This may include:</p>
          <List
            items={[
              "Details of your enquiry or project brief",
              "Services requested or purchased",
              "Quotations, proposals, and service agreements",
              "Email, telephone, and messaging correspondence",
              "Campaign performance data tied to a client's own ad or analytics accounts",
              "Feedback, reviews, and testimonials you agree to share; and",
              "Records of calls and meetings.",
            ]}
          />

          <p className="mt-4 font-semibold text-text-primary">Website and technical information</p>
          <p>When you use our website, we may collect:</p>
          <List
            items={[
              "Internet Protocol address",
              "Browser and device type",
              "Operating system",
              "Pages visited and time spent on the website",
              "Referral source; and",
              "Cookie identifiers and local-storage keys.",
            ]}
          />
          <p>
            Further detail is in our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>,
            including our current, actually-audited list of what this site stores. As of this
            policy's effective date, this site does not run any analytics or advertising
            tracking script of its own — that will be updated here if it changes.
          </p>
        </Section>

        <Section number={3} title="How we collect information">
          <p>We may collect personal information:</p>
          <List
            items={[
              "Directly from you, through our website's contact and landing-page forms",
              "Through email, telephone calls, and messaging services",
              "From a company or representative acting on your behalf",
              "Through advertising, analytics, or social-media accounts you grant us access to in order to deliver a service; and",
              "From publicly available business listings, websites, and professional platforms.",
            ]}
          />
          <p>
            If you provide personal information about another person (for example, a colleague's
            contact details), you confirm that you are authorised to provide it.
          </p>
        </Section>

        <Section number={4} title="How we use personal information">
          <p>We may process personal information to:</p>
          <List
            items={[
              "Respond to enquiries and provide quotations",
              "Deliver the services you engage us for — website development, SEO, paid advertising, social media management, content and email marketing, design and branding, app development, ecommerce, and AI integration",
              "Manage and report on advertising or marketing campaigns run on your behalf",
              "Prepare contracts, invoices, receipts, and payment records",
              "Communicate service updates and project status",
              "Maintain and improve our own website and services",
              "Protect our systems, personnel, and clients against fraud or misuse",
              "Send marketing communications, where permitted",
              "Establish, exercise, or defend legal rights; and",
              "Comply with applicable laws, regulatory requests, or court orders.",
            ]}
          />
        </Section>

        <Section number={5} title="Grounds for processing">
          <p>Depending on the circumstances, we process personal information:</p>
          <List
            items={[
              "With your consent",
              "To respond to your enquiry before entering into an agreement",
              "To perform a contract or provide a requested service",
              "To comply with a legal or regulatory obligation",
              "For our legitimate business interests, appropriately balanced against your rights (for example, improving our services or preventing fraud); or",
              "Under another lawful basis recognised by applicable law.",
            ]}
          />
          <p>
            Where processing is based on consent, you may withdraw that consent at any time.
            Withdrawal will not affect processing lawfully completed before the consent was
            withdrawn.
          </p>
          <p>Refusing to provide requested information may prevent us from responding to your enquiry or delivering a requested service.</p>
        </Section>

        <Section number={6} title="Disclosure of personal information">
          <p>We may disclose personal information, where necessary and lawful, to:</p>
          <List
            items={[
              "Service providers we use to deliver your project — hosting, email-relay, and form-processing providers (e.g. EmailJS)",
              "Advertising and analytics platforms (e.g. Google, Meta) when running or reporting on a campaign on your behalf, using accounts you have authorised us to access",
              "Accountants, auditors, and legal advisers",
              "Payment providers and banks",
              "Courts, law-enforcement agencies, and regulators, where legally required; and",
              "A prospective buyer, investor, or successor in connection with a lawful business transaction.",
            ]}
          />
          <p>Service providers are expected to process information only for authorised purposes and to apply appropriate confidentiality and security measures.</p>
          <p>DSD does not sell or rent personal information to third parties.</p>
        </Section>

        <Section number={7} title="International transfers">
          <p>
            Some of the third-party tools and advertising platforms we use (for example, cloud
            hosting or ad platforms) may process personal information outside the UAE.
          </p>
          <p>
            Where personal information is transferred internationally, we take reasonable steps
            to ensure the transfer is protected through the provider's own safeguards, your
            consent where appropriate, or another legally recognised transfer mechanism.
            Different countries may provide different levels of data protection.
          </p>
        </Section>

        <Section number={8} title="Retention of information">
          <p>We retain personal information only for as long as reasonably necessary to:</p>
          <List
            items={[
              "Provide the requested services and manage the client relationship",
              "Maintain accurate business and accounting records",
              "Meet legal, accounting, and tax requirements",
              "Resolve disputes; and",
              "Prevent fraud and misuse.",
            ]}
          />
          <p>
            When information is no longer required, we take reasonable steps to securely delete,
            destroy, or anonymise it, unless continued retention is required or permitted by law.
          </p>
        </Section>

        <Section number={9} title="Information security">
          <p>We use reasonable administrative, organisational, and technical safeguards designed to protect personal information against unauthorised access, accidental loss, improper disclosure, unlawful alteration, misuse, and destruction.</p>
          <p>These safeguards may include access controls, staff confidentiality requirements, secure storage, authentication controls, and security monitoring.</p>
          <p>
            No website, email service, or electronic storage system is completely secure. Please
            avoid sharing advertising-account passwords, payment details, or other sensitive
            information through unverified communication channels, and always confirm payment
            instructions through an official DSD contact before transferring money.
          </p>
        </Section>

        <Section number={10} title="Cookies">
          <p>
            Our website may use cookies and similar technologies to operate securely, remember
            your preferences, and, where added in future, measure website performance or support
            advertising.
          </p>
          <p>Please read our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a> for the full, current detail.</p>
        </Section>

        <Section number={11} title="Marketing communications">
          <p>Where permitted, we may use your contact information to send information about DSD's services, case studies, or promotional offers.</p>
          <p>You may opt out at any time by:</p>
          <List
            items={[
              "Using the unsubscribe option in the communication",
              "Replying with an opt-out request; or",
              "Contacting info@dsdgrp.com.",
            ]}
          />
          <p>Opting out of marketing will not prevent us from sending essential messages about an active enquiry, project, or invoice.</p>
        </Section>

        <Section number={12} title="Your rights">
          <p>Subject to applicable law, you may have the right to:</p>
          <List
            items={[
              "Obtain information about how your personal information is processed",
              "Request access to your personal information",
              "Request correction of inaccurate or incomplete information",
              "Request deletion of information",
              "Request restriction of processing",
              "Object to or stop direct marketing",
              "Withdraw consent",
              "Request transfer of your information, where legally applicable; and",
              "Submit a complaint to the competent data-protection authority.",
            ]}
          />
          <p>We may request proof of identity before responding. Requests may be submitted to info@dsdgrp.com.</p>
        </Section>

        <Section number={13} title="Automated decision-making">
          <p>
            DSD does not make decisions producing significant legal effects about you solely
            through automated processing. Marketing and analytics tools we use may support
            campaign optimisation or reporting, but do not make binding decisions about
            individuals without human review.
          </p>
        </Section>

        <Section number={14} title="Children's information">
          <p>Our website and services are directed at businesses, not children. We do not knowingly collect personal information from children.</p>
        </Section>

        <Section number={15} title="External websites">
          <p>Our website may contain links to client websites, social-media platforms, and other third-party sites. DSD does not control the privacy or security practices of those websites.</p>
          <p>You should review the privacy policy of each external website before providing personal information.</p>
        </Section>

        <Section number={16} title="Updates to this Privacy Policy">
          <p>We may update this Privacy Policy to reflect changes in our services, website functions, or applicable requirements.</p>
          <p>The updated version will be published on this page with a revised effective date.</p>
        </Section>

        <Section number={17} title="Contact us">
          <p>For questions, requests, or complaints concerning personal information, contact:</p>
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
