import { Buttongroup } from "./HeroStyle";
import { Button } from "../../../ui/Button";

function HeaderButton() {
  return (
    <div>
      <Buttongroup>
        <Button variant="filled" size="1.5">
          CONTACT US
        </Button>
        <Button variant="outlined" size="1.5">
          HOW IT WORKS?
        </Button>
      </Buttongroup>
    </div>
  );
}
export default HeaderButton;
