import { StyleWorkerList, WorkerListContainer } from "./StyleWorker";
import WorkerCard from "./WorkerCard";

function WorkersList({ WorkerData }) {
  return (
    <StyleWorkerList>
      <WorkerListContainer>
        {WorkerData.map((worker, index) => (
          <WorkerCard key={index} worker={worker} />
        ))}
      </WorkerListContainer>
    </StyleWorkerList>
  );
}

export default WorkersList;
