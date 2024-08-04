import { PostPreview } from "./PostPreview";
import { data, PostData } from "../content/content";
import { Post } from "./Post";
import { v4 as uuidv4 } from "uuid";
type MainpageProps = {
  selectedPost: number;
};

const postData = [
  data.map((post) => {
    return <PostPreview key={uuidv4()} post={post} />;
  }),
  ...data,
];

export function Mainpage({ selectedPost }: MainpageProps) {
  return (
    <main className="container m-0 flex h-[calc(100vh_-_12.5rem)] flex-col overflow-scroll bg-white p-4">
      {selectedPost > 0 ? (
        <Post post={postData[selectedPost] as PostData} />
      ) : (
        (postData[0] as React.ReactNode[])
      )}
    </main>
  );
}
