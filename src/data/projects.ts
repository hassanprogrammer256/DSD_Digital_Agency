
import type { Project } from "@/types";

import smart_academy_screenshot1 from "@/assets/images/projects/smart-academy/hp256_banner.png";
import smart_academy_screenshot2 from "@/assets/images/projects/smart-academy/smart_agents.png";

import scsc from "@/assets/images/projects/scsc/scsc-logo.jpg";
import quiz_hub from "@/assets/images/projects/quiz_hub/quiz_hub.png";
import minify_gadgets from "@/assets/images/projects/minify/mini_logo.png";
import bush_and_beyond from "@/assets/images/projects/bush_and_beyond/bush_and_beyond.jpg";
import batenga1 from "@/assets/images/projects/batenga/logo.png";
import title_plz from "@/assets/images/projects/title_plz/title_plz.png";
import kss from "@/assets/images/projects/e-voting/kss-logo.webp";



export const projects: Project[] = [
{
  slug: "smartagents-academy",
  title: "Smart Agents Academy",
  category: "web-development",
  summary: "An E-Learning System that provides I.T Knowledge to the community via various I.T Courses",
  description:
    "Smart Agents Academy is a comprehensive e-learning platform designed to bridge the digital skills gap by making Information Technology education accessible, affordable, and engaging for everyone. The platform offers a structured, self-paced learning experience with expertly crafted courses that cater to beginners, intermediate learners, and aspiring professionals alike. From foundational concepts to advanced frameworks, learners gain hands-on knowledge through interactive lessons, real-world projects, quizzes, and certifications. The curriculum spans a wide range of modern technologies including full-stack web development with Python, JavaScript, and TypeScript, database management, version control, cloud computing basics, and responsive UI/UX design principles. Each course is designed with practical application in mind, ensuring students not only understand theory but can confidently build and deploy real-world applications by the time they complete their learning journey.",
  
  functionality: [
    "User authentication and profile management with progress tracking",
    "Interactive video lessons with playback controls and captions",
    "Course enrollment and structured curriculum navigation",
    "Hands-on coding exercises with in-browser code editors",
    "Automated quizzes and assessments with instant feedback",
    "Certificate generation upon course completion",
    "Discussion forums for peer-to-peer learning and Q&A",
    "Admin dashboard for course creation and learner analytics",
    "Responsive and accessible design for all devices",
    "Bookmarking and note-taking features for personalized learning",
    "Progress dashboards with visual completion metrics",
    "Email notifications for course updates and reminders",
  ],
  
  techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
  
  screenshots: [smart_academy_screenshot1,smart_academy_screenshot2],
  
  liveUrl: "https://hassanprogrammer256.site/",
  
  githubUrl: "https://github.com/hassanprogrammer256/Yo_Pro_256_Cli",
  
  featured: true,
},
{
  slug: "batenga-community-foundation",
  title: "Batenga Community Foundation",
  category: "web-development",
  summary: "A Ugandan Charity Organization Empowering Widows and Orphans Through Sustainable Community Development",

  description:
    "Batenga Community Foundation is a grassroots non-governmental organization dedicated to empowering and uplifting vulnerable groups in Uganda. Founded in 2015, we began our work by identifying the critical challenges faced by widows and orphans in rural districts—particularly in the areas of housing insecurity, educational access, and economic marginalization. Rather than offering short-term relief, we focus on establishing foundations of safety and independence. This is reflected in our major initiatives—such as constructing sturdy, permanent housing for widows and providing educational sponsorships for orphaned children. The organization also runs community farming programs, skills training workshops, and health outreach campaigns to foster long-term resilience and self-sufficiency. Our digital presence serves as a central hub for storytelling, donor engagement, volunteer coordination, and transparent impact reporting. Through the website, we showcase completed projects, share beneficiary testimonials, and provide seamless avenues for individuals and organizations to contribute financially or in-kind to our mission. The platform reflects our core values of dignity, compassion, and community-led change, and is designed to inspire action while maintaining cultural authenticity and trust with our local and international supporters.",

  functionality: [
    "Interactive homepage with mission vision and impact statistics",
    "Project showcase with detailed case studies and photo galleries",
    "Success stories and beneficiary testimonials",
    "Donation portal with secure payment integration",
    "Volunteer registration and inquiry forms",
    "News and blog section for organizational updates",
    "Searchable, filterable property listings for housing projects",
    "Contact and inquiry forms per listing or project",
    "Fully responsive across all devices",
    "Social media integration and sharing capabilities",
    "Accessibility features for inclusive user experience",
  ],

  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "React Router",
    "Node.js",
    "Express",
    "MongoDB"
  ],

  screenshots: [batenga1],

  liveUrl: "https://batenga-community-foundation.vercel.app/",
  featured: true,
},
{
  slug: "bush-and-beyond-tours",
  title: "Bush and Beyond – Premium Safari & Travel Experience",
  category: "web-development",
  summary: "A premier tour and travel company website offering curated safari adventures, wildlife encounters, cultural experiences, and bespoke travel packages across East Africa.",

  description:
    "Bush and Beyond is a premium tour and travel company dedicated to crafting unforgettable African adventures that go beyond the ordinary. Specializing in East African safaris, the company offers meticulously designed travel experiences that immerse visitors in the raw beauty, rich wildlife, and vibrant cultures of Uganda, Kenya, Tanzania, and Rwanda. From luxury game drives in the Serengeti and gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale and cultural village tours, each itinerary is tailored to deliver authentic, once-in-a-lifetime experiences. The company's website serves as the digital gateway to these adventures, featuring an intuitive interface where travelers can explore destinations, browse curated packages, customize their dream itineraries, and book their journeys with ease. Visitors can view stunning photography and video galleries of wildlife and landscapes, read detailed destination guides, check availability, and access real-time travel information. The platform also includes a comprehensive travel resource center with visa requirements, health advisories, packing tips, and local insights to ensure every guest is well-prepared. For repeat travelers and corporate partners, the site offers personalized account dashboards, exclusive member discounts, and group booking capabilities. With a commitment to sustainable tourism and community empowerment, Bush and Beyond also showcases conservation initiatives and community partnerships, allowing travelers to make a positive impact with every journey. The website embodies the spirit of adventure with a modern, responsive design that works seamlessly across all devices, inspiring wanderlust and transforming travel dreams into reality.",

  functionality: [
    // Destination & Package Exploration
    "Interactive destination pages with rich multimedia content (images, videos, 360° views)",
    "Curated safari packages with detailed itineraries (days, activities, accommodations)",
    "Customizable travel itineraries with drag-and-drop trip builder",
    "Destination search and filtering by country, activity, duration, budget, and season",
    "Featured experiences: gorilla trekking, wildlife safaris, bird watching, cultural tours, hiking, and water activities",
    "Seasonal packages and special offers/holiday deals",
    "Group tour and private tour options",

    // Booking & Reservation System
    "Online booking engine with real-time availability checks",
    "Multi-step booking process with date selection, traveler details, and preferences",
    "Secure payment gateway integration (Credit Card, PayPal, Mobile Money)",
    "Booking confirmation with detailed itinerary and payment receipt",
    "Flexible cancellation and rescheduling policy",
    "Group booking and corporate travel request forms",
    "Hotel/accommodation integration with room selection and availability",

    // User Accounts & Personalization
    "User registration and login (email, Google, Facebook)",
    "Personalized traveler dashboard with upcoming trips and booking history",
    "Saved favorites and wishlist for dream destinations",
    "Travel preferences profile for personalized recommendations",
    "Loyalty program with points, discounts, and exclusive perks",

    // Content & Resource Center
    "Comprehensive destination guides with travel tips and local insights",
    "Travel blog with articles on wildlife, culture, conservation, and travel stories",
    "Photo and video galleries showcasing real guest experiences",
    "FAQ section for common traveler questions",
    "Travel resources: visa information, health advisories, packing lists, currency guides",
    "Sustainability and conservation initiatives page",
    "Testimonials and guest reviews with ratings",

    // Communication & Support
    "Live chat support with instant messaging (AI chatbot + human agent)",
    "Contact forms for inquiries, custom quotes, and feedback",
    "Email newsletter subscription for promotions and updates",
    "WhatsApp and phone integration for instant communication",
    "Emergency contact and 24/7 support line",
    "Automated confirmation and reminder emails for bookings",

    // Admin & Business Management
    "Comprehensive admin dashboard",
    "Package and itinerary management with drag-and-drop builder",
    "Booking management with status tracking (pending, confirmed, completed, cancelled)",
    "Payment management and invoice generation",
    "Customer relationship management (CRM) with guest history",
    "Inventory management for accommodation and vehicle allocation",
    "Tour guide assignment and scheduling",
    "Analytics and reporting (popular destinations, revenue, conversion rates)",
    "User feedback and review moderation",

    // Marketing & SEO
    "SEO-optimized pages with meta tags and structured data",
    "Social media integration (Instagram feed, Facebook, YouTube links)",
    "Google Maps integration with location markers for destinations",
    "Multi-language support (English, French, German, Spanish, Swahili)",
    "Multi-currency display and pricing",
    "Blog content management for storytelling and SEO",

    // Performance & Accessibility
    "Fully responsive design for all devices",
    "Fast loading with image optimization and lazy loading",
    "Accessibility features for inclusive experience",
    "Cookie consent and GDPR compliance",
    "SSL encryption for secure transactions",
  ],

  techStack: [
"Next.js (App Router)",
    "JavaScript",
    "Tailwind CSS",
     "Node.js",
    "Express",
    "PostgresQL",
    "Mobile Money APIs (MTN MoMo, Airtel Money)"
],

  screenshots: [bush_and_beyond],

  liveUrl: "https://bushandbeyondtours.vercel.app/",

  featured: true,
},
{
  slug: "kss-e-voting-app",
  title: "Kibuli S.S  E-Voting – Secure Digital Election Platform",
  category: "mobile-app-development",
  summary: "A secure, transparent, and accessible mobile and web-based e-voting platform for Kibuli Secondary School enabling students to cast their votes digitally, view real-time results, and participate in democratic school governance.",

  description:
    "The Kibuli S.S  E-Voting App is a groundbreaking digital election platform designed to modernize student governance at Kibuli Secondary School, one of Uganda's prestigious educational institutions. Traditional paper-based voting methods at the school were often plagued by logistical challenges, voter suppression, ballot tampering, and delayed results. This platform was conceptualized and developed as a secure, transparent, and efficient alternative that empowers every student to participate in the democratic process—whether they are on campus or studying remotely. The system leverages blockchain-inspired audit trails, biometric authentication, and end-to-end encryption to ensure that every vote is tamper-proof and every identity is verified. Students can access the voting platform through a dedicated mobile app or responsive web interface, allowing them to conveniently cast their votes for student leaders, class representatives, and house captains from any location. Real-time results are displayed on a public dashboard once voting concludes, ensuring complete transparency and eliminating manual counting errors. Beyond elections, the platform serves as a civic engagement tool, educating students about democratic processes, voter rights, and responsible leadership. Administrators and the electoral commission benefit from a comprehensive backend dashboard that manages candidate nominations, voter registration, election scheduling, and real-time monitoring of voter turnout. The platform also features robust security measures including multi-factor authentication, biometric fingerprint verification, and blockchain-based audit logs to maintain electoral integrity. By digitizing the entire electoral process, Kibuli S.S E-Voting App has dramatically reduced election costs, eliminated ballot paper waste, and increased student participation by over 60%. The platform stands as a model for how technology can enhance democratic participation in educational institutions across Africa and beyond.",

  functionality: [
    // Voter Management
    "Student registration and voter roll management",
    "Biometric authentication (fingerprint and facial recognition)",
    "Multi-factor authentication for secure access",
    "Voter eligibility verification (class, age, registration status)",
    "Student ID integration for identity validation",
    "Prevent duplicate voting with unique voter tokens",
    "Offline voter list synchronization",
    "Voter education and civic awareness modules"
  ],

  techStack: [

    "Flutter",
   
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "JWT Authentication"
  ],

  screenshots: [kss],

  liveUrl: "https://kss-e-vote-client.vercel.app/"

},
{
  slug: "senior-command-and-staff-college",
  title: "SCSC Staff & Student Portal – Academic Management System",
  category: "web-development",
  summary: "A comprehensive Staff and Student Portal designed for academic progress tracking, student management, course administration, and institutional communication at the Senior Command and Staff College.",

  description:
    "The Senior Command and Staff College (SCSC) Staff & Student Portal is a robust, enterprise-grade academic management system built to streamline the administrative and educational operations of one of Uganda's premier military training institutions. The platform serves as a centralized digital hub where faculty members, administrative staff, and students can efficiently manage academic activities, track progress, and facilitate seamless communication. For students, the portal provides real-time access to course materials, lecture schedules, assignment submissions, grades, transcripts, and academic calendars—empowering them to take ownership of their learning journey. Staff members benefit from powerful tools for course creation, grade management, attendance tracking, student performance analytics, and automated report generation. Administrative personnel can oversee the entire academic lifecycle including student enrollment, course registration, fee management, and examination scheduling. The system also features role-based access control ensuring that sensitive data is securely managed with appropriate permissions. Beyond academics, the portal includes a communication suite with announcements, messaging, and discussion forums to foster collaboration between students, instructors, and leadership. Built with scalability and reliability in mind, the portal is deployed with a fully automated CI/CD pipeline ensuring zero-downtime updates and rapid feature delivery. The SCSC Staff & Student Portal represents a significant digital transformation initiative, replacing manual paper-based processes with an efficient, transparent, and user-friendly platform that enhances the educational experience for all stakeholders.",

  functionality: [
    // Academic Management
    "Student enrollment and course registration system",
    "Course catalog with detailed syllabi, objectives, and prerequisites",
    "Lecture scheduling and timetable management",
    "Assignment creation, submission, and grading workflows",
    "Automated grade calculation and GPA computation",
    "Real-time academic progress tracking with visual dashboards",
    "Transcript generation and secure digital certificate issuance",
    "Examination scheduling and results publication",



  ],

  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite","Django",
    "PostgreSQL"],

  screenshots: [scsc],
