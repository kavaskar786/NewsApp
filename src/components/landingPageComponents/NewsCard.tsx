import { Article } from "@/utils/types/types";
import { Card } from "../ui/card";
import image from "../../assets/images/newsCardBackupImage.png";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

import { formatToRelativeDate } from "@/utils/formatTime";

const NewsCard = ({ Article }: { Article: Article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } =
    Article;

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <a href={url} target="_blank">
          <Card className="relative h-[24.25rem] w-[20.5rem] overflow-hidden rounded-3xl shadow-lg">
            {/* Image */}
            <img
              className="absolute left-0 top-0 h-full w-full object-cover object-center"
              src={urlToImage || image}
              alt={title}
            />
            {/* Text Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 flex flex-col rounded-xl bg-gradient-to-t from-black to-[#00000066] p-4 text-white"
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
                  <p className="absolute right-0 top-0 mx-6 mt-2 flex items-center justify-center gap-1 rounded-full bg-[#93929264] p-2 text-xs shadow-lg">
                    <FaClock />
                    {formatToRelativeDate(publishedAt)}
                  </p>
                )}
                <p className="mt-6 text-lg font-semibold">{title}</p>
              </div>
              {description && <p className="my-3 text-sm">{description}</p>}
              {author && (
                <p className="text-sm font-semibold">Author:{author}</p>
              )}
              {source.name ? (
                author !== source.name && (
                  <p className="text-sm"> Source: {source.name || null}</p>
                )
              ) : (
                <></>
              )}
            </motion.div>
          </Card>
        </a>
      </motion.div>
    </>
  );
};

export { NewsCard };
