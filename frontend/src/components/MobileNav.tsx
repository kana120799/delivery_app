import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500"></Menu>
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetTitle>
            <span>Welcome to Tomato</span>
          </SheetTitle>
          <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Login</Button>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;
