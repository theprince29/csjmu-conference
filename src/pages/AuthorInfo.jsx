import React from "react";

const AuthorInfo = () => {
  return (
    <div className="bg-gray-100 p-8 text-left mt-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-third">
        Guidelines for Preparing Camera-Ready Copy (CRC)
      </h1>
      <ul className="list-decimal list-inside space-y-4">
        <li>
          <strong>Reviewer Comments</strong>: Authors are advised to address all
          reviewer comments thoroughly, as these are intended to improve the paper
          for its final publication.
        </li>
        <li>
          <strong>Corresponding Author</strong>: Clearly indicate the corresponding
          author by marking their email with an asterisk (*).
        </li>
        <li>
          <strong>Author Information</strong>: Under the paper title, provide only
          the authors’ names, affiliation (college/organization name), and email
          addresses. Designations or titles should not be included. If necessary,
          acknowledgments can be added at the end of the paper, before the
          references. Be sure to mention the full name and city of your institution.
        </li>
        <li>
          <strong>No Photos or Biographies</strong>: Do not include any photographs
          or biographies of authors at the end of the paper.
        </li>
        <li>
          <strong>Citations and Grammar</strong>: Cite all figures and tables
          within the text body and carefully check grammar, sentence structure, and
          spelling. Authors are encouraged to seek expert language support if
          needed.
        </li>
        <li>
          <strong>Originality and Permissions</strong>: The manuscript must be the
          authors’ own work, without unpermitted use of others' work. Proper
          citation is mandatory for any text, figures, or tables sourced from
          published material. Direct quotations must be in quotation marks. Reuse
          of any part of a published figure or table requires explicit copyright
          permission from the publisher, with the original source clearly cited.
        </li>
        <li>
          <strong>Reference Formatting</strong>: Ensure that all cited references
          are complete, including details like publication year, volume number,
          issue number, pages, and conference/journal names as applicable. All
          references listed at the end must be cited in the text body.
        </li>
        <li>
          <strong>Plagiarism Check</strong>: Springer will perform a quality check
          on each final paper before production. If plagiarism is detected that
          does not comply with Springer’s policies, the paper may be rejected, even
          if registered. Neither the editorial board nor the organizing committee
          bears responsibility in such cases, so authors are advised to prepare
          their papers carefully. Springer’s plagiarism policy is available on
          SpringerLink.
        </li>
        <li>
          <strong>Formatting Template</strong>: The Springer CRC formatting template
          is available on the conference website.
        </li>
        <li>
          <strong>Submission Version</strong>: The final CRC version submitted will
          be used for conference scheduling, souvenir preparation, and inclusion in
          the proceedings sent to Springer. Authors should not upload this version
          to Microsoft CMT.
        </li>
      </ul>

      <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
        <h2 className="text-lg font-semibold text-yellow-700">Important Declaration</h2>
        <p className="mt-2 text-gray-700">
          If any non-benchmark images/data are used without a citable source,
          authors must include the following declaration before the Reference
          section:
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-600 mt-4">
          “We have obtained permission from competent authorities to use the
          images/data presented in this paper. In the event of any dispute, we
          accept full responsibility.”
        </blockquote>
      </div>
    </div>
  );
};

export default AuthorInfo;
