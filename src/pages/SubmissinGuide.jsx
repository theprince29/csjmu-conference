import React from "react";
import { Helmet } from "react-helmet-async";
const SubmissionGuide = () => {
  return (
    <div className="bg-gray-100 p-8 text-left mt-4 rounded-lg shadow-md  list-inside">
      <Helmet>
        <title>Submission guidelines - ICRAECCT'2025 Conference</title>
        <meta
          name="description"
          content="Submission guidelines for ICRAECCT 2025 conference."
        />
        <meta
          name="keywords"
          content="conference, submission guidelines, ICRAECCT 2025, academic papers"
        />
      </Helmet>
      <h1 className="text-4xl font-bold text-center text-third mb-8">
        SUBMISSION GUIDELINES
      </h1>
      <h3 className="text-3xl font-semibold mb-4">Disclaimer from Author</h3>
      <p className="mb-4">
        <em>
          In line with our dedication to promoting innovation and upholding the
          highest standards of academic integrity, we request adherence to the
          following guidelines regarding the use of AI-generated content in
          paper submissions:
        </em>
      </p>

      <ul className="list-decimal text-justify list-inside space-y-4 mb-4">
        <li>
          <strong>Originality:</strong> Authors are responsible for ensuring
          that all AI-generated content in their submissions is original and
          respects the intellectual property rights of others. Any use of AI
          tools or datasets must be properly attributed and cited. Additionally,
          total plagiarism, excluding references, must be below 10%. Authors
          must avoid any kind of plagiarism or self-plagiarism.
        </li>
        <li>
          <strong>Accuracy and Validity:</strong> AI-generated content must be
          carefully assessed for accuracy and reliability. Authors bear the
          responsibility for ensuring the correctness of any AI-generated data,
          analysis, or conclusions included in their papers.
        </li>
        <li>
          <strong>Transparency:</strong> The application of AI tools and
          techniques in developing the submission should be transparently
          disclosed. This includes specifying the AI methods, models, and
          datasets used, along with any known limitations or biases they may
          carry.
        </li>
        <li>
          <strong>Ethical Considerations:</strong> Authors are expected to
          follow ethical guidelines in their use of AI. This includes refraining
          from using AI to fabricate data, create misleading information, or
          replicate existing work without proper attribution.
        </li>
        <li>
          <strong>Review Process:</strong> The conference organizers reserve the
          right to closely examine AI-generated content during the review
          process. Submissions containing unverified or improperly attributed
          AI-generated material may face rejection. All submitted papers to the
          conference will undergo a single-blind review process.
        </li>
        <li>
          <strong>Responsibility:</strong> Authors bear full responsibility for
          the content of their submissions, including any AI-generated elements.
          The conference organizers and reviewers hold no liability for any
          issues stemming from the use of AI in submitted papers.
        </li>
        <li>
          <strong>Length of Papers:</strong> The most common types of papers
          accepted for publication are full papers (12–15+ pages) and short
          papers (&lt;12 pages), where a page constitutes 300-400 words. Only
          papers of significant scientific content will be accepted. Very short
          papers (&lt;4 pages) are not allowed.
        </li>
      </ul>

      <p className="mb-8 font-semibold">
        By submitting a paper to this conference, authors acknowledge and agree
        to comply with these guidelines. We appreciate your cooperation and look
        forward to your contributions.
      </p>

      {/* Instructions Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Instruction to Authors</h2>
        <p className="mb-2">
          Manuscripts, referred to as submissions / articles / papers, represent
          significant contributions to academic writing. For ICRAECCT-2025,
          manuscripts will <strong>ONLY</strong> be accepted in electronic
          format via CMT. To submit a paper, at least one author must be a
          registered user on CMT. Authors who are not registered should first
          create an account on the CMT platform.
        </p>
        <p className="mb-4">
          Any issues with online submission should be directed to the organizing
          team. Queries can be mailed to <strong>icraecct@csjmu.ac.in</strong>.
        </p>
      </section>

      {/* Formatting Requirements */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Formatting Requirements</h3>
        <ul className="list-disc pl-8 space-y-2 font-semibold">
          <li>
            Authors must submit original and unpublished work to ICRAECCT-2025.
          </li>
          <li>All fonts must be embedded in the file.</li>
          <li>
            Fonts requiring non-English language support are not permitted.
          </li>
          <li>The document must not be password protected.</li>
          <li>Avoid including headers and footers in the manuscript.</li>
        </ul>
      </section>

      {/* Note to Authors */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Note to Authors</h3>
        <p className="mb-2">
          Papers must align with the conference scope. Submissions to
          ICRAECCT-2025 should include a quantitative analysis that explains why
          and how the proposed, analyzed, or discussed technology, concept, or
          process represents a significant technical advancement in its field.
        </p>
        <p className="mb-4">
          The decision for publication is solely at the discretion of the
          publisher, contingent upon meeting their quality criteria and
          standards.
        </p>
      </section>

      {/* Types of Articles */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Types of Articles</h3>
        <p className="mb-2">
          Authors submitting to ICRAECCT – 2025 can choose from various article
          types that align with the conference scope. These include, but are not
          limited to:
        </p>
        <div className="space-y-2">
          <div>
            <strong>Original Paper:</strong>This type presents the authors'
            original work in the form of an electronic manuscript. It may
            encompass an abstract, keywords, introduction, problem statement,
            objectives, approach, significance, research questions, limitations,
            definitions of terms, related work, methodology, in-depth technical
            investigation, details of experimental analysis, results and / or
            conclusions, future work scope, and references relevant to the
            research work presented in the paper aligned with ICRAECCT – 2025
            theme supported by figures, tables, datasets, pictorial/graphical
            representations, and video links.
          </div>
          <div>
            <strong>Review Paper:</strong> This consists of a comprehensive
            compilation and concise summary of research conducted on a topic
            within the scope of ICRAECCT – 2025. It should be presented as an
            electronic manuscript and may contain an abstract, keywords,
            introduction, problem statement or justification, objectives,
            approach, significance, research questions, limitations, definitions
            of terms, related work, in-depth technical investigation or
            comparison, conclusions, advantages and disadvantages, proposed
            future work, and references. Additional materials may also include
            figures, tables, datasets, pictorial/graphical representations, and
            video links.
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">References</h3>
        <p className="mb-2">
          <strong> Self-citations:</strong> To comply with ethical standards as
          well as to provide appropriate context for published work, citations
          of the author’s own articles should be restricted to 20-30% of total
          references.
        </p>
        <p className="mb-4">
          <strong>Citation Style:</strong> The reference list should include
          only those works that are cited in the text and have been published or
          accepted for publication. Personal communications and unpublished
          works should be mentioned only within the text. Footnotes or endnotes
          should not be used as substitutes for the reference list. References
          must be numbered consecutively and cited in numerical order, with
          in-text citations adhering to the same citation style throughout,
          preferably APA
        </p>
      </section>

      {/* After Acceptance */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">After Acceptance</h3>
        <p className="mb-2">
          <strong>Final Manuscript:</strong> Following the acceptance of the
          manuscript, the corresponding author is required to submit the final
          version, incorporating any suggested changes outlined in the
          acceptance notification email.
        </p>
        <p className="mb-2">
          <strong>Copyright Transfer:</strong> Authors will be required to
          transfer the copyright of their manuscript to the publisher. This is a
          mandatory process and will be conducted electronically. Authors will
          receive an email notification regarding the e-copyright transfer
          process. This measure is intended to ensure the broadest possible
          protection and dissemination of information under copyright laws.
          Should authors encounter any difficulties during the copyright
          transfer process, they must contact the conference organizers for
          assistance.
        </p>
        <p className="mb-2">
          <strong>Camera Ready Copy:</strong> The camera-ready paper, referred
          to as CRC, will represent the final version of the manuscript for
          ICRAECCT – 2025. The CRC versions of eligible manuscripts will be
          forwarded to the publisher. The organizing team for ICRAECCT – 2025
          will notify the corresponding author(s) via email to seek their
          consent for the final version of the manuscript. Authors may also
          suggest any changes, corrections, typos, or spelling mistakes as
          needed by replying to the email.
        </p>
        <p className="mb-4">
          <strong>Update in Manuscript:</strong> Once the manuscript is
          accepted, any suggested changes noted in the acceptance notification
          or otherwise must be incorporated by the author(s) without altering
          the fundamental essence of the accepted version. These changes should
          be limited to no more than 20% of the manuscript.
        </p>
      </section>

      {/* Other Guidelines */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Other Guidelines</h3>
        <p className="mb-2">
          <strong>Ethics:</strong> The originality of the submitted manuscript
          is the sole responsibility of the author(s). They must avoid duplicate
          submissions and publications, as well as instances of plagiarism and
          self-plagiarism. All manuscript submissions will be screened using
          Turnitin/Ithenticate.
        </p>
        <p className="mb-2">
          <strong>Co-Author Guidelines:</strong> When an article is submitted,
          it is understood that the manuscript has received approval from all
          author(s) and co-author(s). Additionally, changes to the co-author
          list will not be allowed after the manuscript has been accepted,
          except in exceptional cases, which may be considered by the Editor.
        </p>
        <p className="mb-2">
          <strong>Corresponding Author Guidelines:</strong> The Corresponding
          Author refers to the individual responsible for email correspondence
          with ICRAECCT – 2025, regardless of their position in the author
          sequence. The manuscript must clearly indicate the Corresponding
          Author's name and email address, marked with an asterisk (*). In
          addition to the manuscript's content, the Corresponding Author is
          solely responsible for including the names and details of all other
          authors and co-authors in the submission. The conference committee
          assumes that all authors and co-authors have contributed to the
          submission and that their consent has been obtained by the
          Corresponding Author or first author to include their names in the
          submission.
        </p>
        <p className="mb-2">
          <strong>Headings:</strong> Please refrain from using more than three
          levels of displayed headings.
        </p>
        <p className="mb-2">
          <strong>Abbreviations:</strong> Abbreviations should be introduced
          with their definitions upon first mention and used consistently
          thereafter. If an abbreviation is first used in the abstract, it must
          be defined both in the abstract and upon its initial appearance in the
          main text to maintain clarity and consistency.
        </p>
        <p className="mb-2">
          <strong>Flow of the Manuscript:</strong> A manuscript in general
          should start with Title, abstract, keywords, Introduction, Literature
          Survey, Proposed Methodology, Experimental Work and Simulation
          Details, Comparative Analysis, Performance Metrics and end up with
          Conclusion with Limiations and Future Scope keeping References at end.
          Funding Statement/Acknowledgement/Data Availability Statement should
          be included after the Conclusion and before the References.
        </p>
        <p className="mb-4">
          <strong>Notifications:</strong> Authors of manuscripts submitted to
          ICRAECCT – 2025 will receive notifications solely via email. Please be
          aware that ICRAECCT – 2025 cannot be held liable for any lapses in
          email communication, including non-receipt of messages or emails being
          directed to junk/spam folders, or any other technical issues. We
          appreciate your understanding regarding this matter.
        </p>
      </section>
    </div>
  );
};

export default SubmissionGuide;
