export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://lollygendaaprilia.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin'],
    },

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  }
}
