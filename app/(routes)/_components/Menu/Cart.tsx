import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {  ShoppingBagIcon } from 'lucide-react'


const CartMenu = () => {
  return (
    <div>
         <Sheet>
        <SheetTrigger>
          <ShoppingBagIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col mt-8 space-y-3">
            Emty card
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default CartMenu