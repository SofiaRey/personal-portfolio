import { useParams } from "react-router-dom";

function Project() {
  const { id } = useParams();

  return <h1>Project with {id} got</h1>;
}

export default Project;
