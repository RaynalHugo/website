import { storiesOf } from "@storybook/react";
import React from "react";

import { Span, H1, H2, P } from "..";

storiesOf("Atoms/Text/Span", module)
  .add("basic", () => <Span>Test</Span>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Span color="#000000">#000000</Span>
      <Span color="#353535">#353535</Span>
      <Span color="#ff3535">#ff3535</Span>
      <Span color="#ff7070">#ff7070</Span>
      <Span color="#35ff35">#35ff35</Span>
      <Span color="#70ff70">#70ff70</Span>
      <Span color="#3535ff">#3535ff</Span>
      <Span color="#7070ff">#7070ff</Span>
    </div>
  ));

storiesOf("Atoms/Text/H1", module)
  .add("basic", () => <H1>Test</H1>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <H1 color="#000000">#000000</H1>
      <H1 color="#353535">#353535</H1>
      <H1 color="#ff3535">#ff3535</H1>
      <H1 color="#ff7070">#ff7070</H1>
      <H1 color="#35ff35">#35ff35</H1>
      <H1 color="#70ff70">#70ff70</H1>
      <H1 color="#3535ff">#3535ff</H1>
      <H1 color="#7070ff">#7070ff</H1>
    </div>
  ));

storiesOf("Atoms/Text/H2", module)
  .add("basic", () => <H2>Test</H2>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <H2 color="#000000">#000000</H2>
      <H2 color="#353535">#353535</H2>
      <H2 color="#ff3535">#ff3535</H2>
      <H2 color="#ff7070">#ff7070</H2>
      <H2 color="#35ff35">#35ff35</H2>
      <H2 color="#70ff70">#70ff70</H2>
      <H2 color="#3535ff">#3535ff</H2>
      <H2 color="#7070ff">#7070ff</H2>
    </div>
  ));

storiesOf("Atoms/Text/P", module)
  .add("basic", () => <P>Test</P>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <P color="#000000">#000000</P>
      <P color="#353535">#353535</P>
      <P color="#ff3535">#ff3535</P>
      <P color="#ff7070">#ff7070</P>
      <P color="#35ff35">#35ff35</P>
      <P color="#70ff70">#70ff70</P>
      <P color="#3535ff">#3535ff</P>
      <P color="#7070ff">#7070ff</P>
    </div>
  ));
