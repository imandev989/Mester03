 // Use the client directive for using usePathname hook.
 'use client'

 // Use usePathname for catching route name.


 import { usePathname } from 'next/navigation';
import MapLayout from './[locale]/(location)/layout';
import RootLayout from './[locale]/layout';
 
 export const LayoutProvider = ({ children }) => {
     const pathname = usePathname();
     return (
         <>
             {pathname === "/" ? (<RootLayout/>) : ("")}
             
         </>
     )
 };