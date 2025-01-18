import { Button } from "@/components/ui/button";
import notFound from "../assets/images/notFound.svg";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[92vh] flex-col items-center justify-center gap-4">
      <img
        src={notFound}
        alt="Page Not Found"
        className="h-[50vh] rounded-lg shadow-lg"
      />
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </Button>
    </div>
  );
};
export { ErrorPage };
