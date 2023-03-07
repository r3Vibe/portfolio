import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { logout } from '../../store/slices/authSlice';
import { useTypedDispatch } from '../../hooks/TypedReduxHooks';

interface sidebar {
    title: string
}


const Sidebar = ({ title }: sidebar) => {
    const dispatch = useTypedDispatch();
    return (
        <>
            <Offcanvas show={true} {...{ backdrop: false }}>
                <Offcanvas.Header>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <Nav className="me-auto flex-column">
                            <NavLink to={"/admin/dashboard"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Dashboard</NavLink>
                            <NavLink to={"/admin/personal-details"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Personal Details</NavLink>
                            <NavLink to={"/admin/educational-details"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Educational Details</NavLink>
                            <NavLink to={"/admin/skills"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Skills</NavLink>
                            <NavLink to={"/admin/languages"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Languages</NavLink>
                            <NavLink to={"/admin/frameworks"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Frameworks</NavLink>
                            <NavLink to={"/admin/projects"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Projects</NavLink>
                            <NavLink to={"/admin/contacts"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Conatcts</NavLink>
                            <NavLink to={"/admin/profile"} className={({ isActive }) => isActive ? "active nav-link" : "nav-link" }>Profile</NavLink>
                            <NavLink to={"#!"} onClick={() => dispatch(logout())} className="nav-link">Logout</NavLink>
                        </Nav>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar
