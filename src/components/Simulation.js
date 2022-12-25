import '../App.css';
import SimulationPanel from "./SimulationPanel";
import SimulationController from "./SimulationController";

function Simulation() {
    return (
        <div className="container w-full block flex-grow lg:flex lg:items-center lg:w-auto bg">
                <SimulationPanel/>
                <SimulationController/>
        </div>
    );
}

export default Simulation;
