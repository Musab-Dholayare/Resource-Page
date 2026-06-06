import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import FeaturedReasource from "./Components/FeaturedReasource";
import AllResources from "./Components/AllResources";
import Request from "./Components/Request";
import Footer from "./Components/Footer";

function App() {
  const explore = ["All Articles", "Categories", "Trending", "Resources"];

  const learning = ["For Students", "For Teachers", "Careers", "Contribute"];

  const support = [
    "Contact Us",
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <>
      <Header />

      <main>
        <Hero
          HeroTitle="Learning Resources"
          HeroSubTitle="Access curated study guides, tools, templates, and courses to enhance your learning journey."
        />
      </main>
      <FeaturedReasource
        const
        resources={[
          {
            id: 1,
            imogi: "🎓",
            title: "Khan Academy - Free Learning Platform",
            description:
              "Comprehensive online learning platform with thousands of videos covering mathematics, science, history, and more. Learn at your own pace with interactive exercises.",
            CourseName: "Online Courses",
            usersCount: "5,420 users",
            rating: 4.9,
            video: "Video Course",
          },
          {
            id: 1,
            imogi: "🎓",
            title: "Khan Academy - Free Learning Platform",
            description:
              "Comprehensive online learning platform with thousands of videos covering mathematics, science, history, and more. Learn at your own pace with interactive exercises.",
            CourseName: "Online Courses",
            usersCount: "5,420 users",
            rating: 4.9,
            video: "Video Course",
          },
        ]}
      />

      <main>
        <AllResources
          resourcesData={[
            {
              id: 1,
              title: "Khan Academy - Free Learning Platform",
              description:
                "Comprehensive online learning platform with thousands of videos covering mathematics, science...",
              category1: "Online Courses",
              category2: "Video Course",
              usersCount: "5,420 users",
              iconName: "GraduationCap",
              imogi: "🎓",
            },
            {
              id: 2,
              title: "Coursera - Degree Programs & Certificates",
              description:
                "Access university-level courses and degree programs from top universities. Earn recognized...",
              category1: "Online Courses",
              category2: "University Course",
              usersCount: "4,890 users",
              iconName: "BookOpen",
              imogi: "📚",
            },
            {
              id: 3,
              title: "Grammarly - Writing Assistant",
              description:
                "AI-powered writing assistant that helps improve grammar, clarity, and tone in your writing. Perfect fo...",
              category1: "Writing Tools",
              category2: "Software",
              usersCount: "3,780 users",
              iconName: "PenTool",
              imogi: "✍️",
            },
            {
              id: 4,
              title: "Notion - All-in-One Workspace",
              description:
                "Create notes, manage projects, build databases, and organize your study materials. Highly customizable...",
              category1: "Productivity Tools",
              category2: "Application",
              usersCount: "4,210 users",
              iconName: "FileText",
              imogi: "📝",
            },
            {
              id: 5,
              title: "Duolingo - Language Learning",
              description:
                "Learn new languages through interactive lessons and games. Master vocabulary, grammar, and...",
              category1: "Online Courses",
              category2: "Language App",
              usersCount: "5,890 users",
              iconName: "Globe",
              imogi: "🌍",
            },
          ]}
        />
      </main>

      <Request />
      <Footer
        title="EduBlog"
        description="Empowering learners and educators worldwide through quality educational content and resources."
        explore={explore}
        learning={learning}
        support={support}
      />
    </>
  );
}

export default App;
