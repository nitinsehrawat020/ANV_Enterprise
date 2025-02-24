import { useState } from "react";
import {
  AttendanceBox,
  AttendanceContainer,
  AttendanceButton,
  StyleActionButton,
  PendingListButton,
  PendingList,
} from "./StyleWorker";
import Modal from "../../ui/Modal";

function Attendance({ WorkerData }) {
  const [attendanceDropdown, setAttendanceDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const uniqueNotAvailableDays = new Set();

  const WorkersAttendance = WorkerData.map((worker) => {
    const notAvailableDays = Object.keys(worker.attendance).filter(
      (date) => worker.attendance[date] === "not_available"
    );
    return {
      name: worker.name,
      notAvailableDays,
    };
  });

  WorkersAttendance.forEach((worker) => {
    worker.notAvailableDays.forEach((day) => {
      uniqueNotAvailableDays.add(day);
    });
  });

  return (
    <AttendanceContainer>
      Attendance:-
      <AttendanceBox attendanceDropdown={attendanceDropdown}>
        <PendingListButton
          onClick={() =>
            setAttendanceDropdown((attendanceDropdown) => !attendanceDropdown)
          }
        >
          View Pending List
        </PendingListButton>
        {attendanceDropdown && (
          <PendingList>
            <AttendanceButton onClick={() => setIsOpenModal(true)}>
              Today Attendance
            </AttendanceButton>
            {[...uniqueNotAvailableDays].map((day, index) => (
              <AttendanceButton
                key={index}
                onClick={() => {
                  setIsOpenModal(true);
                  setSelectedItem(day);
                }}
              >
                {day}
              </AttendanceButton>
            ))}
          </PendingList>
        )}
        {isOpenModal && (
          <Modal onClose={() => setIsOpenModal(false)}>{selectedItem}</Modal>
        )}
      </AttendanceBox>
    </AttendanceContainer>
  );
}

export default Attendance;
