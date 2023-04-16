import {InitialNode} from "./InitalNode";
import {GoalNode} from "./GoalNode";
import {ParallelingNode} from "./ParallelingNode";
import {ParallelingClosingNode} from "./ParallelingClosingNode";
import {TaskNode} from "./TaskNode";

export const nodeTypes = {
    parallel: ParallelingNode,
    parallelClosing: ParallelingClosingNode,
    task: TaskNode,
    initial: InitialNode,
    goal: GoalNode
}

export default nodeTypes;