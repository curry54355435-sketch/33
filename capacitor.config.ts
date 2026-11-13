import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tkafamily.kingdom3570',
  appName: 'TKA FAMILY',
  webDir: 'www',
  server: {
    // 請改成你目前 Netlify 網站的完整網址，必須包含 https://
    // 例如：https://your-site-name.netlify.app
    url: 'https://go-tka.netlify.app/',
    cleartext: false,
    allowNavigation: [
      '*.netlify.app'
    ]
  }
};

export default config;