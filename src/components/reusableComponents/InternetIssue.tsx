import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import noArticleFoundImage from "../../assets/images/noArticleFoundImage.jpg";

export const InternetIssue = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[92vh] flex-col items-center justify-center">
      <img
        className="h-[50vh] rounded-lg"
        src={noArticleFoundImage}
        alt="No article found image"
      />
      <p className="mb-3">"Please check your internet and press reload"</p>
      <Button
        onClick={() => {
          return navigate(0);
        }}
      >
        reload
      </Button>
    </div>
  );
};
