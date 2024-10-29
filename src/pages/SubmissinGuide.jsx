import React from "react";

const SubmissionGuide = () => {
  return (
    <div className="bg-gray-100 p-8 text-left mt-4 rounded-lg shadow-md">
      <h1 className="text-2xl text-center font-semibold mb-6 text-third">
        SUBMISSION GUIDELINES
      </h1>
      <h3 className="text-2xl font-semibold mb-4">Disclaimer from Author</h3>
        <p className="mb-4"><em>
          In line with our dedication to promoting innovation and upholding the highest standards of academic integrity, we request adherence to the following guidelines regarding the use of AI-generated content in paper submissions:
          </em>
        </p>
        
        <ul className="list-decimal text-justify list-inside space-y-4 mb-4">
          <li>
            <strong>Originality:</strong> Authors are responsible for ensuring that all AI-generated content in their submissions is original and respects the intellectual property rights of others. Any use of AI tools or datasets must be properly attributed and cited. Additionally, total plagiarism, excluding references, must be below 10%. Authors must avoid any kind of plagiarism or self-plagiarism.
          </li>
          <li>
            <strong>Accuracy and Validity:</strong> AI-generated content must be carefully assessed for accuracy and reliability. Authors bear the responsibility for ensuring the correctness of any AI-generated data, analysis, or conclusions included in their papers.
          </li>
          <li>
            <strong>Transparency:</strong> The application of AI tools and techniques in developing the submission should be transparently disclosed. This includes specifying the AI methods, models, and datasets used, along with any known limitations or biases they may carry.
          </li>
          <li>
            <strong>Ethical Considerations:</strong> Authors are expected to follow ethical guidelines in their use of AI. This includes refraining from using AI to fabricate data, create misleading information, or replicate existing work without proper attribution.
          </li>
          <li>
            <strong>Review Process:</strong> The conference organizers reserve the right to closely examine AI-generated content during the review process. Submissions containing unverified or improperly attributed AI-generated material may face rejection. All submitted papers to the conference will undergo a single-blind review process.
          </li>
          <li>
            <strong>Responsibility:</strong> Authors bear full responsibility for the content of their submissions, including any AI-generated elements. The conference organizers and reviewers hold no liability for any issues stemming from the use of AI in submitted papers.
          </li>
          <li>
            <strong>Length of Papers:</strong> The most common types of papers accepted for publication are full papers (12–15+ pages) and short papers (&lt;12 pages), where a page constitutes 300-400 words. Only papers of significant scientific content will be accepted. Very short papers (&lt;4 pages) are not allowed.
          </li>
        </ul>
        
        <p className="mb-4">
          By submitting a paper to this conference, authors acknowledge and agree to comply with these guidelines. We appreciate your cooperation and look forward to your contributions.
        </p>
      

    </div>
  );
};

export default SubmissionGuide;
