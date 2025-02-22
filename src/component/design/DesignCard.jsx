import { useState } from "react";
import {
  CardContainer,
  CardInformation,
  StyleCard,
} from "./styleDesignFalseCeil";
import Modal from "../../ui/Modal";
import DesignInformation from "./DesignInformation";

function DesignCard({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleCardClick(item) {
    setSelectedItem(item);
  }

  function closeOverlay() {
    setSelectedItem(null);
  }
  return (
    <>
      <CardContainer>
        {data.map((item, index) => (
          <StyleCard
            key={index}
            img={item.img}
            onClick={() => handleCardClick(item)}
          >
            <CardInformation>
              <h3>{item.title}</h3>|<p>{item.designArea}</p>
            </CardInformation>
          </StyleCard>
        ))}
      </CardContainer>

      {selectedItem && (
        <Modal onClose={closeOverlay}>
          <DesignInformation selectedItem={selectedItem} />
        </Modal>
      )}
    </>
  );
}

export default DesignCard;
