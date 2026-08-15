import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  id: string
  title: string
  date: string
  category: string
  short: string
}
 
const postsDirectory = path.join(process.cwd(), 'posts');
 
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
 
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
 
    const matterResult = matter(fileContents);
 
    return {
      id,
      ...matterResult.data,
    } as PostMetadata;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
