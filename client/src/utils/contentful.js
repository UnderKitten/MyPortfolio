import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchAppData() {
  try {
    const entries = await client.getEntries({
      content_type: "mainApplication",
      limit: 1,
    });
    const appEntry = entries.items[0];

    if (!appEntry) return null;

    const fields = appEntry.fields;

    return {
      title: fields.applicationTitle,
      profilePhoto: fields.profilePhoto
        ? "https:" + fields.profilePhoto.fields.file.url
        : null,
      positions: fields.positions || [],
      introduction: fields.introduction,
      beyondCode: fields.beyondCode,

      projects:
        fields.projects?.map((project) => ({
          id: project.sys.id,
          projectId: project.fields.id,
          title: project.fields.title,
          technologies: project.fields.technologies,
          description: project.fields.description,
          shortDescription: project.fields.shortDescription,
          image: project.fields.image
            ? "https:" + project.fields.image.fields.file.url
            : null,
          imageAltTitle: project.fields.altTitle,
          link: project.fields.link,
          gitLink: project.fields.gitLink,
        })) || [],

      skillCategories: fields.skillCategories.map((category) => ({
        id: category.sys.id,
        title: category.fields.categoryTitle,
        skills:
          category.fields.skills?.map((skill) => ({
            id: skill.sys.id,
            name: skill.fields.skillEntry,
            icon: skill.fields.skillIcon
              ? "https:" + skill.fields.skillIcon.fields.file.url
              : null,
          })) || [],
      })),

      resumeUrl: fields.resume.fields.resume.fields.file
        ? "https:" + fields.resume.fields.resume.fields.file.url
        : null,

      skills:
        fields.skills?.map((skill) => ({
          skillEntry: skill.fields.skillEntry,
          skillIcon: skill.fields.skillIcon
            ? "https:" + skill.fields.skillIcon.fields.file.url
            : null,
        })) || [],
    };
  } catch (error) {
    console.error("Error fetching app data:", error);
    throw error;
  }
}

export async function fetchProjects() {
  const appData = await fetchAppData();
  return appData?.projects || [];
}

export async function fetchResumePDF() {
  const appData = await fetchAppData();
  return appData?.resumeUrl || null;
}
