import { FC, useState } from "react";
import { Header } from "./src/components/Header";
import { Button } from "./src/shared/ui/Button";
import { Card } from "./src/shared/ui/Card";
import { Typography } from "./src/shared/ui/Typography";
import { BasketCard } from "./src/components/BasketCard";

const data = [{
  title: "banana",
  price: 100,

},
{
  title: "watermelon",
  price: 50,
},
{
  title: "orange",
  price: 200,
}]
  


export const App: FC = function App(){
  const [count , setCount] = useState<number>(0);

  const list = data.map(item=><BasketCard key={item.title} title={item.title} price={item.price}/>)

  return ( <>
    
    <Header />
    <ul className="flex justify-between items-center w-100">
    {list}
    </ul>
    <div className="flex justify-between items-center">
    <Card>
      <Typography size={20} align={"center"} className={"mb-3"}>
        {"Функционал счетчика"}
      </Typography>
    <Button mode={"dark"} onClick={() => setCount(count +1)}>{"Прибавить count"}</Button>   
    </Card>
    </div>


  </>
  );
}


