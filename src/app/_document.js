import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       {/* Microsoft Clarity */}
       <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "pca5p8859p");
            `,
          }}
        />
        {/* Google Analytics - Global Site Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X6H496HCH9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X6H496HCH9', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="G-X6H496HCH9" />

        {/* Primary Meta Tags */}
        <meta name="description" content="DCC Services offers Vidarbha's No.1 HR solution with professional services tailored to your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/dccimg/logo.png" />

        {/* Preload Fonts */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Google Tag Manager (gtm.js) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id=GTM-MZ83FPPG'+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZ83FPPG'); // Replace with your GTM ID
            `,
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ83FPPG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
