import React from "react";

import { Card } from "./atoms/card";
import { MarkupP, MarkupH1, MarkupH2 } from "./molecules/markup-text";

import { Grey, Cyan } from "../style/colors";

export const Skills = props => {
  return (
    <React.Fragment>
      <Card style={{ minWidth: "75vw" }}>
        <MarkupH1
          codeProps={{ color: Cyan["400"], backgroundColor: Cyan["50"] }}
          color={Grey[900]}>
          Skills
        </MarkupH1>
      </Card>
      <div style={{ display: "flex" }}>
        <Card>
          <MarkupH2
            codeProps={{ color: Cyan["400"], backgroundColor: Cyan["50"] }}
            color={Grey[900]}>
            Web Design
          </MarkupH2>
          <MarkupP
            color={Grey[800]}
            codeProps={{ color: Cyan["400"], backgroundColor: Cyan["50"] }}>
            I started learning web design by myself, with Django. However, I
            learnt React when I joined Sterblue and that's what I'm using since.
          </MarkupP>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>emotion</li>
            <li>javascript</li>
            <li>babel</li>
            <li>cesium</li>
          </ul>
        </Card>
        <Card>
          <MarkupH2
            codeProps={{ color: Cyan["400"], backgroundColor: Cyan["50"] }}
            color={Grey[900]}>
            DevOps
          </MarkupH2>
          <MarkupP
            color={Grey[800]}
            codeProps={{ color: Cyan["400"], backgroundColor: Cyan["50"] }}>
            I like tools. Having good tools is awesome. Developer eXperience is
            now amazing, and one of the best tool I've used is CI/CD.
          </MarkupP>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
            <li>GitLab</li>
            <li>Netlify</li>
          </ul>
        </Card>
      </div>
    </React.Fragment>
  );
};
