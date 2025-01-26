import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Software Development",
    "Cloud Computing",
    "Artificial Intelligence",
    "Networking",
    "Management",
    "Marketing",
    "Cybersecurity",
    "Product Management",  
    "Sales Engineering", 
    "Technical Writing & Documentation", 
    "IoT Development",
    "Quality Assurance",
    "Digital Marketing",
    "Designing",
]

export const JobLocations = [
    "Amsterdam",
    "Atlanta",
    "Auckland",
    "Austin",
    "Bangkok",
    "Bangalore",
    "Barcelona",
    "Beijing",
    "Berlin",
    "Boston",
    "Brussels",
    "Budapest",
    "California",
    "Cambridge",
    "Cape Town",
    "Chennai",
    "Chicago",
    "Dallas",
    "Delhi",
    "Denver",
    "Detroit",
    "Dubai",
    "Dublin",
    "Edinburgh",
    "Frankfurt",
    "Geneva",
    "Glasgow",
    "Gurgaon",
    "Hamburg",
    "Helsinki",
    "Ho Chi Minh City",
    "Hong Kong",
    "Houston",
    "Hyderabad",
    "Jakarta",
    "Johannesburg",
    "Kolkata",
    "Kuala Lumpur",
    "Lisbon",
    "London",
    "Los Angeles",
    "Luxembourg",
    "Lyon",
    "Madrid",
    "Manchester",
    "Melbourne",
    "Mexico City",
    "Miami",
    "Milan",
    "Montreal",
    "Moscow",
    "Mumbai",
    "Munich",
    "Nairobi",
    "New Delhi",
    "New York",
    "Noida",
    "Osaka",
    "Oslo",
    "Paris",
    "Philadelphia",
    "Pakistan",
    "Phoenix",
    "Portland",
    "Prague",
    "Pune",
    "Raleigh-Durham",
    "Rio de Janeiro",
    "Riyadh",
    "Rome",
    "San Diego",
    "San Francisco",
    "San Jose",
    "Santiago",
    "São Paulo",
    "Seattle",
    "Seoul",
    "Shanghai",
    "Singapore",
    "Stockholm",
    "Stuttgart",
    "Sydney",
    "Taipei",
    "Tel Aviv",
    "Texas",
    "Tokyo",
    "Toronto",
    "Vancouver",
    "Vienna",
    "Warsaw",
    "Washington",
    "Waterloo",
    "Zurich"
];

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Full Stack Developer", date: 1729102298497, location: "Bangalore", applicants: 20 },
    { _id: 2, title: "Data Scientist", date: 1729102298497, location: "San Francisco", applicants: 15 },
    { _id: 3, title: "Marketing Manager", date: 1729102298497, location: "London", applicants: 2 },
    { _id: 4, title: "UI/UX Designer", date: 1729102298497, location: "Dubai", applicants: 25 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Amazon',
        title: 'Full Stack Developer',
        location: 'Bangalore',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Meta',
        title: 'Data Scientist',
        location: 'San Francisco',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: company_icon,
    },
    {
        company: 'Google',
        title: 'Marketing Manager',
        location: 'London',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
    {
        company: 'Qualcomm',
        title: 'UI/UX Designer',
        location: 'Dubai',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Microsoft',
        title: 'Full Stack Developer',
        location: 'Hyderabad',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Richard Sanford", jobTitle: "Full Stack Developer", location: "Bangalore", imgSrc: profile_img },
    { _id: 2, name: "Enrique Murphy", jobTitle: "Data Scientist", location: "San Francisco", imgSrc: profile_img },
    { _id: 3, name: "Alison Powell", jobTitle: "Marketing Manager", location: "London", imgSrc: profile_img },
    { _id: 4, name: "Richard Sanford", jobTitle: "UI/UX Designer", location: "Dubai", imgSrc: profile_img },
    { _id: 5, name: "Enrique Murphy", jobTitle: "Full Stack Developer", location: "Hyderabad", imgSrc: profile_img },
    { _id: 6, name: "Alison Powell", jobTitle: "Data Scientist", location: "New Delhi", imgSrc: profile_img },
    { _id: 7, name: "Richard Sanford", jobTitle: "Marketing Manager", location: "Chennai", imgSrc: profile_img },
];

export const jobsData = [
    {
        _id: '1',
        title: "Full Stack Developer",
        location: "California",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a highly skilled Full Stack Developer to join our dynamic and innovative team. The ideal candidate will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development. You will have the opportunity to work with the latest technologies and contribute to exciting projects that impact our users directly.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build, test, and deploy highly responsive web applications.</li>
            <li>Design user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li>Develop and maintain APIs and databases to support application functionality.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Identify and resolve bottlenecks and bugs to optimize application performance.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular).</li>
            <li>Experience with server-side languages (e.g., Node.js, Python).</li>
            <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB).</li>
            <li>Strong understanding of web security and performance optimization.</li>
            <li>Ability to work in an Agile environment.</li>
        </ol>`,
        salary: 82000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '2',
        title: "Data Scientist",
        location: "New York",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our analytics team to help drive business decisions using data. As a Data Scientist, you will leverage your analytical skills to uncover patterns and insights that will influence our strategic direction. You will work closely with stakeholders to understand their needs and deliver impactful analyses that support our growth objectives. Your role is critical in turning data into actionable insights.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to uncover trends and patterns that inform business strategies.</li>
            <li>Develop predictive models to forecast outcomes and improve decision-making.</li>
            <li>Visualize data findings through reports and dashboards for stakeholders.</li>
            <li>Collaborate with cross-functional teams to define data-driven goals.</li>
            <li>Continuously refine data collection and analysis processes to enhance accuracy.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in Python or R for statistical analysis and data manipulation.</li>
            <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Strong knowledge of SQL and database management.</li>
            <li>Familiarity with machine learning techniques and algorithms.</li>
            <li>Excellent problem-solving and critical-thinking skills.</li>
        </ol>`,
        salary: 72000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '3',
        title: "UI/UX Designer",
        location: "Bangalore",
        level: "Beginner Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create intuitive digital experiences as a UI/UX Designer. In this role, you will collaborate with product teams to design engaging user interfaces and ensure a seamless user journey. Your creativity and attention to detail will be crucial in developing designs that not only look good but also enhance functionality and user satisfaction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct user research and usability testing to gather insights on user needs.</li>
            <li>Create wireframes, prototypes, and high-fidelity designs that communicate user flows.</li>
            <li>Collaborate with development teams to implement designs effectively.</li>
            <li>Stay updated with industry trends and best practices in UI/UX design.</li>
            <li>Gather and analyze user feedback to iterate and improve designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools like Figma, Sketch, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Basic knowledge of HTML/CSS for better collaboration with developers.</li>
            <li>Excellent communication and teamwork skills.</li>
            <li>Creative problem-solving abilities.</li>
        </ol>`,
        salary: 61000,
        date: 1729681667114,
        category: "Designing",
    },
    {
        _id: '4',
        title: "DevOps Engineer",
        location: "Washington",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Enhance our deployment pipeline as a DevOps Engineer. This role will involve automating deployment processes, managing cloud infrastructure, and implementing best practices for security and performance. You will play a vital role in bridging the gap between development and operations, ensuring efficient workflows and high-quality releases.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Automate deployment processes using CI/CD tools to streamline development workflows.</li>
            <li>Manage cloud infrastructure, ensuring optimal performance and scalability.</li>
            <li>Implement security best practices to safeguard our systems.</li>
            <li>Monitor application performance and troubleshoot issues proactively.</li>
            <li>Collaborate with developers to improve system reliability and efficiency.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with CI/CD tools (e.g., Jenkins, GitLab CI).</li>
            <li>Strong knowledge of cloud platforms (e.g., AWS, Azure).</li>
            <li>Proficiency in scripting languages (e.g., Bash, Python).</li>
            <li>Familiarity with containerization technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent troubleshooting and analytical skills.</li>
        </ol>`,
        salary: 53000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '5',
        title: "Software Engineer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Software Engineer to build high-quality applications that deliver exceptional user experiences. You will be responsible for designing, developing, and maintaining software solutions that meet business needs. Collaborating closely with other engineers, you will contribute to code reviews and ensure best practices are followed throughout the development process.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and maintain software applications that fulfill user requirements.</li>
            <li>Collaborate with cross-functional teams to design scalable and efficient solutions.</li>
            <li>Participate in code reviews to ensure code quality and maintainability.</li>
            <li>Conduct testing and debugging to improve application functionality.</li>
            <li>Document development processes and application designs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficient in Java or C# with a solid understanding of object-oriented programming.</li>
            <li>Experience with Agile methodologies and software development life cycle.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Excellent communication and teamwork abilities.</li>
        </ol>`,
        salary: 91000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '6',
        title: "Network Engineer",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a Network Engineer to manage our infrastructure and ensure robust connectivity across all systems. Your expertise will help us design and implement network solutions that are secure and efficient. You will be pivotal in monitoring network performance and ensuring compliance with security standards.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement network solutions that meet organizational needs.</li>
            <li>Monitor network performance and troubleshoot issues to ensure uptime.</li>
            <li>Ensure security compliance by implementing best practices.</li>
            <li>Document network configurations and maintain updated records.</li>
            <li>Collaborate with IT teams to enhance network capabilities.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in network protocols and routing (e.g., TCP/IP, BGP, OSPF).</li>
            <li>Experience with firewalls, VPNs, and security technologies.</li>
            <li>Strong troubleshooting skills and attention to detail.</li>
            <li>Excellent communication and teamwork abilities.</li>
            <li>Relevant certifications (e.g., CCNA, CCNP) are a plus.</li>
        </ol>`,
        salary: 77000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '7',
        title: "Project Manager",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead projects as a Project Manager ensuring timely delivery and alignment with organizational goals. You will oversee project planning, execution, and monitoring, collaborating with various teams to ensure that all aspects of each project are delivered successfully. Your strong leadership skills will be key to motivating team members and fostering a positive work environment.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define project scope, objectives, and deliverables in collaboration with stakeholders.</li>
            <li>Develop detailed project plans and schedules to guide execution.</li>
            <li>Monitor project progress and adjust plans as necessary to meet deadlines.</li>
            <li>Facilitate communication between teams and manage stakeholder expectations.</li>
            <li>Conduct project retrospectives to identify lessons learned and areas for improvement.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience as a Project Manager in a technology-focused environment.</li>
            <li>Familiarity with project management software (e.g., JIRA, Trello).</li>
            <li>Strong leadership and organizational skills.</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Certification in project management (e.g., PMP, Scrum Master) is preferred.</li>
        </ol>`,
        salary: 60000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '8',
        title: "Mobile App Developer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Mobile App Developer to create engaging mobile applications for iOS and Android platforms. You will be responsible for the full app development lifecycle, from concept and design to deployment and maintenance. Your creativity and technical skills will help us deliver high-quality applications that enhance user experience.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and build advanced mobile applications for iOS and Android.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</li>
            <li>Ensure performance, quality, and responsiveness of applications.</li>
            <li>Conduct code reviews and maintain code quality standards.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in Swift for iOS or Kotlin for Android development.</li>
            <li>Experience with RESTful APIs and third-party libraries.</li>
            <li>Strong understanding of mobile app design principles and guidelines.</li>
            <li>Excellent problem-solving skills and attention to detail.</li>
            <li>Familiarity with version control systems (e.g., Git).</li>
        </ol>`,
        salary: 112000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '9',
        title: "Cloud Architect",
        location: "Hyderabad",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design cloud solutions as a Cloud Architect, helping to transform our infrastructure and services. You will work closely with various teams to understand their requirements and translate them into secure, scalable, and efficient cloud-based solutions. Your expertise will guide our cloud strategy and ensure that we leverage cloud technologies to their fullest potential.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions that align with business objectives.</li>
            <li>Provide guidance on best practices for cloud architecture and deployment.</li>
            <li>Collaborate with DevOps teams to enhance cloud infrastructure and security.</li>
            <li>Monitor cloud systems for performance and cost-effectiveness.</li>
            <li>Stay updated on emerging cloud technologies and industry trends.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of cloud service providers (e.g., AWS, Azure, GCP).</li>
            <li>Experience with cloud architecture patterns and best practices.</li>
            <li>Familiarity with containerization and orchestration technologies (e.g., Docker, Kubernetes).</li>
            <li>Excellent analytical and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified Solutions Architect) are preferred.</li>
        </ol>`,
        salary: 96000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '10',
        title: "Technical Writer",
        location: "Mumbai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as a Technical Writer to create user-friendly documentation that supports our products and services. You will work closely with engineers and product managers to gather information and produce clear, concise, and accurate documentation. Your role is essential in ensuring that our users can easily understand and utilize our offerings.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Create and maintain user manuals, API documentation, and other technical materials.</li>
            <li>Collaborate with development teams to gather and clarify technical information.</li>
            <li>Conduct reviews of existing documentation to ensure accuracy and relevance.</li>
            <li>Ensure that documentation is up-to-date and consistent with product updates.</li>
            <li>Utilize feedback from users to enhance the clarity and usability of documentation.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in technical writing and documentation tools (e.g., MadCap Flare, Adobe FrameMaker).</li>
            <li>Strong understanding of technology and the ability to convey complex information clearly.</li>
            <li>Excellent research and analytical skills.</li>
            <li>Strong communication and collaboration abilities.</li>
            <li>Attention to detail and a commitment to quality.</li>
        </ol>`,
        salary: 72000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '11',
        title: "Cybersecurity Analyst",
        location: "Mumbai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Protect our systems as a Cybersecurity Analyst. In this role, you will monitor security systems, analyze potential threats, and implement protective measures to safeguard our information and assets. Your expertise will help us stay ahead of evolving security challenges and maintain a secure environment for our users and stakeholders.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor and analyze security events to identify potential threats.</li>
            <li>Conduct risk assessments and vulnerability analyses to enhance security posture.</li>
            <li>Implement security measures and controls to mitigate risks.</li>
            <li>Collaborate with IT teams to respond to security incidents.</li>
            <li>Stay informed about the latest cybersecurity trends and threats.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of security protocols, standards, and tools.</li>
            <li>Experience with SIEM tools and incident response processes.</li>
            <li>Understanding of network protocols and security technologies.</li>
            <li>Excellent problem-solving and analytical skills.</li>
            <li>Relevant certifications (e.g., CISSP, CEH) are a plus.</li>
        </ol>`,
        salary: 62000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '12',
        title: "Business Analyst",
        location: "Mumbai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join us as a Business Analyst to optimize our processes and improve overall efficiency. You will work closely with stakeholders to identify business needs and gather requirements for new projects. Your analytical skills will help drive decision-making and ensure that solutions align with business objectives.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Gather and analyze business requirements from stakeholders.</li>
            <li>Develop detailed documentation of business processes and workflows.</li>
            <li>Collaborate with IT and development teams to translate requirements into solutions.</li>
            <li>Conduct testing and validation of new systems and processes.</li>
            <li>Provide ongoing support and training for users.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong analytical skills and attention to detail.</li>
            <li>Proficiency in business analysis tools (e.g., Visio, JIRA).</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Experience with data analysis and reporting.</li>
            <li>Familiarity with Agile methodologies is a plus.</li>
        </ol>`,
        salary: 68000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '13',
        title: "Marketing Specialist",
        location: "Chennai",
        level: "Beginner Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Support our marketing efforts as a Marketing Specialist. In this role, you will assist with campaign execution, content creation, and social media management. Your creativity and enthusiasm will help promote our brand and engage our audience across various channels.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Assist in the development and execution of marketing campaigns.</li>
            <li>Create engaging content for social media platforms and newsletters.</li>
            <li>Conduct market research to identify trends and opportunities.</li>
            <li>Monitor and analyze campaign performance metrics.</li>
            <li>Collaborate with team members to brainstorm new marketing ideas.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Basic understanding of digital marketing principles.</li>
            <li>Strong written and verbal communication skills.</li>
            <li>Proficiency in social media platforms and marketing tools.</li>
            <li>Creative thinking and problem-solving abilities.</li>
            <li>Willingness to learn and adapt in a fast-paced environment.</li>
        </ol>`,
        salary: 77000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '14',
        title: "Data Scientist",
        location: "California",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our innovative team as a Data Scientist, where you will analyze complex data sets to drive strategic decision-making. You will leverage your statistical and programming skills to uncover insights and develop predictive models, contributing to the overall success of our organization.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze large datasets to identify trends, patterns, and anomalies.</li>
            <li>Develop and implement predictive models and algorithms.</li>
            <li>Collaborate with cross-functional teams to understand business needs and provide data-driven solutions.</li>
            <li>Visualize data findings and present insights to stakeholders.</li>
            <li>Stay current with industry trends and best practices in data science.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in programming languages such as Python or R.</li>
            <li>Strong knowledge of statistical methods and machine learning techniques.</li>
            <li>Experience with data visualization tools (e.g., Tableau, Power BI).</li>
            <li>Excellent problem-solving skills and attention to detail.</li>
            <li>Ability to communicate complex concepts to non-technical audiences.</li>
        </ol>`,
        salary: 65000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '15',
        title: "UX/UI Designer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a talented UX/UI Designer to enhance our user experience across digital platforms. You will collaborate with product managers and developers to create intuitive and engaging interfaces that meet user needs and improve overall satisfaction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct user research and usability testing to inform design decisions.</li>
            <li>Create wireframes, prototypes, and high-fidelity mockups for web and mobile applications.</li>
            <li>Work closely with development teams to ensure designs are implemented accurately.</li>
            <li>Iterate on designs based on user feedback and analytics.</li>
            <li>Stay updated on design trends and best practices in UX/UI.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design tools such as Sketch, Figma, or Adobe XD.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>Experience with responsive and adaptive design techniques.</li>
            <li>Excellent communication skills and ability to work collaboratively.</li>
            <li>A portfolio showcasing relevant design projects is required.</li>
        </ol>`,
        salary: 64000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '16',
        title: "DevOps Engineer",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>As a DevOps Engineer, you will play a crucial role in enhancing our software development and deployment processes. You will work with development and operations teams to automate workflows, improve system reliability, and ensure seamless integration and delivery of applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement CI/CD pipelines to automate application deployment.</li>
            <li>Monitor system performance and troubleshoot issues proactively.</li>
            <li>Collaborate with development teams to improve software development lifecycle.</li>
            <li>Implement infrastructure as code using tools like Terraform or Ansible.</li>
            <li>Ensure security best practices are followed in the deployment process.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong experience with cloud platforms (AWS, Azure, or GCP).</li>
            <li>Proficiency in scripting languages such as Bash or Python.</li>
            <li>Familiarity with containerization tools like Docker and orchestration platforms like Kubernetes.</li>
            <li>Excellent troubleshooting and problem-solving skills.</li>
            <li>Relevant certifications (e.g., AWS Certified DevOps Engineer) are a plus.</li>
        </ol>`,
        salary: 74000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '17',
        title: "Sales Manager",
        location: "New York",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our team as a Sales Manager, where you will lead our sales efforts to drive growth and increase market share. You will develop sales strategies, manage client relationships, and mentor your sales team to achieve performance goals.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and implement strategic sales plans to achieve company objectives.</li>
            <li>Manage and lead a team of sales representatives to meet and exceed sales targets.</li>
            <li>Build and maintain strong relationships with key clients and stakeholders.</li>
            <li>Analyze sales data and market trends to identify opportunities for growth.</li>
            <li>Provide training and development opportunities for the sales team.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience in sales management and team leadership.</li>
            <li>Strong negotiation and communication skills.</li>
            <li>Ability to analyze data and make informed decisions.</li>
            <li>Experience with CRM software (e.g., Salesforce).</li>
            <li>A results-oriented mindset with a focus on meeting targets.</li>
        </ol>`,
        salary: 59000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '18',
        title: "Human Resources Specialist",
        location: "Washington",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>As a Human Resources Specialist, you will support various HR functions, including recruitment, employee relations, and compliance. You will play a vital role in fostering a positive workplace culture and ensuring that our HR practices align with organizational goals.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Assist with the recruitment process, including job postings and candidate screenings.</li>
            <li>Support employee onboarding and orientation programs.</li>
            <li>Manage employee records and ensure compliance with HR policies.</li>
            <li>Provide guidance to employees on HR-related inquiries.</li>
            <li>Help organize employee training and development initiatives.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong understanding of HR principles and practices.</li>
            <li>Excellent communication and interpersonal skills.</li>
            <li>Proficiency in HR software (e.g., HRIS, ATS).</li>
            <li>Ability to maintain confidentiality and handle sensitive information.</li>
            <li>Attention to detail and strong organizational skills.</li>
        </ol>`,
        salary: 89000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '19',
        title: "Content Marketing Manager",
        location: "Mumbai",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a Content Marketing Manager to lead our content strategy and execution. In this role, you will develop compelling content that engages our audience and drives brand awareness. You will collaborate with various teams to ensure consistent messaging across all platforms.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and implement a content marketing strategy aligned with business objectives.</li>
            <li>Create and oversee the production of high-quality content for blogs, social media, and other channels.</li>
            <li>Analyze content performance and optimize strategies based on data-driven insights.</li>
            <li>Collaborate with designers and other stakeholders to ensure content aligns with visual branding.</li>
            <li>Manage the content calendar and ensure timely delivery of content.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven experience in content marketing and strategy development.</li>
            <li>Strong writing and editing skills with a keen eye for detail.</li>
            <li>Familiarity with SEO best practices and content management systems.</li>
            <li>Excellent analytical skills and ability to interpret data.</li>
            <li>Strong leadership and project management skills.</li>
        </ol>`,
        salary: 99000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '20',
        title: "Graphic Designer",
        location: "Chennai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our creative team as a Graphic Designer, where you will be responsible for creating visually appealing graphics and layouts that enhance our brand identity. You will collaborate with marketing and product teams to develop creative solutions for various projects.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design graphics for digital and print media, including social media, websites, and marketing materials.</li>
            <li>Collaborate with cross-functional teams to understand project requirements and objectives.</li>
            <li>Stay updated on design trends and tools to continually enhance skills and creativity.</li>
            <li>Prepare and present design concepts to stakeholders for feedback and approval.</li>
            <li>Ensure all designs align with brand guidelines and project specifications.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
            <li>Strong understanding of design principles and typography.</li>
            <li>Ability to work on multiple projects simultaneously and meet deadlines.</li>
            <li>Excellent communication and collaboration skills.</li>
            <li>A portfolio showcasing relevant design work is required.</li>
        </ol>`,
        salary: 91000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '21',
        title: "Software Tester",
        location: "Chennai",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>As a Software Tester, you will play a critical role in ensuring the quality and reliability of our software applications. You will design test cases, execute tests, and collaborate with development teams to identify and resolve defects before product release.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and execute test plans and test cases based on software requirements.</li>
            <li>Identify, document, and track defects using bug tracking tools.</li>
            <li>Collaborate with developers to resolve issues and improve software quality.</li>
            <li>Conduct regression testing to ensure existing functionality remains intact.</li>
            <li>Participate in team meetings to provide insights on product quality and testing status.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with manual and automated testing techniques.</li>
            <li>Familiarity with testing tools (e.g., Selenium, JUnit).</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>Excellent attention to detail and ability to work under tight deadlines.</li>
            <li>Good communication skills to articulate testing outcomes and challenges.</li>
        </ol>`,
        salary: 123000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '22',
        title: "Network Security Engineer",
        location: "Bangalore",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are seeking a Network Security Engineer to protect our organization's IT infrastructure. You will design and implement security measures to safeguard systems from unauthorized access and ensure compliance with security policies.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop and implement security protocols for network systems.</li>
            <li>Monitor network traffic for suspicious activity and respond to incidents.</li>
            <li>Conduct vulnerability assessments and penetration testing.</li>
            <li>Collaborate with IT teams to resolve security issues and enhance network security.</li>
            <li>Stay updated on the latest security trends and technologies.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strong knowledge of networking protocols and security technologies.</li>
            <li>Experience with firewalls, VPNs, IDS/IPS, and security information systems.</li>
            <li>Relevant certifications (e.g., CISSP, CISM, CEH) are preferred.</li>
            <li>Excellent analytical and troubleshooting skills.</li>
            <li>Strong communication skills to work with technical and non-technical teams.</li>
        </ol>`,
        salary: 87000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '23',
        title: "Cloud Engineer",
        location: "Hyderabad",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing our cloud infrastructure. You will collaborate with development and operations teams to ensure the efficient deployment and scaling of applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement cloud solutions using AWS, Azure, or Google Cloud Platform.</li>
            <li>Monitor and optimize cloud resources for performance and cost efficiency.</li>
            <li>Work with DevOps teams to automate deployment processes.</li>
            <li>Ensure cloud security and compliance with industry standards.</li>
            <li>Provide technical support and troubleshooting for cloud-based applications.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with cloud platforms and services.</li>
            <li>Proficiency in scripting languages such as Python or Bash.</li>
            <li>Strong understanding of networking concepts and security.</li>
            <li>Experience with container orchestration tools like Kubernetes.</li>
            <li>Good problem-solving skills and attention to detail.</li>
        </ol>`,
        salary: 102000,
        date: 1729681667114,
        category: "Programming",
    }
];
