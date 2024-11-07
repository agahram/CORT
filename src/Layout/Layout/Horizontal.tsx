import React, { useEffect, useState } from 'react'
import { Col, Collapse, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withRouter from 'Common/withRouter';

// nav
import Navdata from 'Layout/LayoutMenuData';

//i18n
import { withTranslation } from "react-i18next";

interface MenuItem {
    id: string;
    label: string;
    icon: string;
    subItems: any[];
    link: string;
    stateVariables: boolean;
    click: (e: React.MouseEvent) => void;
}

interface NavbarProps {
    language: string;
}

const Horizontal: React.FC<NavbarProps> = (props: any) => {

    const navData = Navdata()?.props.children;
    const [isMoreMenu, setIsMoreMenu] = useState(false);
    const [menuItems, setMenuItems] = useState<MenuItem[]>(navData);

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        const menuPosSetOnClicknHover = () => {
            const isElements = document.querySelectorAll("#navbar-nav > li.nav-item");
            Array.from(isElements).forEach(function (item) {
                item.addEventListener("click", menuItem, false);
                item.addEventListener("mouseover", menuItem, false);
            });
        };
        const menuItem = (e: any) => {
            const dropdownMenu = e.target;
            const subMenus = dropdownMenu.nextElementSibling || dropdownMenu.parentElement.nextElementSibling;
            if (dropdownMenu && subMenus) {
                const dropdownOffset = subMenus.getBoundingClientRect();
                const dropdownWidth = subMenus.offsetWidth;
                const dropdownHeight = subMenus.offsetHeight;
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;
                const maxDropdownX = dropdownOffset.left + dropdownWidth + 100;
                const maxDropdownY = dropdownOffset.top + dropdownHeight + 100;
                const isDropdownOffScreen = maxDropdownX > screenWidth || maxDropdownY > screenHeight;
                if (isDropdownOffScreen) {
                    if (subMenus.classList.contains("menu-dropdown")) {
                        subMenus.classList.add("dropdown-custom-right");
                    }
                }
            }
        };
        menuPosSetOnClicknHover();
        return () => {
            const isElements = document.querySelectorAll("#navbar-nav > li.nav-item");
            Array.from(isElements).forEach(function (item) {
                item.removeEventListener("click", menuItem, false);
                item.removeEventListener("mouseover", menuItem, false);
            });
        }; 
    }, []);

    useEffect(() => {
        const handleResize = () => {
            // Create the "More" menu item and add the hidden items to its subItems
            const navbarHeader: any = document.getElementById("navbar-header");
            const navbarNav: any = document.getElementById("navbar-nav");
            const headerLogo = document.getElementById("header-logo")?.clientWidth ?? 0;
            const headerItems = document.getElementById("header-items")?.clientWidth ?? 0;
            const fullWidthOfMenu = navbarHeader?.clientWidth - headerLogo - headerItems - 170;
            const menuWidth = fullWidthOfMenu || 0;
            let totalItemsWidth = 0;
            let visibleItems = [];
            let hiddenItems: any = [];
            for (let i = 0; i < navData.length; i++) {
                const itemWidth = navbarNav?.children[i]?.offsetWidth;
                totalItemsWidth += itemWidth;
                if (totalItemsWidth <= menuWidth - 50 || window.innerWidth < 1024) {
                    visibleItems.push(navData[i]);
                } else {
                    hiddenItems.push(navData[i]);
                }
            }
            // If hiddenItems length > 0, show the "More" menu
            if (hiddenItems.length > 0) {
                const moreMenuItem = {
                    id: "more",
                    label: "More",
                    icon: 'ri-briefcase-2-line',
                    subItems: hiddenItems,
                    link: "/#",
                    stateVariables: isMoreMenu,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsMoreMenu(!isMoreMenu);
                    },
                };
                const updatedMenuItems = [...visibleItems, moreMenuItem];
                setMenuItems(updatedMenuItems);
            } else {
                setMenuItems(visibleItems);
            }
        }
        setTimeout(handleResize, 200);
        const delayedResize = () => {
            setTimeout(handleResize, 200);
        };

        window.addEventListener('resize', delayedResize);
        return () => {
            window.removeEventListener('resize', delayedResize);
        };
    }, [isMoreMenu, props.language, navData]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const initMenu = () => {
            const pathName = process.env.PUBLIC_URL + props.router.location.pathname;
            const ul: any = document.getElementById("navbar-nav");
            const items = ul.getElementsByTagName("a");
            let itemsArray = [...items]; // converts NodeList to Array
            removeActivation(itemsArray);
            let matchingMenuItem = itemsArray.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };
        initMenu();
    }, [props.router.location.pathname]);

    function activateParentDropdown(item: any) {
        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

        if (parentCollapseDiv) {

            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                var parentElementDiv = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling;
                if (parentElementDiv)
                    if (parentElementDiv.closest(".collapse"))
                        parentElementDiv.closest(".collapse").classList.add("show");
                parentElementDiv.classList.add("active");
                var parentElementSibling = parentElementDiv.parentElement.parentElement.parentElement.previousElementSibling;
                if (parentElementSibling) {
                    parentElementSibling.classList.add("active");
                }
            }
            return false;
        }
        return false;
    }

    const removeActivation = (items: any) => {
        let actiItems = items.filter((x: any) => x.classList.contains("active"));

        actiItems.forEach((item: any) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    item.setAttribute("aria-expanded", false);
                }
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });
    };

    return (
        <React.Fragment>
            <>
                {(menuItems || []).map((item: any, key: number) => {
                    return (
                        <React.Fragment key={key}>
                            {/* Main Header */}
                            {!item['isHeader'] ?
                                (item.subItems ? (
                                    <li className="nav-item">
                                        <Link
                                            onClick={item.click}
                                            className="nav-link menu-link"
                                            to={item.link ? item.link : "/#"}
                                            data-bs-toggle="collapse"
                                            aria-expanded={item.stateVariables}
                                        >
                                            <i className={item.icon}></i> <span data-key="t-apps">{props.t(item.label)}</span>
                                        </Link>
                                        <Collapse
                                            in={item.stateVariables}
                                        >
                                            {/* subItms  */}
                                            {item.id === "bootstrapui" && item.subItems.length > 23 ? (
                                                <div className='menu-dropdown mega-dropdown-menu'>
                                                    <Row id="sidebarUI">
                                                        {item.subItems && ((item.subItems || []).map((subItem: any, key: number) => (
                                                            <React.Fragment key={key}>
                                                                {item.subItems?.length / 3 === 8 ? (
                                                                    <Col lg={4}>
                                                                        <ul className="nav nav-sm flex-column">
                                                                            <li className="nav-item">
                                                                                <Link to={item.subItems[key].link} className="nav-link">{item.subItems[key].label}</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </Col>
                                                                ) : (
                                                                    <Col lg={4}>
                                                                        <ul className="nav nav-sm flex-column">
                                                                            <li className="nav-item">
                                                                                <Link to={item.subItems[key].link} className="nav-link">{item.subItems[key].label}</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </Col>
                                                                )
                                                                }
                                                            </React.Fragment>
                                                        ))
                                                        )}
                                                    </Row>
                                                </div>
                                            ) : (
                                                <ul className="nav nav-sm flex-column test menu-dropdown">
                                                    {item.subItems && ((item.subItems || []).map((subItem: any, key: number) => (
                                                        <React.Fragment key={key}>
                                                            {!subItem.isHeader ?
                                                                <React.Fragment>
                                                                    {!subItem.subItems ? (
                                                                        <li className="nav-item">
                                                                            <Link to={subItem.link ? subItem.link : "/#"} className="nav-link">
                                                                                {subItem.icon ? <React.Fragment><i className={subItem.icon}></i> <span>{props.t(subItem.label)}</span></React.Fragment> : props.t(subItem.label)}
                                                                            </Link>
                                                                        </li>
                                                                    ) : (
                                                                        <li className="nav-item">
                                                                            <Link
                                                                                onClick={subItem.click}
                                                                                className="nav-link"
                                                                                to="/#"
                                                                                data-bs-toggle="collapse"
                                                                            >
                                                                                {subItem.icon ? <React.Fragment><i className={subItem.icon}></i> <span>{props.t(subItem.label)}</span></React.Fragment> : props.t(subItem.label)}
                                                                            </Link>

                                                                            <Collapse className="menu-dropdown" in={subItem.stateVariables}>
                                                                                {subItem.id === "bootstrapui" && subItem.subItems.length > 13 ?
                                                                                    (<React.Fragment>
                                                                                        <div className="menu-dropdown mega-dropdown-menu dropdown-custom-right">
                                                                                            <Row>
                                                                                                {subItem.subItems && ((subItem.subItems || []).map((subItems: any, key: number) => (
                                                                                                    <React.Fragment key={key}>
                                                                                                        {key % 2 === 0 ? (
                                                                                                            <Col lg={4}>
                                                                                                                <ul className="nav nav-sm flex-column">
                                                                                                                    <li className="nav-item">
                                                                                                                        <Link to={subItem.subItems[key].link} className="nav-link">{subItem.subItems[key].label}</Link>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </Col>
                                                                                                        ) : (
                                                                                                            <Col lg={4}>
                                                                                                                <ul className="nav nav-sm flex-column">
                                                                                                                    <li className="nav-item">
                                                                                                                        <Link to={subItem.subItems[key].link} className="nav-link">{subItem.subItems[key].label}</Link>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </Col>
                                                                                                        )
                                                                                                        }
                                                                                                    </React.Fragment>
                                                                                                ))
                                                                                                )}
                                                                                            </Row>
                                                                                        </div>
                                                                                    </React.Fragment>
                                                                                    )
                                                                                    : (<ul className="nav nav-sm flex-column" id="sidebarEcommerce">
                                                                                        {/* child subItms  */}
                                                                                        {subItem.subItems && (
                                                                                            (subItem.subItems || []).map((subChildItem: any, key: number) => (
                                                                                                <React.Fragment key={key} >
                                                                                                    {!subChildItem.subItems ? (
                                                                                                        <li className="nav-item">
                                                                                                            <Link to={subChildItem.link ? subChildItem.link : "/#"} className="nav-link">
                                                                                                                {props.t(subChildItem.label)}
                                                                                                            </Link>
                                                                                                        </li>) : (
                                                                                                        <li className="nav-item">
                                                                                                            <Link
                                                                                                                onClick={subChildItem.click}
                                                                                                                className="nav-link"
                                                                                                                to="/#"
                                                                                                                data-bs-toggle="collapse"
                                                                                                            > {props.t(subChildItem.label)}
                                                                                                            </Link>
                                                                                                            <Collapse className="menu-dropdown" in={subItem.stateVariables}>
                                                                                                                <ul className="nav nav-sm flex-column" id="sidebarEcommerce">
                                                                                                                    {/* child subItms  */}
                                                                                                                    {subChildItem.subItems && (
                                                                                                                        (subChildItem.subItems || []).map((subSubChildItem: any, key: number) => (
                                                                                                                            <React.Fragment key={key}>
                                                                                                                                {subSubChildItem.subItems ?
                                                                                                                                    (<li className="nav-item apex" key={key}>
                                                                                                                                        <Link
                                                                                                                                            to={subSubChildItem.link ? subSubChildItem.link : "/#"}
                                                                                                                                            className="nav-link"
                                                                                                                                            onClick={subSubChildItem.click}
                                                                                                                                            data-bs-toggle="collapse"
                                                                                                                                        >
                                                                                                                                            {props.t(subSubChildItem.label)}
                                                                                                                                        </Link>
                                                                                                                                        {subSubChildItem.subItems && <Collapse className="collapse menu-dropdown" in={subSubChildItem.stateVariables}>
                                                                                                                                            <ul className="nav nav-sm flex-column">
                                                                                                                                                {subSubChildItem.subItems && (subSubChildItem.subItems || []).map((subSubChildItem: any, key: number) => (<li className="nav-item" key={key}>
                                                                                                                                                    <Link to={subSubChildItem.link ? subSubChildItem.link : "/#"} className="nav-link">{props.t(subSubChildItem.label)}</Link>
                                                                                                                                                </li>))}
                                                                                                                                            </ul>
                                                                                                                                        </Collapse>}
                                                                                                                                    </li>)
                                                                                                                                    : (<li className="nav-item">
                                                                                                                                        <Link to={subSubChildItem.link ? subSubChildItem.link : "/#"} className="nav-link">{props.t(subSubChildItem.label)}</Link>
                                                                                                                                    </li>)}
                                                                                                                            </React.Fragment>
                                                                                                                        ))
                                                                                                                    )}
                                                                                                                </ul>
                                                                                                            </Collapse>
                                                                                                        </li>
                                                                                                    )}
                                                                                                </React.Fragment>
                                                                                            )
                                                                                            )
                                                                                        )}
                                                                                    </ul>)}
                                                                            </Collapse>
                                                                        </li>
                                                                    )}
                                                                </React.Fragment> : <li className="menu-title"><span data-key="t-menu">{props.t(item.label)}</span></li>}
                                                        </React.Fragment>
                                                    ))
                                                    )}
                                                </ul>
                                            )}
                                        </Collapse>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link menu-link"
                                            to={item.link ? item.link : "/#"}>
                                            <i className={item.icon}></i> <span>{props.t(item.label)}</span>
                                        </Link>
                                    </li>
                                ))
                                : (<li className="menu-title"><span data-key="t-menu">{props.t(item.label)}</span></li>)}
                        </React.Fragment>
                    );
                })}
            </>
            {/* menu Items */}
        </React.Fragment >
    );
};

export default withRouter(withTranslation()(Horizontal));