import React from 'react';
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { WidthMediaQueries } from "../../constants/breakpoints";
import { Container } from "./Container";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import { MobileMenuModal } from "./MobileMenuModal/MobileMenuModal";
import { FinanceFormModal } from "../forms/FinanceFormModal/FinanceFormModal";

export const DashboardLayout = () => {
    const isDesktop = useMediaQuery( WidthMediaQueries.md );

    return (
        <div className="main d-flex flex-1">

            { isDesktop && <Sidebar/>}

            <div className="d-flex flex-col w-full">
                <Header>
                    { !isDesktop && <MobileHeader /> }
                </Header>

                <Container>
                    <Outlet/>
                </Container>
            </div>

            { !isDesktop && <MobileMenuModal/> }

            <FinanceFormModal/>
        </div>
    );
}
