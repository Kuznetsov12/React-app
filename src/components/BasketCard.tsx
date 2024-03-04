import  { FC, useState } from 'react';
import { Card } from '../shared/ui/Card';
import { Typography } from '../shared/ui/Typography';
import { Button } from '../shared/ui/Button';
import { Header } from './Header';

interface Props {
    title: string;
    price: number;
    
}

export const BasketCard: FC<Props> = function BasketCard(props) {
    const [count , setCount] = useState<number>(0);
    const [totalPrice , setTotalPrice] = useState<number>(props.price)
  return <li className='w-80'>

  <Card className={count < 0 ? "hidden" : "block"} >
    
    <Typography size = {20} weight={600} align='center' >
    {props.title}
   </Typography>
   <div className="flex items-center">
   <Button mode="dark" onClick={() => {setCount(count - 1 )}}>
        {"-"}
   </Button>
   <Typography size={20} weight={600} className='w-full flex justify-center items-center'>
    {count}
    
   </Typography>
   <Button mode="dark" onClick={() => {setCount(count + 1 )}}>
        {"+"}
   </Button>
   </div>

    <Typography size={20} weight={700} className='items-center justify-center flex' align='center'>
        {props.price * count}

    </Typography>

    <Button mode="dark" onClick={() => {
}} >
        {"Купить"}

    </Button>
  </Card>

  

</li>
};