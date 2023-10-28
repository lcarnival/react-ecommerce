import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

export const CartWidget = ({ count }) => {

    return (
        <>
            <Button>
                <Cart4/>
            </Button>
            {count}
        </>
    );
};
