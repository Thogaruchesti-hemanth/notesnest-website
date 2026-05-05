const fs = require("fs");

const files = [
  "contact.html",
  "feedback.html",
  "bug-report.html",
  "user-guide.html",
  "terms.html",
  "privacy.html",
  "delete.html",
  "404.html",
  "blog.html",
  "article-productivity-tips.html",
  "article-secure-notes.html",
];

const seoData = {
  "contact.html": {
    title: "Contact Us - NotesNest",
    description:
      "Contact the NotesNest team for support, feature requests, business inquiries, or general questions about our productivity and note-taking app.",
    url: "https://notesnest-app.web.app/contact.html",
    type: "ContactPage",
  },
  "feedback.html": {
    title: "Send Feedback - NotesNest",
    description:
      "Share your feedback, feature suggestions, or ideas for improvements to help NotesNest evolve and become the best note-taking app.",
    url: "https://notesnest-app.web.app/feedback.html",
    type: "WebPage",
  },
  "bug-report.html": {
    title: "Report a Bug - NotesNest",
    description:
      "Found an issue with NotesNest? Report bugs and glitches here to help us improve your note-taking experience.",
    url: "https://notesnest-app.web.app/bug-report.html",
    type: "WebPage",
  },
  "user-guide.html": {
    title: "User Guide & Tutorials - NotesNest",
    description:
      "Comprehensive user guide for NotesNest. Learn how to manage notes, reminders, categories, and maximize your productivity.",
    url: "https://notesnest-app.web.app/user-guide.html",
    type: "FAQPage",
  },
  "terms.html": {
    title: "Terms of Service - NotesNest",
    description:
      "Read the Terms of Service for NotesNest to understand the rules, guidelines, and agreements for using our productivity app.",
    url: "https://notesnest-app.web.app/terms.html",
    type: "WebPage",
  },
  "privacy.html": {
    title: "Privacy Policy - NotesNest",
    description:
      "Learn how NotesNest protects your data. Read our Privacy Policy to understand our secure, privacy-first approach to note-taking.",
    url: "https://notesnest-app.web.app/privacy.html",
    type: "WebPage",
  },
  "delete.html": {
    title: "Delete Account - NotesNest",
    description:
      "Request to delete your NotesNest account and all associated data permanently. We value your privacy and make offboarding simple.",
    url: "https://notesnest-app.web.app/delete.html",
    type: "WebPage",
  },
  "404.html": {
    title: "Page Not Found - NotesNest",
    description: "The page you are looking for cannot be found.",
    url: "https://notesnest-app.web.app/404.html",
    type: "WebPage",
  },
  "blog.html": {
    title: "Blog & Resources - NotesNest",
    description: "Read our latest articles on productivity, note-taking strategies, and mobile security for Android users.",
    url: "https://notesnest-app.web.app/blog.html",
    type: "Blog",
  },
  "article-productivity-tips.html": {
    title: "Top 5 Productivity Tips for Android Users in 2026 - NotesNest",
    description: "Discover the best strategies to transform your Android device into a powerhouse of productivity using apps like NotesNest.",
    url: "https://notesnest-app.web.app/article-productivity-tips.html",
    type: "BlogPosting",
  },
  "article-secure-notes.html": {
    title: "Why Encrypted Notes Are Essential for Mobile Security - NotesNest",
    description: "Understand the risks of plain-text note apps and why local encryption matters for your mobile privacy.",
    url: "https://notesnest-app.web.app/article-secure-notes.html",
    type: "BlogPosting",
  },
};

const buildHead = (data) => `  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

    <!-- SEO Meta Tags -->
    <title>${data.title}</title>
    <meta name="description" content="${data.description}" />
    <meta name="keywords" content="secure encrypted notes app for android, free ad-free task manager, best android productivity tools 2026, offline sqlite note backup, to-do list with reminders, private note organizer android, secure cloud sync notes" />
    <meta name="author" content="Thogaruchesti Hemanth" />
    <meta name="robots" content="${data.url.includes("404") || data.url.includes("delete") || data.url.includes("feedback") || data.url.includes("bug-report") ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}" />
    <meta name="googlebot" content="${data.url.includes("404") || data.url.includes("delete") || data.url.includes("feedback") || data.url.includes("bug-report") ? "noindex, follow" : "index, follow"}" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="7 days" />
    <meta name="rating" content="General" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${data.url}" />

    <!-- Open Graph / Facebook Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${data.url}" />
    <meta property="og:title" content="${data.title}" />
    <meta property="og:description" content="${data.description}" />
    <meta property="og:image" content="https://notesnest-app.web.app/images/og-image.jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="NotesNest App Preview" />
    <meta property="og:site_name" content="NotesNest" />
    <meta property="og:locale" content="en_US" />

    <!-- X (Twitter) Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${data.url}" />
    <meta name="twitter:title" content="${data.title}" />
    <meta name="twitter:description" content="${data.description}" />
    <meta name="twitter:image" content="https://notesnest-app.web.app/images/twitter-card.jpeg" />
    <meta name="twitter:image:alt" content="NotesNest App Preview" />
    <meta name="twitter:creator" content="@lovely_sh_liker" />
    <meta name="twitter:site" content="@lovely_sh_liker" />

    <!-- Mobile App Meta Tags -->
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="NotesNest" />
    <meta name="application-name" content="NotesNest" />
    <meta name="theme-color" content="#2196F3" />
    <meta name="msapplication-TileColor" content="#2196F3" />
    <meta name="msapplication-navbutton-color" content="#2196F3" />

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
    <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
    <meta name="msapplication-config" content="/browserconfig.xml" />

    <!-- Web Manifest -->
    <link rel="manifest" href="/manifest.json" />

    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

    <!-- Stylesheets -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Google AdSense -->
    <meta name="google-adsense-account" content="ca-pub-4258152474007475" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4258152474007475" crossorigin="anonymous"></script>

    <!-- WebPage Schema -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "${data.type}",
        "name": "${data.title}",
        "description": "${data.description}",
        "url": "${data.url}",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "NotesNest",
          "url": "https://notesnest-app.web.app"
        }
      }
    </script>
  </head>`;

files.forEach((f) => {
  let content = fs.readFileSync(f, "utf8");
  let headStart = content.indexOf("<head>");
  let headEnd = content.indexOf("</head>") + 7;

  if (headStart !== -1 && headEnd !== -1 && headStart < headEnd) {
    let newHead = buildHead(seoData[f]);
    let newContent =
      content.substring(0, headStart) + newHead + content.substring(headEnd);
    fs.writeFileSync(f, newContent);
    console.log("Updated " + f);
  } else {
    console.log("Could not find head in " + f);
  }
});
