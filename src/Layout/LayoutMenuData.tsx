import React, { useEffect, useState, useMemo } from "react";

const Navdata = () => {
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isCrypto, setIsCrypto] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [isAuthentication, setIsAuthentication] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isApp, setIsApp] = useState(false);

  // Components
  const [isBootstrapUi, setIsBootstrapUi] = useState(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState(false);
  const [isWidgets, setIsWidgets] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [isInvoice, setIsInvoice] = useState(false);
  const [isShipping, setIsShipping] = useState(false);
  const [isLocalization, setIsLocalization] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  // Authentication
  const [isError, setIsError] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  useEffect(() => {
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApp(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "Bootstrap UI") {
      setIsBootstrapUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Widgets") {
      setIsWidgets(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "Chat") {
      setIsChat(false);
    }
    if (iscurrentState !== "Crypto") {
      setIsCrypto(false);
    }
    if (iscurrentState !== "Customers") {
      setIsCustomer(false);
    }
    if (iscurrentState !== "Authentication") {
      setIsAuthentication(false);
    }
    if (iscurrentState !== "Orders") {
      setIsOrder(false);
    }
    if (iscurrentState !== "Invoice") {
      setIsInvoice(false);
    }
    if (iscurrentState !== "Shipping") {
      setIsShipping(false);
    }
    if (iscurrentState !== "Localization") {
      setIsLocalization(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Authentication") {
      setIsPages(true);
    }
    if (iscurrentState === "Errors") {
      setIsPages(true);
    }
    if (iscurrentState === "Chat") {
      setIsApp(true);
    }
    if (iscurrentState === "Crypto") {
      setIsApp(true);
    }
    if (iscurrentState === "Customers") {
      setIsApp(true);
    }
    if (iscurrentState === "Invoice") {
      setIsApp(true);
    }
  }, [
    iscurrentState,
    isDashboard,
    isCrypto,
    isChat,
    isCustomer,
    isOrder,
    isInvoice,
    isShipping,
    isLocalization,
    isAuth,
    isMultiLevel,
    isAuthentication,
    isPages,
    isApp,
    isBootstrapUi,
    isAdvanceUi,
    isWidgets,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
  ]);

  const menuItems: any = useMemo(
    () => [
      {
        label: "Menu",
        isHeader: true,
      },
      {
        id: "home page",
        label: "Home Page",
        icon: "ph-layout",
        link: "/#",
        click: function (e: any) {
          e.preventDefault();
          setIsDashboard(!isDashboard);
          setIscurrentState("Dashboard");
        },
        stateVariables: isDashboard,
        // subItems: [
        //     {
        //         id: "analytics",
        //         label: "Analytics",
        //         link: "/#",
        //         parentId: "dashboard",
        //     },
        //     {
        //         id: "crypto",
        //         label: "Crypto",
        //         link: "/#",
        //         parentId: "dashboard",
        //     },
        //     {
        //         id: "ecommerce",
        //         label: "Ecommerce",
        //         link: "/dashboard",
        //         parentId: "dashboard",
        //     },
        // ],
      },

      // app
      {
        label: "Contests",
        isHeader: true,
      },
      {
        // id: "app",
        label: "Contests",
        icon: "ph-gauge",
        // icon: "ph-layout",
        link: "/#",
        click: function (e: any) {
          e.preventDefault();
          setIsApp(!isApp);
          setIscurrentState("Apps");
        },
        stateVariables: isApp,
        // subItems: [
        //   {
        //     id: "calendar",
        //     label: "Calendar",
        //     link: "/#",
        //     parentId: "app",
        //   },
        //   {
        //     id: "chat",
        //     label: "Chat",
        //     link: "/#",
        //     click: function (e: any) {
        //       e.preventDefault();
        //       setIsChat(!isChat);
        //       setIscurrentState("Chat");
        //     },
        //     stateVariables: isChat,
        //     subItems: [
        //       { id: 1, label: "Single Chat", link: "/#", parentId: "chat" },
        //       {
        //         id: 2,
        //         label: "Video Conference",
        //         link: "/#",
        //         parentId: "chat",
        //       },
        //     ],
        //   },
        //   {
        //     id: "crypto",
        //     label: "Crypto",
        //     link: "/#",
        //     click: function (e: any) {
        //       e.preventDefault();
        //       setIsCrypto(!isCrypto);
        //       setIscurrentState("Crypto");
        //     },
        //     stateVariables: isCrypto,
        //     subItems: [
        //       { id: 1, label: "Marketplace", link: "/#", parentId: "crypto" },
        //       { id: 2, label: "Exchange", link: "/#", parentId: "crypto" },
        //       { id: 3, label: "ICO", link: "/#", parentId: "crypto" },
        //       { id: 4, label: "Transactions", link: "/#", parentId: "crypto" },
        //       { id: 5, label: "Coin Overview", link: "/#", parentId: "crypto" },
        //     ],
        //   },
        //   {
        //     id: "customers",
        //     label: "Customers",
        //     link: "/#",
        //     click: function (e: any) {
        //       e.preventDefault();
        //       setIsCustomer(!isCustomer);
        //       setIscurrentState("Customers");
        //     },
        //     stateVariables: isCustomer,
        //     subItems: [
        //       { id: 1, label: "List View", link: "/#", parentId: "customers" },
        //       { id: 2, label: "Overview", link: "/#", parentId: "customers" },
        //     ],
        //   },
        //   {
        //     id: "file-manager",
        //     label: "File Manager",
        //     link: "/#",
        //     parentId: "app",
        //   },
        //   {
        //     id: "invoice",
        //     label: "Invoice",
        //     link: "/#",
        //     click: function (e: any) {
        //       e.preventDefault();
        //       setIsInvoice(!isInvoice);
        //       setIscurrentState("Invoice");
        //     },
        //     stateVariables: isInvoice,
        //     subItems: [
        //       {
        //         id: "listview",
        //         label: "List View",
        //         link: "/#",
        //         parentId: "invoice",
        //       },
        //       {
        //         id: "createinvoice",
        //         label: "Create Invoice",
        //         link: "/#",
        //         parentId: "invoice",
        //       },
        //       {
        //         id: "overview",
        //         label: "Overview",
        //         link: "/#",
        //         parentId: "invoice",
        //       },
        //     ],
        //   },
        //   {
        //     id: "notes",
        //     label: "Notes",
        //     link: "/apps-notes",
        //     parentId: "app",
        //   },
        //   {
        //     id: "todo",
        //     label: "To Do",
        //     link: "/#",
        //     parentId: "app",
        //   },
        // ],
      },
      {
        label: "Blog",
        isHeader: true,
      },
      {
        label: "Blog",
        icon: "ph-map-trifold",
        link: "/#",
        click: function (e: any) {
          e.preventDefault();
          setIsPages(!isPages);
          setIscurrentState("Pages");
        },
        stateVariables: isPages,
        // subItems: [
        //   {
        //     id: "starter",
        //     label: "Starter",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "profile",
        //     label: "Profile",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "timeline",
        //     label: "Timeline",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "faqs",
        //     label: "FAQs",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "pricing",
        //     label: "Pricing",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "authentication",
        //     label: "Authentication",
        //     link: "/#",
        //     click: function (e: any) {
        //       e.preventDefault();
        //       setIsAuthentication(!isAuthentication);
        //       setIscurrentState("Authentication");
        //     },
        //     stateVariables: isAuthentication,
        //     subItems: [
        //       {
        //         id: "signin",
        //         label: "Sign In",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //       {
        //         id: "sign up",
        //         label: "Sign Up",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //       {
        //         id: "password-reset",
        //         label: "Password Reset",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //       {
        //         id: "password-create",
        //         label: "Password Create",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //       {
        //         id: "lockscreen",
        //         label: "Lock Screen",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //       {
        //         id: "logout",
        //         label: "Logout",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //       {
        //         id: "successmessage",
        //         label: "Success Message",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //       {
        //         id: "verification",
        //         label: "Two Step Verification",
        //         link: "/#",
        //         parentId: "authentication",
        //       },
        //     ],
        //   },
        //   {
        //     id: "error",
        //     label: "Errors",
        //     link: "/#",
        //     click: function (e: any) {
        //       e.preventDefault();
        //       setIsError(!isError);
        //       setIscurrentState("Errors");
        //     },
        //     stateVariables: isError,
        //     subItems: [
        //       {
        //         id: 1,
        //         label: "404 Error",
        //         link: "/auth-404",
        //         parentId: "Errors",
        //       },
        //       {
        //         id: 2,
        //         label: "500",
        //         link: "/auth-500",
        //         parentId: "Errors",
        //       },
        //       {
        //         id: 3,
        //         label: "503",
        //         link: "/auth-503",
        //         parentId: "Errors",
        //       },
        //       {
        //         id: 4,
        //         label: "Offline Page",
        //         link: "/auth-offline",
        //         parentId: "Errors",
        //       },
        //     ],
        //   },
        //   {
        //     id: "maintenace",
        //     label: "Maintenance",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "comingsoon",
        //     label: "Coming Soon",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "privacypolicy",
        //     label: "Privacy Policy",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        //   {
        //     id: "terms",
        //     label: "Terms & Conditions",
        //     link: "/#",
        //     parentId: "pages",
        //   },
        // ],
      },

      // Components
      {
        label: "Rating",
        isHeader: true,
      },
      {
        id: "rating",
        label: "Rating",
        icon: "ri-file-list-3-line",
        link: "/#",
        click: function (e: any) {
          e.preventDefault();
          setIsBootstrapUi(!isBootstrapUi);
          setIscurrentState("Bootstrap UI");
        },
        stateVariables: isBootstrapUi,
        // subItems: [
        //   {
        //     id: "accordion",
        //     label: "Accordions & Collapse",
        //     link: "/#",
        //     parentId: "boostrapui",
        //   },
        //   { id: 2, label: "Embed Video", link: "/#", parentId: "boostrapui" },
        //   { id: 3, label: "Notifications", link: "/#", parentId: "boostrapui" },
        //   { id: 4, label: "Alerts", link: "/#", parentId: "boostrapui" },
        //   { id: 5, label: "General", link: "/#", parentId: "boostrapui" },
        //   { id: 6, label: "Offcanvas", link: "/#", parentId: "boostrapui" },
        //   { id: 7, label: "Badges", link: "/#", parentId: "boostrapui" },
        //   { id: 8, label: "Grid", link: "/#", parentId: "boostrapui" },
        //   { id: 9, label: "Placeholders", link: "/#", parentId: "boostrapui" },
        //   { id: 10, label: "Buttons", link: "/#", parentId: "boostrapui" },
        //   { id: 11, label: "Images", link: "/#", parentId: "boostrapui" },
        //   { id: 12, label: "Progress", link: "/#", parentId: "boostrapui" },
        //   { id: 13, label: "Cards", link: "/#", parentId: "boostrapui" },
        //   { id: 14, label: "Links", link: "/#", parentId: "boostrapui" },
        //   { id: 15, label: "Scrollspy", link: "/#  ", parentId: "boostrapui" },
        //   { id: 16, label: "Carousel", link: "/#", parentId: "boostrapui" },
        //   { id: 17, label: "Lists", link: "/#", parentId: "boostrapui" },
        //   { id: 18, label: "Tabs", link: "/#", parentId: "boostrapui" },
        //   { id: 19, label: "Colors", link: "/#", parentId: "boostrapui" },
        //   { id: 20, label: "Media Object", link: "/#", parentId: "boostrapui" },
        //   { id: 21, label: "Typography", link: "/#", parentId: "boostrapui" },
        //   { id: 22, label: "Dropdowns", link: "/#", parentId: "boostrapui" },
        //   { id: 23, label: "Modals", link: "/#", parentId: "boostrapui" },
        //   { id: 24, label: "Utilities", link: "/#", parentId: "boostrapui" },
        // ],
      },
      //   {
      //     id: "advanceui",
      //     label: "Advance UI",
      //     icon: "ph-stack-simple",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsAdvanceUi(!isAdvanceUi);
      //       setIscurrentState("AdvanceUi");
      //     },
      //     stateVariables: isAdvanceUi,
      //     subItems: [
      //       {
      //         id: "cropimage",
      //         label: "Crop Images",
      //         link: "/#",
      //         parentId: "advanceui",
      //       },
      //       { id: 2, label: "Highlight", link: "/#", parentId: "advanceui" },
      //       { id: 3, label: "Ratings", link: "/#", parentId: "advanceui" },
      //       { id: 4, label: "Scrollbar", link: "/#", parentId: "advanceui" },
      //       { id: 5, label: "Swiper Slider", link: "/#", parentId: "advanceui" },
      //     ],
      //   },
      //   {
      //     id: "widgets",
      //     label: "Widgets",
      //     icon: "ph-paint-brush-broad",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsWidgets(!isWidgets);
      //       setIscurrentState("Widgets");
      //     },
      //   },
      //   {
      //     id: "forms",
      //     label: "Forms",
      //     icon: "ri-file-list-3-line",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsForms(!isForms);
      //       setIscurrentState("Forms");
      //     },
      //     stateVariables: isForms,
      //     subItems: [
      //       {
      //         id: "basicElements",
      //         label: "Basic Elements",
      //         link: "/#",
      //         parentId: "forms",
      //       },
      //       { id: 2, label: "Form Select", link: "/#", parentId: "forms" },
      //       {
      //         id: 3,
      //         label: "Checkboxes & Radios",
      //         link: "/#",
      //         parentId: "forms",
      //       },
      //       { id: 4, label: "Pickers", link: "/#", parentId: "forms" },
      //       { id: 5, label: "Input Masks", link: "/#", parentId: "forms" },
      //       { id: 6, label: "Advanced", link: "/#", parentId: "forms" },
      //       { id: 7, label: "Range Slider", link: "/#", parentId: "forms" },
      //       { id: 8, label: "Validation", link: "/#", parentId: "forms" },
      //       { id: 9, label: "Wizard", link: "/#", parentId: "forms" },
      //       { id: 10, label: "Editors", link: "/#", parentId: "forms" },
      //       { id: 11, label: "File Uploads", link: "/#", parentId: "forms" },
      //       { id: 12, label: "Form Layouts", link: "/#", parentId: "forms" },
      //     ],
      //   },
      //   {
      //     id: "tables",
      //     label: "Tables",
      //     icon: "ph-table",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsTables(!isTables);
      //       setIscurrentState("Tables");
      //     },
      //     stateVariables: isTables,
      //     subItems: [
      //       {
      //         id: "basicTables",
      //         label: "Basic Tables",
      //         link: "/#",
      //         parentId: "tables",
      //       },
      //       { id: 2, label: "React Tables", link: "/#", parentId: "tables" },
      //     ],
      //   },
      //   {
      //     id: "apexcharts",
      //     label: "Apexcharts",
      //     icon: "ph-chart-pie-slice",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsCharts(!isCharts);
      //       setIscurrentState("Charts");
      //     },
      //     stateVariables: isCharts,
      //     subItems: [
      //       { id: 1, label: "Area", link: "/#", parentId: "apexcharts" },
      //       { id: 2, label: "Bar", link: "/#", parentId: "apexcharts" },
      //       { id: 3, label: "Boxplot", link: "/#", parentId: "apexcharts" },
      //       { id: 4, label: "Bubble", link: "/#", parentId: "apexcharts" },
      //       { id: 5, label: "Candlestick", link: "/#", parentId: "apexcharts" },
      //       { id: 6, label: "Column", link: "/#", parentId: "apexcharts" },
      //       { id: 7, label: "Heatmap", link: "/#", parentId: "apexcharts" },
      //       { id: 8, label: "Line", link: "/#", parentId: "apexcharts" },
      //       { id: 9, label: "Mixed", link: "/#", parentId: "apexcharts" },
      //       { id: 10, label: "Pie", link: "/#", parentId: "apexcharts" },
      //       { id: 11, label: "Polar Area", link: "/#", parentId: "apexcharts" },
      //       { id: 12, label: "Radar", link: "/#", parentId: "apexcharts" },
      //       { id: 13, label: "Radialbar", link: "/#", parentId: "apexcharts" },
      //       { id: 14, label: "Range Area", link: "/#", parentId: "apexcharts" },
      //       { id: 15, label: "Scatter", link: "/#", parentId: "apexcharts" },
      //       { id: 16, label: "Timeline", link: "/#", parentId: "apexcharts" },
      //       { id: 17, label: "Treemap", link: "/#", parentId: "apexcharts" },
      //     ],
      //   },
      //   {
      //     id: "icons",
      //     label: "Icons",
      //     icon: "ph-traffic-cone",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsIcons(!isIcons);
      //       setIscurrentState("Icons");
      //     },
      //     stateVariables: isIcons,
      //     subItems: [
      //       { id: 1, label: "Bootstrap", link: "/#", parentId: "icons" },
      //       { id: 2, label: "BoxIcons", link: "/#", parentId: "icons" },
      //       { id: 3, label: "Phosphor", link: "/#", parentId: "icons" },
      //       { id: 4, label: "Remix", link: "/#", parentId: "icons" },
      //     ],
      //   },
      //   {
      //     id: "maps",
      //     label: "Maps",
      //     icon: "ph-map-trifold",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsMaps(!isMaps);
      //       setIscurrentState("Maps");
      //     },
      //     stateVariables: isMaps,
      //     subItems: [
      //       {
      //         id: "googleMaps",
      //         label: "Google",
      //         link: "/#",
      //         parentId: "maps",
      //       },
      //     ],
      //   },

      //   {
      //     id: "userprofile",
      //     label: "User Profile",
      //     icon: "ph-address-book",
      //     link: "/#",
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsMultiLevel(!isMultiLevel);
      //       setIscurrentState("MuliLevel");
      //     },
      //     stateVariables: isMultiLevel,
      // subItems: [
      //   {
      //     id: "level1.1",
      //     label: "Level 1.1",
      //     link: "/#",
      //     parentId: "multilevel",
      //   },
      //   {
      //     id: "level1.2",
      //     label: "Level 1.2",
      //     link: "/#",
      //     isChildItem: true,
      //     click: function (e: any) {
      //       e.preventDefault();
      //       setIsLevel1(!isLevel1);
      //     },
      //     stateVariables: isLevel1,
      //     childItems: [
      //       { id: 1, label: "Level 2.1", link: "/#" },
      //       {
      //         id: "level2.2",
      //         label: "Level 2.2",
      //         link: "/#",
      //         isChildItem: true,
      //         click: function (e: any) {
      //           e.preventDefault();
      //           setIsLevel2(!isLevel2);
      //         },
      //         stateVariables: isLevel2,
      //         childItems: [
      //           { id: 1, label: "Level 3.1", link: "/#" },
      //           { id: 2, label: "Level 3.2", link: "/#" },
      //         ],
      //       },
      //     ],
      //   },
      // ],
      //   },
    ],
    [
      isError,
      isLevel1,
      isLevel2,
      isDashboard,
      isCrypto,
      isChat,
      isCustomer,
      isInvoice,
      isMultiLevel,
      isAuthentication,
      isPages,
      isApp,
      isBootstrapUi,
      isAdvanceUi,
      isWidgets,
      isForms,
      isTables,
      isCharts,
      isIcons,
      isMaps,
    ]
  );
  return <React.Fragment>{menuItems}</React.Fragment>;
};

export default Navdata;
