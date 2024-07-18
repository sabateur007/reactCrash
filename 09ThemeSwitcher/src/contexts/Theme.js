//create context
import { createContext, useContext } from "react";

export const themecontext = createContext({           //themecontext naam se context variable create kiya
    thememode : "light",
    darktheme : ()=>{},
    lighttheme : ()=>{}
})

//provide context
export const Themeprovider = themecontext.Provider          //context provide initialize kiya taaki jahan isko use karen wahan context ki values de saken

//usecontext
export default function usetheme(){                      //play with themecontext values
    return useContext(themecontext)
}

