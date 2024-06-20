// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Rohit Kushwaha",
    message: "I'm a computer science student Sepcialization with Artificial Intelligence. Currently working as a Android  developer at my university building tools to aid my University growth .",
    basedLocation: "INDIA ' HARYANA",
    resumeLink: "https://docs.google.com/document/d/1zqGMWk5BlAwS6diT182nsmLnJJKeriks/edit?usp=sharing&ouid=100378339620098900555&rtpof=true&sd=true", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/edit.png'
}

const socialMediaLinks = {
    github: "https://github.com/rohitkushwahasingh001",
    linkedin: "https://www.linkedin.com/in/rohit-kushwaha-7301b921a/",
    xtwitter: "https://x.com/ROHITKUSHW13767"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Rohit kushwaha  and I'm a computer science student at Gurugram University. I have a passion for coding in languages such as Python, Java, c++. Work in web development and have experience with Django frameworks.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 3+ years and have 2 years of experience in Android development, and cideo Editing. Currently working as a web development intern for my university."
    ], // Separated items are paragraphs
    techStack: [
        "React",
        "Python",
        "Android Studio",
        "MySQL",
        
    ],
    photo1Link: "images/potrait1.jpg",
    photo2Link: "images/potrait2.jpeg",
    photo3Link: "images/potrait3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Full stack developer Intern",
        company: {
            name: "Bharatintern",
            link: "https://bharatintern.live/"
        },
        duration: "Oct 2023 - Nov 2023",
        bulletPoints: [
            "Resolved issues and developed new tools within Internship web applications (email automation, research discovery, educational resources, scheduling tools, and text-generative AI news sharing).",
            "Achieved 100+ github code contributions as an intern on the team.",
            
        ],
        hashtags: [
            "REACT.js",
            "PHP",
            "MySQL",
            "JS",
            "HTML",
            "Tailwind"
        ]
    },
    {
        position: "Aritifical Intelligence Intern",
        company: {
            name: "CODSOFT",
            link: "https://www.codsoft.in/"
        },
        duration: "Aug 2023 - sept 2023",
        bulletPoints: [
            "Learned AI fundamentals and Machine learning concepts .",
            "Work with the python with different libraries ( Tensorflow , sckitlib , numpy , pandas)to developing generative AI.",
            "AS created project ( Chat BOt , Medical recommandation system)."
        ],
        hashtags: [
            "python",
            "jupyter",
            "Intel GEN-AI",
            "Hugging-face"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Facial Recogniton Attandence System",
        yearCompleted: "2022",
        description: "An GUI interface that will used to store the data of students with details and using there facial data and mark there attandance at real time and that can export in excel sheet ",
        techStack: "Python GUI, MySQL",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/rohitkushwahasingh001/SMART-ATTANDANCE-SYSTEM"
            },
        
        ],
        imageLink: "images/Picture 1.png",
        alignLeft: false
    },
    
    {
        projectName: "KRISHI_SAATHI",
        yearCompleted: "2023",
        description: " This is an Android Application designed for our Indian farmers.✒️ The technology has become a part and parcel of everyone's life and it is also helping us to make our daily tasks easy. We identified that in the Agriculture sector, the farmers are still lacking the best technology use cases.✒️ There are thousands of applications in the markets for farmers but they only provide the limited features.✒️ The main reason for creating this application was to combine every possible feature into the single app. This will remove the burden of managing multiple account and apps for farmers. The application is also designed in such a way that it will be easy to use.",
        techStack: "Android Studio (KOTLIN)",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/rohitkushwahasingh001/Krishi_Saathi"
            },
            
        ],
        imageLink: "images/krishi.png",
        alignLeft: false
    }
    
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking for web and software development positions/internships spring board  summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "r.kushwaha18122003@gmail.com", // email takes precedance
            other: "https://forms.gle/ARDYQDK3Q7DqG5rdA"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}