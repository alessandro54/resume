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
                          "Collaborated with product and design teams to redesign the entire application interface, improving retention and user experience by 40%",
                          "Crafted client-centric solutions, resulting in a 60% QA refuse rate and increasing their satisfaction within sprints.",
                          "Agile Development with Daily standup&lsquo;s and Sprint ceremonies that focus on what went right or wrong for constant feedback across the team"
                        ]'
        ></experience-section>

        <experience-section
          companyName="Briq.mx"
          roleName="Software Engineer"
          location="Mexico City, Mexico"
          modality="Remote - Full Time"
          description="Crowdfunding web application for investing on Mexico real state."
          interval="Jul 2021 - Jul '2022"
          achievements='[
                          "Developed features following the TDD process to reduce error count by a 70% in production environment",
                          "Prepared and migrated the application for an upgrade to a major release of Ruby and Rails reducing technical debt by a 33%.",
                          "Spearheaded the adoption of coding best practices, including pair programming, resulting in a 30% increase in development speed and a 20% decrease in time spent on bug fixing."
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
                          "Streamlined the refactoring of the legacy code reducing the technical debt by approximately 30% and maintaining scalability of the app",
                          "Significantly improved Docker integration within the application, resulting in a notable 80% enhancement of the developer experience."
                        ]'
        ></experience-section>
      </section>
    `;
  }
}
