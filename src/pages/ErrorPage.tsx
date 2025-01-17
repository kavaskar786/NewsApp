import { Button } from "@/components/ui/button";
import notFound from "../assets/images/notFound.svg";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[92vh] flex-col gap-4">
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
export default ErrorPage;
