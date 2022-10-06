import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <TiArrowBack
        size={25}
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
