import { type PostData } from "../posts/posts";
import wetDeck from "../assets/wet-deck.jpg";
import reactLogo from "../assets/react.svg";

type PostPreviewProps = {
  post: PostData;
  postIndex: number;
};

export function PostPreview(props: PostPreviewProps) {
  const {
    title,
    tags,
    published,
    description,
    slug,
    imageUrl,
    authorImage,
    author,
    date: dateString,
  } = props.post.metadata;
  const date = new Date(dateString);
  return (
    <div className="flex flex-col text-gray-700">
      <div className="relative m-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <img
          src={imageUrl ? imageUrl : wetDeck}
          alt="Revolutionizing Our Production Process"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 px-2 sm:pl-4 sm:pr-6">
        <p className="mb-4 block font-sans text-sm font-light leading-normal text-inherit antialiased">
          Technology
        </p>
        <a
          href="#"
          className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold normal-case leading-snug tracking-normal antialiased transition-colors hover:text-gray-700"
        >
          {title}
        </a>
        <p className="text-sm text-gray-900 dark:text-gray-200">{slug}</p>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed !text-gray-500 text-inherit antialiased">
          {description}
        </p>
        <p className="text-sm text-gray-900 dark:text-gray-200">{tags}</p>
        <div className="flex items-center gap-4">
          <img
            src={authorImage ? authorImage : reactLogo}
            className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
          />
          <div>
            <p className="text-blue-gray-900 mb-0.5 block font-sans text-base font-light leading-relaxed antialiased">
              {author}
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              {date.toDateString()}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              {published}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200">{tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
