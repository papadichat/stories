import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCss from "./style";

function Stories({ story }) {
  return (
    <CardCss>
      <div>{story.id}</div>
    </CardCss>
  );
}

export default Stories;
