import styled from "styled-components";
import Heading from "../../ui/Heading";

const ModelContainer = styled.div`
  height: 400px;
  /* width: 200px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 5rem;
`;

const Wednesday = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.7rem;
  border-radius: var(--br-l);
  background-color: var(--color-primary-700);
  &:hover {
    background-color: var(--color-primary-500);
  }
`;

export const TableContainer = styled.div`
  overflow: auto;
  scrollbar-width: 1px;

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  height: 50%;

  border-collapse: collapse;
  border-spacing: 1;
  border: 2px solid var(--color-background-800);
  margin-top: 2rem;

  thead tr {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-800);
    border: 1px solid var(--color-background-800);
  }
  thead th {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-300);
    border: 1px solid var(--color-background-800);
  }

  td {
    text-align: center;
    padding: 0.7rem;
    border: 1px solid var(--color-background-500);
  }
  select {
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-background-800);
  }
  input {
    width: 80px;
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-background-800);
  }

  input[type="date"] {
    width: 80%;
  }

  select:focus,
  input:focus {
    outline: 2px solid var(--color-background-800);
    outline-offset: -1px;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-background-200);
    color: var(--color-background-500);
  }

  button {
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-primary-700);
    color: var(--color-white-500);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-primary-500);
  }

  @media (max-width: 768px) {
  }
`;

function UpdatePaymentModal({ workerData }) {
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <ModelContainer>
      <Header>
        <Heading as="h3" className="heading">
          Update Payment
        </Heading>
        <Wednesday>Update Wednesday Payment</Wednesday>
      </Header>
      <TableContainer>
        <form>
          <StyledTable>
            <thead>
              <tr>
                <th>Worker Name</th>
                <th>Payment Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select>
                    {workerData.map((worker, index) => (
                      <option value={worker.name} key={index}>
                        {worker.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input type="date" defaultValue={today} />
                </td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <select>
                    {workerData.map((worker, index) => (
                      <option value={worker.name} key={index}>
                        {worker.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input type="date" defaultValue={today} />
                </td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <select>
                    {workerData.map((worker, index) => (
                      <option value={worker.name} key={index}>
                        {worker.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input type="date" defaultValue={today} />
                </td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button onClick={handleSubmit}> Submit</button>
                </td>
              </tr>
            </tbody>
          </StyledTable>
        </form>
      </TableContainer>
    </ModelContainer>
  );
}

export default UpdatePaymentModal;
