export function disableDevTools() {
    const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (typeof hook !== 'object') {
        return;
    }

    const noop = () => {};
    for (let key in hook) { 
        hook[key] = (typeof hook[key] === 'function' ? noop : null);
    }
}

export function disableDevToolsWhen(condition) {
    let disable = false;
    if (typeof condition === 'function') {
        disable = !!condition();
    } else {
        disable = !!condition;
    }

    if (disable) {
        disableDevTools();
    }
}
