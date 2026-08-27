import type { ReactNode } from "react";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { cookieInventory } from "@/data/cookieInventory";

// REAL legal content, transcribed verbatim from "Cookie Policy dsd cop.docx" (supplied
// 2026-08-27) — not placeholder boilerplate. See progress-tracker.md for the identity
// discrepancy this content surfaced (this document's operator, "DSD Corporate Services",
// differs from the site's general "DSD" contact details used elsewhere) and how it was
// handled. Do not paraphrase or alter this page's wording without updating the source
// document first — it's a legal policy, not marketing copy.

// Private, unexported helper — not a one-component-per-file violation, only
// CookiePolicyPage itself is exported.
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

export function CookiePolicyPage() {
  useDocumentTitle("Cookie Policy");

  return (
    <div className="bg-surface px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Legal</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">Cookie Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Effective date: 26 August 2026</p>

        <Section number={1} title="Introduction">
          <p>
            This Cookie Policy explains how DSD Corporate Services ("DSD," "we," "us" or
            "our") uses cookies and similar technologies on www.dsdcop.com.
          </p>
          <p>It should be read together with our Privacy Policy.</p>
        </Section>

        <Section number={2} title="What are cookies?">
          <p>
            Cookies are small text files placed on a computer, mobile telephone or other
            device when a person visits a website.
          </p>
          <p>
            Cookies allow a website to recognise a browser or device, remember selections,
            operate securely, understand how visitors use the website and provide relevant
            content.
          </p>
          <p>Cookies may be:</p>
          <List
            items={[
              "Session cookies, which expire when the browser is closed; or",
              "Persistent cookies, which remain on the device for a defined period or until deleted.",
            ]}
          />
          <p>Cookies may also be:</p>
          <List
            items={[
              "First-party cookies, placed directly by DSD's website; or",
              "Third-party cookies, placed by another organisation whose services are used on the website.",
            ]}
          />
        </Section>

        <Section number={3} title="Similar technologies">
          <p>We may use technologies performing functions similar to cookies, including:</p>
          <List
            items={[
              "Pixels and tracking tags",
              "Web beacons",
              "Local browser storage",
              "Software development kits",
              "Device identifiers",
              "Embedded scripts",
            ]}
          />
          <p>References to "cookies" in this policy include these similar technologies where appropriate.</p>
        </Section>

        <Section number={4} title="Types of cookies we may use">
          <p className="font-semibold text-text-primary">Strictly necessary cookies</p>
          <p>These cookies are required for the website to function properly and securely. They may be used to:</p>
          <List
            items={[
              "Load and display website pages",
              "Protect forms against spam or misuse",
              "Maintain website and network security",
              "Remember privacy selections",
              "Support session management",
              "Balance website traffic",
            ]}
          />
          <p>
            Because these cookies are essential, they cannot normally be disabled through the
            website's cookie-preference tool. They may still be blocked through browser
            settings, but parts of the website may then stop working correctly.
          </p>

          <p className="mt-4 font-semibold text-text-primary">Functional cookies</p>
          <p>Functional cookies allow the website to remember choices and provide enhanced features. They may remember:</p>
          <List
            items={[
              "Language preferences",
              "Region or location selections",
              "Display preferences",
              "Previously entered non-sensitive information",
              "Customer-service or communication selections",
            ]}
          />
          <p>Where required, these cookies will be activated only after consent.</p>

          <p className="mt-4 font-semibold text-text-primary">Analytics cookies</p>
          <p>Analytics cookies help us understand how visitors interact with the website. They may collect information about:</p>
          <List
            items={[
              "Pages visited",
              "Time spent on the website",
              "Navigation paths",
              "Referral sources",
              "Browser and device type",
              "General geographic region",
              "Website errors or performance",
            ]}
          />
          <p>
            We use this information to evaluate and improve website performance. Where
            required, analytics cookies will be activated only after consent.
          </p>

          <p className="mt-4 font-semibold text-text-primary">Advertising and marketing cookies</p>
          <p>Advertising cookies may be used to:</p>
          <List
            items={[
              "Measure advertising effectiveness",
              "Limit how often an advertisement is displayed",
              "Build an understanding of visitor interests",
              "Provide more relevant advertisements",
              "Measure activity following an advertisement",
            ]}
          />
          <p>
            These cookies may be placed by advertising or social-media providers. They will be
            used only where configured on the website and after obtaining consent where
            required.
          </p>

          <p className="mt-4 font-semibold text-text-primary">Social-media and embedded-content cookies</p>
          <p>
            Pages may contain embedded maps, videos, social-media buttons, chat features or
            other third-party content.
          </p>
          <p>
            The provider of that content may place cookies or collect information about the
            user's interaction with the content. Such processing is governed by the third
            party's own privacy and cookie policies.
          </p>
        </Section>

        <Section number={5} title="Cookie summary">
          <p>The website may use the following categories:</p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-text-primary">
                  <th className="py-2 pr-3 font-semibold">Cookie category</th>
                  <th className="py-2 pr-3 font-semibold">Main purpose</th>
                  <th className="py-2 font-semibold">Consent status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 pr-3">Strictly necessary</td>
                  <td className="py-2 pr-3">Security, page operation, forms and privacy settings</td>
                  <td className="py-2">Always active</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 pr-3">Functional</td>
                  <td className="py-2 pr-3">Remember preferences and provide enhanced features</td>
                  <td className="py-2">Optional</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 pr-3">Analytics</td>
                  <td className="py-2 pr-3">Measure traffic and website performance</td>
                  <td className="py-2">Optional</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 pr-3">Advertising</td>
                  <td className="py-2 pr-3">Advertising measurement and personalisation</td>
                  <td className="py-2">Optional</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3">Social media and embedded content</td>
                  <td className="py-2 pr-3">Display and measure third-party content</td>
                  <td className="py-2">Optional where required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            The exact cookie name, provider, purpose and expiry period should be displayed in
            the website's Cookie Settings panel and updated whenever website technology
            changes.
          </p>

          <p className="mt-4 font-semibold text-text-primary">Live cookie inventory</p>
          <p>
            The table below is the actual, current list of cookies and browser storage this
            website uses — not a generic template. It is re-verified whenever the site's code
            changes.
          </p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-text-primary">
                  <th className="py-2 pr-3 font-semibold">Name</th>
                  <th className="py-2 pr-3 font-semibold">Category</th>
                  <th className="py-2 pr-3 font-semibold">Provider</th>
                  <th className="py-2 font-semibold">Expiry</th>
                </tr>
              </thead>
              <tbody>
                {cookieInventory.map((item) => (
                  <tr key={item.name} className="border-b border-border align-top last:border-b-0">
                    <td className="py-2 pr-3 font-mono text-xs">{item.name}</td>
                    <td className="py-2 pr-3 capitalize">{item.category}</td>
                    <td className="py-2 pr-3">{item.provider}</td>
                    <td className="py-2">{item.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section number={6} title="Cookie consent">
          <p>When you first visit the website, you should be presented with a cookie notice allowing you to:</p>
          <List items={["Accept all optional cookies", "Reject all optional cookies; or", "Select particular cookie categories."]} />
          <p>
            Strictly necessary cookies may be used without an optional-cookie selection because
            they are required to operate the website.
          </p>
          <p>
            Optional cookies should remain disabled until the user makes an affirmative
            selection where consent is required.
          </p>
        </Section>

        <Section number={7} title="Managing or withdrawing consent">
          <p>
            You may change or withdraw your cookie selection at any time through the Cookie
            Settings link displayed on the website.
          </p>
          <p>
            Withdrawing consent does not affect the lawfulness of processing completed before
            consent was withdrawn.
          </p>
          <p>You may also manage cookies through your browser settings. Most browsers allow users to:</p>
          <List
            items={[
              "View stored cookies",
              "Delete cookies",
              "Block all or selected cookies",
              "Block third-party cookies",
              "Receive a warning before a cookie is stored.",
            ]}
          />
          <p>Blocking cookies may affect website availability or functionality.</p>
        </Section>

        <Section number={8} title="Third-party cookies">
          <p>
            Third-party tools may process information according to their own policies and may
            transfer information outside the UAE.
          </p>
          <p>
            DSD does not directly control the duration or operation of third-party cookies.
            Before accepting optional third-party cookies, users should review the relevant
            provider's privacy information through the Cookie Settings panel.
          </p>
        </Section>

        <Section number={9} title="Information collected through cookies">
          <p>Depending on the cookies selected, information collected may include:</p>
          <List
            items={[
              "IP address",
              "Cookie or device identifier",
              "Browser and operating system",
              "Device type",
              "Approximate location",
              "Date and time of access",
              "Pages viewed",
              "Buttons or links selected",
              "Referral website",
              "Website errors",
              "Advertising or campaign interactions.",
            ]}
          />
          <p>
            This information may constitute personal information when it identifies or can
            reasonably be linked to an individual.
          </p>
        </Section>

        <Section number={10} title="Retention">
          <p>
            Cookies remain on a device for the period stated in the website's Cookie Settings
            panel, unless they are deleted earlier through the browser.
          </p>
          <p>
            Information generated through cookies will be retained only for as long as
            reasonably necessary for the relevant purpose and in accordance with our Privacy
            Policy.
          </p>
        </Section>

        <Section number={11} title="Changes to this Cookie Policy">
          <p>We may update this Cookie Policy when:</p>
          <List
            items={[
              "New website technology is introduced",
              "Cookie providers or purposes change",
              "Legal requirements change; or",
              "Our privacy practices are updated.",
            ]}
          />
          <p>The revised policy will be published with an updated effective date.</p>
        </Section>

        <Section number={12} title="Contact us">
          <p>For questions concerning cookies or personal information, contact:</p>
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
