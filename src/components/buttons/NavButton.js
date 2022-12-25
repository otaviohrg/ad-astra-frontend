import '../../App.css'

function NavButton({text, path}) {
    return (
        <a href={path} className={"text-xl font-medium text-stone-700 hover:text-stone-500"}>{text}</a>
    );
}

export default NavButton;
