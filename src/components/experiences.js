import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Experience extends withTwind(LitElement) {
  constructor() {
    super();
  }

  render() {
    return html`
      <section>
        <experience-section
          companyName="Applaudo"
          roleName="Ruby on Rails Developer"
          location="San Salvador, El Salvador"
          modality="Remote - Full Time"
          description="Nearshore Software Developing Company"
          interval="Jul 2022 - Present"
          achievements='[
                          "Collaborated with product and design teams to redesign the entire application interface, improving retention and user experience by 40%.",
                          "Designed and executed client-centric solutions, achieving a remarkable 80% reduction in QA refuse rate and elevating client satisfaction within sprints.",
                          "Optimized development process through Agile methodology, facilitating daily stand-ups, sprint planning, and retrospectives; utilized feedback to enhance team performance and achieve a 60% increase in development speed."
                        ]'
        ></experience-section>

        <experience-section
          companyName="Briq.mx"
          roleName="Software Engineer"
          location="Mexico City, Mexico"
          modality="Remote - Full Time"
          description="Crowdfunding web application for investing on Mexico real state."
          interval="Jul 2021 - Jul 2022"
          achievements='[
                          "Implemented new features following the TDD process to reduce error count by a 70% in production environment.",
                          "Proposed and led the upgrade migration of the application up to two major releases of Ruby and Rails reducing technical debt by a 50%.",
                          "Initiated the incorporation of coding best practices, including pair programming, resulting in a 30% acceleration in development speed and a 20% reduction in bug fixing duration."
                        ]'
        ></experience-section>

        <experience-section
          companyName="Turismoi"
          roleName="Ruby Developer"
          location="Lima, Peru"
          modality="Remote - Full Time"
          description="Digital Platform for distribution of tours and activities in LATAM."
          interval="Nov 2020 - Jul 2021"
          achievements='[
                          "Streamlined the refactoring of the legacy code reducing the technical debt by approximately 30% and maintaining scalability of the app.",
                          "Revamped Docker integration within the application, driving an impressive 80% improvement in developer experience; streamlined containerization process, reducing deployment time by 50% and minimizing compatibility issues."
                        ]'
        ></experience-section>
      </section>
    `;
  }
}
