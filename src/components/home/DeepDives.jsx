import React from "react";
import DeepDive from "./DeepDive";
import ComplianceStage from "./ComplianceStage";
import DocumentStage from "./DocumentStage";
import ResearchStage from "./ResearchStage";

export default function DeepDives() {
  return (
    <>
      <DeepDive
        num="01" eyebrow="Legal Services" tone="paper"
        title="Compliance that does not slip."
        lede="Incorporation, registrations and annual filings, delivered by lawyers, CAs and company secretaries on one bench."
        features={[["Named owner", "every matter has one person accountable"], ["Live tracking", "from received to delivered, no email chains"], ["Deadline alerts", "surfaced before they are missed"]]}
        cta="See Legal Services" to="/legal-services" stage={<ComplianceStage />}
      />
      <DeepDive
        num="02" eyebrow="Doc Engine" tone="parchment" mirror
        title="Drafts in under a minute."
        lede="Plain language in, an India-specific legal document out, with risk flags a reviewer can act on."
        features={[["Guided questions", "no blank page, no legalese"], ["India-specific clauses", "assembled from a versioned library"], ["Sign online", "executed versions lock, with an audit trail"]]}
        cta="Draft a document" to="/docengine" stage={<DocumentStage />}
      />
      <DeepDive
        num="03" eyebrow="Introspector" tone="chamber"
        title="Research with receipts."
        lede="Precedent search, statute mapping and case strategy, with a citation on every claim."
        features={[["Cited by default", "uncited research is blocked in the pipeline"], ["IPC to BNS", "map old sections to the new code"], ["Private", "your documents never train models"]]}
        cta="Open the sample" to="/introspector" stage={<ResearchStage />}
      >
        <div className="mt-6 border-l-[3px] border-gold bg-navy-2 rounded-r-lg px-4 py-3 text-[14px] text-gold">
          AI output is decision support. Review it with a qualified professional before relying on it.
        </div>
      </DeepDive>
    </>
  );
}