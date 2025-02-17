import { useState } from "react";
import { Buttongroup, QuoteBotton } from "./HeroStyle";
import Modal from "../../../ui/Modal";
import GetQuote from "../../../ui/GetQuote";

function HeaderButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Buttongroup>
        <QuoteBotton
          type="quote"
          onClick={() => setIsOpenModal((show) => !show)}
        >
          Get Quote
        </QuoteBotton>
      </Buttongroup>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <GetQuote />
        </Modal>
      )}
    </div>
  );
}
export default HeaderButton;