liveUrl: "https://scsc-xi.vercel.app/",
featured: true,
},
{
  slug: "quiz-hub-app",
  title: "Quiz Hub – Interactive Assessment Platform for Educators & Students",
  category: "mobile-app-development",
  summary: "A comprehensive mobile and web-based quiz platform where instructors create, manage, and assess student performance through interactive quizzes, exams, and real-time analytics.",

  description:
    "Quiz Hub is a dynamic, cross-platform assessment solution designed to revolutionize how educators evaluate student learning outcomes. Built for both mobile and web environments, the platform empowers instructors to create engaging, interactive quizzes, tests, and examinations that go beyond traditional pen-and-paper assessments. Teachers can design customized question banks with multiple question types including multiple-choice, true/false, fill-in-the-blank, matching, essay, and interactive drag-and-drop formats. Each quiz can be tailored with time limits, randomized question ordering, and adaptive difficulty levels to accommodate diverse learning needs and prevent cheating. Students access quizzes through an intuitive mobile app or web interface, receiving instant feedback on their performance with detailed explanations for correct and incorrect answers. The platform's real-time analytics engine provides instructors with comprehensive insights including class performance trends, question difficulty analysis, individual student progress tracking, and automatic grade calculations. Quiz Hub also features advanced proctoring capabilities such as browser lockdown, randomized question pools, and time tracking to maintain academic integrity. For institutional use, the platform supports multi-class management, department-wide assessments, and integration with existing Learning Management Systems (LMS). Students benefit from personalized study recommendations based on their performance patterns, helping them focus on areas needing improvement. The platform also includes gamification elements like leaderboards, badges, and achievement milestones to boost engagement and motivation. With offline access for students in low-connectivity areas and seamless synchronization when back online, Quiz Hub ensures equitable access to quality assessment tools. Deployed with enterprise-grade infrastructure, the platform guarantees high availability, scalability, and data security, making it the ideal solution for schools, universities, corporate training programs, and certification bodies.",

  functionality: [
    "Intuitive quiz builder with drag-and-drop interface",
    "Multiple question types: Multiple Choice, True/False, Fill-in-the-Blank, Matching, Essay, Ordering, Drag-and-Drop",
    "Rich text editor for questions with image, video, and audio embedding",
    "Question bank management with tagging, categories, and search",
    "Randomized question selection and shuffling",
    "Time limits per quiz with countdown timer",
    "Scheduled quiz release dates and deadlines",
    "Draft and publish workflow for quiz content",

  ],

  techStack: [

    "React Native",
    "Next.js",
    "TypeScript",
    "NativeWind",
     "Node.js with Express",
    "NestJS",
    "JWT Authentication"
  ],

  screenshots: [quiz_hub],

  liveUrl: "https://kiraboibrahim.github.io/quiz-hub-web/",

},
{
  slug: "title-plz",
  title: "Title PLZ – Movie Title Finder App",
  category: "mobile-app-development",
  summary: "A cross-platform mobile app that identifies movie titles by analyzing uploaded video clips, cover images, or screenshots using AI-powered visual recognition.",

  description:
    "Title PLZ is an innovative, cross-platform mobile application built to solve a common frustration: you see a movie clip, a poster, or a nostalgic scene on social media, but you can't remember—or don't know—the film's title. Simply upload a short video clip, a cover image, a screenshot, or even a frame from a trailer, and let the app's intelligent recognition engine match it against an extensive film database. Leveraging computer vision and machine learning, Title PLZ extracts key visual features such as color palettes, composition, actor faces, text overlays, and scene structures to generate highly accurate title suggestions. The app also allows users to manually input descriptive keywords, actor names, or quotes for text-based searches when images aren't available. Designed with a sleek, intuitive interface and optimized for both iOS and Android from a single codebase, Title PLZ offers instant, reliable results that save time and fuel movie discovery. Whether you're a cinephile, a content creator, or just someone who wants to finally name that one film from childhood, Title PLZ turns confusion into clarity in seconds.",

  functionality: [
    "AI-powered visual recognition for movie title identification from images and video clips",
    "Upload functionality for photos, screenshots, poster images, and short video clips (MP4, MOV)",
    "Manual text search by movie title, actor name, director, or memorable quotes",
    "Instant matching results with movie poster thumbnails, release year, genre, and rating",
    "Detailed movie information page (synopsis, cast, director, runtime, IMDb score, streaming links)",
    "Movie recommendation engine based on search history and ratings",
    
  ],

  techStack: [
    "React Native",
    "TypeScript",
    "Expo",
    "Firebase (Auth, Firestore, Storage)"
  ],

  screenshots: [title_plz ],

  liveUrl: "https://titlepliz.kiraboibrahim.online/",

  featured: true,
},
{
  slug: "minify-gadgets",
  title: "Minify Gadgets – Premium Electronics E-Commerce Platform",
  category: "web-development",
  summary: "A full-featured E-Commerce platform specializing in smartphones, laptops, accessories, and cutting-edge electronic gadgets with seamless shopping experiences.",

  description:
    "Minify Gadgets is a comprehensive, high-performance E-Commerce web application designed to provide tech enthusiasts, professionals, and everyday consumers with a seamless shopping experience for all their electronic needs. From the latest flagship smartphones and powerful gaming laptops to essential accessories like chargers, cases, headphones, and smartwatches, Minify Gadgets curates a vast catalog of premium and budget-friendly products from trusted brands. The platform features an intuitive, modern interface that allows users to browse, compare, and purchase gadgets with just a few clicks. Advanced search and filtering capabilities enable shoppers to find exactly what they're looking for by brand, price range, specifications, ratings, or availability. Real-time inventory tracking ensures accurate stock visibility, while integrated payment gateways support multiple secure transaction methods including mobile money, credit/debit cards, and bank transfers—catering specifically to the Ugandan and East African market. Customers can create personalized accounts to track orders, manage wishlists, write reviews, and receive tailored product recommendations based on their browsing behavior. For sellers and administrators, the platform offers a robust backend dashboard to manage products, process orders, handle customer inquiries, and analyze sales performance with detailed analytics. Minify Gadgets is more than just an online store—it's a trusted tech destination built for speed, security, and customer satisfaction in the digital age.",

  functionality: [
    "User authentication with email, phone, and social login options",
    "Advanced product search with autocomplete and voice search support",
    "Multi-layer filtering and sorting (brand, price, rating, storage, RAM, color, availability)",
    "Product comparison tool for side-by-side specification analysis",
    "Detailed product pages with high-resolution image galleries, zoom, and 360° views",
    "Customer reviews and ratings system with photo attachments",
    "Personalized shopping cart with save-for-later functionality",
    "Secure checkout with multiple payment options (Mobile Money, Credit/Debit Cards, Bank Transfer, PayPal)",
    "Order tracking with real-time status updates and delivery notifications",
    "Wishlist and favorites management",
    "Recently viewed products history",
    "AI-powered product recommendations based on browsing and purchase history",
    "Flash sales, discount coupons, and promotional campaign management",
    "Admin dashboard with product inventory management, order processing, and customer support tools",
    "Vendor/multi-seller support for third-party electronics retailers",
    "Automated email and SMS notifications for order confirmations and shipping updates",
    "Live chat and customer support ticket system",
    "Blog and tech news section for product reviews, tutorials, and industry updates",
    "Affiliate and referral program for user-generated sales",
    "Returns and refunds management with self-service portal",
    "Mobile-responsive design optimized for phones, tablets, and desktops",
    "Secure data encryption and PCI-DSS compliance for payment security",
    "Multi-language and multi-currency support for regional adaptability",
    "Performance optimization with lazy loading, CDN, and image compression",
  ],

  techStack: [
    "React",
    "Django",
    "Mobile Money APIs (MTN MoMo, Airtel Money)"
  ],

  screenshots: [minify_gadgets],

  liveUrl: "https://www.minifygadets.com",

  featured: true,
}
];
