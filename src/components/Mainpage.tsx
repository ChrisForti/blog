import { PostPreview } from "./PostPreview";
import { data } from "../content/content";
import { Post } from "./Post";

export function Mainpage() {
  return (
    <main className="container m-0 h-[calc(100vh_-_12.5rem)] flex-col overflow-scroll bg-white p-4">
      {data.map((post) => {
        return <PostPreview post={post} />;
      })}
      <Post post={data[0]} />
    </main>
  );
}
