interface footerProps {
    todos: Array<{
        id: number;
        text: string;
        isComplete: boolean;
    }>;
}

const Footer = (props: footerProps) => {
    let todos = props.todos;
    let sum = todos.filter((todo) => !todo.isComplete).length;

    return (
        <footer id='footer'>
            <div>
                <p className='mt-3'>Remaining To Do : {sum} </p>
            </div>
        </footer>
    );
};

export default Footer;