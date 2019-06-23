import React from "react";
import { WithAuth } from "../containers";


const NotFoundView = () => <h2> Page Not Found </h2>
const NotFound = WithAuth(NotFoundView)

export { NotFound }
