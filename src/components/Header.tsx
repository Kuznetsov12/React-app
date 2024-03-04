import { FC, useState } from "react";
import { Button } from "../shared/ui/Button";
import { Typography } from "../shared/ui/Typography";
import { COLORS_TEXT } from "../shared/ui/Colors";



export const Header: FC =  function Header() {
    const [sum , setSum] = useState<number>(0)
    return (
    <header className={"bg-blue-600 py-3"}>
        <Typography size={20} weight={600} align="center" color = {COLORS_TEXT.main100}  >
        {`В корзине продуктов на сумму: ${sum}`} </Typography>

    </header>
    );
};


