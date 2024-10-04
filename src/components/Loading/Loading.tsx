import "./Loading.css";
import { FaSpinner } from "react-icons/fa6";

export default function Loading() {
  return (
    <div className="loading">
      <FaSpinner className="loading-icon" />
    </div>
  );
}
