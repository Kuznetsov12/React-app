
import { FC , HTMLAttributes} from "react"
import { COLORS_BACKGROUND } from "./Colors"

export const Card: FC<HTMLAttributes<HTMLDivElement>> = function Card(props) {
    return (
        <div
        className={`${COLORS_BACKGROUND.main300} max-w-80 mx-auto p-5 mt-4 flex flex-col gap-5 rounded-lg ${props.className}`}
        >
        {props.children}
        </div>
    );
};

// export const CardBasket: FC<HTMLAttributes<HTMLDivElement>> = function CardBasket(props) {
//     return (
//         <div className={`${COLORS_BACKGROUND.main200} w-80 mx-auto p-5 mt-4 rounded-lg ${props.className}`}>
//             {props.children}
            
//         </div>
//     )
// }
// export const Wrapper: FC<HTMLAttributes<HTMLDivElement>> = function Wrapper(props){
//     return (
//         <div className={` flex justify-between items-center` }>
//             {props.children}
//         </div>
    
//     )
// }