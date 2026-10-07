import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from "lucide-react"
import Image from "next/image"
  import Link from "next/link"

export default function Sidebar() {
  return (
    <div className=" lg:hidden ">
        <Sheet>
  <SheetTrigger>
  <Menu  className="p-2 hover:opacity-30 rounded-lg" size={50}/>
  </SheetTrigger>
  <SheetContent>
      <SheetTitle className=" shadow-xl p-3">
      <SheetClose asChild>
      <Link href="/" className="flex items-center">
      <Image alt="logo"  className="" src="/assets/cfg-logo000.png" width={50} height={50}/>
      <p className="text-blue-900">Cookey Franklins Group</p>
      </Link>
      </SheetClose>

      </SheetTitle>
          <div className="flex  ">
          <div className=" flex flex-col  w-full m-5  text-blue-600 font-bold  gap-8">
          <SheetClose asChild>
            <Link href="/consult">CFCL</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/contractor">Cfan-Contractor</Link>
            </SheetClose>

          <SheetClose asChild>
            <Link href="/oilEnergy">Cfoil Energy</Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/foundation">Foundation</Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </SheetClose>

          
          </div>
        </div>
        <SheetClose asChild>
        <Link href="/contact" className="bg-gradient-to-r from-gray-900 from-10% via-gray-600 via-30% to-gray-900 to-90% rounded-full m-5 text-white font-bold text-center p-3">Contact Us</Link>
          </SheetClose>

  </SheetContent>

</Sheet>


    </div>
  )
}  