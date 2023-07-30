import {VStack} from "@chakra-ui/react";
import Todo from "./todo";
import Header from "../../components/Header";
import {ITodo, STATUS} from "../../interfaces/response";


const todoData: ITodo[] = [
    {
        id: 1,
        status: STATUS.NEW,
        title: 'Implement Login',
        body: 'Create login funtion'
    },
    {
        id: 2,
        status: STATUS.NEW,
        title: 'Implement Login',
        body: 'Create login funtion'
    },
    {
        id: 1,
        status: STATUS.NEW,
        title: 'Implement Login',
        body: 'Create login funtion'
    },
]
const Todos = () => {
    return(
        <VStack w="100%" minH="100vh">
            <Header/>
            //TODO: create search component, create button link to page create Todo, create pagination component
            {
                todoData.map((value, index) => (
                    <Todo key={index}/>
                ))
            }
        </VStack>
    )
}

export default Todos;