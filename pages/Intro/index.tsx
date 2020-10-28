import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Intro.module.css";
import { useGithubApi } from "../api/githubClient";
import { PROJECT_COLUMN_DOCUMENT } from "../api/documents/PROJECT_COLUMN_DOCUMENT";

const DEFAULT_FIRST_SECTION = [
  { note: "Hello. My name is Kseniia." },
  { note: "I build things" },
  { note: "(mostly for web)" },
];

const VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Intro = () => {
  const { data } = useGithubApi(PROJECT_COLUMN_DOCUMENT);

  const firstSection = useMemo(
    () =>
      data?.user.project.columns.nodes.find((i) => i.name === "Intro").cards
        .nodes || DEFAULT_FIRST_SECTION,
    [DEFAULT_FIRST_SECTION, data]
  );

  return (
    <div className={styles.container}>
      {firstSection?.map((n, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          variants={VARIANTS}
          transition={{ duration: 0.5 }}
        >
          <p className={styles[`section-${index}`]}>{n.note}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Intro;
