import ActionButton from "../../adminComponent/worker/ActionButton";
import Category from "../../adminComponent/worker/Category";
import WorkersList from "../../adminComponent/worker/WorkersList";
import { Content } from "./Style";

function Workers() {
  return (
    <Content>
      <ActionButton />
      <Category />
      <WorkersList />
    </Content>
  );
}

export default Workers;
