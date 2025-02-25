import { StyledWorkerCard } from "./StyleWorker";

function WorkerCard({ worker }) {
  return (
    <StyledWorkerCard>
      <h3>{worker?.name}</h3>
      <p>{worker?.payment.totalSalery}</p>
      <p>{worker?.payment.weeklyGiven}</p>
      <p>{worker?.payment.advance}</p>
    </StyledWorkerCard>
  );
}

export default WorkerCard;
