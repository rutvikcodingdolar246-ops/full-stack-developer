
import { useBioContext} from "./index";

export const Services = () => {
    const { name, age } = useBioContext();
   return <h1>Hello (Services). my name is {name}. I am {age} yrs old👋</h1>;
};
