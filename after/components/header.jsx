import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export default () => (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">
            Star-Wars Wiki
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link href="/planets-csr" passHref>
                    <Nav.Link>Planets-CSR</Nav.Link>
                </Link>
                <Link href="/planets-ssr" passHref>
                    <Nav.Link>Planets-SSR</Nav.Link>
                </Link>
                <NavDropdown title="More-Planets" id="basic-nav-dropdown">
                    <Link href="/planet/[name]" as="/planet/tatooine" passHref>
                        <NavDropdown.Item>Tatooine</NavDropdown.Item>
                    </Link>
                    <Link href="/planet/[name]" as="/planet/hoth" passHref>
                        <NavDropdown.Item>Hoth</NavDropdown.Item>
                    </Link>
                    <Link href="/planet/[name]" as="/planet/naboo" passHref>
                        <NavDropdown.Item>Naboo</NavDropdown.Item>
                    </Link>
                    <Link href="/planet/[name]" as="/planet/alderaan" passHref>
                        <NavDropdown.Item>Alderaan</NavDropdown.Item>
                    </Link>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)