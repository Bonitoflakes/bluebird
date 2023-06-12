// import { Menu, MenuProps } from "antd";
// import { SideBarLinks } from "../../constants/Sidebarlinks";
// import { Link } from "react-router-dom";

// import styles from "../Sidebar/SidebarLeft.module.css";
// import { useConfig } from "../../hooks/useToken";

// // const item = SideBarLinks.map(({ label, icon, id }) => {
// //   return {
// //     icon: icon,
// //     label: label,
// //     key: id,
// //   };
// // });

// const CustomMenuIcon = ({ icon, label, isActive }) => {
//   return (
//     <img
//       src={icon}
//       style={{
//         height: "26.5px",
//         filter: isActive
//           ? "invert(47%) sepia(37%) saturate(5171%) hue-rotate(180deg) brightness(101%) contrast(106%)"
//           : "",
//       }}
//       alt={label}
//     />
//   );
// };

// const CustomMenuLabel = ({ label, isCollapsed }) => {
//   return (
//     <Link to={`/${label.toLowerCase()}`} style={{ display: "flex", alignItems: "center" }}>
//       <span
//         style={{
//           marginLeft: !isCollapsed ? "10px" : "0",
//           transition: "0.3s ease all",
//         }}
//       >
//         {isCollapsed ? "" : label}
//       </span>
//     </Link>
//   );
// };

// export const SidebarLeft = ({
//   darkMode,
//   activeMenu,
//   isCollapsed,
// }: {
//   darkMode: boolean;
//   activeMenu: number;
//   isCollapsed: boolean;
// }) => {
//   const { token } = useConfig();

//   // function renderMenuItem({ icon, label, id }: { icon: string; label: string; id: number }) {
//   //   const isActive = activeMenu === id;

//   //   return (
//   //     <Menu.Item
//   //       key={String(id)}
//   //       style={{
//   //         fontWeight: isActive ? "700" : "400",
//   //         background: isActive ? "#06acff3a" : "none",
//   //         color: token.colorPrimary,
//   //       }}
//   //       className={styles.menuItem}
//   //     >
//   //       <Link to={`/${label.toLowerCase()}`} style={{ display: "flex", alignItems: "center" }}>
//   //         <img
//   //           src={icon}
//   //           style={{
//   //             height: "26.5px",
//   //             filter: isActive
//   //               ? "invert(47%) sepia(37%) saturate(5171%) hue-rotate(180deg) brightness(101%) contrast(106%)"
//   //               : "",
//   //           }}
//   //           alt={label}
//   //         />
//   //         <span
//   //           style={{
//   //             marginLeft: !isCollapsed ? "10px" : "0",
//   //             transition: "0.3s ease all",
//   //           }}
//   //         >
//   //           {isCollapsed ? "" : label}
//   //         </span>
//   //       </Link>
//   //     </Menu.Item>
//   //   );
//   // }

//   function getItem(key: React.Key, label: React.ReactNode, icon: React.ReactNode): MenuItem {
//     const isActive = activeMenu === key;

//     return {
//       key,
//       icon: <CustomMenuIcon icon={icon} label={label} isActive={isActive} />,
//       label: <CustomMenuLabel label={label} isCollapsed={isCollapsed} />,
//     } as MenuItem;
//   }

//   const items: MenuItem[] = SideBarLinks.map(({ icon, label, id }) => {
//     return getItem(id, label, icon);
//   });

//   return (
//     <>
//       <Menu theme={darkMode ? "dark" : "light"} mode="vertical" items={items} />
//     </>
//   );
// };
