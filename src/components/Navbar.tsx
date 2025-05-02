import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  TextInput,
} from "flowbite-react";
import logos from "../assets/logos.png";

export default function MyNavbar() {
  return (
    <Navbar className="bg-gray-900">
      <NavbarBrand href="#">
        <span className="self-center ps-2.5 text-3xl font-semibold whitespace-nowrap text-white">
          Readdora
        </span>
      </NavbarBrand>
      <div className="flex space-x-2 md:order-2">
        <div className="hidden md:block">
          <TextInput type="text" placeholder="Search..." className="w-40" />
        </div>
        <Button className="hidden md:block">Get started</Button>
        <NavbarToggle className="border-none shadow-none focus:ring-0 focus:outline-none" />
      </div>
      <NavbarCollapse className="!border-none bg-gray-900 shadow-none">
        <NavbarLink href="#" active className="border-none">
          Home
        </NavbarLink>
        <NavbarLink href="#" className="border-none">
          About
        </NavbarLink>
        <NavbarLink href="#" className="border-none">
          Services
        </NavbarLink>
        <NavbarLink href="#" className="border-none">
          Pricing
        </NavbarLink>
        <NavbarLink href="#" className="border-none">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
