const fs = require('fs');

const files = [
  'index.html',
  'contact.html',
  'feedback.html',
  'bug-report.html',
  'user-guide.html',
  'terms.html',
  'privacy.html',
  'delete.html',
  '404.html'
];

const gtmHead = `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TC7ZTHWT');</script>
    <!-- End Google Tag Manager -->`;

const gtmBody = `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TC7ZTHWT"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Skip if already added
  if (content.includes('GTM-TC7ZTHWT')) {
    console.log(f + ': GTM already present, skipping.');
    return;
  }

  // Insert GTM script right after <head> tag
  content = content.replace(/<head>/, '<head>' + gtmHead);

  // Insert GTM noscript right after <body> tag
  content = content.replace(/<body>/, '<body>' + gtmBody);

  fs.writeFileSync(f, content);
  console.log('Updated: ' + f);
});
