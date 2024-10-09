import { Browser, chromium, webkit } from 'playwright';

export class BrowserFactory {
    static async getBrowser(browserType: string | undefined, headless: string | undefined): Promise<Browser> {
        // Convertimos el valor de "headless" a booleano
        const isHeadless = headless === 'true';

        // Determinamos el tipo de navegador en función del parámetro recibido
        switch (browserType) {
            case 'chromium':
                return await chromium.launch({ headless: isHeadless, slowMo:500, args: ['--start-maximized']});
            case 'webkit':
                return await webkit.launch({ headless: isHeadless });
            case 'firefox':
            default:
                return await chromium.launch({ headless: isHeadless });
        }
    }
}