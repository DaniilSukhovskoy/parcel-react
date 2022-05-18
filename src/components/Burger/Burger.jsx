import { MdMenu, MdClose } from "react-icons/md";

export const Burger = ({ open, setOpen }) => {
    return (
        <button
            type="button"
            className="btn"
            open={open}
            onClick={() => setOpen(!open)}
        >
            {open ? <MdClose color="#c6c6c6"/> : <MdMenu color="#c6c6c6"/>}
        </button>
    )
  }