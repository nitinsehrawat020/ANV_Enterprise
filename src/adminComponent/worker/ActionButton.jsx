import { useState } from "react";
import Attendance from "./Attendance";
import {
  Addworker,
  FloatingIconButton,
  PaymentHistory,
  StyleActionButton,
  UpdatePayment,
} from "./StyleWorker";
import Modal from "../../ui/Modal";
import SpeedDialTooltipOpen from "../../ui/SpeedDial";
import PaymentHistoryModal from "./PaymentHistoryModal";
import UpdatePaymentModal from "./UpdatePaymentModal";

function ActionButton({ WorkerData }) {
  const [isOpenModal, setIsOpenModal] = useState("updatePayment");

  return (
    <>
      <StyleActionButton>
        <Attendance WorkerData={WorkerData} />
        <UpdatePayment onClick={() => setIsOpenModal("updatePayment")}>
          update payment
        </UpdatePayment>
        <PaymentHistory onClick={() => setIsOpenModal("paymentHistory")}>
          Payment History
        </PaymentHistory>
        <Addworker onClick={() => setIsOpenModal("addWorker")}>
          Add worker
        </Addworker>
      </StyleActionButton>
      <FloatingIconButton>
        <SpeedDialTooltipOpen setIsOpenModal={setIsOpenModal} />
      </FloatingIconButton>

      {isOpenModal === "updatePayment" && (
        <Modal onClose={() => setIsOpenModal("none")}>
          <UpdatePaymentModal workerData={WorkerData} />
        </Modal>
      )}
      {isOpenModal === "paymentHistory" && (
        <Modal onClose={() => setIsOpenModal("none")}>
          <PaymentHistoryModal workerData={WorkerData} />
        </Modal>
      )}
      {isOpenModal === "addWorker" && (
        <Modal onClose={() => setIsOpenModal("none")}>Add Worker</Modal>
      )}
    </>
  );
}

export default ActionButton;
