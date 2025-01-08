import 'xp.css/dist/98.css';
import '@/assets/styles/_common.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
