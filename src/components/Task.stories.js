import React from "react";
import { action, actions } from "@storybook/addon-actions";
import Task from "./Task";

export default{
    component: Task,
    title: 'Task',
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actionsData = {
    onPinTask: actions('onPinTask'),
    onArchieveTask: actions('onArchieveTask')
};

export const Default = () => {
    return <Task task = {{...taskData}} {...actionsData} />
};

export const Pinned = () => {
    return <Task task = {{...taskData, state: 'TASK_PINNED' }} {...actionsData} />
};

export const Archieved = () => {
    return <Task task = {{...taskData, state: 'TASK_ARCHIEVED'}} {...actionsData} />
};