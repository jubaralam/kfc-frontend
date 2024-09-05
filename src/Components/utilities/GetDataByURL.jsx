import axios from "axios";
import React, { useState } from "react";

const GetDataByURL = async (url) => {
  try {
    const getData = await axios.get(url);
    console.log(getData.data.data);

    return getData;
  } catch (error) {
    console.log(error.message);
  }
};

export default GetDataByURL;
