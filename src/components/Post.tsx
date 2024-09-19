import type { PostData } from "../posts/posts";
import reactLogo from "../assets/react.svg";
import wetDeckH from "../assets/wet-deck-hatch.jpg";

type PostProps = { post: PostData };

export function Post({ post }: PostProps) {
  const {
    title,
    description,
    published,
    date: dateString,
    slug,
    tags,
    authorImage,
    author,
    imageUrl,
  } = post.metadata;
  const date = new Date(dateString);
  return (
    <div className="text-black">
      {/* Container for the blog post */}
      <section className="light:bg-white dark:bg-gray-500">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-2xl font-semibold capitalize text-gray-800 lg:text-3xl dark:text-white">
            From the blog
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            {description}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-200">{tags}</p>
          <p className="text-sm text-gray-700 dark:text-gray-200">{slug}</p>
          <div className="mt-8 flex flex-col items-center lg:-mx-6">
            {/* Image of the blog post */}
            <img
              className="h-72 w-full rounded-xl object-cover lg:mx-6 lg:h-96"
              src={imageUrl ? imageUrl : wetDeckH}
            />
            <div className="mt-6 lg:mx-6 lg:mt-0">
              {/* Date of the blog post */}
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {date.toLocaleDateString()}
              </p>

              {/* Title of the blog post */}
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {title}
              </p>

              {/* Content of the blog post */}
              <div
                className="mt-3 text-sm text-gray-500 md:text-sm dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.html }}
              ></div>

              {/* Author information */}
              <div className="mt-6 flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover object-center"
                  src={authorImage ? authorImage : reactLogo}
                  alt=""
                />

                <div className="mx-4">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {author}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {published}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {tags}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
