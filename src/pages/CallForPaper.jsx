import React from "react";
import { Helmet } from "react-helmet-async";

const CallForPaper = () => {
  return (
    <div className="bg-gray-100 text-left p-6 ">
      <Helmet>
        <title>Call for Papers - ICRAECCT'2025 Conference</title>
        <meta
          name="description"
          content="ICRAECCT 2025 invites global experts to submit papers on interdisciplinary advancements in computing and communication technologies including AI, IoT, 5G, and machine learning."
        />
        <meta
          name="keywords"
          content="ICRAECCT 2025, Call for Papers, AI, IoT, 5G, machine learning, computing technologies, conference"
        />
      </Helmet>
      <h1 className="text-4xl font-bold text-center text-third mb-8">
        CALL FOR PAPERS
      </h1>
      <div className="space-y-4">
        <div className="text-center">
        <a
  href="https://cmt3.research.microsoft.com/ICRAECCT2025/Submission/Index"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-third text-white font-semibold text-sm rounded-lg shadow hover:bg-third hover:scale-105 focus:outline-none focus:ring-2 focus:ring-third focus:ring-offset-2 transition-transform"
>
  Submit Paper
</a>

        </div>
      
        <div className="mt-4 md:p-2 p-8 text-md text-gray-700 text-justify">
          International Conference on Recent Advances in Emerging Computing and
          Communication Technologies (ICRAECCT-2025) brings together global
          experts to discuss advancements in fields like AI, IoT, 5G and machine
          learning. This conference emphasizes the role of emerging technologies
          in reshaping industries, enhancing operational efficiency, and
          tackling real-world challenges. Participants, including researchers,
          practitioners, and industry professionals, will explore breakthroughs
          in data security, network reliability, and computational
          scalability—essential aspects for next-generation solutions in sectors
          such as healthcare, finance, and urban infrastructure. In addition to
          technical sessions and workshops, the conference encourages
          interdisciplinary collaborations, aiming to develop technology that is
          both impactful and ethically sound. Attendees will gain insights into
          the social implications of technological advancements, fostering
          discussions that look beyond theoretical achievements to prioritize
          accessible, real-world applications. This conference is designed to
          facilitate networking, innovation, and actionable knowledge-sharing,
          setting the foundation for future advancements in computing and
          communication.
          <p>
            Organizers encourage to submit papers on inter-disciplinary fields
            such as Role of Artificial Intelligence, Machine Learning, Emerging
            computing and communication technologies in different areas
            involving education, healthcare, management, business, agriculture
            and so on.
          </p>
          <h3 className="mt-4 text-xl font-semibold">
            Submissions are invited on following Tracks but are not limited to:
          </h3>
          {/* Track list */}
          <div class="mt-6">
            {/* tarck 1 */}
            <div>
              <h4 class="text-lg font-semibold">
                TRACK 1: ARTIFICIAL INTELLIGENCE, MACHINE LEARNING, AND DEEP
                LEARNING
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>Supervised and Unsupervised Learning</li>
                <li>Neural Networks and Architectures</li>
                <li>Transfer Learning and Domain Adaptation</li>
                <li> Explainable AI and Interpretability</li>
                <li> Deep Learning</li>
                <li> Reinforcement Learning</li>
                <li> Applications of Deep Learning in Industry</li>
                <li> Emerging Trends in Machine Learning</li>
                <li className="mb-4">
                  {" "}
                  Human-Computer Interaction (HCI) And Augmented/Virtual Reality
                  (AR/VR)
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold">
                TRACK 2: DATA SCIENCE AND BIG DATA ANALYTICS
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li> Data Grids, Data Warehousing, OLAP</li>
                <li> Temporal, Spatial, and Multimedia databases</li>
                <li>
                  {" "}
                  Mathematical, probabilistic and statistical models and
                  theories
                </li>
                <li> Architecture, management and process for data science</li>
                <li> Big data frameworks, Big Data Processing and Analytics</li>
                <li> Big data visualization, modeling and analytics</li>
                <li> Web/online/social/network mining and learning</li>
                <li>
                  {" "}
                  Data Integration, Interoperability and Metadata for
                  Cross-media data analytics
                </li>
                <li> Ubiquitous Data Management and Mobile Databases</li>
                <li>
                  {" "}
                  Query processing, query optimization, and data structures
                </li>
                <li> Semi-structured data and XML databases</li>
                <li> Distributed, parallel and Peer to Peer databases</li>
                <li> Web Data Management and Deep Web</li>
                <li className="mb-4">
                  {" "}
                  Scientific and Biological Databases and Bioinformatics
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">
                TRACK 3: SIGNAL AND IMAGE PROCESSING
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li> Image Acquisition Techniques</li>
                <li>Biomedical Signal and Image Processing</li>
                <li>Multimedia Signal Processing</li>
                <li>Remote Sensing and Satellite Image Processing</li>
                <li>Emerging Trends in Signal and Image Processing</li>
                <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
                <li>Real-Time Signal and Image Processing</li>
                <li>Image Classification and Machine Learning</li>
                <li>3D Image Processing</li>
                <li>Image Enhancement Techniques</li>
                <li> Restoration Techniques</li>
                <li className="mb-4">Image Fusion Models</li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">
                TRACK 4: NATURAL LANGUAGE PROCESSING
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>Sentiment Analysis</li>
                <li>Visual Question Answering</li>
                <li>Text Preprocessing Techniques</li>
                <li>Word Embeddings and Representation</li>
                <li>Contextualized Word Representations</li>
                <li>Sentiment Analysis in Social Media</li>
                <li>Chatbots and Conversational AI</li>
                <li>Challenges in Multilingual NLP</li>
                <li>Text Summarization Model</li>
                <li>Automatic Question Answer Generation Model</li>
                <li>Emerging Trends in NLP</li>
                <li>Dialogue Management and Response Generation</li>
                <li className="mb-4">Emotion Recognition in Conversation</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold">
                TRACK 5: HARDWARE ARCHITECTURE AND EMERGING TECHNOLOGIES IN
                COMMUNICATION SYSTEMS
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>5G/6G Networks and Wireless Technologies</li>
                <li>Antenna Design</li>
                <li>
                  Network Function Virtualization (NFV) snd Software-Defined
                  Networking (SDN)
                </li>
                <li>Quantum Computing and Quantum Communication</li>
                <li>Edge and Fog Computing</li>
                <li>
                  High-Performance Computing (HPC) and Parallel Processing
                </li>
                <li>Federated Learning</li>
                <li>Cloud Computing</li>
                <li className="mb-4">
                  Process Monitoring, Reliability & Fault tolerance, Embedded
                  Software and Hardware Architecture Techniques.
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">
                TRACK6: SOFTWARE ENGINEERING FOR EMERGING TECHNOLOGIES
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>Software Engineering</li>
                <li>Software Reliablility</li>
                <li>Cloud-Native Software Engineering</li>
                <li>Edge and Fog Computing in IoT</li>
                <li>Introduction to Quantum Software Development</li>
                <li>AI-Driven Software Engineering Tools</li>
                <li className="mb-4">Green Software Engineering</li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">
                TRACK7: INTERNET OF THINGS (IOT) AND SMART SYSTEMS
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>Smart City Opportunities using Green Technology </li>
                <li>User Centric Smart Cities Services </li>
                <li>Industrial Internet of Things </li>
                <li>
                  Semantic Interoperability in the IoT, WoT and Open-Source
                  Solutions{" "}
                </li>
                <li>IoT Enabling Technologies and its Applications </li>
                <li>
                  IoT Multimedia, Societal Impacts and Sustainable Development{" "}
                </li>
                <li>IoT Experimental Results and Deployment Scenarios </li>
                <li>Social Implications for IoT </li>
                <li>Blockchain and applications </li>
                <li>Future of IoT and Big Data </li>
                <li>Security and Privacy concerns in IoT </li>
                <li>Cloud Computing and Virtualization </li>
                <li className="mb-4">
                  Blockchain and Distributed Ledger Technologies{" "}
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">
                TRACK8: CYBERSECURITY AND PRIVACY
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>Cyber-physical systems </li>
                <li>Applied Cryptography </li>
                <li>Security Technology and Information Assurance </li>
                <li>Trusted computing and management </li>
                <li>Intrusion detection and prevention </li>
                <li>Key distribution and management </li>
                <li>Large scale attacks and defense </li>
                <li>Security and privacy in wireless networks </li>
                <li>Network security policy, theory and tools </li>
                <li>Secure Mobile Agents and Mobile Code </li>
                <li>Trusted computing and management </li>
                <li>Network resiliency and network security </li>
                <li className="mb-4">
                  Database, applications and web security{" "}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold">
                TRACK 9: INTELLIGENT SYSTEMS, ROBOTICS AND AUTOMATION
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>Multidimensional artificial intelligence </li>
                <li>Machine vision and information exchange </li>
                <li>Robotics Engineering </li>
                <li>Applied ambient intelligence </li>
                <li>Soft computing and applications </li>
                <li>Cognitive computing and theory </li>
                <li>Deep learning perspectives </li>
                <li>Crowd sourcing and collective intelligence </li>
                <li>Pattern recognition and Language processing </li>
                <li className="mb-4">Optimization Techniques </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold">
                TRACK 10: NETWORKS AND DATA COMMUNICATION
              </h4>
              <ul class="list-disc list-inside mt-2">
                <li>Wireless access and routing protocols </li>
                <li>Mobile social and ambient networks </li>
                <li>Delay tolerant networks </li>
                <li>Mobile and wireless broadband access networks </li>
                <li>
                  Advanced and multidimensional networks (including WSNs,
                  MANETs, VANETs, P2P){" "}
                </li>
                <li>Optical Networking and Applications </li>
                <li>Network Applications and Management Processes </li>
                <li>Datacenter networks and Cloud Computing </li>
                <li>Future Internet Technologies </li>
                <li>Telematics and its future </li>
                <li>Mobility Management in Next Generation Networks </li>
                <li className="mb-4">Optical networking and applications </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold">
                TRACK 11: Emerging Computing and Communication
                Technologies: MISCELLANEOUS
              </h4>
              <ul class="list-disc list-inside mt-2">
                <p className="mb-8"> </p>
              </ul>
            </div>

            <p className="text-left mb-8">
              The papers submitted to the conference will be peer-reviewed and
              published as SCOPUS indexed proceedings.**{" "}
            </p>
            <p className="mb-8">
              All papers will undergo a double-blind-peer-review process, and
              all accepted papers will be published in the SCOPUS-indexed
              conference proceedings. The conference organizers encourage the
              submission of academic and research papers that address
              multidisciplinary and interdisciplinary themes, encompassing
              Management, Science, Engineering, Agriculture, Healthcare, and
              Social Studies, through one of the specified sub-themes.
              Submissions on other relevant topics are also welcome for
              consideration.{" "}
            </p>
            <p className="text-xs"> **subject to approval</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPaper;
