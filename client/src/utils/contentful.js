import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

export async function fetchProjects() {
  const entries = await client.getEntries({ content_type: 'project' });
  return entries.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
    shortDescription: item.fields.shortDescription,
    image: item.fields.image
      ? 'https:' + item.fields.image.fields.file.url
      : null,
    imageAltTitle: item.fields.altTitle
  }));
}
