import postsJson from "./posts.json";

export type PostData = {
  title?: string;
  metadata: Metadata;
  html: TrustedHTML;
  id: string;
};

type Metadata = {
  published: boolean;
  description: string;
  date: string;
  slug: string;
  author: string;
  authorImage?: string;
  tags?: string[];
  imageUrl?: string;
};

export const data: PostData[] = postsJson;
