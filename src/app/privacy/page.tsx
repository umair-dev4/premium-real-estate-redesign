import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hellenic Homes collects, uses and protects personal information submitted through hellenichomes.gr.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 2026"
      intro="Your privacy matters to us. This policy explains what information we collect when you use our website or get in touch, how we use it, and the choices you have."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly — such as your name, email address, phone number and any details you share when you submit an enquiry, request a viewing or contact our team.",
            "We may also collect limited technical data automatically, such as the pages you visit and general device information, used to improve how the site performs.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information to respond to enquiries, provide information about properties and services, and manage any relationship you may have with us.",
            "We never sell your personal data. Information is shared with third parties only where necessary to deliver a service you have requested, or where required by law.",
          ],
        },
        {
          heading: "Data retention",
          body: [
            "We keep personal information only for as long as we need it for the purposes described here, or to meet legal, accounting or regulatory requirements.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Under applicable data-protection law, including the GDPR, you may request access to, correction of, or deletion of your personal data, and you may object to or restrict certain processing.",
            "To exercise any of these rights, simply contact the studio using the details below.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "If you have any questions about this policy or how we handle your data, please contact us and we will be glad to help.",
          ],
        },
      ]}
    />
  );
}
