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
          interval="Jul 22 - Present"
          achievements='[
                          "Development directly following the Product Owner to build scalable and high-quality solutions.",
                          "Decision making and construction of solutions focused directly on customer needs.",
                          "Agile Development with Daily standups and Sprint ceremonies that focus on what went right or wrong for constant feedback across the team"
                        ]'
        ></experience-section>

        <experience-section
          companyName="Briq.mx"
          roleName="Software Engineer"
          location="Mexico City, Mexico"
          modality="Remote - Full Time"
          description="Crowdfunding web application for investing on Mexican real state."
          interval="Jul '21 - Jul '22"
          achievements='[
                          "Focused on Test Driven Development with tools like RSpec and Capybara",
                          "Preparing and migrate the application for an upgrade to a major release of Ruby and Rails.",
                          "Performed coding methods like pair programming to refactor or build new features for the application."
                        ]'
        ></experience-section>

        <experience-section
          companyName="Turismoi"
          roleName="Ruby Developer"
          location="Lima, Peru"
          modality="Remote - Full Time"
          description="Digital Platform for the global sale and distribution of tours and activities in Latin America."
          interval="Nov '20 - Jul '21"
          achievements='[
                          "Update of legacy code, with a focus on building solutions for the clients, also helped improving the developer experience across applications.",
                          "Cloud Server management which hosted a Nginx web server.",
                          "Enhanced Docker integration due to legacy code, also improved developer experience inside the project"
                        ]'
        ></experience-section>
      </section>
    `;
  }
}
