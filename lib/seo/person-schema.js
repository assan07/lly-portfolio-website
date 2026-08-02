export function generatePersonSchema(profile, siteUrl) {
  if (!profile) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.full_name || profile.name,
    url: siteUrl || process.env.NEXT_PUBLIC_SITE_URL,
  }

  if (profile.bio) schema.description = profile.bio
  if (profile.title) schema.jobTitle = profile.title
  if (profile.avatar_url) schema.image = profile.avatar_url

  const sameAs = [
    profile.github,
    profile.linkedin,
    profile.instagram,
    profile.behance,
    profile.dribbble,
  ].filter(Boolean)

  if (sameAs.length) {
    schema.sameAs = sameAs
  }

  return schema
}
