import React from 'react';
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../../features/navigation/hooks/useMediaQuery";
import { WidthMediaQueries } from "../../features/navigation/types";
import { Container } from "./Container";
import { Sidebar } from "./Sidebar/Sidebar";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import { MobileMenuModal } from "./MobileMenuModal/MobileMenuModal";
import { FinanceFormModal } from "../../features/forms/components/FinanceFormModal/FinanceFormModal";
import { Footer } from "./Footer";

export const DashboardLayout = () => {
    const isDesktop = useMediaQuery( WidthMediaQueries.md );

    return (
        <>
            { !isDesktop && <MobileHeader/> }

            <main className="d-flex flex-1">
                <div className="main d-flex flex-1">
                    { isDesktop && <Sidebar/> }

                    <section className="d-flex flex-col w-100 container__wrapper">
                        <Container>
                            <Outlet/>
                        </Container>
                    </section>

                    { !isDesktop && <MobileMenuModal/> }

                    <FinanceFormModal/>

                </div>
            </main>

            { !isDesktop && <Footer/> }
        </>
    );
}
