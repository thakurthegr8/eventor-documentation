import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Create Your Teams",
    Svg: require("@site/static/img/eventor_engineering_team.svg").default,
    description: (
      <>
        Eventor is designed to collaborate with your teams and track attendance.
      </>
    ),
  },
  {
    title: "Attendance With Just A Scan",
    Svg: require("@site/static/img/qr-eventor-rtdevop.svg").default,
    description: (
      <>
        No need to say <blockquote>"Present, sir"</blockquote> anymore. Just
        scan your QR-code on time and expect that your attendance is marked.
      </>
    ),
  },
  {
    title: "Visualise Your Attendance",
    Svg: require("@site/static/img/eventor_visual_data.svg").default,
    description: (
      <>
        Eventor uses your attendance data to give you best possible analytics in the form of graphs
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
