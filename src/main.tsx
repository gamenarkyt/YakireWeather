import React from "react"
import ReactDOM from "react-dom/client"
import "@radix-ui/themes/styles.css"
import "./styles/styles.scss"
import { RouterProvider } from "react-router-dom"
import { router } from "@/pages"
import { Theme } from "@radix-ui/themes"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
