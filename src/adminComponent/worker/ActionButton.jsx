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
import SpeedDial from "../../ui/SpeedDial";
import { SpeedDialAction } from "@mui/material";
import SpeedDialTooltipOpen from "../../ui/SpeedDial";

const WorkerData = [
  {
    name: "Amit",
    phone_number: 9876543210,
    join: "01/feb/2023",
    member_type: "worker",
    attendance: {
      "01/feb/2025": "full_day",
      "02/feb/2025": "full_day",
      "03/feb/2025": "half_day",
      "04/feb/2025": "full_day",
      "05/feb/2025": "absent",
      "06/feb/2025": "night",
      "07/feb/2025": "full_day",
      "08/feb/2025": "full_day",
      "09/feb/2025": "half_day",
      "10/feb/2025": "full_day",
      "11/feb/2025": "full_day",
      "12/feb/2025": "full_day",
      "13/feb/2025": "full_day",
      "14/feb/2025": "full_day",
      "15/feb/2025": "full_day",
      "16/feb/2025": "night",
      "17/feb/2025": "full_day",
      "18/feb/2025": "half_day",
      "19/feb/2025": "full_day",
      "20/feb/2025": "full_day",
      "21/feb/2025": "full_day",
      "22/feb/2025": "not_available",
      "23/feb/2025": "not_available",
      "24/feb/2025": "not_available",
      "25/feb/2025": "not_available",
    },
  },
  {
    name: "Ravi",
    phone_number: 9012345678,
    join: "01/feb/2023",
    member_type: "supervisor",
    attendance: {
      "01/feb/2025": "full_day",
      "02/feb/2025": "full_day",
      "03/feb/2025": "full_day",
      "04/feb/2025": "night",
      "05/feb/2025": "full_day",
      "06/feb/2025": "half_day",
      "07/feb/2025": "full_day",
      "08/feb/2025": "absent",
      "09/feb/2025": "full_day",
      "10/feb/2025": "full_day",
      "11/feb/2025": "full_day",
      "12/feb/2025": "night",
      "13/feb/2025": "full_day",
      "14/feb/2025": "full_day",
      "15/feb/2025": "half_day",
      "16/feb/2025": "full_day",
      "17/feb/2025": "full_day",
      "18/feb/2025": "full_day",
      "19/feb/2025": "full_day",
      "20/feb/2025": "night",
      "21/feb/2025": "full_day",
      "22/feb/2025": "full_day",
      "23/feb/2025": "not_available",
      "24/feb/2025": "not_available",
      "25/feb/2025": "not_available",
    },
  },
  {
    name: "Sunil",
    phone_number: 9123456780,
    join: "01/feb/2023",
    member_type: "worker",
    attendance: {
      "01/feb/2025": "night",
      "02/feb/2025": "full_day",
      "03/feb/2025": "full_day",
      "04/feb/2025": "full_day",
      "05/feb/2025": "half_day",
      "06/feb/2025": "full_day",
      "07/feb/2025": "absent",
      "08/feb/2025": "full_day",
      "09/feb/2025": "full_day",
      "10/feb/2025": "full_day",
      "11/feb/2025": "full_day",
      "12/feb/2025": "full_day",
      "13/feb/2025": "night",
      "14/feb/2025": "full_day",
      "15/feb/2025": "full_day",
      "16/feb/2025": "full_day",
      "17/feb/2025": "half_day",
      "18/feb/2025": "full_day",
      "19/feb/2025": "full_day",
      "20/feb/2025": "full_day",
      "21/feb/2025": "full_day",
      "22/feb/2025": "night",
      "23/feb/2025": "not_available",
      "24/feb/2025": "not_available",
      "25/feb/2025": "not_available",
    },
  },
  {
    name: "Vikram",
    phone_number: 9234567890,
    join: "01/feb/2023",
    member_type: "worker",
    attendance: {
      "01/feb/2025": "full_day",
      "02/feb/2025": "full_day",
      "03/feb/2025": "half_day",
      "04/feb/2025": "full_day",
      "05/feb/2025": "night",
      "06/feb/2025": "full_day",
      "07/feb/2025": "absent",
      "08/feb/2025": "full_day",
      "09/feb/2025": "full_day",
      "10/feb/2025": "full_day",
      "11/feb/2025": "full_day",
      "12/feb/2025": "full_day",
      "13/feb/2025": "full_day",
      "14/feb/2025": "night",
      "15/feb/2025": "half_day",
      "16/feb/2025": "full_day",
      "17/feb/2025": "full_day",
      "18/feb/2025": "full_day",
      "19/feb/2025": "half_day",
      "20/feb/2025": "full_day",
      "21/feb/2025": "full_day",
      "22/feb/2025": "full_day",
      "23/feb/2025": "not_available",
      "24/feb/2025": "not_available",
      "25/feb/2025": "not_available",
    },
  },
];

function ActionButton() {
  const [isOpenModal, setIsOpenModal] = useState("none");
  console.log(isOpenModal);

  return (
    <>
      <StyleActionButton>
        <Attendance WorkerData={WorkerData} />
        <UpdatePayment onClick={() => setIsOpenModal("updatePayment")}>
          update payment
        </UpdatePayment>
        <PaymentHistory onClick={() => setIsOpenModal("PaymentHistory")}>
          Payment History
        </PaymentHistory>
        <Addworker onClick={() => setIsOpenModal("AddWorker")}>
          Add worker
        </Addworker>
      </StyleActionButton>
      <FloatingIconButton>
        <SpeedDialTooltipOpen setIsOpenModal={setIsOpenModal} />
      </FloatingIconButton>

      {isOpenModal === "updatePayment" && (
        <Modal onClose={() => setIsOpenModal("none")}>update payment</Modal>
      )}
      {isOpenModal === "paymentHistory" && (
        <Modal onClose={() => setIsOpenModal("none")}>Payment History</Modal>
      )}
      {isOpenModal === "addWorker" && (
        <Modal onClose={() => setIsOpenModal("none")}>Add Worker</Modal>
      )}
    </>
  );
}

export default ActionButton;
