import { redirect } from "@sveltejs/kit";

export const GET = async ({ fetch, params, request }) => {
    const browserLang = request.headers.get('accept-language');
    const lang = browserLang.includes('es') ? 'es' : 'en';
    const url = lang === 'es' ? '/blog/es' : '/blog/en';
    throw redirect(301, url);
}