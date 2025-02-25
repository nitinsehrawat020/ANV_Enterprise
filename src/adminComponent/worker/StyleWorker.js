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

export const StyleCategory = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-background-200);
`;
export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  gap: 1rem;
  font-size: 1.3rem;
  background-color: var(--color-background-800);
  border-radius: var(--br-l);

  @media (max-width: 768px) {
    padding: 0.8rem 0.5rem;
    gap: 0.2rem;
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    padding: 0.8rem 0.5rem;
    gap: 0.2rem;
    font-size: 0.8rem;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const CategoryItem = styled.div`
  padding: 0.5rem;
  border-radius: var(--br-l);
  cursor: pointer;
  background-color: var(--color-background-200);
  &:hover {
    background-color: var(--color-background-500);
  }
  &.active {
    background-color: var(--color-primary-500);
  }

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

export const StyleWorkerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;
  gap: 1rem;
`;

export const WorkerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  padding: 1rem 0rem;
  gap: 1rem;
`;

export const StyledWorkerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--color-background-200);
  border-radius: var(--br-l);
`;
