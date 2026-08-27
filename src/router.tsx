import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { CompliancePage } from "@/pages/CompliancePage";
import { ComplianceDetailPage } from "@/pages/ComplianceDetailPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { PricingPage } from "@/pages/PricingPage";
import { TeamMemberDetailPage } from "@/pages/TeamMemberDetailPage";
import { ContactPage } from "@/pages/ContactPage";
import { LegalPage } from "@/pages/legal/LegalPage";
import { CookiePolicyPage } from "@/pages/legal/CookiePolicyPage";
import { PrivacyPolicyPage } from "@/pages/legal/PrivacyPolicyPage";
import { PartnerWithUsPage } from "@/pages/legal/PartnerWithUsPage";
import { WebsiteDisclaimerPage } from "@/pages/legal/WebsiteDisclaimerPage";
import { LandingPage } from "@/pages/landing/LandingPage";
import { LandingThankYouPage } from "@/pages/landing/LandingThankYouPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/services/:slug", element: <ServiceDetailPage /> },
      { path: "/compliance", element: <CompliancePage /> },
      { path: "/compliance/:slug", element: <ComplianceDetailPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:slug", element: <ProjectDetailPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/team/:slug", element: <TeamMemberDetailPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/legal", element: <LegalPage /> },
      { path: "/cookie-policy", element: <CookiePolicyPage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "/partner-with-us", element: <PartnerWithUsPage /> },
      { path: "/website-disclaimer", element: <WebsiteDisclaimerPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  // Landing pages are deliberately siblings of the <App/> layout route, not children of it —
  // they must render with no Navbar/Footer/CookieConsentBanner (see LandingPage.tsx's own
  // comment). React Router ranks route matches by path specificity across the whole tree, so
  // these two literal/dynamic paths still win over App's own `*` catch-all above.
  { path: "/lp/:slug", element: <LandingPage /> },
  { path: "/lp/:slug/thank-you", element: <LandingThankYouPage /> },
]);
