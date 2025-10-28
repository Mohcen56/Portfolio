import type { Metadata } from 'next';
     import './global.css';
     import './style-switcher.css';
     import StyleSwitcher from '../components/StyleSwitcher';
     import './color1.css';
     import { Cookie, Tangerine } from 'next/font/google';


     export const metadata: Metadata = {
       title: "Mohcen's Portfolio",
       description: 'Portfolio of Mohcen, a software engineering student.',
     };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const cookie = Cookie({ subsets: ['latin'], weight: '400' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const tangerine = Tangerine({ subsets: ['latin'], weight: ['400', '700'] });

     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="en">
            <head>  
              <link rel="icon" href="/imgs/mohcen.png" type="image/png" />
             <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
         {/* --------- FAVICON ---------- */}
         
         <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"></link>
       
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
       
            </head>
           <body>
             {children}
             <StyleSwitcher />
           </body>
         </html>
       );
     }