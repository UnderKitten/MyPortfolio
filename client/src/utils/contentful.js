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
    imageAltTitle: item.fields.altTitle,
    link: item.fields.link,
    gitLink: item.fields.gitLink,
  }));
}

export async function fetchResumePDF() {
  const entries = await client.getEntries({ content_type: 'resume' });
  const pdfFile = entries.items[0]?.fields?.resume;
  return pdfFile ? 'https:' + pdfFile.fields.file.url : null;
}
