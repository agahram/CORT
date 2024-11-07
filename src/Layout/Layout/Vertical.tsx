import withRouter from "Common/withRouter";
import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import Navdata from "../LayoutMenuData";
import { Link } from "react-router-dom";
import { Col, Collapse, Row } from "react-bootstrap";

interface NavbarProps {
    language: string;
    layoutType: any;
}

const Vertical: React.FC<NavbarProps> = (props: any) => {

    const navData = Navdata()?.props.children;;

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
        console.log('item.classList.add("active")',item);
        
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
        console.log('parentCollapseDiv', parentCollapseDiv);
        

        if (parentCollapseDiv) {

            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            // console.log("parentCollapseDiv.parentElement.children[0]",parentCollapseDiv.parentElement.children[0])
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
                {(navData || []).map((item: any, key: number) => {
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
                                            // className="menu-dropdown"
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
                                                <div className="menu-dropdown">
                                                    <ul className="nav nav-sm flex-column">
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
                                                                                    aria-expanded={subItem.stateVariables}
                                                                                >
                                                                                    {subItem.icon ? <React.Fragment><i className={subItem.icon}></i> <span>{props.t(subItem.label)}</span></React.Fragment> : props.t(subItem.label)}
                                                                                </Link>

                                                                                <Collapse
                                                                                    className="menu-dropdown"
                                                                                    in={subItem.stateVariables}>
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
                                                                                        : (
                                                                                            <div>
                                                                                                <ul className="nav nav-sm flex-column" id="sidebarEcommerce">
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
                                                                                                                        <Collapse
                                                                                                                            aria-expanded={subItem.stateVariables}
                                                                                                                            in={subItem.stateVariables}>
                                                                                                                            <div className="menu-dropdown">
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
                                                                                                                            </div>
                                                                                                                        </Collapse>
                                                                                                                    </li>
                                                                                                                )}
                                                                                                            </React.Fragment>
                                                                                                        )
                                                                                                        )
                                                                                                    )}
                                                                                                </ul>
                                                                                            </div>
                                                                                        )}
                                                                                </Collapse>
                                                                            </li>
                                                                        )}
                                                                    </React.Fragment> :
                                                                    <li className="menu-title">
                                                                        <i className="ri-more-fill"></i>
                                                                        <span data-key="t-menu">{props.t(item.label)}</span>
                                                                    </li>}
                                                            </React.Fragment>
                                                        ))
                                                        )}
                                                    </ul>
                                                </div>
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
                                : (<li className="menu-title">
                                    <i className="ri-more-fill"></i>
                                    <span data-key="t-menu">{props.t(item.label)}</span>
                                </li>)}
                        </React.Fragment>
                    );
                })}
            </>
            {/* menu Items */}
        </React.Fragment >
    );
}

export default withRouter(withTranslation()(Vertical));