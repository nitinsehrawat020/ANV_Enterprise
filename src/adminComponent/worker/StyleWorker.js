import styled from "styled-components";
export const StyleActionButton = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.7rem 0.3rem 0rem;
`;
export const AttendanceContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
`;
export const AttendanceBox = styled.div`
  display: flex;
  background-color: var(--color-background-200);
  padding: 0.4rem;
  position: relative;
  border: 1px solid var(--color-background-500);
  border-radius: ${(props) =>
    props.attendanceDropdown ? "0.9rem 0.9rem 0rem 0rem " : "0.9rem"};
  gap: 0rem;

  @media (max-width: 768px) {
    gap: 0rem;
  }
`;

export const PendingListButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

export const PendingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  background-color: var(--color-background-200);
  border-radius: 0rem 0rem 0.9rem 0.9rem;
  position: absolute;
  top: 50px;
  left: 0;

  @media (max-width: 768px) {
    padding: 0.2rem;
    gap: 0.2rem;
  }
`;
export const AttendanceButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 0.3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

// update button

export const UpdatePayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;
  background-color: var(--color-background-200);
  border-radius: var(--br-l);

  @media (max-width: 768px) {
    display: none;
  }
`;
export const PaymentHistory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;
  background-color: var(--color-background-200);
  border-radius: var(--br-l);
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Addworker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;
  background-color: var(--color-background-200);
  border-radius: var(--br-l);
  @media (max-width: 768px) {
    display: none;
  }
`;
export const FloatingIconButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Category
export const CategoryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.8rem 1.5rem;
  gap: 1rem;
`;
