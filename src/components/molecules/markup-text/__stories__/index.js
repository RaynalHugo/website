import { storiesOf } from "@storybook/react";
import React from "react";

import { MarkupSpan, MarkupH1, MarkupH2, MarkupP } from "..";

storiesOf("Molecules/Markup-Text/Span", module)
  .add("basic", () => <MarkupSpan>Test</MarkupSpan>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MarkupSpan color="#000000">#000000</MarkupSpan>
      <MarkupSpan color="#353535">#353535</MarkupSpan>
      <MarkupSpan color="#ff3535">#ff3535</MarkupSpan>
      <MarkupSpan color="#ff7070">#ff7070</MarkupSpan>
      <MarkupSpan color="#35ff35">#35ff35</MarkupSpan>
      <MarkupSpan color="#70ff70">#70ff70</MarkupSpan>
      <MarkupSpan color="#3535ff">#3535ff</MarkupSpan>
      <MarkupSpan color="#7070ff">#7070ff</MarkupSpan>
    </div>
  ));

storiesOf("Molecules/Markup-Text/H1", module)
  .add("basic", () => <MarkupH1>Test</MarkupH1>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MarkupH1 color="#000000">#000000</MarkupH1>
      <MarkupH1 color="#353535">#353535</MarkupH1>
      <MarkupH1 color="#ff3535">#ff3535</MarkupH1>
      <MarkupH1 color="#ff7070">#ff7070</MarkupH1>
      <MarkupH1 color="#35ff35">#35ff35</MarkupH1>
      <MarkupH1 color="#70ff70">#70ff70</MarkupH1>
      <MarkupH1 color="#3535ff">#3535ff</MarkupH1>
      <MarkupH1 color="#7070ff">#7070ff</MarkupH1>
    </div>
  ));

storiesOf("Molecules/Markup-Text/H2", module)
  .add("basic", () => <MarkupH2>Test</MarkupH2>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MarkupH2 color="#000000">#000000</MarkupH2>
      <MarkupH2 color="#353535">#353535</MarkupH2>
      <MarkupH2 color="#ff3535">#ff3535</MarkupH2>
      <MarkupH2 color="#ff7070">#ff7070</MarkupH2>
      <MarkupH2 color="#35ff35">#35ff35</MarkupH2>
      <MarkupH2 color="#70ff70">#70ff70</MarkupH2>
      <MarkupH2 color="#3535ff">#3535ff</MarkupH2>
      <MarkupH2 color="#7070ff">#7070ff</MarkupH2>
    </div>
  ));

storiesOf("Molecules/Markup-Text/P", module)
  .add("basic", () => <MarkupP>Test</MarkupP>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MarkupP color="#000000">#000000</MarkupP>
      <MarkupP color="#353535">#353535</MarkupP>
      <MarkupP color="#ff3535">#ff3535</MarkupP>
      <MarkupP color="#ff7070">#ff7070</MarkupP>
      <MarkupP color="#35ff35">#35ff35</MarkupP>
      <MarkupP color="#70ff70">#70ff70</MarkupP>
      <MarkupP color="#3535ff">#3535ff</MarkupP>
      <MarkupP color="#7070ff">#7070ff</MarkupP>
    </div>
  ));
