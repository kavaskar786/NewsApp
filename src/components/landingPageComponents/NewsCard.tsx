import { Article } from "@/utils/types/types";
import { Card } from "../ui/card";
import image from "../../assets/images/image.png";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const NewsCard = ({ Article }: { Article: Article }) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = Article;
  console.log(publishedAt);
  console.log(content);
  if (title === "[Removed]") {
    return <></>;
  }
  return (
    <Card className="shadow-lg h-[24.25rem] w-[22.5rem] overflow-hidden relative">
      {/* Image */}
      <img
        className="h-full w-full object-cover object-center absolute top-0 left-0"
        src={urlToImage || image}
        alt={title}
      />

      {/* Text Content */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white bg-gradient-to-t from-black to-[#00000066] flex flex-col rounded-xl "
        initial={{ height: "8rem", gap: "4rem" }} // Initial height
        whileHover={{
          height: "24.25rem",
          gap: ["2.5rem", "2rem", "1rem", ".5rem", ".25rem"],
        }} // Expand height on hover
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <p className="text-lg font-semibold">{title}</p>
        {description && <p className="">{description}</p>}
        {author && <p>Author:{author}</p>}
        {source.name
          ? author !== source.name && <p> Source: {source.name || null}</p>
          : null}
        <a href={url}>
          <Button>Link</Button>
        </a>
      </motion.div>
    </Card>
  );
};

export default NewsCard;
