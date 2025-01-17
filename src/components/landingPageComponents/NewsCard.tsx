import { Article } from "@/utils/types/types";
import { Card } from "../ui/card";
import image from "../../assets/images/image.png";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FaClock } from "react-icons/fa";

import { formatToRelativeDate } from "@/utils/formatTime";

const NewsCard = ({ Article }: { Article: Article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } =
    Article;

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card className="shadow-lg h-[24.25rem] w-[20.5rem] overflow-hidden relative">
        {/* Image */}
        <img
          className="h-full w-full object-cover object-center absolute top-0 left-0"
          src={urlToImage || image}
          alt={title}
        />
        {/* Text Content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white bg-gradient-to-t from-black to-[#00000066] flex flex-col rounded-xl "
          initial={{ height: "10rem", gap: "4rem" }} // Initial height
          whileHover={{
            height: "24.25rem",
            gap: ["2.5rem", "2rem", "1rem", ".5rem", ".25rem"],
          }} // Expand height on hover
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="">
            {publishedAt && (
              <p className="text-xs absolute right-0 top-0 mx-6 mt-2 bg-[#93929264] shadow-lg rounded-2xl p-2 flex items-center justify-center gap-1">
                <FaClock />
                {formatToRelativeDate(publishedAt)}
              </p>
            )}
            <p className="text-lg font-semibold mt-6">{title}</p>
          </div>
          {description && <p className="text-sm my-3">{description}</p>}
          {author && <p className="text-sm font-semibold">Author:{author}</p>}
          {source.name ? (
            author !== source.name && (
              <p className="text-sm"> Source: {source.name || null}</p>
            )
          ) : (
            <></>
          )}

          <a href={url}>
            <Button className="mt-4">Link</Button>
          </a>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default NewsCard;
