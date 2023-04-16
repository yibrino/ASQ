// import React from 'react';
// import styles from './DropdownMenu.module.css';

// const menuItems = [
//     {
//        link: "/",
//         display: "Home",
//       },
//       {
//        link: "#about",
//         display: "About",
//       },
//       {
//        link: "#services",
//         display: "Services",
//       },
//       {
//        link: "#portfolio",
//         display: "Portfolio",
//       },
//       {
//        link: "#contact",
//         display: "Contact",
//       },
//   {
//     display: 'Services',
//     submenu: [
//       { display: 'Web Development', link: '/services/web-dev' },
//       { display: 'Graphic Design', link: '/services/graphic-design' },
//       { display: 'SEO', link: '/services/seo' },
//     ],
//   },
//   { display: 'Contact', link: '/contact' },
// ];

// const DropdownMenu = () => {
//   return (
//     <ul className={styles.menu}>
//       {menuItems.map((item, index) => (
//         <li key={index} className={`${styles.menuItem} ${item.submenu && styles.hasSubmenu}`}>
//           <a href={item.link}>{item.display}</a>
//           {item.submenu && (
//             <ul className={styles.submenu}>
//               {item.submenu.map((subItem, subIndex) => (
//                 <li key={subIndex} className={styles.submenuItem}>
//                   <a href={subItem.link}>{subItem.display}</a>
//                 </li>
//               ))}
//             </ul>
//           )}
       
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default DropdownMenu;