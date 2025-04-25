import { ModeToggle } from "@/components/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";
import Hero from "../_components/Hero";
import ProductList from "../_components/Menu/product/ProductList";


export default function Home() {
  return (
   <div>
    <Hero />
    <ProductList />

   </div>
  );
}
