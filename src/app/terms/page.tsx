import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms and conditions that apply to your use of the Hellenic Homes website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="August 2026"
      intro="These terms govern your use of our website. By browsing hellenichomes.gr you agree to the terms set out below."
      sections={[
        {
          heading: "Use of the website",
          body: [
            "You may use this website for personal, non-commercial purposes. Property listings, imagery, plans and copy are provided for information only and may be updated or withdrawn at any time without notice.",
          ],
        },
        {
          heading: "No warranty or advice",
          body: [
            "While we take care to keep information accurate and current, we make no warranties about completeness or reliability. Nothing on this site constitutes legal, tax, investment or construction advice.",
            "Specifications, areas, availability and pricing are indicative and should be confirmed in writing before any decision is made.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All content on this website — including text, photographs, architectural designs, logos and graphics — is owned by or licensed to Hellenic Homes S.A. and may not be reproduced without prior written permission.",
          ],
        },
        {
          heading: "Third-party links",
          body: [
            "Where this website links to third-party sites, we are not responsible for their content or privacy practices.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
          ],
        },
      ]}
    />
  );
}
