import { NavLink } from "react-router-dom";
import { Burger } from "../Burger/Burger";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../../services/hooks";

export default function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));



    return (
        <header
            className={!open ? "" : "open"}
            ref={node}
        >
            <h1>Daniil Sukhovskoy</h1>
            <nav
                onClick={() => setOpen(false)}
            >
                <ul>
                    <li><NavLink to="/work">Work</NavLink></li>
                    <li><NavLink to="/personal">Personal</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
            <Burger
                open={open}
                setOpen={setOpen}
            />
        </header>
    )
}