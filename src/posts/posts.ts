import postsJson from "./posts.json";

export type PostData = {
  metadata: Metadata;
  html: TrustedHTML;
  id: string;
};

type Metadata = {
  title: string;
  published: boolean;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
  imageUrl?: string;
};

export const data: PostData[] = postsJson;
