import {InitialNode} from "./InitalNode";
import {GoalNode} from "./GoalNode";
import {ParallelingNode} from "./ParallelingNode";
import {ParallelingClosingNode} from "./ParallelingClosingNode";

export const nodeTypes = {
    parallel: ParallelingNode,
    parallelClosing: ParallelingClosingNode,
    initial: InitialNode,
    goal: GoalNode
}

export default nodeTypes;