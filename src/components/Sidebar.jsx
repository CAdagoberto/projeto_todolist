import React, { useState } from "react";
import styles from './sidebar.module.css'
import { FiChevronDown, FiChevronRight, FiPlus } from "react-icons/fi";

const SidebarSection = ({ title, items }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.sidebarSection}>
      <div className={styles.sectionHeader} onClick={() => setOpen(!open)}>
        <span className={styles.icon}>{open ? <FiChevronDown /> : <FiChevronRight />}</span>
        <span className={styles.sectionTitle}>{title}</span>
        <span className={styles.plusIcon}><FiPlus /></span>
      </div>

      <div className={`${styles.sectionItemsWrapper} ${open ? styles.open : ''}`}>
        <ul className={styles.sectionItems}>
          {items.map((item, index) => (
            <li key={index} className={styles.sectionItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarSection
        title="Teams"
        items={["Marketing", "Design", "Development"]}
      />
      <SidebarSection
        title="Projects"
        items={["Blog Marketing", "Blog Design", "Blog Development"]}
      />
    </div>
  );
}
