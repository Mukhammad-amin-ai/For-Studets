import { Route, Routes } from "react-router"
import { Header } from "../Header"
import { Layout } from "../Layout/Layout"

export const Home = () => {
    return(
        <div>
            <Layout>
                <Layout>
                    <Header/>
                  
                </Layout>
            </Layout>
        </div>
    )
}