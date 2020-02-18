import React from "react";

export default function Task({ task : {id, title, state}, onArchiveTask, onPinTask }) {
    return(
        <div className={'list-item ${state}'}>
            <label className="checkbox">
                <input type="checkbox" defaultChecked={state === 'TASK_ARCHIVED'} disabled={true} name="checked"></input>
                <span className="checkbox-custom" onClick={()=> onArchiveTask(id)}></span>
            </label>
            <input className="text" value={title} readOnly={true} />
        </div>
    );
}